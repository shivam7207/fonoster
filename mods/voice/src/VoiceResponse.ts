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
import {
  Answer,
  DATA,
  Gather,
  GatherOptions,
  GatherResponse,
  GatherSource,
  Hangup,
  Mute,
  MuteDirection,
  MuteOptions,
  Play,
  PlayDtmf,
  PlayOptions,
  SGather,
  SGatherOptions,
  SGatherStream,
  Unmute,
  VerbResponse,
  VoiceRequest,
  VoiceSessionStream
} from "./verbs";

/**
 * @classdesc Use the VoiceResponse object, to construct advance Interactive
 * Voice Response (IVR) applications.
 *
 * @extends Verb
 * @example
 *
 * import { VoiceServer } from "@fonoster/voice";
 *
 * async function handler (request, response) {
 *   await response.answer();
 *   await response.play("sound:hello-world");
 * }
 *
 * const voiceServer = new VoiceServer({base: '/voiceapp'})
 * voiceServer.listen(handler, { port: 3000 })
 */
class VoiceResponse {
  voice: VoiceSessionStream;
  request: VoiceRequest;

  /**
   * Constructs a new VoiceResponse object.
   *
   * @param {VoiceRequest} request - Options to indicate the objects endpoint
   * @param {VoiceSessionStream} voice - The voice session stream
   * @see module:core:APIClient
   */
  constructor(request: VoiceRequest, voice: VoiceSessionStream) {
    this.voice = voice;
    this.request = request;
  }

  /**
   * Answer the call. Before running any other verb you
   * must run the anwer command.
   * @example
   *
   * async function handler (request, response) {
   *   await response.answer();
   * }
   */
  async answer(): Promise<VerbResponse> {
    await new Answer(this.request, this.voice).run();

    return { sessionRef: this.request.sessionRef };
  }

  /**
   * Hangup the call.
   * @example
   *
   * async function handler (request, response) {
   *  await response.hangup();
   * }
   */
  async hangup(): Promise<VerbResponse> {
    await new Hangup(this.request, this.voice).run();

    return { sessionRef: this.request.sessionRef };
  }

  /**
   * Play an audio in the call.
   *
   * @param {string} url - The URL of the media to play
   * @param {PlayOptions} options - Options to control the playback
   * @param {string} options.playbackRef - Playback identifier to use in Playback operations
   * @see Playback
   * @example
   *
   * async function handler (request, response) {
   *   await response.answer();
   *   await response.play("https://soundsserver:9000/sounds/hello-world.wav");
   * }
   */
  async play(url: string, options?: PlayOptions): Promise<VerbResponse> {
    await new Play(this.request, this.voice).run({
      ...options,
      sessionRef: this.request.sessionRef,
      url
    });

    return { sessionRef: this.request.sessionRef };
  }

  /**
   * Play a series of DTMF digits in a call.
   *
   * @param {string} digits -The DTMF digits to play (0-9, #, or *)
   * @example
   *
   * async function handler (request, response) {
   *  await response.answer();
   *  await response.playDtmf("1234");
   * }
   */
  async playDtmf(digits: string): Promise<VerbResponse> {
    await new PlayDtmf(this.request, this.voice).run({
      sessionRef: this.request.sessionRef,
      digits
    });

    return { sessionRef: this.request.sessionRef };
  }

  /**
   * Waits for data entry from the user's keypad or from a speech provider.
   *
   * @param {GatherOptions} options - Options to select the maximum number of digits, final character, and timeout
   * @param {number} options.maxDigits - Maximum number of digits to collect. Defaults to 1
   * @param {number} options.timeout - Milliseconds to wait before timeout. Defaults to 4000. Use zero for no timeout.
   * @param {string} options.finishOnKey - Optional last character to wait for. Defaults to '#'. It will not be included in the returned digits
   * @param {GatherSource} options.source - Where to listen as input source. This option accepts `DTMF` and `SPEECH`. A speech provider must be configure
   * when including the `SPEECH` source. You might inclue both with `SPEECH_AND_DTMF`. Defaults to `SPEECH_AND_DTMF`
   * @note When including `SPEECH` the default timeout is 10000 (10s).
   * @example
   *
   * async function handler (request, response) {
   *   await response.answer();
   *   const speech = await response.gather({ source: GatherSource.SPEECH, numDigits: 3 });
   *   console.log("speech: " + speech);
   *   await response.hangup();
   * }
   */
  async gather(
    options: GatherOptions = { source: GatherSource.SPEECH_AND_DTMF }
  ): Promise<GatherResponse> {
    const response = await new Gather(this.request, this.voice).run({
      sessionRef: this.request.sessionRef,
      ...options
    });

    return response.gatherResponse;
  }

