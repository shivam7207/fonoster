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
  SayOptions,
  StreamContent,
  VoiceClientConfig,
  VoiceIn,
  VoiceSessionStreamClient
} from "@fonoster/common";
import * as grpc from "@grpc/grpc-js";
import { SpeechResult } from "../stt/types";

type VoiceClient = {
  config: VoiceClientConfig;
  sendResponse: (command: VoiceIn) => void;
  on: (type: StreamContent, callback: (data: VoiceIn) => void) => void;
  connect: () => void;
  close: () => void;
  synthesize: (text: string, options: SayOptions) => Promise<string>;
  transcribe: () => Promise<SpeechResult>;
};

type TextToSpeech = {
  synthesize: (
    text: string,
    options: Record<string, unknown>
  ) => Promise<string>;
};

type SpeechToText = {
  transcribe: (stream: Stream) => Promise<SpeechResult>;
};

type GRPCClient = {
  createSession: (metadata: grpc.Metadata) => VoiceSessionStreamClient;
  close: () => void;
};

export { VoiceClient, TextToSpeech, SpeechToText, GRPCClient };
