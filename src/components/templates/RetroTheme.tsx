
import React from 'react';
import { TemplateProps } from './types';

// Helper for LIP (Layout Integrity Protocol)
const getSafeFontSize = (text: string, maxWidth: number, defaultSize: number) => {
    if (!text) return defaultSize;
    const charWidth = defaultSize * 0.6; // Average char width aspect ratio
    const estimatedWidth = text.length * charWidth;
    return estimatedWidth > maxWidth ? (maxWidth / text.length) / 0.6 : defaultSize;
};

// 1. Pixel Mario
const PixelMarioTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "GAME OVER";
    const safeDesc = description || "INSERT COIN TO CONTINUE";
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
            </defs>

            {/* Background */}
            <rect width="400" height="600" fill="url(#brickPattern)" />
            <rect width="400" height="600" fill="rgba(60, 150, 255, 0.3)" /> {/* Sky hint */}

            {/* Mystery Blocks */}
            <g transform="translate(50, 450)">
                <rect width="60" height="60" fill="#F8B800" stroke="#000" strokeWidth="4" />
                <text x="30" y="45" textAnchor="middle" fontSize="40" fontWeight="bold" fill="#000">?</text>
            </g>
            <g transform="translate(290, 450)">
                <rect width="60" height="60" fill="#F8B800" stroke="#000" strokeWidth="4" />
                <text x="30" y="45" textAnchor="middle" fontSize="40" fontWeight="bold" fill="#000">?</text>
            </g>
            <g transform="translate(170, 450)">
                <rect width="60" height="60" fill="#A0522D" stroke="#000" strokeWidth="4" />
            </g>

            {/* Mushroom */}
            <g transform="translate(20, 520)">
                <path d="M20,0 A20,20 0 0,1 60,0 A20,20 0 0,1 100,0 Q100,30 20,30 Z" fill="#FF0000" stroke="#000" strokeWidth="3" />
                <circle cx="40" cy="10" r="5" fill="#FFF" />
                <circle cx="80" cy="10" r="5" fill="#FFF" />
                <path d="M40,30 V50 H80 V30" fill="#FFE4C4" stroke="#000" strokeWidth="3" />
                <circle cx="50" cy="38" r="2" fill="#000" />
                <circle cx="70" cy="38" r="2" fill="#000" />
            </g>

            {/* Avatar Frame */}
            <rect x="75" y="80" width="250" height="250" fill="#fff" stroke="#000" strokeWidth="8" rx="10" />
            {/* Main Image */}
            {userImage ? (
                <image href={userImage} x="80" y="85" width="240" height="240" preserveAspectRatio="xMidYMid slice" />
            ) : (
                <rect x="80" y="85" width="240" height="240" fill="#eee" />
            )}

            {/* Content Box */}
            <rect x="20" y="350" width="360" height="80" fill="#000" stroke="#fff" strokeWidth="4" rx="8" />
            <text x="200" y="390" textAnchor="middle" fontSize={nameSize} fontWeight="bold" fill="#fff" fontFamily="Courier New, monospace">
                {safeName.toUpperCase()}
            </text>
            <text x="200" y="415" textAnchor="middle" fontSize="14" fill="#fff" fontFamily="Courier New, monospace">
                LEVEL: 99
            </text>

            <text x="200" y="580" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold" stroke="#000" strokeWidth="4" paintOrder="stroke">
                {safeDesc}
            </text>
            <text x="200" y="580" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold">
                {safeDesc}
            </text>
        </svg>
    );
};

// 2. Tamagotchi Pet
const TamagotchiTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "MY PET";
    const safeDesc = description || "Hungry...";
    const nameSize = getSafeFontSize(safeName, 200, 20);

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            {/* Tamagotchi Shape */}
            <path d="M50,300 C50,100 350,100 350,300 C350,550 50,550 50,300 Z" fill="#FF69B4" stroke="#000" strokeWidth="8" />

            {/* Screen Area */}
            <rect x="100" y="180" width="200" height="180" fill="#9CAEA9" stroke="#000" strokeWidth="4" rx="4" />

            {/* Pixelated Image Grid effect */}
            <pattern id="pixelGrid" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
                <rect width="4" height="4" fill="rgba(0,0,0,0.05)" />
            </pattern>
            <rect x="100" y="180" width="200" height="180" fill="url(#pixelGrid)" />

            {/* Avatar (Pixelated if possible, currently normal clip) */}
            <defs>
                <rect id="tamaScreen" x="110" y="190" width="180" height="160" rx="2" />
                <clipPath id="clipTama">{ /* Using rect for clip */}
                    <use href="#tamaScreen" />
                </clipPath>
            </defs>
            {userImage ? (
                <image href={userImage} x="110" y="190" width="180" height="160" preserveAspectRatio="xMidYMid slice" clipPath="url(#clipTama)" style={{ imageRendering: 'pixelated' }} />
            ) : (
                <text x="200" y="280" textAnchor="middle" fontSize="12" fontFamily="monospace">INSERT PET</text>
            )}

            {/* Buttons */}
            <circle cx="120" cy="450" r="15" fill="#FFD700" stroke="#000" strokeWidth="2" />
            <circle cx="200" cy="480" r="15" fill="#FFD700" stroke="#000" strokeWidth="2" />
            <circle cx="280" cy="450" r="15" fill="#FFD700" stroke="#000" strokeWidth="2" />

            {/* Text */}
            <text x="200" y="140" textAnchor="middle" fontSize={nameSize} fontWeight="bold" fill="#000" fontFamily="Courier New, monospace">
                {safeName}
            </text>
            <text x="200" y="540" textAnchor="middle" fontSize="14" fill="#000" fontFamily="Courier New, monospace" fontWeight="bold">
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

