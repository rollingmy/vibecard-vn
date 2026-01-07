
import React from 'react';
import { TemplateProps } from './types';

// Helper for LIP
const getSafeFontSize = (text: string, maxWidth: number, defaultSize: number) => {
    if (!text) return defaultSize;
    const charWidth = defaultSize * 0.6;
    const estimatedWidth = text.length * charWidth;
    return estimatedWidth > maxWidth ? (maxWidth / text.length) / 0.6 : defaultSize;
};

// 1. Food Reviewer
const FoodTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "THÁNH ĂN";
    const safeDesc = description || "Review có tâm";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#FFF5EE" />

            {/* Tablecloth Pattern */}
            <defs>
                <pattern id="checkTable" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <rect width="40" height="40" fill="#fff" />
                    <rect x="0" y="0" width="20" height="20" fill="#FFB6C1" />
                    <rect x="20" y="20" width="20" height="20" fill="#FFB6C1" />
                </pattern>
            </defs>
            <rect width="400" height="600" fill="url(#checkTable)" />

            {/* Plate */}
            <circle cx="200" cy="220" r="140" fill="#fff" stroke="#ccc" strokeWidth="2" />
            <circle cx="200" cy="220" r="120" fill="#fff" stroke="#eee" strokeWidth="2" />

            {/* Avatar as Food */}
            <defs>
                <clipPath id="plateClip">
                    <circle cx="200" cy="220" r="110" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="90" y="110" width="220" height="220" preserveAspectRatio="xMidYMid slice" clipPath="url(#plateClip)" />}

            {/* Cutlery */}
            <rect x="20" y="150" width="30" height="200" rx="5" fill="#C0C0C0" stroke="#999" strokeWidth="2" /> {/* Fork handle */}
            <path d="M20,150 L20,100 L30,100 L30,150 M35,150 L35,100 L45,100 L45,150 M50,150 L50,100 L50,150" stroke="#C0C0C0" strokeWidth="4" />

            <rect x="350" y="150" width="30" height="200" rx="5" fill="#C0C0C0" stroke="#999" strokeWidth="2" /> {/* Knife handle */}
            <path d="M350,150 Q350,80 365,80 Q380,80 380,150" fill="#C0C0C0" stroke="#999" strokeWidth="2" />

            {/* Food Icons */}
            <text x="50" y="450" fontSize="40">🍔</text>
            <text x="310" y="450" fontSize="40">🍕</text>
            <text x="50" y="520" fontSize="40">🌮</text>
            <text x="310" y="520" fontSize="40">🍜</text>

            <rect x="80" y="420" width="240" height="120" rx="10" fill="#fff" stroke="#FF69B4" strokeWidth="4" />
            <text x="200" y="470" textAnchor="middle" fontSize={getSafeFontSize(safeName, 220, 24)} fontWeight="bold" fill="#FF1493" fontFamily="Comic Sans MS, cursive">
                {safeName}
            </text>
            <text x="200" y="500" textAnchor="middle" fontSize="14" fill="#333" fontStyle="italic">
                "{safeDesc}"
            </text>
        </svg>
    );
};

// 2. Coffee Holic
const CoffeeTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "COFFEE HOLIC";
    const safeDesc = description || "Không cafe đời không nể";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#F5F5DC" /> {/* Beige */}

            {/* Coffee Stain Ring */}
            <circle cx="200" cy="250" r="140" fill="none" stroke="#8B4513" strokeWidth="20" opacity="0.3" strokeDasharray="200 100" />
            <circle cx="210" cy="240" r="130" fill="none" stroke="#A0522D" strokeWidth="15" opacity="0.2" />

            {/* Phin Filter Graphic */}
            <path d="M150,50 L250,50 L230,120 H170 Z" fill="#C0C0C0" stroke="#666" strokeWidth="2" />
            <rect x="140" y="50" width="120" height="10" fill="#C0C0C0" />
            <line x1="200" y1="120" x2="200" y2="180" stroke="#3E2723" strokeWidth="4" strokeDasharray="5 5" /> {/* Dropping coffee */}

            {/* Cup (Avatar) */}
            <path d="M120,200 H280 Q280,350 200,350 Q120,350 120,200 Z" fill="#fff" stroke="#8B4513" strokeWidth="4" />
            <path d="M280,220 Q320,220 320,260 Q320,300 275,290" fill="none" stroke="#fff" strokeWidth="8" /> {/* Handle */}

            <defs>
                <clipPath id="coffeeClip">
                    <path d="M124,204 H276 Q276,346 200,346 Q124,346 124,204 Z" />
                </clipPath>
            </defs>
            {userImage ? (
                <image href={userImage} x="120" y="150" width="160" height="250" preserveAspectRatio="xMidYMid slice" clipPath="url(#coffeeClip)" opacity="0.9" style={{ mixBlendMode: 'multiply' }} />
            ) : (
                <path d="M124,204 H276 Q276,346 200,346 Q124,346 124,204 Z" fill="#6F4E37" />
            )}

            {/* Steam */}
            <path d="M180,180 Q160,150 180,120" fill="none" stroke="#ccc" strokeWidth="4" opacity="0.6" />
            <path d="M220,180 Q200,150 220,120" fill="none" stroke="#ccc" strokeWidth="4" opacity="0.6" />

            {/* Beans */}
            <ellipse cx="50" cy="500" rx="15" ry="10" fill="#3E2723" transform="rotate(30)" />
            <path d="M40,500 Q50,505 60,500" stroke="#000" strokeWidth="1" fill="none" />
            <ellipse cx="350" cy="450" rx="15" ry="10" fill="#3E2723" transform="rotate(-45)" />

            <text x="200" y="450" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 32)} fontWeight="bold" fill="#3E2723" fontFamily="Courier">
                {safeName.toUpperCase()}
            </text>
            <text x="200" y="480" textAnchor="middle" fontSize="14" fill="#6F4E37" fontStyle="italic">
                {safeDesc}
            </text>
        </svg>
    );
};

