"use client";

import React, { useState, useRef, useCallback, useMemo } from "react";
import { toPng } from "html-to-image";
import { Download, Loader2, Camera, CheckCircle } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamic import for ImageCropper to optimize initial load
const ImageCropper = dynamic(() => import("./ImageCropper"), {
    loading: () => <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 text-white font-bold">Đang tải bộ cắt ảnh...</div>,
    ssr: false
});

export interface TemplateData {
    id: string;
    name: string;
    color: string;
    description?: string;
}

interface CardEditorProps {
    template: TemplateData;
}

const DEFAULT_NAMES: Record<string, string> = {
    'chien-than-san-sale': "THÁNH CHỐT ĐƠN",
    'simp-lord': "SIMP CHÚA",
    'the-bai-ma-thuat': "MAGIC CARD",
    'bang-khen-thoat-e': "NGƯỜI MAY MẮN",
    'can-cuoc-gen-z': "CÔNG DÂN GƯƠNG MẪU",
    'flex-den-hoi-tho-cuoi': "VIBE THỦ CHIẾN",
    'dai-gia-ngam': "CHỦ TỊCH GIẢ KHỔ",
    'co-dat-dai-gia': "ĐẠI GIA BĐS",
    'the-black-card': "THIẾU GIA NGẦM",
    'rich-kid-tu-than': "KID TỰ THÂN",
    'tap-doan-da-cap': "DIAMOND LEADER",
    'shark-tank-deal': "STARTUP TRIỆU ĐÔ",
    'nha-suu-tap-xe': "DÂN TỔ LÁI",
    'king-of-bitcoin': "HODLER CHÂN CHÍNH",
    'red-flag-di-dong': "RED FLAG DI ĐỘNG",
    'chua-he-biet-yeu': "FA BỀN VỮNG",
    'trap-girl-chinh-hieu': "TRAP GIRL",
    'good-boy-thanh-thien': "BÉ NGOAN",
    'ex-files': "THE EX",
    'friendzone-forever': "ANH TRAI MƯA",
    'match-tinder': "TOP PICK",
    'le-hoi-chia-tay': "NGƯỜI RA ĐI",
    'crush-quoc-dan': "IDOL MỚI NỔI"
};

