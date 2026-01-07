import React from 'react';
import { TemplateProps } from './registry';

// Helper for Auto-Scaling Font Size (LIP Rule 1)
const getSafeFontSize = (text: string, baseSize: number, maxWidth: number) => {
    if (!text) return baseSize;
    // Approximate char width factor ~0.6 of fontSize for most sans-serif fonts
    const estimatedWidth = text.length * (baseSize * 0.6);
    if (estimatedWidth > maxWidth) {
        return Math.max(10, (maxWidth / text.length) * 1.6); // 1.6 factor to convert back from width
    }
    return baseSize;
};

export const OfficeLifeTemplates = {
    // ===================================
    // 1. CHIẾN THẦN DEADLINE (Time Bomb)
    // ===================================
    'chien-than-deadline': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-bomb">
                    <circle cx="150" cy="180" r="70" />
                </clipPath>
                <radialGradient id="bomb-fuse-glow">
                    <stop offset="0%" stopColor="#FFFF00" />
                    <stop offset="100%" stopColor="#FF4500" />
                </radialGradient>
            </defs>

            {/* Red-Orange Alarm Background */}
            <rect width="300" height="400" fill="#FF4500" />

            {/* Ticking Clock Background Overlay */}
            <circle cx="150" cy="200" r="140" fill="none" stroke="black" strokeWidth="2" opacity="0.1" />
            <line x1="150" y1="200" x2="150" y2="80" stroke="black" strokeWidth="4" opacity="0.1" />
            <line x1="150" y1="200" x2="220" y2="250" stroke="black" strokeWidth="4" opacity="0.1" />

            {/* Header: T-MINUS */}
            <rect x="50" y="30" width="200" height="40" fill="#000" rx="5" />
            <text x="150" y="55" textAnchor="middle" fill="#FF0000" fontFamily="monospace" fontWeight="bold" fontSize="20" letterSpacing="2">00:00:01</text>

            {/* Bomb Avatar Frame */}
            <circle cx="150" cy="180" r="80" fill="#111" stroke="black" strokeWidth="5" />
            <path d="M150,100 Q150,60 190,60" fill="none" stroke="#333" strokeWidth="6" /> {/* Fuse stem */}

            {/* Burning Fuse Spark */}
            <circle cx="190" cy="60" r="10" fill="url(#bomb-fuse-glow)">
                <animate attributeName="r" values="8;12;8" dur="0.2s" repeatCount="indefinite" />
            </circle>

            {userImage ? (
                <image
                    x="80" y="110" width="140" height="140"
                    href={userImage}
                    clipPath="url(#avatar-clip-bomb)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="195" textAnchor="middle" fontSize="60">💣</text>
            )}

            {/* Neubrutalism Text Box */}
            <rect x="25" y="290" width="250" height="60" fill="white" stroke="black" strokeWidth="4" shadow="5px 5px 0px black" />

            <text x="150" y="280" textAnchor="middle" fontSize="14" fontWeight="900" fill="black">TARGET:</text>
            {/* LIP Rule: Max Width 230px inside box */}
            <text x="150" y="325" textAnchor="middle" fontWeight="900" fontSize={Math.min(nameFontSize, 24)} fill="black" style={{ textTransform: "uppercase" }}>
                {userName || "CHIẾN THẦN"}
            </text>

            <text x="150" y="375" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white" stroke="black" strokeWidth="4" paintOrder="stroke">DEADLINE HIT!</text>
        </>
    ),

    // ===================================
    // 2. KẺ HỦY DIỆT BÁO CÁO (Shredder)
    // ===================================
    'ke-huy-diet-bao-cao': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-rect-shred">
                    <rect x="75" y="100" width="150" height="150" />
                </clipPath>
            </defs>

            {/* Grey Industrial Background */}
            <rect width="300" height="400" fill="#B0C4DE" />

            {/* Paper Sheet being shredded */}
            <rect x="25" y="20" width="250" height="300" fill="white" stroke="black" strokeWidth="2" />

            {/* Header Stamp */}
            <rect x="140" y="15" width="120" height="40" fill="none" stroke="red" strokeWidth="4" transform="rotate(-15 200 35)" opacity="0.6" />
            <text x="200" y="40" textAnchor="middle" fill="red" fontSize="18" fontWeight="bold" transform="rotate(-15 200 35)" opacity="0.6">REJECTED</text>

            {/* Avatar Photo (Top half clean) */}
            <rect x="75" y="100" width="150" height="150" fill="#eee" stroke="black" strokeWidth="1" />
            {userImage ? (
                <image
                    x="75" y="100" width="150" height="150"
                    href={userImage}
                    clipPath="url(#avatar-clip-rect-shred)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="180" textAnchor="middle" fontSize="50">📄</text>
            )}

            {/* Shredded Bottom Effect - Multiple Strips */}
            <g transform="translate(0, 320)">
                {/* Shredder Teeth/Machine Top */}
                <rect x="0" y="-10" width="300" height="20" fill="#333" />

                {/* Visual Strips of the Paper falling */}
                <rect x="30" y="0" width="20" height="70" fill="white" stroke="black" strokeWidth="1" transform="rotate(5)" />
                <rect x="60" y="5" width="20" height="60" fill="white" stroke="black" strokeWidth="1" transform="rotate(-2)" />
                <rect x="90" y="0" width="20" height="80" fill="white" stroke="black" strokeWidth="1" />
                <rect x="120" y="5" width="20" height="50" fill="white" stroke="black" strokeWidth="1" transform="rotate(3)" />
                <rect x="150" y="0" width="20" height="75" fill="white" stroke="black" strokeWidth="1" transform="rotate(-5)" />
                <rect x="180" y="5" width="20" height="65" fill="white" stroke="black" strokeWidth="1" />
                <rect x="210" y="0" width="20" height="55" fill="white" stroke="black" strokeWidth="1" transform="rotate(2)" />
                <rect x="240" y="5" width="20" height="70" fill="white" stroke="black" strokeWidth="1" />
            </g>

            {/* Name Overwritten on Paper */}
            <text x="150" y="270" textAnchor="middle" fontFamily="Courier Prime, monospace" fontSize="12" fill="black">REPORT BY:</text>
            <text x="150" y="295" textAnchor="middle" fontFamily="Courier Prime, monospace" fontWeight="bold" fontSize={Math.min(nameFontSize, 24)} fill="black" textDecoration="line-through">
                {userName || "NGƯỜI VIẾT BÁO"}
            </text>
        </>
    ),

    // ===================================
    // 3. SENIOR MÕM (Loudspeaker)
    // ===================================
    'senior-mom': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-speech">
                    <path d="M50,100 L250,100 L250,250 L180,250 L150,290 L120,250 L50,250 Z" />
                </clipPath>
            </defs>

            {/* Navy Blue Background */}
            <rect width="300" height="400" fill="#1a237e" />

            {/* Floating Empty Speech Bubbles */}
            <path d="M20,50 Q20,20 50,20 L100,20 Q130,20 130,50 Q130,80 100,80 L80,80 L60,100 L60,80 L50,80 Q20,80 20,50" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
            <path d="M200,80 Q200,50 230,50 L260,50 Q290,50 290,80 Q290,110 260,110 L250,110 L240,130 L230,110 L230,110 Q200,110 200,80" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />

            {/* Megaphone Graphic */}
            <path d="M20,320 L80,280 L80,360 L20,320 M80,300 L150,260 L150,380 L80,340" fill="#FFD700" stroke="black" strokeWidth="2" />
            <path d="M160,300 Q180,280 180,360" fill="none" stroke="white" strokeWidth="3" />
            <path d="M190,290 Q210,270 210,370" fill="none" stroke="white" strokeWidth="3" />
            <path d="M220,280 Q240,260 240,380" fill="none" stroke="white" strokeWidth="3" />

            {/* Main Speech Bubble Avatar */}
            <path d="M50,90 L250,90 L250,240 L180,240 L150,280 L120,240 L50,240 Z" fill="white" stroke="black" strokeWidth="4" />

            {userImage ? (
                <image
                    x="50" y="90" width="200" height="150"
                    href={userImage}
                    clipPath="url(#avatar-clip-speech)"
                    preserveAspectRatio="xMidYMid slice"
                    transform="translate(0, -10)" // Adjust to fit path
                />
            ) : (
                <text x="150" y="180" textAnchor="middle" fontSize="60">📢</text>
            )}

            {/* Text inside a "Captions" box style */}
            <rect x="50" y="340" width="200" height="40" fill="black" />
            <text x="150" y="365" textAnchor="middle" fill="white" fontWeight="bold" fontSize={Math.min(nameFontSize, 20)} fontFamily="sans-serif">
                {userName ? `[${userName}]` : "[SENIOR MÕM]"}
            </text>
            <text x="150" y="385" textAnchor="middle" fill="#aaa" fontSize="10">SPEAKING LOUDLY...</text>
        </>
    ),

    // ===================================
    // 4. INTERN NGÂY THƠ (Crayon)
    // ===================================
    'intern-ngay-tho': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-crayon">
                    {/* Rough circle path */}
                    <path d="M80,180 Q85,130 150,125 Q215,130 220,180 Q215,230 150,235 Q85,230 80,180 Z" />
                </clipPath>
            </defs>

            {/* White Paper Background with Grid */}
            <rect width="300" height="400" fill="#FFF" />
            <path d="M0,20 L300,20 M0,40 L300,40 M0,60 L300,60" stroke="#add8e6" strokeWidth="1" /> {/* Notebook lines top */}

            {/* Scribbles */}
            <path d="M20,350 Q40,300 60,350 T100,350 T140,350" fill="none" stroke="#FF6347" strokeWidth="3" opacity="0.7" />
            <circle cx="250" cy="50" r="30" fill="none" stroke="#FFD700" strokeWidth="3" />
            <path d="M230,70 L270,30 M230,30 L270,70" stroke="#FFD700" strokeWidth="2" /> {/* Sun? */}

            {/* Avatar Frame - Messy Crayon Look */}
            <path d="M75,180 Q80,125 150,120 Q220,125 225,180 Q220,235 150,240 Q80,235 75,180 Z"
                fill="none" stroke="#32CD32" strokeWidth="6" strokeLinecap="round" strokeDasharray="10 5" />

            {userImage ? (
                <image
                    x="75" y="120" width="150" height="120"
                    href={userImage}
                    clipPath="url(#avatar-clip-crayon)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="195" textAnchor="middle" fontSize="50">👶</text>
            )}

            {/* "Name Tag" Sticker */}
            <rect x="60" y="270" width="180" height="60" fill="white" stroke="blue" strokeWidth="2" rx="10" transform="rotate(-3 150 270)" />
            <circle cx="150" cy="260" r="5" fill="#ccc" /> {/* Pin */}

            <text x="150" y="285" textAnchor="middle" fill="blue" fontSize="12" fontFamily="Comic Sans MS, cursive">HELLO, my name is</text>
            <text x="150" y="315" textAnchor="middle" fill="black" fontFamily="Comic Sans MS, cursive" fontWeight="bold" fontSize={Math.min(nameFontSize, 24)} transform="rotate(-3 150 270)">
                {userName || "BÉ INTERN"}
            </text>

            <text x="150" y="380" textAnchor="middle" fill="red" fontSize="14" fontFamily="monospace">git push --force ??</text>
        </>
    ),

    // ===================================
    // 5. DRAMA QUEEN CÔNG SỞ (Theater)
    // ===================================
    'drama-queen-cong-so': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-arch">
                    <path d="M50,150 A100,100 0 0,1 250,150 L250,300 L50,300 Z" />
                </clipPath>
            </defs>

            {/* Stage Floor Background */}
            <rect width="300" height="400" fill="#2c0000" />
            <rect x="0" y="350" width="300" height="50" fill="#3e2723" /> {/* Floor */}

            {/* Red Curtains */}
            <path d="M0,0 L60,0 L60,350 Q30,250 0,350 Z" fill="#b71c1c" />
            <path d="M300,0 L240,0 L240,350 Q270,250 300,350 Z" fill="#b71c1c" />
            <rect x="0" y="0" width="300" height="40" fill="#880e4f" /> {/* Valance */}

            {/* Spotlight on Center */}
            <path d="M150,0 L50,350 L250,350 Z" fill="white" opacity="0.1" />

            {/* Avatar Center Stage */}
            {userImage ? (
                <image
                    x="50" y="100" width="200" height="200"
                    href={userImage}
                    clipPath="url(#avatar-clip-arch)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="220" textAnchor="middle" fontSize="60">🎭</text>
            )}

            {/* Comedy/Tragedy Masks Icons Small */}
            <text x="80" y="330" fontSize="30" transform="rotate(-15)">😂</text>
            <text x="220" y="330" fontSize="30" transform="rotate(15)">😭</text>

            {/* Name Marquee */}
            <rect x="40" y="50" width="220" height="50" fill="#ffeb3b" stroke="#f57f17" strokeWidth="3" rx="5" />
            <circle cx="50" cy="55" r="3" fill="white" /><circle cx="250" cy="55" r="3" fill="white" />
            <circle cx="50" cy="95" r="3" fill="white" /><circle cx="250" cy="95" r="3" fill="white" />

            <text x="150" y="72" textAnchor="middle" fontSize="10" fontWeight="bold" fill="black">STARRING:</text>
            <text x="150" y="92" textAnchor="middle" fontWeight="900" fontSize={Math.min(nameFontSize, 22)} fill="#d50000" style={{ textShadow: "1px 1px 0px white" }}>
                {userName || "DRAMA QUEEN"}
            </text>

            <text x="150" y="380" textAnchor="middle" fill="#ffccbc" fontSize="12" fontStyle="italic">"And the Oscar goes to..."</text>
        </>
    ),
    // ===================================
    // 6. LƯƠNG THÁNG 5 TRIỆU (Poverty)
    // ===================================
    'luong-thang-5-trieu': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-broken">
                    <circle cx="150" cy="150" r="70" />
                </clipPath>
                <filter id="grayscale">
                    <feColorMatrix type="saturate" values="0" />
                </filter>
            </defs>

            {/* Gray Dusty Background */}
            <rect width="300" height="400" fill="#808080" />

            {/* Cobwebs Corners */}
            <path d="M0,0 L50,0 L0,50 Z" fill="none" stroke="#ddd" strokeWidth="1" opacity="0.5" />
            <path d="M0,20 L20,0 M0,40 L40,0" stroke="#ddd" strokeWidth="1" opacity="0.5" />

            <path d="M300,0 L250,0 L300,50 Z" fill="none" stroke="#ddd" strokeWidth="1" opacity="0.5" />
            <path d="M300,20 L280,0 M300,40 L260,0" stroke="#ddd" strokeWidth="1" opacity="0.5" />

            {/* Wallet with Moth */}
            <path d="M100,280 L200,280 L200,340 L100,340 Z" fill="#5D4037" stroke="black" strokeWidth="2" rx="5" />
            <path d="M100,290 L200,290" stroke="black" strokeWidth="1" /> {/* Fold */}
            <circle cx="150" cy="310" r="10" fill="black" opacity="0.3" /> {/* Empty hole */}

            <text x="180" y="270" fontSize="20">🦋</text> {/* Moth flying away */}

            {/* Desaturated Avatar */}
            <circle cx="150" cy="150" r="75" fill="#555" stroke="black" strokeWidth="1" />
            {userImage ? (
                <image
                    x="80" y="80" width="140" height="140"
                    href={userImage}
                    clipPath="url(#avatar-clip-broken)"
                    preserveAspectRatio="xMidYMid slice"
                    filter="url(#grayscale)"
                    opacity="0.8"
                />
            ) : (
                <text x="150" y="165" textAnchor="middle" fontSize="50" filter="url(#grayscale)">💸</text>
            )}

            {/* Balance Info */}
            <rect x="50" y="220" width="200" height="40" fill="white" stroke="black" strokeWidth="1" />
            <text x="60" y="245" fontSize="14" fontFamily="monospace" fill="black">BAL:</text>
            <text x="240" y="245" textAnchor="end" fontSize="14" fontFamily="monospace" fill="red" fontWeight="bold">-50.000₫</text>

            <text x="150" y="370" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#333" fontFamily="sans-serif">
                {userName || "NGHÈO BỀN VỮNG"}
            </text>
        </>
    ),

    // ===================================
    // 7. OTP CÔNG SỞ (Secret Chat)
    // ===================================
    'otp-cong-so': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-chat-circle">
                    <circle cx="150" cy="120" r="60" />
                </clipPath>
                <filter id="blur-bg">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                </filter>
            </defs>

            {/* Blurred Background simulating office app interface */}
            <g filter="url(#blur-bg)">
                <rect width="300" height="400" fill="#f0f0f0" />
                <rect x="10" y="10" width="50" height="380" fill="#3F0E40" /> {/* Sidebar */}
                <rect x="70" y="10" width="220" height="380" fill="white" />
                <text x="80" y="40" fontSize="10" fill="#aaa"># general</text>
                <text x="80" y="60" fontSize="10" fill="#aaa"># random</text>
                <text x="80" y="80" fontSize="10" fill="#aaa"># gossip-confidential</text>
            </g>

            {/* Pop-up "Secret Chat" Window */}
            <rect x="25" y="80" width="250" height="280" fill="white" stroke="#ccc" strokeWidth="1" rx="5" shadow="0 10px 20px rgba(0,0,0,0.2)" />

            {/* Chat Header */}
            <rect x="25" y="80" width="250" height="40" fill="#3F0E40" rx="5" />
            <text x="40" y="105" fill="white" fontWeight="bold" fontSize="12">🔒 Direct Message</text>
            <circle cx="260" cy="100" r="5" fill="#2E8B57" /> {/* Online status */}

            {/* Avatar inside chat */}
            {userImage ? (
                <image
                    x="90" y="140" width="120" height="120"
                    href={userImage}
                    clipPath="url(#avatar-clip-chat-circle)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="210" textAnchor="middle" fontSize="50">🤫</text>
            )}

            {/* Message Bubble Name */}
            <path d="M40,280 L200,280 L200,330 L50,330 L40,340 Z" fill="#eee" />
            <text x="50" y="300" fontSize="10" fill="#555" fontWeight="bold">Sent just now:</text>

            <text x="125" y="320" textAnchor="middle" fontSize={Math.min(nameFontSize, 20)} fontWeight="bold" fill="#333">
                {userName || "CRUSH CÔNG SỞ"}
            </text>

            {/* Heart Reaction */}
            <rect x="210" y="310" width="40" height="20" rx="10" fill="#fff" stroke="#ddd" strokeWidth="1" />
            <text x="230" y="323" textAnchor="middle" fontSize="12">❤️ 1</text>
        </>
    ),

    // ===================================
    // 8. TRƯỞNG PHÒNG HỆ DÙ (Chill Boss)
    // ===================================
    'truong-phong-he-du': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-umbrella">
                    <path d="M50,200 A100,50 0 0,1 250,200 L250,250 L50,250 Z" />
                </clipPath>
            </defs>

            {/* Zen Tea Green Background */}
            <rect width="300" height="400" fill="#e0f2f1" />

            {/* Bamboo Stalks Background */}
            <rect x="20" y="0" width="10" height="400" fill="#a5d6a7" />
            <rect x="270" y="0" width="10" height="400" fill="#a5d6a7" />

            {/* Umbrella Graphic covering Avatar */}
            <path d="M50,150 A100,60 0 0,1 250,150" fill="none" stroke="#009688" strokeWidth="4" />
            <line x1="150" y1="150" x2="150" y2="90" stroke="#009688" strokeWidth="4" />
            <path d="M150,90 C200,90 250,150 250,150" fill="none" stroke="#80cbc4" strokeWidth="2" />
            <path d="M150,90 C100,90 50,150 50,150" fill="none" stroke="#80cbc4" strokeWidth="2" />

            {/* Avatar "Under Umbrella" */}
            {userImage ? (
                <image
                    x="50" y="150" width="200" height="150"
                    href={userImage}
                    clipPath="url(#avatar-clip-umbrella)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="250" textAnchor="middle" fontSize="60">⛱️</text>
            )}

            {/* Tea Cup and Steam */}
            <text x="150" y="320" textAnchor="middle" fontSize="40">🍵</text>
            <path d="M140,280 Q140,270 150,270 Q160,270 160,260" fill="none" stroke="#aaa" strokeWidth="2" opacity="0.6" />
            <path d="M160,280 Q160,270 170,270 Q180,270 180,260" fill="none" stroke="#aaa" strokeWidth="2" opacity="0.6" />

            <text x="150" y="50" textAnchor="middle" fontSize="16" fontFamily="sans-serif" fill="#00796b" fontWeight="bold">ZEN MASTER</text>

            <text x="150" y="370" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#004d40" style={{ textTransform: "uppercase" }}>
                {userName || "HỆ DÙ CHE"}
            </text>
        </>
    ),

    // ===================================
    // 9. THỢ CODE DẠO (Hacker)
    // ===================================
    'tho-code-dao': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-crt">
                    <rect x="50" y="100" width="200" height="160" rx="20" />
                </clipPath>
                <linearGradient id="matrix-rain" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0F0" stopOpacity="0" />
                    <stop offset="50%" stopColor="#0F0" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#0F0" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* Black Background */}
            <rect width="300" height="400" fill="black" />

            {/* Matrix Rain Text Effect */}
            <text x="20" y="50" fill="url(#matrix-rain)" fontSize="14" fontFamily="monospace" writingMode="tb">1010101</text>
            <text x="280" y="80" fill="url(#matrix-rain)" fontSize="14" fontFamily="monospace" writingMode="tb">010011</text>
            <text x="50" y="300" fill="url(#matrix-rain)" fontSize="14" fontFamily="monospace" writingMode="tb">CODE</text>
            <text x="250" y="250" fill="url(#matrix-rain)" fontSize="14" fontFamily="monospace" writingMode="tb">BUG</text>

            {/* Retro CRT Monitor Frame */}
            <rect x="40" y="90" width="220" height="180" rx="20" fill="#111" stroke="#333" strokeWidth="5" />
            <rect x="50" y="100" width="200" height="160" rx="15" fill="#000" />

            {/* Avatar on Screen */}
            {userImage ? (
                <image
                    x="50" y="100" width="200" height="160"
                    href={userImage}
                    clipPath="url(#avatar-clip-crt)"
                    preserveAspectRatio="xMidYMid slice"
                    opacity="0.8"
                />
            ) : (
                <text x="150" y="190" textAnchor="middle" fontSize="60" fill="#0F0">💻</text>
            )}

            {/* Scanlines Overlay */}
            <path d="M50,110 L250,110 M50,130 L250,130 M50,150 L250,150 M50,170 L250,170 M50,190 L250,190 M50,210 L250,210 M50,230 L250,230 M50,250 L250,250"
                stroke="black" strokeWidth="1" opacity="0.3" />

            <text x="150" y="60" textAnchor="middle" fill="#0F0" fontFamily="monospace" fontWeight="bold" fontSize="16">{`> sudo make_money`}</text>

            <text x="150" y="320" textAnchor="middle" fontFamily="Courier Prime, monospace" fontWeight="bold" fill="#0F0" fontSize={Math.min(nameFontSize, 24)} style={{ textShadow: "0 0 5px #0F0" }}>
                {userName || "DEV FULL-STACK"}
            </text>

            <text x="150" y="350" textAnchor="middle" fill="#0F0" fontSize="10" fontFamily="monospace">ERROR: 0 SLEEP DETECTED</text>
        </>
    ),

    // ===================================
    // 10. CẦU THỦY TINH (Fragile)
    // ===================================
    'cau-thuy-tinh': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-shattered">
                    <rect x="75" y="100" width="150" height="150" />
                </clipPath>
            </defs>

            {/* Clean White Background */}
            <rect width="300" height="400" fill="#F8F8F8" />

            {/* Cracks Graphics */}
            <path d="M10,10 L80,80 L120,40" fill="none" stroke="#ddd" strokeWidth="1" />
            <path d="M250,380 L200,300 L280,280" fill="none" stroke="#ddd" strokeWidth="1" />
            <path d="M150,200 L120,250 L180,240" fill="none" stroke="white" strokeWidth="2" /> {/* Subtle crack over content */}

            {/* FRAGILE Sticker */}
            <rect x="200" y="40" width="80" height="30" fill="#d32f2f" transform="rotate(20 240 55)" />
            <text x="240" y="60" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12" transform="rotate(20 240 55)">FRAGILE</text>

            <rect x="20" y="320" width="100" height="40" fill="#d32f2f" transform="rotate(-5 70 340)" />
            <text x="70" y="345" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10" transform="rotate(-5 70 340)">HANDLE WITH CARE</text>

            {/* Avatar */}
            <rect x="70" y="95" width="160" height="160" fill="none" stroke="#eee" strokeWidth="1" />
            {userImage ? (
                <image
                    x="75" y="100" width="150" height="150"
                    href={userImage}
                    clipPath="url(#avatar-clip-shattered)"
                    preserveAspectRatio="xMidYMid slice"
                    opacity="0.9"
                />
            ) : (
                <text x="150" y="185" textAnchor="middle" fontSize="60">❄️</text>
            )}

            {/* "Broken Glass" Overlay on Avatar */}
            <path d="M75,100 L125,150 M225,250 L185,210" stroke="white" strokeWidth="1" opacity="0.6" />

            <text x="150" y="290" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="100" fill="#black" fontFamily="Helvetica Neue, sans-serif" letterSpacing="1">
                {userName || "TÂM HỒN MỎNG MANH"}
            </text>

            <text x="150" y="380" textAnchor="middle" fill="#9e9e9e" fontSize="10">DO NOT SHAKE</text>
        </>
    ),

    // ===================================
    // 62. DIGITAL NOMAD (Work)
    // ===================================
    'digital-nomad': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-laptop">
                    <path d="M75,100 L225,100 L225,230 L75,230 Z" />
                </clipPath>
            </defs>

            {/* Beach/Cafe Blur Background */}
            <linearGradient id="beach-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4fc3f7" /> {/* Sky */}
                <stop offset="50%" stopColor="#fff9c4" /> {/* Sand */}
            </linearGradient>
            <rect width="300" height="400" fill="url(#beach-gradient)" />

            {/* Palm Tree Shadow */}
            <path d="M300,0 L150,0 Q180,100 300,150 Z" fill="black" opacity="0.1" />

            {/* Cafe Table */}
            <path d="M-20,400 L320,400 L280,300 L20,300 Z" fill="#795548" stroke="#5d4037" strokeWidth="2" />

            {/* Laptop Object */}
            <path d="M50,250 L250,250 L250,90 L50,90 Z" fill="#cfd8dc" stroke="#546e7a" strokeWidth="2" rx="10" /> {/* Screen Back */}
            <path d="M60,100 L240,100 L240,240 L60,240 Z" fill="#111" /> {/* Screen Black */}

            {/* Base of laptop */}
            <path d="M40,250 L260,250 L280,270 L20,270 Z" fill="#b0bec5" stroke="#546e7a" strokeWidth="1" />
            <path d="M120,260 L180,260" stroke="#78909c" strokeWidth="2" /> {/* Trackpad */}

            {/* Avatar ON SCREEN */}
            {userImage ? (
                <image
                    x="60" y="100" width="180" height="140"
                    href={userImage}
                    clipPath="url(#avatar-clip-laptop)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="180" textAnchor="middle" fontSize="50">💻</text>
            )}

            {/* Coffee Cup */}
            <circle cx="250" cy="320" r="15" fill="white" stroke="#ccc" strokeWidth="1" />
            <ellipse cx="250" cy="320" rx="12" ry="12" fill="#6d4c41" /> {/* Coffee */}
            <path d="M265,320 Q275,320 270,330" fill="none" stroke="white" strokeWidth="2" /> {/* Handle */}

            {/* Location Tag */}
            <rect x="80" y="40" width="140" height="30" rx="15" fill="white" opacity="0.8" />
            <text x="150" y="60" textAnchor="middle" fontSize="12" fill="#0277bd" fontWeight="bold">📍 Bali, Indonesia</text>

            <text x="150" y="360" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#3e2723" fontFamily="sans-serif">
                {userName || "DIGITAL NOMAD"}
            </text>

            <text x="150" y="380" textAnchor="middle" fontSize="10" fill="#5d4037" fontStyle="italic">"My office is everywhere"</text>
        </>
    ),
};
