
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

// 2. Deadline Reaper
const ReaperTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "DEADLINE ĐẾN";
    const safeDesc = description || "Tick tock...";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#111" />

            {/* Scythe */}
            <path d="M300,100 Q200,0 100,100 L120,120 Q200,50 280,120 Z" fill="#C0C0C0" stroke="#000" strokeWidth="1" />
            <path d="M280,110 L200,500" stroke="#8B4513" strokeWidth="8" />

            {/* Avatar in Hood Shadow */}
            <path d="M100,150 Q200,0 300,150 V300 H100 Z" fill="#000" stroke="#333" strokeWidth="2" />
            {userImage && <image href={userImage} x="130" y="150" width="140" height="140" preserveAspectRatio="xMidYMid slice" opacity="0.8" />}

            {/* Hourglass */}
            <g transform="translate(320, 450)">
                <path d="M10,0 L30,0 L30,40 L10,40 Z" fill="#DAA520" />
                <path d="M10,0 L0,10 L20,30 L40,10 L30,0" fill="none" stroke="#DAA520" strokeWidth="2" />
                {/* Simplified hourglass */}
                <path d="M10,0 H30 L20,20 L30,40 H10 L20,20 Z" fill="none" stroke="#DAA520" strokeWidth="2" />
                <circle cx="20" cy="30" r="5" fill="#DAA520" /> {/* Sand */}
            </g>

            <text x="200" y="400" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 30)} fontWeight="bold" fill="#FF0000" fontFamily="serif">
                {safeName.toUpperCase()}
            </text>
            <text x="200" y="550" textAnchor="middle" fontSize="18" fill="#fff" fontFamily="serif">
                {safeDesc}
            </text>

            <text x="200" y="580" textAnchor="middle" fontSize="12" fill="#666">
                TIME IS RUNNING OUT...
            </text>
        </svg>
    );
}

// 3. Tram Cam Tuoi Tre (Battery Low)
const TramCamTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "LOW BATTERY";
    const safeDesc = description || "System shutting down...";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#778899" />

            {/* Downward Graph */}
            <path d="M50,300 L120,350 L180,320 L250,450 L350,550" fill="none" stroke="#FF4500" strokeWidth="5" strokeDasharray="10 5" />
            <circle cx="350" cy="550" r="8" fill="#FF4500" />

            {/* Battery Icon */}
            <g transform="translate(150, 400)">
                <rect x="0" y="0" width="100" height="180" rx="10" fill="none" stroke="#fff" strokeWidth="8" />
                <rect x="30" y="-15" width="40" height="20" fill="#fff" />
                {/* 1% red level */}
                <rect x="10" y="160" width="80" height="10" fill="#FF0000" />
                <text x="50" y="100" textAnchor="middle" fontSize="40" fill="#fff" fontWeight="bold">1%</text>
            </g>

            {/* Avatar Frame */}
            <rect x="80" y="80" width="240" height="240" fill="#fff" stroke="#000" strokeWidth="4" />
            {userImage && <image href={userImage} x="80" y="80" width="240" height="240" preserveAspectRatio="xMidYMid slice" filter="grayscale(0.8)" />}

            <text x="200" y="60" textAnchor="middle" fontSize="24" fontFamily="Arial" fontWeight="bold" fill="#fff">
                TRẠM SẠC CẢM XÚC
            </text>

            <text x="200" y="360" textAnchor="middle" fontSize={getSafeFontSize(safeName, 380, 26)} fontWeight="bold" fill="#000">
                {safeName}
            </text>
            <text x="50" y="580" fontSize="14" fill="#fff" fontStyle="italic">
                "{safeDesc}"
            </text>
        </svg>
    );
}

