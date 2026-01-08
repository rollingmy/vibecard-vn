
import React from 'react';
import { TemplateProps } from './types';

// Helper for LIP
const getSafeFontSize = (text: string, maxWidth: number, defaultSize: number) => {
    if (!text) return defaultSize;
    const charWidth = defaultSize * 0.6;
    const estimatedWidth = text.length * charWidth;
    return estimatedWidth > maxWidth ? (maxWidth / text.length) / 0.6 : defaultSize;
};

// 1. Ba Dong Online
const BaDongTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "BÀ ĐỒNG ONLINE";
    const safeDesc = description || "Xem bói đầu năm, không trúng cũng trật";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="crystalGlow" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0" stopColor="rgba(255,255,255,0.9)" />
                    <stop offset="0.5" stopColor="rgba(138,43,226, 0.4)" />
                    <stop offset="1" stopColor="rgba(0,0,0,0)" />
                </radialGradient>
            </defs>
            <rect width="400" height="600" fill="#1a0b2e" /> {/* Dark Purple */}

            {/* Tarot Cards BG */}
            <g opacity="0.2">
                <rect x="20" y="50" width="60" height="90" fill="#4B0082" transform="rotate(-15)" />
                <rect x="320" y="50" width="60" height="90" fill="#4B0082" transform="rotate(15)" />
                <rect x="20" y="450" width="60" height="90" fill="#4B0082" transform="rotate(15)" />
                <rect x="320" y="450" width="60" height="90" fill="#4B0082" transform="rotate(-15)" />
            </g>

            {/* Crystal Ball Stand */}
            <path d="M150,400 L250,400 L270,430 H130 Z" fill="#DAA520" stroke="#000" strokeWidth="2" />

            {/* Crystal Ball */}
            <circle cx="200" cy="300" r="120" fill="url(#crystalGlow)" stroke="#E6E6FA" strokeWidth="1" strokeOpacity="0.5" />

            {/* Avatar Inside Ball */}
            <defs>
                <clipPath id="ballClip">
                    <circle cx="200" cy="300" r="110" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="90" y="190" width="220" height="220" preserveAspectRatio="xMidYMid slice" clipPath="url(#ballClip)" opacity="0.8" />}

            {/* Mystical Smoke/Sparkles */}
            <circle cx="150" cy="250" r="2" fill="#fff" opacity="0.8" />
            <circle cx="250" cy="350" r="3" fill="#fff" opacity="0.6" />
            <circle cx="180" cy="380" r="2" fill="#fff" opacity="0.7" />

            {/* Text */}
            <text x="200" y="100" textAnchor="middle" fontSize="30" fontWeight="bold" fill="#DAA520" fontFamily="serif" style={{ textShadow: "0 0 10px #DAA520" }}>
                TAROT READING
            </text>

            <text x="200" y="500" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 26)} fontWeight="bold" fill="#E6E6FA" fontFamily="serif">
                {safeName.toUpperCase()}
            </text>
            <text x="200" y="540" textAnchor="middle" fontSize="14" fill="#D8BFD8" fontStyle="italic">
                {safeDesc}
            </text>
        </svg>
    );
};