  /**
   * Waits for data entry from the user's keypad or from a stream speech provider. This command is different from `gather`
   * in that it returns a stream of results instead of a single result. You can think of it as active listening.
   *
   * @param {GatherOptions} options - Options object for the SGather verb
   * @param {string} options.source - Where to listen as input source. This option accepts `dtmf` and `speech`. A speech provider must be configure
   * when including the `speech` source. You might inclue both with `dtmf,speech`. Defaults to `speech,dtmf`
   * @return {SGatherStream} The SGatherStream fires events via the `on` method for `transcription`, `dtmf`, and `error`. And the stream can be close
   * with the `close` function.
   * @see StreamSpeechProvider
   * @example
   *
   * async function handler (request, response) {
   *   await response.answer();
   *   const stream = await response.sgather({source: "dtmf,speech"});
   *
   *   stream.on("transcript", (text, isFinal) => {
   *      console.log("transcript: %s", text);
   *   })
   *
   *   stream.on("dtmf", digit => {
   *      console.log("digit: " + digit);
   *      if (digit === "#") stream.close();
   *   })
   * }
   */
  async sgather(
    options: SGatherOptions = { source: GatherSource.SPEECH_AND_DTMF }
  ): Promise<SGatherStream> {
    const listeners: {
      [event: string]: ((data: string) => void)[];
    } = {
      transcript: [],
      dtmf: []
    };

    await new SGather(this.request, this.voice).run({
      sessionRef: this.request.sessionRef,
      ...options
    });

    this.voice.on(DATA, (result) => {
      if (result.sgatherResponse?.digits) {
        listeners.dtmf.forEach((callback) =>
          callback(result.sgatherResponse.digits)
        );
      } else if (result.sgatherResponse?.speech) {
        listeners.transcript.forEach((callback) =>
          callback(result.sgatherResponse.speech)
        );
      }
    });

    return {
      on(event: "transcript" | "dtmf", callback: (data: string) => void) {
        if (!listeners[event]) {
          throw new Error(`Invalid event: ${event}`);
        }
        listeners[event].push(callback);
      },
      close() {
        listeners.transcript = [];
        listeners.dtmf = [];
        listeners.error = [];
      }
    };
  }

  /**
   * Mutes a call.
   *
   * @param {MuteOptions} options - Options to control the mute operation
   * @param {MuteDirection} options.direction - The direction to mute the channel (IN, OUT, BOTH). Default is BOTH
   * @see unmute
   * @example
   *
   * async function handler (request, response) {
   *   await response.answer();
   *   await response.mute();       // Will mute both directions
   * }
   */
  async mute(
    options: MuteOptions = { direction: MuteDirection.BOTH }
  ): Promise<VerbResponse> {
    const { direction } = options;

    await new Mute(this.request, this.voice).run({
      sessionRef: this.request.sessionRef,
      direction
    });

    return { sessionRef: this.request.sessionRef };
  }

  /**
   * Unmutes a call.
   *
   * @param {MuteOptions} options - Options to control the unmute operation
   * @param {MuteDirection} options.direction - The direction to unmute the call (IN, OUT, BOTH). Default is BOTH
   * @see mute
   * @example
   *
   * async function handler (request, response) {
   *   await response.answer();
   *   await response.unmute();     // Will unmute both directions
   * }
   */
  async unmute(
    options: MuteOptions = { direction: MuteDirection.BOTH }
  ): Promise<VerbResponse> {
    const { direction } = options;

    await new Unmute(this.request, this.voice).run({
      sessionRef: this.request.sessionRef,
      direction
    });

    return { sessionRef: this.request.sessionRef };
  }
}

export { VoiceResponse };