// 3. Phuot Thu
const TravelTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "PHƯỢT THỦ";
    const safeDesc = description || "Xách balo lên và đi";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#F0E68C" /> {/* Khaki */}

            {/* Map lines background */}
            <pattern id="mapPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M20,20 L80,80 M20,80 L80,20 M0,50 H100 M50,0 V100" stroke="#BDB76B" strokeWidth="1" fill="none" />
                <circle cx="50" cy="50" r="2" fill="#BDB76B" />
            </pattern>
            <rect width="400" height="600" fill="url(#mapPattern)" opacity="0.5" />

            {/* Helmet Graphic */}
            <path d="M100,100 A100,100 0 0,1 300,100 V250 H100 Z" fill="#556B2F" stroke="#000" strokeWidth="4" />
            <rect x="120" y="150" width="160" height="80" rx="10" fill="#333" /> {/* Visor area */}

            {/* Avatar in Helmet Visor */}
            <defs>
                <clipPath id="helmetClip">
                    <rect x="120" y="150" width="160" height="80" rx="10" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="120" y="100" width="160" height="160" preserveAspectRatio="xMidYMid slice" clipPath="url(#helmetClip)" />}

            {/* Checkered Scarf (Khan ran) */}
            <path d="M140,250 L120,350 L160,380 L180,250" fill="#000" opacity="0.8" />
            <path d="M160,250 L140,350 L180,380 L200,250" fill="#fff" />
            <path d="M240,250 L220,350 L260,380 L280,250" fill="#000" opacity="0.8" />
            {/* Simplified scarf */}

            {/* Stamp */}
            <circle cx="320" cy="500" r="40" fill="none" stroke="#8B0000" strokeWidth="4" transform="rotate(-20)" />
            <text x="320" y="505" textAnchor="middle" fontSize="12" fill="#8B0000" transform="rotate(-20)">VIETNAM</text>

            <rect x="50" y="400" width="300" height="80" fill="#fff" stroke="#000" strokeWidth="2" rx="5" transform="rotate(-2)" />
            <text x="200" y="440" textAnchor="middle" fontSize={getSafeFontSize(safeName, 280, 26)} fontWeight="bold" fill="#556B2F" transform="rotate(-2)">
                {safeName.toUpperCase()}
            </text>
            <text x="200" y="465" textAnchor="middle" fontSize="14" fill="#000" transform="rotate(-2)">
                {safeDesc}
            </text>
        </svg>
    );
};