// 2. Water Sign
const WaterTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "HỆ NƯỚC";
    const safeDesc = description || "Cự Giải - Bọ Cạp - Song Ngư";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Blue Glow */}
                <filter id="blue-glow">
                    <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#00bfff" floodOpacity="0.8" />
                </filter>
                {/* Text Shadow */}
                <filter id="text-shadow-water">
                    <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000080" floodOpacity="0.5" />
                </filter>
                {/* Wave Gradient */}
                <linearGradient id="wave-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#00bfff" />
                    <stop offset="1" stopColor="#00008b" />
                </linearGradient>
            </defs>

            <rect width="400" height="600" fill="#E0FFFF" />

            {/* Floating Bubbles (Decor) */}
            <g opacity="0.6">
                <circle cx="50" cy="100" r="12" fill="none" stroke="#87ceeb" strokeWidth="2" />
                <circle cx="350" cy="150" r="18" fill="none" stroke="#87ceeb" strokeWidth="2" />
                <circle cx="80" cy="250" r="8" fill="#fff" opacity="0.5" />
                <circle cx="320" cy="350" r="10" fill="#fff" opacity="0.5" />
                <circle cx="20" cy="400" r="6" fill="#fff" opacity="0.3" />
            </g>

            {/* Waves - Gradient */}
            <path d="M0,400 Q100,350 200,400 T400,400 V600 H0 Z" fill="url(#wave-gradient)" opacity="0.6" />
            <path d="M0,450 Q100,400 200,450 T400,450 V600 H0 Z" fill="url(#wave-gradient)" opacity="0.8" />
            <path d="M0,500 Q100,450 200,500 T400,500 V600 H0 Z" fill="#00008d" />

            {/* Avatar Frame - Crystal Water Drop */}
            <g filter="url(#blue-glow)">
                <path d="M200,50 Q100,200 100,280 A100,100 0 0,0 300,280 Q300,200 200,50 Z" fill="#fff" stroke="#00bfff" strokeWidth="3" />
            </g>
            {/* Reflection on Drop */}
            <path d="M180,100 Q140,180 140,240" fill="none" stroke="#fff" strokeWidth="3" opacity="0.8" strokeLinecap="round" />

            <defs>
                <clipPath id="dropClip">
                    <path d="M200,54 Q104,200 104,280 A96,96 0 0,0 296,280 Q296,200 200,54 Z" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="100" y="50" width="200" height="330" preserveAspectRatio="xMidYMid slice" clipPath="url(#dropClip)" opacity="0.95" />}

            {/* Symbols - Deep Teal/Navy */}
            <g fill="#006064" fontWeight="bold">
                <text x="50" y="50" fontSize="30">♋</text>
                <text x="320" y="50" fontSize="30">♓</text>
                <text x="320" y="100" fontSize="30">♏</text>
            </g>

            {/* Typography */}
            <text x="200" y="480" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 32)} fontWeight="900" fill="#fff" filter="url(#text-shadow-water)">
                {safeName}
            </text>
            <text x="200" y="520" textAnchor="middle" fontSize="16" fill="#e0ffff" fontStyle="italic" fontWeight="500">
                {safeDesc}
            </text>
        </svg>
    );
};

// 3. Fire Sign
const FireTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "HỆ LỬA";
    const safeDesc = description || "Nóng tính nhưng tốt bụng (đôi khi)";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Fire Gradient */}
                <linearGradient id="fireGrad" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0" stopColor="#ff0000" />
                    <stop offset="0.5" stopColor="#ff4500" />
                    <stop offset="1" stopColor="#ffd700" />
                </linearGradient>

                {/* Heat Distortion Filter */}
                <filter id="heat-haze">
                    <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
                </filter>

                {/* Text Glow */}
                <filter id="fire-glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Avatar Shadow */}
                <filter id="avatar-shadow">
                    <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000" floodOpacity="0.8" />
                </filter>

                <clipPath id="fireCircle">
                    <circle cx="200" cy="200" r="100" />
                </clipPath>
            </defs>

            {/* Dark Background with Heat Effect */}
            <rect width="400" height="600" fill="#220000" />
            <rect width="400" height="600" fill="#4a0404" opacity="0.6" filter="url(#heat-haze)" />

            {/* Flames */}
            {/* Background Flame Layer */}
            <path d="M-20,600 Q100,350 200,500 Q300,350 420,600 Z" fill="url(#fireGrad)" opacity="0.6" filter="url(#heat-haze)" />
            {/* Front Flame Layer */}
            <path d="M0,600 L100,420 L150,550 L200,380 L250,550 L300,420 L400,600 Z" fill="url(#fireGrad)" opacity="0.9" />

            {/* Animated Embers (Simulated) */}
            <g fill="#ffd700" opacity="0.8">
                <circle cx="50" cy="550" r="3" opacity="0.6" />
                <circle cx="150" cy="480" r="2" opacity="0.8" />
                <circle cx="250" cy="520" r="4" opacity="0.5" />
                <circle cx="350" cy="450" r="2" opacity="0.7" />
                <circle cx="100" cy="350" r="3" opacity="0.4" />
                <circle cx="300" cy="300" r="2" opacity="0.3" />
                <circle cx="200" cy="150" r="1.5" opacity="0.5" />
            </g>


            {/* Avatar Circle with Fire Border */}
            <g filter="url(#avatar-shadow)">
                <circle cx="200" cy="200" r="110" fill="none" stroke="url(#fireGrad)" strokeWidth="6" strokeDasharray="15 5" />
            </g>
            {userImage && <image href={userImage} x="100" y="100" width="200" height="200" preserveAspectRatio="xMidYMid slice" clipPath="url(#fireCircle)" />}

            {/* Symbols - Dark for Contrast */}
            <text x="50" y="100" fontSize="30" fill="#800000" fontWeight="bold">♈</text>
            <text x="320" y="100" fontSize="30" fill="#800000" fontWeight="bold">♌</text>
            <text x="320" y="150" fontSize="30" fill="#800000" fontWeight="bold">♐</text>

            <text x="200" y="380" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 32)} fontWeight="900" fill="#ffd700" filter="url(#fire-glow)">
                {safeName}
            </text>
            <text x="200" y="420" textAnchor="middle" fontSize="16" fill="#ffccbc" fontWeight="bold">
                {safeDesc}
            </text>
        </svg>
    );
};

