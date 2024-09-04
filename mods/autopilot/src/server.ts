#!/usr/bin/env node
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
import { getLogger } from "@fonoster/logger";
import VoiceServer, { VoiceRequest, VoiceResponse } from "@fonoster/voice";
import { AssistantConfig, loadAndValidateAssistant } from "./assistants";
import { Autopilot } from "./Autopilot";
import { GROQ_API_KEY } from "./envs";
import { FilesKnowledgeBase } from "./knowledge/FilesKnowledgeBase";
import { GroqModel } from "./models/groq";
import { LanguageModelFactory } from "./models/LanguageModelFactory";
import { makeHangupTool } from "./tools";
import { LANGUAGE_MODEL_PROVIDER } from "./types";
import { SileroVad } from "./vad";
import { VoiceImpl } from "./voice";

const logger = getLogger({ service: "autopilot", filePath: __filename });

const skipIdentity = process.env.NODE_ENV === "dev";

// TODO: This must be replaced with data the API
const assistantPath = `${process.cwd()}/etc/assistant.example.json`;
const assistantConfig: AssistantConfig =
  loadAndValidateAssistant(assistantPath);

new VoiceServer({ skipIdentity }).listen(
  async (req: VoiceRequest, res: VoiceResponse) => {
    const { ingressNumber, sessionRef, appRef } = req;
    logger.verbose("voice request", { ingressNumber, sessionRef, appRef });

    const voice = new VoiceImpl(req.sessionRef, res);
    const vad = new SileroVad();

    const knowledgeBase = new FilesKnowledgeBase({
      files: [`${process.cwd()}/etc/sample.pdf`]
    });

    await knowledgeBase.load();

    const { conversationSettings } = assistantConfig;
    const { goodbyeMessage, systemTemplate } = conversationSettings;

    const languageModel = LanguageModelFactory.getLanguageModel(
      LANGUAGE_MODEL_PROVIDER.GROQ,
      {
        apiKey: GROQ_API_KEY!,
        model: GroqModel.LLAMA3_1_8B_INSTANT,
        maxTokens: 250,
        temperature: 0.4,
        systemTemplate,
        knowledgeBase,
        tools: [makeHangupTool(voice, goodbyeMessage)]
      }
    );

    const autopilot = new Autopilot({
      conversationSettings,
      voice,
      vad,
      languageModel
    });

    autopilot.start();
  }
);
