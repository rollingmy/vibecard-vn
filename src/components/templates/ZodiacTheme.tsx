
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
            <rect width="400" height="600" fill="#E0FFFF" />

            {/* Waves */}
            <path d="M0,400 Q100,350 200,400 T400,400 V600 H0 Z" fill="#00BFFF" opacity="0.5" />
            <path d="M0,450 Q100,400 200,450 T400,450 V600 H0 Z" fill="#1E90FF" opacity="0.5" />
            <path d="M0,500 Q100,450 200,500 T400,500 V600 H0 Z" fill="#0000CD" opacity="0.5" />

            {/* Bubbles */}
            <circle cx="50" cy="100" r="10" fill="#fff" stroke="#87CEEB" strokeWidth="2" opacity="0.6" />
            <circle cx="350" cy="200" r="15" fill="#fff" stroke="#87CEEB" strokeWidth="2" opacity="0.6" />

            {/* Avatar Frame - Water Drop shape approx */}
            <path d="M200,50 Q100,200 100,280 A100,100 0 0,0 300,280 Q300,200 200,50 Z" fill="#fff" stroke="#00BFFF" strokeWidth="4" />
            <defs>
                <clipPath id="dropClip">
                    <path d="M200,54 Q104,200 104,280 A96,96 0 0,0 296,280 Q296,200 200,54 Z" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="100" y="50" width="200" height="330" preserveAspectRatio="xMidYMid slice" clipPath="url(#dropClip)" />}

            {/* Symbols */}
            <text x="50" y="50" fontSize="30">♋</text>
            <text x="320" y="50" fontSize="30">♓</text>
            <text x="320" y="100" fontSize="30">♏</text>

            <text x="200" y="480" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 30)} fontWeight="bold" fill="#fff" style={{ textShadow: "1px 1px 2px #000" }}>
                {safeName}
            </text>
            <text x="200" y="520" textAnchor="middle" fontSize="16" fill="#E0FFFF" fontStyle="italic">
                {safeDesc}
            </text>
        </svg>
    );
};

// 3. Fire Sign
const FireTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "HỆ LỬA";
    const safeDesc = description || "Bạch Dương - Sư Tử - Nhân Mã";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#220000" />

            {/* Flames */}
            <path d="M0,600 L100,400 L150,550 L200,420 L250,550 L300,400 L400,600 Z" fill="#FF4500" />
            <path d="M50,600 L150,500 L200,580 L250,500 L350,600 Z" fill="#FFD700" />

            {/* Avatar Circle with Fire Border */}
            <circle cx="200" cy="200" r="110" fill="none" stroke="#FF4500" strokeWidth="8" strokeDasharray="10 10" />
            <defs>
                <clipPath id="fireCircle">
                    <circle cx="200" cy="200" r="100" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="100" y="100" width="200" height="200" preserveAspectRatio="xMidYMid slice" clipPath="url(#fireCircle)" />}

            {/* Symbols */}
            <text x="50" y="100" fontSize="30" fill="#FF4500">♈</text>
            <text x="320" y="100" fontSize="30" fill="#FF4500">♌</text>
            <text x="320" y="150" fontSize="30" fill="#FF4500">♐</text>

            <text x="200" y="380" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 32)} fontWeight="900" fill="#FFD700" style={{ textShadow: "2px 2px 0px #FF4500" }}>
                {safeName.toUpperCase()}
            </text>
            <text x="200" y="420" textAnchor="middle" fontSize="16" fill="#FFA07A">
                {safeDesc}
            </text>
        </svg>
    );
};

// 4. Earth Sign
const EarthTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "HỆ ĐẤT";
    const safeDesc = description || "Kim Ngưu - Xử Nữ - Ma Kết";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#F5DEB3" />

            {/* Leaves/Plants */}
            <path d="M0,0 Q100,100 0,200 Z" fill="#556B2F" opacity="0.8" />
            <path d="M400,0 Q300,100 400,200 Z" fill="#556B2F" opacity="0.8" />
            <path d="M0,600 Q100,500 200,600" stroke="#556B2F" strokeWidth="20" fill="none" />
            <path d="M200,600 Q300,500 400,600" stroke="#556B2F" strokeWidth="20" fill="none" />

            {/* Avatar Frame - Hexagonish */}
            <polygon points="200,100 300,150 300,270 200,320 100,270 100,150" fill="#fff" stroke="#8B4513" strokeWidth="5" />
            <defs>
                <clipPath id="earthClip">
                    <polygon points="200,104 296,152 296,268 200,316 104,268 104,152" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="100" y="100" width="200" height="220" preserveAspectRatio="xMidYMid slice" clipPath="url(#earthClip)" />}

            {/* Symbols */}
            <text x="185" y="90" fontSize="30" fill="#556B2F">♉</text>
            <text x="10" y="300" fontSize="30" fill="#556B2F">♍</text>
            <text x="350" y="300" fontSize="30" fill="#556B2F">♑</text>

            <text x="200" y="400" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 30)} fontWeight="bold" fill="#556B2F" fontFamily="serif">
                {safeName}
            </text>
            <text x="200" y="440" textAnchor="middle" fontSize="16" fill="#8B4513" fontStyle="italic">
                {safeDesc}
            </text>
        </svg>
    );
};

