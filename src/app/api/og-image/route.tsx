import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f9fafb',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            margin: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '20px',
            }}
          >
            Task Scheduler
          </h1>
          <p
            style={{
              fontSize: '28px',
              color: '#4b5563',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            Drag & Drop Calendar for Efficient Task Management
          </p>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              fontSize: '20px',
              color: '#6b7280',
            }}
          >
            <span>📅 Weekly View</span>
            <span>🔄 Drag & Drop</span>
            <span>🎯 Task Tracking</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}