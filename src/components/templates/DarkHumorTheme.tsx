
import React from 'react';
import { TemplateProps } from './types';

// Helper for LIP
const getSafeFontSize = (text: string, maxWidth: number, defaultSize: number) => {
    if (!text) return defaultSize;
    const charWidth = defaultSize * 0.6;
    const estimatedWidth = text.length * charWidth;
    return estimatedWidth > maxWidth ? (maxWidth / text.length) / 0.6 : defaultSize;
};

// 1. Overthinking Club
const OverthinkingTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "OVERTHINKER";
    const safeDesc = description || "Thinking about everything...";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#483D8B" />

            {/* Tangled Wires Background */}
            <g fill="none" stroke="#6A5ACD" strokeWidth="2" opacity="0.6">
                <path d="M0,100 Q100,50 200,150 T400,100" />
                <path d="M0,200 Q150,250 200,100 T400,300" />
                <path d="M0,500 Q50,400 200,550 T400,400" />
                <path d="M100,0 C150,100 250,50 300,200 S100,400 200,600" />
            </g>

            {/* Brain/Head Silhouette or Halo */}
            <circle cx="200" cy="220" r="130" fill="none" stroke="#9370DB" strokeWidth="4" strokeDasharray="10 5" />
            <g transform="translate(200, 220) rotate(10)">
                <path d="M-140,0 A140,140 0 0,1 140,0" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="2 4" />
            </g>

            {/* Avatar */}
            <defs>
                <clipPath id="thinkClip">
                    <circle cx="200" cy="220" r="120" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="80" y="100" width="240" height="240" preserveAspectRatio="xMidYMid slice" clipPath="url(#thinkClip)" />}

            {/* Chaotic Text */}
            <text x="50" y="100" fontSize="14" fill="#B0C4DE" transform="rotate(-15)">Why did I say that?</text>
            <text x="300" y="150" fontSize="14" fill="#B0C4DE" transform="rotate(10)">What if?</text>
            <text x="80" y="350" fontSize="14" fill="#B0C4DE" transform="rotate(5)">Am I enough?</text>

            <rect x="40" y="400" width="320" height="150" fill="rgba(0,0,0,0.5)" rx="10" />
            <text x="200" y="440" textAnchor="middle" fontSize={getSafeFontSize(safeName, 300, 28)} fontWeight="bold" fill="#fff" fontFamily="Georgia">
                {safeName}
            </text>
            <text x="200" y="470" textAnchor="middle" fontSize="16" fill="#D8BFD8" fontStyle="italic">
                President of Overthinking Club
            </text>
            <text x="200" y="520" textAnchor="middle" fontSize="14" fill="#E6E6FA" width="280">
                "{safeDesc}"
            </text>
        </svg>
    );
}

