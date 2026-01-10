
import React from 'react';
import { TemplateProps } from './types';

// Helper for LIP (Layout Integrity Protocol)
const getSafeFontSize = (text: string, maxWidth: number, defaultSize: number) => {
    if (!text) return defaultSize;
    const charWidth = defaultSize * 0.6; // Average char width aspect ratio
    const estimatedWidth = text.length * charWidth;
    return estimatedWidth > maxWidth ? (maxWidth / text.length) / 0.6 : defaultSize;
};

// 1. Pixel Mario (Super World)
const PixelMarioTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "PIXEL PLUMBER";
    const safeDesc = description || "Level 99: Đã quá già để nhảy qua những rắc rối";
    const nameSize = getSafeFontSize(safeName, 350, 24);

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="brickPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <rect width="40" height="40" fill="#8B4513" />
                    <rect x="0" y="0" width="38" height="38" fill="#A0522D" />
                    <rect x="2" y="2" width="36" height="36" fill="#A0522D" stroke="#000" strokeWidth="2" strokeOpacity="0.2" />
                    <path d="M0,20 H40 M20,0 V40" stroke="#000" strokeOpacity="0.3" strokeWidth="2" />
                </pattern>
                {/* Soft Glow */}
                <filter id="soft-glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Sky Background */}
            <rect width="400" height="600" fill="#5c94fc" />

            {/* Pixel Clouds */}
            <g fill="#fff" opacity="0.9">
                <rect x="40" y="60" width="60" height="20" rx="10" />
                <rect x="60" y="50" width="40" height="30" rx="10" />

                <rect x="280" y="100" width="70" height="20" rx="10" />
                <rect x="300" y="90" width="40" height="30" rx="10" />

                <rect x="150" y="20" width="50" height="15" rx="5" opacity="0.7" />
            </g>

            {/* Ground */}
            <rect x="0" y="540" width="400" height="60" fill="url(#brickPattern)" />
            <line x1="0" y1="540" x2="400" y2="540" stroke="#000" strokeWidth="4" />

            {/* Mystery Blocks - Glowing */}
            <g transform="translate(50, 450)" filter="url(#soft-glow)">
                <rect width="60" height="60" fill="#F8B800" stroke="#000" strokeWidth="4" />
                <text x="30" y="45" textAnchor="middle" fontSize="40" fontWeight="bold" fill="#000">?</text>
                <circle cx="5" cy="5" r="2" fill="#fff" opacity="0.5" />
            </g>
            <g transform="translate(290, 450)" filter="url(#soft-glow)">
                <rect width="60" height="60" fill="#F8B800" stroke="#000" strokeWidth="4" />
                <text x="30" y="45" textAnchor="middle" fontSize="40" fontWeight="bold" fill="#000">?</text>
                <circle cx="5" cy="5" r="2" fill="#fff" opacity="0.5" />
            </g>
            <g transform="translate(170, 450)">
                <rect width="60" height="60" fill="#A0522D" stroke="#000" strokeWidth="4" />
                {/* Brick details */}
                <path d="M0,30 H60 M30,0 V60" stroke="#000" strokeOpacity="0.2" strokeWidth="2" />
            </g>

            {/* Mushroom - Moved to far Right corner to avoid text overlap */}
            <g transform="translate(340, 500)" filter="url(#soft-glow)">
                <path d="M20,0 A20,20 0 0,1 60,0 A20,20 0 0,1 100,0 Q100,30 20,30 Z" fill="#FF0000" stroke="#000" strokeWidth="3" />
                <circle cx="40" cy="10" r="5" fill="#FFF" />
                <circle cx="80" cy="10" r="5" fill="#FFF" />
                <path d="M40,30 V50 H80 V30" fill="#FFE4C4" stroke="#000" strokeWidth="3" />
                <circle cx="50" cy="38" r="2" fill="#000" />
                <circle cx="70" cy="38" r="2" fill="#000" />
            </g>

            {/* Avatar Frame - Thicker Stroke */}
            <rect x="75" y="80" width="250" height="250" fill="#fff" stroke="#000" strokeWidth="8" rx="10" />
            {/* Main Image */}
            {userImage ? (
                <image href={userImage} x="80" y="85" width="240" height="240" preserveAspectRatio="xMidYMid slice" />
            ) : (
                <rect x="80" y="85" width="240" height="240" fill="#eee" />
            )}

            {/* Content Box */}
            <rect x="20" y="350" width="360" height="80" fill="#000" stroke="#fff" strokeWidth="4" rx="8" />

            {/* Title - Chunky Font Upgrade */}
            <text x="200" y="390" textAnchor="middle" fontSize={nameSize} fontWeight="900" fill="#fff" fontFamily="Arial Black, Gadget, sans-serif" stroke="#000" strokeWidth="1">
                {safeName.toUpperCase()}
            </text>
            <text x="200" y="415" textAnchor="middle" fontSize="14" fill="#fff" fontFamily="Courier New, monospace">
                LEVEL: 99
            </text>

            {/* Caption - Shadow for readability on Blue/Ground */}
            <text x="200" y="580" textAnchor="middle" fontSize="14" fill="#000" fontWeight="bold" stroke="#000" strokeWidth="3" opacity="0.5">
                {safeDesc}
            </text>
            <text x="200" y="580" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold" style={{ textShadow: "2px 2px 0px #000" }}>
                {safeDesc}
            </text>
        </svg>
    );
};

