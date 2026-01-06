import React from 'react';
import { TemplateProps } from './types';

export const GamingTheme = {
    // ===================================
    // 31. YASUO GANK TEM (Yasuo Mastery 7)
    // ===================================
    'yasuo-gank-tem': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-mastery">
                    <circle cx="150" cy="150" r="70" />
                </clipPath>
            </defs>

            {/* Dark Blue Background */}
            <rect width="300" height="400" fill="#0d1b2a" />

            {/* Wind Effects */}
            <path d="M0,350 Q150,300 300,350" fill="none" stroke="#a9d6e5" strokeWidth="2" opacity="0.3" />
            <path d="M0,360 Q150,310 300,360" fill="none" stroke="#a9d6e5" strokeWidth="2" opacity="0.3" />

            {/* Mastery Badge (Simplified) */}
            <path d="M150,50 L200,80 L200,220 L150,250 L100,220 L100,80 Z" fill="#034052" stroke="#4682B4" strokeWidth="3" />
            <path d="M150,40 L220,90 L150,130 L80,90 Z" fill="#1b4332" opacity="0.5" /> {/* Top Gem Socket */}

            {/* Avatar Circle */}
            {userImage ? (
                <image
                    x="80" y="80" width="140" height="140"
                    href={userImage}
                    clipPath="url(#avatar-clip-mastery)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="165" textAnchor="middle" fontSize="50">🌪️</text>
            )}

            {/* Mastery Level 7 Icon (Blue Ribbon) */}
            <circle cx="150" cy="235" r="25" fill="#0077be" stroke="gold" strokeWidth="2" />
            <text x="150" y="245" textAnchor="middle" fill="white" fontWeight="bold" fontSize="20" fontFamily="serif">VII</text>

            <text x="150" y="300" textAnchor="middle" fontSize="16" fill="#a9d6e5" fontWeight="bold">HASAGI!</text>

            <text x="150" y="340" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#e0f7fa" style={{ textShadow: "0 0 5px #0077be" }}>
                {userName || "ĐẤNG YASUO"}
            </text>

            <text x="150" y="370" textAnchor="middle" fontSize="12" fill="#888">0/10/0 IS MY POWER SPIKE</text>
        </>
    ),

    // ===================================
    // 32. PRO PLAYER PUBG (Level 3 Helm)
    // ===================================
    'pro-player-pubg': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-helmet">
                    <rect x="75" y="130" width="150" height="80" rx="10" />
                </clipPath>
            </defs>

            {/* Battleground Dirt Background */}
            <rect width="300" height="400" fill="#5d4037" />
            <rect width="300" height="400" fill="black" opacity="0.2" />

            {/* Airdrop Parachute top */}
            <path d="M100,-20 L200,-20 L250,50 L50,50 Z" fill="#d32f2f" />
            <line x1="50" y1="50" x2="150" y2="100" stroke="white" strokeWidth="1" />
            <line x1="250" y1="50" x2="150" y2="100" stroke="white" strokeWidth="1" />

            {/* Spetsnaz Helmet Graphic */}
            <path d="M75,100 Q150,50 225,100 L225,250 Q150,280 75,250 Z" fill="#37474f" stroke="black" strokeWidth="3" />
            <rect x="75" y="130" width="150" height="80" rx="10" fill="black" /> {/* Visor area */}

            {/* Avatar inside Visor */}
            {userImage ? (
                <image
                    x="75" y="100" width="150" height="150"
                    href={userImage}
                    clipPath="url(#avatar-clip-helmet)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="180" textAnchor="middle" fontSize="40">🔫</text>
            )}

            {/* Pan Icon */}
            <circle cx="240" cy="280" r="30" fill="#212121" stroke="#555" strokeWidth="2" />
            <rect x="235" y="305" width="10" height="40" fill="#212121" transform="rotate(-15 240 310)" />

            <text x="150" y="320" textAnchor="middle" fill="#ffeb3b" fontWeight="bold" fontSize="14">WINNER WINNER CHICKEN DINNER</text>

            <text x="150" y="350" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="white" fontFamily="Stencil, sans-serif">
                {userName || "POCHINKI KING"}
            </text>
        </>
    ),

    // ===================================
    // 33. HACKER LỎ (Terminal)
    // ===================================
    'hacker-lor': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-mask">
                    <circle cx="150" cy="150" r="70" />
                </clipPath>
            </defs>

            {/* Terminal Black BG */}
            <rect width="300" height="400" fill="black" />

            {/* Green Code Rain */}
            <text x="20" y="50" fill="#0f0" fontSize="10" fontFamily="monospace" opacity="0.5" writingMode="tb">fail connect...</text>
            <text x="280" y="50" fill="#0f0" fontSize="10" fontFamily="monospace" opacity="0.5" writingMode="tb">brute force...</text>

            {/* Access Granted Box */}
            <rect x="50" y="250" width="200" height="40" fill="none" stroke="#0f0" strokeWidth="2" />
            <rect x="55" y="255" width="190" height="30" fill="#0f0" opacity="0.2" />
            <text x="150" y="275" textAnchor="middle" fill="#0f0" fontWeight="bold" fontFamily="monospace" letterSpacing="2">ACCESS GRANTED</text>

            {/* Avatar with Guy Fawkes Mask Overlay */}
            {userImage ? (
                <image
                    x="80" y="80" width="140" height="140"
                    href={userImage}
                    clipPath="url(#avatar-clip-mask)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="165" textAnchor="middle" fontSize="60">👺</text>
            )}

            {/* Mask Moustache Overlay (Simple) */}
            <path d="M130,170 Q150,160 170,170" fill="none" stroke="black" strokeWidth="2" opacity="0.7" />
            <path d="M150,170 L150,180" fill="none" stroke="black" strokeWidth="2" opacity="0.7" />

            <rect x="40" y="320" width="220" height="50" fill="#111" stroke="#0f0" strokeWidth="1" />
            <text x="150" y="350" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#0f0" fontFamily="Courier New, monospace">
                {userName || "ANONYMOUS"}
            </text>
        </>
    ),

    // ===================================
    // 34. GAME OVER SCREEN (Wasted)
    // ===================================
    'game-over-screen': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-tv">
                    <rect x="0" y="0" width="300" height="400" />
                </clipPath>
                <filter id="noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
                </filter>
            </defs>

            {/* Black Screen BG */}
            <rect width="300" height="400" fill="black" />

            {/* Avatar Full Screen Grayscale */}
            {userImage ? (
                <image
                    x="0" y="0" width="300" height="400"
                    href={userImage}
                    preserveAspectRatio="xMidYMid slice"
                    opacity="0.5"
                    style={{ filter: "grayscale(100%)" }}
                />
            ) : (
                <text x="150" y="200" textAnchor="middle" fontSize="80" opacity="0.5">💀</text>
            )}

            {/* Noise Overlay */}
            <rect width="300" height="400" filter="url(#noise)" opacity="0.1" />

            {/* WASTED Text Bar */}
            <rect x="0" y="180" width="300" height="60" fill="black" opacity="0.7" />
            <text x="150" y="225" textAnchor="middle" fill="#cc0000" fontSize="40" fontWeight="900" fontFamily="sans-serif" style={{ textShadow: "2px 2px 0px black" }}>WASTED</text>

            <text x="150" y="350" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="bold" fill="white" fontFamily="monospace">
                {userName || "TRY AGAIN?"}
            </text>
        </>
    ),

    // ===================================
    // 35. NINTENDO SWITCH
    // ===================================
    'nintendo-switch': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-screen">
                    <rect x="60" y="80" width="180" height="240" rx="5" />
                </clipPath>
            </defs>

            {/* Black Bezel BG */}
            <rect width="300" height="400" fill="#222" />

            {/* Screen Area */}
            <rect x="60" y="80" width="180" height="240" fill="#111" stroke="#333" strokeWidth="2" />

            {/* Avatar on Screen */}
            {userImage ? (
                <image
                    x="60" y="80" width="180" height="240"
                    href={userImage}
                    clipPath="url(#avatar-clip-screen)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="200" textAnchor="middle" fontSize="50">🎮</text>
            )}

            {/* Joy-Cons */}
            {/* Left Blue */}
            <path d="M10,80 L60,80 L60,320 L10,320 Q0,320 0,310 L0,90 Q0,80 10,80" fill="#00b0ff" />
            <circle cx="30" cy="120" r="8" fill="#222" /> {/* Stick */}
            <rect x="25" y="150" width="10" height="10" fill="#222" /> {/* D-pad */}
            <rect x="45" y="100" width="10" height="5" fill="#333" /> {/* - btn */}

            {/* Right Red */}
            <path d="M240,80 L290,80 Q300,80 300,90 L300,310 Q300,320 290,320 L240,320 L240,80" fill="#ff3d00" />
            <circle cx="270" cy="180" r="8" fill="#222" /> {/* Stick */}
            <circle cx="270" cy="130" r="5" fill="#222" /> {/* Buttons */}
            <circle cx="260" cy="140" r="5" fill="#222" />
            <circle cx="280" cy="140" r="5" fill="#222" />
            <circle cx="270" cy="150" r="5" fill="#222" />
            <rect x="245" y="100" width="10" height="5" fill="#333" /> {/* + btn */}

            {/* Name at bottom */}
            <text x="150" y="370" textAnchor="middle" fill="white" fontSize={Math.min(nameFontSize, 20)} fontWeight="bold" fontFamily="sans-serif">
                {userName || "PLAYER 1"}
            </text>
        </>
    ),

    // ===================================
    // 36. KEYBOARD WARRIOR (RGB)
    // ===================================
    'keyboard-warrior': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-key">
                    <rect x="75" y="75" width="150" height="150" rx="10" />
                </clipPath>
                <linearGradient id="rgb-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f00" />
                    <stop offset="33%" stopColor="#0f0" />
                    <stop offset="66%" stopColor="#00f" />
                    <stop offset="100%" stopColor="#f00" />
                </linearGradient>
            </defs>

            {/* Dark BG */}
            <rect width="300" height="400" fill="#111" />

            {/* Keycap Border */}
            <rect x="65" y="65" width="170" height="170" fill="none" stroke="url(#rgb-grad)" strokeWidth="4" rx="15" />
            <rect x="75" y="75" width="150" height="150" fill="#222" rx="10" />

            {/* Avatar */}
            {userImage ? (
                <image
                    x="75" y="75" width="150" height="150"
                    href={userImage}
                    clipPath="url(#avatar-clip-key)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="160" textAnchor="middle" fontSize="60">⌨️</text>
            )}

            {/* Keys Grid Details */}
            <rect x="40" y="250" width="40" height="40" fill="#333" stroke="#555" rx="5" />
            <text x="60" y="275" textAnchor="middle" fill="white" fontSize="12">C</text>
            <rect x="90" y="250" width="40" height="40" fill="#333" stroke="#555" rx="5" />
            <text x="110" y="275" textAnchor="middle" fill="white" fontSize="12">T</text>
            <rect x="140" y="250" width="40" height="40" fill="#333" stroke="#555" rx="5" />
            <text x="160" y="275" textAnchor="middle" fill="white" fontSize="12">R</text>
            <rect x="190" y="250" width="40" height="40" fill="#333" stroke="#555" rx="5" />
            <text x="210" y="275" textAnchor="middle" fill="white" fontSize="12">L</text>

            <rect x="40" y="300" width="220" height="40" fill="#333" stroke="url(#rgb-grad)" strokeWidth="2" rx="5" />
            <text x="150" y="325" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">SPACE BAR (TYPING...)</text>

            <text x="150" y="370" textAnchor="middle" fill="url(#rgb-grad)" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fontFamily="sans-serif">
                {userName || "ANH HÙNG BÀN PHÍM"}
            </text>
        </>
    ),

    // ===================================
    // 37. 404 NOT FOUND (Dino)
    // ===================================
    'loi-404-not-found': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-pixel">
                    <rect x="100" y="100" width="100" height="100" />
                </clipPath>
            </defs>

            {/* White Offline Screen */}
            <rect width="300" height="400" fill="white" />

            {/* Dino Icon (Simplified) */}
            <path d="M140,50 L160,50 L160,60 L170,60 L170,70 L140,70 L140,50" fill="#555" /> {/* Head */}
            <rect x="140" y="70" width="10" height="20" fill="#555" /> {/* Neck */}

            <text x="150" y="120" textAnchor="middle" fontSize="24" fontFamily="monospace" fill="#555" fontWeight="bold">No Internet</text>
            <text x="150" y="140" textAnchor="middle" fontSize="10" fontFamily="monospace" fill="#777">ERR_INTERNET_DISCONNECTED</text>

            {/* Avatar Pixellated Frame */}
            <rect x="90" y="170" width="120" height="120" fill="none" stroke="#555" strokeWidth="4" strokeDasharray="10 5" />
            {userImage ? (
                <image
                    x="100" y="180" width="100" height="100"
                    href={userImage}
                    clipPath="url(#avatar-clip-pixel)"
                    preserveAspectRatio="xMidYMid slice"
                    style={{ imageRendering: "pixelated" }}
                />
            ) : (
                <text x="150" y="240" textAnchor="middle" fontSize="40">🦖</text>
            )}

            <rect x="100" y="320" width="100" height="30" fill="#2196f3" rx="4" />
            <text x="150" y="340" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">Reload</text>

            <text x="150" y="380" textAnchor="middle" fill="#555" fontSize={Math.min(nameFontSize, 20)} fontFamily="monospace">
                {userName || "MẤT KẾT NỐI"}
            </text>
        </>
    ),

    // ===================================
    // 38. AI ROBOT X (Gundam HUD)
    // ===================================
    'ai-robot-x': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-hud">
                    <circle cx="150" cy="150" r="80" />
                </clipPath>
            </defs>

            {/* Deep Space BG */}
            <rect width="300" height="400" fill="#000022" />
            <circle cx="150" cy="200" r="140" fill="none" stroke="#00e5ff" strokeWidth="1" opacity="0.5" />
            <circle cx="150" cy="200" r="100" fill="none" stroke="#d500f9" strokeWidth="1" opacity="0.3" strokeDasharray="5 5" />

            {/* HUD Elements */}
            <path d="M20,20 L50,20 L60,30 L20,30 Z" fill="#00e5ff" />
            <text x="25" y="28" fill="black" fontSize="8" fontWeight="bold">SYS.ON</text>

            <path d="M250,30 L280,30 L280,380 L250,380 Z" fill="none" stroke="#00e5ff" strokeWidth="1" />
            <rect x="255" y="200" width="20" height="100" fill="#00e5ff" opacity="0.5" /> {/* Fuel gauge */}

            {/* Avatar Center */}
            {userImage ? (
                <image
                    x="70" y="70" width="160" height="160"
                    href={userImage}
                    clipPath="url(#avatar-clip-hud)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="160" textAnchor="middle" fontSize="60">🤖</text>
            )}

            {/* Crosshair Overlay */}
            <line x1="150" y1="120" x2="150" y2="180" stroke="#ff0000" strokeWidth="1" opacity="0.8" />
            <line x1="120" y1="150" x2="180" y2="150" stroke="#ff0000" strokeWidth="1" opacity="0.8" />
            <circle cx="150" cy="150" r="50" fill="none" stroke="#ff0000" strokeWidth="1" strokeDasharray="4 4" />

            <rect x="40" y="300" width="220" height="60" fill="none" stroke="#00e5ff" strokeWidth="2" />
            <path d="M40,300 L60,300 L50,310 L40,310 Z" fill="#00e5ff" />

            <text x="50" y="325" fill="#00e5ff" fontSize="10">K PILOT:</text>
            <text x="150" y="345" textAnchor="middle" fill="white" fontWeight="900" fontSize={Math.min(nameFontSize, 24)} style={{ textShadow: "0 0 5px #00e5ff" }}>
                {userName || "GUNDAM PILOT"}
            </text>
        </>
    ),

    // ===================================
    // 39. MINING COIN RIG (GPU)
    // ===================================
    'mining-coin-rig': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-fan">
                    <circle cx="150" cy="120" r="60" />
                </clipPath>
            </defs>

            {/* Circuit Board BG */}
            <rect width="300" height="400" fill="#1b5e20" />
            <path d="M0,50 L300,50 M0,150 L300,150 M0,250 L300,250" stroke="#4caf50" strokeWidth="1" opacity="0.3" />
            <rect x="20" y="20" width="10" height="360" fill="#ffd700" /> {/* Bus bar */}

            {/* GPU Fan Housing */}
            <rect x="60" y="40" width="180" height="160" fill="#333" stroke="black" strokeWidth="2" />
            <circle cx="150" cy="120" r="65" fill="#222" />

            {/* Avatar on Fan Hub */}
            {userImage ? (
                <image
                    x="90" y="60" width="120" height="120"
                    href={userImage}
                    clipPath="url(#avatar-clip-fan)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="130" textAnchor="middle" fontSize="40">⛏️</text>
            )}

            {/* Fan Blades Overlay */}
            <path d="M150,120 L150,55" stroke="black" strokeWidth="2" transform="rotate(0 150 120)" />
            <path d="M150,120 L150,55" stroke="black" strokeWidth="2" transform="rotate(120 150 120)" />
            <path d="M150,120 L150,55" stroke="black" strokeWidth="2" transform="rotate(240 150 120)" />

            {/* Stats Panel */}
            <rect x="40" y="220" width="220" height="100" fill="#222" stroke="#4caf50" strokeWidth="2" />
            <text x="50" y="240" fill="#4caf50" fontSize="12" fontFamily="monospace">HASH: 120 MH/s</text>
            <text x="50" y="260" fill="#4caf50" fontSize="12" fontFamily="monospace">TEMP: 85°C 🔥</text>
            <rect x="50" y="280" width="200" height="10" fill="#333" />
            <rect x="50" y="280" width="150" height="10" fill="#4caf50" /> {/* Progress */}

            <text x="150" y="370" textAnchor="middle" fill="#ffd700" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" style={{ textShadow: "1px 1px 0px black" }}>
                {userName || "TRÂU CÀY COIN"}
            </text>
        </>
    ),

    // ===================================
    // 40. THE BAI MA THUAT (Upgrade / Yugioh)
    // ===================================
    'the-bai-ma-thuat-upgrade': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-card-square">
                    <rect x="45" y="85" width="210" height="150" />
                </clipPath>
            </defs>

            {/* Card Frame Orange/Brown */}
            <rect width="300" height="400" fill="#c17c46" />
            <rect x="15" y="15" width="270" height="370" fill="none" stroke="#5d4037" strokeWidth="3" />

            {/* Header Box */}
            <rect x="25" y="25" width="250" height="35" fill="white" stroke="black" strokeWidth="1" />
            <text x="35" y="48" fontSize="18" fontWeight="bold" fill="black">{userName || "BLUE EYES DRAGON"}</text>
            <circle cx="255" cy="42" r="10" fill="#f44336" /> {/* Attribute */}

            {/* Stars Level */}
            <text x="150" y="75" textAnchor="middle" fontSize="14" fill="#ffd700" stroke="black" strokeWidth="0.5">⭐⭐⭐⭐⭐⭐⭐⭐</text>

            {/* Avatar Image Area */}
            <rect x="45" y="85" width="210" height="150" fill="#ddd" stroke="black" strokeWidth="4" />
            {userImage ? (
                <image
                    x="45" y="85" width="210" height="150"
                    href={userImage}
                    clipPath="url(#avatar-clip-card-square)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="170" textAnchor="middle" fontSize="60">🐉</text>
            )}

            {/* Description Box */}
            <rect x="25" y="250" width="250" height="120" fill="#f8e5b6" stroke="black" strokeWidth="2" />
            <text x="35" y="270" fontSize="12" fontWeight="bold">[Dragon / Effect]</text>
            <line x1="35" y1="275" x2="265" y2="275" stroke="black" strokeWidth="1" />

            <text x="35" y="295" fontSize="10" fill="black">This legendary creature cannot be</text>
            <text x="35" y="310" fontSize="10" fill="black">defeated by any deadline.</text>

            <line x1="35" y1="350" x2="265" y2="350" stroke="black" strokeWidth="1" />
            <text x="270" y="365" textAnchor="end" fontSize="12" fontWeight="bold">ATK/3000 DEF/2500</text>
        </>
    ),
};