export default function CardEditor({ template }: CardEditorProps) {
    const [userName, setUserName] = useState(DEFAULT_NAMES[template.id] || "");
    const [userImage, setUserImage] = useState<string | null>(null);
    const [isDownloading, setIsDownloading] = useState(false);
    const [showToast, setShowToast] = useState(false);

    // Cropper State
    const [showCropper, setShowCropper] = useState(false);
    const [tempImage, setTempImage] = useState<string | null>(null);

    const cardRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // 1. Logic Auto-scaling Text
    const nameFontSize = useMemo(() => {
        const defaultSize = 32;
        const maxLength = 12;
        if (userName.length <= maxLength) return defaultSize;
        // Reduce font size by 1.5px for every extra character, min limit 14px
        return Math.max(14, defaultSize - (userName.length - maxLength) * 1.5);
    }, [userName]);

    // 2. High-Quality Export Logic (Safari Optimized)
    const downloadImage = useCallback(async () => {
        if (!cardRef.current) return;

        setIsDownloading(true);
        try {
            // A. Wait for fonts and images
            await document.fonts.ready;

            // Helper to check images
            const waitForImages = async (element: HTMLElement) => {
                const images = Array.from(element.querySelectorAll('image, img')) as SVGImageElement[] | HTMLImageElement[];
                await Promise.all(images.map(img => {
                    if (img.tagName === 'image') {
                        const href = img.getAttribute('href') || img.getAttribute('xlink:href');
                        if (href) {
                            return new Promise((resolve, reject) => {
                                const dummy = new Image();
                                dummy.onload = resolve;
                                dummy.onerror = resolve; // Continue on error
                                dummy.src = href;
                            });
                        }
                    }
                    if (img instanceof HTMLImageElement && !img.complete) {
                        return new Promise((resolve) => {
                            img.onload = resolve;
                            img.onerror = resolve;
                        });
                    }
                    return Promise.resolve();
                }));
            };
            await waitForImages(cardRef.current);

            // B. SAFARI FIX: Add explicit delay
            await new Promise(resolve => setTimeout(resolve, 300));

            // C. SAFARI FIX: Double Render Strategy
            // First render to warm up cache/layout
            try {
                await toPng(cardRef.current, { pixelRatio: 1, cacheBust: true });
            } catch (e) {
                console.warn("First render attempt failed, retrying...", e);
            }

            // D. Final High-Quality Render
            const dataUrl = await toPng(cardRef.current, {
                cacheBust: true,
                includeQueryParams: true,
                pixelRatio: 3,
                quality: 1.0,
                skipFonts: false,
                style: {
                    fontVariant: 'normal',
                    opacity: '1',
                }
            });

            // SLUGIFY NAMING LOGIC
            const slug = template.name
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, "_");

            const link = document.createElement("a");
            link.download = `VibeCard_VN_${slug}.png`;
            link.href = dataUrl;
            link.click();

            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);

        } catch (err) {
            console.error("Failed to download image", err);
            alert("Ui da! Có lỗi khi xuất ảnh rồi. Thử lại nha!");
        } finally {
            setIsDownloading(false);
        }
    }, [template.id, template.name]);

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                setTempImage(reader.result?.toString() || null);
                setShowCropper(true);
            });
            reader.readAsDataURL(file);
            e.target.value = '';
        }
    };

    const handleCropComplete = (croppedImage: string) => {
        setUserImage(croppedImage);
        setShowCropper(false);
        setTempImage(null);
    };

    return (
        <div className="flex flex-col h-[calc(100vh-80px)] md:h-auto md:min-h-[600px] w-full bg-white font-sans relative">

            {/* TOAST NOTIFICATION */}
            {showToast && (
                <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[60] bg-black text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-300">
                    <CheckCircle className="text-[#A3E635]" size={20} />
                    <span className="font-bold">Đã lưu vào máy! Đăng Story ngay nhé 🚀</span>
                </div>
            )}

            {/* --- PREVIEW AREA (Top 60% on mobile) --- */}
            <div className="h-[60%] md:h-[500px] w-full bg-[#E5E7EB] flex items-center justify-center p-6 border-b-4 border-black relative overflow-hidden">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                </div>

                {/* THE CARD */}
                <div
                    id="vibe-card-download"
                    ref={cardRef}
                    className="relative w-full max-w-[320px] aspect-[3/4] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                >
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
                                    );

                                // ===================================
                                // 2. SIMP LORD (Social Media Frame)
                                // ===================================
                                case 'simp-lord':
                                    return (
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

                                            {/* Heart Avatar Frame (Safe Zone: 80-270) */}
                                            {/* Avatar Scaled Box covering the heart path */}
                                            {/* Bounding Box of Heart approx: x=50, y=90, w=200, h=170 */}

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

                                            {/* Name Plate - Safe Zone: > 290 */}
                                            <rect x="40" y="290" width="220" height="70" rx="10" fill="#FF69B4" stroke="black" strokeWidth="3" />
                                            <text x="150" y="315" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">CERTIFIED SIMP:</text>
                                            <text x="150" y="340" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize={Math.min(nameFontSize, 24)} fill="white" stroke="black" strokeWidth="1" dominantBaseline="middle">
                                                {userName || "YOUR NAME"}
                                            </text>
                                        </>
                                    );

                                // ===================================
                                // 3. THẺ BÀI MA THUẬT (Yugi Style)
                                // ===================================
                                case 'the-bai-ma-thuat':
                                    return (
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
                                    );

                                // ===================================
                                // 4. BẰNG KHEN THOÁT Ế (Certificate)
                                // ===================================
                                case 'bang-khen-thoat-e':
                                    return (
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
                                                {/* Decorative Corners */}
                                                <path d="M20,60 C20,20 20,20 60,20" fill="none" stroke="#228B22" strokeWidth="4" />
                                                <path d="M280,60 C280,20 280,20 240,20" fill="none" stroke="#228B22" strokeWidth="4" />
                                                <path d="M20,340 C20,380 20,380 60,380" fill="none" stroke="#228B22" strokeWidth="4" />
                                                <path d="M280,340 C280,380 280,380 240,380" fill="none" stroke="#228B22" strokeWidth="4" />
                                            </g>

                                            {/* Header Text - Safe Zone Top */}
                                            <text x="150" y="70" textAnchor="middle" fontFamily="serif" fontSize="32" fontWeight="bold" fill="#228B22">CỘNG HÒA</text>
                                            <text x="150" y="100" textAnchor="middle" fontFamily="serif" fontSize="14" fontWeight="bold" fill="black">XÃ HỘI CHỦ NGHĨA FA</text>
                                            <line x1="100" y1="110" x2="200" y2="110" stroke="black" strokeWidth="1" />

                                            <text x="150" y="150" textAnchor="middle" fontFamily="serif" fontSize="40" fontWeight="900" fill="#DAA520" stroke="black" strokeWidth="1" letterSpacing="2">BẰNG KHEN</text>

                                            {/* Name - Safe Zone Middle */}
                                            <text x="150" y="200" textAnchor="middle" fontSize="14" fontStyle="italic">Trao tặng đồng chí:</text>
                                            <text x="150" y="235" textAnchor="middle" fontFamily="cursive" fontSize={nameFontSize} fontWeight="bold" fill="#B22222">
                                                {userName || "NGƯỜI MAY MẮN"}
                                            </text>

                                            {/* User Avatar as Stamp - Safe Zone Bottom */}
                                            <circle cx="150" cy="310" r="55" fill="white" stroke="#DAA520" strokeWidth="3" strokeDasharray="2,2" />
                                            {userImage ? (
                                                <image
                                                    x="95" y="255" width="110" height="110"
                                                    href={userImage}
                                                    clipPath="url(#avatar-clip-circle)"
                                                    preserveAspectRatio="xMidYMid slice"
                                                />
                                            ) : null}

                                            {/* Official Red Stamp Overlay */}
                                            <circle cx="220" cy="330" r="30" fill="none" stroke="red" strokeWidth="3" opacity="0.7" />
                                            <text x="220" y="335" textAnchor="middle" fontSize="10" fill="red" fontWeight="bold" transform="rotate(-15 220 330)" opacity="0.7">ĐÃ DUYỆT</text>
                                        </>
                                    );

                                // ===================================
                                // 5. CĂN CƯỚC GEN Z (ID Card 2.0)
                                // ===================================
                                case 'can-cuoc-gen-z':
                                    return (
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
                                    );

                                // ===================================
                                // 6. FLEX ĐẾN HƠI THỞ CUỐI (Banking App)
                                // ===================================
                                case 'flex-den-hoi-tho-cuoi':
                                    return (
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
                                    );

                                // ===================================
                                // 7. ĐẠI GIA NGẦM (Gold Cardvisit)
                                // ===================================
                                case 'dai-gia-ngam':
                                    return (
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
                                    );

                                // ===================================
                                // 8. CÒ ĐẤT ĐẠI GIA (Sổ Đỏ Style)
                                // ===================================
                                case 'co-dat-dai-gia':
                                    return (
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
                                    );

                                // ===================================
                                // 9. THE BLACK CARD (Power Credit)
                                // ===================================
                                case 'the-black-card':
                                    return (
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
                                    );

                                // ===================================
                                // 10. RICH KID TỰ THÂN (Luxury Box)
                                // ===================================
                                case 'rich-kid-tu-than':
                                    return (
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
                                    );

                                // ===================================
                                // 11. TẬP ĐOÀN ĐA CẤP (Pyramid Scheme)
                                // ===================================
                                case 'tap-doan-da-cap':
                                    return (
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
                                    );

                                // ===================================
                                // 12. RED FLAG DI ĐỘNG (Caution Theme)
                                // ===================================
                                case 'red-flag-di-dong':
                                    return (
                                        <>
                                            <defs>
                                                <pattern id="caution-tape" width="100" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                                                    <rect width="50" height="20" fill="#FFD700" />
                                                    <rect x="50" width="50" height="20" fill="#000000" />
                                                </pattern>
                                                <clipPath id="avatar-clip-triangle">
                                                    <path d="M150,55 L237,205 L63,205 Z" />
                                                </clipPath>
                                            </defs>

                                            {/* Bright Yellow Background */}
                                            <rect width="300" height="400" fill="#FFFF00" />
                                            {/* Caution Tape Diagonal */}
                                            <rect width="600" height="50" fill="url(#caution-tape)" transform="translate(-150, 50) rotate(45)" opacity="0.8" />
                                            <rect width="600" height="50" fill="url(#caution-tape)" transform="translate(-150, 300) rotate(-45)" opacity="0.8" />

                                            {/* Thick Black Frame */}
                                            <rect x="10" y="10" width="280" height="380" fill="none" stroke="black" strokeWidth="10" />

                                            {/* Warning Header */}
                                            <rect x="50" y="30" width="200" height="40" fill="black" />
                                            <text x="150" y="55" textAnchor="middle" fill="white" fontSize="24" fontWeight="900" dominantBaseline="middle">WARNING</text>

                                            {/* Triangle Danger Sign Avatar */}
                                            <path d="M150,45 L250,215 L50,215 Z" fill="none" stroke="black" strokeWidth="8" strokeLinejoin="round" />
                                            <path d="M150,55 L237,205 L63,205 Z" fill="#FFE4B5" />
                                            {userImage ? (
                                                <image
                                                    x="50" y="45" width="200" height="200"
                                                    href={userImage}
                                                    clipPath="url(#avatar-clip-triangle)"
                                                    preserveAspectRatio="xMidYMid slice"
                                                />
                                            ) : (
                                                <text x="150" y="160" textAnchor="middle" fontSize="60">🚩</text>
                                            )}

                                            {/* Red Flags Decor */}
                                            <text x="50" y="240" fontSize="30" transform="rotate(-15 50 240)">🚩</text>
                                            <text x="250" y="240" fontSize="30" transform="rotate(15 250 240)">🚩</text>

                                            {/* Name/Status */}
                                            <rect x="30" y="260" width="240" height="80" fill="white" stroke="black" strokeWidth="4" />
                                            <text x="150" y="280" textAnchor="middle" fontSize="12" fontWeight="bold" fill="red">DANGER LEVEL: EXTREME</text>

                                            {/* LIP: Max Font Size / Bounding Box */}
                                            <text x="150" y="310" textAnchor="middle" fontWeight="900" fontSize={Math.min(nameFontSize, 24)} fill="black" style={{ textTransform: "uppercase" }}>
                                                {userName || "RED FLAG DI ĐỘNG"}
                                            </text>

                                            {/* Footer */}
                                            <text x="150" y="370" textAnchor="middle" fontSize="14" fontWeight="bold" fontFamily="monospace">DO NOT APPROACH</text>
                                        </>
                                    );

                                // ===================================
                                // 13. CHƯA HỀ BIẾT YÊU (Wildlife Cert)
                                // ===================================
                                case 'chua-he-biet-yeu':
                                    return (
                                        <>
                                            <defs>
                                                <clipPath id="avatar-clip-stamp-circle">
                                                    <circle cx="230" cy="320" r="50" />
                                                </clipPath>
                                            </defs>

                                            {/* Pale Green Paper Background */}
                                            <rect width="300" height="400" fill="#F0FFF0" />
                                            <rect x="15" y="15" width="270" height="370" fill="none" stroke="#2E8B57" strokeWidth="3" strokeDasharray="5 5" />
                                            <rect x="20" y="20" width="260" height="360" fill="none" stroke="#2E8B57" strokeWidth="1" />

                                            {/* Header */}
                                            <image href="https://via.placeholder.com/50x50/2E8B57/FFFFFF?text=W" x="125" y="30" width="50" height="50" opacity="0.2" /> {/* Emblem placeholder */}
                                            <text x="150" y="50" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#006400" fontFamily="serif">CỤC BẢO TỒN</text>
                                            <text x="150" y="70" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#006400" fontFamily="serif">ĐỘNG VẬT HOANG DÃ</text>
                                            <line x1="80" y1="80" x2="220" y2="80" stroke="#006400" strokeWidth="2" />

                                            {/* Cert Title */}
                                            <text x="150" y="120" textAnchor="middle" fontSize="28" fontWeight="900" fill="#2E8B57">CHỨNG NHẬN</text>
                                            <text x="150" y="145" textAnchor="middle" fontSize="16" fontWeight="bold" fill="black" fontStyle="italic">"Chưa Một Mảnh Tình Vắt Vai"</text>

                                            {/* Info */}
                                            <text x="40" y="180" fontSize="12" fill="black">Tên loài:</text>
                                            <text x="50" y="205" fontSize={Math.min(nameFontSize, 24)} fontWeight="900" fill="#006400" fontFamily="monospace">
                                                {userName || "FA BỀN VỮNG"}
                                            </text>
                                            <line x1="40" y1="215" x2="260" y2="215" stroke="black" strokeWidth="1" strokeDasharray="2 2" />

                                            <text x="40" y="250" fontSize="12" fill="black">Tình trạng:</text>
                                            <text x="120" y="250" fontSize="14" fontWeight="bold" fill="red">NGUY CẤP <tspan fontSize="10">(Sắp tuyệt chủng)</tspan></text>

                                            {/* Avatar Stamp */}
                                            <circle cx="230" cy="320" r="50" fill="none" stroke="#2E8B57" strokeWidth="2" />
                                            {userImage ? (
                                                <image
                                                    x="180" y="270" width="100" height="100"
                                                    href={userImage}
                                                    clipPath="url(#avatar-clip-stamp-circle)"
                                                    preserveAspectRatio="xMidYMid slice"
                                                    opacity="0.8"
                                                />
                                            ) : (
                                                <text x="230" y="335" textAnchor="middle" fontSize="40">🦄</text>
                                            )}

                                            {/* Seal "CHUA BI KHUI SEAL" */}
                                            <circle cx="80" cy="330" r="40" fill="none" stroke="red" strokeWidth="3" opacity="0.6" />
                                            <path d="M50,330 L110,330" id="curve" fill="none" />
                                            <text x="80" y="335" textAnchor="middle" fill="red" fontWeight="bold" fontSize="10" transform="rotate(-20 80 330)" opacity="0.6">
                                                CHƯA BỊ KHUI SEAL
                                            </text>
                                        </>
                                    );

                                // ===================================
                                // 14. TRAP GIRL CHÍNH HIỆU (Cyber Spider)
                                // ===================================
                                case 'trap-girl-chinh-hieu':
                                    return (
                                        <>
                                            <defs>
                                                <clipPath id="avatar-clip-hexagon">
                                                    <polygon points="150,110 215,145 215,215 150,250 85,215 85,145" />
                                                </clipPath>
                                            </defs>

                                            {/* Electric Purple Background */}
                                            <rect width="300" height="400" fill="#2a0a2e" />

                                            {/* Spider Web Neon */}
                                            <path d="M150,180 L150,5 M150,180 L280,80 M150,180 L280,250 M150,180 L150,380 M150,180 L20,250 M150,180 L20,80" stroke="#d500f9" strokeWidth="2" opacity="0.5" />
                                            <polygon points="150,130 190,160 190,200 150,230 110,200 110,160" fill="none" stroke="#00e5ff" strokeWidth="1" opacity="0.6" />
                                            <polygon points="150,110 215,145 215,215 150,250 85,215 85,145" fill="none" stroke="#d500f9" strokeWidth="2" />

                                            {/* Header */}
                                            <text x="150" y="45" textAnchor="middle" fill="#00e5ff" fontSize="20" fontWeight="bold" fontFamily="monospace" style={{ textShadow: "0 0 5px #00e5ff" }}>TRAP GIRL</text>
                                            <text x="150" y="65" textAnchor="middle" fill="#d500f9" fontSize="10" letterSpacing="3">WARNING: HEARTBREAK</text>

                                            {/* Hexagon Avatar */}
                                            {userImage ? (
                                                <image
                                                    x="50" y="80" width="200" height="200"
                                                    href={userImage}
                                                    clipPath="url(#avatar-clip-hexagon)"
                                                    preserveAspectRatio="xMidYMid slice"
                                                />
                                            ) : (
                                                <text x="150" y="195" textAnchor="middle" fontSize="50">🕸️</text>
                                            )}

                                            {/* Glowing Box for Name */}
                                            <rect x="40" y="280" width="220" height="60" fill="none" stroke="#00e5ff" strokeWidth="2" rx="0" />
                                            <rect x="35" y="275" width="230" height="70" fill="none" stroke="#d500f9" strokeWidth="1" rx="0" opacity="0.5" />

                                            <text x="150" y="300" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif">TARGET LOCKED:</text>
                                            <text x="150" y="325" textAnchor="middle" fill="#d500f9" fontWeight="900" fontSize={Math.min(nameFontSize, 22)} style={{ textShadow: "0 0 5px #d500f9" }}>
                                                {userName || "TRAP GIRL"}
                                            </text>

                                            {/* Glitch Text Bottom */}
                                            <text x="150" y="370" textAnchor="middle" fill="#00e5ff" fontSize="12" fontFamily="monospace" opacity="0.8">CAUGHT_IN_4K</text>
                                        </>
                                    );

                                // ===================================
                                // 15. GOOD BOY THÁNH THIỆN (Angel)
                                // ===================================
                                case 'good-boy-thanh-thien':
                                    return (
                                        <>
                                            <defs>
                                                <clipPath id="avatar-clip-cloud">
                                                    <circle cx="150" cy="180" r="70" />
                                                </clipPath>
                                                <linearGradient id="sky-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" stopColor="#87CEEB" />
                                                    <stop offset="100%" stopColor="#E0FFFF" />
                                                </linearGradient>
                                            </defs>

                                            {/* Sky Background */}
                                            <rect width="300" height="400" fill="url(#sky-grad)" />
                                            {/* Clouds (Circles) */}
                                            <circle cx="50" cy="350" r="60" fill="white" opacity="0.8" />
                                            <circle cx="150" cy="380" r="80" fill="white" opacity="0.9" />
                                            <circle cx="250" cy="350" r="60" fill="white" opacity="0.8" />

                                            {/* Halo */}
                                            <ellipse cx="150" cy="90" rx="50" ry="10" fill="none" stroke="#FFD700" strokeWidth="4" />

                                            {/* Wings */}
                                            <path d="M80,180 Q20,130 10,220 Q40,200 80,240" fill="white" stroke="#CCE5FF" strokeWidth="2" />
                                            <path d="M220,180 Q280,130 290,220 Q260,200 220,240" fill="white" stroke="#CCE5FF" strokeWidth="2" />

                                            {/* Avatar Circle */}
                                            <circle cx="150" cy="180" r="75" fill="white" opacity="0.5" />
                                            {userImage ? (
                                                <image
                                                    x="80" y="110" width="140" height="140"
                                                    href={userImage}
                                                    clipPath="url(#avatar-clip-cloud)"
                                                    preserveAspectRatio="xMidYMid slice"
                                                />
                                            ) : (
                                                <text x="150" y="195" textAnchor="middle" fontSize="50">😇</text>
                                            )}

                                            {/* Header */}
                                            <text x="150" y="50" textAnchor="middle" fill="white" fontWeight="900" fontSize="24" stroke="#00BFFF" strokeWidth="1" letterSpacing="2">CERTIFIED</text>
                                            <text x="150" y="70" textAnchor="middle" fill="white" fontWeight="900" fontSize="24" stroke="#00BFFF" strokeWidth="1" letterSpacing="2">GOOD BOY</text>

                                            {/* Name Plate */}
                                            <rect x="50" y="270" width="200" height="50" rx="25" fill="white" shadow="0 4px 6px -1px rgba(0, 0, 0, 0.1)" />
                                            <text x="150" y="302" textAnchor="middle" fill="#00BFFF" fontWeight="bold" fontSize={Math.min(nameFontSize, 20)} dominantBaseline="middle">
                                                {userName || "BÉ NGOAN"}
                                            </text>

                                            <text x="150" y="340" textAnchor="middle" fontSize="12" fill="#555" fontStyle="italic">"Ngoan xinh yêu của em đây"</text>
                                        </>
                                    );

                                // ===================================
                                // 16. EX FILES (Top Secret)
                                // ===================================
                                case 'ex-files':
                                    return (
                                        <>
                                            <defs>
                                                <clipPath id="avatar-clip-paperclip">
                                                    <rect x="30" y="100" width="100" height="120" />
                                                </clipPath>
                                            </defs>

                                            {/* Kraft Paper Background */}
                                            <rect width="300" height="400" fill="#D2B48C" />
                                            <rect width="300" height="400" fill="url(#grain)" opacity="0.3" />

                                            {/* Folder Tab */}
                                            <path d="M0,40 L120,40 L150,60 L300,60 L300,400 L0,400 Z" fill="#C19A6B" stroke="black" strokeWidth="2" />

                                            {/* Stamps */}
                                            <rect x="180" y="70" width="100" height="40" fill="none" stroke="red" strokeWidth="4" opacity="0.7" transform="rotate(10 180 70)" />
                                            <text x="230" y="95" textAnchor="middle" fill="red" fontSize="20" fontWeight="900" opacity="0.7" transform="rotate(10 230 95)">TOP SECRET</text>

                                            <text x="150" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#5D4037" fontFamily="monospace">CLASSIFIED DOCUMENT</text>

                                            {/* Paperclipped Photo */}
                                            <rect x="25" y="95" width="110" height="130" fill="white" stroke="black" strokeWidth="1" transform="rotate(-5 80 160)" />
                                            {userImage ? (
                                                <image
                                                    x="30" y="100" width="100" height="120"
                                                    href={userImage}
                                                    clipPath="url(#avatar-clip-paperclip)"
                                                    preserveAspectRatio="xMidYMid slice"
                                                    transform="rotate(-5 80 160)"
                                                />
                                            ) : (
                                                <text x="80" y="170" textAnchor="middle" fontSize="40" transform="rotate(-5 80 160)">📁</text>
                                            )}

                                            {/* Paperclip */}
                                            <path d="M70,85 L70,110" stroke="silver" strokeWidth="8" strokeLinecap="round" transform="rotate(-5 80 160)" />

                                            {/* Text Lines */}
                                            <g transform="translate(150, 140)" fontFamily="monospace" fontSize="12" fill="black">
                                                <text x="0" y="0" fontWeight="bold">SUBJECT:</text>
                                                <text x="0" y="20">NGƯỜI YÊU CŨ</text>
                                                <text x="0" y="50" fontWeight="bold">STATUS:</text>
                                                <text x="0" y="70" fill="red" fontWeight="bold">BLOCKED</text>
                                            </g>

                                            {/* Name - Typewriter Style */}
                                            <rect x="30" y="270" width="240" height="60" fill="white" stroke="black" strokeWidth="1" strokeDasharray="1,1" />
                                            <text x="150" y="290" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#555">CODENAME:</text>
                                            <text x="150" y="315" textAnchor="middle" fontFamily="Courier Prime, monospace" fontWeight="bold" fontSize={Math.min(nameFontSize, 24)} fill="black">
                                                {userName || "THE EX"}
                                            </text>

                                            <text x="150" y="370" textAnchor="middle" fontSize="10" fill="#555" fontFamily="monospace">CONFIDENTIAL - DO NOT OPEN</text>
                                        </>
                                    );

                                // ===================================
                                // 17. FRIENDZONE FOREVER (Badge)
                                // ===================================
                                case 'friendzone-forever':
                                    return (
                                        <>
                                            <defs>
                                                <clipPath id="avatar-clip-circle-badge">
                                                    <circle cx="150" cy="150" r="70" />
                                                </clipPath>
                                            </defs>

                                            {/* Lemon Yellow Background */}
                                            <rect width="300" height="400" fill="#FFFACD" />
                                            <circle cx="150" cy="200" r="180" fill="#FFFFE0" opacity="0.5" />

                                            {/* Big Badge Ribbon */}
                                            <path d="M150,300 L110,380 L150,360 L190,380 Z" fill="#FFD700" stroke="black" strokeWidth="2" />
                                            <circle cx="150" cy="150" r="90" fill="#FFD700" stroke="black" strokeWidth="3" />
                                            <circle cx="150" cy="150" r="80" fill="white" stroke="black" strokeWidth="1" />

                                            {/* Avatar inside Badge */}
                                            {userImage ? (
                                                <image
                                                    x="80" y="80" width="140" height="140"
                                                    href={userImage}
                                                    clipPath="url(#avatar-clip-circle-badge)"
                                                    preserveAspectRatio="xMidYMid slice"
                                                />
                                            ) : (
                                                <text x="150" y="165" textAnchor="middle" fontSize="50">🤝</text>
                                            )}

                                            {/* Banner over Badge */}
                                            <path d="M30,230 L270,230 L250,280 L50,280 Z" fill="#32CD32" stroke="black" strokeWidth="2" />
                                            <text x="150" y="262" textAnchor="middle" fill="white" fontWeight="900" fontSize={Math.min(nameFontSize, 24)} stroke="black" strokeWidth="0.5" style={{ textTransform: "uppercase" }}>
                                                {userName || "ANH TRAI MƯA"}
                                            </text>

                                            {/* Slogan */}
                                            <text x="150" y="330" textAnchor="middle" fontSize="14" fontWeight="bold" fill="black">"ANH RẤT TỐT"</text>
                                            <text x="150" y="350" textAnchor="middle" fontSize="14" fontWeight="bold" fill="black">"NHƯNG EM RẤT TIẾC"</text>

                                            <text x="150" y="50" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#DAA520">🏆 BEST FRIEND AWARD</text>
                                        </>
                                    );

                                // ===================================
                                // 18. MATCH TINDER (Dating App)
                                // ===================================
                                case 'match-tinder':
                                    return (
                                        <>
                                            <defs>
                                                <clipPath id="avatar-clip-rounded-rect">
                                                    <rect x="25" y="60" width="250" height="280" rx="10" />
                                                </clipPath>
                                                <linearGradient id="tinder-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#fd297b" />
                                                    <stop offset="100%" stopColor="#ff655b" />
                                                </linearGradient>
                                            </defs>

                                            {/* White App Background */}
                                            <rect width="300" height="400" fill="white" />

                                            {/* Main Photo Card */}
                                            <rect x="25" y="60" width="250" height="280" rx="10" fill="#eee" />
                                            {userImage ? (
                                                <image
                                                    x="25" y="60" width="250" height="280"
                                                    href={userImage}
                                                    clipPath="url(#avatar-clip-rounded-rect)"
                                                    preserveAspectRatio="xMidYMid slice"
                                                />
                                            ) : (
                                                <text x="150" y="200" textAnchor="middle" fontSize="50">🔥</text>
                                            )}

                                            {/* Gradient Overlay at bottom of photo */}
                                            <rect x="25" y="240" width="250" height="100" rx="10" fill="black" opacity="0.4" clipPath="url(#avatar-clip-rounded-rect)" />

                                            {/* Name & Age Overlay */}
                                            <text x="40" y="310" fill="white" fontWeight="bold" fontSize={Math.min(nameFontSize, 24)}>{userName || "TOP PICK"}</text>
                                            <text x="210" y="310" fill="white" fontSize="20" fontWeight="normal">, 18</text>
                                            <text x="40" y="330" fill="white" fontSize="10" opacity="0.9">📍 Cuối đường...</text>

                                            {/* Controls */}
                                            <circle cx="90" cy="370" r="25" fill="white" stroke="#ff6b6b" strokeWidth="2" shadow="0 2px 5px rgba(0,0,0,0.1)" />
                                            <text x="90" y="378" textAnchor="middle" fontSize="20" fill="#ff6b6b">✖</text>

                                            <circle cx="150" cy="365" r="18" fill="white" stroke="#36d8ff" strokeWidth="2" />
                                            <text x="150" y="371" textAnchor="middle" fontSize="16" fill="#36d8ff">⭐</text>

                                            <circle cx="210" cy="370" r="25" fill="white" stroke="#4ecc94" strokeWidth="2" />
                                            <text x="210" y="378" textAnchor="middle" fontSize="20" fill="#4ecc94">❤</text>

                                            {/* Header Logo */}
                                            <text x="150" y="35" textAnchor="middle" fontSize="20" fill="url(#tinder-grad)" fontWeight="bold">🔥 tinder</text>
                                        </>
                                    );

                                // ===================================
                                // 19. LỄ HỘI CHIA TAY (Party Ticket)
                                // ===================================
                                case 'le-hoi-chia-tay':
                                    return (
                                        <>
                                            <defs>
                                                <clipPath id="avatar-clip-ticket-stub">
                                                    <rect x="200" y="80" width="80" height="240" />
                                                </clipPath>
                                            </defs>

                                            {/* Dark Background */}
                                            <rect width="300" height="400" fill="#111" />

                                            {/* Confetti */}
                                            <circle cx="50" cy="50" r="3" fill="#333" />
                                            <circle cx="120" cy="30" r="4" fill="#555" />
                                            <rect x="30" y="100" width="5" height="10" fill="#444" transform="rotate(20)" />
                                            <rect x="250" y="350" width="6" height="6" fill="#666" transform="rotate(45)" />

                                            {/* Ticket Shape */}
                                            <path d="M20,60 L280,60 L280,340 L20,340 Z" fill="#222" stroke="white" strokeWidth="2" />
                                            {/* Perforation Line */}
                                            <line x1="200" y1="60" x2="200" y2="340" stroke="white" strokeWidth="2" strokeDasharray="5 5" />

                                            {/* Left Side: Info */}
                                            <text x="110" y="100" textAnchor="middle" fill="white" fontFamily="monospace" fontSize="20" fontWeight="bold">FAREWELL</text>
                                            <text x="110" y="120" textAnchor="middle" fill="white" fontFamily="monospace" fontSize="20" fontWeight="bold">PARTY</text>

                                            <line x1="40" y1="140" x2="180" y2="140" stroke="white" strokeWidth="1" />

                                            <text x="40" y="170" fill="#aaa" fontSize="10">GUEST OF HONOR:</text>
                                            <text x="40" y="195" fill="white" fontWeight="900" fontSize={Math.min(nameFontSize, 20)} style={{ textTransform: "uppercase" }}>
                                                {userName || "NGƯỜI RA ĐI"}
                                            </text>

                                            <text x="40" y="230" fill="#aaa" fontSize="10">REASON:</text>
                                            <text x="40" y="250" fill="white" fontWeight="bold" fontSize="12">"IT'S NOT YOU, IT'S ME"</text>

                                            <text x="40" y="290" fill="#aaa" fontSize="10">DATE:</text>
                                            <text x="40" y="310" fill="white" fontWeight="bold" fontFamily="monospace">UNKNOWN</text>

                                            {/* Right Side: Stub & Avatar */}
                                            {userImage ? (
                                                <image
                                                    x="200" y="60" width="80" height="280"
                                                    href={userImage}
                                                    clipPath="url(#avatar-clip-ticket-stub)"
                                                    preserveAspectRatio="xMidYMid slice"
                                                    opacity="0.8"
                                                />
                                            ) : (
                                                <text x="240" y="200" textAnchor="middle" fontSize="30">👋</text>
                                            )}
                                            <text x="240" y="320" textAnchor="middle" fill="white" fontSize="16" transform="rotate(-90 240 320)" fontWeight="bold">ADMIT ONE</text>
                                        </>
                                    );

                                // ===================================
                                // 20. CRUSH QUỐC DÂN (K-Pop Poster)
                                // ===================================
                                case 'crush-quoc-dan':
                                    return (
                                        <>
                                            <defs>
                                                <clipPath id="avatar-clip-full-poster">
                                                    <rect x="0" y="0" width="300" height="400" />
                                                </clipPath>
                                                <radialGradient id="burst-grad" cx="50%" cy="50%" r="60%">
                                                    <stop offset="60%" stopColor="transparent" />
                                                    <stop offset="100%" stopColor="rgba(255, 105, 180, 0.5)" />
                                                </radialGradient>
                                            </defs>

                                            {/* Poster Background */}
                                            <rect width="300" height="400" fill="#FFE4E1" />

                                            {/* Full Bleed Avatar */}
                                            {userImage ? (
                                                <image
                                                    x="0" y="0" width="300" height="400"
                                                    href={userImage}
                                                    clipPath="url(#avatar-clip-full-poster)"
                                                    preserveAspectRatio="xMidYMid slice"
                                                />
                                            ) : (
                                                <text x="150" y="200" textAnchor="middle" fontSize="80">✨</text>
                                            )}

                                            {/* Gradient Overlay Bottom */}
                                            <rect x="0" y="250" width="300" height="150" fill="url(#burst-grad)" style={{ mixBlendMode: 'multiply' }} />
                                            <linearGradient id="bottom-fade" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0" stopColor="transparent" />
                                                <stop offset="1" stopColor="#FF1493" />
                                            </linearGradient>
                                            <rect x="0" y="250" width="300" height="150" fill="url(#bottom-fade)" opacity="0.8" />


                                            {/* Burst Lines Effect */}
                                            <g opacity="0.6">
                                                <line x1="150" y1="200" x2="150" y2="0" stroke="white" strokeWidth="2" />
                                                <line x1="150" y1="200" x2="300" y2="200" stroke="white" strokeWidth="2" />
                                                <line x1="150" y1="200" x2="0" y2="200" stroke="white" strokeWidth="2" />
                                                <line x1="150" y1="200" x2="250" y2="50" stroke="white" strokeWidth="1" />
                                                <line x1="150" y1="200" x2="50" y2="50" stroke="white" strokeWidth="1" />
                                            </g>

                                            {/* Text Overlay */}
                                            <text x="150" y="300" textAnchor="middle" fill="#FFD700" fontSize="14" fontWeight="bold" letterSpacing="5" style={{ textShadow: "1px 1px 2px black" }}>DEBUT 2026</text>

                                            <text x="150" y="340" textAnchor="middle" fill="white" fontWeight="900" fontSize={Math.min(nameFontSize, 36)} style={{ textShadow: "2px 2px 0px #FF1493, 4px 4px 0px black" }} letterSpacing="-1">
                                                {userName ? userName.toUpperCase() : "IDOL MỚI NỔI"}
                                            </text>

                                            <text x="150" y="370" textAnchor="middle" fill="white" fontSize="10" fontStyle="italic">★ ★ ★ ★ ★</text>
                                        </>
                                    );

                                // ===================================
                                // 12. SHARK TANK DEAL (Million Dollar Check)
                                // ===================================
                                case 'shark-tank-deal':
                                    return (
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
                                    );

                                // ===================================
                                // 13. NHÀ SƯU TẬP XE (Car Collector)
                                // ===================================
                                case 'nha-suu-tap-xe':
                                    return (
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
                                    );

                                // ===================================
                                // 14. KING OF BITCOIN (Crypto Trader)
                                // ===================================
                                case 'king-of-bitcoin':
                                    return (
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
                                    );

                                // Fallback
                                default:
                                    return <text x="50" y="50">Template Error</text>;
                            }
                        })()}
                    </svg>
                </div>
            </div>

            {/* --- INPUT AREA (Bottom) --- */}
            <div className="flex-1 bg-white p-6 flex flex-col justify-center items-center gap-6">
                <div className="w-full max-w-md space-y-4">
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={onFileChange}
                        />
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full py-3 border-4 border-dashed border-gray-400 bg-gray-50 flex items-center justify-center gap-2 hover:bg-gray-100 hover:border-black transition-all group"
                        >
                            <Camera className="w-6 h-6 text-gray-500 group-hover:text-black" />
                            <span className="font-bold text-gray-500 group-hover:text-black uppercase">
                                {userImage ? "Đổi ảnh khác" : "Chọn ảnh của bạn"}
                            </span>
                        </button>
                    </div>

                    <div>
                        <label className="block text-black font-black uppercase mb-2 text-lg">
                            Nhập tên của bạn
                        </label>
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            maxLength={25}
                            placeholder="Ví dụ: Hùng Bá..."
                            className="w-full bg-[#F3F4F6] border-4 border-black p-4 text-xl font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow placeholder:text-gray-400"
                        />
                        <p className="text-right text-xs font-bold mt-1 text-gray-500">
                            {userName.length}/25 ký tự
                        </p>
                    </div>
                </div>

                <button
                    onClick={downloadImage}
                    disabled={isDownloading}
                    className={`
            w-full max-w-md py-4 px-6 flex items-center justify-center gap-3
            bg-[#A3E635] border-4 border-black text-black text-xl font-black uppercase tracking-wider
            shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
            hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
            active:translate-x-[6px] active:translate-y-[6px] active:shadow-none
            disabled:opacity-70 disabled:cursor-not-allowed
            transition-all
            ${isDownloading ? 'cursor-wait opacity-80' : ''}
          `}
                >
                    {isDownloading ? (
                        <>
                            <Loader2 className="animate-spin w-6 h-6" />
                            Đang xử lý ảnh nét cao...
                        </>
                    ) : (
                        <>
                            <Download className="w-6 h-6 border-2 border-transparent" />
                            Tải Ảnh Ngay
                        </>
                    )}
                </button>
            </div>

            {/* CROPPER MODAL (Dynamic Import) */}
            {showCropper && tempImage && (
                <ImageCropper
                    imageSrc={tempImage}
                    onCropComplete={handleCropComplete}
                    onCancel={() => {
                        setShowCropper(false);
                        setTempImage(null);
                    }}
                />
            )}
        </div>
    );
}
