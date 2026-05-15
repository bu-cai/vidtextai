import Anthropic from '@anthropic-ai/sdk'
import { AIProviderAdapter, AIProcessRequest, buildSystemPrompt, buildUserPrompt } from './provider'

export class ClaudeAdapter implements AIProviderAdapter {
  private client: Anthropic

  constructor() {
    this.client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  }

  async process(req: AIProcessRequest): Promise<string> {
    const response = await this.client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      system: buildSystemPrompt(req.mode),
      messages: [{ role: 'user', content: buildUserPrompt(req) }],
    })
    const block = response.content[0]
    return block.type === 'text' ? block.text : ''
  }
}