// 4. Bui Doi Cho Lon (Sepia Retro)
const BuiDoiChoLonTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "GIANG HỒ MẠNG";
    const safeDesc = description || "Quá khứ kia anh đâu muốn nhắc lại...";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            {/* Filter for Sepia/Noise */}
            <filter id="sepia">
                <feColorMatrix type="matrix" values="0.393 0.769 0.189 0 0  0.349 0.686 0.168 0 0  0.272 0.534 0.131 0 0  0 0 0 1 0" />
            </filter>
            <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                <feColorMatrix type="saturate" values="0" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3" />
                </feComponentTransfer>
                <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
                <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
            </filter>

            <g filter="url(#sepia)">
                <rect width="400" height="600" fill="#EEE8AA" />

                {/* Border Frame */}
                <rect x="20" y="20" width="360" height="560" fill="none" stroke="#8B4513" strokeWidth="8" />
                <rect x="30" y="30" width="340" height="540" fill="none" stroke="#8B4513" strokeWidth="2" />

                {/* Typography Signage Style */}
                <text x="200" y="80" textAnchor="middle" fontSize="40" fill="#B22222" fontWeight="bold" fontFamily="serif" style={{ textShadow: "2px 2px 0px #F4A460" }}>
                    SÀI GÒN
                </text>
                <text x="200" y="110" textAnchor="middle" fontSize="20" fill="#8B4513" fontWeight="bold" fontFamily="serif">
                    1990 HỒI KÝ
                </text>

                {/* Main Photo Frame */}
                <rect x="50" y="140" width="300" height="300" fill="#fff" stroke="#8B4513" strokeWidth="4" />
                {userImage ? (
                    <image href={userImage} x="55" y="145" width="290" height="290" preserveAspectRatio="xMidYMid slice" />
                ) : (
                    <rect x="55" y="145" width="290" height="290" fill="#dcdcdc" />
                )}

                {/* Name & Desc */}
                <text x="200" y="490" textAnchor="middle" fontSize="32" fill="#B22222" fontWeight="bold" fontFamily="serif" style={{ textShadow: "1px 1px 0px #fff" }}>
                    {safeName.toUpperCase()}
                </text>
                <text x="200" y="530" textAnchor="middle" fontSize="16" fill="#552200" fontStyle="italic" fontFamily="serif" width="300">
                    "{safeDesc}"
                </text>
            </g>

            {/* Noise Overlay */}
            <rect width="400" height="600" fill="#888" filter="url(#noise)" opacity="0.4" style={{ mixBlendMode: 'overlay' }} />
        </svg>
    );
}