// 2. Tamagotchi Pet (90s Toy Vibe)
const TamagotchiTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "MY PET";
    const safeDesc = description || "Nuôi con gì chết con đó...";
    const nameSize = getSafeFontSize(safeName, 200, 20);

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* 3D Shell Highlight */}
                <radialGradient id="plastic-shine" cx="30%" cy="30%" r="50%">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </radialGradient>
                {/* 3D Bevel for Buttons */}
                <filter id="btn-bevel">
                    <feGaussianBlur stdDeviation="1.5" in="SourceAlpha" result="blur" />
                    <feOffset dx="2" dy="2" in="blur" result="offsetBlur" />
                    <feComposite in="SourceGraphic" in2="offsetBlur" operator="over" />
                </filter>
                {/* LCD Pixel Filter */}
                <filter id="lcd-monitor">
                    <feColorMatrix type="matrix" values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 1 0" result="gray" />
                    <feComponentTransfer in="gray" result="contrast">
                        <feFuncR type="linear" slope="1.5" intercept="-0.2" />
                        <feFuncG type="linear" slope="1.5" intercept="-0.2" />
                        <feFuncB type="linear" slope="1.5" intercept="-0.2" />
                    </feComponentTransfer>
                    {/* Tint to Greenish LCD */}
                    <feColorMatrix type="matrix" values="0.2 0 0 0 0  0 0.4 0 0 0  0 0.1 0 0 0  0 0 0 1 0" in="contrast" />
                </filter>
            </defs>

            {/* Keychain Loop */}
            <path d="M190,40 A10,10 0 1,1 210,40" fill="none" stroke="#C0C0C0" strokeWidth="6" />
            <circle cx="200" cy="50" r="10" fill="none" stroke="#C0C0C0" strokeWidth="4" />


            {/* Tamagotchi Shell - Pink 3D */}
            <g filter="drop-shadow(0 10px 10px rgba(0,0,0,0.3))">
                <path d="M50,300 C50,100 350,100 350,300 C350,550 50,550 50,300 Z" fill="#FF69B4" stroke="#C71585" strokeWidth="2" />
                <path d="M70,300 C70,120 330,120 330,300 C330,530 70,530 70,300 Z" fill="url(#plastic-shine)" opacity="0.5" />
            </g>

            {/* Screen Bezel */}
            <rect x="90" y="170" width="220" height="200" fill="#f0f0f0" stroke="#000" strokeWidth="2" rx="10" />

            {/* Screen Area (LCD) */}
            <rect x="100" y="180" width="200" height="180" fill="#9CAEA9" stroke="#555" strokeWidth="2" rx="4" />

            {/* Pixelated Image Grid effect */}
            <pattern id="pixelGrid" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                <rect width="3" height="3" fill="rgba(0,0,0,0.1)" />
            </pattern>
            <rect x="100" y="180" width="200" height="180" fill="url(#pixelGrid)" />

            {/* Status Icons */}
            <text x="110" y="200" fontSize="16">🥣</text>
            <text x="270" y="200" fontSize="16">❤️</text>
            <text x="270" y="350" fontSize="16">💩</text>
            <text x="110" y="350" fontSize="16">💡</text>

            {/* Avatar (Pixelated if possible, currently normal clip) */}
            <defs>
                <rect id="tamaScreen" x="110" y="190" width="180" height="160" rx="2" />
                <clipPath id="clipTama">{ /* Using rect for clip */}
                    <use href="#tamaScreen" />
                </clipPath>
            </defs>
            {userImage ? (
                <image href={userImage} x="120" y="210" width="160" height="120" preserveAspectRatio="xMidYMid slice" clipPath="url(#clipTama)" style={{ imageRendering: 'pixelated', filter: 'url(#lcd-monitor)' }} />
            ) : (
                <text x="200" y="280" textAnchor="middle" fontSize="12" fontFamily="monospace">INSERT PET</text>
            )}

            {/* Buttons - Gold 3D */}
            <g filter="url(#btn-bevel)">
                <circle cx="120" cy="450" r="15" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />
                <circle cx="200" cy="480" r="15" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />
                <circle cx="280" cy="450" r="15" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />
            </g>
            {/* Labels A B C */}
            <text x="120" y="480" textAnchor="middle" fontSize="10" fontWeight="bold">A</text>
            <text x="200" y="510" textAnchor="middle" fontSize="10" fontWeight="bold">B</text>
            <text x="280" y="480" textAnchor="middle" fontSize="10" fontWeight="bold">C</text>

            {/* Text Title (Rounded) */}
            <text x="200" y="150" textAnchor="middle" fontSize={nameSize} fontWeight="900"
                fill="#FFF" stroke="#C71585" strokeWidth="4" paintOrder="stroke"
                fontFamily="Arial Rounded MT Bold, Arial, sans-serif">
                {safeName}
            </text>

            {/* Caption */}
            <text x="200" y="540" textAnchor="middle" fontSize="16" fill="#333" fontFamily="Arial, sans-serif" fontWeight="bold">
                {safeDesc}
            </text>
        </svg>
    );
}