// 4. Earth Sign
const EarthTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "HỆ ĐẤT";
    const safeDesc = description || "Vững chãi như núi, lì lợm như trâu";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Stone/Paper Grain Texture */}
                <filter id="stone-grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
                    <feColorMatrix type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.1 0" in="noise" result="coloredNoise" />
                    <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite" />
                    <feBlend mode="multiply" in="composite" in2="SourceGraphic" />
                </filter>
                {/* 3D Slab Shadow */}
                <filter id="slab-shadow">
                    <feDropShadow dx="4" dy="4" stdDeviation="3" floodColor="#2e4d06" floodOpacity="0.5" />
                </filter>

                {/* Mountain Clip */}
                <clipPath id="earthClip">
                    <polygon points="200,104 296,152 296,268 200,316 104,268 104,152" />
                </clipPath>
            </defs>

            {/* Base Background */}
            <rect width="400" height="600" fill="#f5deb3" />
            {/* Texture Overlay */}
            <rect width="400" height="600" fill="#a1887f" opacity="0.2" filter="url(#stone-grain)" />

            {/* Mountain Silhouettes (Corners) */}
            <path d="M0,0 L120,0 L50,80 Z" fill="#e8f5e9" opacity="0.6" />
            <path d="M400,0 L280,0 L350,80 Z" fill="#e8f5e9" opacity="0.6" />
            <path d="M0,600 L150,600 L50,450 Z" fill="#c8e6c9" opacity="0.5" />
            <path d="M400,600 L250,600 L350,450 Z" fill="#c8e6c9" opacity="0.5" />
            <path d="M-50,600 L450,600 L200,500 Z" fill="#2e4d06" opacity="0.1" />


            {/* Crystal Hexagon Frame (Double Border) */}
            <g filter="url(#slab-shadow)">
                {/* Outer Border */}
                <polygon points="200,95 305,147 305,273 200,325 95,273 95,147" fill="none" stroke="#2e4d06" strokeWidth="2" />
                {/* Inner Main Border */}
                <polygon points="200,100 300,150 300,270 200,320 100,270 100,150" fill="#fff" stroke="#2e4d06" strokeWidth="4" />
            </g>

            {/* Avatar */}
            {userImage && <image href={userImage} x="100" y="100" width="200" height="220" preserveAspectRatio="xMidYMid slice" clipPath="url(#earthClip)" />}

            {/* Symbols - Earth Tones */}
            <g fill="#3e2723">
                <text x="185" y="85" fontSize="30">♉</text>
                <text x="50" y="280" fontSize="30">♍</text>
                <text x="320" y="280" fontSize="30">♑</text>
            </g>

            {/* Typography - Extra Bold & Moss Green */}
            <text x="200" y="400" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 40)} fontWeight="900" fill="#1b5e20" fontFamily="serif">
                {safeName}
            </text>
            <text x="200" y="440" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#33691e" fontStyle="italic">
                {safeDesc}
            </text>
        </svg>
    );
};

