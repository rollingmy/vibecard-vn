import React from 'react';

// Define the Props expected by each Template Renderer
export interface TemplateProps {
    userName: string;
    userImage: string | null;
    nameFontSize: number;
    // We can add more props here if needed, like 'template' itself for color access
    template: {
        id: string;
        name: string;
        color: string;
        description?: string;
    };
}

// Type for the Template Render Function
type TemplateRenderFn = (props: TemplateProps) => React.ReactNode;

// SMART TEXT COMPONENT (Fluid Typography & Wrapping)
const SmartText = ({
    x,
    y,
    width = 260,
    height = 80,
    text,
    color = "black",
    fontFamily = "sans-serif",
    className = "",
    rotate = 0,
    align = "center" // 'center' | 'left' | 'right'
}: {
    x: number;
    y: number;
    width?: number;
    height?: number;
    text: string;
    color?: string;
    fontFamily?: string;
    className?: string;
    rotate?: number;
    align?: "center" | "left" | "right";
}) => {
    // 1. Fluid Typography Logic based on character count
    const len = text ? text.length : 0;
    let fontSizeClass = "text-[36px]"; // Default large
    let lineClamp = "line-clamp-1";
    let lineHeight = "leading-tight";

    if (len > 25) {
        fontSizeClass = "text-[18px]";
        lineClamp = "line-clamp-3";
    } else if (len > 12) {
        fontSizeClass = "text-[24px]";
        lineClamp = "line-clamp-2";
    }

    // 2. Alignment Logic
    let justifyClass = "justify-center";
    let textAlignClass = "text-center";
    if (align === "left") {
        justifyClass = "justify-start";
        textAlignClass = "text-left";
    } else if (align === "right") {
        justifyClass = "justify-end";
        textAlignClass = "text-right";
    }

    // 3. Adjust Coordinates for Centering (foreignObject is top-left)
    // If aligning center, x is the center point.
    // If aligning left, x is the left edge.
    let finalX = x;
    if (align === "center") finalX = x - width / 2;
    // For y, we treat it as the center vertical point approx or top? 
    // Let's assume y is the vertical CENTER of the text box to mimic textAnchor middle/dominant-baseline middle
    const finalY = y - height / 2;

    return (
        <foreignObject x={finalX} y={finalY} width={width} height={height} transform={`rotate(${rotate} ${x} ${y})`}>
            <div
                xmlns="http://www.w3.org/1999/xhtml"
                className={`w-full h-full flex items-center ${justifyClass} ${textAlignClass} font-black uppercase break-words hyphens-auto ${fontSizeClass} ${lineHeight} ${lineClamp} ${className}`}
                style={{ color: color, fontFamily: fontFamily, overflow: 'hidden' }}
            >
                {text || "NAME"}
            </div>
        </foreignObject>
    );
};