// 5. Air Sign
const AirTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "HỆ KHÍ";
    const safeDesc = description || "Song Tử - Thiên Bình - Bảo Bình";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#E0FFFF" />
                    <stop offset="1" stopColor="#B0E0E6" />
                </linearGradient>
            </defs>
            <rect width="400" height="600" fill="url(#skyGrad)" />

            {/* Clouds */}
            <path d="M50,100 Q80,50 110,100 T170,100 T230,100" stroke="#fff" strokeWidth="40" strokeLinecap="round" fill="none" opacity="0.8" />
            <path d="M200,500 Q230,450 260,500 T320,500 T380,500" stroke="#fff" strokeWidth="50" strokeLinecap="round" fill="none" opacity="0.8" />

            {/* Avatar Frame - Airy Circle */}
            <circle cx="200" cy="250" r="110" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="5 5" />
            <circle cx="200" cy="250" r="120" fill="none" stroke="#F0F8FF" strokeWidth="1" />

            <defs>
                <clipPath id="airClip">
                    <circle cx="200" cy="250" r="100" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="100" y="150" width="200" height="200" preserveAspectRatio="xMidYMid slice" clipPath="url(#airClip)" opacity="0.9" />}

            {/* Symbols */}
            <text x="50" y="200" fontSize="30" fill="#708090">♊</text>
            <text x="320" y="200" fontSize="30" fill="#708090">♎</text>
            <text x="320" y="250" fontSize="30" fill="#708090">♒</text>

            <text x="200" y="420" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 30)} fontWeight="300" fill="#000" letterSpacing="4">
                {safeName}
            </text>
            <text x="200" y="450" textAnchor="middle" fontSize="14" fill="#555">
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
            <rect width="400" height="600" fill="#333" />

            {/* Sunglasses Graphic */}
            <g transform="translate(50, 200)">
                <rect width="130" height="60" rx="10" fill="#000" stroke="#fff" strokeWidth="2" opacity="0.9" />
                <rect x="170" width="130" height="60" rx="10" fill="#000" stroke="#fff" strokeWidth="2" opacity="0.9" />
                <path d="M130,30 Q150,10 170,30" fill="none" stroke="#fff" strokeWidth="4" />
            </g>

            {/* Avatar reflected in glasses */}
            <defs>
                <clipPath id="glassLeft">
                    <rect x="50" y="200" width="130" height="60" rx="10" />
                </clipPath>
                <clipPath id="glassRight">
                    <rect x="220" y="200" width="130" height="60" rx="10" />
                </clipPath>
            </defs>
            {userImage && (
                <>
                    <image href={userImage} x="50" y="180" width="130" height="130" preserveAspectRatio="xMidYMid slice" clipPath="url(#glassLeft)" opacity="0.5" />
                    <image href={userImage} x="220" y="180" width="130" height="130" preserveAspectRatio="xMidYMid slice" clipPath="url(#glassRight)" opacity="0.5" />
                </>
            )}

            <text x="200" y="100" textAnchor="middle" fontSize="40" fill="#fff">😎</text>

            <text x="200" y="400" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 30)} fontWeight="bold" fill="#fff" fontFamily="Courier New">
                {safeName}
            </text>
            <text x="200" y="440" textAnchor="middle" fontSize="14" fill="#ccc" fontStyle="italic">
                {safeDesc}
            </text>
        </svg>
    );
};

// 7. Bua Yeu
const BuaYeuTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "BÙA YÊU";
    const safeDesc = description || "Dán vào là dính";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#800000" /> {/* Dark Red BG */}

            {/* The Charm (Paper) */}
            <rect x="50" y="50" width="300" height="500" fill="#FFD700" stroke="#000" strokeWidth="2" />

            {/* Traditional Patterns */}
            <rect x="60" y="60" width="280" height="480" fill="none" stroke="#FF0000" strokeWidth="4" />
            <path d="M50,50 L100,100 M350,50 L300,100 M50,550 L100,500 M350,550 L300,500" stroke="#FF0000" strokeWidth="2" />

            {/* Avatar Centered */}
            <rect x="100" y="150" width="200" height="200" fill="#fff" stroke="#FF0000" strokeWidth="2" />
            {userImage && <image href={userImage} x="105" y="155" width="190" height="190" preserveAspectRatio="xMidYMid slice" />}

            {/* Vertical Text */}
            <text x="200" y="120" textAnchor="middle" fontSize="30" fill="#FF0000" fontWeight="bold" fontFamily="serif">CẤP CẤP NHƯ LUẬT LỆNH</text>

            <text x="200" y="400" textAnchor="middle" fontSize={30} fill="#FF0000" fontWeight="bold" fontFamily="serif" writingMode="tb">
                {safeName.toUpperCase().split(' ').join('')}
            </text>

            <text x="200" y="520" textAnchor="middle" fontSize="14" fill="#FF0000">
                {safeDesc}
            </text>
        </svg>
    );
};

