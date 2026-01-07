import React from 'react';
import { TemplateProps } from './types';

export const GenZTheme = {
    // ===================================
    // 41. KEO LỲ MÃI ĐỈNH (Super Glue)
    // ===================================
    'keo-ly-mai-dinh': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-blob">
                    <path d="M150,100 C200,80 250,120 230,170 C210,220 180,240 130,220 C80,200 60,150 90,120 Z" />
                </clipPath>
            </defs>

            {/* Hot Pink BG */}
            <rect width="300" height="400" fill="#ff4081" />

            {/* Sticky Glue Drips */}
            <path d="M0,0 L300,0 L300,50 Q250,100 200,60 T100,50 T0,80 Z" fill="#f50057" />

            {/* 502 Glue Bottle Graphic */}
            <path d="M220,280 L260,280 L250,380 L230,380 Z" fill="#ffeb3b" stroke="black" strokeWidth="2" />
            <rect x="230" y="320" width="20" height="10" fill="white" />
            <text x="240" y="328" textAnchor="middle" fontSize="8" fontWeight="bold">502</text>

            {/* Blob Avatar Frame */}
            <path d="M145,95 C195,75 255,115 235,175 C215,225 185,245 135,225 C85,205 60,155 95,120 Z" fill="white" />
            {userImage ? (
                <image
                    x="50" y="80" width="200" height="180"
                    href={userImage}
                    clipPath="url(#avatar-clip-blob)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="180" textAnchor="middle" fontSize="60">💅</text>
            )}

            {/* Typography */}
            <text x="150" y="270" textAnchor="middle" fill="white" stroke="black" strokeWidth="4" fontSize="40" fontWeight="900" fontStyle="italic" paintOrder="stroke">KEO LỲ</text>

            <text x="150" y="310" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="bold" fill="yellow" style={{ textShadow: "2px 2px 0px #000" }}>
                {userName || "MÃI ĐỈNH"}
            </text>

            <text x="150" y="350" textAnchor="middle" fill="white" fontSize="14">#khum_thể_tách_rời</text>
        </>
    ),

    // ===================================
    // 42. CHẤM ZN (Periodic Table)
    // ===================================
    'cham-zn': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-element">
                    <rect x="75" y="80" width="150" height="150" />
                </clipPath>
            </defs>

            {/* Science Paper BG */}
            <rect width="300" height="400" fill="#e0e0e0" />

            {/* The Element Box */}
            <rect x="50" y="60" width="200" height="250" fill="white" stroke="black" strokeWidth="6" />

            {/* Atomic Number */}
            <text x="70" y="90" fontSize="24" fontWeight="bold">30</text>

            {/* Avatar faded behind symbol */}
            {userImage ? (
                <image
                    x="75" y="80" width="150" height="150"
                    href={userImage}
                    clipPath="url(#avatar-clip-element)"
                    preserveAspectRatio="xMidYMid slice"
                    opacity="0.3"
                />
            ) : null}

            {/* Symbol Zn */}
            <text x="150" y="200" textAnchor="middle" fontSize="100" fontWeight="bold" fill="#303f9f">Zn</text>

            <text x="150" y="240" textAnchor="middle" fontSize="20" fontStyle="italic">Zinc</text>
            <text x="150" y="260" textAnchor="middle" fontSize="14">65.38 (Weight)</text>
            <text x="150" y="280" textAnchor="middle" fontSize="14" fill="#666">[Ar] 3d10 4s2</text>

            {/* Caption */}
            <text x="150" y="350" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="black" fontFamily="sans-serif">
                {userName ? `CHẤM ${userName}` : "CHẤM HẾT"}
            </text>

            <text x="150" y="380" textAnchor="middle" fontSize="12" fill="#d32f2f">#met_moi #kiet_suc</text>
        </>
    ),

    // ===================================
    // 43. TỐN CƠM CHA MẸ (Rice Bowl)
    // ===================================
    'ton-com-cha-me': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-rice">
                    <circle cx="150" cy="180" r="70" />
                </clipPath>
                <pattern id="rice-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="#eee" />
                </pattern>
            </defs>

            {/* Bamboo Table Mat BG */}
            <rect width="300" height="400" fill="#d7ccc8" />
            <path d="M10,0 L10,400 M30,0 L30,400 M50,0 L50,400 M70,0 L70,400 M90,0 L90,400 M110,0 L110,400 M130,0 L130,400 M150,0 L150,400 M170,0 L170,400 M190,0 L190,400 M210,0 L210,400 M230,0 L230,400 M250,0 L250,400 M270,0 L270,400 M290,0 L290,400" stroke="#a1887f" strokeWidth="1" />

            {/* Bowl Shape */}
            <path d="M50,250 Q150,350 250,250" fill="#fff" stroke="black" strokeWidth="2" /> {/* Bowl bottom */}
            <ellipse cx="150" cy="250" rx="100" ry="30" fill="#fff" stroke="black" strokeWidth="2" /> {/* Rim */}

            {/* Rice Mound / Avatar */}
            <circle cx="150" cy="180" r="75" fill="url(#rice-pattern)" /> {/* Rice base */}
            {userImage ? (
                <image
                    x="80" y="110" width="140" height="140"
                    href={userImage}
                    clipPath="url(#avatar-clip-rice)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="180" textAnchor="middle" fontSize="50">🍚</text>
            )}

            {/* Chopsticks sticking in */}
            <line x1="180" y1="100" x2="160" y2="220" stroke="#795548" strokeWidth="4" />
            <line x1="200" y1="110" x2="165" y2="220" stroke="#795548" strokeWidth="4" />

            {/* Text on Bowl */}
            <path id="bowlCurve" d="M80,270 Q150,310 220,270" fill="none" />
            <text fontSize="14" fontWeight="bold" fill="blue">
                <textPath href="#bowlCurve" startOffset="50%" textAnchor="middle">
                    ĂN HẠI NUMBER 1
                </textPath>
            </text>

            <text x="150" y="360" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#d84315">
                {userName || "TỐN CƠM"}
            </text>
        </>
    ),

    // ===================================
    // 44. A-LO-HA (Nokia 1280)
    // ===================================
    'a-lo-ha': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-lcd">
                    <rect x="60" y="80" width="180" height="120" rx="5" />
                </clipPath>
            </defs>

            {/* Blue Phone Case BG */}
            <rect width="300" height="400" fill="#1976d2" rx="20" />

            {/* Screen Bezel */}
            <rect x="40" y="60" width="220" height="160" fill="#9e9e9e" rx="10" stroke="#333" strokeWidth="2" />

            {/* LCD Green Screen */}
            <rect x="60" y="80" width="180" height="120" fill="#c5e1a5" stroke="black" strokeWidth="2" />

            {/* Avatar Pixels */}
            {userImage ? (
                <image
                    x="60" y="80" width="180" height="120"
                    href={userImage}
                    clipPath="url(#avatar-clip-lcd)"
                    preserveAspectRatio="xMidYMid slice"
                    style={{ filter: "grayscale(100%) contrast(150%)" }}
                />
            ) : (
                <text x="150" y="150" textAnchor="middle" fontSize="40">📞</text>
            )}

            {/* LCD Overlay Grid */}
            <path d="M60,80 L240,80 M60,84 L240,84" stroke="black" strokeWidth="1" opacity="0.1" />

            {/* Status Bar */}
            <rect x="180" y="85" width="20" height="10" fill="nomme" stroke="black" strokeWidth="1" />
            <rect x="182" y="87" width="10" height="6" fill="black" /> {/* Batt */}
            <text x="70" y="95" fontSize="10" fontFamily="monospace">Viettel</text>

            {/* Keypad */}
            <rect x="40" y="240" width="220" height="140" fill="#e3f2fd" rx="10" opacity="0.2" />
            <circle cx="150" cy="270" r="25" fill="#efefef" stroke="black" /> {/* Nav */}
            <rect x="60" y="310" width="50" height="20" rx="5" fill="white" />
            <rect x="125" y="310" width="50" height="20" rx="5" fill="white" />
            <rect x="190" y="310" width="50" height="20" rx="5" fill="white" />
            <text x="85" y="325" textAnchor="middle" fontSize="10">1</text>
            <text x="150" y="325" textAnchor="middle" fontSize="10">2 abc</text>
            <text x="215" y="325" textAnchor="middle" fontSize="10">3 def</text>

            {/* Name on Screen */}
            <text x="150" y="180" textAnchor="middle" fontFamily="monospace" fontWeight="bold" fontSize={Math.min(nameFontSize, 20)} fill="black" style={{ textShadow: "1px 1px 0px white" }}>
                {userName || "ALOO"}
            </text>
        </>
    ),

    // ===================================
    // 45. XU CÀ NA (Rotten Fruit)
    // ===================================
    'xu-ca-na': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-blob-round">
                    <circle cx="150" cy="150" r="70" />
                </clipPath>
            </defs>

            {/* Rotten Orange BG */}
            <rect width="300" height="400" fill="#ffcc80" />
            <circle cx="50" cy="50" r="80" fill="#ef6c00" opacity="0.2" />
            <circle cx="280" cy="350" r="60" fill="#ef6c00" opacity="0.2" />

            {/* Sad Face Stickers */}
            <circle cx="250" cy="100" r="20" fill="#fff9c4" stroke="black" />
            <path d="M240,95 Q250,90 260,95" stroke="black" fill="none" /> {/* Eye */}
            <path d="M245,110 Q250,105 255,110" stroke="black" fill="none" /> {/* Mouth */}
            <text x="260" y="90" fontSize="10">💧</text>

            <text x="50" y="300" fontSize="30" transform="rotate(-20)">🥴</text>

            {/* Main Avatar */}
            <circle cx="150" cy="150" r="75" fill="#fff" stroke="#ff9800" strokeWidth="4" strokeDasharray="5 5" />
            {userImage ? (
                <image
                    x="80" y="80" width="140" height="140"
                    href={userImage}
                    clipPath="url(#avatar-clip-blob-round)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="165" textAnchor="middle" fontSize="60">🍊</text>
            )}

            {/* Bruise Overlay */}
            <ellipse cx="120" cy="120" rx="30" ry="20" fill="#5d4037" opacity="0.3" />

            <text x="150" y="270" textAnchor="middle" fontSize="60" fontWeight="900" fill="#e65100" opacity="0.2">XU</text>
            <text x="150" y="320" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#e65100" fontFamily="sans-serif">
                {userName || "XU CÀ NA"}
            </text>

            <text x="150" y="350" textAnchor="middle" fontSize="14" fill="#a1887f">Hôm nay xui quá...</text>
        </>
    ),

    // ===================================
    // 46. MÃI ĐẸT TI NI (Red String)
    // ===================================
    'mai-det-ti-ni': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-heart">
                    <path d="M150,220 C100,180 50,150 50,100 C50,50 100,50 150,100 C200,50 250,50 250,100 C250,150 200,180 150,220 Z" transform="translate(0, 50)" />
                </clipPath>
            </defs>

            {/* Romantic Pink BG */}
            <rect width="300" height="400" fill="#fce4ec" />
            <text x="20" y="40" fontSize="20" opacity="0.5">✨</text>
            <text x="280" y="100" fontSize="20" opacity="0.5">✨</text>
            <text x="50" y="350" fontSize="20" opacity="0.5">✨</text>

            {/* Red String of Fate */}
            <path d="M0,200 Q100,150 150,250 Q200,350 300,200" fill="none" stroke="#d50000" strokeWidth="2" strokeDasharray="2 2" />
            <text x="280" y="190" fontSize="20">🧶</text>

            {/* Heart Avatar Frame */}
            <path d="M150,230 C100,190 50,160 50,110 C50,60 100,60 150,110 C200,60 250,60 250,110 C250,160 200,190 150,230 Z"
                fill="white" stroke="#f06292" strokeWidth="4" transform="translate(0, 40)" />
            {userImage ? (
                <image
                    x="50" y="90" width="200" height="200"
                    href={userImage}
                    clipPath="url(#avatar-clip-heart)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="180" textAnchor="middle" fontSize="60">💘</text>
            )}

            <text x="150" y="310" textAnchor="middle" fontFamily="cursive" fontSize="24" fill="#880e4f">You look like</text>
            <text x="150" y="340" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#d81b60" fontFamily="sans-serif">
                {userName ? `MY DESTINY` : "MÃI ĐẸT TI NI"}
            </text>
            <text x="150" y="370" textAnchor="middle" fontSize="12" fill="#ad1457">{userName || "(Người tình kiếp trước)"}</text>
        </>
    ),

    // ===================================
    // 47. U LÀ TRỜI (Shock)
    // ===================================
    'u-la-troi': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-jagged">
                    <polygon points="150,80 170,100 200,90 190,120 220,150 190,180 200,210 170,200 150,230 130,200 100,210 110,180 80,150 110,120 100,90 130,100" />
                </clipPath>
            </defs>

            {/* Shocking Yellow BG */}
            <rect width="300" height="400" fill="#ffeb3b" />

            {/* Comic Burst lines */}
            <path d="M150,150 L0,0 M150,150 L150,0 M150,150 L300,0 M150,150 L300,150" stroke="black" strokeWidth="2" />

            {/* Jagged Speech Bubble/Frame */}
            <polygon points="150,70 180,90 220,80 210,120 250,150 210,190 220,230 180,220 150,260 120,220 80,230 90,190 50,150 90,110 80,70 120,90"
                fill="white" stroke="black" strokeWidth="4" />

            {userImage ? (
                <image
                    x="50" y="70" width="200" height="200"
                    href={userImage}
                    clipPath="url(#avatar-clip-jagged)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="170" textAnchor="middle" fontSize="60">😱</text>
            )}

            <text x="150" y="300" textAnchor="middle" fontSize="40" fontWeight="900" fill="black" stroke="white" strokeWidth="2">U LÀ TRỜI</text>

            <text x="150" y="340" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="bold" fill="#d50000" fontFamily="Impact, sans-serif">
                {userName || "SỐC NGANG"}
            </text>

            <text x="150" y="370" textAnchor="middle" fontSize="14" fill="black" fontWeight="bold">CHUYỆN TÂM LINH!</text>
        </>
    ),

    // ===================================
    // 48. KHUM (No)
    // ===================================
    'khum': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-x">
                    <circle cx="150" cy="150" r="80" />
                </clipPath>
            </defs>

            {/* Concrete Grey BG */}
            <rect width="300" height="400" fill="#9e9e9e" />

            {/* Graffiti Wall Texture */}
            <text x="50" y="50" fontSize="20" opacity="0.2" transform="rotate(-15)">Nope</text>
            <text x="250" y="350" fontSize="30" opacity="0.2" transform="rotate(10)">Nah</text>

            {/* Avatar */}
            {userImage ? (
                <image
                    x="70" y="70" width="160" height="160"
                    href={userImage}
                    clipPath="url(#avatar-clip-x)"
                    preserveAspectRatio="xMidYMid slice"
                    style={{ filter: "grayscale(100%)" }}
                />
            ) : (
                <text x="150" y="160" textAnchor="middle" fontSize="60">🙅</text>
            )}

            {/* Big Red X Spray Paint */}
            <path d="M80,80 L220,220" stroke="#d50000" strokeWidth="15" strokeLinecap="round" opacity="0.8" />
            <path d="M220,80 L80,220" stroke="#d50000" strokeWidth="15" strokeLinecap="round" opacity="0.8" />

            <text x="150" y="280" textAnchor="middle" fontSize="50" fontWeight="900" fill="white" stroke="black" strokeWidth="2" fontFamily="Arial Black, sans-serif">KHUM!</text>

            <rect x="50" y="320" width="200" height="50" fill="black" transform="rotate(-2 150 345)" />
            <text x="150" y="350" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="bold" fill="white" fontFamily="sans-serif" transform="rotate(-2 150 345)">
                {userName || "TỪ CHỐI HIỂU"}
            </text>
        </>
    ),

    // ===================================
    // 49. LEM MON (Lemon)
    // ===================================
    'lem-mon': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-lemon">
                    <ellipse cx="150" cy="150" rx="90" ry="70" />
                </clipPath>
            </defs>

            {/* Acid Yellow Green BG */}
            <rect width="300" height="400" fill="#c6ff00" />

            {/* Lemon Slices Pattern */}
            <circle cx="0" cy="0" r="50" fill="#f4ff81" opacity="0.5" />
            <circle cx="300" cy="400" r="80" fill="#f4ff81" opacity="0.5" />
            <circle cx="300" cy="0" r="40" fill="#f4ff81" opacity="0.5" />

            {/* Lemon Avatar Frame */}
            <ellipse cx="150" cy="150" rx="100" ry="80" fill="#ffeb3b" stroke="#76ff03" strokeWidth="5" />
            {/* Ends of lemon */}
            <path d="M50,150 Q40,150 35,160" stroke="#76ff03" strokeWidth="5" fill="none" />
            <path d="M250,150 Q260,150 265,140" stroke="#76ff03" strokeWidth="5" fill="none" />

            {userImage ? (
                <image
                    x="50" y="70" width="200" height="160"
                    href={userImage}
                    clipPath="url(#avatar-clip-lemon)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="170" textAnchor="middle" fontSize="60">🍋</text>
            )}

            <text x="150" y="280" textAnchor="middle" fontSize="30" fontStyle="italic" fontWeight="bold" fill="#33691e">"Chua lè chua lét"</text>

            <text x="150" y="330" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#1b5e20" fontFamily="sans-serif">
                {userName || "LEM MÒN"}
            </text>
            <text x="150" y="360" textAnchor="middle" fontSize="14" fill="#64dd17">Thôi bớt diễn giùm</text>
        </>
    ),

    // ===================================
    // 50. FLEXING TIME (Rolex)
    // ===================================
    'flexing-time': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-watch">
                    <circle cx="150" cy="180" r="70" />
                </clipPath>
                <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffd700" />
                    <stop offset="50%" stopColor="#fff176" />
                    <stop offset="100%" stopColor="#fbc02d" />
                </linearGradient>
            </defs>

            {/* Luxury Black Pattern BG */}
            <rect width="300" height="400" fill="#212121" />
            <path d="M0,0 L300,400 M300,0 L0,400" stroke="#333" strokeWidth="1" />

            {/* Watch Strap top/bottom */}
            <rect x="100" y="0" width="100" height="100" fill="url(#gold-grad)" />
            <rect x="100" y="260" width="100" height="140" fill="url(#gold-grad)" />
            <line x1="150" y1="0" x2="150" y2="100" stroke="#b08b04" strokeWidth="1" />
            <line x1="150" y1="260" x2="150" y2="400" stroke="#b08b04" strokeWidth="1" />

            {/* Watch Face */}
            <circle cx="150" cy="180" r="85" fill="#111" stroke="url(#gold-grad)" strokeWidth="8" />
            <path d="M150,95 L150,180" stroke="white" strokeWidth="2" /> {/* 12 oclock mark */}
            <path d="M235,180 L150,180" stroke="white" strokeWidth="2" /> {/* 3 oclock mark */}
            <path d="M150,265 L150,180" stroke="white" strokeWidth="2" /> {/* 6 oclock mark */}
            <path d="M65,180 L150,180" stroke="white" strokeWidth="2" /> {/* 9 oclock mark */}

            {/* Avatar inside Face */}
            {userImage ? (
                <image
                    x="80" y="110" width="140" height="140"
                    href={userImage}
                    clipPath="url(#avatar-clip-watch)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="195" textAnchor="middle" fontSize="50">⌚</text>
            )}

            {/* Diamonds/Bling */}
            <circle cx="70" cy="180" r="5" fill="#e0f7fa" />
            <circle cx="230" cy="180" r="5" fill="#e0f7fa" />
            <circle cx="150" cy="100" r="5" fill="#e0f7fa" />
            <circle cx="150" cy="260" r="5" fill="#e0f7fa" />

            <text x="150" y="60" textAnchor="middle" fontSize="24" fill="url(#gold-grad)" fontWeight="bold" fontFamily="serif">FLEX</text>

            {/* Name Plate on Strap */}
            <rect x="60" y="320" width="180" height="40" fill="#111" stroke="url(#gold-grad)" strokeWidth="2" rx="5" />
            <text x="150" y="345" textAnchor="middle" fontSize={Math.min(nameFontSize, 20)} fontWeight="bold" fill="url(#gold-grad)" style={{ textTransform: "uppercase" }}>
                {userName || "RICH KID"}
            </text>
        </>
    ),

    // ===================================
    // 53. BAN DOI AI (AI Partner)
    // ===================================
    'ban-doi-ai': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-heart-pixel">
                    <path d="M150,220 C100,180 50,150 50,100 C50,50 100,50 150,100 C200,50 250,50 250,100 C250,150 200,180 150,220 Z" />
                </clipPath>
            </defs>

            {/* Cyber Pink BG */}
            <rect width="300" height="400" fill="#f8bbd0" />
            <pattern id="dot-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#ec407a" />
            </pattern>
            <rect width="300" height="400" fill="url(#dot-pattern)" opacity="0.2" />

            {/* Holographic Heart UI */}
            <path d="M150,230 C90,180 40,150 40,90 C40,30 100,30 150,90 C200,30 260,30 260,90 C260,150 210,180 150,230 Z"
                fill="none" stroke="#e91e63" strokeWidth="2" strokeDasharray="5 5" />
            <path d="M150,240 C80,180 30,150 30,80 C30,10 100,10 150,80 C200,10 270,10 270,80 C270,150 220,180 150,240 Z"
                fill="none" stroke="#880e4f" strokeWidth="1" opacity="0.5" />

            {/* Avatar */}
            {userImage ? (
                <image
                    x="50" y="50" width="200" height="200"
                    href={userImage}
                    clipPath="url(#avatar-clip-heart-pixel)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="150" textAnchor="middle" fontSize="60">🤖</text>
            )}

            {/* Status Box */}
            <rect x="50" y="260" width="200" height="80" fill="white" stroke="#e91e63" strokeWidth="2" rx="10" />
            <text x="150" y="280" textAnchor="middle" fontSize="12" fill="#880e4f" fontWeight="bold">MATCH RATE: 99.9%</text>

            <rect x="70" y="290" width="160" height="10" fill="#fce4ec" rx="5" />
            <rect x="70" y="290" width="158" height="10" fill="#e91e63" rx="5" />

            {/* Name */}
            <text x="150" y="325" textAnchor="middle" fontSize={Math.min(nameFontSize, 20)} fontWeight="900" fill="#d81b60">
                {userName || "VIRTUAL LOVER"}
            </text>
            <text x="150" y="340" textAnchor="middle" fontSize="10" fill="#ad1457" fontStyle="italic">"Anh là thực tế ảo của em"</text>

            <text x="150" y="380" textAnchor="middle" fontSize="10" fill="#880e4f">NO BUGS, ONLY HUGS</text>
        </>
    ),

    // ===================================
    // 55. NGUOI TOI CO (Caveman)
    // ===================================
    'nguoi-toi-co': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-stone">
                    <path d="M70,100 L230,100 L220,250 L80,250 Z" />
                </clipPath>
            </defs>

            {/* Stone Wall BG */}
            <rect width="300" height="400" fill="#795548" />
            <pattern id="stone-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M0,0 L50,0 L50,50 L0,50 Z" fill="none" stroke="#5d4037" strokeWidth="2" />
                <path d="M10,10 L30,20 L10,30" fill="none" stroke="#4e342e" strokeWidth="1" />
            </pattern>
            <rect width="300" height="400" fill="url(#stone-pattern)" opacity="0.3" />

            {/* Cave Entrance Frame */}
            <path d="M50,80 Q150,20 250,80 L240,270 Q150,300 60,270 Z" fill="#3e2723" />

            {/* Avatar */}
            {userImage ? (
                <image
                    x="60" y="90" width="180" height="180"
                    href={userImage}
                    clipPath="url(#avatar-clip-stone)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="200" textAnchor="middle" fontSize="60">🍖</text>
            )}

            {/* Torch */}
            <text x="40" y="150" fontSize="30">🔥</text>
            <text x="230" y="150" fontSize="30">🔥</text>

            {/* Stone Tablet Name */}
            <path d="M40,300 L260,300 L250,380 L50,380 Z" fill="#9e9e9e" stroke="#616161" strokeWidth="3" />
            <text x="150" y="320" textAnchor="middle" fontSize="10" fill="#424242" fontWeight="bold" fontFamily="monospace">UNKNOWN SPECIES</text>

            <text x="150" y="350" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#212121" style={{ textShadow: "1px 1px 0px white" }}>
                {userName || "NGƯỜI TỐI CỔ"}
            </text>
        </>
    ),

    // ===================================
    // 58. CHAT GPT MOM (AI Chat)
    // ===================================
    'chat-gpt-mom': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-circle-ai">
                    <circle cx="40" cy="40" r="20" />
                </clipPath>
            </defs>

            {/* Dark UI Background */}
            <rect width="300" height="400" fill="#343541" />

            {/* Chat Interface */}
            {/* User Message */}
            <rect x="20" y="60" width="260" height="60" rx="5" fill="#343541" />
            <rect x="30" y="70" width="30" height="30" rx="2" fill="#555" /> {/* User Icon */}
            <text x="75" y="80" fill="white" fontSize="10" fontFamily="sans-serif">User</text>
            <text x="75" y="100" fill="#d1d5db" fontSize="12">Làm sao để giàu nhanh?</text>

            {/* AI Response Block */}
            <rect x="10" y="140" width="280" height="200" fill="#444654" rx="5" />
            <circle cx="40" cy="170" r="15" fill="#10a37f" /> {/* AI Icon */}
            <path d="M35,170 L40,165 L45,170 M35,170 L40,175 L45,170" stroke="white" strokeWidth="2" fill="none" />

            <text x="70" y="175" fill="white" fontSize="12" fontWeight="bold">AI Assistant</text>

            <text x="40" y="210" fill="#d1d5db" fontSize="11">Dưới đây là câu trả lời của tôi:</text>

            {/* Answer Content - Avatar + Name */}
            <rect x="40" y="230" width="220" height="80" rx="5" fill="#202123" stroke="#555" strokeWidth="1" />

            {userImage ? (
                <image
                    x="50" y="240" width="60" height="60"
                    href={userImage}
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="80" y="280" textAnchor="middle" fontSize="30">🧠</text>
            )}

            <text x="120" y="260" fontSize="10" fill="#10a37f" fontWeight="bold">THE ANSWER IS:</text>
            <text x="120" y="285" fontSize={Math.min(nameFontSize, 18)} fill="white" fontWeight="bold">
                {userName || "ASK YOUR MOM"}
            </text>

            {/* Input Bar */}
            <rect x="20" y="360" width="220" height="30" rx="5" fill="#40414f" stroke="#555" strokeWidth="1" />
            <text x="30" y="380" fill="#8e8ea0" fontSize="10">Regenerate response...</text>
            <rect x="250" y="360" width="30" height="30" rx="5" fill="#19c37d" />
            <text x="260" y="380" fill="white" fontSize="14">➤</text>
        </>
    ),

    // ===================================
    // 59. NEURAL LINK CHIP (Brain Chip)
    // ===================================
    'neural-link-chip': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-hex">
                    <path d="M150,110 L200,135 L200,185 L150,210 L100,185 L100,135 Z" />
                </clipPath>
            </defs>

            {/* Black Bio-Tech BG */}
            <rect width="300" height="400" fill="#000" />

            {/* Neural Network Connections */}
            <path d="M150,210 L150,300 M200,185 L260,250 M100,185 L40,250" stroke="#00e5ff" strokeWidth="1" opacity="0.5" />
            <circle cx="40" cy="250" r="3" fill="#00e5ff" />
            <circle cx="260" cy="250" r="3" fill="#00e5ff" />
            <circle cx="150" cy="300" r="3" fill="#00e5ff" />

            {/* Chip Structure */}
            <path d="M150,100 L210,130 L210,190 L150,220 L90,190 L90,130 Z" fill="#1a1a1a" stroke="#00e5ff" strokeWidth="2" />
            <path d="M150,110 L200,135 L200,185 L150,210 L100,185 L100,135 Z" fill="#000" />

            {/* Avatar */}
            {userImage ? (
                <image
                    x="90" y="110" width="120" height="120"
                    href={userImage}
                    clipPath="url(#avatar-clip-hex)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="170" textAnchor="middle" fontSize="40">🧠</text>
            )}

            {/* Data Streams */}
            <text x="20" y="100" fill="#00e5ff" fontSize="10" fontFamily="monospace" opacity="0.7">SYNC: 100%</text>
            <text x="220" y="100" fill="#00e5ff" fontSize="10" fontFamily="monospace" opacity="0.7">CPU: 99%</text>

            {/* Bottom Info */}
            <path d="M50,320 L250,320 L240,380 L60,380 Z" fill="#0d1117" stroke="#00e5ff" strokeWidth="1" />
            <text x="150" y="340" textAnchor="middle" fill="#00e5ff" fontSize="10" letterSpacing="2">IMPLANT SUCCESSFUL</text>

            <text x="150" y="365" textAnchor="middle" fontSize={Math.min(nameFontSize, 22)} fontWeight="900" fill="white" style={{ textShadow: "0 0 10px #00e5ff" }}>
                {userName || "CYBORG V1"}
            </text>
        </>
    ),

    // ===================================
    // 61. TIME MACHINE TICKET (Ticket)
    // ===================================
    'time-machine-ticket': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-ticket">
                    <circle cx="230" cy="180" r="40" />
                </clipPath>
            </defs>

            {/* Vortex Background */}
            <rect width="300" height="400" fill="#4B0082" />
            <circle cx="150" cy="200" r="180" fill="none" stroke="cyan" strokeWidth="1" opacity="0.2" />
            <circle cx="150" cy="200" r="140" fill="none" stroke="magenta" strokeWidth="1" opacity="0.2" />
            <circle cx="150" cy="200" r="100" fill="none" stroke="yellow" strokeWidth="1" opacity="0.2" />

            {/* Ticket Shape */}
            <g transform="translate(15, 120)">
                <path d="M0,0 L270,0 L270,160 L0,160 Z" fill="#FFF8DC" stroke="black" strokeWidth="2" />
                {/* Cutouts */}
                <circle cx="0" cy="80" r="10" fill="#4B0082" />
                <circle cx="270" cy="80" r="10" fill="#4B0082" />

                {/* Dashed Line */}
                <line x1="190" y1="10" x2="190" y2="150" stroke="black" strokeWidth="2" strokeDasharray="5 5" />

                {/* Content Left */}
                <text x="20" y="30" fontSize="16" fontWeight="900" fill="black">TIME TRAVEL</text>
                <text x="20" y="50" fontSize="10" fontFamily="monospace">BOARDING PASS</text>

                <text x="20" y="80" fontSize="10" fill="#555">PASSENGER:</text>
                <text x="20" y="100" fontSize={Math.min(nameFontSize, 18)} fontWeight="bold" fill="black">
                    {userName || "TIME TRAVELER"}
                </text>

                <text x="20" y="130" fontSize="10" fill="#555">DESTINATION:</text>
                <text x="90" y="130" fontSize="12" fontWeight="bold">NOSTALGIA CITY</text>

                {/* Content Right */}
                <text x="200" y="30" fontSize="10" fontWeight="bold">DATE</text>
                <text x="200" y="45" fontSize="12" fontFamily="monospace">????</text>

                <text x="200" y="130" fontSize="10" fontWeight="bold">CLASS</text>
                <text x="235" y="130" fontSize="12">VIP</text>

                {/* Avatar Overlay on Ticket Right */}
                <circle cx="215" cy="60" r="30" fill="#ddd" stroke="black" strokeWidth="1" />
                {/* We map coordinates relative to ticket g group. Global coordinates: 15+215=230, 120+60=180 */}
            </g>

            {userImage ? (
                <image
                    x="190" y="152" width="100" height="100"
                    href={userImage}
                    clipPath="url(#avatar-clip-ticket)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="230" y="190" textAnchor="middle" fontSize="30">⏳</text>
            )}

            {/* Holes Punch */}
            <circle cx="40" cy="140" r="3" fill="black" opacity="0.3" />
            <circle cx="40" cy="260" r="3" fill="black" opacity="0.3" />

            <text x="150" y="350" textAnchor="middle" fill="white" fontSize="12">CHUYẾN TÀU TUỔI THƠ</text>
        </>
    ),
};
