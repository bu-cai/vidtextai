import { AIProvider, ProcessingMode } from '@/types'

export interface AIProcessRequest {
  transcript: string
  mode: ProcessingMode
  videoTitle?: string
  customPrompt?: string
  language?: string
  model?: string  // explicit model override (avoids process.env mutation)
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
    thread:
      'You are a social media expert. Transform this YouTube video transcript into an engaging Twitter/X thread. Format as numbered tweets (1/, 2/, 3/ etc.). Each tweet must be under 280 characters. Start with a compelling hook tweet, write 5-8 content tweets with the key insights, and end with a summary/CTA tweet. Add 2-3 relevant hashtags in the final tweet only. Make it punchy and shareable.',
    linkedin:
      'You are a LinkedIn content strategist. Transform this YouTube video transcript into a high-performing LinkedIn post. Rules: (1) Start with a bold hook sentence — do NOT start with "I". (2) Use short paragraphs of 1-3 lines with blank lines between them. (3) Share a clear insight or lesson from the video. (4) End with an open question to drive comments. (5) Add 3-5 relevant hashtags on the last line. Target length: 150-250 words. Make it professional yet conversational.',
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