// 2. Deadline Reaper (Horror Poster)
const ReaperTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "DEADLINE";
    const safeDesc = description || "Gõ cửa từng nhà...";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Fog Gradient */}
                <linearGradient id="fogGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="60%" stopColor="#222" opacity="0.8" />
                    <stop offset="100%" stopColor="#111" />
                </linearGradient>
                {/* Metallic Gradient for Scythe */}
                <linearGradient id="bladeGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fff" />
                    <stop offset="50%" stopColor="#999" />
                    <stop offset="100%" stopColor="#333" />
                </linearGradient>
            </defs>

            <rect width="400" height="600" fill="#0c0c0c" />

            {/* Background Numbers */}
            <g opacity="0.1" fontFamily="monospace" fontSize="80" fontWeight="bold" fill="#333">
                <text x="200" y="200" textAnchor="middle">00</text>
                <text x="200" y="300" textAnchor="middle">00</text>
                <text x="200" y="400" textAnchor="middle">01</text>
            </g>

            {/* The Scythe - Wrapping around */}
            {/* Handle */}
            <path d="M320,580 C320,400 350,200 250,50" fill="none" stroke="#2c1e14" strokeWidth="12" strokeLinecap="round" />
            {/* Blade */}
            <path d="M250,55 Q130,30 80,150 Q75,180 90,160 Q120,80 250,65 Z" fill="url(#bladeGrad)" stroke="#555" strokeWidth="2" />

            {/* Avatar Frame (Neubrutalism Horror) */}
            <rect x="55" y="145" width="290" height="290" fill="black" opacity="0.6" /> {/* Hard Shadow */}
            <rect x="50" y="140" width="290" height="290" fill="#111" stroke="#333" strokeWidth="6" />
            {userImage ? (
                <image href={userImage} x="50" y="140" width="290" height="290" preserveAspectRatio="xMidYMid slice" style={{ filter: 'grayscale(1) contrast(1.5) brightness(0.8)' }} />
            ) : (
                <text x="200" y="320" textAnchor="middle" fontSize="60" fill="#444">💀</text>
            )}

            {/* Fog Layer */}
            <rect x="0" y="350" width="400" height="250" fill="url(#fogGrad)" />

            {/* Hourglass Icon */}
            <g transform="translate(180, 490)">
                {/* Glass */}
                <path d="M5,0 L35,0 L20,20 L35,40 L5,40 L20,20 Z" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5" />
                {/* Sand in Top (Emptying) */}
                <path d="M10,5 L30,5 L20,18 Z" fill="#ff0000" />
                {/* Sand in Bottom (Filling) */}
                <path d="M10,35 L30,35 L20,22 Z" fill="#ff0000" />
                {/* Stream */}
                <line x1="20" y1="18" x2="20" y2="22" stroke="#ff0000" strokeWidth="1" />
            </g>

            {/* Typography */}
            <text x="200" y="460" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 42)} fontWeight="900" fill="#ff0000" fontFamily="Impact, sans-serif" style={{ textShadow: "0 0 10px #ff0000, 2px 2px 0px #000" }}>
                {safeName.toUpperCase()}
            </text>

            <text x="200" y="550" textAnchor="middle" fontSize="16" fill="#ccc" fontStyle="italic" fontFamily="serif">
                {safeDesc}
            </text>

            <text x="200" y="580" textAnchor="middle" fontSize="14" fill="#d00" fontWeight="bold" letterSpacing="2">
                TIME IS RUNNING OUT...
            </text>
        </svg>
    );
}

// 3. Tram Cam Tuoi Tre (Battery Low - Moody Tech Style)
const TramCamTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "LOW BATTERY";
    const safeDesc = description || "System shutting down...";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Emergency Red Glow */}
                <filter id="emergency-glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feFlood floodColor="#FF0000" floodOpacity="0.9" result="color" />
                    <feComposite in="color" in2="coloredBlur" operator="in" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Moody Grain */}
                <filter id="moody-grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
                    <feColorMatrix type="matrix" values="0.1 0 0 0 0  0 0.1 0 0 0  0 0 0.1 0 0  0 0 0 0.3 0" in="noise" result="coloredNoise" />
                    <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite" />
                    <feBlend mode="multiply" in="composite" in2="SourceGraphic" />
                </filter>
            </defs>

            {/* Background - Moody Blue Grey */}
            <rect width="400" height="600" fill="#2c3e50" />
            <rect width="400" height="600" fill="#000" opacity="0.2" filter="url(#moody-grain)" />

            {/* Downward Graph - MOVED TO BACK LAYER */}
            <path d="M0,350 L80,330 L150,380 L250,300 L350,550 L420,580" fill="none" stroke="#e74c3c" strokeWidth="3" strokeDasharray="10 5" opacity="0.6" />
            <circle cx="350" cy="550" r="6" fill="#e74c3c" />

            {/* Avatar Frame - Increased size */}
            {/* Added white border stroke="white" strokeWidth="2" */}
            <rect x="60" y="80" width="280" height="280" fill="none" stroke="white" strokeWidth="2" opacity="0.8" />
            {userImage && <image href={userImage} x="65" y="85" width="270" height="270" preserveAspectRatio="xMidYMid slice" filter="grayscale(1) contrast(1.2)" opacity="0.9" />}

            {/* Battery Icon */}
            <g transform="translate(150, 420)">
                <rect x="0" y="0" width="100" height="160" rx="8" fill="none" stroke="#fff" strokeWidth="6" opacity="0.8" />
                <rect x="30" y="-12" width="40" height="12" fill="#fff" opacity="0.8" />
                {/* 1% red level with Glow */}
                <rect x="10" y="140" width="80" height="10" fill="#FF0000" filter="url(#emergency-glow)" />
                <text x="50" y="90" textAnchor="middle" fontSize="36" fill="#fff" fontWeight="bold" fontFamily="monospace">1%</text>
            </g>


            {/* Title System Alert */}
            <text x="200" y="50" textAnchor="middle" fontSize="22" fontFamily="Arial" fontWeight="bold" fill="#fff" letterSpacing="1">
                TRẠM SẠC CẢM XÚC
            </text>

            <text x="200" y="390" textAnchor="middle" fontSize={getSafeFontSize(safeName, 380, 40)} fontWeight="900" fill="#ff4d4d" fontFamily="Courier New, monospace" style={{ textShadow: "2px 2px 0px #000" }}>
                {safeName}
            </text>

            <text x="200" y="590" textAnchor="middle" fontSize="14" fill="#bdc3c7" fontStyle="italic" opacity="0.8">
                "{safeDesc}"
            </text>
        </svg>
    );
}

