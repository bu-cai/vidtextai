import { AIProvider, ProcessingMode } from '@/types'

export interface AIProcessRequest {
  transcript: string
  mode: ProcessingMode
  videoTitle?: string
  customPrompt?: string
  language?: string
}

export interface AIProviderAdapter {
  process(req: AIProcessRequest): Promise<string>
}

function buildSystemPrompt(mode: ProcessingMode): string {
  const prompts: Record<ProcessingMode, string> = {
    transcript: 'You are a transcript formatter. Clean and format the provided transcript text.',
    summary:
      'You are an expert content summarizer. Create a clear, concise summary of the YouTube video transcript. Include key points, main takeaways, and important details. Format with headers and bullet points.',
    blog:
      'You are an SEO expert blogger. Transform the YouTube transcript into a well-structured, engaging blog post. Include an SEO-friendly title, introduction, subheadings (H2/H3), body content, and conclusion. Make it informative and readable.',
    notes:
      'You are a professional note-taker. Extract the key points, important concepts, action items, and memorable quotes from this transcript. Format as structured study notes with clear sections.',
    shorts:
      'You are a YouTube Shorts/TikTok script writer. Create 3-5 short-form video scripts based on the most engaging parts of this transcript. Each script should be 30-60 seconds when read aloud. Include hook, main point, and call to action.',
  }
  return prompts[mode]
}

function buildUserPrompt(req: AIProcessRequest): string {
  const title = req.videoTitle ? `Video Title: "${req.videoTitle}"\n\n` : ''
  const custom = req.customPrompt ? `\nAdditional instructions: ${req.customPrompt}\n` : ''
  const lang = req.language && req.language !== 'en' ? `\nRespond in ${req.language}.` : ''

  return `${title}Transcript:\n${req.transcript}${custom}${lang}`
}

export { buildSystemPrompt, buildUserPrompt }

export async function getProvider(provider: AIProvider): Promise<AIProviderAdapter> {
  switch (provider) {
    case 'openai': {
      const { OpenAIAdapter } = await import('./openai')
      return new OpenAIAdapter()
    }
    case 'claude': {
      const { ClaudeAdapter } = await import('./claude')
      return new ClaudeAdapter()
    }
    case 'gemini': {
      const { GeminiAdapter } = await import('./gemini')
      return new GeminiAdapter()
    }
    default:
      throw new Error(`Unknown AI provider: ${provider}`)
  }
}

export function getDefaultProvider(): AIProvider {
  if (process.env.OPENAI_API_KEY) return 'openai'
  if (process.env.ANTHROPIC_API_KEY) return 'claude'
  if (process.env.GEMINI_API_KEY) return 'gemini'
  return 'openai'
}