// 3. Windows 95 Error
const Win95ErrorTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "SYSTEM ERROR";
    const safeDesc = description || "User performed an illegal operation";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#008080" /> {/* Windows Teal */}

            {/* Main Window */}
            <g transform="translate(20, 100)">
                {/* Shadow */}
                <rect x="4" y="4" width="360" height="400" fill="#000" />
                {/* Window Body */}
                <rect width="360" height="400" fill="#C0C0C0" stroke="#fff" strokeWidth="2" />
                <path d="M360,0 V400 H0" fill="none" stroke="#808080" strokeWidth="4" />

                {/* Title Bar */}
                <rect x="4" y="4" width="352" height="30" fill="#000080" />
                <text x="10" y="24" fontSize="16" fill="#fff" fontWeight="bold" fontFamily="Arial">Error 404: User Not Found</text>
                <rect x="330" y="6" width="20" height="24" fill="#C0C0C0" stroke="#fff" strokeWidth="2" />
                <text x="334" y="22" fontSize="14" fill="#000" fontWeight="bold">X</text>

                {/* Content */}
                {userImage ? (
                    <image href={userImage} x="80" y="60" width="200" height="200" preserveAspectRatio="xMidYMid slice" style={{ border: '2px solid #808080' }} />
                ) : (
                    <rect x="80" y="60" width="200" height="200" fill="#fff" stroke="#808080" strokeWidth="2" />
                )}

                <text x="180" y="300" textAnchor="middle" fontSize="18" fill="#000" fontWeight="bold" fontFamily="Arial">
                    {safeName}
                </text>
                <text x="180" y="325" textAnchor="middle" fontSize="14" fill="#000" fontFamily="Arial">
                    {safeDesc}
                </text>

                {/* Button */}
                <g transform="translate(130, 350)">
                    <rect width="100" height="30" fill="#C0C0C0" stroke="#fff" strokeWidth="2" />
                    <path d="M100,0 V30 H0" fill="none" stroke="#000" strokeWidth="2" />
                    <text x="50" y="20" textAnchor="middle" fontSize="14" fill="#000" fontFamily="Arial">OK</text>
                </g>
            </g>

            {/* Background Glitch Windows */}
            <g transform="translate(10, 20)" opacity="0.6">
                <rect width="200" height="150" fill="#C0C0C0" stroke="#fff" strokeWidth="2" />
                <rect x="4" y="4" width="192" height="20" fill="#000080" />
            </g>
            <g transform="translate(150, 500)" opacity="0.6">
                <rect width="200" height="80" fill="#C0C0C0" stroke="#fff" strokeWidth="2" />
                <rect x="4" y="4" width="192" height="20" fill="#000080" />
                <text x="100" y="50" textAnchor="middle" fontSize="12" fill="#000">System Halted</text>
            </g>
        </svg>
    );
}

// 4. Bui Doi Cho Lon (Retro HK Poster)
const BuiDoiChoLonTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "GIANG HỒ MẠNG";
    const safeDesc = description || "KẺ NẮM TRÙM KHU PHỐ";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="hkPosterClip">
                    <rect x="40" y="120" width="320" height="300" rx="10" />
                </clipPath>
            </defs>

            {/* 1. NỀN & KHÔNG KHÍ (Lớp dưới cùng) */}
            {/* Dark Red BG */}
            <rect width="400" height="600" fill="#7f1d1d" />
            {/* Texture Stripes */}
            <pattern id="hkTexture" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="20" y2="0" stroke="#ca8a04" strokeWidth="1" opacity="0.3" />
                <line x1="0" y1="0" x2="0" y2="20" stroke="#ca8a04" strokeWidth="1" opacity="0.1" />
            </pattern>
            <rect width="400" height="600" fill="url(#hkTexture)" />
            {/* Dragon Watermark (Abstract) */}
            <path d="M300,500 Q350,450 380,500 T300,550 T250,500" fill="none" stroke="#000" strokeWidth="20" opacity="0.1" />

            {/* 2. KHUNG AVATAR (Tấm Ápphích Chính) */}
            {/* Neon Frame - Messy stroke using paths */}
            <path d="M40,120 L360,120 L360,420 L40,420 Z" fill="none" stroke="#facc15" strokeWidth="8" strokeLinejoin="round" />
            {/* Double Stroke Effect for Neon */}
            <path d="M35,115 L365,115 L365,425 L35,425 Z" fill="none" stroke="#facc15" strokeWidth="2" opacity="0.5" />

            {/* Avatar Image */}
            <rect x="40" y="120" width="320" height="300" rx="10" fill="#333" />
            {userImage ? (
                <image
                    href={userImage}
                    x="40" y="120" width="320" height="300"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#hkPosterClip)"
                />
            ) : (
                <text x="200" y="270" textAnchor="middle" fontSize="100" fill="#555">🕶️</text>
            )}
            {/* Sepia Overlay */}
            <rect x="40" y="120" width="320" height="300" rx="10" fill="#ea580c" opacity="0.2" style={{ mixBlendMode: 'multiply' }} />

            {/* 3. BẢNG HIỆU TÊN (Tựa Đề Phim) */}
            {/* Black Board with Red Border */}
            <rect x="20" y="450" width="360" height="100" fill="black" stroke="#ef4444" strokeWidth="6" />

            {/* Text Content */}
            <foreignObject x="20" y="450" width="360" height="100">
                <div className="w-full h-full flex flex-col items-center justify-center p-2">
                    <div style={{
                        color: '#facc15',
                        fontFamily: 'serif',
                        fontWeight: 900,
                        fontSize: '36px',
                        textTransform: 'uppercase',
                        lineHeight: 1,
                        textShadow: '3px 3px 0 #ef4444',
                        textAlign: 'center'
                    }}>
                        {safeName}
                    </div>
                    <div style={{
                        color: 'white',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        marginTop: '5px',
                        letterSpacing: '2px',
                        textAlign: 'center'
                    }}>
                        {safeDesc}
                    </div>
                </div>
            </foreignObject>

            {/* 4. CHI TIẾT CUỐI CÙNG */}
            {/* Red Stamp */}
            <g transform="translate(300, 50) rotate(-15)">
                <circle r="40" fill="none" stroke="#ef4444" strokeWidth="4" />
                <circle r="36" fill="none" stroke="#ef4444" strokeWidth="1" />
                <text x="0" y="5" textAnchor="middle" fontSize="10" fill="#ef4444" fontWeight="bold">CẤM CHỤP HÌNH</text>
            </g>

            {/* Outer Border */}
            <rect width="400" height="600" fill="none" stroke="black" strokeWidth="20" />
        </svg>
    );
}

