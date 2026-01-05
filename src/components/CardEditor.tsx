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

export default function CardEditor({ template }: CardEditorProps) {
    const [userName, setUserName] = useState("VIBE THỦ CHIẾN");
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
                                            <g transform="translate(140, 120)">
                                                <text x="0" y="15" fontSize="10" fill="gray" fontWeight="bold">NAME</text>
                                                <text x="0" y="35" fontSize={Math.min(nameFontSize, 20)} fontWeight="bold">{userName || "UNKNOWN"}</text>
                                                <line x1="0" y1="45" x2="140" y2="45" stroke="black" strokeWidth="1" />

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