// 4. Introvert Cave
const CaveTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "HƯỚNG NỘI";
    const safeDesc = description || "Do Not Disturb";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="caveGrad" cx="0.5" cy="0.5" r="0.8">
                    <stop offset="0.3" stopColor="#000" />
                    <stop offset="1" stopColor="#2F4F4F" />
                </radialGradient>
            </defs>
            <rect width="400" height="600" fill="url(#caveGrad)" />

            {/* Cave Entrance */}
            <path d="M0,600 V0 H400 V600 H350 Q200,300 50,600 Z" fill="#1a1a1a" />

            {/* Avatar visible in the dark center */}
            {userImage && <image href={userImage} x="100" y="200" width="200" height="200" preserveAspectRatio="xMidYMid slice" opacity="0.6" />}

            {/* Hanging Sign */}
            <path d="M150,50 L150,150" stroke="#D2691E" strokeWidth="4" />
            <rect x="100" y="150" width="200" height="80" fill="#CD853F" stroke="#8B4513" strokeWidth="4" rx="5" />
            <text x="200" y="180" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#5c3a21">DO NOT DISTURB</text>
            <text x="200" y="210" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#5c3a21">ĐANG SẠC XÃ HỘI</text>

            <text x="200" y="500" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 24)} fill="#778899" fontWeight="bold">
                {safeName}
            </text>
            <text x="200" y="540" textAnchor="middle" fontSize="14" fill="#666" fontStyle="italic">
                {safeDesc}
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

// 7. Zombie Cong So
const ZombieTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "ZOMBIE";
    const safeDesc = description || "Brains...";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#556B2F" /> {/* Olive Drab */}

            {/* Skin Texture/Stitches */}
            <path d="M50,50 L80,80 M60,70 L70,60 M120,10 L140,50 M125,40 L135,20" stroke="#000" strokeWidth="2" />

            {/* Avatar Frame - Torn edges */}
            <path d="M80,100 L320,100 L310,150 L320,340 L80,340 L90,200 Z" fill="#2F4F4F" stroke="#000" strokeWidth="2" />
            {userImage && <image href={userImage} x="85" y="105" width="230" height="230" preserveAspectRatio="xMidYMid slice" filter="grayscale(1) sepia(0.5) hue-rotate(90deg)" />}

            {/* Eyes Bags Icon */}
            <g transform="translate(150, 360)">
                <ellipse cx="50" cy="50" rx="40" ry="20" fill="none" stroke="#000" strokeWidth="2" />
                <circle cx="50" cy="50" r="5" fill="#000" />
                <path d="M20,60 Q50,90 80,60" stroke="#333" strokeWidth="3" fill="none" />
            </g>

            <text x="200" y="480" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 30)} fontWeight="bold" fill="#000" fontFamily="Chalkduster, fantasy">
                {safeName}
            </text>
            <text x="200" y="520" textAnchor="middle" fontSize="16" fill="#F0E68C">
                BRAINS... I MEAN, COFFEE...
            </text>
            <text x="200" y="560" textAnchor="middle" fontSize="14" fill="#F0E68C" fontStyle="italic">
                {safeDesc}
            </text>
        </svg>
    );
}

// 8. R.I.P Luong
const RipTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "R.I.P LƯƠNG";
    const safeDesc = description || "Gone too soon";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#696969" />

            {/* Tombstone */}
            <path d="M50,600 V200 Q200,50 350,200 V600 Z" fill="#A9A9A9" stroke="#000" strokeWidth="4" />

            {/* Avatar on stone */}
            <defs>
                <clipPath id="stoneOval">
                    <ellipse cx="200" cy="250" rx="80" ry="100" />
                </clipPath>
            </defs>
            <ellipse cx="200" cy="250" rx="85" ry="105" fill="#696969" />
            {userImage && <image href={userImage} x="120" y="150" width="160" height="200" preserveAspectRatio="xMidYMid slice" clipPath="url(#stoneOval)" filter="grayscale(1)" />}

            <text x="200" y="400" textAnchor="middle" fontSize="40" fontWeight="bold" fill="#000" fontFamily="serif">R.I.P</text>
            <text x="200" y="440" textAnchor="middle" fontSize="20" fill="#333" fontFamily="serif">LƯƠNG THÁNG NÀY</text>

            <text x="200" y="480" textAnchor="middle" fontSize={getSafeFontSize(safeName, 280, 24)} fontWeight="bold" fill="#000" fontFamily="serif">
                {safeName}
            </text>
            <text x="200" y="520" textAnchor="middle" fontSize="14" fill="#000" fontStyle="italic">
                "Vừa đến đã đi"
            </text>
            <text x="200" y="550" textAnchor="middle" fontSize="14" fill="#000">
                {safeDesc}
            </text>
        </svg>
    );
}