// 5. Cassette Tape (Vintage Polish)
const CassetteTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "MIXTAPE 2023";
    const safeDesc = description || "Tuyển Tập Nhạc Sến";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Plastic Grain Filter */}
                <filter id="plastic-grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
                    <feColorMatrix type="matrix" values="0.1 0 0 0 0  0 0.1 0 0 0  0 0 0.1 0 0  0 0 0 0.5 0" in="noise" result="coloredNoise" />
                    <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite" />
                    <feBlend mode="multiply" in="composite" in2="SourceGraphic" />
                </filter>
                {/* Scratches Filter */}
                <filter id="scratches-v">
                    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" result="noise" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 5 -2" in="noise" result="scratchMap" />
                    <feComposite operator="in" in="scratchMap" in2="SourceGraphic" result="scratchesApplied" />
                    <feComposite in="SourceGraphic" in2="scratchesApplied" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
                </filter>
                {/* Paper Wear Filter */}
                <filter id="paper-wear">
                    <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
                </filter>
                {/* Yellow Dust/Noise for Paper */}
                <filter id="yellow-dust">
                    <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="noise" />
                    <feColorMatrix type="matrix" values="1 0 0 0 0.9  0 1 0 0 0.8  0 0 1 0 0.6  0 0 0 0.2 0" />
                </filter>
                {/* Avatar Glow */}
                <filter id="avatar-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* 3D Hole Bevel */}
                <filter id="hole-bevel">
                    <feGaussianBlur stdDeviation="1" in="SourceAlpha" result="blur" />
                    <feOffset dx="1" dy="1" in="blur" result="offsetBlur" />
                    <feSpecularLighting in="blur" surfaceScale="2" specularConstant="1" specularExponent="10" lightingColor="white" result="specOut">
                        <fePointLight x="-5000" y="-10000" z="20000" />
                    </feSpecularLighting>
                    <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
                    <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" />
                    <feMerge>
                        <feMergeNode in="offsetBlur" />
                        <feMergeNode in="litPaint" />
                    </feMerge>
                </filter>
            </defs>

            <rect width="400" height="600" fill="#E0FFFF" />

            {/* Cassette Global Rotation */}
            <g transform="translate(200, 280) rotate(90) translate(-300, -200)">
                {/* Cassette Body - Black Plastic */}
                <rect x="50" y="100" width="500" height="300" rx="10" fill="#222" stroke="#111" strokeWidth="2" filter="url(#plastic-grain)" />
                {/* Scratches Overlay */}
                <rect x="50" y="100" width="500" height="300" rx="10" fill="#fff" opacity="0.1" filter="url(#scratches-v)" />

                {/* Highlights on Edges */}
                <path d="M60,110 L540,110" fill="none" stroke="#555" strokeWidth="2" opacity="0.5" />
                <path d="M60,390 L540,390" fill="none" stroke="#000" strokeWidth="4" opacity="0.7" />

                {/* Sticker Label Area */}
                <g filter="url(#paper-wear)">
                    <rect x="70" y="120" width="460" height="180" rx="4" fill="#FF8C00" />
                    {/* Write area - Paper white with yellow tint */}
                    <rect x="80" y="130" width="440" height="50" fill="#fdf5e6" opacity="0.9" />
                    {/* Yellow Noise Overlay */}
                    <rect x="80" y="130" width="440" height="50" filter="url(#yellow-dust)" opacity="0.3" style={{ mixBlendMode: 'multiply' }} />

                    {/* Scuffs / Stains */}
                    <path d="M100,140 Q150,160 200,135" stroke="#a0522d" strokeWidth="1" opacity="0.3" fill="none" />
                    <circle cx="450" cy="250" r="30" fill="#8b4513" opacity="0.1" filter="blur(10px)" />
                </g>

                {/* Text on Cassette Labels - Handwritten Marker */}
                <text x="100" y="165" fontSize="32" fontFamily="Comic Sans MS, Chalkboard SE, sans-serif" fill="#000" transform="rotate(-1, 100, 165)" style={{ mixBlendMode: 'multiply' }}>
                    Mixtape: {safeName}
                </text>

                {/* Tape Window Area */}
                <rect x="180" y="200" width="240" height="80" rx="5" fill="#333" stroke="#000" strokeWidth="2" />

                {/* Spools - with 3D Effect */}
                <circle cx="230" cy="240" r="30" fill="#fff" />
                <circle cx="230" cy="240" r="10" fill="#000" filter="url(#hole-bevel)" /> {/* Hole */}

                <circle cx="370" cy="240" r="30" fill="#fff" />
                <circle cx="370" cy="240" r="10" fill="#000" filter="url(#hole-bevel)" /> {/* Hole */}

                {/* Magnetic Tape */}
                <rect x="230" y="230" width="140" height="20" fill="#111" />
                <circle cx="280" cy="240" r="15" fill="#111" /> {/* Tape Roll Center */}

                {/* Screws */}
                <circle cx="65" cy="115" r="4" fill="#555" />
                <circle cx="535" cy="115" r="4" fill="#555" />
                <circle cx="65" cy="385" r="4" fill="#555" />
                <circle cx="535" cy="385" r="4" fill="#555" />
            </g>

            {/* Re-orienting text for readability */}
            <g transform="translate(0,0)">
                {/* Avatar Circle Sticker */}
                {/* White Glow Background */}
                <circle cx="200" cy="180" r="92" fill="white" opacity="0.6" filter="blur(4px)" />

                <circle cx="200" cy="180" r="90" fill="#fdf5e6" stroke="#000" strokeWidth="1" filter="url(#paper-wear)" />
                <defs>
                    <clipPath id="circleAv">
                        <circle cx="200" cy="180" r="86" />
                    </clipPath>
                    {/* Dust Particles */}
                    <pattern id="dust-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="white" opacity="0.4" />
                        <circle cx="50" cy="60" r="0.8" fill="white" opacity="0.3" />
                        <circle cx="80" cy="20" r="1.2" fill="white" opacity="0.4" />
                        <circle cx="30" cy="80" r="0.5" fill="white" opacity="0.3" />
                    </pattern>
                </defs>
                {userImage && (
                    <>
                        <image href={userImage} x="114" y="94" width="172" height="172" preserveAspectRatio="xMidYMid slice" clipPath="url(#circleAv)" style={{ mixBlendMode: 'multiply' }} opacity="0.9" />
                        <circle cx="200" cy="180" r="86" fill="url(#dust-pattern)" pointerEvents="none" />
                    </>
                )}

                {/* "SIDE A" */}
                <text x="200" y="325" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#333" stroke="#fff" strokeWidth="4" paintOrder="stroke" fontFamily="Arial Black">
                    SIDE A
                </text>

                {/* New Caption */}
                <text x="200" y="560" textAnchor="middle" fontSize="16" fill="#1a237e" fontStyle="italic" fontFamily="serif" fontWeight="500">
                    "Tua lại những ngày tháng rực rỡ nhất."
                </text>
            </g>
        </svg>
    );
}

