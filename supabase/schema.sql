-- YouTube video info cache
CREATE TABLE IF NOT EXISTS video_info (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  video_id TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  channel_name TEXT NOT NULL,
  channel_id TEXT,
  published_at TIMESTAMPTZ,
  duration TEXT,
  thumbnail_url TEXT,
  description TEXT,
  view_count TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Transcript cache
CREATE TABLE IF NOT EXISTS transcripts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  video_id TEXT UNIQUE NOT NULL,
  full_text TEXT NOT NULL,
  segments JSONB NOT NULL DEFAULT '[]',
  language TEXT NOT NULL DEFAULT 'en',
  source TEXT NOT NULL DEFAULT 'api',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- AI-processed results cache
CREATE TABLE IF NOT EXISTS processed_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  video_id TEXT NOT NULL,
  mode TEXT NOT NULL CHECK (mode IN ('transcript', 'summary', 'blog', 'notes', 'shorts')),
  provider TEXT NOT NULL CHECK (provider IN ('openai', 'claude', 'gemini')),
  content TEXT NOT NULL,
  language TEXT NOT NULL DEFAULT 'en',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_transcripts_video_id ON transcripts(video_id);
CREATE INDEX IF NOT EXISTS idx_processed_results_video_mode ON processed_results(video_id, mode, provider);
CREATE INDEX IF NOT EXISTS idx_video_info_video_id ON video_info(video_id);

-- Update trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_video_info_updated_at
  BEFORE UPDATE ON video_info
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_transcripts_updated_at
  BEFORE UPDATE ON transcripts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Enable RLS
ALTER TABLE video_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE transcripts ENABLE ROW LEVEL SECURITY;
ALTER TABLE processed_results ENABLE ROW LEVEL SECURITY;

-- Allow public read (cached data is public)
CREATE POLICY "Public read" ON video_info FOR SELECT USING (true);
CREATE POLICY "Public read" ON transcripts FOR SELECT USING (true);
CREATE POLICY "Public read" ON processed_results FOR SELECT USING (true);

-- Service role can write
CREATE POLICY "Service write" ON video_info FOR INSERT WITH CHECK (true);
CREATE POLICY "Service write" ON transcripts FOR INSERT WITH CHECK (true);
CREATE POLICY "Service write" ON processed_results FOR INSERT WITH CHECK (true);
CREATE POLICY "Service upsert" ON video_info FOR UPDATE USING (true);
CREATE POLICY "Service upsert" ON transcripts FOR UPDATE USING (true);