// 5. Air Sign
const AirTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "HỆ KHÍ";
    const safeDesc = description || "Bay bổng lãng mạn, hay quên ví";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Soft Sky Gradient */}
                <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#f0f8ff" />
                    <stop offset="1" stopColor="#cce0ff" />
                </linearGradient>

                {/* Cloud Blur */}
                <filter id="cloud-blur">
                    <feGaussianBlur stdDeviation="3" />
                </filter>

                {/* Text Glow */}
                <filter id="text-glow">
                    <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#fff" floodOpacity="0.8" />
                </filter>

                {/* Icon Shadow */}
                <filter id="icon-shadow">
                    <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.2" />
                </filter>

                {/* Clip Path for Airy Circle */}
                <clipPath id="airClip">
                    <circle cx="200" cy="250" r="100" />
                </clipPath>
            </defs>

            <rect width="400" height="600" fill="url(#skyGrad)" />

            {/* White Aura behind Avatar */}
            <circle cx="200" cy="250" r="130" fill="url(#skyGrad)" opacity="0.5" filter="url(#cloud-blur)" />

            {/* Clouds (Soft Blur) */}
            <g filter="url(#cloud-blur)" opacity="0.7">
                <path d="M-20,120 Q30,80 80,120 T180,120 T280,120" stroke="#fff" strokeWidth="60" strokeLinecap="round" fill="none" />
                <path d="M150,520 Q200,480 250,520 T350,520 T450,520" stroke="#fff" strokeWidth="70" strokeLinecap="round" fill="none" />
            </g>

            {/* Avatar Frame - Sparkles */}
            <circle cx="200" cy="250" r="110" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
            {/* Sparkles */}
            <g fill="#fff">
                <text x="80" y="200" fontSize="14">✨</text>
                <text x="310" y="220" fontSize="10">✨</text>
                <text x="250" y="130" fontSize="12">✨</text>
                <text x="150" y="370" fontSize="14">✨</text>
            </g>

            {userImage && <image href={userImage} x="100" y="150" width="200" height="200" preserveAspectRatio="xMidYMid slice" clipPath="url(#airClip)" opacity="0.95" />}

            {/* Symbols - Soft Shadow */}
            <g filter="url(#icon-shadow)" fill="#708090" opacity="0.6">
                <text x="50" y="230" fontSize="24">♊</text>
                <text x="320" y="230" fontSize="24">♎</text>
                <text x="320" y="280" fontSize="24">♒</text>
            </g>

            {/* Typography */}
            <text x="200" y="440" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 36)} fontWeight="bold" fill="#001f3f" letterSpacing="4" filter="url(#text-glow)">
                {safeName}
            </text>
            <text x="200" y="480" textAnchor="middle" fontSize="14" fill="#0a2e52" fontWeight="bold">
                {safeDesc}
            </text>
        </svg>
    );
};