// 4. Introvert Cave (Redesigned: Digital Status Display)
const CaveTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "HƯỚNG NỘI";
    const safeDesc = description || "Do Not Disturb (trừ shipper)";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Neon Orange Filter */}
                <filter id="orange-neon" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feFlood floodColor="#FF8C00" floodOpacity="0.8" result="color" />
                    <feComposite in="color" in2="coloredBlur" operator="in" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* BG Noise */}
                <filter id="bg-noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" opacity="0.1" />
                    <feColorMatrix type="saturate" values="0" />
                    <feBlend mode="overlay" in2="SourceGraphic" />
                </filter>
            </defs>

            {/* Black Background with Noise */}
            <rect width="400" height="600" fill="#0a0a0a" />
            <rect width="400" height="600" fill="transparent" filter="url(#bg-noise)" opacity="0.3" />

            {/* Status Frame Top - Charging */}
            <g transform="translate(50, 50)">
                {/* Cable */}
                <path d="M150,-50 L150,50" stroke="#FF8C00" strokeWidth="4" filter="url(#orange-neon)" />
                <rect x="50" y="50" width="200" height="80" rx="10" fill="#111" stroke="#FF8C00" strokeWidth="2" filter="url(#orange-neon)" />

                {/* Text "ĐANG SẠC..." */}
                <text x="150" y="95" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#FF8C00" fontFamily="sans-serif" letterSpacing="2">
                    ĐANG SẠC XÃ HỘI...
                </text>

                {/* Battery Icon Top Right */}
                <g transform="translate(260, 60)">
                    <rect x="0" y="0" width="25" height="12" rx="2" stroke="#FF8C00" strokeWidth="2" fill="none" />
                    <rect x="2" y="2" width="15" height="8" fill="#FF8C00" /> {/* Level */}
                    <path d="M26,3 L28,3 L28,9 L26,9 Z" fill="#FF8C00" />
                    {/* Lightning Bolt */}
                    <path d="M35,-5 L30,5 L35,5 L30,15" stroke="#FF8C00" strokeWidth="2" fill="none" transform="scale(0.8)" />
                </g>
            </g>

            {/* Avatar Centered */}
            <defs>
                <clipPath id="circleAv">
                    <circle cx="200" cy="280" r="100" />
                </clipPath>
            </defs>
            {/* Glow behind avatar */}
            <circle cx="200" cy="280" r="105" fill="none" stroke="#FF8C00" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />

            {userImage ? (
                <image href={userImage} x="100" y="180" width="200" height="200" preserveAspectRatio="xMidYMid slice" clipPath="url(#circleAv)" />
            ) : (
                <circle cx="200" cy="280" r="100" fill="#222" />
            )}
            {/* "Loading" ring around avatar */}
            <path d="M200,175 A105,105 0 0,1 305,280" fill="none" stroke="#FF8C00" strokeWidth="4" strokeLinecap="round" filter="url(#orange-neon)" />


            {/* Typography Bottom */}
            <text x="200" y="450" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 36)} fill="#fff" fontFamily="sans-serif" fontWeight="900" letterSpacing="6">
                {safeName.toUpperCase()}
            </text>

            {/* Status Line */}
            <line x1="100" y1="470" x2="300" y2="470" stroke="#333" strokeWidth="2" />

            <text x="200" y="500" textAnchor="middle" fontSize="16" fill="#888" fontFamily="sans-serif" fontWeight="bold">
                DO NOT DISTURB
            </text>
            <text x="200" y="525" textAnchor="middle" fontSize="14" fill="#FF8C00" fontFamily="sans-serif" fontWeight="bold" fontStyle="italic">
                {safeDesc.replace('Do Not Disturb', '')}
            </text>
        </svg>
    );
}

