
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

// 3. Phuot Thu (Giant Backpack Redesign)
const TravelTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "PHƯỢT THỦ";
    const safeDesc = description || "Đi để trở về (nếu không lạc đường)";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            {/* 1. NỀN (Adventure Background) */}
            <rect width="400" height="600" fill="#f0fdf4" /> {/* Light Green mist */}

            {/* Topographic Pattern */}
            <pattern id="topoMap" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0,20 Q20,0 50,20 T100,20 M0,50 Q40,30 60,60 T100,50 M0,80 Q30,70 50,90 T100,80"
                    fill="none" stroke="#dcfce7" strokeWidth="2" />
            </pattern>
            <rect width="400" height="600" fill="url(#topoMap)" />

            {/* Mountain Silhouettes */}
            <path d="M0,600 L100,450 L200,600 Z" fill="#14532d" opacity="0.8" />
            <path d="M150,600 L280,400 L400,600 Z" fill="#166534" opacity="0.9" />
            <path d="M-50,600 L150,350 L350,600 Z" fill="#14532d" opacity="0.6" />

            {/* 2. KHUNG AVATAR CHIẾC BALO KHỔNG LỒ */}
            <g transform="translate(40, 100)">
                {/* Backpack Frame Shape */}
                <path d="M20,50 C20,20 50,0 160,0 C270,0 300,20 300,50 V320 C300,350 280,380 250,380 H70 C40,380 20,350 20,320 Z"
                    fill="#333" stroke="#064e3b" strokeWidth="4" />

                {/* Main Compartment (Avatar Container) */}
                <defs>
                    <clipPath id="backpackClip">
                        <path d="M30,55 C30,30 60,10 160,10 C260,10 290,30 290,55 V315 C290,340 270,370 250,370 H70 C50,370 30,340 30,315 Z" />
                    </clipPath>
                </defs>

                {/* Avatar */}
                <rect x="25" y="5" width="270" height="370" fill="#a7f3d0" rx="30" />
                {userImage ? (
                    <image
                        href={userImage}
                        x="20" y="0" width="280" height="380"
                        preserveAspectRatio="xMidYMid slice"
                        clipPath="url(#backpackClip)"
                    />
                ) : (
                    <text x="160" y="200" textAnchor="middle" fontSize="60">🎒</text>
                )}

                {/* Backpack Details Overlays (Straps, Zippers) */}
                {/* Top Flap Shadow */}
                <path d="M20,80 Q160,100 300,80 V50 C300,20 270,0 160,0 C50,0 20,20 20,50 Z"
                    fill="#065f46" opacity="0.9" style={{ mixBlendMode: 'multiply' }} />

                {/* Straps/Buckles */}
                <rect x="100" y="80" width="30" height="300" fill="#064e3b" opacity="0.4" rx="5" />
                <rect x="190" y="80" width="30" height="300" fill="#064e3b" opacity="0.4" rx="5" />

                {/* Horizontal Straps */}
                <rect x="20" y="250" width="280" height="15" fill="#14532d" opacity="0.8" />
                <rect x="140" y="245" width="40" height="25" rx="5" fill="#fbbf24" stroke="#000" strokeWidth="2" /> {/* Buckle */}

                {/* Side Pockets (Mesh hint) */}
                <path d="M0,200 L20,200 V350 H0 Z" fill="#047857" opacity="0.8" />
                <path d="M320,200 L300,200 V350 H320 Z" fill="#047857" opacity="0.8" />
            </g>

            {/* 3. TẤM BIỂN CHỈ ĐƯỜNG (Name Tag) */}
            <g transform="translate(50, 480)">
                {/* Post */}
                <rect x="140" y="-30" width="20" height="150" fill="#78350f" stroke="#451a03" strokeWidth="2" />

                {/* Sign Board (Arrow shape) */}
                <path d="M0,10 L280,10 L320,40 L280,70 L0,70 L20,40 Z"
                    fill="#facc15" stroke="#854d0e" strokeWidth="4" />
                {/* Screw holes */}
                <circle cx="30" cy="40" r="4" fill="#854d0e" />
                <circle cx="270" cy="40" r="4" fill="#854d0e" />

                {/* Name Text */}
                <foreignObject x="30" y="15" width="260" height="50">
                    <div className="w-full h-full flex items-center justify-center text-black font-black text-2xl uppercase"
                        style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '1px' }}>
                        {safeName}
                    </div>
                </foreignObject>
            </g>

            {/* 4. QUOTE & CHI TIẾT PHỤ */}
            {/* Quote below sign */}
            <text x="200" y="575" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ecfccb"
                style={{ textShadow: '1px 1px 2px #14532d' }}>
                "{safeDesc}"
            </text>

            {/* Compass (Top Right) */}
            <g transform="translate(340, 60)">
                <circle r="35" fill="#f1f5f9" stroke="#334155" strokeWidth="4" />
                <path d="M0,-30 L5,0 L0,30 L-5,0 Z" fill="#ef4444" /> {/* Needle */}
                <circle r="3" fill="#334155" />
                <text x="0" y="-20" textAnchor="middle" fontSize="8" fontWeight="bold">N</text>
                <text x="0" y="25" textAnchor="middle" fontSize="8" fontWeight="bold">S</text>
            </g>

            {/* Travel Stickers on Backpack */}
            <g transform="translate(80, 160) rotate(-15)">
                <rect width="60" height="30" fill="#f43f5e" rx="2" opacity="0.9" />
                <text x="30" y="20" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">HANOI</text>
            </g>
            <g transform="translate(260, 350) rotate(10)">
                <circle r="25" fill="#3b82f6" opacity="0.9" />
                <text x="0" y="5" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">WORLD</text>
            </g>
        </svg>
    );
};

