/* eslint-disable new-cap */
/*
 * Copyright (C) 2024 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/fonoster
 *
 * This file is part of Fonoster
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Stream } from "stream";
import {
  GRPCError,
  SayOptions,
  StreamEvent,
  VoiceClientConfig,
  VoiceIn,
  VoiceSessionStreamClient
} from "@fonoster/common";
import { getLogger } from "@fonoster/logger";
import { AudioSocket } from "@fonoster/streams";
import * as grpc from "@grpc/grpc-js";
import { Client } from "ari-client";
import { pickPort } from "pick-port";
import { createExternalMediaConfig } from "./createExternalMediaConfig";
import { SpeechResult } from "./stt/types";
import { transcribeOnConnection } from "./transcribeOnConnection";
import {
  AriEvent,
  GRPCClient,
  SpeechToText,
  TextToSpeech,
  VoiceClient
} from "./types";
import { VoiceServiceClient } from "./VoiceServiceClientConst";

const logger = getLogger({ service: "apiserver", filePath: __filename });

class VoiceClientImpl implements VoiceClient {
  config: VoiceClientConfig;
  stream: Stream;
  voice: VoiceSessionStreamClient;
  tts: TextToSpeech;
  sst: SpeechToText;
  grpcClient: GRPCClient;
  audioSocket: AudioSocket;
  asStream: Stream;
  ari: Client;

  constructor(params: {
    ari: Client;
    config: VoiceClientConfig;
    tts: TextToSpeech;
    sst: SpeechToText;
  }) {
    const { config, tts, sst, ari } = params;
    this.config = config;
    this.stream = new Stream();
    this.tts = tts;
    this.sst = sst;
    this.ari = ari;
  }

  async connect() {
    this.grpcClient = new VoiceServiceClient(
      this.config.endpoint,
      grpc.credentials.createInsecure()
    ) as unknown as GRPCClient;

    const metadata = new grpc.Metadata();
    metadata.add("accessKeyId", this.config.accessKeyId);
    metadata.add("token", this.config.sessionToken);

    this.voice = this.grpcClient.createSession(metadata);

    this.voice.on(StreamEvent.DATA, (data: VoiceIn) => {
      this.stream.emit(data.content, data);
    });

    this.voice.write({ request: this.config });

    this.voice.on(StreamEvent.ERROR, (error: GRPCError) => {
      if (error.code === grpc.status.UNAVAILABLE) {
        this.stream.emit(
          StreamEvent.ERROR,
          new Error(`voice server not available at "${this.config.endpoint}"`)
        );
        return;
      }
      this.stream.emit(StreamEvent.ERROR, error);
    });

    const externalMediaPort = await pickPort({ type: "tcp" });

    this.setupAudioSocket(externalMediaPort);
    await this.setupExternalMedia(externalMediaPort);
  }

  setupAudioSocket(port: number) {
    this.audioSocket = new AudioSocket();

    this.audioSocket.onConnection(transcribeOnConnection(this.stream));

    this.audioSocket.listen(port, () => {
      logger.verbose("starting audio socket for voice client", {
        port,
        appRef: this.config.appRef
      });
    });
  }

  async setupExternalMedia(port: number) {
    const bridge = this.ari.Bridge();
    await bridge.create({ type: "mixing" });

    const channel = this.ari.Channel();

    channel.externalMedia(createExternalMediaConfig(port));

    channel.once(AriEvent.STASIS_START, async (_, channel) => {
      await bridge.addChannel({
        channel: [this.config.sessionRef, channel.id]
      });

      await channel.answer();
    });
  }

  on(type: string, callback: (data: VoiceIn) => void) {
    this.stream.on(type.toString(), (data: VoiceIn) => {
      callback(data[type]);
    });
  }

  sendResponse(response: VoiceIn): void {
    this.voice.write(response);
  }

  async synthesize(text: string, options: SayOptions): Promise<string> {
    const opts = {
      ...this.config.ttsOptions,
      ...options
    };
    return await this.tts.synthesize(text, opts);
  }

  async transcribe(): Promise<SpeechResult> {
    try {
      return await this.sst.transcribe(this.stream);
    } catch (e) {
      logger.warn("transcription error", e);
      return {} as unknown as SpeechResult;
    }
  }

  close() {
    try {
      this.grpcClient.close();
      this.audioSocket.close();
    } catch (e) {
      // Do nothing
    }
  }
}

export { VoiceClientImpl };