// 5. Trash Can VIP
const TrashTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "VIP TRASH";
    const safeDesc = description || "Gold Trash";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#eee" />

            {/* Gold Gradient */}
            <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#FFD700" />
                <stop offset="0.5" stopColor="#FFFACD" />
                <stop offset="1" stopColor="#DAA520" />
            </linearGradient>

            {/* Trash Can Body */}
            <path d="M100,200 L120,550 H280 L300,200 Z" fill="url(#goldGrad)" stroke="#DAA520" strokeWidth="2" />
            <path d="M110,250 H290 M115,300 H285 M120,350 H280" stroke="#DAA520" strokeWidth="2" />

            {/* Lid (open) */}
            <path d="M80,180 L320,180 L300,200 L100,200 Z" fill="url(#goldGrad)" />
            <path d="M180,150 H220 V180 H180 Z" fill="url(#goldGrad)" />

            {/* Avatar inside */}
            <defs>
                <clipPath id="trashClip">
                    <rect x="120" y="120" width="160" height="200" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="120" y="90" width="160" height="160" preserveAspectRatio="xMidYMid slice" />}

            {/* Crown */}
            <path d="M180,80 L200,40 L220,80 L240,40 L250,90 H150 L160,40 Z" fill="#FFD700" stroke="#DAA520" strokeWidth="2" />
            <circle cx="160" cy="40" r="5" fill="red" />
            <circle cx="200" cy="40" r="5" fill="blue" />
            <circle cx="240" cy="40" r="5" fill="green" />

            <text x="200" y="450" textAnchor="middle" fontSize={getSafeFontSize(safeName, 150, 20)} fontWeight="bold" fill="#8B4513">
                {safeName}
            </text>
            <text x="200" y="480" textAnchor="middle" fontSize="12" fill="#8B4513">
                KING OF TRASH
            </text>

            <rect x="50" y="520" width="300" height="60" rx="10" fill="#fff" stroke="#000" strokeWidth="2" />
            <text x="200" y="555" textAnchor="middle" fontSize="14" fill="#000">
                "{safeDesc}"
            </text>
        </svg>
    );
}

// 6. Clown License
const ClownTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "CHÚ HỀ";
    const safeDesc = description || "Full-time Circus";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#FFFAFA" />

            {/* Card Border */}
            <rect x="20" y="150" width="360" height="300" rx="10" fill="#F0F8FF" stroke="#000" strokeWidth="2" />
            <rect x="20" y="150" width="360" height="60" rx="10" fill="#FF4500" />
            <text x="200" y="190" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#fff" fontFamily="Comic Sans MS, cursive">
                OFFICIAL CLOWN LICENSE
            </text>

            <rect x="40" y="250" width="100" height="120" fill="#fff" stroke="#000" strokeWidth="1" />
            {userImage && <image href={userImage} x="40" y="250" width="100" height="120" preserveAspectRatio="xMidYMid slice" />}

            <text x="160" y="270" fontSize="14" fill="#000" fontWeight="bold">Name:</text>
            <text x="160" y="290" fontSize="18" fill="#000" fontFamily="Comic Sans MS, cursive">{safeName}</text>

            <text x="160" y="320" fontSize="14" fill="#000" fontWeight="bold">Occupation:</text>
            <text x="160" y="340" fontSize="16" fill="#000">Full-time Circus (Life)</text>

            <text x="160" y="370" fontSize="14" fill="#000" fontWeight="bold">Signature:</text>
            <text x="160" y="390" fontSize="16" fill="#000" fontStyle="italic">🤡 {safeName} 🤡</text>

            {/* Stamp */}
            <g transform="translate(250, 350) rotate(-20)">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#FF0000" strokeWidth="4" />
                <text x="50" y="55" textAnchor="middle" fontSize="16" fill="#FF0000" fontWeight="bold" transform="rotate(-15)">VERIFIED</text>
            </g>

            <text x="200" y="500" textAnchor="middle" fontSize="16" fill="#333" width="300">
                "{safeDesc}"
            </text>
        </svg>
    );
}