// 4. Beach Vibe
const BeachTemplate: React.FC<TemplateProps> = ({ userName, userImage }) => {
    const safeName = userName || "BEACH VIBE";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="polka-dots-v2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" fill="#fdba74" />
                </pattern>
                <linearGradient id="sunset-grad-2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="50%" stopColor="#db2777" />
                    <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                {/* Clips for new glasses position */}
                <clipPath id="lens-left-v2">
                    <rect x="46" y="126" width="138" height="118" rx="20" />
                </clipPath>
                <clipPath id="lens-right-v2">
                    <rect x="216" y="126" width="138" height="118" rx="20" />
                </clipPath>
            </defs>

            {/* 1. LỚP NỀN (Yellow + Polka Dots) */}
            <rect x="0" y="0" width="400" height="600" fill="#fde047" />
            <rect x="0" y="0" width="400" height="600" fill="url(#polka-dots-v2)" opacity="0.6" />

            {/* NEW: Sticker Vitamin Sea (Top Left, Rotated) */}
            <g transform="translate(20, 30) rotate(-10)">
                <rect width="150" height="60" fill="white" stroke="black" strokeWidth="2" rx="5" />
                <foreignObject x="0" y="0" width="150" height="60">
                    <div className="w-full h-full flex items-center justify-center text-center p-1"
                        style={{
                            fontFamily: 'cursive, sans-serif',
                            fontSize: '12px',
                            lineHeight: '1.2',
                            color: 'black',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        Vitamin Sea là liều thuốc chữa lành duy nhất
                    </div>
                </foreignObject>
            </g>

            {/* 2. KÍNH MÁT (y=120, x=40, width=320) */}
            <g>
                {/* Frame Left */}
                <rect x="40" y="120" width="150" height="130" rx="25" fill="black" />
                {/* Frame Right */}
                <rect x="210" y="120" width="150" height="130" rx="25" fill="black" />
                {/* Bridge */}
                <rect x="190" y="140" width="20" height="15" fill="black" />

                {/* Left Lens (User Image + Glint) */}
                <rect x="46" y="126" width="138" height="118" rx="20" fill="#eee" />
                {userImage ? (
                    <image
                        href={userImage}
                        x="46" y="126" width="138" height="118"
                        preserveAspectRatio="xMidYMid slice"
                        clipPath="url(#lens-left-v2)"
                    />
                ) : (
                    <text x="115" y="200" textAnchor="middle" fontSize="40">🌴</text>
                )}
                {/* Glint effect on Left Lens */}
                <path d="M50,130 L100,130 L70,240 L50,200 Z" fill="white" opacity="0.15" clipPath="url(#lens-left-v2)" />
                <path d="M110,130 L140,130 L120,180 Z" fill="white" opacity="0.15" clipPath="url(#lens-left-v2)" />

                {/* Right Lens */}
                <rect x="216" y="126" width="138" height="118" rx="20" fill="url(#sunset-grad-2)" />
                <circle cx="285" cy="160" r="25" fill="#fcd34d" />
            </g>

            {/* 3. SÓNG BIỂN (y=500 to 600) */}
            <path d="M0,500 L50,550 L100,500 L150,550 L200,500 L250,550 L300,500 L350,550 L400,500 V600 H0 Z" fill="#22d3ee" />
            <path d="M0,550 L50,600 L100,550 L150,600 L200,550 L250,600 L300,550 L350,600 L400,550 V600 H0 Z" fill="#0ea5e9" opacity="0.7" />

            {/* 4. VÁN LƯỚT SÓNG & TÊN (Expanded width: 360px, x=20, y=420) */}
            <g>
                {/* Surfboard Body */}
                <rect x="20" y="420" width="360" height="70" rx="35" fill="#ea580c" stroke="black" strokeWidth="5" />

                {/* Decorative Stripes */}
                <rect x="60" y="420" width="10" height="70" fill="white" opacity="0.8" />
                <rect x="330" y="420" width="10" height="70" fill="white" opacity="0.8" />

                {/* Text Container */}
                <foreignObject x="20" y="420" width="360" height="70">
                    <div className="w-full h-full flex items-center justify-center text-white font-black text-2xl uppercase"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            color: 'white',
                            fontWeight: 900,
                            fontSize: '24px',
                            textTransform: 'uppercase',
                            fontFamily: 'sans-serif',
                            textShadow: '2px 2px 0px rgba(0,0,0,0.2)'
                        }}>
                        {safeName}
                    </div>
                </foreignObject>
            </g>
        </svg>
    );
};