// 9. To Nguoi Tieu Dung (Fragile)
const ConsumerTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "NGƯỜI TIÊU DÙNG";
    const safeDesc = description || "Handle with care";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#F5F5DC" /> {/* Cardboard color */}

            {/* Texture */}
            <pattern id="cardboard" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#D2B48C" />
            </pattern>
            <rect width="400" height="600" fill="url(#cardboard)" />

            {/* Frame */}
            <rect x="50" y="100" width="300" height="300" fill="#fff" stroke="#000" strokeWidth="2" />
            {userImage && <image href={userImage} x="60" y="110" width="280" height="280" preserveAspectRatio="xMidYMid slice" />}

            {/* Sticker Fragile */}
            <g transform="translate(250, 350) rotate(-15)">
                <rect x="0" y="0" width="120" height="60" fill="#FF0000" />
                <rect x="5" y="5" width="110" height="50" fill="none" stroke="#fff" strokeWidth="2" />
                <path d="M25,15 L35,45 M35,15 L25,45" stroke="#fff" strokeWidth="3" /> {/* Broken glass */}
                <text x="75" y="35" textAnchor="middle" fontSize="18" fill="#fff" fontWeight="bold">FRAGILE</text>
            </g>

            {/* Barcode */}
            <g transform="translate(50, 520)">
                <rect x="0" y="0" width="300" height="50" fill="#fff" />
                <path d="M10,10 V40 M20,10 V40 M25,10 V40 M40,10 V40 M50,10 V40 M60,10 V40 M80,10 V40" stroke="#000" strokeWidth="2" />
                <text x="150" y="45" textAnchor="middle" fontSize="12" fontFamily="monospace">{safeName.toUpperCase().split('').map(c => c.charCodeAt(0)).join('').substring(0, 12)}</text>
            </g>

            <text x="200" y="50" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#000" fontFamily="Impact, sans-serif">
                HANDLE WITH CARE
            </text>
            <text x="200" y="450" textAnchor="middle" fontSize={getSafeFontSize(safeName, 300, 24)} fontWeight="bold" fill="#000">
                {safeName}
            </text>
            <text x="200" y="480" textAnchor="middle" fontSize="14" fill="#333">
                {safeDesc}
            </text>
        </svg>
    );
}

// 10. Drama Is Coming
const DramaTemplate: React.FC<TemplateProps> = ({ userName, userImage, description }) => {
    const safeName = userName || "DRAMA QUEEN";
    const safeDesc = description || "Winter is coming...";

    return (
        <svg width="400" height="600" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#708090" />
                    <stop offset="0.5" stopColor="#C0C0C0" />
                    <stop offset="1" stopColor="#708090" />
                </linearGradient>
            </defs>
            <rect width="400" height="600" fill="#2F4F4F" />

            {/* Swords Background */}
            <path d="M200,300 L50,550 M200,300 L350,550 M200,300 L50,50 M200,300 L350,50" stroke="#708090" strokeWidth="10" />

            {/* Avatar Framed by swords/throne chair back */}
            <path d="M100,50 L120,200 H280 L300,50" fill="none" stroke="url(#metalGrad)" strokeWidth="5" />
            {userImage && <image href={userImage} x="100" y="100" width="200" height="250" preserveAspectRatio="xMidYMid slice" style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)' }} />}

            {/* Text GOT Style */}
            <rect x="0" y="400" width="400" height="200" fill="linear-gradient(to top, #000, transparent)" />
            <text x="200" y="480" textAnchor="middle" fontSize="30" fontWeight="bold" fill="#fff" fontFamily="serif" style={{ textShadow: "0px 2px 4px #000" }}>
                DRAMA IS COMING
            </text>

            <path d="M50,500 H350" stroke="#C0C0C0" strokeWidth="2" />

            <text x="200" y="540" textAnchor="middle" fontSize={getSafeFontSize(safeName, 350, 24)} fontWeight="normal" fill="#C0C0C0" fontFamily="serif">
                {safeName.toUpperCase()}
            </text>
            <text x="200" y="570" textAnchor="middle" fontSize="14" fill="#aaa" fontStyle="italic">
                {safeDesc}
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