// 6. Thay Boi Xem Voi
const ThayBoiTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "THẦY BÓI";
    const safeDesc = description || "Phán đâu trúng đó";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Velvet/Wood Texture */}
                <filter id="velvet-texture">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
                    <feColorMatrix type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0" in="noise" result="coloredNoise" />
                    <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite" />
                    <feBlend mode="multiply" in="composite" in2="SourceGraphic" />
                </filter>

                {/* Smoke Effect */}
                <filter id="smoke-blur">
                    <feGaussianBlur stdDeviation="8" />
                </filter>

                {/* Clip Path for Round Glasses */}
                <clipPath id="glassLeftRound">
                    <circle cx="115" cy="250" r="60" />
                </clipPath>
                <clipPath id="glassRightRound">
                    <circle cx="285" cy="250" r="60" />
                </clipPath>
                {/* Gold Text Shadow */}
                <filter id="gold-shadow">
                    <feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.8" />
                </filter>
            </defs>

            {/* Dark Velvet Background */}
            <rect width="400" height="600" fill="#2d1b0e" />
            <rect width="400" height="600" fill="#1a0505" opacity="0.8" filter="url(#velvet-texture)" />

            {/* Third Eye Icon */}
            <g transform="translate(200, 80)">
                <path d="M-40,0 Q0,-30 40,0 Q0,30 -40,0 Z" fill="none" stroke="#ffd700" strokeWidth="2" />
                <circle cx="0" cy="0" r="12" fill="#ffd700" />
                <circle cx="0" cy="0" r="5" fill="#000" />
                {/* Rays */}
                <line x1="0" y1="-35" x2="0" y2="-50" stroke="#ffd700" strokeWidth="1" />
                <line x1="0" y1="35" x2="0" y2="50" stroke="#ffd700" strokeWidth="1" />
                <line x1="-45" y1="0" x2="-60" y2="0" stroke="#ffd700" strokeWidth="1" />
                <line x1="45" y1="0" x2="60" y2="0" stroke="#ffd700" strokeWidth="1" />
            </g>

            {/* Round Glasses */}
            <g transform="translate(0, 0)">
                {/* Bridge */}
                <path d="M175,250 Q200,230 225,250" fill="none" stroke="#111" strokeWidth="4" />
                {/* Rims */}
                <circle cx="115" cy="250" r="65" fill="#000" fillOpacity="0.8" stroke="#111" strokeWidth="5" />
                <circle cx="285" cy="250" r="65" fill="#000" fillOpacity="0.8" stroke="#111" strokeWidth="5" />
                {/* Highlights */}
                <path d="M70,230 Q80,210 100,220" fill="none" stroke="#fff" strokeWidth="3" opacity="0.3" />
                <path d="M240,230 Q250,210 270,220" fill="none" stroke="#fff" strokeWidth="3" opacity="0.3" />
            </g>

            {/* Avatar reflected in glasses */}
            {userImage && (
                <>
                    <image href={userImage} x="55" y="190" width="120" height="120" preserveAspectRatio="xMidYMid slice" clipPath="url(#glassLeftRound)" opacity="0.6" />
                    <image href={userImage} x="225" y="190" width="120" height="120" preserveAspectRatio="xMidYMid slice" clipPath="url(#glassRightRound)" opacity="0.6" />
                </>
            )}

            {/* Incense Smoke */}
            <g filter="url(#smoke-blur)" opacity="0.5">
                <path d="M50,400 Q100,350 80,300 T120,200" stroke="#ccc" strokeWidth="15" fill="none" />
                <path d="M350,400 Q300,350 320,300 T280,200" stroke="#ccc" strokeWidth="15" fill="none" />
            </g>

            {/* Ancient Coins */}
            <g transform="translate(200, 420)">
                {/* Coin 1 */}
                <g transform="translate(-60, 0) rotate(-20)">
                    <circle r="25" fill="#cd7f32" stroke="#8b4500" strokeWidth="2" />
                    <rect x="-8" y="-8" width="16" height="16" fill="#2d1b0e" />
                </g>
                {/* Coin 2 */}
                <g transform="translate(60, 10) rotate(20)">
                    <circle r="25" fill="#cd7f32" stroke="#8b4500" strokeWidth="2" />
                    <rect x="-8" y="-8" width="16" height="16" fill="#2d1b0e" />
                </g>
                {/* Coin 3 */}
                <g transform="translate(0, -30)">
                    <circle r="25" fill="#ffd700" stroke="#b8860b" strokeWidth="2" />
                    <rect x="-8" y="-8" width="16" height="16" fill="#2d1b0e" />
                </g>
            </g>


            {/* Typography */}
            <text x="200" y="520" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 36)} fontWeight="bold" fill="#ffd700" fontFamily="serif" style={{ filter: 'url(#gold-shadow)' }}>
                {safeName.toUpperCase()}
            </text>
            <text x="200" y="560" textAnchor="middle" fontSize="16" fill="#d4af37" fontStyle="italic" fontFamily="serif">
                {safeDesc}
            </text>
        </svg>
    );
};

// 7. Bua Yeu MOVED TO LOVETHEME