// 5. Camping Chill (Night Camping Redesign)
const CampingTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "CAMPING CHILL";
    const safeDesc = description || "Ra rừng ở cho muỗi đốt chơi";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            {/* 1. BỐ CỤC NỀN */}
            {/* Night Sky */}
            <rect width="400" height="600" fill="#0f172a" />

            {/* Stars (Randomly scattered) */}
            <g fill="#fff">
                <circle cx="20" cy="30" r="1" opacity="0.8" /> <circle cx="50" cy="80" r="1" opacity="0.6" />
                <circle cx="80" cy="20" r="1" opacity="0.9" /> <circle cx="120" cy="60" r="1" opacity="0.7" />
                <circle cx="150" cy="30" r="1" opacity="0.5" /> <circle cx="180" cy="90" r="1" opacity="0.8" />
                <circle cx="220" cy="20" r="1" opacity="0.4" /> <circle cx="250" cy="70" r="1" opacity="0.9" />
                <circle cx="290" cy="40" r="1" opacity="0.6" /> <circle cx="330" cy="20" r="1" opacity="0.8" />
                <circle cx="360" cy="60" r="1" opacity="0.5" /> <circle cx="390" cy="90" r="1" opacity="0.7" />
                {/* More stars lower down */}
                <circle cx="30" cy="150" r="1" opacity="0.5" /> <circle cx="370" cy="180" r="1" opacity="0.6" />
                <circle cx="100" cy="200" r="1" opacity="0.4" /> <circle cx="300" cy="220" r="1" opacity="0.5" />
                <circle cx="10" cy="300" r="1" opacity="0.3" /> <circle cx="380" cy="280" r="1" opacity="0.4" />
                <circle cx="60" cy="400" r="1" opacity="0.5" /> <circle cx="340" cy="380" r="1" opacity="0.6" />
            </g>

            {/* Moon */}
            <circle cx="320" cy="80" r="40" fill="#fef08a" opacity="0.9" />

            {/* 2. CHIẾC LỀU KHỔNG LỒ (Hero Element) */}
            <defs>
                {/* Clip path for avatar inside the tent triangle */}
                <clipPath id="tentTriangleClip">
                    {/* Slightly smaller triangle to fit inside the border */}
                    <path d="M200,165 L55,512 L345,512 Z" />
                </clipPath>
            </defs>

            {/* Tent Main Shape */}
            {/* Background of the tent (inside) */}
            <path d="M200,150 L40,520 L360,520 Z" fill="#333" stroke="#000" strokeWidth="8" strokeLinejoin="round" />

            {/* Avatar Image (Occupies 70%+) */}
            {userImage ? (
                <image
                    href={userImage}
                    x="40" y="150" width="320" height="370"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#tentTriangleClip)"
                />
            ) : (
                <text x="200" y="400" textAnchor="middle" fontSize="60">⛺</text>
            )}

            {/* Tent Flaps/Overlays to make it look like a tent */}
            <path d="M200,150 L40,520 L120,520 L200,150" fill="#f97316" opacity="0.9" style={{ mixBlendMode: 'multiply' }} />
            <path d="M200,150 L360,520 L280,520 L200,150" fill="#ea580c" opacity="0.9" style={{ mixBlendMode: 'multiply' }} />


            {/* 3. FOREGROUND (Bonfire & Bushes) */}
            {/* Bonfire */}
            <g transform="translate(180, 500)">
                <circle cx="20" cy="20" r="25" fill="#ef4444" opacity="0.6" filter="blur(8px)" />
                <path d="M10,40 L20,10 L30,40 Z" fill="#facc15" />
                <path d="M15,40 L25,15 L35,40 Z" fill="#ef4444" />
                <path d="M5,40 L15,20 L25,40 Z" fill="#f97316" />
                {/* Logs */}
                <line x1="10" y1="40" x2="30" y2="40" stroke="#78350f" strokeWidth="4" />
                <line x1="10" y1="40" x2="30" y2="35" stroke="#78350f" strokeWidth="4" transform="rotate(20, 20, 40)" />
                <line x1="10" y1="40" x2="30" y2="35" stroke="#78350f" strokeWidth="4" transform="rotate(-20, 20, 40)" />
            </g>

            {/* Bushes/Mountains */}
            <path d="M0,600 L0,550 Q30,520 60,550 T120,600 Z" fill="#1e293b" />
            <path d="M400,600 L400,550 Q370,520 340,550 T280,600 Z" fill="#1e293b" />


            {/* 4. HIỂN THỊ TÊN & CAPTION */}
            {/* Wooden Sign for Name */}
            <g transform="translate(50, 520)">
                {/* Sign Board */}
                <rect x="0" y="0" width="300" height="50" rx="5" fill="#78350f" stroke="#451a03" strokeWidth="3" />
                {/* Wood Grain Detail (Simple lines) */}
                <path d="M20,10 L280,10 M40,40 L260,40" stroke="#92400e" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                {/* Nails */}
                <circle cx="10" cy="10" r="3" fill="#451a03" /> <circle cx="290" cy="10" r="3" fill="#451a03" />
                <circle cx="10" cy="40" r="3" fill="#451a03" /> <circle cx="290" cy="40" r="3" fill="#451a03" />

                {/* Name Text */}
                <foreignObject x="10" y="5" width="280" height="40">
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-2xl"
                        style={{ fontFamily: 'monospace', textShadow: '1px 1px 0 #000' }}>
                        {safeName.toUpperCase()}
                    </div>
                </foreignObject>
            </g>

            {/* Caption Tag (Paper Slip style below sign) */}
            <g transform="translate(100, 565)">
                {/* Paper bg */}
                <rect x="0" y="0" width="200" height="25" fill="#f1f5f9" rx="2" transform="rotate(-2)" />
                {/* Caption Text */}
                <foreignObject x="0" y="0" width="200" height="25" transform="rotate(-2)">
                    <div className="w-full h-full flex items-center justify-center text-slate-600 italic text-xs font-serif">
                        {safeDesc}
                    </div>
                </foreignObject>
                {/* Pin */}
                <circle cx="100" cy="0" r="3" fill="#ef4444" />
            </g>
        </svg>
    );
};

