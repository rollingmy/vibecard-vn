"use client";

import React, { useState, useRef, useCallback, useMemo } from "react";
import { toPng } from "html-to-image";
import { Download, Loader2, Camera, CheckCircle } from "lucide-react";
import dynamic from "next/dynamic";
import { FlexTheme } from "./templates/FlexTheme";
import { LoveTheme } from "./templates/LoveTheme";
import { OfficeLifeTemplates } from "./templates/OfficeTheme";
import { GamingTheme } from "./templates/GamingTheme";
import { GenZTheme } from "./templates/GenZTheme";
import { RetroTemplates } from "./templates/RetroTheme";
import { DarkHumorTemplates } from "./templates/DarkHumorTheme";
import { ZodiacTemplates } from "./templates/ZodiacTheme";
import { TravelTemplates } from "./templates/TravelTheme";

// Dynamic import for ImageCropper to optimize initial load
const ImageCropper = dynamic(() => import("./ImageCropper"), {
    loading: () => <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 text-white font-bold">Đang tải bộ cắt ảnh...</div>,
    ssr: false
});

const AllTemplates = {
    ...FlexTheme,
    ...LoveTheme,
    ...OfficeLifeTemplates,
    ...GamingTheme,
    ...GenZTheme,
    ...RetroTemplates,
    ...DarkHumorTemplates,
    ...ZodiacTemplates,
    ...TravelTemplates
};

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
    'crush-quoc-dan': "IDOL MỚI NỔI",
    'chien-than-deadline': "CHIẾN THẦN",
    'ke-huy-diet-bao-cao': "KẺ HỦY DIỆT",
    'senior-mom': "SENIOR MÕM",
    'intern-ngay-tho': "BÉ INTERN",
    'drama-queen-cong-so': "DRAMA QUEEN",
    'luong-thang-5-trieu': "NGHÈO BỀN VỮNG",
    'otp-cong-so': "CRUSH CÔNG SỞ",
    'truong-phong-he-du': "HỆ DÙ CHE",
    'dev-day': "DEV ĐÂY",
    'dang-yasuo': "ĐẤNG YASUO",
    'tho-code-dao': "DEV FULL-STACK",
    'cau-thuy-tinh': "TÂM HỒN MỎNG MANH",
    // Gaming Theme
    'yasuo-gank-tem': "ĐẤNG YASUO",
    'pro-player-pubg': "POCHINKI KING",
    'hacker-lor': "ANONYMOUS",
    'game-over-screen': "TRY AGAIN?",
    'nintendo-switch': "PLAYER 1",
    'keyboard-warrior': "ANH HÙNG BÀN PHÍM",
    'loi-404-not-found': "MẤT KẾT NỐI",
    'ai-robot-x': "GUNDAM PILOT",
    'mining-coin-rig': "TRÂU CÀY COIN",
    'the-bai-ma-thuat-upgrade': "BLUE EYES DRAGON",
    // GenZ Theme
    'keo-ly-mai-dinh': "MÃI ĐỈNH",
    'cham-zn': "CHẤM HẾT",
    'ton-com-cha-me': "TỐN CƠM",
    'a-lo-ha': "ALOO",
    'xu-ca-na': "XU CÀ NA",
    'mai-det-ti-ni': "MÃI ĐẸT TI NI",
    'u-la-troi': "SỐC NGANG",
    'khum': "TỪ CHỐI HIỂU",
    'lem-mon': "LEM MÒN",
    'flexing-time': "RICH KID",
    // Retro Theme
    'pixel-mario': "GAME OVER",
    'tamagotchi-pet': "MY PET",
    'windows-95-error': "SYSTEM ERROR",
    'bui-doi-cho-lon': "GIANG HỒ MẠNG",
    'cassette-tape': "MIXTAPE 2023",
    'vinyl-record': "CLASSIC VIBE",
    'vhs-glitch': "NO SIGNAL",
    'pacman-maze': "PAC-MAN",
    'tetris-block': "TETRIS KING",
    'nokia-snake': "RẮN SĂN MỒI",
    // Dark Humor Theme
    'overthinking-club': "OVERTHINKER",
    'deadline-reaper': "DEADLINE ĐẾN",
    'tram-cam-tuoi-tre': "LOW BATTERY",
    'introvert-cave': "HƯỚNG NỘI",
    'trash-can-vip': "VIP TRASH",
    'clown-license': "CHÚ HỀ",
    'zombie-cong-so': "ZOMBIE",
    'rip-luong': "R.I.P LƯƠNG",
    'to-nguoi-tieu-dung': "NGƯỜI TIÊU DÙNG",
    'drama-is-coming': "DRAMA QUEEN",
    // Zodiac Theme
    'ba-dong-online': "BÀ ĐỒNG ONLINE",
    'water-sign-thuy': "HỆ NƯỚC",
    'fire-sign-lua': "HỆ LỬA",
    'earth-sign-dat': "HỆ ĐẤT",
    'air-sign-khi': "HỆ KHÍ",
    'thay-boi-xem-voi': "THẦY BÓI",
    'bua-yeu': "BÙA YÊU",
    'full-moon-party': "HỘI TRĂNG TRÒN",
    'than-so-hoc': "THẦN SỐ HỌC",
    'ying-yang': "ÂM DƯƠNG",
    // Travel Theme
    'food-reviewer': "THÁNH ĂN",
    'coffee-holic': "COFFEE HOLIC",
    'phuot-thu': "PHƯỢT THỦ",
    'beach-vibe': "BEACH VIBE",
    'camping-chill': "CAMPING CHILL",
    'gym-rat': "GYM RAT",
    'cat-lover': "CON SEN",
    'dog-lover': "NGƯỜI YÊU CHÓ",
    'minimalist-white': "MINIMALIST"
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
                    className="relative w-full max-w-[320px] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                    style={{ aspectRatio: (Object.keys(TravelTemplates).includes(template.id) || Object.keys(RetroTemplates).includes(template.id) || Object.keys(DarkHumorTemplates).includes(template.id) || Object.keys(ZodiacTemplates).includes(template.id) || template.id === 'bua-yeu' || template.id === 'le-hoi-chia-tay') ? '2/3' : '3/4' }}
                >
                    <svg
                        viewBox={(Object.keys(TravelTemplates).includes(template.id) || Object.keys(RetroTemplates).includes(template.id) || Object.keys(DarkHumorTemplates).includes(template.id) || Object.keys(ZodiacTemplates).includes(template.id) || template.id === 'bua-yeu' || template.id === 'le-hoi-chia-tay') ? "0 0 400 600" : "0 0 300 400"}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                    >
                        {(() => {
                            const TemplateComponent = AllTemplates[template.id as keyof typeof AllTemplates];
                            if (TemplateComponent) {
                                return <TemplateComponent userName={userName} userImage={userImage} nameFontSize={nameFontSize} description={template.description} />;
                            }
                            // Fallback for unknown templates
                            return (
                                <g>
                                    <rect width="300" height="400" fill="white" stroke="black" strokeWidth="2" />
                                    <text x="150" y="200" textAnchor="middle" fontSize="20" fill="gray" fontWeight="bold">
                                        Đang cập nhật...
                                    </text>
                                    <text x="150" y="230" textAnchor="middle" fontSize="14" fill="gray">
                                        Template "{template.name}"
                                    </text>
                                </g>
                            );
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
