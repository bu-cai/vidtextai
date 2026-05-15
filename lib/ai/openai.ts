import OpenAI from 'openai'
import { AIProviderAdapter, AIProcessRequest, buildSystemPrompt, buildUserPrompt } from './provider'

export class OpenAIAdapter implements AIProviderAdapter {
  private client: OpenAI

  constructor() {
    this.client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  }

  async process(req: AIProcessRequest): Promise<string> {
    const response = await this.client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: buildSystemPrompt(req.mode) },
        { role: 'user', content: buildUserPrompt(req) },
      ],
      max_tokens: 4096,
      temperature: 0.7,
    })
    return response.choices[0]?.message?.content || ''
  }
}
