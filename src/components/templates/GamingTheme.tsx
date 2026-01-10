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
                {/* 1. White Outline Glow for Pan */}
                <filter id="pan-glow">
                    <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="white" floodOpacity="0.8" />
                </filter>
                {/* 2. Dirt Texture */}
                <filter id="dirt-texture">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                    <feColorMatrix type="matrix" values="0.3 0 0 0 0  0 0.2 0 0 0  0 0 0.1 0 0  0 0 0 0.3 0" />
                </filter>
                {/* 3. Red Smoke Gradient */}
                <linearGradient id="red-smoke-grad" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#d32f2f" stopOpacity="0" />
                    <stop offset="40%" stopColor="#ef5350" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#e57373" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* Battleground Dirt Background */}
            <rect width="300" height="400" fill="#3E2723" />
            <rect width="300" height="400" filter="url(#dirt-texture)" opacity="0.6" style={{ mixBlendMode: 'multiply' }} />

            {/* Map Grid Overlay (Subtle) */}
            <path d="M0,50 h300 M0,100 h300 M0,150 h300 M0,200 h300 M0,250 h300 M0,300 h300 M0,350 h300" stroke="#fff" strokeWidth="0.5" opacity="0.05" />
            <path d="M50,0 v400 M100,0 v400 M150,0 v400 M200,0 v400 M250,0 v400" stroke="#fff" strokeWidth="0.5" opacity="0.05" />

            {/* Red Smoke Rising (Behind Crate) */}
            <path d="M120,50 Q100,20 130,-10 T160,-50" fill="none" stroke="url(#red-smoke-grad)" strokeWidth="60" filter="url(#pan-glow)" opacity="0.6">
                <animate attributeName="d" values="M120,50 Q100,20 130,-10 T160,-50; M120,50 Q140,20 110,-10 T140,-50; M120,50 Q100,20 130,-10 T160,-50" dur="5s" repeatCount="indefinite" />
            </path>

            {/* Airdrop Parachute top */}
            <path d="M100,-20 L200,-20 L250,50 L50,50 Z" fill="#b71c1c" stroke="#333" strokeWidth="1" />
            <line x1="50" y1="50" x2="150" y2="100" stroke="white" strokeWidth="1" opacity="0.8" />
            <line x1="250" y1="50" x2="150" y2="100" stroke="white" strokeWidth="1" opacity="0.8" />

            {/* Ember Particles (Floating sparks) */}
            <circle cx="50" cy="350" r="1" fill="#ff9800" opacity="0.8">
                <animate attributeName="cy" from="350" to="300" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="280" cy="380" r="1.5" fill="#ff5722" opacity="0.6">
                <animate attributeName="cy" from="380" to="320" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="20" cy="200" r="1" fill="#ffeb3b" opacity="0.5">
                <animate attributeName="cy" from="200" to="150" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
            </circle>

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

            {/* Pan Icon - Enhanced with Outline & Glow */}
            <g filter="url(#pan-glow)">
                <circle cx="240" cy="280" r="30" fill="#212121" stroke="#fff" strokeWidth="1.5" />
                <rect x="235" y="305" width="10" height="40" fill="#212121" stroke="#555" strokeWidth="1" transform="rotate(-15 240 310)" />
                {/* Metallic shine line */}
                <path d="M230,270 Q240,260 250,270" fill="none" stroke="#555" strokeWidth="2" opacity="0.5" />
            </g>

            <text x="150" y="320" textAnchor="middle" fill="#ffeb3b" fontWeight="bold" fontSize="14" style={{ textShadow: "1px 1px 2px black" }}>WINNER WINNER CHICKEN DINNER</text>

            <text x="150" y="355" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#eee" fontFamily="Stencil, Black Ops One, Impact, sans-serif" style={{ letterSpacing: "2px", textShadow: "2px 2px 0px #333" }}>
                {userName || "POCHINKI KING"}
            </text>
        </>
    ),

    // ===================================
    // 33. HACKER LỎ (Terminal)
    // ===================================
    // 33. HACKER LỎ (Cyber Infiltration)
    'hacker-lor': ({ userName, userImage, nameFontSize, description }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-mask">
                    <circle cx="150" cy="150" r="66" />
                </clipPath>
                {/* Neon Green Glow */}
                <filter id="neon-green-glow">
                    <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* CRT Noise */}
                <filter id="crt-noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                {/* Glitch Effect */}
                <filter id="text-glitch-green">
                    <feOffset in="SourceGraphic" dx="-2" dy="0" result="offset1" />
                    <feColorMatrix in="offset1" type="matrix" values="0 1 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0" result="green" />
                    <feMerge>
                        <feMergeNode in="green" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Terminal Black BG */}
            <rect width="300" height="400" fill="#050505" />

            {/* CRT Noise Overlay */}
            <rect width="300" height="400" filter="url(#crt-noise)" opacity="0.12" style={{ mixBlendMode: 'overlay' }} />

            {/* Green Code Texts (Shortened to avoid overlap) */}
            <text x="20" y="50" fill="#0f0" fontSize="10" fontFamily="monospace" opacity="0.6" writingMode="tb">fail connect</text>
            <text x="280" y="50" fill="#0f0" fontSize="10" fontFamily="monospace" opacity="0.6" writingMode="tb">brute force</text>

            {/* Access Granted Box - Neon Glow */}
            <g transform="translate(0, 5)" filter="url(#neon-green-glow)">
                <rect x="50" y="250" width="200" height="40" fill="none" stroke="#0f0" strokeWidth="2" />
                <rect x="55" y="255" width="190" height="30" fill="#0f0" opacity="0.1" />
                <text x="160" y="275" textAnchor="middle" fill="#0f0" fontWeight="bold" fontFamily="Courier New, monospace" letterSpacing="2" fontSize="14">ACCESS GRANTED</text>
                {/* Unlock Icon */}
                <path d="M85,268 h8 v6 h-8 z M89,268 v-3 a2,2 0 0 0 -4,0" fill="none" stroke="#0f0" strokeWidth="1.5" />
            </g>

            {/* Avatar Area - Slightly Reduced */}
            {userImage ? (
                <g>
                    <image
                        x="84" y="84" width="132" height="132"
                        href={userImage}
                        clipPath="url(#avatar-clip-mask)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                    {/* Green Overlay */}
                    <circle cx="150" cy="150" r="66" fill="#0f0" opacity="0.15" style={{ mixBlendMode: 'overlay' }} />
                </g>
            ) : (
                <text x="150" y="165" textAnchor="middle" fontSize="60">👺</text>
            )}

            {/* Scanning Border Animation */}
            <circle cx="150" cy="150" r="71" fill="none" stroke="#0f0" strokeWidth="2" strokeDasharray="10 10" opacity="0.8" filter="url(#neon-green-glow)">
                <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="4s" repeatCount="indefinite" />
            </circle>

            {/* Name Box - Moved UP 15px */}
            <rect x="40" y="305" width="220" height="50" fill="#000" stroke="#0f0" strokeWidth="1" />
            {/* Name - Mono Glitch */}
            <text x="150" y="335" textAnchor="middle" fontSize={Math.min(nameFontSize, 22)} fontWeight="bold" fill="#0f0" fontFamily="Courier New, monospace" filter="url(#text-glitch-green)" style={{ letterSpacing: '2px' }}>
                {userName || "ANONYMOUS"}
            </text>

            {/* Caption - Bottom Layer, Top Visual */}
            <text x="150" y="385" textAnchor="middle" fontSize="9" fill="#aaffaa" fontFamily="monospace" fontWeight="bold" filter="url(#neon-green-glow)">
                {description || "Hacker lỏ: Chỉ giỏi hack pass wifi nhà hàng xóm"}
            </text>
        </>
    ),

    // ===================================
    // 34. GAME OVER SCREEN (Wasted)
    // ===================================
    // 34. GAME OVER SCREEN (Cinematic Fail/Wasted)
    'game-over-screen': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-tv">
                    <rect x="0" y="0" width="300" height="400" />
                </clipPath>
                {/* Film Grain Noise */}
                <filter id="wasted-grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
                    <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.3 0" />
                </filter>
                {/* Soft Red Glow for Text */}
                <filter id="wasted-glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Fade Mask based on Gradient */}
                <linearGradient id="fade-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                    <stop offset="20%" stopColor="white" stopOpacity="1" />
                    <stop offset="80%" stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <mask id="fade-mask">
                    <rect x="0" y="0" width="300" height="400" fill="url(#fade-grad)" />
                </mask>
            </defs>

            {/* Black Screen BG */}
            <rect width="300" height="400" fill="#000" />

            {/* Avatar Full Screen Grayscale + Contrast */}
            {userImage ? (
                <image
                    x="0" y="0" width="300" height="400"
                    href={userImage}
                    preserveAspectRatio="xMidYMid slice"
                    opacity="0.6"
                    style={{ filter: "grayscale(100%) contrast(1.2)" }}
                />
            ) : (
                <text x="150" y="200" textAnchor="middle" fontSize="80" opacity="0.5">💀</text>
            )}

            {/* Noise Overlay */}
            <rect width="300" height="400" filter="url(#wasted-grain)" opacity="0.15" />

            {/* WASTED Text Bar - Narrower with Fade Edges */}
            <rect x="0" y="180" width="300" height="50" fill="black" opacity="0.85" mask="url(#fade-mask)" />

            {/* WASTED Text - GTA Style */}
            <text x="150" y="220" textAnchor="middle" fill="#cc0000" fontSize="42" fontWeight="900"
                fontFamily="Impact, Pricedown, sans-serif"
                stroke="black" strokeWidth="1"
                filter="url(#wasted-glow)"
                style={{ letterSpacing: "2px" }}>
                {userName || "GAME OVER"}
            </text>

            {/* Blinking Try Again */}
            <text x="150" y="350" textAnchor="middle" fontSize={Math.min(nameFontSize, 20)} fontWeight="bold" fill="white" fontFamily="monospace">
                TRY AGAIN?
                <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
            </text>
        </>
    ),

    // ===================================
    // 35. NINTENDO SWITCH (Console Pro)
    'nintendo-switch': ({ userName, userImage, nameFontSize, description }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-screen">
                    <rect x="60" y="80" width="180" height="240" rx="5" />
                </clipPath>
                {/* Soft White Glow */}
                <filter id="soft-white-glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* 3D Bevel for Buttons */}
                <filter id="btn-bevel">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
                    <feOffset in="blur" dx="1" dy="1" result="shadow" />
                    <feSpecularLighting in="blur" surfaceScale="2" specularConstant="1" specularExponent="20" lightingColor="#white" result="specular">
                        <fePointLight x="-5000" y="-10000" z="20000" />
                    </feSpecularLighting>
                    <feComposite in="specular" in2="SourceAlpha" operator="in" result="specular" />
                    <feComposite in="SourceGraphic" in2="shadow" operator="over" />
                </filter>
                {/* Screen Gloss Gradient */}
                <linearGradient id="gloss-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                    <stop offset="40%" stopColor="white" stopOpacity="0" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* Black Bezel BG */}
            <rect width="300" height="400" fill="#222" />

            {/* Screen Area with Bezel */}
            {/* Main Screen */}
            <rect x="60" y="80" width="180" height="240" fill="#111" stroke="#000" strokeWidth="6" />

            {/* Avatar on Screen */}
            {userImage ? (
                <g>
                    <image
                        x="60" y="80" width="180" height="240"
                        href={userImage}
                        clipPath="url(#avatar-clip-screen)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                    {/* Gloss Reflection */}
                    <rect x="60" y="80" width="180" height="240" fill="url(#gloss-grad)" clipPath="url(#avatar-clip-screen)" style={{ pointerEvents: 'none' }} />
                </g>
            ) : (
                <text x="150" y="200" textAnchor="middle" fontSize="50">🎮</text>
            )}

            {/* Joy-Cons (Device Body) with Border */}
            {/* Left Blue */}
            <path d="M10,80 L60,80 L60,320 L10,320 Q0,320 0,310 L0,90 Q0,80 10,80" fill="#00b0ff" stroke="black" strokeWidth="1" />
            <circle cx="30" cy="120" r="10" fill="#222" filter="url(#btn-bevel)" /> {/* Stick Base */}
            <circle cx="30" cy="120" r="8" fill="#111" /> {/* Stick Top */}

            <rect x="25" y="150" width="10" height="10" fill="#222" rx="2" filter="url(#btn-bevel)" /> {/* D-pad Mock */}
            <rect x="45" y="100" width="10" height="4" fill="#333" rx="1" /> {/* - btn */}

            {/* Right Red */}
            <path d="M240,80 L290,80 Q300,80 300,90 L300,310 Q300,320 290,320 L240,320 L240,80" fill="#ff3d00" stroke="black" strokeWidth="1" />
            <circle cx="270" cy="180" r="10" fill="#222" filter="url(#btn-bevel)" /> {/* Stick Base */}
            <circle cx="270" cy="180" r="8" fill="#111" /> {/* Stick Top */}

            {/* Buttons 3D */}
            <circle cx="270" cy="130" r="5" fill="#222" filter="url(#btn-bevel)" />
            <circle cx="260" cy="140" r="5" fill="#222" filter="url(#btn-bevel)" />
            <circle cx="280" cy="140" r="5" fill="#222" filter="url(#btn-bevel)" />
            <circle cx="270" cy="150" r="5" fill="#222" filter="url(#btn-bevel)" />

            <rect x="245" y="100" width="10" height="4" fill="#333" rx="1" /> {/* + btn */}

            {/* Name at bottom - Glowing */}
            <text x="150" y="360" textAnchor="middle" fill="white" fontSize={Math.min(nameFontSize, 20)} fontWeight="900" fontFamily="sans-serif" filter="url(#soft-white-glow)" letterSpacing="1">
                {userName || "PLAYER 1"}
            </text>

            {/* Caption */}
            <text x="150" y="380" textAnchor="middle" fill="#ccc" fontSize="10" fontWeight="normal" fontFamily="sans-serif">
                {description || "Cuộc sống là một trò chơi, quan trọng là mình có Joy-con."}
            </text>
        </>
    ),

    // ===================================
    // 36. KEYBOARD WARRIOR (RGB Dark)
    // ===================================
    'keyboard-warrior': ({ userName, userImage, nameFontSize, description }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-key">
                    <rect x="80" y="70" width="140" height="140" rx="10" />
                </clipPath>
                {/* Cyan Neon Glow Weak */}
                <filter id="neon-cyan-glow-weak">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Cyan Neon Glow Strong */}
                <filter id="neon-cyan-glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
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
            <rect x="70" y="60" width="160" height="160" fill="none" stroke="url(#rgb-grad)" strokeWidth="4" rx="15" />
            <rect x="80" y="70" width="140" height="140" fill="#222" rx="10" />

            {/* Avatar - Reduced size for space */}
            {userImage ? (
                <image
                    x="80" y="70" width="140" height="140"
                    href={userImage}
                    clipPath="url(#avatar-clip-key)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="150" textAnchor="middle" fontSize="60">⌨️</text>
            )}

            {/* Keys Grid Details - Moved UP 20px (y=230) */}
            <g transform="translate(0, -20)">
                <rect x="40" y="250" width="40" height="40" fill="#333" stroke="#555" rx="5" />
                <text x="60" y="275" textAnchor="middle" fill="white" fontSize="12">C</text>
                <rect x="90" y="250" width="40" height="40" fill="#333" stroke="#555" rx="5" />
                <text x="110" y="275" textAnchor="middle" fill="white" fontSize="12">T</text>
                <rect x="140" y="250" width="40" height="40" fill="#333" stroke="#555" rx="5" />
                <text x="160" y="275" textAnchor="middle" fill="white" fontSize="12">R</text>
                <rect x="190" y="250" width="40" height="40" fill="#333" stroke="#555" rx="5" />
                <text x="210" y="275" textAnchor="middle" fill="white" fontSize="12">L</text>

                {/* Space Bar (y=300 -> 280) Ends 320 */}
                <rect x="40" y="300" width="220" height="40" fill="#333" stroke="url(#rgb-grad)" strokeWidth="2" rx="5" />
                <text x="150" y="325" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">SPACE BAR</text>
            </g>

            {/* New Caption - Moved down to 350 (Gap 30px from Space) */}
            <text x="150" y="350" textAnchor="middle" fill="#00e5ff" fontSize="8" fontFamily="monospace" fontWeight="bold" filter="url(#neon-cyan-glow-weak)">
                {description || "Gõ phím bình thiên hạ, enter định giang san"}
            </text>

            <text x="150" y="385" textAnchor="middle" fill="url(#rgb-grad)" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fontFamily="sans-serif">
                {userName || "ANH HÙNG BÀN PHÍM"}
            </text>
        </>
    ),

    // ===================================
    // 37. 404 NOT FOUND (Dino)
    // ===================================
    // 37. 404 NOT FOUND (Browser Parody)
    'loi-404-not-found': ({ userName, userImage, nameFontSize, description }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-pixel">
                    <rect x="90" y="170" width="120" height="120" />
                </clipPath>
                {/* Paper Noise */}
                <filter id="paper-noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
                    <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.1 0" in="noise" result="coloredNoise" />
                </filter>
                {/* Soft Blur for Image */}
                <filter id="soft-blur-noise">
                    <feGaussianBlur stdDeviation="0.5" result="blur" />
                    <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="1" result="noise" />
                    <feComposite in="noise" in2="blur" operator="in" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="noise" />
                    </feMerge>
                </filter>
                {/* Button Shadow */}
                <filter id="btn-soft-shadow">
                    <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.2" />
                </filter>
            </defs>

            {/* White Offline Screen with Noise */}
            <rect width="300" height="400" fill="#f8f9fa" />
            <rect width="300" height="400" filter="url(#paper-noise)" opacity="0.4" />

            {/* Dino Icon (8-bit Pixel Art Style) */}
            <g transform="translate(130, 60) scale(4)">
                {/* Simple Dino Shape */}
                <path d="M5,0 h5 v1 h-1 v1 h-1 v1 h1 v1 h3 v1 h-1 v1 h-1 v1 h-4 v-1 h-2 v-2 h2 v-1 h2 v-1 h-3 v-1 h2 v-1" fill="#5f6368" />
            </g>

            <text x="150" y="120" textAnchor="middle" fontSize="22" fontFamily="monospace" fill="#202124" fontWeight="900">No Internet</text>
            <text x="150" y="140" textAnchor="middle" fontSize="11" fontFamily="monospace" fill="#5f6368" fontWeight="bold">ERR_INTERNET_DISCONNECTED</text>

            {/* Avatar - Dashed Box */}
            <rect x="85" y="165" width="130" height="130" fill="none" stroke="#5f6368" strokeWidth="2" strokeDasharray="8 6" rx="4" />

            {userImage ? (
                <image
                    x="90" y="170" width="120" height="120"
                    href={userImage}
                    clipPath="url(#avatar-clip-pixel)"
                    preserveAspectRatio="xMidYMid slice"
                    style={{ imageRendering: "pixelated" }}
                    filter="url(#soft-blur-noise)"
                    opacity="0.9"
                />
            ) : (
                <text x="150" y="240" textAnchor="middle" fontSize="40">🦖</text>
            )}

            {/* Reload Button */}
            <g filter="url(#btn-soft-shadow)" style={{ cursor: 'pointer' }}>
                <rect x="100" y="320" width="100" height="36" fill="#1a73e8" rx="18" />
                <text x="150" y="343" textAnchor="middle" fill="white" fontWeight="bold" fontSize="13" fontFamily="sans-serif">Reload</text>
            </g>

            <text x="150" y="385" textAnchor="middle" fill="#5f6368" fontSize={Math.min(nameFontSize, 20)} fontFamily="monospace" fontWeight="bold">
                {userName || "MẤT KẾT NỐI"}
            </text>

            {/* Description/Caption */}
            {description && (
                <text x="150" y="280" textAnchor="middle" fill="#5f6368" fontSize="10" fontFamily="monospace" fontStyle="italic">
                    "{description}"
                </text>
            )}
        </>
    ),

    // ===================================
    // 38. AI ROBOT X (Gundam HUD)
    // ===================================
    // 40. GUNDAM PILOT (Mecha Cockpit)
    'ai-robot-x': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-hud">
                    <circle cx="150" cy="150" r="80" />
                </clipPath>
                {/* Cyan Glow Strong */}
                <filter id="cyan-glow-strong">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Film Grain Noise */}
                <filter id="film-grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
                    <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.2 0" in="noise" result="coloredNoise" />
                </filter>
            </defs>

            {/* Deep Space BG with Grain */}
            <rect width="300" height="400" fill="#000022" />
            <rect width="300" height="400" filter="url(#film-grain)" opacity="0.1" />

            <circle cx="150" cy="200" r="140" fill="none" stroke="#00e5ff" strokeWidth="1" opacity="0.5" />
            <circle cx="150" cy="200" r="100" fill="none" stroke="#d500f9" strokeWidth="1" opacity="0.3" strokeDasharray="5 5" />

            {/* HUD Elements */}
            <path d="M20,20 L50,20 L60,30 L20,30 Z" fill="#00e5ff" />
            <text x="25" y="28" fill="black" fontSize="8" fontWeight="bold">SYS.ON</text>

            {/* Right Side Stats */}
            <path d="M250,30 L280,30 L280,380 L250,380 Z" fill="none" stroke="#00e5ff" strokeWidth="1" />
            <rect x="255" y="200" width="20" height="100" fill="#00e5ff" opacity="0.5" /> {/* Fuel gauge */}
            <text x="265" y="60" textAnchor="middle" fill="#00e5ff" fontSize="8" fontWeight="bold" opacity="0.7">ALT</text>
            <text x="265" y="72" textAnchor="middle" fill="#fff" fontSize="8" opacity="0.7">5000</text>
            <text x="265" y="100" textAnchor="middle" fill="#00e5ff" fontSize="8" fontWeight="bold" opacity="0.7">SPD</text>
            <text x="265" y="112" textAnchor="middle" fill="#fff" fontSize="8" opacity="0.7">M.2</text>

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

            {/* Crosshair Overlay - Pulsing */}
            <g>
                <line x1="150" y1="120" x2="150" y2="180" stroke="#ff0000" strokeWidth="1.5" opacity="0.8" />
                <line x1="120" y1="150" x2="180" y2="150" stroke="#ff0000" strokeWidth="1.5" opacity="0.8" />
                <circle cx="150" cy="150" r="50" fill="none" stroke="#ff0000" strokeWidth="1.5" strokeDasharray="4 4" />
                <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
            </g>

            <rect x="40" y="300" width="220" height="60" fill="none" stroke="#00e5ff" strokeWidth="2" filter="url(#cyan-glow-strong)" />
            <path d="M40,300 L60,300 L50,310 L40,310 Z" fill="#00e5ff" filter="url(#cyan-glow-strong)" />

            <text x="50" y="325" fill="#00e5ff" fontSize="10">K PILOT:</text>
            {/* Title with Strong Glow */}
            <text x="150" y="345" textAnchor="middle" fill="white" fontWeight="900" fontSize={Math.min(nameFontSize, 24)} style={{ textShadow: "0 0 8px #00e5ff" }} filter="url(#cyan-glow-strong)">
                {userName || "GUNDAM PILOT"}
            </text>

            {/* Caption - Top Layer, Spacious, Pushed down for padding */}
            <text x="150" y="390" textAnchor="middle" fill="#00e5ff" fontSize="12" fontWeight="bold" letterSpacing="0.5">
                Khởi động hệ thống, sẵn sàng quét sạch deadline!
            </text>
        </>
    ),

    // ===================================
    // 39. MINING COIN RIG (Hardware Master)
    // ===================================
    'mining-coin-rig': ({ userName, userImage, nameFontSize, description }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-fan">
                    <circle cx="150" cy="120" r="60" />
                </clipPath>
                {/* Green Glow for Fan */}
                <filter id="green-fan-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Metallic Text Filter */}
                <filter id="metallic-emboss">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
                    <feSpecularLighting in="blur" surfaceScale="3" specularConstant="1" specularExponent="20" lightingColor="#fff" result="spec">
                        <fePointLight x="-5000" y="-10000" z="20000" />
                    </feSpecularLighting>
                    <feComposite in="spec" in2="SourceAlpha" operator="in" result="specOut" />
                    <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
                </filter>
                {/* Circuit Pattern */}
                <pattern id="circuit-board" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M10,10 h20 v10 h-10" fill="none" stroke="#4caf50" strokeWidth="1" opacity="0.3" />
                    <path d="M40,40 v-20 h-10" fill="none" stroke="#4caf50" strokeWidth="1" opacity="0.3" />
                    <circle cx="10" cy="10" r="2" fill="#4caf50" opacity="0.3" />
                    <circle cx="40" cy="40" r="2" fill="#4caf50" opacity="0.3" />
                </pattern>
            </defs>

            {/* Circuit Board BG */}
            <rect width="300" height="400" fill="#1b5e20" />
            <rect width="300" height="400" fill="url(#circuit-board)" />
            <rect x="20" y="20" width="10" height="360" fill="#ffd700" /> {/* Bus bar */}

            {/* GPU Fan Housing */}
            <rect x="60" y="40" width="180" height="160" fill="#333" stroke="black" strokeWidth="2" />
            <circle cx="150" cy="120" r="65" fill="#222" filter="url(#green-fan-glow)" />

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

            {/* Fan Blades Overlay - Reducded opacity/thickness */}
            <path d="M150,120 L150,55" stroke="black" strokeWidth="1" opacity="0.4" transform="rotate(0 150 120)" />
            <path d="M150,120 L150,55" stroke="black" strokeWidth="1" opacity="0.4" transform="rotate(120 150 120)" />
            <path d="M150,120 L150,55" stroke="black" strokeWidth="1" opacity="0.4" transform="rotate(240 150 120)" />

            {/* Stats Panel */}
            <rect x="40" y="220" width="220" height="100" fill="#222" stroke="#4caf50" strokeWidth="2" />

            <text x="50" y="240" fill="#00ff00" fontSize="12" fontFamily="Courier New, monospace" fontWeight="bold">HASH: 120 MH/s</text>
            <text x="50" y="260" fill="#00ff00" fontSize="12" fontFamily="Courier New, monospace" fontWeight="bold">
                TEMP: 85°C 🔥
                <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite" />
            </text>

            <rect x="50" y="280" width="200" height="10" fill="#333" />
            <rect x="50" y="280" width="150" height="10" fill="#4caf50" /> {/* Progress */}

            {/* Name - Metallic */}
            <text x="150" y="360" textAnchor="middle" fill="#ffd700" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" filter="url(#metallic-emboss)" style={{ textShadow: "1px 1px 2px black" }}>
                {userName || "TRÂU CÀY COIN"}
            </text>

            {/* Caption */}
            <text x="150" y="380" textAnchor="middle" fill="#81c784" fontSize="10" fontWeight="normal" fontStyle="italic">
                {description || "Đào coin vì đam mê, nhưng đời toàn cho đào... nợ"}
            </text>
        </>
    ),

    // ===================================
    // 56. CYBERPUNK CITY (Neon)
    'cyberpunk-city': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-hex-cyber">
                    <polygon points="150,90 220,130 220,210 150,250 80,210 80,130" />
                </clipPath>
                {/* Glitch Filter for Name */}
                <filter id="text-glitch">
                    <feOffset in="SourceGraphic" dx="-2" dy="0" result="red" />
                    <feOffset in="SourceGraphic" dx="2" dy="0" result="blue" />
                    <feMerge>
                        <feMergeNode in="red" />
                        <feMergeNode in="blue" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Digital Noise */}
                <filter id="digital-noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
                    <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0" in="noise" result="coloredNoise" />
                </filter>
                {/* Strong Neon Glow */}
                <filter id="strong-neon-glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Dark City BG with Digital Noise */}
            <rect width="300" height="400" fill="#0d001a" />
            <rect width="300" height="400" filter="url(#digital-noise)" opacity="0.15" />

            {/* Neon Buildings with Light Streaks */}
            <g>
                <rect x="20" y="200" width="40" height="200" fill="#240046" stroke="#d500f9" strokeWidth="1" />
                <path d="M40,220 V380" stroke="#d500f9" strokeWidth="2" opacity="0.5" />

                <rect x="240" y="180" width="50" height="220" fill="#240046" stroke="#00e5ff" strokeWidth="1" />
                <path d="M265,200 V380" stroke="#00e5ff" strokeWidth="2" opacity="0.5" />

                <rect x="70" y="250" width="60" height="150" fill="#3c096c" />
                <path d="M100,270 V380" stroke="#fff" strokeWidth="1" opacity="0.3" />

                <rect x="180" y="220" width="50" height="180" fill="#3c096c" />
                <path d="M205,240 V380" stroke="#fff" strokeWidth="1" opacity="0.3" />
            </g>

            {/* Grid Floor */}
            <path d="M0,350 L300,350 M0,350 L150,300 L300,350" stroke="#f50057" strokeWidth="1" opacity="0.5" />

            {/* Hologram Circle - Neon Glow Enhanced */}
            <circle cx="150" cy="170" r="90" fill="none" stroke="#00e5ff" strokeWidth="2" strokeDasharray="10 5" opacity="0.8" filter="url(#strong-neon-glow)" />
            <circle cx="150" cy="170" r="80" fill="none" stroke="#d500f9" strokeWidth="1" />

            {/* Avatar with Blue-Purple Overlay */}
            {userImage ? (
                <g>
                    <image
                        x="80" y="90" width="140" height="160"
                        href={userImage}
                        clipPath="url(#avatar-clip-hex-cyber)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                    {/* Overlay */}
                    <polygon points="150,90 220,130 220,210 150,250 80,210 80,130" fill="#4a00e0" opacity="0.2" style={{ mixBlendMode: 'overlay' }} />
                </g>
            ) : (
                <text x="150" y="180" textAnchor="middle" fontSize="50">🌃</text>
            )}

            {/* Glitch Text Title: NIGHT CITY */}
            <text x="150" y="60" textAnchor="middle" fontSize="24" fontWeight="900" fill="#00e5ff" fontFamily="monospace" style={{ textShadow: "0 0 10px #00e5ff, 2px 0px #f50057" }}>NIGHT CITY</text>

            <rect x="40" y="320" width="220" height="50" fill="black" stroke="#d500f9" strokeWidth="2" transform="skewX(-10)" />
            {/* Name - Glitch Effect */}
            <g transform="skewX(-10)" filter="url(#text-glitch)">
                <text x="150" y="350" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#fff" fontFamily="sans-serif">
                    {userName || "NETRUNNER"}
                </text>
            </g>

            {/* Caption - Larger Neon Yellow */}
            <text x="150" y="385" textAnchor="middle" fontSize="12" fill="#FFFF00" fontWeight="bold" letterSpacing="1" style={{ textShadow: "0 0 8px #FFFF00" }}>
                WAKE UP SAMURAI
            </text>
        </>
    ),

    // ===================================
    // 57. METAVERSE AVATAR (VR)
    // ===================================
    // 57. METAVERSE AVATAR (Digital Glow)
    'metaverse-avatar': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-circle-hud">
                    <circle cx="150" cy="170" r="80" />
                </clipPath>
                {/* Purple Outer Glow */}
                <filter id="purple-outer-glow">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Light Text Glitch */}
                <filter id="light-glitch">
                    <feOffset in="SourceGraphic" dx="-1" dy="0" result="cyan" />
                    <feOffset in="SourceGraphic" dx="1" dy="0" result="magenta" />
                    <feMerge>
                        <feMergeNode in="cyan" />
                        <feMergeNode in="magenta" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Gradient for BG */}
                <linearGradient id="cyber-grad-glow" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#240046" />
                    <stop offset="100%" stopColor="#3c096c" />
                </linearGradient>
            </defs>

            {/* Deep Purple Space BG */}
            <rect width="300" height="400" fill="url(#cyber-grad-glow)" />

            {/* Digital Particles */}
            <g opacity="0.6">
                <circle cx="20" cy="50" r="1" fill="#e0aaff" />
                <circle cx="280" cy="80" r="2" fill="#e0aaff" />
                <circle cx="50" cy="350" r="1" fill="#c77dff" />
                <circle cx="250" cy="320" r="1" fill="#c77dff" />
                <circle cx="150" cy="20" r="1" fill="#e0aaff" />
                <rect x="100" y="100" width="2" height="2" fill="#e0aaff" />
                <rect x="200" y="250" width="2" height="2" fill="#e0aaff" />
            </g>

            {/* Avatar Glow Ring */}
            <circle cx="150" cy="170" r="84" fill="none" stroke="#be29ec" strokeWidth="2" filter="url(#purple-outer-glow)" />

            {/* Avatar */}
            <g filter="url(#purple-outer-glow)">
                <circle cx="150" cy="170" r="82" fill="none" stroke="#e0aaff" strokeWidth="1" />
                {userImage ? (
                    <image
                        x="70" y="90" width="160" height="160"
                        href={userImage}
                        clipPath="url(#avatar-clip-circle-hud)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                ) : (
                    <text x="150" y="180" textAnchor="middle" fontSize="40">👾</text>
                )}
            </g>

            {/* Data Stream Lines */}
            <line x1="20" y1="170" x2="60" y2="170" stroke="#c0c0c0" strokeWidth="1" opacity="0.3" />
            <line x1="240" y1="170" x2="280" y2="170" stroke="#c0c0c0" strokeWidth="1" opacity="0.3" />

            {/* HUD Elements */}
            <path d="M110,80 L190,80" stroke="#e0aaff" strokeWidth="1" strokeDasharray="5 5" />
            <path d="M110,260 L190,260" stroke="#e0aaff" strokeWidth="1" strokeDasharray="5 5" />

            {/* Name - Strong Glow */}
            <text x="150" y="60" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#e0aaff" letterSpacing="2" style={{ textShadow: "0 0 10px #be29ec" }}>
                VIRTUAL BEING
            </text>

            <text x="150" y="320" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="bold" fill="#fff" style={{ textShadow: "0 0 8px #be29ec" }}>
                {userName || "READY PLAYER ONE"}
            </text>

            {/* Connected Banner - Moved Down to bottom of Avatar frame */}
            <rect x="100" y="245" width="100" height="20" fill="#000" stroke="#00ff00" strokeWidth="1" />
            <text x="150" y="259" textAnchor="middle" fontSize="10" fill="#00ff00" fontWeight="bold" letterSpacing="1">CONNECTED</text>

            {/* Stats */}
            <text x="50" y="360" textAnchor="middle" fontSize="10" fill="#c0c0c0">EXP</text>
            <rect x="70" y="355" width="160" height="5" fill="#333" rx="2" />
            <rect x="70" y="355" width="120" height="5" fill="#00e676" rx="2" /> {/* Green Progress Bar */}

            {/* Bottom Caption - Glitch */}
            <g filter="url(#light-glitch)">
                <text x="150" y="385" textAnchor="middle" fontSize="14" fill="#e0aaff" fontFamily="monospace">
                    PLAYER ONE READY
                </text>
            </g>
        </>
    ),

};
