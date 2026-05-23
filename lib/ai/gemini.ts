import { GoogleGenerativeAI } from '@google/generative-ai'
import { AIProviderAdapter, AIProcessRequest, buildSystemPrompt, buildUserPrompt } from './provider'

export class GeminiAdapter implements AIProviderAdapter {
  private client: GoogleGenerativeAI

  constructor() {
    this.client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')
  }

  async process(req: AIProcessRequest): Promise<string> {
    const modelName = req.model || process.env.GEMINI_MODEL || 'gemini-2.5-flash'
    const model = this.client.getGenerativeModel({ model: modelName })
    const prompt = `${buildSystemPrompt(req.mode)}\n\n${buildUserPrompt(req)}`
    const result = await model.generateContent(prompt)
    return result.response.text()
  }
}
