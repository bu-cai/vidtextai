export type Database = {
  public: {
    Tables: {
      transcripts: {
        Row: {
          id: string
          video_id: string
          full_text: string
          segments: unknown
          language: string
          source: string
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['transcripts']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['transcripts']['Insert']>
      }
      processed_results: {
        Row: {
          id: string
          video_id: string
          mode: string
          provider: string
          content: string
          language: string
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['processed_results']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['processed_results']['Insert']>
      }
      video_info: {
        Row: {
          id: string
          video_id: string
          title: string
          channel_name: string
          channel_id: string
          published_at: string
          duration: string
          thumbnail_url: string
          description: string
          view_count: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['video_info']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['video_info']['Insert']>
      }
    }
  }
}