// 8. Full Moon Party
const FullMoonTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "HỘI TRĂNG TRÒN";
    // bua-yeu moved to LoveTheme
    const safeDesc = description || "Auuuuu....";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Moon Glow */}
                <filter id="moon-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="15" result="blur" />
                    <feFlood floodColor="#fffff0" floodOpacity="0.6" result="color" />
                    <feComposite in="color" in2="blur" operator="in" result="glow" />
                    <feMerge>
                        <feMergeNode in="glow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Mist Gradient */}
                <linearGradient id="fog-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#191970" stopOpacity="0" />
                    <stop offset="80%" stopColor="#add8e6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#fff" stopOpacity="0.5" />
                </linearGradient>
            </defs>

            <rect width="400" height="600" fill="#0f172a" /> {/* Deep Navy */}

            {/* Stars */}
            <g fill="#fff" opacity="0.7">
                {[...Array(30)].map((_, i) => (
                    <circle
                        key={i}
                        cx={(i * 37) % 400}
                        cy={(i * 91) % 400}
                        r={(i % 3) * 0.5 + 0.5}
                        opacity={(i % 10) / 10 + 0.1}
                    />
                ))}
            </g>

            {/* Stats / Moon Background */}
            <g filter="url(#moon-glow)">
                <circle cx="200" cy="200" r="145" fill="#fffff0" />
                {/* Craters (Subtle) */}
                <circle cx="120" cy="250" r="15" fill="#e6e6fa" opacity="0.3" />
                <circle cx="280" cy="180" r="10" fill="#e6e6fa" opacity="0.3" />
                <circle cx="150" cy="130" r="8" fill="#e6e6fa" opacity="0.3" />
            </g>

            {/* Avatar inside Moon */}
            <defs>
                <clipPath id="moonClip">
                    <circle cx="200" cy="200" r="140" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="60" y="60" width="280" height="280" preserveAspectRatio="xMidYMid slice" clipPath="url(#moonClip)" opacity="0.9" />}

            {/* Mist Layer */}
            <rect y="400" width="400" height="200" fill="url(#fog-gradient)" />


            {/* Wolf Silhouette & Mountains with Rim Light */}
            <g transform="translate(0, 10)">
                {/* Back Mountain (Mist) */}
                <path d="M-50,600 L120,400 L250,600 Z" fill="#2d3748" opacity="0.8" />

                {/* Rim Light */}
                <path d="M0,600 L100,450 L150,500 L250,420 L400,600" fill="none" stroke="#add8e6" strokeWidth="2" opacity="0.6" style={{ filter: 'blur(2px)' }} />

                {/* Front Silhouette */}
                <path d="M0,600 L100,450 L150,500 L250,420 L400,600 Z" fill="#0a0a0a" />
                <path d="M280,480 L300,420 L320,480 Z" fill="#0a0a0a" /> {/* Ears */}
            </g>

            {/* Celestial Typography */}
            <text x="200" y="80" textAnchor="middle" fontSize="18" fill="#c0c0c0" fontWeight="300" letterSpacing="5" style={{ textShadow: "0 0 5px #fff" }}>FULL MOON</text>

            <text x="200" y="540" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 36)} fontWeight="900" fill="#fffff0" fontFamily="serif" style={{ textShadow: "0 0 10px rgba(255,255,255,0.8)" }}>
                {safeName.toUpperCase()}
            </text>
            <text x="200" y="575" textAnchor="middle" fontSize="14" fill="#a9cce3" fontStyle="italic" fontFamily="serif" opacity="0.9" letterSpacing="1">
                "Biến hình khi trăng lên (thành 'ngáo')"
            </text>
        </svg>
    );
};

// 9. Than So Hoc
const NumerologyTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "THẦN SỐ HỌC";
    const safeDesc = description || "Số chủ đạo: 10";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Cosmic Background Gradient */}
                <linearGradient id="cosmic-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0f0c29" />
                    <stop offset="50%" stopColor="#302b63" />
                    <stop offset="100%" stopColor="#24243e" />
                </linearGradient>
                {/* Neon Gold Glow */}
                <filter id="gold-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feFlood floodColor="#ffd700" result="color" />
                    <feComposite in="color" in2="blur" operator="in" result="glow" />
                    <feMerge>
                        <feMergeNode in="glow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <clipPath id="logicClip">
                    <circle cx="200" cy="220" r="50" />
                </clipPath>
                {/* Number Wheel Path for text */}
                <path id="wheelPath" d="M200,220 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0" />
            </defs>

            <rect width="400" height="600" fill="url(#cosmic-grad)" />

            {/* Nebula Effect (Turbulence) */}
            <filter id="nebula">
                <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="fog" />
                <feColorMatrix in="fog" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 0.4 0" />
            </filter>
            <rect width="400" height="600" filter="url(#nebula)" opacity="0.5" />

            {/* Stars */}
            <g fill="#fff" opacity="0.8">
                <circle cx="20" cy="50" r="1.5" />
                <circle cx="200" cy="50" r="1" />
                <circle cx="380" cy="150" r="1.5" />
                <circle cx="50" cy="300" r="1" />
                <circle cx="350" cy="400" r="1.5" />
                <circle cx="100" cy="550" r="1" />
                <circle cx="300" cy="550" r="1" />
                <path d="M200,50 L250,80 L230,120 M50,300 L100,280 L80,240" stroke="#fff" strokeWidth="0.5" opacity="0.3" fill="none" />
            </g>

            {/* Number Wheel (Background Ring) */}
            <text fontSize="14" fill="#ffd700" opacity="0.3" fontWeight="bold" fontFamily="monospace" letterSpacing="5">
                <textPath href="#wheelPath" startOffset="0%">
                    1 2 3 4 5 6 7 8 9 11 22 33 1 2 3 4 5 6 7 8 9
                </textPath>
            </text>

            {/* Spinning Ring Decoration */}
            <circle cx="200" cy="220" r="130" fill="none" stroke="#ffd700" strokeWidth="1" opacity="0.2" strokeDasharray="5 5" />


            {/* Pyramid Chart (Neon Gold) */}
            <g filter="url(#gold-glow)">
                <path d="M200,90 L80,290 H320 Z" fill="none" stroke="#ffd700" strokeWidth="3" />
            </g>

            {/* Avatar in Circle with Gold Border */}
            {userImage && (
                <g>
                    <circle cx="200" cy="220" r="54" fill="none" stroke="#ffd700" strokeWidth="2" strokeOpacity="1" />
                    <image href={userImage} x="150" y="170" width="100" height="100" preserveAspectRatio="xMidYMid slice" clipPath="url(#logicClip)" />
                </g>
            )}

            <text x="200" y="150" textAnchor="middle" fill="#ffd700" fontSize="14" fontWeight="bold" letterSpacing="3" style={{ textShadow: "0 0 5px #ffd700" }}>SỐ CHỦ ĐẠO</text>

            {/* Number at bottom of triangle */}
            <text x="200" y="270" textAnchor="middle" fontSize="40" fontWeight="bold" fill="#fff" style={{ textShadow: "0 0 10px #ffd700" }}>10</text>


            {/* Typography - Premium Serif */}
            <text x="200" y="450" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 32)} fontWeight="normal" fill="#ffd700" fontFamily="Times New Roman, serif" letterSpacing="4">
                {safeName.toUpperCase()}
            </text>
            <text x="200" y="490" textAnchor="middle" fontSize="14" fill="#E6E6FA" fontStyle="italic" fontFamily="serif" opacity="0.8">
                {description || "Giải mã vận mệnh qua những con số."}
            </text>

            {/* Bottom Decor */}
            <line x1="150" y1="520" x2="250" y2="520" stroke="#ffd700" strokeWidth="1" opacity="0.5" />
        </svg>
    );
};