// 4. Beach Vibe
const BeachTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "BEACH VIBE";
    const safeDesc = description || "Vitamin Sea";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="beachGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#87CEEB" />
                    <stop offset="0.6" stopColor="#40E0D0" />
                    <stop offset="1" stopColor="#F4A460" />
                </linearGradient>
            </defs>
            <rect width="400" height="600" fill="url(#beachGrad)" />

            {/* Sun */}
            <circle cx="350" cy="80" r="40" fill="#FFD700" opacity="0.8" />

            {/* Coconut Trees */}
            <path d="M0,400 Q50,200 150,150" stroke="#8B4513" strokeWidth="15" fill="none" />
            <path d="M400,400 Q350,200 250,150" stroke="#8B4513" strokeWidth="15" fill="none" />
            {/* Leaves */}
            <path d="M150,150 L100,100 M150,150 L120,200 M150,150 L200,120" stroke="#006400" strokeWidth="10" />
            <path d="M250,150 L300,100 M250,150 L280,200 M250,150 L200,120" stroke="#006400" strokeWidth="10" />

            {/* Avatar Frame - Sunglasses */}
            <g transform="translate(50, 250)">
                <path d="M0,0 Q70,-20 140,0 Q140,80 70,100 Q0,80 0,0 Z" fill="#333" />
                <path d="M160,0 Q230,-20 300,0 Q300,80 230,100 Q160,80 160,0 Z" fill="#333" />
                <path d="M140,10 H160" stroke="#333" strokeWidth="5" />
            </g>

            {/* Image reflection in glasses */}
            <defs>
                <clipPath id="glassL">
                    <path d="M50,250 Q120,230 190,250 Q190,330 120,350 Q50,330 50,250 Z" />
                </clipPath>
                <clipPath id="glassR">
                    <path d="M210,250 Q280,230 350,250 Q350,330 280,350 Q210,330 210,250 Z" />
                </clipPath>
            </defs>
            {userImage && (
                <>
                    <image href={userImage} x="50" y="230" width="140" height="140" preserveAspectRatio="xMidYMid slice" clipPath="url(#glassL)" opacity="0.8" />
                    <image href={userImage} x="210" y="230" width="140" height="140" preserveAspectRatio="xMidYMid slice" clipPath="url(#glassR)" opacity="0.8" />
                </>
            )}

            <text x="200" y="500" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 36)} fontWeight="bold" fill="#fff" style={{ textShadow: "2px 2px 4px #008080" }}>
                {safeName}
            </text>
            <text x="200" y="540" textAnchor="middle" fontSize="18" fill="#fff" fontWeight="bold">
                {safeDesc}
            </text>
        </svg>
    );
};

// 5. Camping Chill
const CampingTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "CAMPING CHILL";
    const safeDesc = description || "Trốn thành phố";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#191970" /> {/* Night Sky */}

            {/* Stars */}
            <circle cx="50" cy="50" r="1" fill="#fff" />
            <circle cx="150" cy="100" r="2" fill="#fff" />
            <circle cx="300" cy="50" r="1" fill="#fff" />
            <circle cx="350" cy="150" r="2" fill="#fff" />

            {/* Moon */}
            <circle cx="350" cy="80" r="30" fill="#FFFFE0" opacity="0.9" />

            {/* Mountains */}
            <path d="M0,600 L150,400 L300,600 Z" fill="#2F4F4F" />
            <path d="M200,600 L350,350 L500,600 Z" fill="#2F4F4F" />

            {/* Tent */}
            <path d="M100,600 L200,450 L300,600 Z" fill="#FF4500" />
            <path d="M200,600 L200,450" stroke="#8B0000" strokeWidth="2" /> {/* Tent pole */}

            {/* Avatar in Tent Door */}
            <path d="M180,600 L200,500 L220,600 Z" fill="#000" opacity="0.5" />
            <defs>
                <clipPath id="tentClip">
                    <path d="M180,600 L200,500 L220,600 Z" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="100" y="450" width="200" height="200" preserveAspectRatio="xMidYMid slice" clipPath="url(#tentClip)" />}

            {/* Bonfire */}
            <circle cx="200" cy="580" r="20" fill="#FFA500" opacity="0.8" filter="blur(5px)" />

            <text x="200" y="150" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 26)} fontWeight="bold" fill="#fff" fontFamily="monospace">
                {safeName.toUpperCase()}
            </text>
            <text x="200" y="180" textAnchor="middle" fontSize="14" fill="#ccc">
                {safeDesc}
            </text>
        </svg>
    );
};

// 6. Gym Rat
const GymTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "GYM RAT";
    const safeDesc = description || "No Pain No Gain";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#222" />

            {/* Dumbbell BG */}
            <rect x="50" y="50" width="300" height="10" fill="#555" rx="5" />
            <rect x="20" y="20" width="30" height="70" fill="#333" stroke="#555" strokeWidth="2" />
            <rect x="350" y="20" width="30" height="70" fill="#333" stroke="#555" strokeWidth="2" />

            {/* Avatar Circle Check */}
            <circle cx="200" cy="300" r="130" fill="none" stroke="#FF4500" strokeWidth="10" />
            <defs>
                <clipPath id="gymClip">
                    <circle cx="200" cy="300" r="120" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="80" y="180" width="240" height="240" preserveAspectRatio="xMidYMid slice" clipPath="url(#gymClip)" filter="contrast(1.2)" />}

            {/* Muscle Arm Overlay */}
            <path d="M50,450 Q100,400 150,450" stroke="#FF4500" strokeWidth="10" fill="none" strokeLinecap="round" />
            <path d="M250,450 Q300,400 350,450" stroke="#FF4500" strokeWidth="10" fill="none" strokeLinecap="round" />

            <text x="200" y="500" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 36)} fontWeight="900" fill="#fff" style={{ fontStyle: 'italic' }}>
                {safeName.toUpperCase()}
            </text>
            <text x="200" y="540" textAnchor="middle" fontSize="16" fill="#FF4500" fontWeight="bold">
                {safeDesc}
            </text>
        </svg>
    );
};

