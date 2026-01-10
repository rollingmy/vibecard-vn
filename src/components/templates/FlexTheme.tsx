import React from 'react';
import { TemplateProps } from './types';

export const FlexTheme = {
    'chien-than-san-sale': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-sawtooth">
                    <rect x="75" y="160" width="150" height="150" rx="10" />
                </clipPath>
            </defs>

            {/* Paper Background */}
            <rect x="0" y="0" width="300" height="390" fill="#FFF8DC" />

            {/* Jagged Bottom Edge (Receipt style) */}
            <polygon points="0,390 15,400 30,390 45,400 60,390 75,400 90,390 105,400 120,390 135,400 150,390 165,400 180,390 195,400 210,390 225,400 240,390 255,400 270,390 285,400 300,390 300,0 0,0" fill="#FFF8DC" />

            {/* Yellow Header */}
            <rect width="300" height="80" fill="#FFD700" />
            <line x1="0" y1="80" x2="300" y2="80" stroke="black" strokeWidth="4" strokeDasharray="10,5" />

            {/* Title */}
            <text x="150" y="50" textAnchor="middle" fontFamily="monospace" fontWeight="900" fontSize="28" fill="black" letterSpacing="-1" dominantBaseline="middle">
                BILL: SĂN SALE
            </text>

            {/* Decor: Barcode - Moved up slightly to make room */}
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
                <text x="115" y="20" fontSize="14" fontWeight="bold">TOTAL: $0</text>
            </g>

            {/* Avatar Area (Safe Zone: 155-315) */}
            {/* Adjusted Rect to match clip path exactly: 75, 160 */}
            <rect x="75" y="160" width="150" height="150" fill="white" stroke="black" strokeWidth="3" rx="10" />
            {userImage ? (
                <image
                    x="75" y="160" width="150" height="150"
                    href={userImage}
                    clipPath="url(#avatar-clip-sawtooth)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="240" textAnchor="middle" fontSize="40">🛍️</text>
            )}

            {/* Tape on corners */}
            <rect x="65" y="150" width="40" height="15" fill="#FF4500" transform="rotate(-45 65 150)" opacity="0.8" />
            <rect x="235" y="150" width="40" height="15" fill="#FF4500" transform="rotate(45 235 150)" opacity="0.8" />

            {/* NAME - SAFE ZONE: 110-140 */}
            <text x="150" y="110" textAnchor="middle" fontFamily="monospace" fontWeight="bold" fontSize="14" fill="black">
                KHÁCH HÀNG VIP:
            </text>
            {/* Name adjusted to avoid overlap with avatar tape */}
            <text x="150" y="135" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize={Math.min(nameFontSize, 22)} fill="black" textDecoration="underline" dominantBaseline="middle">
                {userName || "TÊN BẠN"}
            </text>
        </>
    ),

    'flex-den-hoi-tho-cuoi': ({ userName, userImage, nameFontSize }: TemplateProps) => (
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
                {userName || "USER NAME"}
            </text>

            <text x="150" y="360" textAnchor="middle" fill="#555" fontSize="10">ACCOUNT NO.</text>
            <text x="150" y="375" textAnchor="middle" fill="#888" fontFamily="monospace" fontSize="14">8888 8888 8888</text>
        </>
    ),

    'dai-gia-ngam': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <linearGradient id="luxury-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#bf953f" />
                    <stop offset="25%" stopColor="#fcf6ba" />
                    <stop offset="50%" stopColor="#b38728" />
                    <stop offset="75%" stopColor="#fbf5b7" />
                    <stop offset="100%" stopColor="#aa771c" />
                </linearGradient>
                <pattern id="damask-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M20,0 Q30,10 40,0 Q30,-10 20,0 M20,40 Q30,50 40,40 Q30,30 20,40 M0,20 Q10,30 20,20 Q10,10 0,20"
                        fill="none" stroke="#8B4513" strokeWidth="1" opacity="0.1" />
                </pattern>

                <clipPath id="avatar-clip-frame">
                    <rect x="50" y="80" width="200" height="240" rx="5" />
                </clipPath>
                {/* Glass reflection gradient */}
                <linearGradient id="glass-reflection" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="white" stopOpacity="0" />
                    <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                </linearGradient>
            </defs>

            {/* 1. NỀN & HỌA TIẾT (Luxury Pattern) */}
            <rect width="300" height="400" fill="url(#luxury-gold-grad)" />
            <rect width="300" height="400" fill="url(#damask-pattern)" />

            {/* 4. PHONG CÁCH CHUNG - Thick Black Border */}
            <rect x="5" y="5" width="290" height="390" fill="none" stroke="black" strokeWidth="8" />
            <rect x="10" y="10" width="280" height="380" fill="none" stroke="#B8860B" strokeWidth="2" />

            {/* 2. KHUNG AVATAR (The Executive Frame) */}
            {/* Ornamental Corners */}
            <g stroke="#5c4033" strokeWidth="2" fill="none">
                <path d="M45,75 L65,75 M45,75 L45,95" strokeWidth="4" />
                <path d="M255,75 L235,75 M255,75 L255,95" strokeWidth="4" />
                <path d="M45,325 L65,325 M45,325 L45,305" strokeWidth="4" />
                <path d="M255,325 L235,325 M255,325 L255,305" strokeWidth="4" />
            </g>

            <rect x="50" y="80" width="200" height="240" fill="#1a1a1a" stroke="#8B4513" strokeWidth="4" />

            {userImage ? (
                <image
                    x="50" y="80" width="200" height="240"
                    href={userImage}
                    clipPath="url(#avatar-clip-frame)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="200" textAnchor="middle" fontSize="60">🦁</text>
            )}

            {/* Glass Overlay Effect */}
            <rect x="50" y="80" width="200" height="240" fill="url(#glass-reflection)" opacity="0.6" pointerEvents="none" />

            {/* Top Stats */}
            <g transform="translate(150, 50)">
                <text x="0" y="0" textAnchor="middle" fontFamily="serif" fontSize="18" fontWeight="bold" fill="black">THE CHAIRMAN</text>
                <line x1="-50" y1="10" x2="50" y2="10" stroke="black" strokeWidth="1" />
            </g>


            {/* Name at Bottom - Serif Classic */}
            <g transform="translate(150, 360)">
                <text x="0" y="-15" textAnchor="middle" fontFamily="serif" fontSize="12" fill="#333" fontStyle="italic">Identity:</text>
                {/* 4. TYPOGRAPHY - Glowing HIDDEN */}
                <text x="0" y="25" textAnchor="middle" fontFamily="serif" fontSize="32" fontWeight="bold" fill="black" opacity="0.1">HIDDEN</text>
                <text x="0" y="25" textAnchor="middle" fontFamily="serif" fontSize="32" fontWeight="bold" fill="transparent" stroke="black" strokeWidth="1" strokeDasharray="2 2" opacity="0.3">HIDDEN</text>

                <text x="0" y="5" textAnchor="middle" fontFamily="serif" fontWeight="900" fontSize={Math.min(nameFontSize, 26)} fill="black" letterSpacing="1"
                    style={{ textShadow: "1px 1px 0px white" }}>
                    {userName ? userName.toUpperCase() : "CHỦ TỊCH GIẢ KHỔ"}
                </text>
            </g>

            {/* 3. CHI TIẾT "TUYỆT MẬT" */}
            <g transform="translate(230, 290) rotate(-20)">
                <rect x="-30" y="-15" width="60" height="30" fill="none" stroke="#8B0000" strokeWidth="3" rx="4" />
                <text x="0" y="5" textAnchor="middle" fill="#8B0000" fontSize="10" fontWeight="900" fontFamily="sans-serif">TOP SECRET</text>
            </g>

            {/* Serial Number */}
            <text x="150" y="390" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="black" opacity="0.7">ID: 0000-0001-ELITE</text>
        </>
    ),

    'tap-doan-da-cap': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-pyramid">
                    <circle cx="150" cy="110" r="50" />
                </clipPath>
                <linearGradient id="blue-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#000080" />
                    <stop offset="100%" stopColor="#0000CD" />
                </linearGradient>
                <linearGradient id="gold-border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#bf953f" />
                    <stop offset="25%" stopColor="#fcf6ba" />
                    <stop offset="50%" stopColor="#b38728" />
                    <stop offset="75%" stopColor="#fbf5b7" />
                    <stop offset="100%" stopColor="#aa771c" />
                </linearGradient>
            </defs>

            {/* Business Blue Background with Thick Black Border */}
            <rect width="300" height="400" fill="url(#blue-grad)" />
            <rect x="5" y="5" width="290" height="390" fill="none" stroke="black" strokeWidth="5" />

            {/* Pyramid Grid Lines */}
            <path d="M0,400 L150,150 L300,400" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
            <path d="M50,400 L150,230 L250,400" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />

            {/* 1. HIỆU ỨNG TIỀN TỆ (Money Rain) */}
            <g opacity="0.8">
                <text x="20" y="60" fontSize="24">💸</text>
                <text x="260" y="80" fontSize="24">💎</text>
                <text x="40" y="300" fontSize="20">💲</text>
                <text x="250" y="280" fontSize="20">💲</text>
                <text x="10" y="150" fontSize="16">💎</text>
                <text x="270" y="160" fontSize="16">💸</text>
            </g>

            {/* Arrows Up - High Contrast */}
            <path d="M150,340 L150,280 M150,280 L130,300 M150,280 L170,300" stroke="#00FF00" strokeWidth="6" strokeLinecap="round" />
            <path d="M150,340 L150,280 M150,280 L130,300 M150,280 L170,300" stroke="white" strokeWidth="2" strokeLinecap="round" />

            {/* 2. NÂNG CẤP "PASSIVE INCOME" */}
            <text x="150" y="365" textAnchor="middle" fill="#00FF00" fontWeight="900" fontSize="20" stroke="black" strokeWidth="0.5" style={{ textShadow: "0 0 10px #00FF00" }}>PASSIVE INCOME</text>

            {/* Top Crown */}
            <text x="150" y="50" textAnchor="middle" fontSize="40">👑</text>

            {/* 4. CHI TIẾT AVATAR (Gold Gradient Border) */}
            {/* Glow effect under avatar */}
            <circle cx="150" cy="110" r="54" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.5" filter="blur(4px)" />
            {/* Main Avatar Border */}
            <circle cx="150" cy="110" r="54" fill="#FFD700" stroke="url(#gold-border-grad)" strokeWidth="4" />

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

            {/* 3. THÊM CHỈ SỐ "LÀM GIÀU" */}
            <rect x="0" y="380" width="300" height="20" fill="#FFD700" stroke="black" strokeWidth="1" />
            <text x="150" y="394" textAnchor="middle" fontSize="12" fontWeight="900" fill="black">
                TỰ DO TÀI CHÍNH: 100% 🚀
            </text>
        </>
    ),

    'rich-kid-tu-than': ({ userName, userImage, nameFontSize }: TemplateProps) => (
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
                {userName || "KID 102"}
            </text>
        </>
    ),

    'co-dat-dai-gia': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-rect">
                    <rect x="75" y="140" width="150" height="180" />
                </clipPath>
                {/* Enhanced Guilloche Pattern */}
                <pattern id="guilloche-complex" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M0,30 Q15,0 30,30 T60,30" fill="none" stroke="#FF1493" strokeWidth="0.5" opacity="0.4" />
                    <path d="M0,30 Q15,60 30,30 T60,30" fill="none" stroke="#FF1493" strokeWidth="0.5" opacity="0.4" />
                    <circle cx="30" cy="30" r="10" fill="none" stroke="#FF1493" strokeWidth="0.5" opacity="0.3" />
                </pattern>
            </defs>

            {/* Red/Pink Background - Higher Contrast */}
            <rect width="300" height="400" fill="#FFC0CB" />
            <rect width="300" height="400" fill="url(#guilloche-complex)" />

            {/* 3. CHI TIẾT "SỔ HỒNG" - Border Frame */}
            <rect x="15" y="15" width="270" height="370" fill="none" stroke="#8B0000" strokeWidth="3" />
            <rect x="10" y="10" width="280" height="380" fill="none" stroke="#8B0000" strokeWidth="1" strokeDasharray="3 3" />

            {/* Header - Official Style */}
            <g transform="translate(150, 50)">
                {/* Emblem / Quoc Huy Placeholder */}
                <circle cx="0" cy="0" r="18" fill="none" stroke="#8B0000" strokeWidth="1" />
                <path d="M-10,0 L10,0 M0,-10 L0,10" stroke="#8B0000" strokeWidth="1" />

                <text y="35" textAnchor="middle" fontWeight="bold" fontSize="18" fill="#8B0000" fontFamily="serif">GIẤY CHỨNG NHẬN</text>
                <text y="55" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#8B0000" fontFamily="serif">QUYỀN SỬ DỤNG ĐẤT (VÀ NGƯỜI YÊU)</text>
                <line x1="-100" y1="65" x2="100" y2="65" stroke="#8B0000" strokeWidth="1" />
            </g>

            {/* 4. typography & MÀU SẮC alignment */}
            <text x="30" y="130" fontSize="12" fill="black" fontFamily="serif">I. Tên chủ sở hữu:</text>

            <text x="135" y="130" textAnchor="start" fontWeight="900" fontSize={Math.min(nameFontSize + 2, 22)} fill="#8B0000" style={{ textTransform: "uppercase" }} fontFamily="serif">
                {userName || "ÔNG TRÙM ĐẤT"}
            </text>
            {/* Fix alignment to ensure name is clearly associated */}
            <line x1="135" y1="135" x2="280" y2="135" stroke="black" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />


            {/* Avatar Box (Photo) */}
            <rect x="75" y="150" width="150" height="180" fill="white" stroke="#8B0000" strokeWidth="1" />
            {userImage ? (
                <image
                    x="75" y="150" width="150" height="180"
                    href={userImage}
                    clipPath="url(#avatar-clip-rect)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="250" textAnchor="middle" fontSize="40">🏠</text>
            )}

            {/* 2. THÊM CON DẤU ĐỎ (The Official Stamp) */}
            <g transform="translate(200, 310) rotate(-15)" opacity="0.9">
                <circle cx="0" cy="0" r="35" fill="none" stroke="#dc2626" strokeWidth="3" />
                <circle cx="0" cy="0" r="32" fill="none" stroke="#dc2626" strokeWidth="1" />
                <text x="0" y="5" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold">CHÍNH CHỦ</text>
                <text x="0" y="-15" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold">SỞ TÀI NGUYÊN</text>
                <text x="0" y="20" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold">ĐÃ CẤP SỔ</text>
                <path d="M-10,0 L10,0" stroke="#dc2626" strokeWidth="1" />
            </g>

            {/* Bottom Info & Barcode */}
            <g transform="translate(150, 360)">
                <text x="0" y="0" textAnchor="middle" fontSize="10" fill="black" fontStyle="italic">Số vào sổ cấp GCN: CH-56789</text>
                {/* Barcode */}
                <g transform="translate(-40, 10)">
                    <rect x="0" y="0" width="2" height="20" fill="black" />
                    <rect x="4" y="0" width="1" height="20" fill="black" />
                    <rect x="6" y="0" width="3" height="20" fill="black" />
                    <rect x="12" y="0" width="2" height="20" fill="black" />
                    <rect x="16" y="0" width="4" height="20" fill="black" />
                    <rect x="22" y="0" width="1" height="20" fill="black" />
                    <rect x="26" y="0" width="3" height="20" fill="black" />
                    <rect x="32" y="0" width="1" height="20" fill="black" />
                    <rect x="35" y="0" width="2" height="20" fill="black" />
                    <rect x="40" y="0" width="4" height="20" fill="black" />
                    <rect x="46" y="0" width="2" height="20" fill="black" />
                    <rect x="50" y="0" width="3" height="20" fill="black" />
                    <rect x="55" y="0" width="1" height="20" fill="black" />
                    <rect x="58" y="0" width="4" height="20" fill="black" />
                    <rect x="64" y="0" width="2" height="20" fill="black" />
                    <rect x="68" y="0" width="3" height="20" fill="black" />
                    <rect x="74" y="0" width="1" height="20" fill="black" />
                    <rect x="78" y="0" width="2" height="20" fill="black" />
                </g>
            </g>
        </>
    ),

    'shark-tank-deal': ({ userName, userImage, nameFontSize }: TemplateProps) => (
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

    'the-black-card': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <linearGradient id="silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C0C0C0" />
                    <stop offset="50%" stopColor="#E8E8E8" />
                    <stop offset="100%" stopColor="#A9A9A9" />
                </linearGradient>
                <clipPath id="avatar-clip-full-right">
                    <rect x="150" y="0" width="150" height="400" />
                </clipPath>
            </defs>

            {/* Matter Black Background */}
            <rect width="300" height="400" fill="#111111" />

            {/* 1. HERO PHOTO (Watermark style) - Right half */}
            {userImage ? (
                <image
                    x="150" y="0" width="150" height="400"
                    href={userImage}
                    clipPath="url(#avatar-clip-full-right)"
                    preserveAspectRatio="xMidYMid slice"
                    opacity="0.4"
                    style={{ filter: "grayscale(100%) contrast(1.2)" }}
                />
            ) : (
                <text x="225" y="200" textAnchor="middle" fontSize="100" fill="#333" opacity="0.5">🦅</text>
            )}

            {/* 4. PHONG CÁCH CHUNG - Silver Border */}
            <rect x="5" y="5" width="290" height="390" fill="none" stroke="#E8E8E8" strokeWidth="2" />

            {/* Silver Header */}
            <text x="20" y="40" fontFamily="sans-serif" fontSize="14" fill="url(#silver-grad)" fontStyle="italic" fontWeight="bold" style={{ textShadow: "0 0 5px #FFD700" }}>AMERICAN FLEX</text>
            <text x="260" y="40" fontFamily="monospace" fontSize="12" fill="white" textAnchor="end" style={{ textShadow: "0 0 5px #FFD700" }}>PLATINUM</text>

            {/* Chip */}
            <rect x="30" y="80" width="50" height="40" rx="5" fill="#FFD700" stroke="#B8860B" strokeWidth="1" />
            <path d="M30,100 L80,100 M55,80 L55,120 M40,80 Q55,100 70,80 M40,120 Q55,100 70,120" stroke="#B8860B" strokeWidth="1" fill="none" />

            {/* Wifi Icon */}
            <path d="M260,100 Q270,90 280,100 M265,105 Q270,100 275,105" stroke="white" strokeWidth="2" fill="none" />


            {/* Name Big Silver Embossed */}
            <text x="20" y="180" fontSize="10" fill="gray">MEMBER SINCE</text>
            <text x="20" y="200" fontSize="14" fill="white">2077</text>

            {/* 2. CẤU TRÚC LẠI VĂN BẢN - Embossed Name */}
            <text x="30" y="320" textAnchor="start" fontWeight="900" fontSize={Math.min(nameFontSize, 24)} fill="url(#silver-grad)" letterSpacing="2" fontFamily="monospace"
                style={{ textShadow: "1px 1px 0px #000, -1px -1px 0px #555, 2px 2px 4px black" }}>
                {userName ? userName.toUpperCase() : "THIEU GIA NGAM"}
            </text>

            {/* Embossed Numbers */}
            <text x="150" y="360" textAnchor="middle" fontFamily="monospace" fontSize="20" fill="url(#silver-grad)" letterSpacing="2" style={{ textShadow: "1px 1px 2px black" }}>
                0000 0000 0000 FLEX
            </text>

            {/* 3. CHI TIẾT "NHÀ GIÀU" */}
            <text x="280" y="140" textAnchor="end" fontSize="10" fill="white" fontWeight="bold" fontStyle="italic" opacity="0.8">LIMITLESS CREDIT</text>

            {/* Top 1% Global Seal */}
            <g transform="translate(40, 240)" opacity="0.3">
                <circle cx="0" cy="0" r="25" fill="none" stroke="white" strokeWidth="1" />
                <text x="0" y="4" textAnchor="middle" fontSize="6" fill="white" fontFamily="serif">TOP 1% GLOBAL</text>
            </g>

            <text x="230" y="385" textAnchor="middle" fill="gray" fontSize="8" letterSpacing="1">AUTHORIZED SIGNATURE</text>
        </>
    ),

    'nha-suu-tap-xe': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-circle">
                    <circle cx="150" cy="140" r="80" />
                </clipPath>
                <linearGradient id="carbon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f0f0f" />
                    <stop offset="50%" stopColor="#1a1a1a" />
                    <stop offset="100%" stopColor="#0a0a0a" />
                </linearGradient>
                <pattern id="carbon-patt" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <rect width="4" height="4" fill="#222" />
                    <rect x="4" y="4" width="4" height="4" fill="#222" />
                </pattern>

                {/* 2. QUY HOẠCH LẠI GARAGE: Headlight beams */}
                <linearGradient id="headlight-beam" x1="0.5" y1="1" x2="0.5" y2="0">
                    <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* 5. NỀN (The Road) - Asphalt & Lane Markings */}
            <rect width="300" height="400" fill="url(#carbon-grad)" />
            <rect width="300" height="400" fill="url(#carbon-patt)" opacity="0.3" />

            {/* Lane markings vanishing */}
            <path d="M150,250 L50,400 M150,250 L250,400" stroke="#333" strokeWidth="2" strokeDasharray="10 5" opacity="0.5" />
            <path d="M0,350 L300,350" stroke="#333" strokeWidth="1" strokeDasharray="5 5" opacity="0.2" />

            {/* Thick Dark Frame */}
            <rect x="5" y="5" width="290" height="390" fill="none" stroke="#333" strokeWidth="10" rx="15" />
            <rect x="10" y="10" width="280" height="380" fill="none" stroke="crimson" strokeWidth="2" rx="10" />

            {/* 1. NÂNG CẤP ĐỒNG HỒ TỐC ĐỘ (The Speedometer Frame) */}
            <g transform="translate(150, 140)">
                {/* Ticks */}
                <path d="M-90,0 A90,90 0 1,1 90,0" fill="none" stroke="#444" strokeWidth="15" strokeLinecap="round" />
                <path d="M-90,0 A90,90 0 1,1 90,0" fill="none" stroke="crimson" strokeWidth="3" strokeDasharray="2 5" strokeLinecap="round" opacity="0.8" />

                {/* Numbers */}
                <text x="-105" y="10" textAnchor="middle" fill="cyan" fontSize="14" fontWeight="bold" style={{ textShadow: "0 0 5px cyan" }}>0</text>
                <text x="-60" y="-80" textAnchor="middle" fill="cyan" fontSize="14" fontWeight="bold" style={{ textShadow: "0 0 5px cyan" }}>100</text>
                <text x="60" y="-80" textAnchor="middle" fill="cyan" fontSize="14" fontWeight="bold" style={{ textShadow: "0 0 5px cyan" }}>200</text>
                <text x="105" y="10" textAnchor="middle" fill="red" fontSize="14" fontWeight="bold" style={{ textShadow: "0 0 5px red" }}>300</text>

                {/* Needle */}
                <path d="M0,0 L80,40" stroke="red" strokeWidth="4" strokeLinecap="round" transform="rotate(30)" />
                <circle cx="0" cy="0" r="5" fill="#333" stroke="white" strokeWidth="1" />
            </g>

            {/* Avatar */}
            <circle cx="150" cy="140" r="85" fill="none" stroke="#222" strokeWidth="5" />
            {userImage ? (
                <image
                    x="70" y="60" width="160" height="160"
                    href={userImage}
                    clipPath="url(#avatar-clip-circle)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="155" textAnchor="middle" fontSize="60">🏎️</text>
            )}

            {/* Glowing Logo 'V' */}
            <circle cx="150" cy="225" r="25" fill="#111" stroke="#FFD700" strokeWidth="2" />
            <text x="150" y="235" textAnchor="middle" fontSize="24" fill="#FFD700" fontWeight="900" style={{ textShadow: "0 0 10px #FFD700" }}>V</text>


            {/* 2. QUY HOẠCH LẠI GARAGE - Car Silhouettes */}
            <g transform="translate(0, 260)">
                {/* Headlights shining up */}
                <path d="M50,40 L30,-50 L70,-50 Z" fill="url(#headlight-beam)" opacity="0.3" />
                <path d="M150,40 L130,-50 L170,-50 Z" fill="url(#headlight-beam)" opacity="0.4" />
                <path d="M250,40 L230,-50 L270,-50 Z" fill="url(#headlight-beam)" opacity="0.3" />

                {/* Silhouette 1 */}
                <path d="M30,40 Q50,20 70,40 L80,40 L80,50 L20,50 L20,40 Z" fill="#333" />
                {/* Silhouette 2 (Center - Hero) */}
                <path d="M120,40 Q150,10 180,40 L195,40 L195,50 L105,50 L105,40 Z" fill="#555" />
                {/* Silhouette 3 */}
                <path d="M230,40 Q250,20 270,40 L280,40 L280,50 L220,50 L220,40 Z" fill="#333" />
            </g>

            {/* 3. BIỂN SỐ & TÊN (The License Plate) */}
            <g transform="translate(50, 310)">
                {/* Plate Body */}
                <rect x="0" y="0" width="200" height="55" fill="#FFD700" stroke="black" strokeWidth="4" rx="5"
                    style={{ filter: "drop-shadow(4px 4px 0px black)" }} />
                {/* Inner Border */}
                <rect x="5" y="5" width="190" height="45" fill="none" stroke="black" strokeWidth="1" rx="2" />

                {/* Screws */}
                <circle cx="15" cy="15" r="3" fill="black" />
                <circle cx="185" cy="15" r="3" fill="black" />
                <circle cx="15" cy="40" r="3" fill="black" />
                <circle cx="185" cy="40" r="3" fill="black" />

                {/* Country Strip */}
                <rect x="5" y="5" width="30" height="45" fill="#003399" opacity="0.8" />
                <text x="20" y="20" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">VN</text>
                <text x="20" y="40" textAnchor="middle" fontSize="16">⭐</text>

                {/* Name - Embossed Effect */}
                <text x="115" y="38" textAnchor="middle" fontFamily="monospace" fontWeight="900" fontSize={Math.min(nameFontSize, 24)} fill="black"
                    style={{ textTransform: "uppercase", letterSpacing: "2px" }}>
                    {userName || "SUPERCAR"}
                </text>
            </g>

            {/* 4. THÊM CAPTION "CHÁY PHỐ" */}
            <text x="150" y="385" textAnchor="middle" fontSize="10" fill="#ccc" fontStyle="italic">
                "Gara chật quá, phải để bớt ngoài vỉa hè"
            </text>
        </>
    ),

    'king-of-bitcoin': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-coin">
                    <circle cx="150" cy="150" r="70" />
                </clipPath>
                <linearGradient id="gold-text-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="50%" stopColor="#B8860B" />
                    <stop offset="100%" stopColor="#FFFFE0" />
                </linearGradient>
                <radialGradient id="holy-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Terminal Black BG */}
            <rect width="300" height="400" fill="#050505" />

            {/* 2. ĐẠI PHẪU BIỂU ĐỒ (The Pump Background) */}
            {/* Chart Grid */}
            <path d="M0,100 L300,100 M0,200 L300,200 M0,300 L300,300" stroke="#222" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M100,0 L100,400 M200,0 L200,400" stroke="#222" strokeWidth="1" strokeDasharray="2 2" />

            {/* Dense Green Candles (Pump) */}
            <g opacity="0.6">
                <rect x="10" y="350" width="8" height="40" fill="#00FF00" />
                <line x1="14" y1="390" x2="14" y2="340" stroke="#00FF00" strokeWidth="1" />

                <rect x="30" y="320" width="8" height="50" fill="#00FF00" />
                <line x1="34" y1="370" x2="34" y2="310" stroke="#00FF00" strokeWidth="1" />

                <rect x="50" y="280" width="8" height="60" fill="#00FF00" />
                <rect x="70" y="250" width="8" height="40" fill="#00FF00" />
                <rect x="90" y="200" width="8" height="80" fill="#00FF00" />
                <rect x="110" y="180" width="8" height="30" fill="#FF0000" /> {/* Slight dip */}
                <rect x="130" y="150" width="8" height="60" fill="#00FF00" />
                <rect x="150" y="100" width="8" height="80" fill="#00FF00" />
                <rect x="170" y="80" width="8" height="40" fill="#00FF00" />
                <rect x="190" y="50" width="8" height="70" fill="#00FF00" />
                <rect x="210" y="40" width="8" height="50" fill="#00FF00" />
                <rect x="230" y="20" width="8" height="60" fill="#00FF00" />
                <rect x="250" y="60" width="8" height="30" fill="#FF0000" /> {/* Profit taking */}
                <rect x="270" y="10" width="8" height="90" fill="#00FF00" />
                <rect x="290" y="0" width="8" height="40" fill="#00FF00" />
            </g>

            {/* Neon MA Lines */}
            <path d="M0,380 Q100,300 150,200 T300,50" fill="none" stroke="cyan" strokeWidth="2" opacity="0.8" />
            <path d="M0,350 Q120,320 200,150 T300,20" fill="none" stroke="magenta" strokeWidth="2" opacity="0.8" />

            {/* Overlay Gradient for Focus */}
            <radialGradient id="center-glow">
                <stop offset="0%" stopColor="#000" stopOpacity="0" />
                <stop offset="100%" stopColor="#000" stopOpacity="0.7" />
            </radialGradient>
            <rect width="300" height="400" fill="url(#center-glow)" />

            {/* 3. HIỆU ỨNG "KING" CHO AVATAR */}
            {/* Radiant Glow Behind */}
            <circle cx="150" cy="150" r="100" fill="url(#holy-glow)" opacity="0.6" />

            {/* Coin Avatar - Golden Bitcoin Style */}
            <circle cx="150" cy="150" r="75" fill="#F7931A" stroke="white" strokeWidth="4" />
            <circle cx="150" cy="150" r="68" fill="none" stroke="#B36800" strokeWidth="2" strokeDasharray="4 4" />

            {/* 1. NÂNG CẤP TIÊU ĐỀ */}
            <text x="150" y="60" textAnchor="middle" fill="url(#gold-text-grad)" fontSize="26" fontWeight="900"
                style={{ textShadow: "0 2px 0px #000, 0 0 10px #FFD700" }}>KING OF BITCOIN</text>
            <text x="150" y="80" textAnchor="middle" fill="#00FF00" fontSize="14" fontWeight="bold"
                style={{ textShadow: "0 0 10px #00FF00" }}>BTC/USDT +99,999%</text>

            {userImage ? (
                <image
                    x="80" y="80" width="140" height="140"
                    href={userImage}
                    clipPath="url(#avatar-clip-coin)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="165" textAnchor="middle" fontSize="60">🚀</text>
            )}

            {/* Gold Crown */}
            <text x="150" y="90" textAnchor="middle" fontSize="40" transform="rotate(-10 150 90)" style={{ filter: "drop-shadow(2px 2px 0px black)" }}>👑</text>

            {/* Name */}
            <text x="150" y="250" textAnchor="middle" fill="white" fontWeight="900" fontSize={Math.min(nameFontSize + 2, 24)} style={{ textTransform: "uppercase", textShadow: "2px 2px 0px #000" }}>
                {userName || "HODLER CHÂN CHÍNH"}
            </text>

            {/* 4. CHI TIẾT "NHÀ GIÀU" - Falling Coins */}
            <text x="30" y="340" fontSize="20" opacity="0.8">💰</text>
            <text x="260" y="320" fontSize="20" opacity="0.8">🟡</text>
            <text x="80" y="380" fontSize="16" opacity="0.8">🪙</text>
            <text x="220" y="380" fontSize="16" opacity="0.8">💰</text>

            <g transform="translate(60, 270)">
                {/* Neubrutalism Button */}
                <rect x="0" y="0" width="180" height="45" fill="#F7931A" stroke="white" strokeWidth="3" rx="5"
                    style={{ filter: "drop-shadow(4px 4px 0px black)" }} />
                <text x="90" y="30" textAnchor="middle" fill="white" fontWeight="900" fontSize="16" style={{ textShadow: "1px 1px 0px black" }}>TO THE MOON 🚀</text>
            </g>

            {/* PNL Box */}
            <rect x="15" y="350" width="270" height="30" fill="#111" stroke="#333" strokeWidth="1" rx="5" opacity="0.8" />
            <text x="25" y="370" fill="gray" fontSize="10" fontWeight="bold">PNL (Today)</text>
            <text x="280" y="370" textAnchor="end" fill="#00FF00" fontWeight="900" fontSize="14" style={{ textShadow: "0 0 5px #00FF00" }}>+$1,000,000</text>
        </>
    ),

    'can-cuoc-gen-z': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-rounded-modern">
                    <rect x="15" y="115" width="110" height="140" rx="15" />
                </clipPath>
                {/* Holographic Gradient */}
                <linearGradient id="holo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.8" />
                    <stop offset="25%" stopColor="#E0FFFF" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#87CEEB" stopOpacity="0.8" />
                    <stop offset="75%" stopColor="#E0FFFF" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.8" />
                </linearGradient>
                {/* Metallic Gold Filter */}
                <filter id="metallic-gold-chip">
                    <feSpecularLighting result="specOut" specularExponent="20" lightingColor="#ffd700">
                        <fePointLight x="-5000" y="-10000" z="20000" />
                    </feSpecularLighting>
                    <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
                </filter>
                {/* Soft Card Shadow */}
                <filter id="card-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000" floodOpacity="0.3" />
                </filter>
                {/* Security Pattern */}
                <pattern id="security-waves" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M0,10 Q5,0 10,10 T20,10" fill="none" stroke="#ccc" strokeWidth="0.5" opacity="0.3" />
                </pattern>
            </defs>

            {/* Main Content Wrapper for Floating Effect */}
            <g transform="translate(10, 10) scale(0.93)" filter="url(#card-shadow)">

                {/* Light Metallic Background with Security Pattern */}
                <rect width="300" height="400" fill="#F0F8FF" rx="10" />
                <rect width="300" height="400" fill="url(#security-waves)" rx="10" />

                {/* Holographic Blue Blocks */}
                <path d="M0,0 L300,120 L300,0 Z" fill="url(#holo-grad)" opacity="0.9" style={{ mixBlendMode: 'multiply' }} />
                <path d="M0,400 L300,280 L0,280 Z" fill="url(#holo-grad)" opacity="0.9" style={{ mixBlendMode: 'multiply' }} />

                {/* ID Header */}
                <rect x="20" y="30" width="40" height="40" rx="8" fill="black" />
                <path d="M30,50 L50,50 M40,40 L40,60" stroke="white" strokeWidth="4" />

                <text x="80" y="55" fontSize="24" fontWeight="900" letterSpacing="-1" fill="#333">CITIZEN ID</text>
                <text x="80" y="75" fontSize="12" fontFamily="monospace" fill="gray" letterSpacing="2">PLANET: Z-420</text>

                {/* Photo Area (Left) - Rounded Modern */}
                <rect x="15" y="115" width="110" height="140" fill="white" stroke="#ccc" strokeWidth="1" rx="15" />
                {userImage ? (
                    <image
                        x="15" y="115" width="110" height="140"
                        href={userImage}
                        clipPath="url(#avatar-clip-rounded-modern)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                ) : (
                    <text x="70" y="200" textAnchor="middle" fontSize="30">👽</text>
                )}

                {/* Info Lines (Right) */}
                <g transform="translate(130, 120)">
                    <text x="0" y="15" fontSize="10" fill="gray" fontWeight="bold">NAME</text>
                    <text x="0" y="35" fontSize={Math.min(nameFontSize, 14)} fontWeight="bold" fill="#000">{userName || "CÔNG DÂN GƯƠNG MẪU"}</text>
                    <line x1="0" y1="45" x2="160" y2="45" stroke="black" strokeWidth="1" opacity="0.2" />

                    <text x="0" y="75" fontSize="10" fill="gray" fontWeight="bold">DOB</text>
                    <text x="0" y="95" fontSize="14" fontFamily="monospace" fill="#000">2000-??-??</text>

                    <text x="0" y="135" fontSize="10" fill="gray" fontWeight="bold">CLASS</text>
                    <text x="0" y="155" fontSize="14" fontWeight="bold" fill="red" style={{ textShadow: "0 0 5px red" }}>S-TIER</text>
                </g>

                {/* Metallic Gold Chip */}
                <rect x="25" y="300" width="50" height="35" fill="#FFD700" stroke="#B8860B" strokeWidth="1" rx="6" filter="url(#metallic-gold-chip)" />
                <path d="M30,317 L70,317 M50,300 L50,335" stroke="#B8860B" strokeWidth="1" opacity="0.6" />

                <text x="90" y="325" fontSize="12" fontFamily="monospace" fill="#333">ID: 84-098-FLEX-VN</text>

                {/* Bottom Status Bar */}
                <rect x="0" y="370" width="300" height="30" fill="black" rx="0 0 10 10" />
                <text x="150" y="390" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Check-in hành tinh Z với tấm thẻ quyền năng nhất.</text>
            </g>
        </>
    ),

    'the-bai-ma-thuat': ({ userName, userImage, nameFontSize }: TemplateProps) => (
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
            {/* Inner Dark Border */}
            <rect x="20" y="20" width="260" height="360" rx="2" fill="none" stroke="black" strokeWidth="2" />

            {/* Card Header - Safe Zone Top */}
            <path d="M25,25 H275 V60 H25 Z" fill="#DAA520" stroke="black" strokeWidth="1" />
            <text x="35" y="48" fontSize="18" fontWeight="bold" fontFamily="serif" dominantBaseline="middle">Dark Magician</text>
            <circle cx="260" cy="42" r="8" fill="purple" stroke="black" />

            {/* Avatar Box (Sharp) - Safe Zone: 85-295 */}
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

            {/* Description Box - Safe Zone Bottom */}
            <rect x="25" y="310" width="250" height="70" fill="#F5DEB3" stroke="black" strokeWidth="2" />
            <text x="35" y="330" fontSize="14" fontWeight="bold">[{userName || "SUMMONER"}]</text>
            <text x="35" y="350" fontSize="10" fontFamily="serif">"Người sở hữu tấm thẻ này có khả năng</text>
            <text x="35" y="362" fontSize="10" fontFamily="serif">thức đêm vô tận và ngủ bù vào ban ngày."</text>

            {/* ATK/DEF */}
            <text x="180" y="375" fontSize="10" fontWeight="bold">ATK/ 9999  DEF/ 9999</text>
        </>
    ),

    // ===================================
    // 60. SPACE TRAVELER (Flex)
    // ===================================
    'space-traveler': ({ userName, userImage, nameFontSize }: TemplateProps) => (
        <>
            <defs>
                <clipPath id="avatar-clip-helmet-space">
                    <circle cx="150" cy="150" r="72" />
                </clipPath>
                {/* 1. HIỆU ỨNG THỊ GIÁC (Visual Effects) */}
                <linearGradient id="visor-glass" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="30%" stopColor="white" stopOpacity="0" />
                    <stop offset="48%" stopColor="white" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="white" stopOpacity="0.4" />
                    <stop offset="52%" stopColor="#87CEEB" stopOpacity="0.6" /> {/* Cyan tint */}
                    <stop offset="60%" stopColor="white" stopOpacity="0" />
                </linearGradient>

                <radialGradient id="nebula-purple" cx="100%" cy="0%" r="80%" fx="100%" fy="0%">
                    <stop offset="0%" stopColor="#4B0082" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="nebula-blue" cx="0%" cy="100%" r="80%" fx="0%" fy="100%">
                    <stop offset="0%" stopColor="#000080" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>

                <filter id="glow-orange">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Galaxy BG - 3. CHI TIẾT NỀN */}
            <rect width="300" height="400" fill="#050505" />
            <rect width="300" height="400" fill="url(#nebula-purple)" style={{ mixBlendMode: 'screen' }} />
            <rect width="300" height="400" fill="url(#nebula-blue)" style={{ mixBlendMode: 'screen' }} />

            {/* Stars */}
            <circle cx="20" cy="20" r="1.5" fill="white" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="280" cy="50" r="1" fill="white" opacity="0.6" />
            <circle cx="150" cy="30" r="1" fill="white" opacity="0.7" />
            <circle cx="80" cy="350" r="1.5" fill="cyan" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="250" cy="250" r="1" fill="white" opacity="0.5" />

            {/* Astronaut Helmet - 4. GIỮ NGUYÊN CẤU TRÚC */}
            <circle cx="150" cy="160" r="92" fill="#dcdcdc" stroke="#555" strokeWidth="2" />
            <path d="M150,160 L150,250 M150,160 L70,200" stroke="#999" strokeWidth="1" opacity="0.5" />

            {/* Tech Details on Helmet */}
            <path d="M58,160 A92,92 0 0,0 242,160" fill="none" stroke="#555" strokeWidth="1" strokeDasharray="5 2" opacity="0.5" />

            {/* Visor Area - Darker for Cinematic contrast */}
            <circle cx="150" cy="150" r="75" fill="#080808" stroke="#333" strokeWidth="3" />

            {/* Avatar inside Visor */}
            {userImage ? (
                <image
                    x="75" y="75" width="150" height="150"
                    href={userImage}
                    clipPath="url(#avatar-clip-helmet-space)"
                    preserveAspectRatio="xMidYMid slice"
                />
            ) : (
                <text x="150" y="170" textAnchor="middle" fontSize="60">👩‍🚀</text>
            )}

            {/* 1. HIỆU ỨNG THỊ GIÁC: Lens flare/Glossy reflection */}
            <circle cx="150" cy="150" r="75" fill="url(#visor-glass)" pointerEvents="none" />
            <path d="M110,90 Q150,70 190,90" fill="none" stroke="white" strokeWidth="2" opacity="0.4" />

            {/* Suit Details */}
            <path d="M60,250 Q150,290 240,250 L260,400 L40,400 Z" fill="#e0e0e0" stroke="#777" strokeWidth="1" />
            <rect x="110" y="310" width="80" height="40" rx="2" fill="#d0d0d0" stroke="#888" strokeWidth="1" />

            {/* Tech Lines on Suit */}
            <line x1="110" y1="330" x2="190" y2="330" stroke="#aaa" strokeWidth="1" />

            {/* Mission Patch - 1. HIỆU ỨNG THỊ GIÁC: Soft Glow */}
            <circle cx="200" cy="330" r="12" fill="#FF4500" filter="url(#glow-orange)" />
            <rect x="120" y="318" width="20" height="4" fill="#DC143C" />
            <rect x="120" y="326" width="20" height="4" fill="#000080" />

            {/* 1. TỐI ƯU TYPOGRAPHY: APOLLO 13 (Square/Blocky Font) */}
            <text x="150" y="50" textAnchor="middle" fontSize="18" fill="#e0e0e0" fontFamily="Impact, 'Arial Black', sans-serif" letterSpacing="6" opacity="0.9">APOLLO 13</text>

            {/* 1. TỐI ƯU TYPOGRAPHY: ASTRONAUT (NASA Red/Dark Blue) */}
            <text x="150" y="385" textAnchor="middle" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#B22234" fontFamily="Impact, 'Arial Black', sans-serif" letterSpacing="1" style={{ textShadow: "0px 0px 10px rgba(178, 34, 52, 0.5)" }}>
                {userName ? userName.toUpperCase() : "ASTRONAUT"}
            </text>
        </>
    ),
};
