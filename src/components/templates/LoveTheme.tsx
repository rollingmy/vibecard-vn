import React from 'react';
import { TemplateProps } from './types';

export const LoveTheme = {
    'simp-lord': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-heart">
                    <path d="M150,130 C110,90 50,150 150,260 C250,150 190,90 150,130 Z" />
                </clipPath>
            </defs>

            {/* Pink Gradient Background */}
            <rect width="300" height="400" fill="#FFB6C1" />
            {/* Pattern usage assumed to be global or standard if present. If not, it will just not render. 
          Assuming grid-pattern is global or I should define it. 
          The original code had url(#grid-pattern) but I don't see the def in the snippet unless I missed it.
          I'll add a def for it. */}
            <defs>
                <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
            </defs>
            <rect width="300" height="400" fill="url(#grid-pattern)" opacity="0.2" />

            {/* Window Frame */}
            <rect x="15" y="15" width="270" height="370" rx="15" fill="white" stroke="black" strokeWidth="4" />
            <rect x="15" y="15" width="270" height="40" rx="15" fill="black" />
            <text x="30" y="40" fill="white" fontSize="14" fontWeight="bold">💖 love_os.exe</text>
            <circle cx="260" cy="35" r="5" fill="#FF5555" />
            <circle cx="245" cy="35" r="5" fill="#FFD700" />
            <circle cx="230" cy="35" r="5" fill="#55FF55" />

            {/* Heart Avatar Frame (Safe Zone: 80-270) */}
            <path d="M150,120 C100,70 30,140 150,270 C270,140 200,70 150,120 Z" fill="#FFE4E1" stroke="black" strokeWidth="3" transform="translate(0, 10)" />
            {userImage ? (
                <image
                    x="50" y="90" width="200" height="170"
                    href={userImage}
                    clipPath="url(#avatar-clip-heart)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="200" textAnchor="middle" fontSize="40">💌</text>
            )}

            {/* Floating Likes */}
            <g transform="translate(220, 100) rotate(10)">
                <rect width="50" height="30" rx="15" fill="#FF1493" stroke="black" strokeWidth="2" />
                <text x="25" y="20" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">999+</text>
            </g>

            {/* Name Plate - Safe Zone: > 290 */}
            <rect x="40" y="290" width="220" height="70" rx="10" fill="#FF69B4" stroke="black" strokeWidth="3" />
            <text x="150" y="315" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">CERTIFIED SIMP:</text>
            <text x="150" y="340" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize={Math.min(nameFontSize, 24)} fill="white" stroke="black" strokeWidth="1" dominantBaseline="middle">
                {userName || "YOUR NAME"}
            </text>
        </>
    ),

    'bang-khen-thoat-e': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <pattern id="cert-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
                    <circle cx="25" cy="25" r="20" fill="none" stroke="#90EE90" strokeWidth="1" opacity="0.5" />
                </pattern>
                <clipPath id="avatar-clip-circle">
                    <circle cx="150" cy="310" r="55" />
                </clipPath>
            </defs>

            {/* Background */}
            <rect width="300" height="400" fill="white" />
            <rect width="300" height="400" fill="url(#cert-pattern)" />

            {/* Vintage Border Frame */}
            <g>
                <path d="M20,20 L280,20 L280,380 L20,380 Z" fill="none" stroke="#228B22" strokeWidth="4" />
                <path d="M15,15 L285,15 L285,385 L15,385 Z" fill="none" stroke="#DAA520" strokeWidth="2" strokeDasharray="5,2" />
                {/* Decorative Corners */}
                <path d="M20,60 C20,20 20,20 60,20" fill="none" stroke="#228B22" strokeWidth="4" />
                <path d="M280,60 C280,20 280,20 240,20" fill="none" stroke="#228B22" strokeWidth="4" />
                <path d="M20,340 C20,380 20,380 60,380" fill="none" stroke="#228B22" strokeWidth="4" />
                <path d="M280,340 C280,380 280,380 240,380" fill="none" stroke="#228B22" strokeWidth="4" />
            </g>

            {/* Header Text - Safe Zone Top */}
            <text x="150" y="70" textAnchor="middle" fontFamily="serif" fontSize="32" fontWeight="bold" fill="#228B22">CỘNG HÒA</text>
            <text x="150" y="100" textAnchor="middle" fontFamily="serif" fontSize="14" fontWeight="bold" fill="black">XÃ HỘI CHỦ NGHĨA FA</text>
            <line x1="100" y1="110" x2="200" y2="110" stroke="black" strokeWidth="1" />

            <text x="150" y="150" textAnchor="middle" fontFamily="serif" fontSize="40" fontWeight="900" fill="#DAA520" stroke="black" strokeWidth="1" letterSpacing="2">BẰNG KHEN</text>

            {/* Name - Safe Zone Middle */}
            <text x="150" y="200" textAnchor="middle" fontSize="14" fontStyle="italic">Trao tặng đồng chí:</text>
            <text x="150" y="235" textAnchor="middle" fontFamily="cursive" fontSize={nameFontSize} fontWeight="bold" fill="#B22222">
                {userName || "NGƯỜI MAY MẮN"}
            </text>

            {/* User Avatar as Stamp - Safe Zone Bottom */}
            <circle cx="150" cy="310" r="55" fill="white" stroke="#DAA520" strokeWidth="3" strokeDasharray="2,2" />
            {userImage ? (
                <image
                    x="95" y="255" width="110" height="110"
                    href={userImage}
                    clipPath="url(#avatar-clip-circle)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : null}

            {/* Official Red Stamp Overlay */}
            <circle cx="220" cy="330" r="30" fill="none" stroke="red" strokeWidth="3" opacity="0.7" />
            <text x="220" y="335" textAnchor="middle" fontSize="10" fill="red" fontWeight="bold" transform="rotate(-15 220 330)" opacity="0.7">ĐÃ DUYỆT</text>
        </>
    ),

    'red-flag-di-dong': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <pattern id="caution-tape" width="100" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <rect width="50" height="20" fill="#FFD700" />
                    <rect x="50" width="50" height="20" fill="#000000" />
                </pattern>
                <clipPath id="avatar-clip-triangle">
                    <path d="M150,55 L237,205 L63,205 Z" />
                </clipPath>
            </defs>

            {/* Bright Yellow Background */}
            <rect width="300" height="400" fill="#FFFF00" />
            {/* Caution Tape Diagonal */}
            <rect width="600" height="50" fill="url(#caution-tape)" transform="translate(-150, 50) rotate(45)" opacity="0.8" />
            <rect width="600" height="50" fill="url(#caution-tape)" transform="translate(-150, 300) rotate(-45)" opacity="0.8" />

            {/* Thick Black Frame */}
            <rect x="10" y="10" width="280" height="380" fill="none" stroke="black" strokeWidth="10" />

            {/* Warning Header */}
            <rect x="50" y="30" width="200" height="40" fill="black" />
            <text x="150" y="55" textAnchor="middle" fill="white" fontSize="24" fontWeight="900" dominantBaseline="middle">WARNING</text>

            {/* Triangle Danger Sign Avatar */}
            <path d="M150,45 L250,215 L50,215 Z" fill="none" stroke="black" strokeWidth="8" strokeLinejoin="round" />
            <path d="M150,55 L237,205 L63,205 Z" fill="#FFE4B5" />
            {userImage ? (
                <image
                    x="50" y="45" width="200" height="200"
                    href={userImage}
                    clipPath="url(#avatar-clip-triangle)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="160" textAnchor="middle" fontSize="60">🚩</text>
            )}

            {/* Red Flags Decor */}
            <text x="50" y="240" fontSize="30" transform="rotate(-15 50 240)">🚩</text>
            <text x="250" y="240" fontSize="30" transform="rotate(15 250 240)">🚩</text>

            {/* Name/Status */}
            <rect x="30" y="260" width="240" height="80" fill="white" stroke="black" strokeWidth="4" />
            <text x="150" y="280" textAnchor="middle" fontSize="12" fontWeight="bold" fill="red">DANGER LEVEL: EXTREME</text>

            {/* LIP: Max Font Size / Bounding Box */}
            <text x="150" y="310" textAnchor="middle" fontWeight="900" fontSize={Math.min(nameFontSize, 24)} fill="black" style={{ textTransform: "uppercase" }}>
                {userName || "RED FLAG DI ĐỘNG"}
            </text>

            {/* Footer */}
            <text x="150" y="370" textAnchor="middle" fontSize="14" fontWeight="bold" fontFamily="monospace">DO NOT APPROACH</text>
        </>
    ),

    'chua-he-biet-yeu': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-stamp-circle">
                    <circle cx="230" cy="320" r="50" />
                </clipPath>
            </defs>

            {/* Pale Green Paper Background */}
            <rect width="300" height="400" fill="#F0FFF0" />
            <rect x="15" y="15" width="270" height="370" fill="none" stroke="#2E8B57" strokeWidth="3" strokeDasharray="5 5" />
            <rect x="20" y="20" width="260" height="360" fill="none" stroke="#2E8B57" strokeWidth="1" />

            {/* Header */}
            <image href="https://via.placeholder.com/50x50/2E8B57/FFFFFF?text=W" x="125" y="30" width="50" height="50" opacity="0.2" /> {/* Emblem placeholder */}
            <text x="150" y="50" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#006400" fontFamily="serif">CỤC BẢO TỒN</text>
            <text x="150" y="70" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#006400" fontFamily="serif">ĐỘNG VẬT HOANG DÃ</text>
            <line x1="80" y1="80" x2="220" y2="80" stroke="#006400" strokeWidth="2" />

            {/* Cert Title */}
            <text x="150" y="120" textAnchor="middle" fontSize="28" fontWeight="900" fill="#2E8B57">CHỨNG NHẬN</text>
            <text x="150" y="145" textAnchor="middle" fontSize="16" fontWeight="bold" fill="black" fontStyle="italic">"Chưa Một Mảnh Tình Vắt Vai"</text>

            {/* Info */}
            <text x="40" y="180" fontSize="12" fill="black">Tên loài:</text>
            <text x="50" y="205" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#006400" fontFamily="monospace">
                {userName || "FA BỀN VỮNG"}
            </text>
            <line x1="40" y1="215" x2="260" y2="215" stroke="black" strokeWidth="1" strokeDasharray="2 2" />

            <text x="40" y="250" fontSize="12" fill="black">Tình trạng:</text>
            <text x="120" y="250" fontSize="14" fontWeight="bold" fill="red">NGUY CẤP <tspan fontSize="10">(Sắp tuyệt chủng)</tspan></text>

            {/* Avatar Stamp */}
            <circle cx="230" cy="320" r="50" fill="none" stroke="#2E8B57" strokeWidth="2" />
            {userImage ? (
                <image
                    x="180" y="270" width="100" height="100"
                    href={userImage}
                    clipPath="url(#avatar-clip-stamp-circle)"
                    preserveAspectRatio="xMidYMid slice"
                    opacity="0.8"
                />
            ) : (
                <text x="230" y="335" textAnchor="middle" fontSize="40">🦄</text>
            )}

            {/* Seal "CHUA BI KHUI SEAL" */}
            <circle cx="80" cy="330" r="40" fill="none" stroke="red" strokeWidth="3" opacity="0.6" />
            <path d="M50,330 L110,330" id="curve" fill="none" />
            <text x="80" y="335" textAnchor="middle" fill="red" fontWeight="bold" fontSize="10" transform="rotate(-20 80 330)" opacity="0.6">
                CHƯA BỊ KHUI SEAL
            </text>
        </>
    ),

    'trap-girl-chinh-hieu': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-hexagon">
                    <polygon points="150,110 215,145 215,215 150,250 85,215 85,145" />
                </clipPath>
            </defs>

            {/* Electric Purple Background */}
            <rect width="300" height="400" fill="#2a0a2e" />

            {/* Spider Web Neon */}
            <path d="M150,180 L150,5 M150,180 L280,80 M150,180 L280,250 M150,180 L150,380 M150,180 L20,250 M150,180 L20,80" stroke="#d500f9" strokeWidth="2" opacity="0.5" />
            <polygon points="150,130 190,160 190,200 150,230 110,200 110,160" fill="none" stroke="#00e5ff" strokeWidth="1" opacity="0.6" />
            <polygon points="150,110 215,145 215,215 150,250 85,215 85,145" fill="none" stroke="#d500f9" strokeWidth="2" />

            {/* Header */}
            <text x="150" y="45" textAnchor="middle" fill="#00e5ff" fontSize="20" fontWeight="bold" fontFamily="monospace" style={{ textShadow: "0 0 5px #00e5ff" }}>TRAP GIRL</text>
            <text x="150" y="65" textAnchor="middle" fill="#d500f9" fontSize="10" letterSpacing="3">WARNING: HEARTBREAK</text>

            {/* Hexagon Avatar */}
            {userImage ? (
                <image
                    x="50" y="80" width="200" height="200"
                    href={userImage}
                    clipPath="url(#avatar-clip-hexagon)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="195" textAnchor="middle" fontSize="50">🕸️</text>
            )}

            {/* Glowing Box for Name */}
            <rect x="40" y="280" width="220" height="60" fill="none" stroke="#00e5ff" strokeWidth="2" rx="0" />
            <rect x="35" y="275" width="230" height="70" fill="none" stroke="#d500f9" strokeWidth="1" rx="0" opacity="0.5" />

            <text x="150" y="300" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif">TARGET LOCKED:</text>
            <text x="150" y="325" textAnchor="middle" fill="#d500f9" fontWeight="900" fontSize={Math.min(nameFontSize, 22)} style={{ textShadow: "0 0 5px #d500f9" }}>
                {userName || "TRAP GIRL"}
            </text>

            {/* Glitch Text Bottom */}
            <text x="150" y="370" textAnchor="middle" fill="#00e5ff" fontSize="12" fontFamily="monospace" opacity="0.8">CAUGHT_IN_4K</text>
        </>
    ),

    'good-boy-thanh-thien': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-cloud">
                    <circle cx="150" cy="180" r="70" />
                </clipPath>
                <linearGradient id="sky-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#87CEEB" />
                    <stop offset="100%" stopColor="#E0FFFF" />
                </linearGradient>
            </defs>

            {/* Sky Background */}
            <rect width="300" height="400" fill="url(#sky-grad)" />
            {/* Clouds (Circles) */}
            <circle cx="50" cy="350" r="60" fill="white" opacity="0.8" />
            <circle cx="150" cy="380" r="80" fill="white" opacity="0.9" />
            <circle cx="250" cy="350" r="60" fill="white" opacity="0.8" />

            {/* Halo */}
            <ellipse cx="150" cy="90" rx="50" ry="10" fill="none" stroke="#FFD700" strokeWidth="4" />

            {/* Wings */}
            <path d="M80,180 Q20,130 10,220 Q40,200 80,240" fill="white" stroke="#CCE5FF" strokeWidth="2" />
            <path d="M220,180 Q280,130 290,220 Q260,200 220,240" fill="white" stroke="#CCE5FF" strokeWidth="2" />

            {/* Avatar Circle */}
            <circle cx="150" cy="180" r="75" fill="white" opacity="0.5" />
            {userImage ? (
                <image
                    x="80" y="110" width="140" height="140"
                    href={userImage}
                    clipPath="url(#avatar-clip-cloud)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="195" textAnchor="middle" fontSize="50">😇</text>
            )}

            {/* Header */}
            <text x="150" y="50" textAnchor="middle" fill="white" fontWeight="900" fontSize="24" stroke="#00BFFF" strokeWidth="1" letterSpacing="2">CERTIFIED</text>
            <text x="150" y="70" textAnchor="middle" fill="white" fontWeight="900" fontSize="24" stroke="#00BFFF" strokeWidth="1" letterSpacing="2">GOOD BOY</text>

            {/* Name Plate */}
            <rect x="50" y="270" width="200" height="50" rx="25" fill="white" />
            {/* Note: `shadow` attr in SVG is not standard, it was in original code likely ignored or used by a polyfill. Removed for clean SVG or kept if it works. Kept standard SVG structure. */}
            {/* Original used `shadow="0 4px 6px -1px..."` which is invalid SVG but maybe was intended for a filter? I will omit it to be safe, or use filter. */}

            <text x="150" y="302" textAnchor="middle" fill="#00BFFF" fontWeight="bold" fontSize={Math.min(nameFontSize, 20)} dominantBaseline="middle">
                {userName || "BÉ NGOAN"}
            </text>

            <text x="150" y="340" textAnchor="middle" fontSize="12" fill="#555" fontStyle="italic">"Ngoan xinh yêu của em đây"</text>
        </>
    ),

    'ex-files': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-paperclip">
                    <rect x="30" y="100" width="100" height="120" />
                </clipPath>
                {/* Reusing grain filter if available or define it? It was defined in FlexTheme. 
            Since these are separate files, I should define it again if needed or assume global unique ID issues won't happen.
            But wait, different files, same ID 'grain'? If both loaded, ID conflict.
            CardEditor imports both matching to AllTemplates.
            But we only RENDER one at a time. So it should be fine.
            I'll add the filter here too just in case. */}
                <filter id="grain-ex">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                </filter>
            </defs>

            {/* Kraft Paper Background */}
            <rect width="300" height="400" fill="#D2B48C" />
            <rect width="300" height="400" filter="url(#grain-ex)" opacity="0.3" />

            {/* Folder Tab */}
            <path d="M0,40 L120,40 L150,60 L300,60 L300,400 L0,400 Z" fill="#C19A6B" stroke="black" strokeWidth="2" />

            {/* Stamps */}
            <rect x="180" y="70" width="100" height="40" fill="none" stroke="red" strokeWidth="4" opacity="0.7" transform="rotate(10 180 70)" />
            <text x="230" y="95" textAnchor="middle" fill="red" fontSize="20" fontWeight="900" opacity="0.7" transform="rotate(10 230 95)">TOP SECRET</text>

            <text x="150" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#5D4037" fontFamily="monospace">CLASSIFIED DOCUMENT</text>

            {/* Paperclipped Photo */}
            <rect x="25" y="95" width="110" height="130" fill="white" stroke="black" strokeWidth="1" transform="rotate(-5 80 160)" />
            {userImage ? (
                <image
                    x="30" y="100" width="100" height="120"
                    href={userImage}
                    clipPath="url(#avatar-clip-paperclip)"
                    preserveAspectRatio="xMidYMid slice"
                    transform="rotate(-5 80 160)"
                />
            ) : (
                <text x="80" y="170" textAnchor="middle" fontSize="40" transform="rotate(-5 80 160)">📁</text>
            )}

            {/* Paperclip */}
            <path d="M70,85 L70,110" stroke="silver" strokeWidth="8" strokeLinecap="round" transform="rotate(-5 80 160)" />

            {/* Text Lines */}
            <g transform="translate(150, 140)" fontFamily="monospace" fontSize="12" fill="black">
                <text x="0" y="0" fontWeight="bold">SUBJECT:</text>
                <text x="0" y="20">NGƯỜI YÊU CŨ</text>
                <text x="0" y="50" fontWeight="bold">STATUS:</text>
                <text x="0" y="70" fill="red" fontWeight="bold">BLOCKED</text>
            </g>

            {/* Name - Typewriter Style */}
            <rect x="30" y="270" width="240" height="60" fill="white" stroke="black" strokeWidth="1" strokeDasharray="1,1" />
            <text x="150" y="290" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#555">CODENAME:</text>
            <text x="150" y="315" textAnchor="middle" fontFamily="Courier Prime, monospace" fontWeight="bold" fontSize={Math.min(nameFontSize, 24)} fill="black">
                {userName || "THE EX"}
            </text>

            <text x="150" y="370" textAnchor="middle" fontSize="10" fill="#555" fontFamily="monospace">CONFIDENTIAL - DO NOT OPEN</text>
        </>
    ),

    'friendzone-forever': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-circle-badge">
                    <circle cx="150" cy="150" r="70" />
                </clipPath>
            </defs>

            {/* Lemon Yellow Background */}
            <rect width="300" height="400" fill="#FFFACD" />
            <circle cx="150" cy="200" r="180" fill="#FFFFE0" opacity="0.5" />

            {/* Big Badge Ribbon */}
            <path d="M150,300 L110,380 L150,360 L190,380 Z" fill="#FFD700" stroke="black" strokeWidth="2" />
            <circle cx="150" cy="150" r="90" fill="#FFD700" stroke="black" strokeWidth="3" />
            <circle cx="150" cy="150" r="80" fill="white" stroke="black" strokeWidth="1" />

            {/* Avatar inside Badge */}
            {userImage ? (
                <image
                    x="80" y="80" width="140" height="140"
                    href={userImage}
                    clipPath="url(#avatar-clip-circle-badge)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="165" textAnchor="middle" fontSize="50">🤝</text>
            )}

            {/* Banner over Badge */}
            <path d="M30,230 L270,230 L250,280 L50,280 Z" fill="#32CD32" stroke="black" strokeWidth="2" />
            <text x="150" y="262" textAnchor="middle" fill="white" fontWeight="900" fontSize={Math.min(nameFontSize, 24)} stroke="black" strokeWidth="0.5" style={{ textTransform: "uppercase" }}>
                {userName || "ANH TRAI MƯA"}
            </text>

            {/* Slogan */}
            <text x="150" y="330" textAnchor="middle" fontSize="14" fontWeight="bold" fill="black">"ANH RẤT TỐT"</text>
            <text x="150" y="350" textAnchor="middle" fontSize="14" fontWeight="bold" fill="black">"NHƯNG EM RẤT TIẾC"</text>

            <text x="150" y="50" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#DAA520">🏆 BEST FRIEND AWARD</text>
        </>
    ),

    'match-tinder': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-rounded-rect">
                    <rect x="25" y="60" width="250" height="280" rx="10" />
                </clipPath>
            </defs>

            {/* Neon Pink/Red Border Frame */}
            <rect width="300" height="400" fill="#fffcf5" />
            <rect x="5" y="5" width="290" height="390" fill="none" stroke="#ff4757" strokeWidth="6" />

            {/* Main Photo Card */}
            <rect x="25" y="60" width="250" height="280" rx="10" fill="#eee" stroke="#000" strokeWidth="4" />

            {/* Super Like Star (Top Right) */}
            <g transform="translate(230, 45) rotate(15)">
                <path d="M20,0 L25,15 L40,15 L28,25 L32,40 L20,30 L8,40 L12,25 L0,15 L15,15 Z" fill="#2ed573" stroke="#000" strokeWidth="2" />
            </g>

            {userImage ? (
                <image
                    x="27" y="62" width="246" height="276"
                    href={userImage}
                    clipPath="url(#avatar-clip-rounded-rect)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="200" textAnchor="middle" fontSize="50">🔥</text>
            )}

            {/* Gradient Overlay at bottom of photo - Darker for readability */}
            <defs>
                <linearGradient id="darkFade" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0.5" stopColor="transparent" />
                    <stop offset="1" stopColor="#000" stopOpacity="0.9" />
                </linearGradient>
            </defs>
            <rect x="27" y="62" width="246" height="276" rx="8" fill="url(#darkFade)" pointerEvents="none" />

            {/* Name & Age Overlay */}
            <text x="40" y="300" fill="white" fontWeight="900" fontSize={Math.min(nameFontSize, 28)} style={{ textShadow: "2px 2px 0px #000" }}>
                {userName || "TÌM ĐI"}
            </text>
            <text x="40" y="325" fill="white" fontSize="12" fontWeight="bold" opacity="1">
                📍 Cách đây 1km • 🕒 Active
            </text>

            {/* Controls - Neubrutalism Buttons */}
            <g transform="translate(0, 30)">
                {/* Nope Button */}
                <circle cx="80" cy="330" r="25" fill="white" stroke="#000" strokeWidth="4" />
                <circle cx="84" cy="334" r="25" fill="#000" opacity="0.2" /> {/* Hard Shadow */}
                <circle cx="80" cy="330" r="25" fill="white" stroke="#000" strokeWidth="3" />
                <text x="80" y="338" textAnchor="middle" fontSize="24" fill="#ff4757" fontWeight="900" style={{ textShadow: "1px 1px 0 #000" }}>✖</text>

                {/* Super Like Button */}
                <circle cx="150" cy="330" r="20" fill="white" stroke="#000" strokeWidth="3" />
                <text x="150" y="336" textAnchor="middle" fontSize="18" fill="#3742fa">⭐</text>

                {/* Like Button */}
                <circle cx="220" cy="330" r="25" fill="#white" />
                <circle cx="224" cy="334" r="25" fill="#000" opacity="0.2" /> {/* Hard Shadow */}
                <circle cx="220" cy="330" r="25" fill="white" stroke="#000" strokeWidth="3" />
                <text x="220" y="338" textAnchor="middle" fontSize="24" fill="#2ed573" fontWeight="900" style={{ textShadow: "1px 1px 0 #000" }}>❤</text>
            </g>

            {/* Header Logo */}
            <rect x="100" y="20" width="100" height="30" fill="#fff" stroke="#000" strokeWidth="3" rx="15" />
            <text x="150" y="42" textAnchor="middle" fontSize="14" fill="#ff4757" fontWeight="900" letterSpacing="1">TINDER</text>
        </>
    ),

    'le-hoi-chia-tay': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            {/* 1. NỀN & KHUNG (Ticket Shape) */}
            <defs>
                <clipPath id="ticket-clip">
                    <rect width="400" height="600" />
                </clipPath>
            </defs>
            <rect width="400" height="600" fill="#450a0a" />

            {/* Perforated Edges (Top & Bottom) */}
            <g fill="#e5e5e5"> {/* Match background if not transparent, or white to look like holes */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <circle key={`top-${i}`} cx={10 + i * 20} cy={0} r={6} />
                ))}
                {Array.from({ length: 20 }).map((_, i) => (
                    <circle key={`bot-${i}`} cx={10 + i * 20} cy={600} r={6} />
                ))}
            </g>

            {/* Stub Separator (Dashed Line) */}
            <line x1="0" y1="480" x2="400" y2="480" stroke="#facc15" strokeWidth="3" strokeDasharray="10 10" />

            {/* 2. KHUNG AVATAR (Main Feature - 60% area) */}
            <rect x="40" y="80" width="320" height="320" rx="20" fill="#222" stroke="white" strokeWidth="6" />

            <defs>
                <clipPath id="ticket-avatar-clip">
                    <rect x="44" y="84" width="312" height="312" rx="16" />
                </clipPath>
            </defs>

            {userImage ? (
                <image
                    x="44" y="84" width="312" height="312"
                    href={userImage}
                    clipPath="url(#ticket-avatar-clip)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="200" y="260" textAnchor="middle" fontSize="80">👋</text>
            )}

            {/* CANCELED Stamp */}
            <g transform="translate(200, 240) rotate(-15)">
                <rect x="-100" y="-30" width="200" height="60" rx="10" fill="none" stroke="#dc2626" strokeWidth="8" opacity="0.8" />
                <rect x="-90" y="-22" width="180" height="44" fill="none" stroke="#dc2626" strokeWidth="2" opacity="0.8" />
                <text x="0" y="15" textAnchor="middle" fontSize="40" fontWeight="900" fill="#dc2626" opacity="0.9" style={{ letterSpacing: '5px' }}>CANCELED</text>
            </g>

            {/* 3. CHI TIẾT VÉ (Farewell Info) */}
            {/* Title */}
            <text x="200" y="55" textAnchor="middle" fontSize="32" fontWeight="900" fill="#facc15" style={{ textShadow: "2px 2px 0px #000" }}>
                FAREWELL PARTY
            </text>

            {/* Guest of Honor */}
            <text x="200" y="430" textAnchor="middle" fontSize="14" fill="#d4d4d4" fontFamily="monospace">GUEST OF HONOR</text>
            <text x="200" y="460" textAnchor="middle" fontSize={Math.min(nameFontSize, 32)} fontWeight="bold" fill="white" fontFamily="Courier New, monospace" style={{ textTransform: 'uppercase' }}>
                {userName || "NGƯỜI RA ĐI"}
            </text>

            {/* 4. PHẦN CUỐNG VÉ (Stub) */}
            {/* Reason Box */}
            <g transform="translate(30, 500)">
                <rect width="240" height="80" rx="5" fill="#262626" stroke="#525252" strokeWidth="2" />
                <text x="120" y="25" textAnchor="middle" fontSize="12" fill="#a3a3a3">REASON FOR DEPARTURE</text>
                <text x="120" y="55" textAnchor="middle" fontSize="16" fontStyle="italic" fill="white">"It's not you, it's me"</text>
            </g>

            {/* Vertical Text & Barcode */}
            <g transform="translate(340, 590) rotate(-90)">
                <text x="0" y="0" fontSize="14" fontWeight="bold" fill="#facc15" letterSpacing="2">ADMIT ONE - NO REFUNDS</text>
            </g>

            {/* Fake Barcode */}
            <g transform="translate(290, 510)">
                <rect x="0" y="0" width="4" height="60" fill="white" />
                <rect x="8" y="0" width="2" height="60" fill="white" />
                <rect x="14" y="0" width="6" height="60" fill="white" />
                <rect x="24" y="0" width="2" height="60" fill="white" />
                <rect x="30" y="0" width="4" height="60" fill="white" />
                <rect x="38" y="0" width="8" height="60" fill="white" />
                <rect x="50" y="0" width="2" height="60" fill="white" />
                <rect x="56" y="0" width="4" height="60" fill="white" />
                <rect x="64" y="0" width="6" height="60" fill="white" />
                <text x="35" y="75" textAnchor="middle" fontSize="10" fill="white" fontFamily="monospace">#839210</text>
            </g>
        </svg>
    ),

    'crush-quoc-dan': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-full-poster">
                    <rect x="0" y="0" width="300" height="400" />
                </clipPath>
                <linearGradient id="bottom-fade-blur" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="transparent" />
                    <stop offset="0.6" stopColor="rgba(0,0,0,0.4)" />
                    <stop offset="1" stopColor="rgba(0,0,0,0.9)" />
                </linearGradient>
            </defs>

            {/* Poster Background */}
            <rect width="300" height="400" fill="#FFE4E1" />

            {/* Full Bleed Avatar */}
            {userImage ? (
                <image
                    x="0" y="0" width="300" height="400"
                    href={userImage}
                    clipPath="url(#avatar-clip-full-poster)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="200" textAnchor="middle" fontSize="80">✨</text>
            )}

            {/* Gradient Overlay Bottom - Thicker & Blurry for text readability */}
            <rect x="0" y="220" width="300" height="180" fill="url(#bottom-fade-blur)" />

            {/* 1. HIỆU ỨNG ÁNH SÁNG (Vibe Star) */}
            {/* Lens Flare Top Left */}
            <g transform="translate(0,0)" opacity="0.8">
                <circle cx="0" cy="0" r="80" fill="url(#burst-grad)" opacity="0.6" />
                <line x1="0" y1="0" x2="100" y2="100" stroke="#fff" strokeWidth="2" opacity="0.5" />
            </g>
            {/* Sparkles */}
            <text x="30" y="50" fontSize="20" fill="#fff" opacity="0.8">✨</text>
            <text x="260" y="80" fontSize="24" fill="#FFD700" opacity="0.9">✨</text>
            <text x="250" y="320" fontSize="16" fill="#fff" opacity="0.6">✦</text>
            <text x="50" y="300" fontSize="16" fill="#fff" opacity="0.6">✦</text>

            {/* Glowing Crosshair Lines */}
            <g style={{ mixBlendMode: 'screen' }}>
                <line x1="150" y1="200" x2="150" y2="0" stroke="pink" strokeWidth="3" opacity="0.4" filter="blur(2px)" />
                <line x1="150" y1="200" x2="300" y2="200" stroke="pink" strokeWidth="3" opacity="0.4" filter="blur(2px)" />
                <line x1="150" y1="200" x2="0" y2="200" stroke="pink" strokeWidth="3" opacity="0.4" filter="blur(2px)" />

                {/* Sharp lines */}
                <line x1="150" y1="200" x2="150" y2="0" stroke="white" strokeWidth="1" opacity="0.6" />
                <line x1="150" y1="200" x2="300" y2="200" stroke="white" strokeWidth="1" opacity="0.6" />
                <line x1="150" y1="200" x2="0" y2="200" stroke="white" strokeWidth="1" opacity="0.6" />
            </g>

            {/* 3. CHI TIẾT "HÀNG HIỆU" */}
            {/* Tag: Trending */}
            <g transform="translate(20, 20)">
                <rect width="100" height="24" rx="12" fill="#ef4444" />
                <text x="50" y="17" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" letterSpacing="1">TRENDING #1</text>
            </g>

            {/* 2. CẤU TRÚC CHỮ (Typography) */}
            <text x="150" y="300" textAnchor="middle" fill="#facc15" fontSize="14" fontWeight="bold" letterSpacing="4" style={{ textShadow: "1px 1px 2px black" }}>DEBUT 2026</text>

            <text x="150" y="340" textAnchor="middle" fill="white" fontWeight="900" fontSize={Math.min(nameFontSize, 36)} style={{ textShadow: "0 0 10px #ec4899, 2px 2px 0px black" }} letterSpacing="-1">
                {userName ? userName.toUpperCase() : "IDOL MỚI NỔI"}
            </text>

            {/* Caption */}
            <text x="150" y="365" textAnchor="middle" fill="#e5e7eb" fontSize="12" fontWeight="normal" fontFamily="serif" fontStyle="italic">
                "Người người theo đuổi, nhà nhà mong chờ"
            </text>

            {/* Stars with Stroke */}
            <g transform="translate(110, 375)">
                <text x="0" y="0" fontSize="16" fill="#FFD700" stroke="black" strokeWidth="0.5">★</text>
                <text x="20" y="0" fontSize="16" fill="#FFD700" stroke="black" strokeWidth="0.5">★</text>
                <text x="40" y="0" fontSize="16" fill="#FFD700" stroke="black" strokeWidth="0.5">★</text>
                <text x="60" y="0" fontSize="16" fill="#FFD700" stroke="black" strokeWidth="0.5">★</text>
                <text x="80" y="0" fontSize="16" fill="#FFD700" stroke="black" strokeWidth="0.5">★</text>
            </g>
        </>
    ),

    'bua-yeu': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            {/* 1. NỀN BÙA CHÚ (Mystic Background) */}
            <rect width="400" height="600" fill="#b45309" /> {/* Old Do paper color */}

            {/* Cloud Pattern / Triện văn */}
            <pattern id="cloudPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M20,50 Q40,30 60,50 T100,50" fill="none" stroke="#78350f" strokeWidth="1" opacity="0.3" />
                <text x="50" y="50" fontSize="20" fill="#78350f" opacity="0.2" fontFamily="serif">愛</text>
            </pattern>
            <rect width="400" height="600" fill="url(#cloudPattern)" />

            {/* Ancient Border (Tứ Linh style frame) */}
            <rect x="10" y="10" width="380" height="580" fill="none" stroke="#dc2626" strokeWidth="4" />
            <rect x="15" y="15" width="370" height="570" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="10,5" />

            {/* Corner Knots */}
            <g transform="translate(10,10)">
                <path d="M0,40 L0,0 L40,0" fill="none" stroke="#f59e0b" strokeWidth="4" />
                <circle cx="5" cy="5" r="2" fill="#dc2626" />
            </g>
            <g transform="translate(390,10) rotate(90)">
                <path d="M0,40 L0,0 L40,0" fill="none" stroke="#f59e0b" strokeWidth="4" />
            </g>
            <g transform="translate(390,590) rotate(180)">
                <path d="M0,40 L0,0 L40,0" fill="none" stroke="#f59e0b" strokeWidth="4" />
            </g>
            <g transform="translate(10,590) rotate(270)">
                <path d="M0,40 L0,0 L40,0" fill="none" stroke="#f59e0b" strokeWidth="4" />
            </g>

            {/* 2. KHUNG ẢNH "TÂM ĐIỂM" (The Magic Circle) */}
            <g transform="translate(200, 250)">
                {/* Outer Glow */}
                <circle cx="0" cy="0" r="145" fill="#fce7f3" opacity="0.3" filter="blur(10px)" />

                {/* Magic Ring */}
                <circle cx="0" cy="0" r="140" fill="none" stroke="#f59e0b" strokeWidth="2" />
                <circle cx="0" cy="0" r="130" fill="none" stroke="#dc2626" strokeWidth="1" />

                {/* Runes on Ring */}
                <path id="runePath" d="M-135,0 A135,135 0 1,1 135,0 A135,135 0 1,1 -135,0" fill="none" />
                <text fontSize="14" fill="#f59e0b" fontWeight="bold" letterSpacing="5">
                    <textPath href="#runePath" startOffset="50%" textAnchor="middle">
                        OM MANI PADME HUM • VẠN SỰ TÙY DUYÊN • TÂM LINH TƯƠNG THÔNG
                    </textPath>
                </text>

                {/* Avatar */}
                <defs>
                    <clipPath id="magicCircleClip">
                        <circle cx="0" cy="0" r="120" />
                    </clipPath>
                    <radialGradient id="pinkGlow">
                        <stop offset="0%" stopColor="#f472b6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Glow behind avatar */}
                <circle cx="0" cy="0" r="120" fill="url(#pinkGlow)" />

                {userImage ? (
                    <image
                        x="-120" y="-120" width="240" height="240"
                        href={userImage}
                        clipPath="url(#magicCircleClip)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                ) : (
                    <text x="0" y="20" textAnchor="middle" fontSize="80">☯️</text>
                )}
            </g>

            {/* 3. KHƯƠNG CHỨA TÊN (The Name Scroll) */}
            <g transform="translate(200, 420)">
                {/* Scroll Shape */}
                <path d="M-120,0 Q-140,20 -120,40 H120 Q140,20 120,0 H-120 Z" fill="#991b1b" stroke="#f59e0b" strokeWidth="2" />
                <path d="M-130,10 L-110,10 M-130,30 L-110,30" stroke="#f59e0b" strokeWidth="2" /> {/* Scroll ends */}
                <path d="M130,10 L110,10 M130,30 L110,30" stroke="#f59e0b" strokeWidth="2" />

                {/* Name */}
                <foreignObject x="-110" y="5" width="220" height="30">
                    <div className="w-full h-full flex items-center justify-center text-white"
                        style={{ fontFamily: 'serif', fontWeight: 'bold', fontSize: '18px', textShadow: '1px 1px 0 #000' }}>
                        {userName || "THÍ CHỦ CÔ ĐƠN"}
                    </div>
                </foreignObject>
            </g>

            {/* 4. CÁC DÒNG CHÚ NGỮ (The Spells) */}
            {/* Top Spell */}
            <text x="200" y="60" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#dc2626"
                style={{ fontFamily: 'serif', textShadow: '0 0 5px #f59e0b' }}>
                CẤP CẤP NHƯ LUẬT LỆNH
            </text>

            {/* Bottom Spell */}
            <text x="200" y="540" textAnchor="middle" fontSize="48" fontWeight="bold" fill="#7f1d1d"
                style={{ fontFamily: 'serif', letterSpacing: '2px' }}>
                BÙA YÊU
            </text>
            <text x="200" y="570" textAnchor="middle" fontSize="14" fontStyle="italic" fill="#57534e">
                "Vạn dặm tương tư - Một đời gắn kết"
            </text>

            {/* 5. CHI TIẾT "MA PHÁP" PHỤ */}
            {/* Particles */}
            <circle cx="50" cy="100" r="2" fill="#f59e0b" opacity="0.8">
                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="350" cy="150" r="3" fill="#ec4899" opacity="0.6">
                <animate attributeName="cy" values="150;140;150" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="80" cy="500" r="2" fill="#f59e0b" opacity="0.8" />
            <circle cx="320" cy="480" r="2" fill="#ec4899" opacity="0.6" />

            {/* Decorative Knots/Charms */}
            <text x="50" y="250" fontSize="20" fill="#dc2626" transform="rotate(-15)">📿</text>
            <text x="350" y="250" fontSize="20" fill="#dc2626" transform="rotate(15)">📿</text>

        </svg>
    ),
};