// 5. Cassette Tape
const CassetteTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "MIXTAPE 2023";
    const safeDesc = description || "Tuyển Tập Nhạc Sến";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#E0FFFF" />

            {/* Cassette Global Rotation */}
            <g transform="translate(200, 300) rotate(90) translate(-300, -200)">
                {/* Cassette Body */}
                <rect x="50" y="100" width="500" height="300" rx="20" fill="#333" stroke="#111" strokeWidth="5" />

                {/* Sticker Label Area */}
                <rect x="70" y="120" width="460" height="180" rx="10" fill="#FF8C00" />
                <rect x="80" y="130" width="440" height="40" fill="#fff" opacity="0.8" /> {/* Write area */}

                {/* Text on Cassette */}
                <text x="100" y="160" fontSize="24" fontFamily="Brush Script MT, cursive" fill="#000">
                    Mixtape: {safeName}
                </text>

                {/* Tape Window */}
                <rect x="180" y="190" width="240" height="80" rx="10" fill="#444" stroke="#000" strokeWidth="2" />
                {/* Spools */}
                <circle cx="230" cy="230" r="30" fill="#fff" />
                <circle cx="370" cy="230" r="30" fill="#fff" />
                {/* Tape */}
                <path d="M230,260 L370,260" stroke="#111" strokeWidth="40" opacity="0.9" />
            </g>

            {/* Re-orienting text for readability since cassette is sideways */}
            <g transform="translate(0,0)">
                {/* Avatar Circle Sticker */}
                <circle cx="200" cy="180" r="90" fill="#fff" stroke="#000" strokeWidth="4" />
                <defs>
                    <clipPath id="circleAv">
                        <circle cx="200" cy="180" r="86" />
                    </clipPath>
                </defs>
                {userImage && <image href={userImage} x="114" y="94" width="172" height="172" preserveAspectRatio="xMidYMid slice" clipPath="url(#circleAv)" />}

                <text x="200" y="320" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#333" stroke="#fff" strokeWidth="4" paintOrder="stroke">
                    SIDE A
                </text>
                <text x="200" y="520" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#000" transform="rotate(-90, 360, 300)" >
                    {safeDesc}
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
            <rect width="400" height="600" fill="#111" />

            {/* Glitch Elements */}
            <g opacity="0.8">
                <rect x="0" y="100" width="400" height="10" fill="cyan" opacity="0.5" />
                <rect x="0" y="105" width="400" height="2" fill="magenta" opacity="0.7" />
                <rect x="0" y="450" width="400" height="20" fill="transparent" stroke="white" strokeDasharray="4 4" opacity="0.2" />
            </g>

            {/* Image with offset "glitch" */}
            {userImage && <image href={userImage} x="45" y="100" width="310" height="310" preserveAspectRatio="xMidYMid slice" opacity="0.5" />}
            {userImage && <image href={userImage} x="40" y="100" width="310" height="310" preserveAspectRatio="xMidYMid slice" style={{ mixBlendMode: 'lighten' }} filter="brightness(1.2)" />}


            {/* TEXT OSD */}
            <text x="30" y="60" fontSize="30" fill="#fff" fontFamily="monospace" style={{ textShadow: "2px 2px 0px #f0f" }}>
                PLAY &#9658;
            </text>
            <text x="30" y="90" fontSize="20" fill="#fff" fontFamily="monospace">
                SP 0:00:23
            </text>

            <text x="200" y="480" textAnchor="middle" fontSize="30" fill="#fff" fontFamily="Arial Black, Arial, sans-serif" style={{ textShadow: "-3px 0px 0px cyan, 3px 0px 0px magenta" }}>
                {safeName.toUpperCase()}
            </text>
            <text x="200" y="520" textAnchor="middle" fontSize="16" fill="#ddd" fontFamily="monospace">
                "{safeDesc}"
            </text>

            {/* Scanlines */}
            <pattern id="scanlines" x="0" y="0" width="1" height="4" patternUnits="userSpaceOnUse">
                <rect width="1" height="2" fill="#000" opacity="0.3" />
            </pattern>
            <rect width="400" height="600" fill="url(#scanlines)" />
        </svg>
    );
}

// 8. Pacman Maze
const PacmanTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "PAC-MAN";
    const safeDesc = description || "Waka Waka Waka...";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#000" />

            {/* Walls */}
            <path d="M20,20 H380 V580 H20 Z" fill="none" stroke="#1919A6" strokeWidth="6" />
            <path d="M50,50 H350 M50,150 H350 M50,550 H350" stroke="#1919A6" strokeWidth="4" />
            <rect x="80" y="200" width="240" height="240" fill="none" stroke="#1919A6" strokeWidth="4" rx="10" />

            {/* Dots */}
            <circle cx="100" cy="100" r="4" fill="#FFB897" />
            <circle cx="150" cy="100" r="4" fill="#FFB897" />
            <circle cx="200" cy="100" r="4" fill="#FFB897" />
            <circle cx="250" cy="100" r="4" fill="#FFB897" />
            <circle cx="300" cy="100" r="4" fill="#FFB897" />

            {/* Avatar in Center */}
            <defs>
                <clipPath id="pacCircle">
                    <circle cx="200" cy="320" r="100" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="100" y="220" width="200" height="200" preserveAspectRatio="xMidYMid slice" clipPath="url(#pacCircle)" />}

            {/* Pacman & Ghosts */}
            <path d="M190,480 A30,30 0 1,1 190,520 L200,500 Z" fill="#FFFF00" transform="rotate(180, 200, 500)" /> {/* Pacman */}

            {/* Ghost Red */}
            <path d="M60,480 A20,20 0 0,1 100,480 V520 L90,510 L80,520 L70,510 L60,520 Z" fill="#FF0000" />
            <circle cx="70" cy="480" r="5" fill="#fff" /><circle cx="72" cy="480" r="2" fill="#000" />
            <circle cx="90" cy="480" r="5" fill="#fff" /><circle cx="92" cy="480" r="2" fill="#000" />

            {/* Text */}
            <text x="200" y="180" textAnchor="middle" fontSize="30" fill="#FFD700" fontWeight="bold" fontFamily="monospace">
                HIGH SCORE
            </text>
            <text x="200" y="220" textAnchor="middle" fontSize="24" fill="#fff" fontWeight="bold">
                {safeName}
            </text>

            <rect x="40" y="550" width="320" height="40" fill="#000" />
            <text x="200" y="575" textAnchor="middle" fontSize="14" fill="#FFB897" fontFamily="monospace">
                {safeDesc}
            </text>
        </svg>
    );
}