// 6. Vinyl Record
const VinylTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "CLASSIC VIBE";
    const safeDesc = description || "Nhạc hay vì nó cũ";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="recordGrooves" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0.4" stopColor="#111" />
                    <stop offset="0.45" stopColor="#222" />
                    <stop offset="0.5" stopColor="#111" />
                    <stop offset="0.55" stopColor="#222" />
                    <stop offset="0.6" stopColor="#111" />
                    <stop offset="0.65" stopColor="#222" />
                    <stop offset="0.7" stopColor="#111" />
                    <stop offset="0.75" stopColor="#222" />
                    <stop offset="0.8" stopColor="#111" />
                    <stop offset="0.85" stopColor="#222" />
                    <stop offset="0.9" stopColor="#111" />
                    <stop offset="1" stopColor="#000" />
                </radialGradient>
            </defs>
            <rect width="400" height="600" fill="#DEB887" /> {/* Wood table */}

            {/* Turntable Platter */}
            <circle cx="200" cy="300" r="190" fill="#333" />
            <circle cx="200" cy="300" r="180" fill="url(#recordGrooves)" />

            {/* Label (Avatar) */}
            <circle cx="200" cy="300" r="75" fill="#FF4500" />
            <defs>
                <clipPath id="vinylLabel">
                    <circle cx="200" cy="300" r="70" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="130" y="230" width="140" height="140" preserveAspectRatio="xMidYMid slice" clipPath="url(#vinylLabel)" />}
            <circle cx="200" cy="300" r="5" fill="#fff" /> {/* Spindle hole */}

            {/* Tone Arm */}
            <path d="M350,100 L320,300 L280,320" fill="none" stroke="#C0C0C0" strokeWidth="10" strokeLinecap="round" />
            <circle cx="350" cy="100" r="20" fill="#666" stroke="#C0C0C0" strokeWidth="4" />

            {/* Text */}
            <text x="200" y="530" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#4B0082" fontFamily="Verdana">
                {safeName}
            </text>
            <text x="200" y="560" textAnchor="middle" fontSize="16" fill="#333" fontStyle="italic">
                Now Playing: {safeDesc}
            </text>
        </svg>
    );
}