// 8. Full Moon Party
const FullMoonTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "HỘI TRĂNG TRÒN";
    const safeDesc = description || "Auuuuu....";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#191970" />

            {/* Stats */}
            <circle cx="200" cy="200" r="150" fill="#FFFFE0" stroke="#F0E68C" strokeWidth="10" />

            {/* Avatar inside Moon */}
            <defs>
                <clipPath id="moonClip">
                    <circle cx="200" cy="200" r="140" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="60" y="60" width="280" height="280" preserveAspectRatio="xMidYMid slice" clipPath="url(#moonClip)" opacity="0.8" />}

            {/* Wolf Silhouette */}
            <path d="M0,600 L100,450 L150,500 L250,420 L400,600 Z" fill="#000" />
            <path d="M280,480 L300,420 L320,480 Z" fill="#000" /> {/* Ears */}

            <text x="200" y="100" textAnchor="middle" fontSize="20" fill="#000" opacity="0.3" fontWeight="bold">FULL MOON</text>

            <text x="200" y="550" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 30)} fontWeight="bold" fill="#FFFFE0" style={{ textShadow: "0 0 5px #fff" }}>
                {safeName}
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
            <rect width="400" height="600" fill="#000" />

            {/* Matrix Numbers */}
            <g fill="#00FF00" opacity="0.3" fontSize="20" fontFamily="monospace">
                <text x="20" y="50">1 4 7</text>
                <text x="300" y="100">3 6 9</text>
                <text x="50" y="500">2 5 8</text>
                <text x="320" y="550">11 22</text>
            </g>

            {/* Pyramid Chart */}
            <path d="M200,100 L100,300 H300 Z" fill="none" stroke="#FFD700" strokeWidth="2" />
            <circle cx="200" cy="220" r="40" fill="#fff" opacity="0.1" />

            {/* Avatar in Circle */}
            <defs>
                <clipPath id="logicClip">
                    <circle cx="200" cy="220" r="50" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="150" y="170" width="100" height="100" preserveAspectRatio="xMidYMid slice" clipPath="url(#logicClip)" />}

            <text x="200" y="160" textAnchor="middle" fill="#FFD700" fontSize="12">SỐ CHỦ ĐẠO</text>

            <text x="200" y="450" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 30)} fontWeight="bold" fill="#00FF00" fontFamily="monospace">
                {safeName}
            </text>
            <text x="200" y="480" textAnchor="middle" fontSize="16" fill="#fff">
                {safeDesc}
            </text>
        </svg>
    );
};

// 10. Ying Yang
const YingYangTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "ÂM DƯƠNG";
    const safeDesc = description || "Cân bằng vạn vật";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#808080" />

            {/* Ying Yang Symbol Big Background */}
            <g transform="translate(200, 300) scale(2.5)">
                <path d="M0,-100 A100,100 0 0,1 0,100 A50,50 0 0,1 0,0 A50,50 0 0,0 0,-100 Z" fill="#fff" />
                <path d="M0,100 A100,100 0 0,1 0,-100 A50,50 0 0,1 0,0 A50,50 0 0,0 0,100 Z" fill="#000" />
            </g>

            {/* Avatar Split */}
            <defs>
                <clipPath id="yingClip">
                    <circle cx="200" cy="200" r="80" />
                </clipPath>
                <clipPath id="yangClip">
                    <circle cx="200" cy="400" r="80" />
                </clipPath>
            </defs>
            {userImage && (
                <>
                    <image href={userImage} x="120" y="120" width="160" height="160" preserveAspectRatio="xMidYMid slice" clipPath="url(#yingClip)" style={{ filter: 'grayscale(100%) invert(100%)' }} />
                    <image href={userImage} x="120" y="320" width="160" height="160" preserveAspectRatio="xMidYMid slice" clipPath="url(#yangClip)" style={{ filter: 'grayscale(100%)' }} />
                </>
            )}

            <text x="200" y="50" textAnchor="middle" fontSize="30" fontWeight="bold" fill="#fff" style={{ mixBlendMode: 'difference' }}>
                ☯ {safeName} ☯
            </text>
            <text x="200" y="580" textAnchor="middle" fontSize="16" fill="#fff" style={{ mixBlendMode: 'difference' }}>
                {safeDesc}
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
    'bua-yeu': BuaYeuTemplate,
    'full-moon-party': FullMoonTemplate,
    'than-so-hoc': NumerologyTemplate,
    'ying-yang': YingYangTemplate,
};