// 7. Zombie Cong So (The Survivor)
const ZombieTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "ZOMBIE";
    const safeDesc = description || "Brains...";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Green Glow Filter */}
                <filter id="green-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <clipPath id="avatar-clip-cracked">
                    <path d="M70,100 L330,100 L320,150 L330,360 L70,360 L80,200 Z" />
                </clipPath>
            </defs>

            {/* 1. NỀN & HỌA TIẾT (Olive Drab + Neubrutalism Shadow) */}
            <rect x="10" y="10" width="390" height="590" fill="black" />
            <rect width="395" height="595" fill="#556B2F" stroke="black" strokeWidth="3" />

            {/* Skin Texture/Stitches */}
            <path d="M50,50 L80,80 M60,70 L70,60 M120,10 L140,50 M125,40 L135,20" stroke="#000" strokeWidth="2" />

            {/* 2. THÊM CHI TIẾT "TÀN TẠ" (Coffee Splatters) */}
            <path d="M300,50 Q320,30 340,50 T380,60" fill="none" stroke="#3e2723" strokeWidth="15" strokeLinecap="round" opacity="0.6" />
            <circle cx="320" cy="80" r="10" fill="#3e2723" opacity="0.6" />
            <path d="M20,500 Q50,480 80,520" fill="none" stroke="#3e2723" strokeWidth="10" strokeLinecap="round" opacity="0.6" />

            {/* 3. NÂNG CẤP KHUNG AVATAR (Larger & Cracked) */}
            {/* Cracked Frame Shadow */}
            <path d="M75,105 L335,105 L325,155 L335,365 L75,365 L85,205 Z" fill="black" opacity="0.5" />
            {/* Frame Body */}
            <path d="M70,100 L330,100 L320,150 L330,360 L70,360 L80,200 Z" fill="#2F4F4F" stroke="#000" strokeWidth="5" strokeLinejoin="bevel" />

            {/* Cracked corners */}
            <path d="M70,100 L90,120" stroke="black" strokeWidth="2" />
            <path d="M330,360 L310,340" stroke="black" strokeWidth="2" />

            {userImage ? (
                <image
                    href={userImage}
                    x="70" y="100" width="260" height="260"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#avatar-clip-cracked)"
                    // Greenish tint: sepia for dead look, hue-rotate for green skin
                    style={{ filter: "sepia(0.5) hue-rotate(70deg) saturate(0.8) contrast(1.2)" }}
                />
            ) : (
                <text x="200" y="250" textAnchor="middle" fontSize="80">🧟</text>
            )}

            {/* Icons: Broken Card */}
            <rect x="300" y="400" width="60" height="40" fill="#fff" stroke="black" strokeWidth="2" transform="rotate(15)" />
            <path d="M330,400 L340,440" stroke="black" strokeWidth="1" />
            <circle cx="330" cy="415" r="10" fill="#ccc" />

            {/* 4. TYPOGRAPHY & HIỆU ỨNG */}
            {/* Glowing ZOMBIE Text */}
            <text x="200" y="460" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 40)} fontWeight="bold" fill="#00FF00" fontFamily="Chalkduster, fantasy" filter="url(#green-glow)">
                {safeName}
            </text>

            <text x="200" y="500" textAnchor="middle" fontSize="18" fill="#F0E68C" fontWeight="bold">
                BRAINS... I MEAN, COFFEE...
            </text>
            <text x="200" y="540" textAnchor="middle" fontSize="16" fill="#F0E68C" fontStyle="italic">
                {safeDesc}
            </text>

            {/* Red Stamp: OVERWORKED */}
            <g transform="translate(200, 300) rotate(-20)">
                <rect x="-90" y="-25" width="180" height="50" rx="4" fill="none" stroke="#8B0000" strokeWidth="5" opacity="0.8" />
                <text x="0" y="10" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#8B0000" fontFamily="Impact, sans-serif" opacity="0.8" letterSpacing="2">OVERWORKED</text>
            </g>
        </svg>
    );
}

