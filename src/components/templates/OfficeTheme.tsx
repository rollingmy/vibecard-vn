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
                    <rect x="64" y="90" width="172" height="172" />
                </clipPath>
                {/* Coffee Stain Gradient */}
                <radialGradient id="coffee-stain-grad" cx="50%" cy="50%" r="50%">
                    <stop offset="80%" stopColor="#6d4c41" stopOpacity="0" />
                    <stop offset="95%" stopColor="#5d4037" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#4e342e" stopOpacity="0.6" />
                </radialGradient>
            </defs>

            {/* Grey Industrial Background */}
            <rect width="300" height="400" fill="#B0C4DE" />

            {/* Paper Sheet being shredded */}
            <rect x="25" y="20" width="250" height="320" fill="white" stroke="black" strokeWidth="2" />

            {/* 1. THÊM CHI TIẾT "HÀNH LÀ CHÍNH" */}
            {/* Coffee Stains */}
            <circle cx="240" cy="80" r="30" fill="url(#coffee-stain-grad)" style={{ mixBlendMode: "multiply" }} />
            <circle cx="50" cy="280" r="40" fill="url(#coffee-stain-grad)" style={{ mixBlendMode: "multiply" }} opacity="0.7" />

            {/* Paper Clip */}
            <path d="M40,10 L40,40 Q40,50 50,50 Q60,50 60,40 L60,15" fill="none" stroke="silver" strokeWidth="3" />
            <path d="M260,10 L260,35 Q260,45 250,45 Q240,45 240,35 L240,20" fill="none" stroke="silver" strokeWidth="3" />


            {/* Header Stamp */}
            {/* 4. HIỆU ỨNG HỦY GIẤY - FAILED STAMP */}
            <g transform="translate(150, 200) rotate(-20)" opacity="0.4">
                <rect x="-80" y="-30" width="160" height="60" fill="none" stroke="red" strokeWidth="8" rx="5" />
                <text x="0" y="15" textAnchor="middle" fill="red" fontSize="40" fontWeight="900" fontFamily="Impact, sans-serif">FAILED</text>
            </g>

            {/* 2. CẤU TRÚC LẠI AVATAR (The Tired Employee) - Bigger (+15%) & Thick Border */}
            <rect x="64" y="90" width="172" height="172" fill="#eee" stroke="black" strokeWidth="4" />

            {userImage ? (
                <image
                    x="64" y="90" width="172" height="172"
                    href={userImage}
                    clipPath="url(#avatar-clip-rect-shred)"
                    preserveAspectRatio="xMidYMid slice"
                    style={{ filter: "contrast(1.1) grayscale(0.2)" }} // Tired look
                />
            ) : (
                <text x="150" y="180" textAnchor="middle" fontSize="60">📄</text>
            )}

            {/* Shredded Bottom Effect - Irregular & Curved */}
            <g transform="translate(0, 320)">
                {/* Shredder Teeth/Machine Top */}
                <rect x="0" y="-10" width="300" height="40" fill="#333" />

                {/* Visual Strips of the Paper falling - Irregular */}
                <path d="M30,0 L30,80 Q40,90 50,80 L50,0" fill="white" stroke="black" strokeWidth="1" />
                <path d="M60,0 L60,60 Q65,70 70,60 L70,0" fill="white" stroke="black" strokeWidth="1" />
                <path d="M80,0 L80,90 Q90,100 100,85 L100,0" fill="white" stroke="black" strokeWidth="1" />
                <path d="M110,0 L110,70 Q115,80 125,75 L120,0" fill="white" stroke="black" strokeWidth="1" />

                <path d="M140,0 L140,85 Q150,95 160,80 L160,0" fill="white" stroke="black" strokeWidth="1" transform="rotate(2 150 0)" />
                <path d="M170,0 L170,65 Q175,75 180,65 L180,0" fill="white" stroke="black" strokeWidth="1" />

                <path d="M190,0 L190,95 Q200,105 210,90 L210,0" fill="white" stroke="black" strokeWidth="1" transform="rotate(-2 200 0)" />
                <path d="M220,0 L220,70 Q225,80 230,70 L230,0" fill="white" stroke="black" strokeWidth="1" />
                <path d="M245,0 L245,80 Q255,90 265,80 L265,0" fill="white" stroke="black" strokeWidth="1" />
            </g>

            {/* 3. TYPOGRAPHY & CAPTION */}
            {/* Name Overwritten on Paper */}
            <text x="150" y="290" textAnchor="middle" fontFamily="Courier Prime, monospace" fontWeight="bold" fontSize={Math.min(nameFontSize, 24)} fill="black" textDecoration="line-through">
                {userName || "NGƯỜI VIẾT BÁO"}
            </text>

            <text x="150" y="310" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontStyle="italic" fill="#555">
                "Slide đẹp, nội dung thì... để tính sau"
            </text>
        </>
    ),

    // ===================================
    // 3. SENIOR MÕM (Loudspeaker)
    // ===================================
    'senior-mom': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <linearGradient id="error-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1a237e" />
                    <stop offset="100%" stopColor="#000000" />
                </linearGradient>
                <clipPath id="avatar-clip-speech">
                    <path d="M50,90 L250,90 L250,230 L180,230 L150,280 L120,230 L50,230 Z" />
                </clipPath>
                {/* Glitch filter effect */}
                <filter id="glitch-text">
                    <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="1" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                </filter>
            </defs>

            {/* 2. NỀN & CHI TIẾT CÔNG NGHỆ */}
            <rect width="300" height="400" fill="url(#error-grad)" />

            {/* Faint Error Code Background */}
            <g opacity="0.15" fontSize="10" fontFamily="monospace" fill="#00FF00">
                <text x="10" y="30">Uncaught ReferenceError: SKILL is not defined</text>
                <text x="10" y="50">at SeniorLevel (brain.js:404)</text>
                <text x="10" y="70">{"try {work()} catch (e) {blame_intern()}"}</text>
                <text x="10" y="350">Warning: Deadline approaching</text>
                <text x="10" y="370">Critical Error: Coffee not found</text>
            </g>

            {/* 4. CHI TIẾT PHỤ - LEVEL TAG */}
            <rect x="180" y="10" width="110" height="25" fill="#FFD700" stroke="black" strokeWidth="2" transform="rotate(5)" />
            <text x="235" y="27" textAnchor="middle" fontSize="10" fontWeight="900" transform="rotate(5)">LEVEL: CHÉM GIÓ</text>

            {/* 1. CẤU TRÚC LẠI AVATAR (The Speaker) */}
            {/* Sound Waves - Radiant */}
            <path d="M260,120 Q280,160 260,200" fill="none" stroke="#FF00FF" strokeWidth="4" strokeLinecap="round" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M270,110 Q300,160 270,210" fill="none" stroke="#00FFFF" strokeWidth="4" strokeLinecap="round" opacity="0.6">
                <animate attributeName="opacity" values="0.6;0.1;0.6" dur="1.2s" repeatCount="indefinite" />
            </path>
            <path d="M40,120 Q20,160 40,200" fill="none" stroke="#FF00FF" strokeWidth="4" strokeLinecap="round" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1s" repeatCount="indefinite" />
            </path>

            {/* Main Bubble */}
            <path d="M50,90 L250,90 L250,230 L180,230 L150,280 L120,230 L50,230 Z" fill="white" stroke="black" strokeWidth="5"
                style={{ filter: "drop-shadow(5px 5px 0px #FFD700)" }} />

            {userImage ? (
                <image
                    x="50" y="90" width="200" height="150"
                    href={userImage}
                    clipPath="url(#avatar-clip-speech)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="180" textAnchor="middle" fontSize="60">📢</text>
            )}

            {/* Mute Icon */}
            <g transform="translate(20, 20)">
                <path d="M5,10 L15,10 L25,0 L25,30 L15,20 L5,20 Z" fill="#FF4500" stroke="black" strokeWidth="1" />
                <line x1="30" y1="5" x2="40" y2="25" stroke="#FF4500" strokeWidth="3" />
                <line x1="40" y1="5" x2="30" y2="25" stroke="#FF4500" strokeWidth="3" />
            </g>

            {/* Bugs Crawling */}
            <text x="60" y="85" fontSize="16" transform="rotate(-30 60 85)">🪲</text>
            <text x="240" y="240" fontSize="16" transform="rotate(45 240 240)">🐛</text>

            {/* 3. TYPOGRAPHY & CAPTION */}
            {/* Name Box */}
            <rect x="40" y="300" width="220" height="40" fill="black" stroke="white" strokeWidth="2"
                style={{ filter: "drop-shadow(4px 4px 0px #FFD700)" }} />

            <text x="150" y="325" textAnchor="middle" fill="white" fontWeight="900" fontSize={Math.min(nameFontSize, 22)} fontFamily="sans-serif" style={{ textTransform: "uppercase" }}>
                {userName ? `[${userName}]` : "[SENIOR MÕM]"}
            </text>

            {/* Caption */}
            <text x="150" y="365" textAnchor="middle" fill="#00FF00" fontSize="12" fontFamily="monospace" fontWeight="bold">
                {`> "Code bằng mồm, fix bug bằng niềm tin"`}
            </text>
            <text x="150" y="380" textAnchor="middle" fill="#00FF00" fontSize="12" fontFamily="monospace" fontWeight="bold">
                <animate attributeName="opacity" values="1;0;1" dur="0.8s" repeatCount="indefinite" />
                _
            </text>
        </>
    ),

    // ===================================
    // 4. INTERN NGÂY THƠ (Crayon)
    // ===================================
    'intern-ngay-tho': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <filter id="glow-avatar" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <clipPath id="avatar-clip-crayon">
                    {/* Rough circle path */}
                    <path d="M80,180 Q85,130 150,125 Q215,130 220,180 Q215,230 150,235 Q85,230 80,180 Z" />
                </clipPath>
            </defs>

            {/* White Paper Background with Grid */}
            <rect width="300" height="400" fill="#FFF" />
            <path d="M0,20 L300,20 M0,40 L300,40 M0,60 L300,60" stroke="#add8e6" strokeWidth="1" /> {/* Notebook lines top */}

            {/* 4. ĐỒNG BỘ PHONG CÁCH - Thick Black Border */}
            <rect x="5" y="5" width="290" height="390" fill="none" stroke="black" strokeWidth="4" rx="5" />

            {/* Scribbles & Chaos */}
            {/* 3. CHI TIẾT "HỖN LOẠN" */}
            <path d="M20,350 Q40,300 60,350 T100,350 T140,350" fill="none" stroke="#FF6347" strokeWidth="3" opacity="0.7" />
            <circle cx="250" cy="50" r="30" fill="none" stroke="#FFD700" strokeWidth="3" />
            <path d="M230,70 L270,30 M230,30 L270,70" stroke="#FFD700" strokeWidth="2" /> {/* Sun? */}

            {/* Ink Blots */}
            <path d="M260,350 Q280,330 290,360 T270,390 Z" fill="black" opacity="0.1" />
            <path d="M10,100 Q30,80 20,120 Z" fill="blue" opacity="0.1" />

            {/* Probation Stamp */}
            <g transform="translate(150, 200) rotate(15)" opacity="0.15">
                <rect x="-80" y="-25" width="160" height="50" fill="none" stroke="red" strokeWidth="5" rx="10" />
                <text x="0" y="10" textAnchor="middle" fill="red" fontSize="30" fontWeight="900" fontFamily="Stencil, sans-serif">PROBATION</text>
            </g>

            {/* 1. TINH CHỈNH AVATAR (The Innocent Face) */}
            {/* Glow Effect */}
            <g filter="url(#glow-avatar)">
                {/* Avatar Frame - Messy Crayon Look */}
                <path d="M75,180 Q80,125 150,120 Q220,125 225,180 Q220,235 150,240 Q80,235 75,180 Z"
                    fill="none" stroke="#32CD32" strokeWidth="6" strokeLinecap="round" strokeDasharray="10 5" />
            </g>

            {/* Floating Error Icons */}
            <text x="50" y="120" fontSize="14" fill="red" fontWeight="bold">Error 404</text>
            <text x="240" y="140" fontSize="14" fill="#555">Loading...</text>
            <text x="220" y="80" fontSize="20" fill="orange" fontWeight="bold">?</text>

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

            {/* "Name Tag" Sticker - Bold Style */}
            <rect x="60" y="270" width="180" height="60" fill="white" stroke="blue" strokeWidth="4" rx="10" transform="rotate(-3 150 270)"
                style={{ filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.2))" }} />
            <circle cx="150" cy="260" r="5" fill="#ccc" /> {/* Pin */}

            <text x="150" y="285" textAnchor="middle" fill="blue" fontSize="12" fontFamily="Comic Sans MS, cursive" fontWeight="bold">HELLO, my name is</text>
            <text x="150" y="315" textAnchor="middle" fill="black" fontFamily="Comic Sans MS, cursive" fontWeight="bold" fontSize={Math.min(nameFontSize, 24)} transform="rotate(-3 150 270)">
                {userName || "BÉ INTERN"}
            </text>

            {/* Git Command */}


            {/* 2. THÊM CAPTION "HUYỀN THOẠI" */}
            <text x="150" y="380" textAnchor="middle" fill="red" fontSize="10" fontFamily="Comic Sans MS, cursive" fontStyle="italic">
                "Em tưởng xoá database là giải phóng bộ nhớ?"
            </text>
        </>
    ),

    // ===================================
    // 5. DRAMA QUEEN CÔNG SỞ (Theater)
    // ===================================
    'drama-queen-cong-so': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <filter id="film-grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                    <feColorMatrix type="saturate" values="0" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.3" />
                    </feComponentTransfer>
                </filter>
                <linearGradient id="spotlight-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <clipPath id="avatar-clip-circle">
                    <circle cx="150" cy="180" r="90" />
                </clipPath>
            </defs>

            {/* Red Carpet/Curtain Background */}
            <rect width="300" height="400" fill="#2c0000" />

            {/* 1. HIỆU ỨNG ÁNH SÁNG (Spotlight) */}
            <path d="M0,0 L100,200 L200,200 Z" fill="url(#spotlight-grad)" opacity="0.6" transform="rotate(-20 100 0)" />
            <path d="M300,0 L200,200 L100,200 Z" fill="url(#spotlight-grad)" opacity="0.6" transform="rotate(20 200 0)" />

            {/* Film Strip Border - Right Side */}
            <rect x="270" y="5" width="25" height="390" fill="black" />
            {Array.from({ length: 14 }).map((_, i) => (
                <rect key={i} x="275" y={15 + i * 28} width="15" height="18" fill="white" rx="2" />
            ))}

            {/* Red Curtains Side */}
            <path d="M0,0 L40,0 L40,400 Q20,200 0,400 Z" fill="#b71c1c" />

            {/* 4. ĐỒNG BỘ PHONG CÁCH - Thick Black Border */}
            <rect x="5" y="5" width="290" height="390" fill="none" stroke="black" strokeWidth="4" />

            {/* 3. CHI TIẾT "THỊ PHI" */}
            <text x="20" y="380" fontSize="24">🍿</text>
            <text x="230" y="380" fontSize="24">🎬</text>
            <text x="20" y="40" fontSize="24">🎤</text>

            {/* 2. TINH CHỈNH AVATAR (The Movie Star) */}
            {/* Gold Rimmed Circle */}
            <circle cx="150" cy="180" r="95" fill="none" stroke="#FFD700" strokeWidth="5"
                style={{ filter: "drop-shadow(0px 0px 10px #FFD700)" }} />

            {userImage ? (
                <>
                    <image
                        x="60" y="90" width="180" height="180"
                        href={userImage}
                        clipPath="url(#avatar-clip-circle)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                    {/* Film Grain Overlay */}
                    <rect x="60" y="90" width="180" height="180" filter="url(#film-grain)" clipPath="url(#avatar-clip-circle)" style={{ mixBlendMode: 'overlay' }} />
                </>
            ) : (
                <text x="150" y="200" textAnchor="middle" fontSize="60">💃</text>
            )}

            {/* Name Marquee / Banner */}
            <g filter="url(#glow-avatar)"> {/* Reusing glow if defined, or simple shadow */}
                <rect x="40" y="290" width="220" height="50" fill="#ffeb3b" stroke="#f57f17" strokeWidth="3" rx="0" transform="skewX(-10)" />
            </g>

            {/* 4. TYPOGRAPHY */}
            <text x="150" y="280" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FFD700" letterSpacing="2">STARRING</text>

            <text x="150" y="325" textAnchor="middle" fontWeight="900" fontSize={Math.min(nameFontSize, 26)} fill="#d50000"
                fontFamily="serif" style={{ textShadow: "2px 2px 0px white" }}>
                {userName ? userName.toUpperCase() : "DRAMA QUEEN"}
            </text>

            <text x="130" y="360" textAnchor="middle" fill="#ffccbc" fontSize="10" fontStyle="italic">"And the Oscar goes to..."</text>
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
                    <circle cx="150" cy="120" r="75" />
                </clipPath>
                <filter id="blur-bg-less">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                </filter>
            </defs>

            {/* Blurred Background simulating office app interface */}
            <g filter="url(#blur-bg-less)">
                <rect width="300" height="400" fill="#f0f0f0" />
                <rect x="10" y="10" width="60" height="380" fill="#3F0E40" rx="5" /> {/* Sidebar */}
                <rect x="80" y="10" width="210" height="380" fill="white" rx="5" stroke="#ddd" strokeWidth="1" />
                <text x="90" y="40" fontSize="10" fill="#aaa"># general</text>
                <text x="90" y="60" fontSize="10" fill="#aaa"># random</text>
                <text x="90" y="80" fontSize="10" fill="#aaa"># crush-zone</text>
            </g>

            {/* 4. ĐỒNG BỘ NEUBRUTALISM - Thick Black Border */}
            <rect x="5" y="5" width="290" height="390" fill="none" stroke="black" strokeWidth="4" rx="10" />

            {/* Pop-up "Secret Chat" Window */}
            <rect x="25" y="60" width="250" height="310" fill="white" stroke="black" strokeWidth="3" rx="10" shadow="5px 5px 0px rgba(0,0,0,0.2)" />

            {/* Chat Header */}
            <rect x="25" y="60" width="250" height="40" fill="#3F0E40" rx="10" />
            <rect x="25" y="90" width="250" height="10" fill="#3F0E40" /> {/* Flatten bottom radius */}
            <text x="40" y="85" fill="white" fontWeight="bold" fontSize="12">🔒 Direct Message</text>
            <circle cx="260" cy="80" r="5" fill="#2E8B57" stroke="white" strokeWidth="1" /> {/* Online status */}

            {/* 1. FIX LỖI AVATAR (The Center Face) */}
            <circle cx="150" cy="120" r="75" fill="none" stroke="#eee" strokeWidth="1" />
            {userImage ? (
                <image
                    x="75" y="45" width="150" height="150"
                    href={userImage}
                    clipPath="url(#avatar-clip-chat-circle)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="210" textAnchor="middle" fontSize="50">🤫</text>
            )}

            {/* 3. CHI TIẾT "HÀNH CHÍNH" - Floating Emojis */}
            <text x="60" y="100" fontSize="20" transform="rotate(-20 60 100)">🥰</text>
            <text x="240" y="140" fontSize="20" transform="rotate(20 240 140)">💌</text>

            {/* 2. CẤU TRÚC LẠI TIN NHẮN */}
            {/* Message Bubble Name */}
            <path d="M40,240 L260,240 L260,320 L50,320 L40,330 Z" fill="#f5f5f5" stroke="#ddd" strokeWidth="1" />
            <text x="50" y="260" fontSize="10" fill="#555" fontWeight="bold">Sent just now:</text>

            <text x="150" y="285" textAnchor="middle" fontSize={Math.min(nameFontSize, 22)} fontWeight="900" fill="#333" style={{ textTransform: "uppercase" }}>
                {userName || "CRUSH CÔNG SỞ"}
            </text>

            {/* Caption */}
            <text x="150" y="305" textAnchor="middle" fontSize="10" fill="#666" fontStyle="italic" width="200">
                "Nhắn việc thì 'đã xem', mời trà sữa thì 'rep ngay'"
            </text>

            {/* Heart Reaction & Seen Icon */}
            <rect x="210" y="310" width="40" height="20" rx="10" fill="#fff" stroke="#ddd" strokeWidth="1" />
            <text x="230" y="323" textAnchor="middle" fontSize="10">❤️ 1</text>

            {/* Seen Icon */}
            <text x="250" y="335" stroke="none" fill="#aaa" fontSize="10" fontStyle="italic">Seen 12:00</text>
        </>
    ),

    // ===================================
    // 8. TRƯỞNG PHÒNG HỆ DÙ (Chill Boss)
    // ===================================
    'truong-phong-he-du': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <filter id="glow-umbrella" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#80cbc4" />
                </filter>
                <clipPath id="avatar-clip-circle-zen">
                    <circle cx="150" cy="180" r="80" />
                </clipPath>
            </defs>

            {/* Zen Tea Green Background */}
            <rect width="300" height="400" fill="#e0f2f1" />

            {/* Bamboo Stalks Background */}
            <rect x="20" y="0" width="10" height="400" fill="#a5d6a7" />
            <rect x="270" y="0" width="10" height="400" fill="#a5d6a7" />

            {/* 4. ĐỒNG BỘ NEUBRUTALISM - Thick Black Border */}
            <rect x="5" y="5" width="290" height="390" fill="none" stroke="black" strokeWidth="3" />

            {/* Umbrella Graphic covering Avatar */}
            <g filter="url(#glow-umbrella)">
                <path d="M50,150 A100,60 0 0,1 250,150" fill="white" stroke="#009688" strokeWidth="4" />
                <line x1="150" y1="150" x2="150" y2="90" stroke="#009688" strokeWidth="4" />
                <path d="M150,90 C200,90 250,150 250,150" fill="none" stroke="#80cbc4" strokeWidth="2" />
                <path d="M150,90 C100,90 50,150 50,150" fill="none" stroke="#80cbc4" strokeWidth="2" />
            </g>

            {/* 1. FIX LỖI AVATAR (The Protected Face) */}
            <circle cx="150" cy="180" r="82" fill="white" stroke="#009688" strokeWidth="2" />
            {userImage ? (
                <image
                    x="70" y="100" width="160" height="160"
                    href={userImage}
                    clipPath="url(#avatar-clip-circle-zen)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="200" textAnchor="middle" fontSize="60">⛱️</text>
            )}

            {/* Tea Cup and Steam */}
            <text x="150" y="320" textAnchor="middle" fontSize="40">🍵</text>

            {/* 3. CHI TIẾT "ZEN" - Animated Steam */}
            <path d="M140,290 Q130,280 140,270 T140,250" fill="none" stroke="#aaa" strokeWidth="2" opacity="0.6">
                <animate attributeName="d" values="M140,290 Q130,280 140,270 T140,250; M140,285 Q150,275 140,265 T140,245; M140,290 Q130,280 140,270 T140,250" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
            </path>
            <path d="M160,290 Q170,280 160,270 T160,250" fill="none" stroke="#aaa" strokeWidth="2" opacity="0.6">
                <animate attributeName="d" values="M160,290 Q170,280 160,270 T160,250; M160,285 Q150,275 160,265 T160,245; M160,290 Q170,280 160,270 T160,250" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
            </path>

            <text x="150" y="50" textAnchor="middle" fontSize="16" fontFamily="sans-serif" fill="#00796b" fontWeight="bold">ZEN MASTER</text>

            {/* 2. THÊM CAPTION "CHỮA LÀNH" */}
            <text x="150" y="350" textAnchor="middle" fontSize="10" fill="#004d40" fontStyle="italic" fontFamily="sans-serif">
                "Công việc là phù du, dù che là vĩnh cửu"
            </text>

            <text x="150" y="375" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#004d40" style={{ textTransform: "uppercase" }}>
                {userName || "HỆ DÙ CHE"}
            </text>
        </>
    ),

    // ===================================
    // 8. DEV ĐÂY (Hacker Terminal)
    // ===================================
    'dev-day': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-glitch">
                    <rect x="60" y="110" width="180" height="180" />
                </clipPath>
                <filter id="glitch-filter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="1" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
                </filter>
                <linearGradient id="scanline-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="black" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="black" stopOpacity="0" />
                    <stop offset="100%" stopColor="black" stopOpacity="0.8" />
                </linearGradient>
            </defs>

            {/* CRT Black Background */}
            <rect width="300" height="400" fill="#1a1a1a" />

            {/* 1. HIỆU ỨNG NỀN (Matrix Rain) - Static simulation */}
            <text x="10" y="50" fill="#0F0" fontSize="12" fontFamily="monospace" opacity="0.3" writingMode="tb">1010101001</text>
            <text x="25" y="100" fill="#0F0" fontSize="12" fontFamily="monospace" opacity="0.2" writingMode="tb">0110010111</text>
            <text x="280" y="50" fill="#0F0" fontSize="12" fontFamily="monospace" opacity="0.3" writingMode="tb">0010111010</text>

            {/* 2. TINH CHỈNH AVATAR (The Main Process) */}
            {/* Glitch Frame */}
            <rect x="55" y="105" width="190" height="190" fill="none" stroke="red" strokeWidth="2" opacity="0.5" transform="translate(2,0)" />
            <rect x="55" y="105" width="190" height="190" fill="none" stroke="blue" strokeWidth="2" opacity="0.5" transform="translate(-2,0)" />
            <rect x="55" y="105" width="190" height="190" fill="none" stroke="#0F0" strokeWidth="3" />

            {userImage ? (
                <image
                    x="60" y="110" width="180" height="180"
                    href={userImage}
                    clipPath="url(#avatar-clip-glitch)"
                    preserveAspectRatio="xMidYMid slice"
                    style={{ filter: "contrast(1.2) brightness(1.1)" }}
                />
            ) : (
                <text x="150" y="210" textAnchor="middle" fontSize="60">💻</text>
            )}

            <text x="150" y="310" textAnchor="middle" fill="#0F0" fontSize="10" fontFamily="monospace" letterSpacing="2">SCANNING USER...</text>

            {/* 3. CHI TIẾT "IT HÀI HƯỚC" */}
            <text x="50" y="80" fontSize="24">☕</text>
            <text x="250" y="80" fontSize="24">🐛</text>
            <text x="150" y="60" textAnchor="middle" fill="#0F0" fontSize="20" fontFamily="monospace" fontWeight="bold">{`{ code }`}</text>
            <text x="270" y="250" fill="#0F0" fontSize="10" fontFamily="monospace" writingMode="tb" letterSpacing="3">COFFEE_TO_CODE</text>

            {/* 1. HIỆU ỨNG NỀN - Scanlines */}
            {Array.from({ length: 40 }).map((_, i) => (
                <line key={i} x1="0" y1={i * 10} x2="300" y2={i * 10} stroke="black" strokeWidth="1" opacity="0.2" />
            ))}

            {/* 4. TYPOGRAPHY & ĐỒNG BỘ */}
            {/* Glowing Title */}
            <text x="150" y="350" textAnchor="middle"
                fontFamily="Courier New, monospace"
                fontWeight="900"
                fontSize={Math.min(nameFontSize, 26)}
                fill="#0F0"
                style={{ textShadow: "0 0 10px #0F0" }}>
                {userName ? userName.toUpperCase() : "DEV ĐÂY"}
            </text>

            <text x="150" y="375" textAnchor="middle" fill="#0F0" fontSize="10" fontFamily="monospace">STATUS: 99 BUGS ON WALL</text>

            {/* Neubrutalism Border - Green */}
            <rect x="5" y="5" width="290" height="390" fill="none" stroke="#0F0" strokeWidth="3" />
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
                <clipPath id="avatar-clip-laptop-full">
                    <rect x="60" y="100" width="180" height="140" />
                </clipPath>
                <linearGradient id="beach-gradient-vibrant" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00BFFF" /> {/* Deep Sky Blue */}
                    <stop offset="60%" stopColor="#FFD700" /> {/* Gold Sand */}
                </linearGradient>
            </defs>

            {/* 3. PHONG CÁCH CHUNG - Vibrant Gradient */}
            <rect width="300" height="400" fill="url(#beach-gradient-vibrant)" />

            {/* 2. CHI TIẾT "DU MỤC" - Passport Stamps Background */}
            <g opacity="0.15" fill="none" stroke="#000" strokeWidth="1">
                <circle cx="50" cy="50" r="30" />
                <path d="M30,50 L70,50 M50,30 L50,70" />
                <text x="50" y="45" fontSize="8" textAnchor="middle" stroke="none" fill="#000">ENTRY</text>

                <circle cx="250" cy="100" r="40" transform="rotate(20 250 100)" />
                <text x="250" y="100" fontSize="8" textAnchor="middle" stroke="none" fill="#000" transform="rotate(20 250 100)">VISA GRANTED</text>

                <rect x="20" y="300" width="60" height="40" rx="5" transform="rotate(-15 50 320)" />
                <text x="50" y="325" fontSize="8" textAnchor="middle" stroke="none" fill="#000" transform="rotate(-15 50 320)">DEPARTED</text>
            </g>

            {/* Palm Tree Shadow */}
            <path d="M300,0 L150,0 Q180,100 300,150 Z" fill="black" opacity="0.1" />

            {/* Cafe Table */}
            <path d="M-20,400 L320,400 L280,300 L20,300 Z" fill="#8D6E63" stroke="#5d4037" strokeWidth="2" />

            {/* 1. NÂNG CẤP LAPTOP FRAME */}
            {/* Laptop Object */}
            <path d="M50,250 L250,250 L250,90 L50,90 Z" fill="#cfd8dc" stroke="#546e7a" strokeWidth="2" rx="5" /> {/* Screen Back */}
            <path d="M58,98 L242,98 L242,242 L58,242 Z" fill="#111" /> {/* Screen Black */}

            {/* Base of laptop */}
            <path d="M40,250 L260,250 L280,270 L20,270 Z" fill="#b0bec5" stroke="#546e7a" strokeWidth="1" />
            <path d="M120,260 L180,260" stroke="#78909c" strokeWidth="2" /> {/* Trackpad */}

            {/* Stickers */}
            <text x="65" y="235" fontSize="16" transform="rotate(-10 65 235)">✈️</text>
            <text x="225" y="115" fontSize="12" transform="rotate(15 225 115)">📶</text>
            <text x="210" y="235" fontSize="14" transform="rotate(5 210 235)">🇮🇩</text>

            {/* Avatar ON SCREEN - Full Cover */}
            {userImage ? (
                <image
                    x="60" y="100" width="180" height="140"
                    href={userImage}
                    clipPath="url(#avatar-clip-laptop-full)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="180" textAnchor="middle" fontSize="50">💻</text>
            )}

            {/* 2. CHI TIẾT "DU MỤC" - Coffee Cup Icon */}
            {/* Latte Art Cup */}
            <circle cx="250" cy="320" r="18" fill="white" stroke="#ccc" strokeWidth="1" />
            <ellipse cx="250" cy="320" rx="15" ry="15" fill="#6d4c41" /> {/* Coffee */}
            {/* Latte Art Heart */}
            <path d="M250,325 Q245,315 250,310 Q255,315 250,325" fill="#fff59d" />
            <path d="M268,320 Q278,320 273,330" fill="none" stroke="white" strokeWidth="2" /> {/* Handle */}

            {/* Location Tag - Thick Border */}
            <rect x="80" y="40" width="140" height="30" rx="15" fill="white" stroke="black" strokeWidth="2" />
            <text x="150" y="60" textAnchor="middle" fontSize="12" fill="#000" fontWeight="bold">📍 Bali, Indonesia</text>

            {/* Typography - Hard Shadow */}
            <text x="150" y="360" textAnchor="middle"
                fontSize={Math.min(nameFontSize, 24)}
                fontWeight="900"
                fill="white"
                fontFamily="sans-serif"
                style={{ textShadow: "3px 3px 0px black", textTransform: "uppercase" }}>
                {userName || "DIGITAL NOMAD"}
            </text>

            <text x="150" y="380" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" style={{ textShadow: "1px 1px 0px black" }}>
                WORK HARD, TRAVEL HARDER
            </text>

            {/* 3. PHONG CÁCH CHUNG - Orange Border */}
            <rect x="5" y="5" width="290" height="390" fill="none" stroke="#FF8C00" strokeWidth="4" />
        </>
    ),
};
