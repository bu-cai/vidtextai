import { ImageResponse } from 'next/og'

export const alt = 'VidText AI — YouTube Transcript & AI Content Platform'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #fff 0%, #fef2f2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          padding: '60px',
        }}
      >
        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <div style={{
            width: '64px', height: '64px', borderRadius: '16px',
            background: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#dc2626"/>
            </svg>
          </div>
          <span style={{ fontSize: '36px', fontWeight: '800', color: '#111827' }}>VidText AI</span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: '56px', fontWeight: '900', color: '#111827',
          textAlign: 'center', lineHeight: 1.15, margin: '0 0 20px',
        }}>
          Turn YouTube Videos Into
          <span style={{ color: '#dc2626', display: 'block' }}>Any Content Format</span>
        </h1>

        {/* Subline */}
        <p style={{ fontSize: '24px', color: '#6b7280', textAlign: 'center', margin: '0 0 40px', maxWidth: '800px' }}>
          Transcript · Summary · Blog Post · Study Notes · Shorts Script
        </p>

        {/* Badges */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {['Free to use', 'No sign-up', 'Powered by Gemini AI'].map(b => (
            <div key={b} style={{
              background: '#fff', border: '2px solid #fca5a5',
              borderRadius: '100px', padding: '10px 24px',
              fontSize: '20px', color: '#dc2626', fontWeight: '600',
            }}>{b}</div>
          ))}
        </div>

        {/* URL */}
        <p style={{ position: 'absolute', bottom: '32px', fontSize: '20px', color: '#9ca3af' }}>
          vidtextai.com
        </p>
      </div>
    ),
    { ...size }
  )
}
