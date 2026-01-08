import React from 'react';
import { TemplateProps } from './types';

export const GenZTheme = {
    // ===================================
    // 41. KEO LỲ MÃI ĐỈNH (Super Glue)
    // ===================================
    'keo-ly-mai-dinh': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            {/* Y2K Stars Background */}
            <defs>
                <clipPath id="avatar-clip-blob">
                    <path d="M150,100 C200,80 250,120 230,170 C210,220 180,240 130,220 C80,200 60,150 90,120 Z" />
                </clipPath>
                {/* Soft 3D Text Shadow */}
                <filter id="soft-3d-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
                    <feOffset dx="2" dy="2" result="offsetBlur" />
                    <feFlood floodColor="#880e4f" result="color" />
                    <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
                    <feMerge>
                        <feMergeNode in="shadow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Hot Pink BG */}
            <rect width="300" height="400" fill="#ff4081" />

            {/* Subtler Polka Dots */}
            <pattern id="polka-dots-y2k" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="white" opacity="0.3" />
            </pattern>
            <rect width="300" height="400" fill="url(#polka-dots-y2k)" />

            {/* Softened Sticky Glue Drips */}
            <path d="M0,0 L300,0 L300,50 Q250,90 200,60 T100,50 T0,70 Z" fill="#eb2f6e" />

            {/* Y2K Stars (Graphic Elements) */}
            <path d="M30,350 L40,350 L35,360 L30,350" fill="white" /> {/* Tiny Star */}
            <text x="20" y="380" fontSize="20" fill="white">✦</text>
            <text x="270" y="40" fontSize="30" fill="white" opacity="0.8">✦</text>


            {/* 502 Glue Bottle Graphic (Rotated & Sparkles) */}
            <g transform="translate(240, 330) rotate(15)">
                <path d="M-20,-50 L20,-50 L10,50 L-10,50 Z" fill="#ffeb3b" stroke="black" strokeWidth="2" />
                <rect x="-10" y="-10" width="20" height="10" fill="white" />
                <text x="0" y="0" textAnchor="middle" fontSize="10" fontWeight="bold">502</text>
                <text x="-25" y="-40" fontSize="14">✨</text>
                <text x="15" y="40" fontSize="14">✨</text>
            </g>

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
            <text x="150" y="270" textAnchor="middle" fill="white" stroke="black" strokeWidth="4" fontSize="40" fontWeight="900" fontStyle="italic" paintOrder="stroke" filter="url(#soft-3d-shadow)">KEO LỲ</text>

            <text x="150" y="310" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="bold" fill="#ffeb3b" stroke="white" strokeWidth="1" filter="url(#soft-3d-shadow)">
                {userName || "MÃI ĐỈNH"}
            </text>

            <text x="150" y="350" textAnchor="middle" fill="white" fontSize="14">#khum_thể_tách_rời</text>
        </>
    ),

    // ===================================
    // 42. CHẤM ZN (Periodic Table)
    // ===================================
    // ===================================
    // 42. CHẤM ZN (Periodic Table - Redesigned)
    // ===================================
    'cham-zn': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="element-box-clip">
                    <rect x="30" y="70" width="240" height="240" />
                </clipPath>
                {/* Blue Glow Filter */}
                <filter id="blue-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Clean White/Off-White BG */}
            <rect width="300" height="400" fill="#f5f5f5" />

            {/* Background Chemical Doodles (Subtle) */}
            <g opacity="0.1" fill="none" stroke="#000" strokeWidth="2">
                <circle cx="50" cy="50" r="20" />
                <path d="M250,350 L280,300 L220,300 Z" />
                <path d="M20,350 Q40,380 60,350" />
            </g>

            {/* 1. ELEMENT BOX (Neubrutalism) - Resized to 240x240 */}
            {/* Hard Shadow (Offset 10px) */}
            <rect x="40" y="80" width="240" height="240" fill="black" />
            {/* Main Box */}
            <rect x="30" y="70" width="240" height="240" fill="white" stroke="black" strokeWidth="4" />

            {/* 2. AVATAR AS BACKGROUND (Opacity 40% + White Overlay) */}
            {userImage ? (
                <>
                    <image
                        x="30" y="70" width="240" height="240"
                        href={userImage}
                        clipPath="url(#element-box-clip)"
                        preserveAspectRatio="xMidYMid slice"
                        opacity="0.4"
                        style={{ filter: 'grayscale(100%) contrast(1.2)' }}
                    />
                    {/* White Overlay 10% */}
                    <rect x="30" y="70" width="240" height="240" fill="white" opacity="0.1" clipPath="url(#element-box-clip)" />
                </>
            ) : null}

            {/* 3. CHEMICAL DATA - Centered relative to 240 width (Center X=150 still largely works or shifted?) */}
            {/* Center of Box is now X=30+120=150. Perfect. */}

            {/* Atomic Number with White Stroke */}
            <text x="45" y="100" fontSize="24" fontWeight="bold" fontFamily="sans-serif" fill="#000" stroke="white" strokeWidth="1" paintOrder="stroke">30</text>

            {/* Element Symbol (Glowing + Stroke) */}
            <text x="150" y="200" textAnchor="middle" fontSize="100" fontWeight="bold" fill="#000" fontFamily="sans-serif" filter="url(#blue-glow)" stroke="white" strokeWidth="1.5" paintOrder="stroke">
                Zn
            </text>
            <text x="150" y="200" textAnchor="middle" fontSize="100" fontWeight="bold" fill="none" fontFamily="sans-serif" stroke="#00bcd4" strokeWidth="2">
                Zn
            </text>

            {/* Element Name */}
            <text x="150" y="240" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#000" fontFamily="sans-serif">
                Zinc
            </text>

            {/* Atomic Weight */}
            <text x="150" y="270" textAnchor="middle" fontSize="16" fill="#000" fontFamily="monospace">
                65.38
            </text>

            {/* Electron Config (Small detail) */}
            <text x="260" y="290" textAnchor="end" fontSize="10" fill="#333" fontFamily="monospace">
                [Ar] 3d¹⁰ 4s²
            </text>


            {/* 4. CAPTION & DECORATIONS */}
            {/* Test Tube Icon Left (Scaled Down & Moved) */}
            <g transform="translate(5, 335) rotate(-15) scale(0.7)">
                <path d="M15,0 L30,0 L30,60 Q22,70 15,60 Z" fill="#e0f7fa" stroke="black" strokeWidth="2" />
                <rect x="13" y="-4" width="19" height="4" fill="#555" />
                <circle cx="22" cy="65" r="2" fill="#00bcd4" opacity="0.5" />
                <circle cx="15" cy="80" r="3" fill="#00bcd4" opacity="0.4" />
            </g>

            {/* Molecule Icon Right */}
            <g transform="translate(250, 40)">
                <circle cx="0" cy="0" r="8" fill="none" stroke="black" strokeWidth="2" />
                <line x1="0" y1="0" x2="20" y2="20" stroke="black" strokeWidth="2" />
                <circle cx="20" cy="20" r="6" fill="black" />
            </g>

            {/* Name - Adjusted Y and Logic */}
            <text x="150" y="350" textAnchor="middle" fontSize={Math.min(nameFontSize * 0.8, 24)} fontWeight="900" fill="black" fontFamily="sans-serif">
                {(() => {
                    const uName = userName ? userName.trim().toUpperCase() : "HẾT";
                    return uName.startsWith("CHẤM") ? uName : `CHẤM ${uName}`;
                })()}
            </text>

            {/* Custom Caption in Brick Red - Pushed Higher */}
            <text x="150" y="375" textAnchor="middle" fontSize="14" fill="#b71c1c" fontFamily="Courier New, monospace" fontWeight="bold">
                Mệt mỏi vì quá đẹp trai
            </text>
            <text x="150" y="390" textAnchor="middle" fontSize="14" fill="#b71c1c" fontFamily="Courier New, monospace" fontWeight="bold">
                / xinh gái
            </text>
        </svg>
    ),

    // ===================================
    // 43. TỐN CƠM CHA MẸ (Rice Bowl - Doodle Style)
    // ===================================
    'ton-com-cha-me': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="avatar-clip-rice">
                    <circle cx="150" cy="180" r="70" />
                </clipPath>
                {/* Doodle Pattern */}
                <pattern id="doodle-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    {/* Spoon Doodle */}
                    <path d="M10,10 Q15,5 20,10 T30,10" fill="none" stroke="#d7ccc8" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Bowl Doodle */}
                    <path d="M5,30 Q10,35 15,30" fill="none" stroke="#d7ccc8" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="30" cy="30" r="2" fill="#d7ccc8" />
                </pattern>
            </defs>

            {/* Pastel Yellow BG */}
            <rect width="300" height="400" fill="#fff9c4" />
            <rect width="300" height="400" fill="url(#doodle-pattern)" opacity="0.6" />

            {/* Bowl Shape */}
            <path d="M50,250 Q150,350 250,250" fill="#fff" stroke="black" strokeWidth="2" /> {/* Bowl bottom */}
            <ellipse cx="150" cy="250" rx="100" ry="30" fill="#fff" stroke="black" strokeWidth="2" /> {/* Rim */}

            {/* Rice Mound / Avatar */}
            <circle cx="150" cy="180" r="75" fill="#f5f5f5" /> {/* Rice base */}
            {/* Rice Grain Texture Doodles */}
            <path d="M150,120 Q155,115 160,120" stroke="#bdbdbd" strokeWidth="1" fill="none" />
            <path d="M130,150 Q135,145 140,150" stroke="#bdbdbd" strokeWidth="1" fill="none" />
            <path d="M170,160 Q175,155 180,160" stroke="#bdbdbd" strokeWidth="1" fill="none" />

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

            {/* Horizontal Spoon Doodle (Replacing Chopsticks) */}
            <g transform="translate(60, 240) rotate(-10)">
                <path d="M0,10 L120,10" stroke="#795548" strokeWidth="8" strokeLinecap="round" /> {/* Handle */}
                <ellipse cx="140" cy="10" rx="35" ry="15" fill="#cfd8dc" stroke="#795548" strokeWidth="2" /> {/* Spoon Head */}
                {/* Shine on spoon */}
                <path d="M120,5 Q140,0 160,5" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
            </g>


            {/* Text on Bowl */}
            <path id="bowlCurve" d="M80,270 Q150,310 220,270" fill="none" />

            <text>
                <textPath href="#bowlCurve" startOffset="50%" textAnchor="middle" fontSize="16" fontWeight="900" fill="#ff5722" stroke="white" strokeWidth="4" paintOrder="stroke" fontFamily="sans-serif">
                    ĂN HẠI NUMBER 1
                </textPath>
            </text>

            <text x="150" y="350" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="bold" fill="#bf360c" fontFamily=" cursive, var(--font-vt323), monospace">
                {userName || "TỐN CƠM"}
            </text>

            <text x="150" y="380" textAnchor="middle" fontSize="12" fill="#795548" fontStyle="italic" fontFamily="sans-serif">
                Thành tích: Phá nồi cơm, báo cha mẹ.
            </text>
        </svg>
    ),

    // ===================================
    // 44. A-LO-HA (Nokia 1280)
    // ===================================
    // ===================================
    // 44. A-LO-HA (Nokia 1280 - Retro Nostalgia)
    // ===================================
    'a-lo-ha': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="avatar-clip-lcd">
                    <rect x="55" y="80" width="190" height="120" rx="3" />
                </clipPath>
                {/* Plastic Texture Filter */}
                <filter id="plastic-texture">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
                    <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.1 0" in="noise" result="coloredNoise" />
                    <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite" />
                    <feBlend mode="multiply" in="composite" in2="SourceGraphic" />
                </filter>
                {/* Soft Button Bevel */}
                <linearGradient id="button-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#e3f2fd" />
                    <stop offset="100%" stopColor="#bbdefb" />
                </linearGradient>
                <filter id="button-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1" result="blur" />
                    <feOffset dx="0" dy="1" result="offsetBlur" />
                    <feComposite in="SourceGraphic" in2="offsetBlur" operator="over" />
                </filter>
                {/* Pixelate Filter for Avatar */}
                <filter id="pixelate" x="0" y="0">
                    <feFlood x="2" y="2" height="2" width="2" />
                    <feComposite width="4" height="4" />
                    <feTile result="a" />
                    <feComposite in="SourceGraphic" in2="a" operator="in" />
                    <feMorphology operator="dilate" radius="2" />
                </filter>
                <pattern id="scanlines" patternUnits="userSpaceOnUse" width="4" height="4">
                    <path d="M0,2 L4,2" stroke="#000" strokeWidth="1" opacity="0.1" />
                </pattern>
            </defs>

            {/* 1. BODY - Blue Matte Plastic */}
            <path d="M40,20 L260,20 Q280,20 280,40 L280,380 Q280,400 260,400 L40,400 Q20,400 20,380 L20,40 Q20,20 40,20 Z"
                fill="#1565c0" filter="url(#plastic-texture)" />
            {/* Body Highlights (Fake 3D) */}
            <path d="M25,40 L25,380" stroke="white" strokeWidth="2" opacity="0.3" fill="none" />
            <path d="M275,40 L275,380" stroke="black" strokeWidth="2" opacity="0.2" fill="none" />

            {/* 2. SCREEN BEZEL - Dark Grey Plastic */}
            <rect x="40" y="50" width="220" height="170" rx="10" fill="#455a64" stroke="#263238" strokeWidth="2" />
            <text x="150" y="65" textAnchor="middle" fontSize="10" fill="#b0bec5" fontFamily="var(--font-vt323), monospace" letterSpacing="2">NOKIA</text>

            {/* 3. LCD SCREEN - Monochrome Green */}
            <rect x="55" y="80" width="190" height="120" fill="#9ead86" stroke="#829668" strokeWidth="3" />
            {/* Screen inner shadow */}
            <rect x="55" y="80" width="190" height="120" fill="none" stroke="black" strokeWidth="4" opacity="0.1" />

            {/* Avatar with Pixel Effect */}
            {userImage ? (
                <image
                    x="55" y="80" width="190" height="120"
                    href={userImage}
                    clipPath="url(#avatar-clip-lcd)"
                    preserveAspectRatio="xMidYMid slice"
                    style={{ filter: "grayscale(100%) contrast(1.2)" }}
                />
            ) : (
                <text x="150" y="150" textAnchor="middle" fontSize="40" opacity="0.5">📞</text>
            )}
            {/* Scanlines Overlay */}
            <rect x="55" y="80" width="190" height="120" fill="url(#scanlines)" pointerEvents="none" />

            {/* UI Element: HEADER */}
            {/* Signal Bars */}
            <path d="M60,95 L60,85 L63,85 L63,95 Z" fill="black" />
            <path d="M65,95 L65,83 L68,83 L68,95 Z" fill="black" />
            <path d="M70,95 L70,81 L73,81 L73,95 Z" fill="black" />
            <text x="60" y="105" fontSize="10" fontFamily="var(--font-vt323), monospace">Viettel</text>

            {/* Battery */}
            <rect x="225" y="85" width="15" height="8" stroke="black" fill="none" />
            <rect x="227" y="87" width="11" height="4" fill="black" />
            <rect x="240" y="87" width="2" height="4" fill="black" />

            {/* Message Icon */}
            <path d="M145,85 L155,85 L155,92 L145,92 Z" fill="none" stroke="black" strokeWidth="1" />
            <path d="M145,85 L150,89 L155,85" fill="none" stroke="black" strokeWidth="1" />

            {/* Main Text (Name) */}
            <text x="150" y="190" textAnchor="middle" fontFamily="var(--font-vt323), monospace" fontSize={Math.min(nameFontSize, 32)} fill="black">
                {userName ? userName.toUpperCase() : "ALOO"}
            </text>


            {/* 4. KEYPAD - Soft Rubber Buttons */}
            {/* Nav Button */}
            <rect x="40" y="240" width="220" height="140" fill="none" /> {/* Keypad Area */}

            <circle cx="150" cy="270" r="25" fill="url(#button-grad)" filter="url(#button-shadow)" stroke="#90caf9" strokeWidth="1" />
            <rect x="135" y="255" width="30" height="30" rx="5" fill="none" stroke="#546e7a" strokeWidth="1" /> {/* D-pad markings */}

            {/* Call / End Buttons */}
            <rect x="65" y="260" width="40" height="15" rx="5" fill="#a5d6a7" filter="url(#button-shadow)" /> {/* Call - Green */}
            <rect x="195" y="260" width="40" height="15" rx="5" fill="#ef9a9a" filter="url(#button-shadow)" /> {/* End - Red */}
            <text x="85" y="271" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fontWeight="bold" fill="#1b5e20">-</text>
            <text x="215" y="271" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fontWeight="bold" fill="#b71c1c">-</text>

            {/* Num Pad */}
            <g transform="translate(0, 30)">
                {/* Row 1 */}
                <rect x="60" y="280" width="50" height="25" rx="8" fill="url(#button-grad)" filter="url(#button-shadow)" />
                <rect x="125" y="280" width="50" height="25" rx="8" fill="url(#button-grad)" filter="url(#button-shadow)" />
                <rect x="190" y="280" width="50" height="25" rx="8" fill="url(#button-grad)" filter="url(#button-shadow)" />
                <text x="85" y="297" textAnchor="middle" fontSize="16" fontFamily="var(--font-vt323), monospace" fill="#37474f">1</text>
                <text x="150" y="297" textAnchor="middle" fontSize="16" fontFamily="var(--font-vt323), monospace" fill="#37474f">2</text>
                <text x="215" y="297" textAnchor="middle" fontSize="16" fontFamily="var(--font-vt323), monospace" fill="#37474f">3</text>

                {/* Subtext */}
                <text x="150" y="303" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#78909c">abc</text>
                <text x="215" y="303" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#78909c">def</text>

                {/* Row 2 (Visual Only - Just rectangles for aesthetics) */}
                <rect x="60" y="315" width="50" height="25" rx="8" fill="url(#button-grad)" filter="url(#button-shadow)" />
                <rect x="125" y="315" width="50" height="25" rx="8" fill="url(#button-grad)" filter="url(#button-shadow)" />
                <rect x="190" y="315" width="50" height="25" rx="8" fill="url(#button-grad)" filter="url(#button-shadow)" />
                <text x="85" y="332" textAnchor="middle" fontSize="16" fontFamily="var(--font-vt323), monospace" fill="#37474f">4</text>
                <text x="150" y="332" textAnchor="middle" fontSize="16" fontFamily="var(--font-vt323), monospace" fill="#37474f">5</text>
                <text x="215" y="332" textAnchor="middle" fontSize="16" fontFamily="var(--font-vt323), monospace" fill="#37474f">6</text>
            </g>

            {/* Bottom Slogan */}
            <text x="150" y="390" textAnchor="middle" fontSize="12" fill="white" fontFamily="var(--font-vt323), monospace" opacity="0.8">
                NHAN TIN KHONG DAU, NOI DAU DAU DOI
            </text>
        </svg>
    ),

    // ===================================
    // 45. XU CÀ NA (Rotten Fruit)
    // ===================================
    // ===================================
    // 45. XU CÀ NA (Rotten Fruit - Soft Minimalism)
    // ===================================
    'xu-ca-na': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="avatar-clip-blob-round">
                    <circle cx="150" cy="150" r="70" />
                </clipPath>
                {/* Soft Shadow Filter */}
                <filter id="soft-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
                    <feOffset dx="2" dy="2" result="offsetBlur" />
                    <feFlood floodColor="#bf360c" floodOpacity="0.3" result="offsetColor" />
                    <feComposite in="offsetColor" in2="offsetBlur" operator="in" result="offsetBlur" />
                    <feMerge>
                        <feMergeNode in="offsetBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Soft Gradient for Circles */}
                <radialGradient id="soft-orange-grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#ffb74d" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#fff3e0" stopOpacity="0" />
                </radialGradient>
                {/* Soft Glow for Icons */}
                <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Background: Softened Rotten Orange */}
            <rect width="300" height="400" fill="#fff3e0" />
            <circle cx="50" cy="50" r="100" fill="url(#soft-orange-grad)" />
            <circle cx="280" cy="350" r="80" fill="url(#soft-orange-grad)" />

            {/* Unlucky Icon 1: Rain Cloud with Lightning */}
            <g transform="translate(30, 40)" filter="url(#soft-glow)">
                <path d="M10,20 Q5,20 5,15 Q5,5 15,5 Q20,0 30,5 Q40,0 45,10 Q50,10 50,15 Q50,20 45,20 Z" fill="#cfd8dc" stroke="none" />
                <circle cx="15" cy="12" r="5" fill="#cfd8dc" />
                <circle cx="35" cy="12" r="6" fill="#cfd8dc" />
                <circle cx="25" cy="8" r="7" fill="#cfd8dc" />
                {/* Lightning */}
                <path d="M20,25 L15,35 L20,35 L18,45" stroke="#fbc02d" strokeWidth="2" fill="none" />
            </g>

            {/* Unlucky Icon 2: Banana Peel (Redrawn for clarity) */}
            <g transform="translate(250, 310) rotate(30)" filter="url(#soft-glow)">
                <path d="M0,0 Q10,-10 20,0 L25,15 Q15,25 5,15 L0,0 Z" fill="#fff176" stroke="#f9a825" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10,15 L15,25" stroke="#f9a825" strokeWidth="2" strokeLinecap="round" /> {/* Stem */}
                <path d="M5,5 Q10,-5 15,5" fill="none" stroke="#f9a825" strokeWidth="1" opacity="0.6" />
            </g>

            {/* Sad Face Stickers (Simplified) */}
            <circle cx="250" cy="100" r="15" fill="#fffde7" stroke="#fbc02d" strokeWidth="1" />
            <path d="M245,95 L248,98 M255,95 L252,98" stroke="#fbc02d" strokeWidth="1.5" strokeLinecap="round" /> {/* Eyes X */}
            <circle cx="260" cy="90" r="2" fill="#0288d1" opacity="0.6" /> {/* Tear */}


            {/* Main Avatar with Motion Blur Loader */}
            <g>
                <circle cx="150" cy="150" r="75" fill="none" stroke="#ff9800" strokeWidth="4" strokeDasharray="10 10" strokeLinecap="round" opacity="0.6">
                    <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="2s" repeatCount="indefinite" />
                </circle>
                {/* Blur trail for motion effect */}
                <circle cx="150" cy="150" r="75" fill="none" stroke="#ff9800" strokeWidth="4" strokeDasharray="10 10" strokeLinecap="round" opacity="0.3" filter="url(#soft-shadow)">
                    <animateTransform attributeName="transform" type="rotate" from="-10 150 150" to="350 150 150" dur="2s" repeatCount="indefinite" />
                </circle>
            </g>

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

            {/* Background Big XU (Reduced Opacity + White Stroke) */}
            <text x="150" y="270" textAnchor="middle" fontSize="80" fontWeight="900" fill="#e64a19" opacity="0.1" stroke="white" strokeWidth="1">XU</text>

            {/* Main Text - Burnt Orange & Soft Shadow */}
            <text x="150" y="320" textAnchor="middle" fontSize={Math.min(nameFontSize, 28)} fontWeight="900" fill="#e64a19" fontFamily="sans-serif" filter="url(#soft-shadow)">
                {userName ? userName.toUpperCase() : "XU CÀ NA"}
            </text>

            {/* Caption: Darker Burnt Orange, Bold, Moved Up */}
            <text x="150" y="350" textAnchor="middle" fontSize="14" fill="#A0522D" fontWeight="bold" fontStyle="italic">Đen thôi, đỏ quên đi</text>
        </svg>
    ),

    // ===================================
    // 46. MÃI ĐẸT TI NI (Romantic Glow Style)
    // ===================================
    'mai-det-ti-ni': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="avatar-clip-heart">
                    <path d="M150,220 C100,180 50,150 50,100 C50,50 100,50 150,100 C200,50 250,50 250,100 C250,150 200,180 150,220 Z" transform="translate(0, 50)" />
                </clipPath>
                {/* Soft Glow Filter */}
                <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
                    <feFlood floodColor="white" result="color" />
                    <feComposite in="color" in2="blur" operator="in" result="glow" />
                    <feMerge>
                        <feMergeNode in="glow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Radial Gradient BG */}
                <radialGradient id="romantic-glow" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#fce4ec" />
                    <stop offset="100%" stopColor="#fff" stopOpacity="0.5" />
                </radialGradient>
            </defs>

            {/* Background */}
            <rect width="300" height="400" fill="#f8bbd0" />
            <rect width="300" height="400" fill="url(#romantic-glow)" />

            {/* Sparkles everywhere */}
            <text x="20" y="40" fontSize="20" fill="white" opacity="0.8">✨</text>
            <text x="280" y="80" fontSize="15" fill="white" opacity="0.6">✨</text>
            <text x="40" y="350" fontSize="18" fill="white" opacity="0.7">✨</text>
            <text x="260" y="320" fontSize="22" fill="white" opacity="0.9">✨</text>
            <text x="150" y="30" fontSize="12" fill="white" opacity="0.5">✦</text>

            {/* Falling Rose Petals (Doodles) */}
            <path d="M30,30 Q40,20 50,30 Q40,40 30,30" fill="#f06292" opacity="0.6" transform="rotate(20 40 30)" />
            <path d="M260,360 Q270,350 280,360 Q270,370 260,360" fill="#f06292" opacity="0.6" transform="rotate(-15 270 360)" />


            {/* Red String of Fate (More organic curve) */}
            <path d="M-20,200 Q80,120 150,240 Q220,360 320,180" fill="none" stroke="#d81b60" strokeWidth="1.5" strokeDasharray="5 3" />

            {/* Yarn Ball Doodle (Replacing Emoji) */}
            <g transform="translate(260, 160)">
                <circle cx="15" cy="15" r="15" fill="#ad1457" />
                <path d="M5,15 Q15,5 25,15" stroke="#ec407a" strokeWidth="1" fill="none" />
                <path d="M5,10 Q15,20 25,10" stroke="#ec407a" strokeWidth="1" fill="none" />
                <path d="M15,5 Q5,15 15,25" stroke="#ec407a" strokeWidth="1" fill="none" />
            </g>

            {/* Heart Avatar Frame (Soft Shadow + White Stroke) */}
            <filter id="heart-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#880e4f" floodOpacity="0.3" />
            </filter>

            <g filter="url(#heart-shadow)">
                <path d="M150,230 C100,190 50,160 50,110 C50,60 100,60 150,110 C200,60 250,60 250,110 C250,160 200,190 150,230 Z"
                    fill="white" stroke="white" strokeWidth="3" transform="translate(0, 40)" />
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
            </g>

            <text x="150" y="310" textAnchor="middle" fontFamily="Brush Script MT, cursive" fontSize="30" fill="#c2185b" fontWeight="normal">You look like</text>

            <text x="150" y="340" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="bold" fill="#d81b60" fontFamily="sans-serif" filter="url(#text-glow)">
                {userName ? `MY DESTINY` : "MÃI ĐẸT TI NI"}
            </text>

            <text x="150" y="370" textAnchor="middle" fontSize="12" fill="#ad1457" fontStyle="italic">{userName || "(Người tình kiếp trước)"}</text>
        </svg>
    ),

    // ===================================
    // 47. U LÀ TRỜI (Shock)
    // ===================================
    // ===================================
    // 47. U LÀ TRỜI (Pop-Art Comic - Redesigned)
    // ===================================
    'u-la-troi': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="avatar-clip-jagged-cut">
                    {/* Irregular hand-cut feel */}
                    <polygon points="150,70 185,85 220,70 215,110 250,140 215,180 225,220 185,210 150,250 115,210 75,220 85,180 50,140 85,100 75,70 115,85" />
                </clipPath>
                {/* Halftone Pattern */}
                <pattern id="halftone" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="5" cy="5" r="2" fill="#fbc02d" opacity="0.5" />
                </pattern>
                {/* Text 3D Shadow Filter */}
                <filter id="comic-text-shadow">
                    <feOffset dx="3" dy="3" result="offset" />
                    <feFlood floodColor="black" result="color" />
                    <feComposite in="color" in2="offset" operator="in" result="shadow" />
                    <feMerge>
                        <feMergeNode in="shadow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* 1. BACKGROUND: Yellow + Halftone + Speed Lines */}
            <rect width="300" height="400" fill="#fff176" />
            <rect width="300" height="400" fill="url(#halftone)" />

            {/* Speed Lines (Radial Burst) */}
            <g opacity="0.4" stroke="black" strokeWidth="2" strokeLinecap="round">
                <line x1="150" y1="150" x2="0" y2="0" />
                <line x1="150" y1="150" x2="150" y2="0" />
                <line x1="150" y1="150" x2="300" y2="0" />
                <line x1="150" y1="150" x2="300" y2="200" />
                <line x1="150" y1="150" x2="300" y2="400" />
                <line x1="150" y1="150" x2="0" y2="400" />
                <line x1="150" y1="150" x2="0" y2="200" />
                <circle cx="150" cy="150" r="120" fill="#fff176" stroke="none" filter="url(#comic-text-shadow)" opacity="0.8" /> {/* Clear center for avatar */}
            </g>


            {/* 2. SHOCK FRAME (Paper Cutout Style) */}
            {/* Shadow behind frame */}
            <polygon points="150,75 185,90 220,75 215,115 250,145 215,185 225,225 185,215 150,255 115,215 75,225 85,185 50,145 85,105 75,75 115,90"
                fill="black" opacity="0.3" transform="translate(5, 5)" />

            {/* White Frame */}
            <polygon points="150,70 185,85 220,70 215,110 250,140 215,180 225,220 185,210 150,250 115,210 75,220 85,180 50,140 85,100 75,70 115,85"
                fill="white" stroke="black" strokeWidth="3" />

            {/* Avatar */}
            {userImage ? (
                <image
                    x="50" y="70" width="200" height="180"
                    href={userImage}
                    clipPath="url(#avatar-clip-jagged-cut)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="170" textAnchor="middle" fontSize="60">😱</text>
            )}

            {/* 3. COMIC DECORATIONS */}
            {/* Lightning Bolt */}
            <path d="M260,60 L240,90 L255,90 L245,120" fill="#ffeb3b" stroke="black" strokeWidth="2" />

            {/* Question Mark */}
            <text x="50" y="100" fontSize="40" fontWeight="900" fill="#ff4081" stroke="black" strokeWidth="1" transform="rotate(-20 50 100)">?</text>

            {/* Exclamation */}
            <text x="250" y="220" fontSize="50" fontWeight="900" fill="#00e5ff" stroke="black" strokeWidth="1" transform="rotate(20 250 220)">!</text>


            {/* 4. TYPOGRAPHY (Action Comic) */}
            {/* U LÀ TRỜI - Big & Bold */}
            <path id="curveTop" d="M30,280 Q150,260 270,280" fill="none" />
            <text>
                <textPath href="#curveTop" startOffset="50%" textAnchor="middle" fontSize="40" fontWeight="900" fontFamily="Impact, sans-serif" fill="#d50000" stroke="white" strokeWidth="2" paintOrder="stroke">
                    U LÀ TRỜI
                </textPath>
            </text>

            {/* SỐC NGANG - Shaking Effect */}
            <g transform="translate(150, 340)">
                <text textAnchor="middle" fontSize={Math.min(nameFontSize, 28)} fontWeight="bold" fontFamily="sans-serif" fill="black" style={{ textTransform: 'uppercase' }}>
                    {userName || "SỐC NGANG"}
                </text>
                <animateTransform attributeName="transform" type="translate" values="-1,340; 1,340; -1,340" dur="0.1s" repeatCount="indefinite" additive="replace" />
            </g>

            {/* Subtext */}
            <text x="150" y="375" textAnchor="middle" fontSize="12" fontWeight="bold" fill="black" padding="5px" style={{ backgroundColor: "white" }}>
                CHUYỆN TÂM LINH KHÔNG ĐÙA ĐƯỢC ĐÂU
            </text>
        </svg>
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