// 9. Tetris Block
const TetrisTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "TETRIS KING";
    const safeDesc = description || "Line Clear!";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#111" />

            {/* Grid */}
            <pattern id="tetrisGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40,0 V40 H0" fill="none" stroke="#222" strokeWidth="2" />
            </pattern>
            <rect width="400" height="600" fill="url(#tetrisGrid)" />

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

            {/* Main Block (Avatar) - T Shape */}
            <g transform="translate(120, 160)">
                <rect x="40" y="0" width="40" height="40" fill="purple" stroke="#000" strokeWidth="2" />
                <rect x="0" y="40" width="40" height="40" fill="purple" stroke="#000" strokeWidth="2" />
                <rect x="40" y="40" width="40" height="40" fill="purple" stroke="#000" strokeWidth="2" />
                <rect x="80" y="40" width="40" height="40" fill="purple" stroke="#000" strokeWidth="2" />
            </g>

            {/* Avatar inside a large ghost block or overlay */}
            <rect x="80" y="100" width="240" height="240" fill="#fff" opacity="0.1" stroke="#fff" strokeWidth="2" strokeDasharray="5 5" />
            {userImage && <image href={userImage} x="80" y="100" width="240" height="240" preserveAspectRatio="xMidYMid slice" />}

            {/* Text UI */}
            <text x="200" y="400" textAnchor="middle" fontSize="30" fill="#fff" fontWeight="bold" fontFamily="monospace" style={{ textShadow: "4px 4px 0px #000" }}>
                {safeName}
            </text>

            <text x="50" y="50" fontSize="20" fill="#fff" fontFamily="monospace">SCORE</text>
            <text x="50" y="80" fontSize="20" fill="#fff" fontFamily="monospace">099999</text>

            <text x="200" y="450" textAnchor="middle" fontSize="16" fill="#ccc" fontFamily="monospace">
                NEXT: {safeDesc}
            </text>
        </svg>
    );
}

// 10. Nokia Snake
const NokiaTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "RẮN SĂN MỒI";
    const safeDesc = description || "High Score: 999";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            {/* Phone Body */}
            <rect width="400" height="600" fill="#333" />
            <rect x="20" y="20" width="360" height="560" fill="#9ACD32" rx="5" /> {/* LCD Green */}

            {/* Snake Grid */}
            <pattern id="lcdGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <rect width="9" height="9" fill="rgba(0,0,0,0.1)" />
            </pattern>
            <rect x="20" y="20" width="360" height="560" fill="url(#lcdGrid)" />

            {/* Snake Body Border */}
            <path d="M40,40 H360 V560 H40 V40" fill="none" stroke="#000" strokeWidth="10" strokeDasharray="12 4" />

            {/* Avatar (Pixelated) */}
            {userImage && <image href={userImage} x="100" y="150" width="200" height="200" preserveAspectRatio="xMidYMid slice" style={{ imageRendering: 'pixelated', filter: 'grayscale(100%) contrast(1.5)' }} />}
            <rect x="100" y="150" width="200" height="200" fill="none" stroke="#000" strokeWidth="4" />

            {/* Text 8-bit */}
            <text x="200" y="100" textAnchor="middle" fontSize="30" fill="#000" fontWeight="bold" fontFamily="monospace">
                SNAKE II
            </text>

            <text x="200" y="420" textAnchor="middle" fontSize="24" fill="#000" fontWeight="bold" fontFamily="Courier New">
                {safeName}
            </text>

            <text x="200" y="520" textAnchor="middle" fontSize="14" fill="#000" fontFamily="Courier New" fontStyle="italic">
                "{safeDesc}"
            </text>

            {/* Food */}
            <rect x="300" y="300" width="10" height="10" fill="#000" />
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