// 8. R.I.P Luong (Tombstone)
const RipTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "NGUYEN VAN A";
    const safeDesc = description || "Gone too soon";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Stone Texture Filter */}
                <filter id="stoneNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    <feColorMatrix type="saturate" values="0" />
                    <feComponentTransfer>
                        <feFuncR type="linear" slope="0.5" intercept="0.25" />
                        <feFuncG type="linear" slope="0.5" intercept="0.25" />
                        <feFuncB type="linear" slope="0.5" intercept="0.25" />
                    </feComponentTransfer>
                </filter>
                <clipPath id="stoneArch">
                    <path d="M100,220 A80,80 0 0,1 300,220 V380 H100 Z" />
                </clipPath>
            </defs>

            {/* 1. NỀN & HỌA TIẾT (Stone Texture) */}
            <rect width="400" height="600" fill="#4a4a4a" />
            <rect width="400" height="600" filter="url(#stoneNoise)" opacity="0.4" />

            {/* Inner Border Engraving */}
            <rect x="20" y="20" width="360" height="560" fill="none" stroke="#2a2a2a" strokeWidth="4" />
            <path d="M30,30 L370,30 L370,570 L30,570 Z" fill="none" stroke="#666" strokeWidth="2" />

            {/* 2. CHI TIẾT "TANG LỄ" (Black Ribbons) */}
            <path d="M0,0 L100,0 L0,100 Z" fill="black" />
            <path d="M400,0 L300,0 L400,100 Z" fill="black" />

            {/* 3. TINH CHỈNH AVATAR (Tombstone Shape & Grayscale) */}
            {/* Shadow */}
            <path d="M105,225 A80,80 0 0,1 305,225 V385 H105 Z" fill="black" opacity="0.5" />
            {/* Frame */}
            <path d="M100,220 A80,80 0 0,1 300,220 V380 H100 Z" fill="#333" stroke="black" strokeWidth="4" />

            {userImage ? (
                <image
                    href={userImage}
                    x="100" y="140" width="200" height="240"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#stoneArch)"
                    filter="grayscale(1) contrast(1.2)"
                />
            ) : (
                <text x="200" y="320" textAnchor="middle" fontSize="60" fill="#666">⚰️</text>
            )}

            {/* 4. TYPOGRAPHY (Engraved Look) */}
            {/* Embossed R.I.P */}
            <text x="202" y="152" textAnchor="middle" fontSize="60" fontWeight="bold" fill="#fff" fontFamily="serif" opacity="0.2">R.I.P</text>
            <text x="200" y="150" textAnchor="middle" fontSize="60" fontWeight="bold" fill="#1a1a1a" fontFamily="serif" style={{ textShadow: "1px 1px 0px rgba(255,255,255,0.2)" }}>R.I.P</text>

            {/* Candles / Flowers Iconography */}
            <text x="50" y="470" fontSize="40">🕯️</text>
            <text x="310" y="470" fontSize="40">🕯️</text>

            {/* Name */}
            <text x="200" y="450" textAnchor="middle" fontSize={getSafeFontSize(safeName, 300, 32)} fontWeight="900" fill="#111" fontFamily="serif" letterSpacing="2">
                {safeName.toUpperCase()}
            </text>

            {/* Quotes */}
            <text x="200" y="480" textAnchor="middle" fontSize="16" fill="#ccc" fontStyle="italic" fontFamily="serif">
                "Vừa về đã đi..."
            </text>
            <text x="200" y="510" textAnchor="middle" fontSize="14" fill="#ccc" fontStyle="italic" fontFamily="serif">
                {safeDesc}
            </text>

            {/* 2. CHI TIẾT "TANG LỄ" - Seal */}
            <g transform="translate(200, 560) rotate(-10)">
                <rect x="-80" y="-20" width="160" height="40" fill="none" stroke="#8B0000" strokeWidth="3" rx="5" opacity="0.7" />
                <text x="0" y="8" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#8B0000" fontFamily="Courier New, monospace" opacity="0.7">OUT OF MONEY</text>
            </g>
        </svg>
    );
}