// 7. VHS Glitch
const VHSTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "NO SIGNAL";
    const safeDesc = description || "Tracking...";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Chromatic Aberration Filter */}
                <filter id="chromatic-aberration">
                    <feOffset in="SourceGraphic" dx="-2" dy="0" result="redChannel" />
                    <feOffset in="SourceGraphic" dx="2" dy="0" result="blueChannel" />
                    <feMerge>
                        <feMergeNode in="redChannel" />
                        <feMergeNode in="blueChannel" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Film Grain Filter */}
                <filter id="film-grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
                    <feColorMatrix type="matrix" values="0.3 0 0 0 0  0 0.3 0 0 0  0 0 0.3 0 0  0 0 0 0.1 0" in="noise" result="coloredNoise" />
                    <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite" />
                    <feBlend mode="multiply" in="composite" in2="SourceGraphic" />
                </filter>

                {/* Neon Glow */}
                <filter id="neon-glow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Glitch Shake */}
                <filter id="glitch-shake" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.2" numOctaves="1" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </defs>

            {/* Dark Background + Film Grain */}
            <rect width="400" height="600" fill="#050505" />
            <rect width="400" height="600" fill="#111" opacity="0.5" filter="url(#film-grain)" />

            {/* Glitch Elements - Horizontal Streaks */}
            <g opacity="0.6">
                {/* Cyan/Magenta Bars */}
                <rect x="0" y="80" width="400" height="15" fill="cyan" opacity="0.4" style={{ filter: 'blur(4px)' }} />
                <rect x="0" y="85" width="400" height="2" fill="magenta" opacity="0.6" style={{ filter: 'blur(2px)' }} />
                {/* Random Static Lines */}
                <line x1="0" y1="150" x2="400" y2="150" stroke="#fff" strokeWidth="1" opacity="0.1" />
                <line x1="0" y1="450" x2="400" y2="450" stroke="#fff" strokeWidth="2" opacity="0.05" />
                <line x1="20" y1="300" x2="380" y2="300" stroke="#fff" strokeWidth="1" strokeDasharray="50 150" opacity="0.2" />
            </g>

            {/* Image with Chromatic Aberration */}
            <g filter="url(#chromatic-aberration)">
                {userImage && <image href={userImage} x="45" y="100" width="310" height="310" preserveAspectRatio="xMidYMid slice" opacity="0.8" />}
                {/* Color Dodge Overlay */}
                {userImage && <image href={userImage} x="40" y="100" width="310" height="310" preserveAspectRatio="xMidYMid slice" style={{ mixBlendMode: 'color-dodge' }} opacity="0.4" />}
            </g>

            {/* Scanlines (Varied width) */}
            <pattern id="scanlines" x="0" y="0" width="1" height="6" patternUnits="userSpaceOnUse">
                <rect width="1" height="3" fill="#000" opacity="0.4" />
                <rect y="3" width="1" height="1" fill="#000" opacity="0.2" />
            </pattern>
            <rect width="400" height="600" fill="url(#scanlines)" pointerEvents="none" />


            {/* TEXT OSD */}
            <text x="30" y="60" fontSize="26" fill="#0f0" fontFamily="monospace" fontWeight="bold" filter="url(#glitch-shake)" style={{ textShadow: "0 0 5px #0f0" }}>
                PLAY &#9658;
            </text>
            <text x="30" y="90" fontSize="18" fill="#0f0" fontFamily="monospace" opacity="0.8" style={{ textShadow: "0 0 2px #0f0" }}>
                SP 0:00:23
            </text>

            <g filter="url(#chromatic-aberration)">
                <text x="200" y="480" textAnchor="middle" fontSize="32" fill="#fff" fontFamily="Arial Black, Arial, sans-serif" letterSpacing="2" style={{ textShadow: "-3px 0px 0px cyan, 3px 0px 0px magenta" }}>
                    {safeName.toUpperCase()}
                </text>
            </g>

            <text x="200" y="520" textAnchor="middle" fontSize="16" fill="#ddd" fontFamily="monospace" filter="url(#glitch-shake)">
                "{safeDesc}"
            </text>

            {/* Tracking Error Bottom */}
            <rect x="0" y="550" width="400" height="30" fill="url(#scanlines)" opacity="0.5" />
            <path d="M0,560 L400,565 L400,570 L0,560" fill="#fff" opacity="0.1" />

        </svg>
    );
};

// 8. Pacman Maze (Neon Arcade)
const PacmanTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "PAC-MAN";
    const safeDesc = description || "Chạy trốn deadline...";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="neon-blue-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <filter id="neon-red-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feFlood floodColor="red" floodOpacity="0.8" result="glowColor" />
                    <feComposite in="glowColor" in2="coloredBlur" operator="in" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <filter id="neon-yellow-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feFlood floodColor="gold" floodOpacity="0.8" result="glowColor" />
                    <feComposite in="glowColor" in2="coloredBlur" operator="in" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <clipPath id="pacCircle">
                    <circle cx="200" cy="320" r="100" />
                </clipPath>
                {/* Maze Pattern for BG */}
                <pattern id="maze-bg" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M20,20 H80 V80 H20 Z" fill="none" stroke="#1919A6" strokeWidth="2" opacity="0.2" />
                    <path d="M40,40 H60" fill="none" stroke="#1919A6" strokeWidth="2" opacity="0.2" />
                </pattern>
            </defs>

            <rect width="400" height="600" fill="#000" />
            <rect width="400" height="600" fill="url(#maze-bg)" />

            {/* Walls - Neon Blue */}
            <path d="M20,20 H380 V580 H20 Z" fill="none" stroke="#1919A6" strokeWidth="6" style={{ filter: 'drop-shadow(0 0 5px #00f)' }} />
            <path d="M50,50 H350 M50,150 H350 M50,550 H350" stroke="#1919A6" strokeWidth="4" style={{ filter: 'drop-shadow(0 0 3px #00f)' }} />
            <rect x="80" y="200" width="240" height="240" fill="none" stroke="#1919A6" strokeWidth="4" rx="10" style={{ filter: 'drop-shadow(0 0 5px #00f)' }} />

            {/* Dots (Top) */}
            <circle cx="100" cy="100" r="4" fill="#FFB897" />
            <circle cx="150" cy="100" r="4" fill="#FFB897" />
            <circle cx="200" cy="100" r="4" fill="#FFB897" />
            <circle cx="250" cy="100" r="4" fill="#FFB897" />
            <circle cx="300" cy="100" r="4" fill="#FFB897" />

            {/* Avatar in Center with Neon Border */}
            {userImage ? (
                <g>
                    <image href={userImage} x="100" y="220" width="200" height="200" preserveAspectRatio="xMidYMid slice" clipPath="url(#pacCircle)" />
                    <circle cx="200" cy="320" r="100" fill="none" stroke="#00e5ff" strokeWidth="3" filter="url(#neon-blue-glow)" />
                </g>
            ) : (
                <text x="200" y="340" textAnchor="middle" fontSize="60">👻</text>
            )}

            {/* Pacman & Ghosts Bottom Line */}
            {/* Dots between Pacman (Right) and Ghost (Left) - wait, standard is one chases other. Let's put them on line 500 */}
            {/* Pacman at 190,480 was original. User wants dots between Pacman and Ghost at bottom. */}
            {/* Let's reposition: Ghost Left (60), Pacman Right (340) or similar? Original code had Pacman center-ish. 
                 Let's place Ghost Left and Pacman Right chasing, with dots in between.
             */}

            {/* Dots Line */}
            <g fill="#FFD700">
                <circle cx="130" cy="500" r="3" />
                <circle cx="160" cy="500" r="3" />
                <circle cx="190" cy="500" r="3" />
                <circle cx="220" cy="500" r="3" />
                <circle cx="250" cy="500" r="3" />
            </g>

            {/* Pacman - Neon Yellow - Chasing Left-to-Right or Right-to-Left? Usually Ghost chases Pacman. 
                Let's put Pacman at Right facing Left, Ghost at Left chasing.
            */}
            <path d="M300,480 A20,20 0 1,1 300,520 L310,500 Z" fill="#FFFF00" transform="rotate(180, 310, 500)" filter="url(#neon-yellow-glow)" />

            {/* Ghost Red - Neon Red */}
            <path d="M90,480 A20,20 0 0,1 130,480 V520 L120,510 L110,520 L100,510 L90,520 Z" fill="#FF0000" transform="translate(-20, 0)" filter="url(#neon-red-glow)" />
            <g transform="translate(-20, 0)">
                <circle cx="100" cy="490" r="5" fill="#fff" /><circle cx="102" cy="490" r="2" fill="#000" />
                <circle cx="120" cy="490" r="5" fill="#fff" /><circle cx="122" cy="490" r="2" fill="#000" />
            </g>

            {/* Text */}
            <text x="200" y="180" textAnchor="middle" fontSize="30" fill="#FFD700" fontWeight="bold" fontFamily="Courier New, monospace" style={{ textShadow: "0 0 5px gold" }}>
                HIGH SCORE
            </text>
            {/* Name pushed up 10px from 220 -> 210 */}
            <text x="200" y="210" textAnchor="middle" fontSize="24" fill="#fff" fontWeight="bold">
                {safeName}
            </text>

            <rect x="40" y="550" width="320" height="40" fill="#000" />
            {/* Caption Orange Glow */}
            <text x="200" y="575" textAnchor="middle" fontSize="14" fill="#FF9800" fontFamily="monospace" fontWeight="bold" style={{ textShadow: "0 0 5px #FF9800" }}>
                {safeDesc}
            </text>
        </svg>
    );
}

