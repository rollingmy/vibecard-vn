import { ImageResponse } from 'next/og';
import templates from '@/data/templates.json';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'VibeCard VN Template Preview';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Next.js 15 App Router dynamic params are Promises
type Params = Promise<{ id: string }>;

export default async function Image({ params }: { params: Params }) {
    const { id } = await params;
    const template = templates.find((t) => t.id === id);

    if (!template) {
        return new ImageResponse(
            (
                <div
                    style={{
                        fontSize: 48,
                        background: 'white',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    VibeCard VN - Not Found
                </div>
            ),
            { ...size }
        );
    }

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: template.color || '#fff',
                    position: 'relative',
                }}
            >
                {/* Card Container */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        padding: '40px 80px',
                        borderRadius: '24px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                        maxWidth: '85%',
                        textAlign: 'center',
                        border: '6px solid black',
                        gap: '20px'
                    }}
                >
                    <div style={{ fontSize: 24, fontWeight: 'bold', color: '#666', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        WEB TẠO ẢNH CHẾ
                    </div>

                    <div style={{ fontSize: 72, fontWeight: '900', color: 'black', lineHeight: 1, textTransform: 'uppercase' }}>
                        {template.name}
                    </div>

                    <div style={{ fontSize: 32, color: '#333', marginTop: 10 }}>
                        {template.description}
                    </div>

                    <div style={{ display: 'flex', marginTop: 30, padding: '10px 30px', background: 'black', color: 'white', borderRadius: 50, fontSize: 24, fontWeight: 'bold' }}>
                        TẠO NGAY TẠI VIBECARD.VN
                    </div>
                </div>

                {/* Branding Corner */}
                <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: 30, fontWeight: '900', color: 'white', textShadow: '2px 2px 0px black' }}>
                    VibeCard VN 🚀
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