// 9. To Nguoi Tieu Dung (Premium Product Label)
const ConsumerTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "NGƯỜI TIÊU DÙNG";
    const safeDesc = description || "Sản phẩm không kèm bảo hành, vui lòng không đổi trả";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            {/* 1. NỀN (Background) - Cement/Beige Paper */}
            <rect width="400" height="600" fill="#f5f5dc" />
            {/* Grid Pattern */}
            <defs>
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#a8a29e" strokeWidth="1" opacity="0.3" />
                </pattern>
                <clipPath id="productImgClip">
                    <rect x="55" y="125" width="290" height="290" />
                </clipPath>
            </defs>
            <rect width="400" height="600" fill="url(#gridPattern)" />

            {/* Jagged Edges (Receipt tear effect) */}
            <path d="M0,0 L20,10 L40,0 L60,10 L80,0 L100,10 L120,0 L140,10 L160,0 L180,10 L200,0 L220,10 L240,0 L260,10 L280,0 L300,10 L320,0 L340,10 L360,0 L380,10 L400,0 V600 L380,590 L360,600 L340,590 L320,600 L300,590 L280,600 L260,590 L240,600 L220,590 L200,600 L180,590 L160,600 L140,590 L120,600 L100,590 L80,600 L60,590 L40,600 L20,590 L0,600 Z" fill="none" stroke="#d6d3d1" strokeWidth="2" />

            {/* 2. KHUNG AVATAR (Product Image) */}
            {/* Thick Black Frame */}
            <rect x="50" y="120" width="300" height="300" fill="white" stroke="black" strokeWidth="10" />

            {/* User Image */}
            {userImage ? (
                <image
                    href={userImage}
                    x="55" y="125" width="290" height="290"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#productImgClip)"
                />
            ) : (
                <rect x="55" y="125" width="290" height="290" fill="#e5e5e5" />
            )}

            {/* Overlay Watermark/Barcode */}
            <g opacity="0.4" transform="translate(60, 130)">
                <text x="10" y="30" fontSize="30" fontWeight="bold" fill="black" transform="rotate(-45)">INSPECTED</text>
                <rect x="220" y="220" width="60" height="60" fill="none" stroke="black" strokeWidth="2" />
                <path d="M225,220 V280 M230,220 V280 M240,220 V280 M255,220 V280 M265,220 V280 M275,220 V280" stroke="black" strokeWidth="2" />
            </g>

            {/* 3. THÔNG TIN NGƯỜI TIÊU DÙNG (Product Details) */}
            <g transform="translate(40, 460)">
                {/* Product Name */}
                <foreignObject x="0" y="0" width="320" height="40">
                    <div className="w-full h-full flex items-center justify-start text-black font-black text-2xl uppercase font-sans leading-none" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                        PRODUCT: {safeName}
                    </div>
                </foreignObject>

                {/* Specs Table Look */}
                <line x1="0" y1="45" x2="320" y2="45" stroke="black" strokeWidth="2" />

                <text x="0" y="70" fontSize="12" fontFamily="monospace" fill="#333">• Độ bền: Thấp (Dễ tổn thương)</text>
                <text x="0" y="90" fontSize="12" fontFamily="monospace" fill="#333">• Tâm hồn: Dễ vỡ</text>
                <text x="0" y="110" fontSize="12" fontFamily="monospace" fill="#333">• Giá trị: Vô giá</text>

                {/* QR Code Simulation */}
                <rect x="260" y="60" width="50" height="50" fill="white" stroke="black" />
                <path d="M265,65 H275 V75 H265 Z M290,65 H300 V75 H290 Z M265,90 H275 V100 H265 Z M280,80 H290 V90 H280" fill="black" />
            </g>

            {/* 4. TEM NHÃN & STICKER (Dark Humor) */}
            {/* Handle With Care Sticker */}
            <g transform="translate(20, 40) rotate(-5)">
                <rect width="180" height="50" fill="#ef4444" rx="4" />
                <rect x="5" y="5" width="170" height="40" fill="none" stroke="white" strokeWidth="2" rx="2" />
                <text x="90" y="32" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white" fontFamily="Arial Black">HANDLE WITH CARE</text>
            </g>

            {/* Authentic Stamp */}
            <g transform="translate(280, 360) rotate(-20)" opacity="1">
                <circle r="40" fill="none" stroke="#ff0000" strokeWidth="4" />
                <circle r="36" fill="none" stroke="#ff0000" strokeWidth="1" />
                <path d="M-30,0 H30" stroke="#ff0000" strokeWidth="1" />
                <text x="0" y="5" textAnchor="middle" fontSize="10" fill="#ff0000" fontWeight="bold" style={{ textShadow: '0 0 2px rgba(255, 0, 0, 0.3)' }}>HÀNG CHÍNH HÃNG</text>
                <text x="0" y="-15" textAnchor="middle" fontSize="8" fill="#ff0000" style={{ textShadow: '0 0 2px rgba(255, 0, 0, 0.3)' }}>100%</text>
                <text x="0" y="20" textAnchor="middle" fontSize="8" fill="#ff0000" style={{ textShadow: '0 0 2px rgba(255, 0, 0, 0.3)' }}>REAL</text>
            </g>

            {/* Static Warning Label (Fixed) */}
            <text x="200" y="585" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7f1d1d" letterSpacing="0.5">
                "SẢN PHẨM KHÔNG KÈM BẢO HÀNH, MIỄN ĐỔI TRẢ"
            </text>

            {/* User Description (Hidden or subtle) */}
            {/* We hide the user description to ensure the warning is prominent as requested */}
        </svg>
    );
}

