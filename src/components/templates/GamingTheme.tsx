import React from 'react';
import { TemplateProps } from './types';

export const GamingTheme = {


    // ===================================
    // 31.5. DANG YASUO (The God)
    // ===================================
    'dang-yasuo': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="avatar-clip-god">
                    <circle cx="200" cy="220" r="90" />
                </clipPath>
                <mask id="mastery-mask">
                    <rect width="100%" height="100%" fill="white" />
                    <circle cx="200" cy="220" r="90" fill="black" />
                </mask>
                {/* Sparkle Animation */}
                <symbol id="sparkle" viewBox="0 0 20 20">
                    <path d="M10,0 L12,8 L20,10 L12,12 L10,20 L8,12 L0,10 L8,8 Z" fill="#fff" />
                </symbol>
            </defs>

            {/* 1. NỀN & NEUBRUTALISM */}
            {/* Hard Shadow */}
            <rect x="10" y="10" width="380" height="580" fill="black" />

            {/* Main Card */}
            <rect width="380" height="580" fill="#034052" stroke="black" strokeWidth="4" />

            {/* Wind Texture */}
            <path d="M-50,500 Q150,400 450,550" fill="none" stroke="#a9d6e5" strokeWidth="20" opacity="0.1" />
            <path d="M-50,550 Q150,450 450,600" fill="none" stroke="#a9d6e5" strokeWidth="10" opacity="0.1" />
            <rect width="380" height="580" fill="url(#noise)" opacity="0.05" />

            {/* 2. CHI TIẾT GAME THỦ (HUD) */}
            {/* Rank Badge */}
            <g transform="translate(130, 40)">
                <path d="M0,0 L120,0 L130,15 L60,40 L-10,15 Z" fill="#d1d5db" stroke="black" strokeWidth="2" /> {/* Iron/Challenger shape */}
                <text x="60" y="22" textAnchor="middle" fontSize="14" fontWeight="bold" fill="black" fontFamily="sans-serif">IRON IV</text>
            </g>

            {/* Lag Indicator */}
            <g transform="translate(310, 40)">
                <path d="M10,20 Q25,5 40,20" fill="none" stroke="#f00" strokeWidth="3" opacity="0.5" />
                <path d="M15,25 Q25,15 35,25" fill="none" stroke="#f00" strokeWidth="3" />
                <circle cx="25" cy="30" r="3" fill="#f00" />
                <text x="25" y="45" textAnchor="middle" fontSize="10" fill="#f00" fontWeight="bold">999ms</text>
            </g>

            {/* 3. NÂNG CẤP KHUNG AVATAR (Mastery 7) */}
            {/* Mastery Background Wing */}
            <path d="M200,80 L280,120 L280,300 L200,340 L120,300 L120,120 Z" fill="#0f2b33" stroke="#4682B4" strokeWidth="4" />
            <circle cx="200" cy="220" r="100" fill="none" stroke="#d4af37" strokeWidth="4" strokeDasharray="10 5" /> {/* Gold ring */}

            {/* Avatar */}
            {userImage ? (
                <image
                    x="110" y="130" width="180" height="180"
                    href={userImage}
                    clipPath="url(#avatar-clip-god)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="200" y="240" textAnchor="middle" fontSize="80">🌪️</text>
            )}

            {/* Mastery 7 Badge Front */}
            <g transform="translate(200, 310)">
                <circle r="30" fill="#0077be" stroke="#d4af37" strokeWidth="3" />
                <path d="M-20,-10 L0,20 L20,-10" fill="none" stroke="#d4af37" strokeWidth="2" />
                <text x="0" y="10" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="24" fontFamily="serif">VII</text>
            </g>

            {/* Animated Sparkles */}
            <use href="#sparkle" x="120" y="150" width="20" height="20">
                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            </use>
            <use href="#sparkle" x="260" y="250" width="15" height="15">
                <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
            </use>

            {/* Enemy Missing Pings (?) */}
            <text x="140" y="150" fontSize="30" fill="#fbbf24" fontWeight="bold">
                ?
                <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
            </text>
            <text x="250" y="170" fontSize="40" fill="#fbbf24" fontWeight="bold">?
                <animate attributeName="opacity" values="1;0;1" dur="1.2s" begin="0.5s" repeatCount="indefinite" />
            </text>
            <text x="180" y="120" fontSize="24" fill="#ef4444" fontWeight="bold">?</text>


            {/* 4. TYPOGRAPHY & HIỆU ỨNG */}
            <text x="190" y="420" textAnchor="middle" fontSize={Math.min(nameFontSize, 32)} fontWeight="900" fill="#e0f7fa" style={{ textShadow: "0 0 10px #00e5ff, 2px 2px 0px #000" }}>
                {userName || "ĐẤNG YASUO"}
            </text>

            <text x="190" y="460" textAnchor="middle" fontSize="16" fill="#a9d6e5" fontFamily="monospace" fontWeight="bold" letterSpacing="1">
                0/10/0 IS MY POWER SPIKE
            </text>
            <text x="190" y="520" textAnchor="middle" fontSize="14" fill="#0077be" fontStyle="italic">
                "Hasagi! Trăn trối (đồng đội)"
            </text>
        </svg>
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
    // 56. CYBERPUNK CITY (Neon)
    // ===================================
    'cyberpunk-city': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-hex-cyber">
                    <polygon points="150,90 220,130 220,210 150,250 80,210 80,130" />
                </clipPath>
            </defs>

            {/* Dark City BG */}
            <rect width="300" height="400" fill="#0d001a" />

            {/* Neon Buildings */}
            <rect x="20" y="200" width="40" height="200" fill="#240046" stroke="#d500f9" strokeWidth="1" />
            <rect x="240" y="180" width="50" height="220" fill="#240046" stroke="#00e5ff" strokeWidth="1" />
            <rect x="70" y="250" width="60" height="150" fill="#3c096c" />
            <rect x="180" y="220" width="50" height="180" fill="#3c096c" />

            {/* Grid Floor */}
            <path d="M0,350 L300,350 M0,350 L150,300 L300,350" stroke="#f50057" strokeWidth="1" opacity="0.5" />

            {/* Hologram Circle */}
            <circle cx="150" cy="170" r="90" fill="none" stroke="#00e5ff" strokeWidth="2" strokeDasharray="10 5" opacity="0.8" />
            <circle cx="150" cy="170" r="80" fill="none" stroke="#d500f9" strokeWidth="1" />

            {/* Avatar */}
            {userImage ? (
                <image
                    x="80" y="90" width="140" height="160"
                    href={userImage}
                    clipPath="url(#avatar-clip-hex-cyber)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="180" textAnchor="middle" fontSize="50">🌃</text>
            )}

            {/* Glitch Text */}
            <text x="150" y="60" textAnchor="middle" fontSize="24" fontWeight="900" fill="#00e5ff" fontFamily="monospace" style={{ textShadow: "2px 0px #f50057" }}>NIGHT CITY</text>

            <rect x="40" y="320" width="220" height="50" fill="black" stroke="#d500f9" strokeWidth="2" transform="skewX(-10)" />
            <text x="150" y="350" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#fff" fontFamily="sans-serif" transform="skewX(-10)">
                {userName || "NETRUNNER"}
            </text>

            <text x="150" y="380" textAnchor="middle" fontSize="10" fill="#00e5ff">WAKE UP SAMURAI</text>
        </>
    ),

    // ===================================
    // 57. METAVERSE AVATAR (VR)
    // ===================================
    'metaverse-avatar': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-goggles">
                    <rect x="75" y="100" width="150" height="150" rx="20" />
                </clipPath>
                <linearGradient id="vr-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7b1fa2" />
                    <stop offset="100%" stopColor="#4a148c" />
                </linearGradient>
            </defs>

            {/* VR Space BG */}
            <rect width="300" height="400" fill="url(#vr-grad)" />

            {/* Floating UI Panels */}
            <rect x="20" y="50" width="60" height="80" rx="5" fill="white" opacity="0.1" stroke="white" strokeWidth="1" />
            <rect x="220" y="100" width="70" height="100" rx="5" fill="white" opacity="0.1" stroke="white" strokeWidth="1" />

            {/* Connection Lines */}
            <line x1="150" y1="175" x2="80" y2="90" stroke="white" strokeWidth="1" opacity="0.5" strokeDasharray="4 4" />
            <line x1="150" y1="175" x2="220" y2="150" stroke="white" strokeWidth="1" opacity="0.5" strokeDasharray="4 4" />

            {/* Avatar Frame - VR Headset Style */}
            <rect x="70" y="95" width="160" height="160" rx="20" fill="rgba(255,255,255,0.1)" stroke="#ea80fc" strokeWidth="2" />

            {/* Avatar */}
            {userImage ? (
                <image
                    x="75" y="100" width="150" height="150"
                    href={userImage}
                    clipPath="url(#avatar-clip-goggles)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="180" textAnchor="middle" fontSize="60">👓</text>
            )}

            {/* VR Goggles Overlay */}
            <rect x="60" y="140" width="180" height="60" rx="10" fill="black" opacity="0.8" />
            <text x="150" y="175" textAnchor="middle" fill="#00e676" fontFamily="monospace" fontSize="14" fontWeight="bold">CONNECTED</text>

            <text x="150" y="300" textAnchor="middle" fontSize="10" fill="#ea80fc" letterSpacing="2">PLAYER ONE READY</text>

            <text x="150" y="340" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="white" style={{ textShadow: "0 0 10px #ea80fc" }}>
                {userName || "VIRTUAL BEING"}
            </text>

            <rect x="100" y="360" width="100" height="5" fill="#333" rx="2" />
            <rect x="100" y="360" width="70" height="5" fill="#00e676" rx="2" /> {/* Loading bar */}
        </>
    ),
};