// 6. Gym Rat (Neubrutalism Redesign)
const GymTemplate: React.FC<TemplateProps> = ({ userName, userImage }) => {
    const safeName = userName || "GYM RAT";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="gymPlateClip">
                    <circle cx="200" cy="260" r="120" />
                </clipPath>
                {/* Lightning Gradient */}
                <linearGradient id="neonBolt" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#facc15" />
                    <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
            </defs>

            {/* 1. NỀN & HIỆU ỨNG (Bottom Layers) */}
            <rect width="400" height="600" fill="#1c1917" />

            {/* Lightning Bolts - Burst from center (approx 200, 260) */}
            <g opacity="0.8">
                <path d="M200,260 L50,150 L80,180 L20,100 L200,260" fill="#facc15" opacity="0.5" />
                <path d="M200,260 L350,150 L320,180 L380,100 L200,260" fill="#facc15" opacity="0.5" />
                <path d="M200,260 L100,500 L120,480 L80,550 L200,260" fill="#facc15" opacity="0.3" />
                <path d="M200,260 L300,500 L280,480 L320,550 L200,260" fill="#facc15" opacity="0.3" />
            </g>

            {/* 2. KHUNG AVATAR ĐĨA TẠ (Central Hero) */}
            {/* Main Plate */}
            <circle cx="200" cy="260" r="140" fill="#4b5563" stroke="black" strokeWidth="10" />
            {/* Inner Ring Detail */}
            <circle cx="200" cy="260" r="125" fill="none" stroke="#374151" strokeWidth="2" />
            {/* Cracks */}
            <path d="M200,120 L195,140 M200,120 L210,135" stroke="black" strokeWidth="3" fill="none" />
            <path d="M340,260 L320,255 M340,260 L325,270" stroke="black" strokeWidth="3" fill="none" />
            <path d="M200,400 L205,380 M200,400 L190,385" stroke="black" strokeWidth="3" fill="none" />

            {/* Avatar Image */}
            <circle cx="200" cy="260" r="120" fill="#333" />
            {userImage ? (
                <image
                    href={userImage}
                    x="80" y="140" width="240" height="240"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#gymPlateClip)"
                />
            ) : (
                <text x="200" y="280" textAnchor="middle" fontSize="60">💪</text>
            )}

            {/* Chains Hanging */}
            <g stroke="#9ca3af" strokeWidth="6" fill="none">
                {/* Left Chain */}
                <path d="M50,0 V100" strokeDasharray="15 5" />
                <circle cx="50" cy="110" r="10" stroke="#4b5563" strokeWidth="4" />
                {/* Right Chain */}
                <path d="M350,0 V120" strokeDasharray="15 5" />
                <circle cx="350" cy="130" r="10" stroke="#4b5563" strokeWidth="4" />
            </g>


            {/* 3. KHUNG CHỨA TÊN (The Heavy Banner) */}
            {/* Hard Shadow */}
            <rect x="38" y="468" width="340" height="80" rx="4" fill="black" opacity="1" />
            {/* Main Banner */}
            <rect x="30" y="460" width="340" height="80" rx="4" fill="#facc15" stroke="black" strokeWidth="8" />

            {/* 4. HIỂN THỊ TÊN USER */}
            <foreignObject x="30" y="460" width="340" height="80">
                <div className="w-full h-full flex items-center justify-center text-black font-black text-3xl uppercase italic"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        color: 'black',
                        fontWeight: 900,
                        fontSize: '30px',
                        fontStyle: 'italic',
                        textTransform: 'uppercase',
                        fontFamily: 'sans-serif'
                    }}>
                    {safeName}
                </div>
            </foreignObject>

            {/* 5. CHI TIẾT PHỤ (Bottom Text) */}
            <text x="50" y="580" textAnchor="start" fontSize="16" fontFamily="monospace" fontWeight="bold" fill="#facc15" letterSpacing="2">NO PAIN NO GAIN</text>

            {/* 6. sticker caption (Sticker Style) - REMOVED */}
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
