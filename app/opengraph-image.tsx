import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ARUL SELVAN K M — Full-Stack & AI Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#0A0A0B',
          backgroundImage:
            'radial-gradient(circle at 75% 30%, rgba(34,211,238,0.18) 0%, rgba(10,10,11,0) 55%)',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundColor: 'rgba(34,211,238,0.12)',
              border: '1.5px solid rgba(34,211,238,0.5)',
              color: '#22D3EE',
              fontSize: 26,
              fontWeight: 700,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            AS
          </div>
          <div style={{ display: 'flex', color: '#6B7280', fontSize: 22, letterSpacing: 2 }}>
            PORTFOLIO
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 72,
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: 20,
          }}
        >
          ARUL SELVAN K M
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 34,
            color: '#22D3EE',
            marginBottom: 44,
          }}
        >
          Full-Stack Developer &amp; AI/ML Engineer
        </div>

        <div style={{ display: 'flex', gap: 14 }}>
          {['React', 'Next.js', 'Python', 'Machine Learning', 'AWS'].map((tag) => (
            <div
              key={tag}
              style={{
                display: 'flex',
                padding: '10px 20px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#D1D5DB',
                fontSize: 20,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