// 7. Cat Lover
const CatTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "CON SEN";
    const safeDesc = description || "Hoàng thượng vạn tuế";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#FFB6C1" />

            {/* Paw Prints */}
            <g fill="#fff" opacity="0.5">
                <circle cx="50" cy="50" r="10" /> <circle cx="40" cy="40" r="3" /> <circle cx="60" cy="40" r="3" /> <circle cx="50" cy="30" r="3" />
                <circle cx="350" cy="100" r="10" /> <circle cx="340" cy="90" r="3" /> <circle cx="360" cy="90" r="3" /> <circle cx="350" cy="80" r="3" />
                <circle cx="100" cy="500" r="10" /> <circle cx="90" cy="490" r="3" /> <circle cx="110" cy="490" r="3" /> <circle cx="100" cy="480" r="3" />
            </g>

            {/* Cat Ears Frame */}
            <path d="M100,200 L120,120 L160,180 H240 L280,120 L300,200" fill="#fff" stroke="#FF69B4" strokeWidth="4" strokeLinejoin="round" />
            <rect x="100" y="200" width="200" height="200" fill="#fff" stroke="#FF69B4" strokeWidth="4" rx="20" />

            <defs>
                <clipPath id="catClip">
                    <rect x="104" y="204" width="192" height="192" rx="16" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="100" y="200" width="200" height="200" preserveAspectRatio="xMidYMid slice" clipPath="url(#catClip)" />}

            {/* Whiskers */}
            <path d="M100,300 H50 M100,320 H60" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            <path d="M300,300 H350 M300,320 H340" stroke="#fff" strokeWidth="4" strokeLinecap="round" />

            <text x="200" y="450" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 30)} fontWeight="bold" fill="#fff" fontFamily="Comic Sans MS, cursive">
                {safeName}
            </text>
            <text x="200" y="480" textAnchor="middle" fontSize="14" fill="#fff">
                {safeDesc}
            </text>
        </svg>
    );
};

// 8. Dog Lover
const DogTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "NGƯỜI YÊU CHÓ";
    const safeDesc = description || "Gâu Gâu";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#D2691E" />

            {/* Bones pattern */}
            <pattern id="bonePattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M10,20 Q5,15 10,10 Q15,5 20,10 L40,20 Q45,25 40,30 Q35,35 30,30 L10,20" fill="#DEB887" opacity="0.3" transform="rotate(45)" />
            </pattern>
            <rect width="400" height="600" fill="url(#bonePattern)" />

            {/* Dog House Shape Frame */}
            <path d="M100,200 L200,100 L300,200 V400 H100 V200 Z" fill="#fff" stroke="#8B4513" strokeWidth="5" />

            <defs>
                <clipPath id="dogClip">
                    <path d="M105,200 L200,105 L295,200 V395 H105 V200 Z" />
                </clipPath>
            </defs>
            {userImage && <image href={userImage} x="100" y="100" width="200" height="300" preserveAspectRatio="xMidYMid slice" clipPath="url(#dogClip)" />}

            <text x="200" y="460" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 30)} fontWeight="bold" fill="#fff" style={{ textShadow: "2px 2px 0px #8B4513" }}>
                {safeName}
            </text>
            <text x="200" y="500" textAnchor="middle" fontSize="14" fill="#FFE4B5">
                {safeDesc}
            </text>
        </svg>
    );
};

// 9. Minimalist White
const MinimalistTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "MINIMALIST";
    const safeDesc = description || "Less is more";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#fff" />

            {/* Extremely simple center image */}
            {userImage ? (
                <image href={userImage} x="100" y="200" width="200" height="200" preserveAspectRatio="xMidYMid slice" />
            ) : (
                <rect x="150" y="250" width="100" height="100" fill="#eee" />
            )}

            <text x="200" y="420" textAnchor="middle" fontSize="12" fill="#000" letterSpacing="5" style={{ textTransform: "uppercase" }}>
                {safeName}
            </text>
            <text x="200" y="440" textAnchor="middle" fontSize="10" fill="#999">
                {safeDesc}
            </text>
        </svg>
    );
};

export const TravelTemplates = {
    'food-reviewer': FoodTemplate,
    'coffee-holic': CoffeeTemplate,
    'phuot-thu': TravelTemplate,
    'beach-vibe': BeachTemplate,
    'camping-chill': CampingTemplate,
    'gym-rat': GymTemplate,
    'cat-lover': CatTemplate,
    'dog-lover': DogTemplate,
    'minimalist-white': MinimalistTemplate,
};