// 10. Drama Is Coming (Epic Cinematic Style)
const DramaTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "DRAMA QUEEN";
    const safeDesc = description || "Winter is coming...";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Stone Carved Text Filter */}
                <filter id="stone-carve">
                    <feGaussianBlur stdDeviation="0.5" in="SourceAlpha" result="blur" />
                    <feOffset dx="1" dy="1" in="blur" result="offsetBlur" />
                    <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1" specularExponent="20" lightingColor="#bbbbbb" result="specOut">
                        <fePointLight x="-5000" y="-10000" z="20000" />
                    </feSpecularLighting>
                    <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
                    <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" />
                    <feMerge>
                        <feMergeNode in="offsetBlur" />
                        <feMergeNode in="litPaint" />
                    </feMerge>
                </filter>
                {/* Soft Glow for Name */}
                <filter id="soft-glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Mist Texture */}
                <filter id="mist-fog">
                    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="4" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
                </filter>
                <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#5d6d7e" />
                    <stop offset="0.5" stopColor="#d5dbdb" />
                    <stop offset="1" stopColor="#2c3e50" />
                </linearGradient>
            </defs>

            {/* Background - Dark Stone/Velvet */}
            <rect width="400" height="600" fill="#1a252f" />
            <rect width="400" height="600" fill="#000" opacity="0.3" filter="url(#mist-fog)" />

            {/* Ash Particles */}
            <g fill="#fff" opacity="0.4">
                {[...Array(20)].map((_, i) => (
                    <circle
                        key={i}
                        cx={(i * 97) % 400}
                        cy={(i * 131) % 600}
                        r={(i % 3) + 1}
                        filter="blur(1px)"
                        opacity={((i % 5) + 1) / 10}
                    />
                ))}
            </g>

            {/* Iron Throne Frame - Stylized Swords */}
            <g transform="translate(0, 50)" filter="drop-shadow(0px 10px 10px rgba(0,0,0,0.8))">
                {/* Back Swords */}
                <path d="M50,100 L80,0 L110,100 M350,100 L320,0 L290,100" stroke="#5d6d7e" strokeWidth="4" fill="none" />
                <path d="M120,80 L140,-20 L160,80 M280,80 L260,-20 L240,80" stroke="#707b7c" strokeWidth="4" fill="none" />
                {/* Main Frame */}
                <path d="M50,100 L350,100 L330,400 L70,400 Z" fill="none" stroke="url(#metalGrad)" strokeWidth="8" />
                {/* Seat Details */}
                <path d="M50,400 L30,450 M350,400 L370,450" stroke="#2c3e50" strokeWidth="6" />
            </g>

            {/* Avatar */}
            <defs>
                <clipPath id="throneClip">
                    <polygon points="55,105 345,105 325,395 75,395" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="50" y="50" width="300" height="400" preserveAspectRatio="xMidYMid slice" clipPath="url(#throneClip)" opacity="0.9" />}

            {/* Cinematic Text Overlay */}
            <rect x="0" y="420" width="400" height="180" fill="linear-gradient(to top, #000, transparent)" />

            <text x="200" y="480" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#d5dbdb" fontFamily="serif" letterSpacing="2" filter="url(#stone-carve)">
                DRAMA IS COMING
            </text>

            <path d="M100,500 H300" stroke="#d5dbdb" strokeWidth="1" opacity="0.5" />

            <text x="200" y="540" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 32)} fontWeight="normal" fill="#fff" fontFamily="serif" filter="url(#soft-glow)">
                {safeName.toUpperCase()}
            </text>
            <text x="200" y="575" textAnchor="middle" fontSize="14" fill="#bdc3c7" fontStyle="italic" fontFamily="serif" letterSpacing="1">
                "{safeDesc}"
            </text>
        </svg>
    );
}

export const DarkHumorTemplates = {
    'overthinking-club': OverthinkingTemplate,
    'deadline-reaper': ReaperTemplate,
    'tram-cam-tuoi-tre': TramCamTemplate,
    'introvert-cave': CaveTemplate,
    'trash-can-vip': TrashTemplate,
    'clown-license': ClownTemplate,
    'zombie-cong-so': ZombieTemplate,
    'rip-luong': RipTemplate,
    'to-nguoi-tieu-dung': ConsumerTemplate,
    'drama-is-coming': DramaTemplate,
};
