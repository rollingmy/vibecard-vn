import React from 'react';

interface TemplateData {
    id: string;
    name: string;
    color: string;
    description: string;
}

interface CardThumbnailProps {
    template: TemplateData;
}

const CardThumbnail: React.FC<CardThumbnailProps> = ({ template }) => {
    // 1. Determine Mock Data based on ID
    let mockName = "USER NAME";
    let mockImage = ""; // Use emoji or empty for fallback

    switch (template.id) {
        case 'chien-than-san-sale':
            mockName = "VIBE THỦ";
            break;
        case 'simp-lord':
            mockName = "SIMP CHÚA";
            break;
        case 'the-bai-ma-thuat':
            mockName = "YUGI CON";
            break;
        case 'bang-khen-thoat-e':
            mockName = "NGƯỜI ĐƯỢC CHỌN";
            break;
        case 'can-cuoc-gen-z':
            mockName = "DAN DUNG DE";
            break;
    }

    // Helper for font size
    const nameFontSize = 24;

    return (
        <div className="w-full h-full select-none pointer-events-none bg-white">
            <svg
                viewBox="0 0 300 400"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {(() => {
                    switch (template.id) {
                        // ===================================
                        // 1. CHIẾN THẦN SĂN SALE (Receipt Theme)
                        // ===================================
                        case 'chien-than-san-sale':
                            return (
                                <>
                                    <defs>
                                        <clipPath id={`avatar-clip-sawtooth-${template.id}`}>
                                            <rect x="75" y="160" width="150" height="150" rx="10" />
                                        </clipPath>
                                    </defs>

                                    {/* Paper Background */}
                                    <rect x="0" y="0" width="300" height="390" fill="#FFF8DC" />

                                    {/* Jagged Bottom Edge */}
                                    <polygon points="0,390 15,400 30,390 45,400 60,390 75,400 90,390 105,400 120,390 135,400 150,390 165,400 180,390 195,400 210,390 225,400 240,390 255,400 270,390 285,400 300,390 300,0 0,0" fill="#FFF8DC" />

                                    {/* Yellow Header */}
                                    <rect width="300" height="80" fill="#FFD700" />
                                    <line x1="0" y1="80" x2="300" y2="80" stroke="black" strokeWidth="4" strokeDasharray="10,5" />

                                    {/* Title */}
                                    <text x="150" y="50" textAnchor="middle" fontFamily="monospace" fontWeight="900" fontSize="28" fill="black" letterSpacing="-1" dominantBaseline="middle">
                                        BILL: SĂN SALE
                                    </text>

                                    {/* Decor: Barcode */}
                                    <g transform="translate(50, 340)">
                                        <rect width="5" height="30" x="0" fill="black" />
                                        <rect width="2" height="30" x="8" fill="black" />
                                        <rect width="8" height="30" x="14" fill="black" />
                                        <rect width="3" height="30" x="25" fill="black" />
                                        <rect width="6" height="30" x="32" fill="black" />
                                        <rect width="4" height="30" x="42" fill="black" />
                                        <rect width="2" height="30" x="50" fill="black" />
                                        <rect width="5" height="30" x="55" fill="black" />
                                        <rect width="3" height="30" x="65" fill="black" />
                                        <rect width="7" height="30" x="72" fill="black" />
                                        <rect width="4" height="30" x="84" fill="black" />
                                        <rect width="2" height="30" x="90" fill="black" />
                                        <rect width="6" height="30" x="96" fill="black" />
                                        <rect width="3" height="30" x="105" fill="black" />
                                        <text x="115" y="20" fontSize="14" fontWeight="bold">TOTAL: $99</text>
                                    </g>

                                    {/* Avatar Area */}
                                    <rect x="75" y="160" width="150" height="150" fill="white" stroke="black" strokeWidth="3" rx="10" />
                                    <text x="150" y="240" textAnchor="middle" fontSize="40">🛍️</text>

                                    {/* Tape */}
                                    <rect x="65" y="150" width="40" height="15" fill="#FF4500" transform="rotate(-45 65 150)" opacity="0.8" />
                                    <rect x="235" y="150" width="40" height="15" fill="#FF4500" transform="rotate(45 235 150)" opacity="0.8" />

                                    {/* NAME */}
                                    <text x="150" y="110" textAnchor="middle" fontFamily="monospace" fontWeight="bold" fontSize="14" fill="black">
                                        KHÁCH HÀNG VIP:
                                    </text>
                                    <text x="150" y="135" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize={22} fill="black" textDecoration="underline" dominantBaseline="middle">
                                        {mockName}
                                    </text>
                                </>
                            );

                        // ===================================
                        // 2. SIMP LORD
                        // ===================================
                        case 'simp-lord':
                            return (
                                <>
                                    <defs>
                                        <clipPath id={`avatar-clip-heart-${template.id}`}>
                                            <path d="M150,130 C110,90 50,150 150,260 C250,150 190,90 150,130 Z" />
                                        </clipPath>
                                        <pattern id="grid-pattern-mini" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect width="20" height="20" fill="none" stroke="#ccc" strokeWidth="0.5" />
                                        </pattern>
                                    </defs>

                                    {/* Pink Gradient Background */}
                                    <rect width="300" height="400" fill="#FFB6C1" />
                                    <rect width="300" height="400" fill="url(#grid-pattern-mini)" opacity="0.2" />

                                    {/* Window Frame */}
                                    <rect x="15" y="15" width="270" height="370" rx="15" fill="white" stroke="black" strokeWidth="4" />
                                    <rect x="15" y="15" width="270" height="40" rx="15" fill="black" />
                                    <text x="30" y="40" fill="white" fontSize="14" fontWeight="bold">💖 love_os.exe</text>
                                    <circle cx="260" cy="35" r="5" fill="#FF5555" />
                                    <circle cx="245" cy="35" r="5" fill="#FFD700" />
                                    <circle cx="230" cy="35" r="5" fill="#55FF55" />

                                    {/* Heart Avatar Frame */}
                                    <path d="M150,120 C100,70 30,140 150,270 C270,140 200,70 150,120 Z" fill="#FFE4E1" stroke="black" strokeWidth="3" transform="translate(0, 10)" />
                                    <text x="150" y="200" textAnchor="middle" fontSize="40">💌</text>

                                    {/* Floating Likes */}
                                    <g transform="translate(220, 100) rotate(10)">
                                        <rect width="50" height="30" rx="15" fill="#FF1493" stroke="black" strokeWidth="2" />
                                        <text x="25" y="20" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">Inf+</text>
                                    </g>

                                    {/* Name Plate */}
                                    <rect x="40" y="290" width="220" height="70" rx="10" fill="#FF69B4" stroke="black" strokeWidth="3" />
                                    <text x="150" y="315" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">CERTIFIED SIMP:</text>
                                    <text x="150" y="340" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize={24} fill="white" stroke="black" strokeWidth="1" dominantBaseline="middle">
                                        {mockName}
                                    </text>
                                </>
                            );

                        // ===================================
                        // 3. THẺ BÀI MA THUẬT
                        // ===================================
                        case 'the-bai-ma-thuat':
                            return (
                                <>
                                    <defs>
                                        <radialGradient id="magic-glow-mini" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                            <stop offset="0%" stopColor="#9370DB" stopOpacity="0.8" />
                                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                                        </radialGradient>
                                    </defs>

                                    {/* Dark Cosmos Background */}
                                    <rect width="300" height="400" fill="#2E0854" />
                                    <circle cx="150" cy="200" r="150" fill="url(#magic-glow-mini)" />

                                    {/* Outer Gold Border */}
                                    <rect x="10" y="10" width="280" height="380" rx="5" fill="none" stroke="#DAA520" strokeWidth="6" />
                                    <rect x="20" y="20" width="260" height="360" rx="2" fill="none" stroke="black" strokeWidth="2" />

                                    {/* Card Header */}
                                    <path d="M25,25 H275 V60 H25 Z" fill="#DAA520" stroke="black" strokeWidth="1" />
                                    <text x="35" y="48" fontSize="18" fontWeight="bold" fontFamily="serif" dominantBaseline="middle">Dark Magician</text>
                                    <circle cx="260" cy="42" r="8" fill="purple" stroke="black" />

                                    {/* Avatar Box */}
                                    <rect x="45" y="85" width="210" height="210" fill="#1a1a1a" stroke="#DAA520" strokeWidth="4" />
                                    <text x="150" y="200" textAnchor="middle" fontSize="50">🔮</text>

                                    {/* Description Box */}
                                    <rect x="25" y="310" width="250" height="70" fill="#F5DEB3" stroke="black" strokeWidth="2" />
                                    <text x="35" y="330" fontSize="14" fontWeight="bold">[{mockName}]</text>
                                    <text x="35" y="350" fontSize="10" fontFamily="serif">"Người sở hữu tấm thẻ này có khả năng</text>
                                    <text x="35" y="362" fontSize="10" fontFamily="serif">thức đêm vô tận và ngủ bù vào ban ngày."</text>

                                    {/* ATK/DEF */}
                                    <text x="180" y="375" fontSize="10" fontWeight="bold">ATK/ ∞  DEF/ ∞</text>
                                </>
                            );

                        // ===================================
                        // 4. BẰNG KHEN THOÁT Ế
                        // ===================================
                        case 'bang-khen-thoat-e':
                            return (
                                <>
                                    <defs>
                                        <pattern id="cert-pattern-mini" width="50" height="50" patternUnits="userSpaceOnUse">
                                            <circle cx="25" cy="25" r="20" fill="none" stroke="#90EE90" strokeWidth="1" opacity="0.5" />
                                        </pattern>
                                    </defs>

                                    {/* Background */}
                                    <rect width="300" height="400" fill="white" />
                                    <rect width="300" height="400" fill="url(#cert-pattern-mini)" />

                                    {/* Vintage Border Frame */}
                                    <g>
                                        <path d="M20,20 L280,20 L280,380 L20,380 Z" fill="none" stroke="#228B22" strokeWidth="4" />
                                        <path d="M15,15 L285,15 L285,385 L15,385 Z" fill="none" stroke="#DAA520" strokeWidth="2" strokeDasharray="5,2" />
                                        <path d="M20,60 C20,20 20,20 60,20" fill="none" stroke="#228B22" strokeWidth="4" />
                                        <path d="M280,60 C280,20 280,20 240,20" fill="none" stroke="#228B22" strokeWidth="4" />
                                        <path d="M20,340 C20,380 20,380 60,380" fill="none" stroke="#228B22" strokeWidth="4" />
                                        <path d="M280,340 C280,380 280,380 240,380" fill="none" stroke="#228B22" strokeWidth="4" />
                                    </g>

                                    {/* Header Text */}
                                    <text x="150" y="70" textAnchor="middle" fontFamily="serif" fontSize="32" fontWeight="bold" fill="#228B22">CỘNG HÒA</text>
                                    <text x="150" y="100" textAnchor="middle" fontFamily="serif" fontSize="14" fontWeight="bold" fill="black">XÃ HỘI CHỦ NGHĨA FA</text>
                                    <line x1="100" y1="110" x2="200" y2="110" stroke="black" strokeWidth="1" />

                                    <text x="150" y="150" textAnchor="middle" fontFamily="serif" fontSize="40" fontWeight="900" fill="#DAA520" stroke="black" strokeWidth="1" letterSpacing="2">BẰNG KHEN</text>

                                    <text x="150" y="200" textAnchor="middle" fontSize="14" fontStyle="italic">Trao tặng đồng chí:</text>
                                    <text x="150" y="235" textAnchor="middle" fontFamily="cursive" fontSize={24} fontWeight="bold" fill="#B22222">
                                        {mockName}
                                    </text>

                                    {/* User Avatar as Stamp */}
                                    <circle cx="150" cy="310" r="55" fill="white" stroke="#DAA520" strokeWidth="3" strokeDasharray="2,2" />

                                    {/* Official Red Stamp Overlay */}
                                    <circle cx="220" cy="330" r="30" fill="none" stroke="red" strokeWidth="3" opacity="0.7" />
                                    <text x="220" y="335" textAnchor="middle" fontSize="10" fill="red" fontWeight="bold" transform="rotate(-15 220 330)" opacity="0.7">ĐÃ DUYỆT</text>
                                </>
                            );

                        // ===================================
                        // 5. CĂN CƯỚC GEN Z
                        // ===================================
                        case 'can-cuoc-gen-z':
                            return (
                                <>
                                    {/* Light Metallic Background */}
                                    <rect width="300" height="400" fill="#F0F8FF" />
                                    <path d="M0,0 L300,100 L300,0 Z" fill="#87CEEB" opacity="0.3" />
                                    <path d="M0,400 L300,300 L0,300 Z" fill="#87CEEB" opacity="0.3" />

                                    {/* ID Header */}
                                    <rect x="20" y="30" width="40" height="40" rx="5" fill="black" />
                                    <path d="M30,50 L50,50 M40,40 L40,60" stroke="white" strokeWidth="4" />

                                    <text x="80" y="55" fontSize="24" fontWeight="900" letterSpacing="-1">CITIZEN ID</text>
                                    <text x="80" y="75" fontSize="12" fontFamily="monospace" fill="gray">PLANET: Z-420</text>

                                    {/* Photo Area */}
                                    <rect x="15" y="115" width="110" height="140" fill="white" stroke="black" strokeWidth="2" rx="5" />
                                    <text x="70" y="200" textAnchor="middle" fontSize="30">👽</text>

                                    {/* Info Lines */}
                                    <g transform="translate(140, 120)">
                                        <text x="0" y="15" fontSize="10" fill="gray" fontWeight="bold">NAME</text>
                                        <text x="0" y="35" fontSize={20} fontWeight="bold">{mockName}</text>
                                        <line x1="0" y1="45" x2="140" y2="45" stroke="black" strokeWidth="1" />

                                        <text x="0" y="75" fontSize="10" fill="gray" fontWeight="bold">DOB</text>
                                        <text x="0" y="95" fontSize="14" fontFamily="monospace">2006-09-??</text>

                                        <text x="0" y="135" fontSize="10" fill="gray" fontWeight="bold">CLASS</text>
                                        <text x="0" y="155" fontSize="14" fontWeight="bold" fill="red">S-TIER</text>
                                    </g>

                                    {/* Chip & Elements */}
                                    <rect x="20" y="300" width="50" height="35" fill="#FFD700" stroke="black" strokeWidth="1" rx="4" />
                                    <path d="M25,317 L65,317 M45,300 L45,335" stroke="black" strokeWidth="1" opacity="0.3" />

                                    <text x="90" y="325" fontSize="12" fontFamily="monospace">ID: 84-098-FLEX-VN</text>

                                    {/* Bottom Bar Code */}
                                    <rect x="0" y="370" width="300" height="30" fill="black" />
                                    <text x="150" y="390" textAnchor="middle" fill="white" fontSize="10" letterSpacing="5">Validation Required</text>
                                </>
                            );

                        // ===================================
                        // DEFAULT FALLBACK (Construction Mode)
                        // ===================================
                        default:
                            return (
                                <>
                                    {/* Background */}
                                    <rect width="300" height="400" fill="#F0F0F0" />
                                    <pattern id="diagonal-stripe-mini" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                                        <rect width="5" height="10" transform="translate(0,0)" fill="#000000" opacity="0.1" />
                                    </pattern>
                                    <rect width="300" height="400" fill="url(#diagonal-stripe-mini)" />

                                    {/* Construction Sign */}
                                    <rect x="75" y="120" width="150" height="150" fill="#FFD700" stroke="black" strokeWidth="4" />
                                    <text x="150" y="200" textAnchor="middle" fontSize="50">🚧</text>
                                    <text x="150" y="240" textAnchor="middle" fontWeight="black" fontSize="16">W.I.P</text>
                                </>
                            );
                    }
                })()}
            </svg>
        </div>
    );
};

export default CardThumbnail;