// 10. Ying Yang
const YingYangTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "ÂM DƯƠNG";
    const safeDesc = description || "Cân bằng vạn vật";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="avatar-clip-circle">
                    <circle cx="200" cy="200" r="100" />
                </clipPath>
                {/* Rice Paper Texture */}
                <filter id="rice-paper">
                    <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" result="noise" />
                    <feDiffuseLighting in="noise" lightingColor="#fdf5e6" surfaceScale="1">
                        <feDistantLight azimuth="45" elevation="60" />
                    </feDiffuseLighting>
                    <feComposite operator="in" in2="SourceGraphic" result="texture" />
                    <feMerge>
                        <feMergeNode in="texture" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Glow for Yin Yang */}
                <filter id="yin-yang-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feFlood floodColor="#fff" result="color" />
                    <feComposite in="color" in2="blur" operator="in" result="glow" />
                    <feMerge>
                        <feMergeNode in="glow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Blue Ghost Fire Glow */}
                <filter id="ghost-fire-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feFlood floodColor="#00e5ff" result="color" />
                    <feComposite in="color" in2="blur" operator="in" result="glow" />
                    <feMerge>
                        <feMergeNode in="glow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Rice Paper Background */}
            <rect width="400" height="600" fill="#fdf5e6" />
            <pattern id="paper-texture" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0,0 Q50,50 100,0 T200,0" stroke="#d7ccc8" strokeWidth="1" fill="none" opacity="0.3" />
                <path d="M0,50 Q50,100 100,50 T200,50" stroke="#d7ccc8" strokeWidth="1" fill="none" opacity="0.3" />
            </pattern>
            <rect width="400" height="600" fill="url(#paper-texture)" opacity="0.5" />

            {/* Ink Wash Swirls (Clouds/Waves) */}
            <path d="M50,150 Q150,100 250,150 T450,150" fill="none" stroke="#212121" strokeWidth="5" opacity="0.1" filter="url(#rice-paper)" />
            <path d="M-50,450 Q100,400 200,450 T400,450" fill="none" stroke="#212121" strokeWidth="5" opacity="0.1" filter="url(#rice-paper)" />


            {/* Ying Yang Symbol (Central) */}
            <g transform="translate(200, 250) scale(1.5)">
                {/* Glow behind */}
                <circle cx="0" cy="0" r="102" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5" filter="url(#yin-yang-glow)" />

                <path d="M0,-100 A100,100 0 0,1 0,100 A50,50 0 0,1 0,0 A50,50 0 0,0 0,-100 Z" fill="#fff" stroke="#e0e0e0" strokeWidth="1" />
                <path d="M0,100 A100,100 0 0,1 0,-100 A50,50 0 0,1 0,0 A50,50 0 0,0 0,100 Z" fill="#212121" />
                <circle cx="0" cy="-50" r="10" fill="#212121" />
                <circle cx="0" cy="50" r="10" fill="#fff" />
            </g>

            {/* Avatars in Circles */}
            <defs>
                <clipPath id="yingClip">
                    <circle cx="200" cy="175" r="50" />
                </clipPath>
                <clipPath id="yangClip">
                    <circle cx="200" cy="325" r="50" />
                </clipPath>
            </defs>
            {userImage && (
                <>
                    {/* Top Avatar (In Light Side) */}
                    <circle cx="200" cy="175" r="52" fill="none" stroke="#212121" strokeWidth="2" opacity="0.5" />
                    <image href={userImage} x="150" y="125" width="100" height="100" preserveAspectRatio="xMidYMid slice" clipPath="url(#yingClip)" opacity="0.8" style={{ filter: 'grayscale(100%)' }} />

                    {/* Bottom Avatar (In Dark Side) */}
                    <circle cx="200" cy="325" r="52" fill="none" stroke="#f5f5f5" strokeWidth="2" opacity="0.5" />
                    <image href={userImage} x="150" y="275" width="100" height="100" preserveAspectRatio="xMidYMid slice" clipPath="url(#yangClip)" opacity="0.9" />
                </>
            )}

            {/* Floating Talismans */}
            {/* Left Talisman */}
            <g transform="translate(30, 150) rotate(-10)">
                <rect x="0" y="0" width="40" height="120" fill="#fbc02d" stroke="#f57f17" strokeWidth="1" />
                <circle cx="20" cy="10" r="5" fill="#f57f17" />
                <text x="20" y="60" textAnchor="middle" fontSize="24" fill="#c62828" fontFamily="serif" writingMode="tb">敕令</text>
                <text x="20" y="100" textAnchor="middle" fontSize="12" fill="#c62828" fontFamily="serif">⭐</text>
            </g>

            {/* Right Talisman */}
            <g transform="translate(330, 350) rotate(10)">
                <rect x="0" y="0" width="40" height="120" fill="#fbc02d" stroke="#f57f17" strokeWidth="1" />
                <circle cx="20" cy="10" r="5" fill="#f57f17" />
                <text x="20" y="60" textAnchor="middle" fontSize="24" fill="#c62828" fontFamily="serif" writingMode="tb">封印</text>
                <text x="20" y="100" textAnchor="middle" fontSize="12" fill="#c62828" fontFamily="serif">⭐</text>
            </g>

            {/* Ghost Fire (Corner Flames) */}
            <g filter="url(#ghost-fire-glow)" opacity="0.8">
                <text x="10" y="580" fontSize="40">🔥</text>
                <text x="350" y="580" fontSize="40">🔥</text>
                <text x="10" y="50" fontSize="30">🔥</text>
                <text x="360" y="50" fontSize="30">🔥</text>
            </g>


            {/* Typography - Oriental Calligraphy Style */}
            <text x="200" y="500" textAnchor="middle" fontSize={getSafeFontSize(safeName || "ÂM DƯƠNG", 350, 40)} fontWeight="900"
                fill="#b71c1c" stroke="#fdd835" strokeWidth="1" fontFamily="serif" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
                {safeName ? safeName.toUpperCase() : "ÂM DƯƠNG"}
            </text>

            <text x="200" y="540" textAnchor="middle" fontSize="18" fill="#5d4037" fontStyle="italic" fontFamily="serif">
                {description || "Vạn vật tương sinh • Âm dương hòa hợp"}
            </text>
        </svg>
    );
};

export const ZodiacTemplates = {
    'ba-dong-online': BaDongTemplate,
    'water-sign-thuy': WaterTemplate,
    'fire-sign-lua': FireTemplate,
    'earth-sign-dat': EarthTemplate,
    'air-sign-khi': AirTemplate,
    'thay-boi-xem-voi': ThayBoiTemplate,
    // 'bua-yeu': BuaYeuTemplate, // Removed
    'full-moon-party': FullMoonTemplate,
    'than-so-hoc': NumerologyTemplate,
    'ying-yang': YingYangTemplate,
};