// 9. Tetris Block (8-Bit Retro)
const TetrisTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "TETRIS KING";
    const safeDesc = description || "Cuộc đời là những mảnh ghép không vừa khít";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" style={{ fontFamily: 'Courier New, monospace' }}>
            <defs>
                <pattern id="scanline" x="0" y="0" width="1" height="4" patternUnits="userSpaceOnUse">
                    <rect width="1" height="2" fill="black" opacity="0.3" />
                </pattern>
                <clipPath id="avatar-clip-pixel-border">
                    <rect x="80" y="100" width="240" height="240" />
                </clipPath>
            </defs>

            <rect width="400" height="600" fill="#111" />

            {/* Grid */}
            <pattern id="tetrisGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40,0 V40 H0" fill="none" stroke="#222" strokeWidth="2" />
            </pattern>
            <rect width="400" height="600" fill="url(#tetrisGrid)" />

            {/* Falling Blocks (Dynamic Elements) - Behind Avatar */}
            {/* T-Block Purple - Faded */}
            <g transform="translate(40, 40)" opacity="0.4">
                <rect x="40" y="0" width="40" height="40" fill="#9C27B0" stroke="#000" strokeWidth="2" />
                <rect x="0" y="40" width="40" height="40" fill="#9C27B0" stroke="#000" strokeWidth="2" />
                <rect x="40" y="40" width="40" height="40" fill="#9C27B0" stroke="#000" strokeWidth="2" />
                <rect x="80" y="40" width="40" height="40" fill="#9C27B0" stroke="#000" strokeWidth="2" />
            </g>
            {/* L-Block Orange - Faded */}
            <g transform="translate(280, 200)" opacity="0.3">
                <rect x="0" y="0" width="40" height="40" fill="#FF9800" stroke="#000" strokeWidth="2" />
                <rect x="0" y="40" width="40" height="40" fill="#FF9800" stroke="#000" strokeWidth="2" />
                <rect x="0" y="80" width="40" height="40" fill="#FF9800" stroke="#000" strokeWidth="2" />
                <rect x="40" y="80" width="40" height="40" fill="#FF9800" stroke="#000" strokeWidth="2" />
            </g>

            {/* Blocks at bottom */}
            <g stroke="#000" strokeWidth="2">
                <rect x="0" y="560" width="40" height="40" fill="cyan" />
                <rect x="40" y="560" width="40" height="40" fill="cyan" />
                <rect x="80" y="560" width="40" height="40" fill="cyan" />
                <rect x="120" y="560" width="40" height="40" fill="cyan" />

                <rect x="320" y="560" width="40" height="40" fill="yellow" />
                <rect x="360" y="560" width="40" height="40" fill="yellow" />
                <rect x="320" y="520" width="40" height="40" fill="yellow" />
                <rect x="360" y="520" width="40" height="40" fill="yellow" />
            </g>

            {/* T-Shape around Avatar Frame for decoration */}
            <g transform="translate(120, 160)">
                {/* We removed the overlaid blocks to let the avatar shine, but added border below */}
            </g>

            {/* Avatar with White Pixel Border & Scanline */}
            <g>
                <rect x="76" y="96" width="248" height="248" fill="none" stroke="white" strokeWidth="4" />
                {userImage ? (
                    <image
                        href={userImage}
                        x="80" y="100" width="240" height="240"
                        preserveAspectRatio="xMidYMid slice"
                        clipPath="url(#avatar-clip-pixel-border)"
                    />
                ) : (
                    <rect x="80" y="100" width="240" height="240" fill="#333" />
                )}
                {/* Scanline Overlay on Image */}
                <rect x="80" y="100" width="240" height="240" fill="url(#scanline)" pointerEvents="none" />
            </g>


            {/* Text UI - Pixel Style */}
            <text x="50" y="90" fontSize="20" fill="#fff" fontFamily="monospace" fontWeight="bold">SCORE</text>
            <text x="50" y="115" fontSize="20" fill="#fff" fontFamily="monospace">099999</text>

            {/* Level Indicator (Symmetric) */}
            <text x="350" y="90" textAnchor="end" fontSize="20" fill="#fff" fontFamily="monospace" fontWeight="bold">LEVEL</text>
            <text x="350" y="115" textAnchor="end" fontSize="20" fill="#fff" fontFamily="monospace">99</text>

            {/* Name */}
            <text x="200" y="420" textAnchor="middle" fontSize="30" fill="#fff" fontWeight="bold" fontFamily="monospace" style={{ textShadow: "4px 4px 0px #000" }}>
                {safeName}
            </text>

            {/* Caption - Centered, Spaced, Wrapped if needed */}
            {/* Added padding by increasing Y distance from Name and reducing font slightly for side margins */}
            <text x="200" y="500" textAnchor="middle" fontSize="15" fill="#ccc" fontFamily="monospace" fontWeight="bold">
                {safeDesc}
            </text>
        </svg>
    );
}

