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
    // 48. KHUM (Glitch Minimalist Style)
    // ===================================
    'khum': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="avatar-clip-x">
                    <circle cx="150" cy="150" r="80" />
                </clipPath>
                {/* Red Glow for X */}
                <filter id="red-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Pixel Text Pattern (Grid) */}
                <pattern id="pixel-text-grid" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
                    <text x="10" y="20" fontSize="10" fill="#e0e0e0" fontFamily="monospace" fontWeight="bold">KHÔNG</text>
                </pattern>

                {/* Glitch Clip Paths */}
                <clipPath id="glitch-clip-1">
                    <rect x="0" y="260" width="300" height="10" />
                </clipPath>
                <clipPath id="glitch-clip-2">
                    <rect x="0" y="275" width="300" height="5" />
                </clipPath>
            </defs>

            {/* High Contrast Grey BG */}
            <rect width="300" height="400" fill="#eeeeee" />
            <rect width="300" height="400" fill="url(#pixel-text-grid)" />

            {/* Warning Icon (Top Left) */}
            <g transform="translate(20, 20) scale(0.8)">
                <path d="M15,5 L28,28 L2,28 Z" fill="#212121" stroke="none" />
                <text x="15" y="23" textAnchor="middle" fontSize="14" fill="#ffeb3b" fontWeight="bold">!</text>
            </g>


            {/* Avatar */}
            {userImage ? (
                <image
                    x="70" y="70" width="160" height="160"
                    href={userImage}
                    clipPath="url(#avatar-clip-x)"
                    preserveAspectRatio="xMidYMid slice"
                    style={{ filter: "grayscale(100%) contrast(1.2)" }}
                />
            ) : (
                <text x="150" y="160" textAnchor="middle" fontSize="60">🙅</text>
            )}

            {/* Thin Red X with Glow */}
            <g filter="url(#red-glow)" opacity="0.9">
                <line x1="80" y1="80" x2="220" y2="220" stroke="#d50000" strokeWidth="8" strokeLinecap="round" />
                <line x1="220" y1="80" x2="80" y2="220" stroke="#d50000" strokeWidth="8" strokeLinecap="round" />
            </g>

            {/* Glitch Text "KHUM!" */}
            <g>
                <text x="153" y="280" textAnchor="middle" fontSize="50" fontWeight="900" fill="#00e5ff" fontFamily="Arial Black, sans-serif" opacity="0.7" clipPath="url(#glitch-clip-1)">KHUM!</text>
                <text x="147" y="280" textAnchor="middle" fontSize="50" fontWeight="900" fill="#ff0000" fontFamily="Arial Black, sans-serif" opacity="0.7" clipPath="url(#glitch-clip-2)">KHUM!</text>
                <text x="150" y="280" textAnchor="middle" fontSize="50" fontWeight="900" fill="#212121" fontFamily="Arial Black, sans-serif">KHUM!</text>
            </g>


            {/* Banner: Black Rect + Sharp White Text */}
            <rect x="40" y="315" width="220" height="40" fill="black" />
            <text x="150" y="342" textAnchor="middle" fontSize={Math.min(nameFontSize, 20)} fontWeight="bold" fill="white" fontFamily="Arial, sans-serif" letterSpacing="2">
                {userName || "TỪ CHỐI HIỂU"}
            </text>

            <text x="150" y="380" textAnchor="middle" fontSize="10" fill="#757575" fontFamily="monospace">
                Mọi nỗ lực giải thích đều vô nghĩa.
            </text>
        </svg>
    ),

    // ===================================
    // 49. LEM MON (Lemon)
    // ===================================
    // ===================================
    // 49. LEM MON (Juicy Fresh Style)
    // ===================================
    'lem-mon': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="avatar-clip-lemon">
                    <ellipse cx="150" cy="150" rx="90" ry="70" />
                </clipPath>
                {/* Grain Texture Filter */}
                <filter id="grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                    <feColorMatrix type="saturate" values="0" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.3" />
                    </feComponentTransfer>
                    <feComposite operator="in" in2="SourceGraphic" result="grain" />
                    <feComposite operator="arithmetic" k1="0" k2="1" k3="0.3" k4="0" in="grain" in2="SourceGraphic" />
                </filter>
                {/* Soft Shadow for Leaf */}
                <filter id="leaf-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#33691e" floodOpacity="0.4" />
                </filter>
            </defs>

            {/* Acid Yellow Green BG with Texture */}
            <rect width="300" height="400" fill="#c6ff00" filter="url(#grain)" />

            {/* Lemon Slices Pattern (More defined) */}
            <circle cx="0" cy="0" r="60" fill="none" stroke="#f4ff81" strokeWidth="20" opacity="0.6" />
            <path d="M0,0 L60,0" stroke="#f4ff81" strokeWidth="2" />
            <path d="M0,0 L42,42" stroke="#f4ff81" strokeWidth="2" />
            <path d="M0,0 L0,60" stroke="#f4ff81" strokeWidth="2" />

            <circle cx="300" cy="400" r="90" fill="none" stroke="#f4ff81" strokeWidth="20" opacity="0.6" />
            <path d="M300,400 L210,400" stroke="#f4ff81" strokeWidth="2" />
            <path d="M300,400 L300,310" stroke="#f4ff81" strokeWidth="2" />

            {/* Water Drops (Shiny) */}
            <g opacity="0.8">
                <circle cx="50" cy="300" r="5" fill="#ffffff" opacity="0.4" />
                <circle cx="52" cy="298" r="2" fill="#ffffff" />

                <circle cx="260" cy="50" r="8" fill="#ffffff" opacity="0.4" />
                <circle cx="263" cy="47" r="3" fill="#ffffff" />

                <circle cx="200" cy="250" r="4" fill="#ffffff" opacity="0.4" />
                <circle cx="201" cy="249" r="1.5" fill="#ffffff" />
            </g>


            {/* Lemon Avatar Frame (Deep Green Stroke + Details) */}
            <ellipse cx="150" cy="150" rx="100" ry="80" fill="#ffeb3b" stroke="#33691e" strokeWidth="4" />
            {/* Ends of lemon */}
            <path d="M45,150 Q35,150 30,160" stroke="#33691e" strokeWidth="4" fill="none" />
            <path d="M255,150 Q265,150 270,140" stroke="#33691e" strokeWidth="4" fill="none" />

            {/* Leaf and Stem */}
            <g transform="translate(130, 60)" filter="url(#leaf-shadow)">
                <path d="M20,10 Q20,0 25,-5" stroke="#33691e" strokeWidth="4" fill="none" /> {/* Stem */}
                <path d="M25,0 Q45,0 55,20 Q45,40 25,40 Q5,40 0,20 Q5,0 25,0 Z" fill="#64dd17" stroke="#33691e" strokeWidth="2" transform="rotate(-15 25 10)" /> {/* Leaf */}
                <path d="M10,25 L40,15" stroke="#33691e" strokeWidth="1" opacity="0.5" transform="rotate(-15 25 10)" />{/* Leaf vein */}
            </g>


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

            {/* Removed floating text */}

            <text x="150" y="330" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#1b5e20" fontFamily="sans-serif">
                {userName || "LEM MÒN"}
            </text>

            {/* New Quote in Bottom Banner */}
            <text x="150" y="365" textAnchor="middle" fontSize="12" fill="#1b5e20" fontWeight="bold" fontStyle="italic">"Không phải em là chua, do anh chưa đủ ngọt"</text>
        </svg>
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
        <svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="avatar-clip-heart-pixel">
                    <path d="M150,220 C100,180 50,150 50,100 C50,50 100,50 150,100 C200,50 250,50 250,100 C250,150 200,180 150,220 Z" />
                </clipPath>
                {/* Neon Pink Glow Filter */}
                <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                    <feFlood floodColor="#d500f9" result="color" />
                    <feComposite in="color" in2="blur" operator="in" result="glow" />
                    <feMerge>
                        <feMergeNode in="glow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Outer Glow for Match Rate */}
                <filter id="outer-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#ff4081" floodOpacity="0.8" />
                </filter>
                {/* Gradient for Match Bar */}
                <linearGradient id="match-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff4081" />
                    <stop offset="100%" stopColor="#f8bbd0" />
                </linearGradient>
            </defs>

            {/* Cyber Pink BG */}
            <rect width="300" height="400" fill="#fce4ec" />
            {/* Digital Circuit Grid Pattern */}
            <pattern id="circuit-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M10,0 L10,40 M0,10 L40,10" stroke="#f48fb1" strokeWidth="1" opacity="0.3" />
                <circle cx="10" cy="10" r="2" fill="#f48fb1" opacity="0.5" />
            </pattern>
            <rect width="300" height="400" fill="url(#circuit-pattern)" />

            {/* Holographic Heart UI (Glowy Dashed Lines + Binary Code) */}
            <g filter="url(#neon-glow)" opacity="0.7">
                <path d="M150,230 C90,180 40,150 40,90 C40,30 100,30 150,90 C200,30 260,30 260,90 C260,150 210,180 150,230 Z"
                    fill="none" stroke="#e91e63" strokeWidth="2" strokeDasharray="5 5" />
            </g>

            {/* Binary Code Decoration */}
            <text x="50" y="80" fontSize="10" fill="#e91e63" opacity="0.5" fontFamily="monospace">0101</text>
            <text x="230" y="80" fontSize="10" fill="#e91e63" opacity="0.5" fontFamily="monospace">1010</text>
            <text x="150" y="250" textAnchor="middle" fontSize="10" fill="#e91e63" opacity="0.5" fontFamily="monospace">00110011</text>

            <path d="M150,240 C80,180 30,150 30,80 C30,10 100,10 150,80 C200,10 270,10 270,80 C270,150 220,180 150,240 Z"
                fill="none" stroke="#880e4f" strokeWidth="1" opacity="0.3" />

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

            {/* Status Box (Cyber Style) */}
            <g transform="translate(0, 5)">
                <rect x="50" y="260" width="200" height="85" fill="white" stroke="#d500f9" strokeWidth="2" rx="10" opacity="0.9" />

                {/* Match Rate Bar (Gradient + Glow) */}
                <text x="150" y="280" textAnchor="middle" fontSize="12" fill="#880e4f" fontWeight="bold" fontFamily="monospace" letterSpacing="1">MATCH RATE: 99.9%</text>
                <rect x="70" y="290" width="160" height="10" fill="#fce4ec" rx="5" />
                <rect x="70" y="290" width="158" height="10" fill="url(#match-grad)" rx="5" filter="url(#outer-glow)" />

                {/* Name - Neon Glow */}
                <text x="150" y="325" textAnchor="middle" fontSize={Math.min(nameFontSize, 20)} fontWeight="bold" fill="#d500f9" fontFamily="monospace" filter="url(#neon-glow)">
                    {userName || "VIRTUAL LOVER"}
                </text>
                {/* Caption - Digital Font */}
                <text x="150" y="340" textAnchor="middle" fontSize="10" fill="#880e4f" fontWeight="bold" fontFamily="monospace">"Anh là thực tế ảo của em"</text>
            </g>

            <text x="150" y="385" textAnchor="middle" fontSize="12" fill="#880e4f" fontWeight="bold" fontFamily="monospace" letterSpacing="2">NO BUGS, ONLY HUGS</text>
        </svg>
    ),

    // ===================================
    // 55. NGUOI TOI CO (Caveman)
    // ===================================
    'nguoi-toi-co': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="avatar-clip-stone">
                    <path d="M70,100 L230,100 L220,250 L80,250 Z" />
                </clipPath>
                {/* Stone Wall Texture Filter */}
                <filter id="stone-wall">
                    <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
                    <feDiffuseLighting in="noise" lightingColor="#d7ccc8" surfaceScale="2">
                        <feDistantLight azimuth="45" elevation="60" />
                    </feDiffuseLighting>
                </filter>
                {/* Fire Glow */}
                <filter id="fire-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feFlood floodColor="#ff6f00" floodOpacity="0.8" result="color" />
                    <feComposite in="color" in2="blur" operator="in" result="glow" />
                    <feMerge>
                        <feMergeNode in="glow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Carved Text Inner Shadow */}
                <filter id="carved-text">
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite operator="out" in2="SourceGraphic" result="inverse" />
                    <feFlood floodColor="black" floodOpacity="0.8" result="color" />
                    <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                    <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                </filter>
            </defs>

            {/* Stone Wall BG with Texture and Cracks */}
            <rect width="300" height="400" fill="#5d4037" filter="url(#stone-wall)" />

            {/* Cave Paintings (Faded) */}
            <g opacity="0.4" stroke="#3e2723" strokeWidth="2" fill="none">
                {/* Hunter */}
                <path d="M50,50 L60,30 L70,50 M60,30 L60,80 M60,60 L80,50" />
                <circle cx="60" cy="25" r="5" fill="#3e2723" />
                {/* Mammoth */}
                <path d="M230,60 Q250,50 270,70 L270,100 M230,60 Q210,70 230,100 M270,70 L280,60" />
            </g>

            {/* Cracks and Moss */}
            <path d="M0,0 L50,50 M300,0 L250,50" stroke="#3e2723" strokeWidth="2" opacity="0.5" />
            <path d="M0,400 L40,360 M300,400 L260,360" stroke="#33691e" strokeWidth="4" opacity="0.3" />


            {/* Cave Entrance Frame (Irregular Stone) */}
            <path d="M40,90 Q150,10 260,90 L250,280 Q150,310 50,280 Z" fill="#4e342e" stroke="#3e2723" strokeWidth="4" />

            {/* Cracks on Frame */}
            <path d="M50,100 L70,120 M250,260 L230,240" stroke="#000" strokeWidth="1" opacity="0.5" />


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

            {/* Primitive Icons */}
            {/* Bone Top Left */}
            <g transform="translate(40, 60) rotate(-30)">
                <path d="M0,10 Q-5,0 0,-10 L40,-5 Q45,0 40,5 Z" fill="#efebe9" stroke="#5d4037" strokeWidth="1" />
                <circle cx="0" cy="-10" r="5" fill="#efebe9" stroke="#5d4037" />
                <circle cx="0" cy="10" r="5" fill="#efebe9" stroke="#5d4037" />
                <circle cx="40" cy="-5" r="5" fill="#efebe9" stroke="#5d4037" />
                <circle cx="40" cy="5" r="5" fill="#efebe9" stroke="#5d4037" />
            </g>

            {/* Stone Axe Bottom Right */}
            <g transform="translate(250, 260) rotate(20)">
                <rect x="0" y="0" width="10" height="60" fill="#8d6e63" stroke="black" strokeWidth="1" />
                <path d="M5,10 L-20,0 L-20,30 L5,20" fill="#78909c" stroke="black" strokeWidth="1" />
            </g>

            {/* Torch (Enhanced Glow) */}
            <g filter="url(#fire-glow)">
                <text x="30" y="200" fontSize="30">🔥</text>
                <text x="240" y="200" fontSize="30">🔥</text>
            </g>

            {/* Stone Tablet Name (Cracked) */}
            <path d="M40,300 L260,300 L255,380 L45,380 Z" fill="#bdbdbd" stroke="#616161" strokeWidth="3" />
            <path d="M50,300 L60,320" stroke="#424242" strokeWidth="1" opacity="0.5" />

            <text x="150" y="320" textAnchor="middle" fontSize="12" fill="#424242" fontWeight="bold" fontFamily="Papyrus, fantasy" filter="url(#carved-text)">UNKNOWN SPECIES</text>

            <text x="150" y="350" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#3e2723" fontFamily="Papyrus, fantasy" filter="url(#carved-text)">
                {userName || "NGƯỜI TỐI CỔ"}
            </text>

            {/* Caption */}
            <text x="150" y="370" textAnchor="middle" fontSize="10" fill="#616161" fontStyle="italic" fontFamily="serif">"Loài người tiến hóa tới đâu rồi các bác?"</text>
        </svg>
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
    // 59. NEURAL LINK CHIP (Neural Link HUD Style)
    // ===================================
    'neural-link-chip': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-hex">
                    <path d="M150,110 L200,135 L200,185 L150,210 L100,185 L100,135 Z" />
                </clipPath>
                {/* Strong Neon Glow */}
                <filter id="neon-strong-cyan">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Red/Blue Glitch Offset */}
                <filter id="glitch-offset">
                    <feOffset in="SourceGraphic" dx="-2" dy="0" result="left" />
                    <feOffset in="SourceGraphic" dx="2" dy="0" result="right" />
                    <feComposite operator="arithmetic" k2="1" k3="1" in="left" in2="right" result="merged" />
                </filter>
                {/* Grid Pattern */}
                <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M40,0 L0,0 L0,40" fill="none" stroke="#004d40" strokeWidth="1" opacity="0.5" />
                </pattern>
            </defs>

            {/* Black Bio-Tech BG with Grid */}
            <rect width="300" height="400" fill="#050505" />
            <rect width="300" height="400" fill="url(#grid-pattern)" opacity="0.6" />

            {/* Binary Code Background (Subtle) */}
            <g opacity="0.3" fontSize="10" fontFamily="monospace" fill="#00ff00">
                <text x="20" y="50">010101</text>
                <text x="250" y="80">110011</text>
                <text x="20" y="350">101010</text>
                <text x="250" y="320">001100</text>
            </g>

            {/* Blue Particles */}
            <circle cx="50" cy="150" r="1.5" fill="#00e5ff" opacity="0.6" />
            <circle cx="280" cy="50" r="1" fill="#00e5ff" opacity="0.8" />
            <circle cx="20" cy="300" r="2" fill="#00e5ff" opacity="0.5" />

            {/* Circuit Lines with Pulse Animation */}
            <g filter="url(#neon-strong-cyan)">
                {/* Static Lines */}
                <path d="M150,210 L150,300 M200,185 L260,250 M100,185 L40,250" stroke="#004d40" strokeWidth="2" />
                {/* Pulsing Lines (Dashed running) */}
                <path d="M150,210 L150,300 M200,185 L260,250 M100,185 L40,250" stroke="#00e5ff" strokeWidth="2" strokeDasharray="5 10">
                    <animate attributeName="stroke-dashoffset" from="15" to="0" dur="0.5s" repeatCount="indefinite" />
                </path>
            </g>

            {/* Connection Nodes */}
            <circle cx="40" cy="250" r="4" fill="#000" stroke="#00e5ff" strokeWidth="2" />
            <circle cx="260" cy="250" r="4" fill="#000" stroke="#00e5ff" strokeWidth="2" />
            <circle cx="150" cy="300" r="4" fill="#000" stroke="#00e5ff" strokeWidth="2" />

            {/* Chip Structure (Hexagon) */}
            <path d="M150,100 L210,130 L210,190 L150,220 L90,190 L90,130 Z" fill="#000" stroke="#00e5ff" strokeWidth="2" filter="url(#neon-strong-cyan)" />

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

            {/* HUD Data Streams */}
            <g fontFamily="Courier New, monospace" fontWeight="bold">
                <text x="20" y="100" fill="#00e5ff" fontSize="12" filter="url(#neon-strong-cyan)">SYNC: 100%</text>
                <text x="210" y="100" fill="#00e5ff" fontSize="12" filter="url(#neon-strong-cyan)">CPU: 99%</text>
            </g>

            {/* Vertical System Text */}
            <text x="10" y="200" transform="rotate(-90, 10, 200)" fontSize="8" fill="#00e5ff" opacity="0.6" fontFamily="monospace" letterSpacing="1">
                SYSTEM_REBOOTING... ACCESS_GRANTED
            </text>

            {/* Bottom Info Box */}
            <g transform="translate(0, 0)">
                {/* Frame Extended Downwards */}
                <path d="M50,320 L250,320 L240,410 L60,410 Z" fill="#000" stroke="#00e5ff" strokeWidth="2" opacity="0.8" />
                <rect x="60" y="325" width="180" height="80" fill="#00e5ff" opacity="0.05" />

                {/* 1. Moved UP */}
                <text x="150" y="340" textAnchor="middle" fill="#00e5ff" fontSize="10" fontWeight="bold" letterSpacing="2" fontFamily="sans-serif">IMPLANT SUCCESSFUL</text>

                {/* 2. Glitched Name - Spaced out */}
                <g filter="url(#glitch-offset)">
                    <text x="150" y="370" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#fff" fontFamily="Courier New, monospace" letterSpacing="-1">
                        {userName ? userName.toUpperCase() : "CYBORG V1"}
                    </text>
                </g>

                {/* 3. Caption Moved DOWN & Bright Color */}
                <text x="150" y="400" textAnchor="middle" fontSize="9" fill="#E0FFFF" fontFamily="monospace" fontStyle="italic" fontWeight="bold">
                    "Tải kiến thức trực tiếp vào não (vẫn trượt môn)"
                </text>
            </g>
        </>
    ),

    // ===================================
    // 61. TIME MACHINE TICKET (Vintage Journey)
    // ===================================
    'time-machine-ticket': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                {/* Paper Grunge Texture */}
                <filter id="paper-grunge">
                    <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
                    <feDiffuseLighting in="noise" lightingColor="#fff9c4" surfaceScale="2">
                        <feDistantLight azimuth="45" elevation="60" />
                    </feDiffuseLighting>
                    <feComposite operator="in" in2="SourceGraphic" />
                    <feBlend mode="multiply" in2="SourceGraphic" />
                </filter>
                {/* Sepia & Serrated Edge for Avatar */}
                <filter id="sepia-tone">
                    <feColorMatrix type="matrix" values="0.39 0.769 0.189 0 0  0.349 0.686 0.168 0 0  0.272 0.534 0.131 0 0  0 0 0 1 0" />
                </filter>
                <clipPath id="avatar-clip-stamp">
                    {/* Serrated Edge Polygon (Simplified) */}
                    <polygon points="200,150 205,150 205,155 210,155 210,150 215,150 215,155 220,155 220,150 225,150 225,155 230,155 230,150 235,150 235,155 240,155 240,150 245,150 245,155 250,155 250,150 255,150 255,155 260,155 260,150 260,210 255,210 255,205 250,205 250,210 245,210 245,205 240,205 240,210 235,210 235,205 230,205 230,210 225,210 225,205 220,205 220,210 215,210 215,205 210,205 210,210 205,210 205,205 200,205 200,210 200,150" transform="translate(0, 0) scale(1.0)" />
                    {/* Using circle for simplicity/robustness if polygon fails, but let's try a simple rect with stroke dasharray hack visually, or just use a standard rect clip and apply border elsewhere. Let's stick to a simple rect clip and draw the serrated border on top. */}
                    <rect x="190" y="142" width="70" height="80" />
                </clipPath>
                {/* Silver Glow */}
                <filter id="silver-glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Vortex Background with Gears & Particles */}
            <rect width="300" height="400" fill="#2E003E" />
            <g opacity="0.3">
                {/* Concentric Circles */}
                <circle cx="150" cy="200" r="180" fill="none" stroke="cyan" strokeWidth="1" strokeDasharray="10 5" opacity="0.3" />
                <circle cx="150" cy="200" r="140" fill="none" stroke="magenta" strokeWidth="1" strokeDasharray="20 10" opacity="0.3" />
                <circle cx="150" cy="200" r="100" fill="none" stroke="yellow" strokeWidth="1" opacity="0.3" />
                {/* Gears (Simplified) */}
                <circle cx="50" cy="50" r="40" fill="none" stroke="#ba68c8" strokeWidth="4" strokeDasharray="8 4" />
                <circle cx="250" cy="350" r="60" fill="none" stroke="#ba68c8" strokeWidth="4" strokeDasharray="12 6" />
                {/* Star Particles */}
                <circle cx="100" cy="100" r="2" fill="white" />
                <circle cx="200" cy="50" r="1" fill="white" />
                <circle cx="50" cy="300" r="2" fill="white" />
            </g>

            {/* The Ticket (Boarding Pass) */}
            <g transform="translate(15, 120)">
                {/* Paper Base with Grunge */}
                <rect x="0" y="0" width="270" height="160" fill="#FFF8DC" stroke="none" />
                <rect x="0" y="0" width="270" height="160" fill="transparent" filter="url(#paper-grunge)" opacity="0.5" />
                <rect x="0" y="0" width="270" height="160" fill="none" stroke="#000" strokeWidth="2" />

                {/* Ticket Stains */}
                <circle cx="250" cy="20" r="30" fill="#F4A460" opacity="0.2" filter="blur(10px)" />
                <path d="M10,150 Q50,130 100,155" stroke="#8B4513" strokeWidth="2" opacity="0.1" fill="none" />

                {/* Cutouts */}
                <circle cx="0" cy="80" r="10" fill="#2E003E" />
                <circle cx="270" cy="80" r="10" fill="#2E003E" />
                {/* Dashed Separator */}
                <line x1="185" y1="10" x2="185" y2="150" stroke="#000" strokeWidth="1" strokeDasharray="3 3" />

                {/* Left Content */}
                <text x="20" y="30" fontSize="18" fontWeight="900" fill="#3E2723" fontFamily="Courier New, monospace" letterSpacing="-1">TIME TRAVEL</text>
                <text x="20" y="45" fontSize="8" fontFamily="sans-serif" letterSpacing="2" fill="#5D4037">BOARDING PASS T-800</text>

                <text x="20" y="75" fontSize="8" fill="#8D6E63" fontWeight="bold">PASSENGER</text>
                <text x="20" y="95" fontSize={Math.min(nameFontSize, 20)} fontWeight="bold" fill="#000" fontFamily="Courier New, monospace">
                    {userName ? userName.toUpperCase() : "TIME TRAVELER"}
                </text>

                <text x="20" y="125" fontSize="8" fill="#8D6E63" fontWeight="bold">DESTINATION</text>
                <text x="80" y="125" fontSize="12" fontWeight="bold" fill="#3E2723">NOSTALGIA CITY</text>

                {/* Right Content */}
                <text x="195" y="30" fontSize="8" fontWeight="bold" fill="#8D6E63">DATE</text>
                <text x="195" y="45" fontSize="14" fontFamily="Courier New, monospace" fontWeight="bold" fill="#B71C1C">199X</text>

                <text x="195" y="125" fontSize="8" fontWeight="bold" fill="#8D6E63">CLASS</text>
                <text x="230" y="125" fontSize="14" fontWeight="bold" fill="#3E2723">VIP</text>

                {/* Postal Stamp Red Overlay */}
                <g transform="translate(160, 40) rotate(-15)" opacity="0.7">
                    <circle cx="30" cy="30" r="28" fill="none" stroke="#B71C1C" strokeWidth="2" />
                    <circle cx="30" cy="30" r="26" fill="none" stroke="#B71C1C" strokeWidth="1" strokeDasharray="2 2" />
                    <text x="30" y="20" textAnchor="middle" fontSize="6" fill="#B71C1C" fontWeight="bold">POST OFFICE</text>
                    <text x="30" y="35" textAnchor="middle" fontSize="10" fill="#B71C1C" fontWeight="bold">APPROVED</text>
                    <text x="30" y="45" textAnchor="middle" fontSize="6" fill="#B71C1C">09-00-1990</text>
                </g>
            </g>

            {/* Avatar Section (Sepia + Serrated) */}
            {userImage ? (
                <g transform="translate(15, 120)">
                    {/* Background for photo */}
                    <rect x="190" y="55" width="70" height="50" fill="#fff" />
                    <image
                        x="190" y="55" width="70" height="50"
                        href={userImage}
                        preserveAspectRatio="xMidYMid slice"
                        filter="url(#sepia-tone)"
                    />
                    {/* Serrated Border (Pseudo) */}
                    <rect x="188" y="53" width="74" height="54" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 2" />
                    {/* Photo Corners */}
                    {/* <path d="M188,53 L198,53 L188,63 Z" fill="black" opacity="0.3" /> */}
                </g>
            ) : (
                <text x="230" y="190" textAnchor="middle" fontSize="30">⏳</text>
            )}

            <text x="150" y="350" textAnchor="middle" fill="#E6E6FA" fontSize="14" fontWeight="bold" letterSpacing="3" style={{ textShadow: "0 0 5px white" }}>CHUYẾN TÀU TUỔI THƠ</text>
        </>
    ),
};
