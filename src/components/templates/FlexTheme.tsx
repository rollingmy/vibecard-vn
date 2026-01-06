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
                {userName || "ÔNG TRÙM ĐẤT"}
            </text>

            {/* Avatar Box (Photo) */}
            <rect x="75" y="140" width="150" height="180" fill="white" stroke="black" strokeWidth="1" />
            {userImage ? (
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
                <clipPath id="avatar-clip-chip">
                    <rect x="180" y="240" width="100" height="100" rx="10" />
                </clipPath>
            </defs>

            {/* Matter Black Background */}
            <rect width="300" height="400" fill="#111111" />
            {/* Note: url(#diagonal-stripe-2) was used in original, assumed to be global or needed here. 
          If it's missing, we might need to define it. Since I cannot see global defs in CardEditor, 
          I will assume it is removed or I should provide a fallback/def. 
          Actually, I don't see diagonal-stripe-2 defined in the previous file snippet I read. 
          I will define it here to be safe or remove opacity. */}
            {/* Defining a simple pattern just in case */}
            <defs>
                <pattern id="diagonal-stripe-2" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <rect width="5" height="10" fill="white" />
                </pattern>
            </defs>
            <rect width="300" height="400" fill="url(#diagonal-stripe-2)" opacity="0.05" />

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
                {userName ? userName.toUpperCase() : "MR. VIBE"}
            </text>

            {/* Embossed Numbers */}
            <text x="150" y="380" textAnchor="middle" fontFamily="monospace" fontSize="20" fill="url(#silver-grad)" letterSpacing="2" style={{ textShadow: "1px 1px 2px black" }}>
                0000 0000 0000 FLEX
            </text>

            {/* Avatar Box as Hologram */}
            <rect x="180" y="240" width="100" height="100" rx="10" fill="#333" stroke="gray" strokeWidth="1" />
            {userImage ? (
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

    'nha-suu-tap-xe': ({ userName, userImage, nameFontSize }: TemplateProps) => (
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

    'king-of-bitcoin': ({ userName, userImage, nameFontSize }: TemplateProps) => (
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

    'can-cuoc-gen-z': ({ userName, userImage, nameFontSize }: TemplateProps) => (
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

            {/* Photo Area (Left) - Safe Zone Left */}
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

            {/* Info Lines (Right) - Safe Zone Right */}
            <g transform="translate(130, 120)">
                <text x="0" y="15" fontSize="10" fill="gray" fontWeight="bold">NAME</text>
                <text x="0" y="35" fontSize={Math.min(nameFontSize, 14)} fontWeight="bold">{userName || "CÔNG DÂN GƯƠNG MẪU"}</text>
                <line x1="0" y1="45" x2="160" y2="45" stroke="black" strokeWidth="1" />

                <text x="0" y="75" fontSize="10" fill="gray" fontWeight="bold">DOB</text>
                <text x="0" y="95" fontSize="14" fontFamily="monospace">2000-??-??</text>

                <text x="0" y="135" fontSize="10" fill="gray" fontWeight="bold">CLASS</text>
                <text x="0" y="155" fontSize="14" fontWeight="bold" fill="red">S-TIER</text>
            </g>

            {/* Chip & Elements - Bottom Zone */}
            <rect x="20" y="300" width="50" height="35" fill="#FFD700" stroke="black" strokeWidth="1" rx="4" />
            <path d="M25,317 L65,317 M45,300 L45,335" stroke="black" strokeWidth="1" opacity="0.3" />

            <text x="90" y="325" fontSize="12" fontFamily="monospace">ID: 84-098-FLEX-VN</text>

            {/* Bottom Bar Code */}
            <rect x="0" y="370" width="300" height="30" fill="black" />
            <text x="150" y="390" textAnchor="middle" fill="white" fontSize="10" letterSpacing="5">Validation Required</text>
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
};