// THE REGISTRY OBJECT
export const TemplateStyles: Record<string, TemplateRenderFn> = {
    // ===================================
    // 1. CHIẾN THẦN SĂN SALE (Receipt Theme)
    // ===================================
    'chien-than-san-sale': ({ userName, userImage, nameFontSize }) => (
        <>
            <defs>
                <clipPath id="avatar-clip-receipt">
                    <circle cx="150" cy="110" r="50" />
                </clipPath>
            </defs>

            {/* Receipt Long Background */}
            <rect x="0" y="0" width="300" height="400" fill="#F8F8FF" />
            {/* Thick Black Border for Neubrutalism */}
            <rect x="10" y="10" width="280" height="380" fill="white" stroke="black" strokeWidth="3" />

            {/* Jagged Bottom Edge */}
            <path d="M10,390 L20,400 L30,390 L40,400 L50,390 L60,400 L70,390 L80,400 L90,390 L100,400 L110,390 L120,400 L130,390 L140,400 L150,390 L160,400 L170,390 L180,400 L190,390 L200,400 L210,390 L220,400 L230,390 L240,400 L250,390 L260,400 L270,390 L280,400 L290,390" fill="white" stroke="black" strokeWidth="3" />

            {/* Header Info */}
            <text x="150" y="45" textAnchor="middle" fontFamily="monospace" fontWeight="900" fontSize="20" letterSpacing="1">VIBE STORE VN</text>
            <text x="150" y="60" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="black" fontWeight="bold">123 Street, Flex City, VN</text>

            <line x1="30" y1="70" x2="270" y2="70" stroke="black" strokeWidth="2" strokeDasharray="4 4" />

            {/* Avatar centered with thick border */}
            <circle cx="150" cy="115" r="54" fill="none" stroke="black" strokeWidth="3" />
            {userImage ? (
                <image
                    x="100" y="65" width="100" height="100"
                    href={userImage}
                    clipPath="url(#avatar-clip-receipt)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="130" textAnchor="middle" fontSize="40">🧾</text>
            )}

            {/* Name Item */}
            <text x="150" y="185" textAnchor="middle" fontFamily="monospace" fontWeight="900" fontSize={Math.min(nameFontSize, 24)} textDecoration="underline">
                {userName || "THÁNH CHỐT ĐƠN"}
            </text>
            <text x="150" y="200" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="black" fontWeight="bold">MEMBER ID: 8888</text>

            <line x1="30" y1="210" x2="270" y2="210" stroke="black" strokeWidth="3" />

            {/* Items List */}
            <g transform="translate(35, 230)" fontFamily="monospace" fontSize="12" fontWeight="bold">
                <text x="0" y="0">ITEM</text> <text x="200" y="0" textAnchor="end">PRICE</text>
                <line x1="0" y1="10" x2="230" y2="10" stroke="black" strokeWidth="2" />

                <text x="0" y="30">iPhone 15 Pro Max</text> <text x="200" y="30" textAnchor="end">0đ</text>
                <text x="0" y="50">Túi Gucci</text> <text x="200" y="50" textAnchor="end">0đ</text>
                <text x="0" y="70">Xe hơi Vinfast</text> <text x="200" y="70" textAnchor="end">0đ</text>
                <text x="0" y="90">Du thuyền 5 sao</text> <text x="200" y="90" textAnchor="end">0đ</text>
            </g>

            {/* Total */}
            <line x1="30" y1="340" x2="270" y2="340" stroke="black" strokeWidth="3" />
            <text x="35" y="360" fontFamily="monospace" fontWeight="900" fontSize="18">TOTAL</text>
            <text x="265" y="360" textAnchor="end" fontFamily="monospace" fontWeight="900" fontSize="24">0đ</text>
            <text x="150" y="380" textAnchor="middle" fontFamily="monospace" fontSize="10" fontWeight="bold">THANK YOU FOR FLEXING!</text>
        </>
    ),

    // ===================================
    // 2. SIMP LORD (Social Media Frame)
    // ===================================
    'simp-lord': ({ userName, userImage, nameFontSize }) => (
        <>
            <defs>
                <clipPath id="avatar-clip-heart">
                    <path d="M150,130 C110,90 50,150 150,260 C250,150 190,90 150,130 Z" />
                </clipPath>
            </defs>

            {/* Pink Gradient Background */}
            <rect width="300" height="400" fill="#FFB6C1" />
            <rect width="300" height="400" fill="url(#grid-pattern)" opacity="0.2" />

            {/* Window Frame */}
            <rect x="15" y="15" width="270" height="370" rx="15" fill="white" stroke="black" strokeWidth="4" />
            <rect x="15" y="15" width="270" height="40" rx="15" fill="black" />
            <text x="30" y="40" fill="white" fontSize="14" fontWeight="bold">💖 love_os.exe</text>
            <circle cx="260" cy="35" r="5" fill="#FF5555" />
            <circle cx="245" cy="35" r="5" fill="#FFD700" />
            <circle cx="230" cy="35" r="5" fill="#55FF55" />

            {/* Heart Avatar Frame */}
            <path d="M150,120 C100,70 30,140 150,270 C270,140 200,70 150,120 Z" fill="#FFE4E1" stroke="black" strokeWidth="3" transform="translate(0, 10)" />
            {userImage ? (
                <image
                    x="50" y="90" width="200" height="170"
                    href={userImage}
                    clipPath="url(#avatar-clip-heart)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="200" textAnchor="middle" fontSize="40">💌</text>
            )}

            {/* Floating Likes */}
            <g transform="translate(220, 100) rotate(10)">
                <rect width="50" height="30" rx="15" fill="#FF1493" stroke="black" strokeWidth="2" />
                <text x="25" y="20" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">999+</text>
            </g>

            {/* Name Plate */}
            <rect x="40" y="290" width="220" height="70" rx="10" fill="#FF69B4" stroke="black" strokeWidth="3" />
            <text x="150" y="315" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">CERTIFIED SIMP:</text>
            <text x="150" y="340" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize={Math.min(nameFontSize, 24)} fill="white" stroke="black" strokeWidth="1" dominantBaseline="middle">
                {userName || "SIMP CHÚA"}
            </text>
        </>
    ),

    // ===================================
    // 3. THẺ BÀI MA THUẬT (Yugi Style)
    // ===================================
    'the-bai-ma-thuat': ({ userName, userImage, nameFontSize }) => (
        <>
            <defs>
                <clipPath id="avatar-clip-square">
                    <rect x="45" y="85" width="210" height="210" />
                </clipPath>
                <radialGradient id="magic-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#9370DB" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Dark Cosmos Background */}
            <rect width="300" height="400" fill="#2E0854" />
            <circle cx="150" cy="200" r="150" fill="url(#magic-glow)" />

            {/* Outer Gold Border */}
            <rect x="10" y="10" width="280" height="380" rx="5" fill="none" stroke="#DAA520" strokeWidth="6" />
            <rect x="20" y="20" width="260" height="360" rx="2" fill="none" stroke="black" strokeWidth="2" />

            {/* Card Header */}
            <path d="M25,25 H275 V60 H25 Z" fill="#DAA520" stroke="black" strokeWidth="1" />
            <text x="35" y="48" fontSize="18" fontWeight="bold" fontFamily="serif" dominantBaseline="middle">Dark Magician</text>
            <circle cx="260" cy="42" r="8" fill="purple" stroke="black" />

            {/* Avatar Box */}
            <rect x="45" y="85" width="210" height="210" fill="#1a1a1a" stroke="#DAA520" strokeWidth="4" />
            {userImage ? (
                <image
                    x="45" y="85" width="210" height="210"
                    href={userImage}
                    clipPath="url(#avatar-clip-square)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="200" textAnchor="middle" fontSize="50">🔮</text>
            )}

            {/* Description Box */}
            <rect x="25" y="310" width="250" height="70" fill="#F5DEB3" stroke="black" strokeWidth="2" />
            <text x="35" y="330" fontSize="14" fontWeight="bold">[{userName || "YUGI CON"}]</text>
            <text x="35" y="350" fontSize="10" fontFamily="serif">"Người sở hữu tấm thẻ này có khả năng</text>
            <text x="35" y="362" fontSize="10" fontFamily="serif">thức đêm vô tận và ngủ bù vào ban ngày."</text>

            {/* ATK/DEF */}
            <text x="180" y="375" fontSize="10" fontWeight="bold">ATK/ 9999  DEF/ 9999</text>
        </>
    ),

    // ===================================
    // 4. BẰNG KHEN THOÁT Ế (Certificate)
    // ===================================
    'bang-khen-thoat-e': ({ userName, userImage, nameFontSize }) => (
        <>
            <defs>
                <pattern id="cert-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
                    <circle cx="25" cy="25" r="20" fill="none" stroke="#90EE90" strokeWidth="1" opacity="0.5" />
                </pattern>
                <clipPath id="avatar-clip-circle">
                    <circle cx="150" cy="310" r="55" />
                </clipPath>
            </defs>

            {/* Background */}
            <rect width="300" height="400" fill="white" />
            <rect width="300" height="400" fill="url(#cert-pattern)" />

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

            {/* Name */}
            <text x="150" y="200" textAnchor="middle" fontSize="14" fontStyle="italic">Trao tặng đồng chí:</text>
            <text x="150" y="235" textAnchor="middle" fontFamily="cursive" fontSize={nameFontSize} fontWeight="bold" fill="#B22222">
                {userName || "NGƯỜI ĐƯỢC CHỌN"}
            </text>

            {/* User Avatar as Stamp */}
            < circle cx="150" cy="310" r="55" fill="white" stroke="#DAA520" strokeWidth="3" strokeDasharray="2,2" />
            {
                userImage ? (
                    <image
                        x="95" y="255" width="110" height="110"
                        href={userImage}
                        clipPath="url(#avatar-clip-circle)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                ) : null
            }

            {/* Official Red Stamp Overlay */}
            <circle cx="220" cy="330" r="30" fill="none" stroke="red" strokeWidth="3" opacity="0.7" />
            <text x="220" y="335" textAnchor="middle" fontSize="10" fill="red" fontWeight="bold" transform="rotate(-15 220 330)" opacity="0.7">ĐÃ DUYỆT</text>
        </>
    ),

    // ===================================
    // 5. CĂN CƯỚC GEN Z (ID Card 2.0)
    // ===================================
    'can-cuoc-gen-z': ({ userName, userImage, nameFontSize }) => (
        <>
            <defs>
                <clipPath id="avatar-clip-rounded">
                    <rect x="15" y="115" width="110" height="140" rx="5" />
                </clipPath>
            </defs>

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
            {userImage ? (
                <image
                    x="15" y="115" width="110" height="140"
                    href={userImage}
                    clipPath="url(#avatar-clip-rounded)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="70" y="200" textAnchor="middle" fontSize="30">👽</text>
            )}

            {/* Info Lines */}
            <g transform="translate(130, 120)">
                <text x="0" y="15" fontSize="10" fill="gray" fontWeight="bold">NAME</text>
                <text x="0" y="35" fontSize={Math.min(nameFontSize, 14)} fontWeight="bold">{userName || "CÔNG DÂN GƯƠNG MẪU"}</text>
                <line x1="0" y1="45" x2="160" y2="45" stroke="black" strokeWidth="1" />

                <text x="0" y="75" fontSize="10" fill="gray" fontWeight="bold">DOB</text>
                <text x="0" y="95" fontSize="14" fontFamily="monospace">2000-??-??</text>

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
    ),

    // ===================================
    // 6. FLEX ĐẾN HƠI THỞ CUỐI (Banking App)
    // ===================================
    'flex-den-hoi-tho-cuoi': ({ userName, userImage, nameFontSize }) => (
        <>
            <defs>
                <clipPath id="avatar-clip-faceid">
                    <rect x="95" y="165" width="110" height="110" rx="25" />
                </clipPath>
                <linearGradient id="bank-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a1a1a" />
                    <stop offset="100%" stopColor="#0a0a0a" />
                </linearGradient>
            </defs>

            {/* Background with Security Waves */}
            <rect width="300" height="400" fill="url(#bank-grad)" />
            <path d="M-50,200 Q150,50 350,200 T750,200" fill="none" stroke="#333" strokeWidth="2" opacity="0.5" />
            <path d="M-50,220 Q150,70 350,220 T750,220" fill="none" stroke="#333" strokeWidth="2" opacity="0.3" />

            {/* Header */}
            <text x="20" y="40" fill="white" fontWeight="bold" fontSize="14" opacity="0.8">FLEXBANK</text>
            <circle cx="270" cy="35" r="5" fill="#00FF00" />
            <text x="250" y="38" textAnchor="end" fill="white" fontSize="10" opacity="0.7">LIVE</text>

            {/* Balance Area */}
            <text x="150" y="100" textAnchor="middle" fill="#888" fontSize="12" letterSpacing="1">AVAILABLE BALANCE</text>
            <text x="150" y="130" textAnchor="middle" fill="#FFF" fontWeight="bold" fontSize="28" letterSpacing="-1">
                999,999,999+ <tspan fontSize="18" fill="#00FF00">VNĐ</tspan>
            </text>

            {/* FaceID Frame */}
            <rect x="95" y="165" width="110" height="110" rx="25" fill="none" stroke="#00FF00" strokeWidth="2" strokeDasharray="10 5" />
            <path d="M150,165 L150,155 M150,275 L150,285 M95,220 L85,220 M205,220 L215,220" stroke="#00FF00" strokeWidth="2" />

            {userImage ? (
                <image
                    x="95" y="165" width="110" height="110"
                    href={userImage}
                    clipPath="url(#avatar-clip-faceid)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="235" textAnchor="middle" fontSize="40">🤑</text>
            )}

            <text x="150" y="300" textAnchor="middle" fill="#00FF00" fontSize="10" letterSpacing="2">FACE ID MATCHED</text>


            {/* Name */}
            <rect x="30" y="330" width="240" height="1" fill="#333" />
            <text x="150" y="320" textAnchor="middle" fill="white" fontWeight="bold" fontSize={Math.min(nameFontSize, 20)}>
                {userName || "VIBE THỦ CHIẾN"}
            </text>

            <text x="150" y="360" textAnchor="middle" fill="#555" fontSize="10">ACCOUNT NO.</text>
            <text x="150" y="375" textAnchor="middle" fill="#888" fontFamily="monospace" fontSize="14">8888 8888 8888</text>
        </>
    ),

    // ===================================
    // 7. ĐẠI GIA NGẦM (Gold Cardvisit)
    // ===================================
    'dai-gia-ngam': ({ userName, userImage, nameFontSize }) => (
        <>
            <defs>
                <filter id="grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <clipPath id="avatar-clip-oval">
                    <ellipse cx="100" cy="150" rx="60" ry="80" />
                </clipPath>
            </defs>

            {/* Gold Background */}
            <rect width="300" height="400" fill="#B8860B" />
            <rect width="300" height="400" fill="#DAA520" opacity="0.8" />
            {/* Grain Texture Overlay */}
            <rect width="300" height="400" filter="url(#grain)" opacity="0.2" style={{ mixBlendMode: "multiply" }} />

            {/* Ornamental Borders */}
            <rect x="15" y="15" width="270" height="370" fill="none" stroke="white" strokeWidth="2" />
            <rect x="25" y="25" width="250" height="350" fill="none" stroke="white" strokeWidth="1" strokeDasharray="2 2" />

            {/* Top Decor */}
            <path d="M150,40 L170,60 L130,60 Z" fill="white" />

            {/* Avatar Frame - Left Aligned Oval */}
            <ellipse cx="100" cy="150" rx="65" ry="85" fill="none" stroke="white" strokeWidth="4" />
            <ellipse cx="100" cy="150" rx="60" ry="80" stroke="black" strokeWidth="1" fill="#444" />

            {userImage ? (
                <image
                    x="40" y="70" width="120" height="160"
                    href={userImage}
                    clipPath="url(#avatar-clip-oval)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="100" y="160" textAnchor="middle" fontSize="40">👑</text>
            )}

            {/* Vertical Split Line */}
            <line x1="180" y1="80" x2="180" y2="220" stroke="white" strokeWidth="1" />

            {/* Info Right */}
            <g transform="translate(195, 100)">
                <text x="0" y="0" fontFamily="serif" fontSize="10" fill="white" fontStyle="italic">Position</text>
                <text x="0" y="15" fontFamily="serif" fontSize="14" fill="black" fontWeight="bold">CHAIRMAN</text>

                <text x="0" y="50" fontFamily="serif" fontSize="10" fill="white" fontStyle="italic">Status</text>
                <text x="0" y="65" fontFamily="serif" fontSize="14" fill="black" fontWeight="bold">HIDDEN</text>
            </g>

            {/* Name at Bottom - Serif Classic */}
            <text x="150" y="300" textAnchor="middle" fontFamily="times new roman, serif" fontStyle="italic" fontSize="14" fill="white">Mr./Mrs.</text>
            <text x="150" y="340" textAnchor="middle" fontFamily="times new roman, serif" fontWeight="bold" fontSize={Math.min(nameFontSize, 26)} fill="black" letterSpacing="1">
                {userName ? userName.toUpperCase() : "CHỦ TỊCH GIẢ KHỔ"}
            </text>
        </>
    ),

    // ===================================
    // 8. CÒ ĐẤT ĐẠI GIA (Sổ Đỏ Style)
    // ===================================
    'co-dat-dai-gia': ({ userName, userImage, nameFontSize }) => (
        <>
            <defs>
                <clipPath id="avatar-clip-rect">
                    <rect x="75" y="140" width="150" height="180" />
                </clipPath>
                <pattern id="guilloche" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0,20 Q20,0 40,20 T80,20" fill="none" stroke="#FF69B4" strokeWidth="0.5" opacity="0.5" />
                </pattern>
            </defs>

            {/* Red/Pink Background */}
            <rect width="300" height="400" fill="#FFC0CB" />
            <rect width="300" height="400" fill="#FF69B4" opacity="0.3" />
            <rect width="300" height="400" fill="url(#guilloche)" />

            {/* Border Frame */}
            <rect x="20" y="20" width="260" height="360" fill="none" stroke="#8B0000" strokeWidth="4" />
            <rect x="25" y="25" width="250" height="350" fill="none" stroke="#8B0000" strokeWidth="1" />

            {/* Header */}
            <g transform="translate(150, 60)">
                <text y="0" textAnchor="middle" fontWeight="bold" fontSize="16" fill="#8B0000">GIẤY CHỨNG NHẬN</text>
                <text y="20" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#8B0000">QUYỀN SỬ DỤNG ĐẤT (VÀ NGƯỜI YÊU)</text>
                <line x1="-80" y1="30" x2="80" y2="30" stroke="#8B0000" strokeWidth="1" />
            </g>

            {/* Info */}
            <text x="40" y="120" fontSize="12" fill="black">I. Tên chủ sở hữu:</text>
            <text x="150" y="350" textAnchor="middle" fontWeight="900" fontSize={Math.min(nameFontSize, 24)} fill="#8B0000" style={{ textTransform: "uppercase" }}>
                {userName || "ĐẠI GIA BĐS"}
            </text>

            {/* Avatar Box (Photo) */}
            < rect x="75" y="140" width="150" height="180" fill="white" stroke="black" strokeWidth="1" />
            {
                userImage ? (
                    <image
                        x="75" y="140" width="150" height="180"
                        href={userImage}
                        clipPath="url(#avatar-clip-rect)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                ) : (
                    <text x="150" y="240" textAnchor="middle" fontSize="40">🏠</text>
                )}

            {/* Red Seal Overlay */}
            <image
                x="180" y="280" width="100" height="100"
                href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZWQiIHN0cm9rZS13aWR0aD0iMyIgb3BhY2l0eT0iMC44Ii8+PHRleHQgeD0iNTAiIHk9IjU1IiBmaWxsPSJyZWQiIG9wYWNpdHk9IjAuOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIHRyYW5zZm9ybT0icm90YXRlKC0xNSA1MCA1MCkiPkNow61uaCBDaOG7cTwvdGV4dD48L3N2Zz4=" // Simple base64 red seal SVG
                opacity="0.9"
            />
        </>
    ),

    // ===================================
    // 9. THE BLACK CARD (Power Credit)
    // ===================================
    'the-black-card': ({ userName, userImage, nameFontSize }) => (
        <>
            <defs>
                <linearGradient id="silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C0C0C0" />
                    <stop offset="50%" stopColor="#E8E8E8" />
                    <stop offset="100%" stopColor="#A9A9A9" />
                </linearGradient>
                <clipPath id="avatar-clip-chip">
                    <rect x="180" y="240" width="100" height="100" rx="10" />
                </clipPath>
            </defs>

            {/* Matter Black Background */}
            <rect width="300" height="400" fill="#111111" />
            <rect width="300" height="400" fill="url(#diagonal-stripe-2)" opacity="0.05" /> {/* Reuse existing pattern */}

            {/* Silver Header */}
            <text x="20" y="40" fontFamily="sans-serif" fontSize="14" fill="url(#silver-grad)" fontStyle="italic" fontWeight="bold">AMERICAN FLEX</text>
            <text x="260" y="40" fontFamily="monospace" fontSize="12" fill="white" textAnchor="end">PLATINUM</text>

            {/* Chip */}
            <rect x="30" y="80" width="50" height="40" rx="5" fill="#FFD700" stroke="#B8860B" strokeWidth="1" />
            <path d="M30,100 L80,100 M55,80 L55,120 M40,80 Q55,100 70,80 M40,120 Q55,100 70,120" stroke="#B8860B" strokeWidth="1" fill="none" />

            {/* Wifi Icon */}
            <path d="M260,100 Q270,90 280,100 M265,105 Q270,100 275,105" stroke="white" strokeWidth="2" fill="none" />


            {/* Name Big Silver */}
            <text x="20" y="180" fontSize="10" fill="gray">MEMBER SINCE</text>
            <text x="20" y="200" fontSize="14" fill="white">2077</text>

            <text x="30" y="340" textAnchor="start" fontWeight="900" fontSize={Math.min(nameFontSize, 24)} fill="url(#silver-grad)" letterSpacing="1" style={{ textShadow: "1px 1px 2px black" }}>
                {userName ? userName.toUpperCase() : "THIẾU GIA NGẦM"}
            </text>

            {/* Embossed Numbers */}
            < text x="150" y="380" textAnchor="middle" fontFamily="monospace" fontSize="20" fill="url(#silver-grad)" letterSpacing="2" style={{ textShadow: "1px 1px 2px black" }}>
                0000 0000 0000 FLEX
            </text >

            {/* Avatar Box as Hologram */}
            < rect x="180" y="240" width="100" height="100" rx="10" fill="#333" stroke="gray" strokeWidth="1" />
            {
                userImage ? (
                    <image
                        x="180" y="240" width="100" height="100"
                        href={userImage}
                        clipPath="url(#avatar-clip-chip)"
                        preserveAspectRatio="xMidYMid slice"
                        opacity="0.9"
                    />
                ) : (
                    <text x="230" y="300" textAnchor="middle" fontSize="40" fill="gray">🦅</text>
                )}
            <text x="230" y="235" textAnchor="middle" fill="gray" fontSize="8">AUTHORIZED SIGNATURE</text>
        </>
    ),

    // ===================================
    // 10. RICH KID TỰ THÂN (Luxury Box)
    // ===================================
    'rich-kid-tu-than': ({ userName, userImage, nameFontSize }) => (
        <>
            <defs>
                <clipPath id="avatar-clip-diamond">
                    <polygon points="150,140 210,200 150,260 90,200" />
                </clipPath>
            </defs>

            {/* Orange Hermes Vibe Background */}
            <rect width="300" height="400" fill="#FF7F50" />
            <rect width="300" height="400" stroke="#333" strokeWidth="20" rx="0" fill="none" />

            {/* Ribbons */}
            <line x1="0" y1="0" x2="300" y2="400" stroke="#1a1a1a" strokeWidth="30" />
            <line x1="300" y1="0" x2="0" y2="400" stroke="#1a1a1a" strokeWidth="30" />

            {/* Stitching on ribbons */}
            <line x1="5" y1="0" x2="305" y2="400" stroke="white" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
            <line x1="295" y1="0" x2="-5" y2="400" stroke="white" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />

            {/* Center Knot/Brand Area */}
            <circle cx="150" cy="200" r="70" fill="#1a1a1a" stroke="#FFD700" strokeWidth="4" />

            {/* Brand Name */}
            <text x="150" y="80" textAnchor="middle" fontFamily="serif" fontSize="24" fontWeight="bold" fill="black">THE RICH</text>
            <text x="150" y="100" textAnchor="middle" fontSize="10" fill="black">EST. 2026</text>

            {/* Avatar Diamond in Center */}
            {userImage ? (
                <image
                    x="50" y="100" width="200" height="200"
                    href={userImage}
                    clipPath="url(#avatar-clip-diamond)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="215" textAnchor="middle" fontSize="50">💎</text>
            )}

            {/* Bottom Tag */}
            <rect x="50" y="320" width="200" height="50" fill="white" stroke="black" strokeWidth="2" />
            <text x="150" y="340" textAnchor="middle" fontSize="10" fill="gray" fontWeight="bold">LIMITED EDITION</text>
            <text x="150" y="360" textAnchor="middle" fontWeight="900" fontSize={Math.min(nameFontSize, 20)} fill="black" style={{ textTransform: "uppercase" }}>
                {userName || "KID TỰ THÂN"}
            </text>
        </>
    ),


    // ===================================
    // 11. TẬP ĐOÀN ĐA CẤP (Pyramid Scheme)
    // ===================================
    'tap-doan-da-cap': ({ userName, userImage, nameFontSize }) => (
        <>
            <defs>
                <clipPath id="avatar-clip-pyramid">
                    <circle cx="150" cy="110" r="50" />
                </clipPath>
                <linearGradient id="blue-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#000080" />
                    <stop offset="100%" stopColor="#0000CD" />
                </linearGradient>
            </defs>

            {/* Business Blue Background with Thick Black Border */}
            <rect width="300" height="400" fill="url(#blue-grad)" />
            <rect x="5" y="5" width="290" height="390" fill="none" stroke="black" strokeWidth="5" />

            {/* Pyramid Grid Lines */}
            <path d="M0,400 L150,150 L300,400" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
            <path d="M50,400 L150,230 L250,400" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />

            {/* Arrows Up - High Contrast */}
            <path d="M150,350 L150,280 M150,280 L130,300 M150,280 L170,300" stroke="#00FF00" strokeWidth="6" strokeLinecap="round" />
            <path d="M150,350 L150,280 M150,280 L130,300 M150,280 L170,300" stroke="white" strokeWidth="2" strokeLinecap="round" />

            <text x="150" y="380" textAnchor="middle" fill="#00FF00" fontWeight="900" fontSize="14" stroke="black" strokeWidth="0.5">PASSIVE INCOME</text>

            {/* Top Crown */}
            <text x="150" y="50" textAnchor="middle" fontSize="40">👑</text>

            {/* Avatar at Peak with Glow */}
            <circle cx="150" cy="110" r="58" fill="#FFD700" stroke="black" strokeWidth="3" />
            {userImage ? (
                <image
                    x="100" y="60" width="100" height="100"
                    href={userImage}
                    clipPath="url(#avatar-clip-pyramid)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="125" textAnchor="middle" fontSize="40">👔</text>
            )}

            {/* Name & Title Box */}
            <rect x="20" y="180" width="260" height="70" fill="white" stroke="black" strokeWidth="3" rx="10" />

            <text x="150" y="205" textAnchor="middle" fill="#000080" fontSize="12" fontWeight="900" letterSpacing="1">CHỦ TỊCH HỆ THỐNG</text>
            <line x1="50" y1="215" x2="250" y2="215" stroke="black" strokeWidth="2" />

            <text x="150" y="240" textAnchor="middle" fill="black" fontWeight="900" fontSize={Math.min(nameFontSize, 24)} style={{ textTransform: "uppercase" }}>
                {userName || "DIAMOND LEADER"}
            </text>

            {/* Downlines / Hierarchy */}
            <circle cx="80" cy="300" r="25" fill="white" stroke="black" strokeWidth="2" opacity="0.8" />
            <text x="80" y="305" textAnchor="middle" fontSize="10" fontWeight="bold">F1</text>

            <circle cx="220" cy="300" r="25" fill="white" stroke="black" strokeWidth="2" opacity="0.8" />
            <text x="220" y="305" textAnchor="middle" fontSize="10" fontWeight="bold">F1</text>

            <line x1="130" y1="160" x2="80" y2="275" stroke="white" strokeWidth="2" strokeDasharray="5 5" />
            <line x1="170" y1="160" x2="220" y2="275" stroke="white" strokeWidth="2" strokeDasharray="5 5" />
        </>
    ),

    // ===================================
    // 12. SHARK TANK DEAL (Million Dollar Check)
    // ===================================
    'shark-tank-deal': ({ userName, userImage, nameFontSize }) => (
        <>
            <defs>
                <clipPath id="avatar-clip-stamp">
                    <rect x="220" y="20" width="60" height="60" rx="5" />
                </clipPath>
            </defs>

            {/* Check Background */}
            <rect width="300" height="400" fill="#FFFACD" />
            {/* Thick Black Frame */}
            <rect x="10" y="10" width="280" height="380" fill="none" stroke="black" strokeWidth="6" />
            <rect x="15" y="15" width="270" height="370" fill="none" stroke="black" strokeWidth="2" strokeDasharray="5 5" />

            {/* Security Pattern */}
            <path d="M0,0 Q150,400 300,0" fill="none" stroke="#2F4F4F" opacity="0.05" strokeWidth="2" />
            <path d="M0,400 Q150,0 300,400" fill="none" stroke="#2F4F4F" opacity="0.05" strokeWidth="2" />

            {/* Bank Name */}
            <text x="30" y="55" fontSize="18" fontWeight="900" fill="black" fontFamily="serif" style={{ textDecoration: 'underline' }}>SHARK BANK</text>
            <text x="30" y="75" fontSize="10" fill="black" fontWeight="bold">Ho Chi Minh City, Vietnam</text>

            {/* Date */}
            <text x="180" y="100" fontSize="12" fontFamily="monospace" fontWeight="bold">DATE: 2026</text>
            <line x1="220" y1="105" x2="280" y2="105" stroke="black" strokeWidth="2" />

            {/* Pay to Order */}
            <text x="30" y="150" fontSize="14" textAnchor="start" fontWeight="bold" fontFamily="sans-serif">PAY TO THE ORDER OF ⤵</text>
            <text x="40" y="190" fontFamily="serif" fontStyle="italic" fontWeight="900" fontSize={Math.min(nameFontSize, 26)} fill="black">
                {userName || "STARTUP TRIỆU ĐÔ"}
            </text>
            <line x1="30" y1="200" x2="270" y2="200" stroke="black" strokeWidth="3" />

            {/* Amount */}
            <text x="270" y="240" textAnchor="end" fontSize="28" fontWeight="900" fontFamily="monospace" fill="black">$1,000,000</text>
            <rect x="30" y="215" width="250" height="35" fill="none" stroke="black" strokeWidth="2" />
            <text x="40" y="238" fontSize="12" fontWeight="bold">AMOUNT:</text>

            {/* Memo */}
            <text x="30" y="320" fontSize="12" fontWeight="bold">MEMO: Seeds Funding</text>
            <line x1="75" y1="325" x2="165" y2="325" stroke="black" strokeWidth="2" />

            {/* Signature Area with Avatar as Stamp */}
            <line x1="170" y1="355" x2="270" y2="355" stroke="black" strokeWidth="2" />
            <text x="220" y="375" textAnchor="middle" fontSize="9" fontWeight="bold">AUTHORIZED SIGNATURE</text>

            {/* Stamped Deal - BIGGER AND BOLDER */}
            <g transform="translate(160, 240) rotate(-15)">
                <rect width="120" height="50" fill="none" stroke="red" strokeWidth="5" rx="5" />
                <rect width="114" height="44" x="3" y="3" fill="none" stroke="red" strokeWidth="1" rx="2" />
                <text x="60" y="35" textAnchor="middle" fill="red" fontWeight="900" fontSize="24">CHỐT DEAL</text>
            </g>

            {/* Small User Photo Top Right */}
            {userImage ? (
                <image
                    x="220" y="20" width="60" height="60"
                    href={userImage}
                    clipPath="url(#avatar-clip-stamp)"
                    preserveAspectRatio="xMidYMid slice"
                    opacity="0.9"
                />
            ) : (
                <rect x="220" y="20" width="60" height="60" fill="#ddd" stroke="black" strokeWidth="1" />
            )}
        </>
    ),

    // ===================================
    // 13. NHÀ SƯU TẬP XE (Car Collector)
    // ===================================
    'nha-suu-tap-xe': ({ userName, userImage, nameFontSize }) => (
        <>
            <defs>
                <clipPath id="avatar-clip-circle">
                    <circle cx="150" cy="150" r="70" />
                </clipPath>
                <linearGradient id="carbon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a1a1a" />
                    <stop offset="100%" stopColor="#333" />
                </linearGradient>
            </defs>

            {/* Carbon Fiber BG */}
            <rect width="300" height="400" fill="url(#carbon-grad)" />
            <pattern id="carbon-patt" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="5" height="5" fill="black" opacity="0.5" />
                <rect x="5" y="5" width="5" height="5" fill="black" opacity="0.5" />
            </pattern>
            <rect width="300" height="400" fill="url(#carbon-patt)" />

            {/* Thick Dark Frame */}
            <rect x="10" y="10" width="280" height="380" fill="none" stroke="#444" strokeWidth="5" rx="10" />

            {/* Speedometer Graphics */}
            <path d="M50,250 A100,100 0 0,1 250,250" fill="none" stroke="crimson" strokeWidth="8" strokeDasharray="20 10" strokeLinecap="round" />
            <text x="150" y="100" textAnchor="middle" fill="crimson" fontSize="14" fontWeight="900" stroke="black" strokeWidth="0.5">RPM x1000</text>

            {/* Steering Wheel Avatar */}
            <circle cx="150" cy="150" r="85" fill="none" stroke="#222" strokeWidth="15" /> {/* Wheel Rim */}
            <circle cx="150" cy="150" r="85" fill="none" stroke="#555" strokeWidth="2" strokeDasharray="2 2" /> {/* Stitching */}

            {/* Wheel Spokes */}
            <path d="M150,235 L150,190 M65,150 L110,150 M235,150 L190,150" stroke="#333" strokeWidth="12" strokeLinecap="round" />

            {userImage ? (
                <image
                    x="80" y="80" width="140" height="140"
                    href={userImage}
                    clipPath="url(#avatar-clip-circle)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="165" textAnchor="middle" fontSize="50">🏎️</text>
            )}

            {/* Central Horn/Logo */}
            <circle cx="150" cy="150" r="20" fill="black" stroke="#FFD700" strokeWidth="2" />
            <text x="150" y="155" textAnchor="middle" fontSize="16" fill="#FFD700" fontWeight="bold">V</text>

            {/* Car Keys Icons - Stacked */}
            <g transform="translate(150, 270)" textAnchor="middle">
                <text x="-60" y="0" fontSize="30" transform="rotate(-15)">🏎️</text>
                <text x="0" y="10" fontSize="30">🔑</text>
                <text x="60" y="0" fontSize="30" transform="rotate(15)">🚗</text>
            </g>

            {/* License Plate Name */}
            <rect x="50" y="320" width="200" height="60" fill="white" stroke="black" strokeWidth="3" rx="4" />
            <rect x="55" y="325" width="190" height="50" fill="#FFD700" stroke="black" strokeWidth="1" rx="2" />

            <circle cx="65" cy="350" r="3" fill="black" />
            <circle cx="235" cy="350" r="3" fill="black" />

            <text x="150" y="335" textAnchor="middle" fontSize="10" fill="black" fontWeight="bold">VIETNAM</text>
            <text x="150" y="368" textAnchor="middle" fontFamily="monospace" fontWeight="900" fontSize={Math.min(nameFontSize, 26)} fill="black" style={{ textTransform: "uppercase" }}>
                {userName || "SUPERCAR"}
            </text>
        </>
    ),

    // ===================================
    // 14. KING OF BITCOIN (Crypto Trader)
    // ===================================
    'king-of-bitcoin': ({ userName, userImage, nameFontSize }) => (
        <>
            <defs>
                <clipPath id="avatar-clip-coin">
                    <circle cx="150" cy="150" r="60" />
                </clipPath>
            </defs>

            {/* Terminal Black BG */}
            <rect width="300" height="400" fill="#050505" />

            {/* Chart Grid */}
            <path d="M0,100 L300,100 M0,200 L300,200 M0,300 L300,300" stroke="#333" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M100,0 L100,400 M200,0 L200,400" stroke="#333" strokeWidth="1" strokeDasharray="2 2" />

            {/* Candlesticks Neon Green - Thicker */}
            <path d="M20,350 L20,300 M50,320 L50,250 M80,280 L80,180 M110,200 L110,100 M250,150 L250,50" stroke="#00FF00" strokeWidth="2" />
            <rect x="15" y="310" width="10" height="30" fill="#00FF00" />
            <rect x="45" y="270" width="10" height="40" fill="#00FF00" />
            <rect x="75" y="200" width="10" height="60" fill="#00FF00" />
            <rect x="105" y="120" width="10" height="60" fill="#00FF00" />
            <rect x="245" y="60" width="10" height="80" fill="#00FF00" />

            <polyline points="260,100 280,20 295,40" fill="none" stroke="#00FF00" strokeWidth="2" />

            {/* Overlay Gradient for Focus */}
            <radialGradient id="center-glow">
                <stop offset="0%" stopColor="#000" stopOpacity="0" />
                <stop offset="100%" stopColor="#000" stopOpacity="0.8" />
            </radialGradient>
            <rect width="300" height="400" fill="url(#center-glow)" />

            {/* Coin Avatar - Golden Bitcoin Style */}
            <circle cx="150" cy="150" r="75" fill="#F7931A" stroke="white" strokeWidth="4" />
            <circle cx="150" cy="150" r="68" fill="none" stroke="#B36800" strokeWidth="2" strokeDasharray="4 4" />

            <text x="150" y="70" textAnchor="middle" fill="#00FF00" fontSize="24" fontWeight="900" style={{ textShadow: "0 0 10px #00FF00" }}>BTC/USDT</text>
            <text x="150" y="90" textAnchor="middle" fill="#00FF00" fontSize="12" fontWeight="bold">+9,999%</text>

            {userImage ? (
                <image
                    x="90" y="90" width="120" height="120"
                    href={userImage}
                    clipPath="url(#avatar-clip-coin)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="165" textAnchor="middle" fontSize="60">🚀</text>
            )}

            {/* Name */}
            <text x="150" y="250" textAnchor="middle" fill="white" fontWeight="900" fontSize={Math.min(nameFontSize + 2, 24)} style={{ textTransform: "uppercase", textShadow: "2px 2px 0px #000" }}>
                {userName || "HODLER CHÂN CHÍNH"}
            </text>

            <rect x="70" y="270" width="160" height="45" fill="#F7931A" stroke="white" strokeWidth="3" rx="22" />
            <text x="150" y="298" textAnchor="middle" fill="white" fontWeight="900" fontSize="16" style={{ textShadow: "1px 1px 0px black" }}>HOLD TO DIE</text>

            {/* PNL Box */}
            <rect x="15" y="360" width="270" height="35" fill="#111" stroke="#333" strokeWidth="1" rx="5" />
            <text x="25" y="382" fill="gray" fontSize="10" fontWeight="bold">PNL (Today)</text>
            <text x="280" y="382" textAnchor="end" fill="#00FF00" fontWeight="900" fontSize="14" style={{ textShadow: "0 0 5px #00FF00" }}>+$1,000,000</text>
        </>
    ),
};

// HELPER FUNCTION to get the correct template or fallback
export const getTemplateRender = (templateId: string) => {
    return TemplateStyles[templateId] || ((props: TemplateProps) => (
        <>
            {/* DEFAULT FALLBACK (Construction Mode) */}
            <rect width="300" height="400" fill="#F0F0F0" />
            <pattern id="diagonal-stripe-2" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="5" height="10" transform="translate(0,0)" fill="#000000" opacity="0.1" />
            </pattern>
            <rect width="300" height="400" fill="url(#diagonal-stripe-2)" />

            <rect x="50" y="100" width="200" height="200" fill="#FFD700" stroke="black" strokeWidth="4" />
            <text x="150" y="180" textAnchor="middle" fontSize="60">🚧</text>
            <text x="150" y="230" textAnchor="middle" fontWeight="black" fontSize="20">WORK IN</text>
            <text x="150" y="255" textAnchor="middle" fontWeight="black" fontSize="20">PROGRESS</text>

            <text x="150" y="350" textAnchor="middle" fontSize="12" fill="gray" fontFamily="monospace">Template ID: {props.template.id}</text>
        </>
    ));
};