// 10. Nokia Snake (LCD Retro)
const NokiaTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "RẮN SĂN MỒI";
    const safeDesc = description || "Càng ăn càng dài, càng dài càng dễ chết";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="lcd-contrast">
                    <feColorMatrix type="saturate" values="0" />
                    <feComponentTransfer>
                        <feFuncR type="linear" slope="1.5" intercept="-0.2" />
                        <feFuncG type="linear" slope="1.5" intercept="-0.2" />
                        <feFuncB type="linear" slope="1.5" intercept="-0.2" />
                    </feComponentTransfer>
                </filter>
                <radialGradient id="lcd-vignette" cx="50%" cy="50%" r="70%">
                    <stop offset="60%" stopColor="#9ACD32" stopOpacity="0" />
                    <stop offset="100%" stopColor="#6B8E23" stopOpacity="0.6" />
                </radialGradient>
            </defs>

            {/* Phone Body */}
            <rect width="400" height="600" fill="#333" />
            <rect x="20" y="20" width="360" height="560" fill="#9ACD32" rx="5" /> {/* LCD Green */}

            {/* Snake Grid - Faded */}
            <pattern id="lcdGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <rect width="9" height="9" fill="rgba(0,0,0,0.05)" />
            </pattern>
            <rect x="20" y="20" width="360" height="560" fill="url(#lcdGrid)" />

            {/* Snake Body Border */}
            <path d="M40,40 H360 V560 H40 V40" fill="none" stroke="#000" strokeWidth="10" strokeDasharray="12 4" />

            {/* Active Snake (Pixel art) - Top Right */}
            <g fill="#000">
                <rect x="330" y="60" width="10" height="10" />
                <rect x="320" y="60" width="10" height="10" />
                <rect x="310" y="60" width="10" height="10" />
                <rect x="300" y="60" width="10" height="10" />
                <rect x="290" y="60" width="10" height="10" />
                <rect x="290" y="70" width="10" height="10" /> {/* Turn */}
                <rect x="290" y="80" width="10" height="10" />
                <rect x="290" y="90" width="10" height="10" /> {/* Extended Head */}
                <rect x="290" y="100" width="10" height="10" />
            </g>

            {/* Food - Bottom Left */}
            <rect x="60" y="500" width="10" height="10" fill="#000" />

            {/* Text 8-bit */}
            <text x="200" y="100" textAnchor="middle" fontSize="30" fill="#000" fontWeight="bold" fontFamily="monospace">
                SNAKE II
            </text>

            {/* Vignette Overlay */}
            <rect x="20" y="20" width="360" height="560" fill="url(#lcd-vignette)" pointerEvents="none" />

            {/* Avatar (Pixelated & High Contrast) */}
            {userImage && <image href={userImage} x="100" y="150" width="200" height="200" preserveAspectRatio="xMidYMid slice" style={{ imageRendering: 'pixelated', filter: 'url(#lcd-contrast)' }} />}
            <rect x="100" y="150" width="200" height="200" fill="none" stroke="#000" strokeWidth="4" />

            {/* Name - Bolder */}
            <text x="200" y="420" textAnchor="middle" fontSize="24" fill="#000" fontWeight="900" fontFamily="Courier New">
                {safeName}
            </text>

            {/* Caption - Split into 2 lines for better width fit */}
            {/* Logic: Split by comma if present, or just render. Hardcoded for the requested text visual. */}
            <text x="200" y="495" textAnchor="middle" fontSize="14" fill="#000" fontFamily="Courier New" fontStyle="italic" fontWeight="bold">
                {safeDesc.includes(',') ? safeDesc.split(',')[0] + "," : safeDesc}
            </text>
            {safeDesc.includes(',') && (
                <text x="200" y="515" textAnchor="middle" fontSize="14" fill="#000" fontFamily="Courier New" fontStyle="italic" fontWeight="bold">
                    {safeDesc.split(',')[1].trim()}
                </text>
            )}
        </svg>
    );
}

export const RetroTemplates = {
    'pixel-mario': PixelMarioTemplate,
    'tamagotchi-pet': TamagotchiTemplate,
    'windows-95-error': Win95ErrorTemplate,
    'bui-doi-cho-lon': BuiDoiChoLonTemplate,
    'cassette-tape': CassetteTemplate,
    'vinyl-record': VinylTemplate,
    'vhs-glitch': VHSTemplate,
    'pacman-maze': PacmanTemplate,
    'tetris-block': TetrisTemplate,
    'nokia-snake': NokiaTemplate,
};
