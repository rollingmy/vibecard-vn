"use client";

import React, { useState, useRef, useCallback } from "react";
import { toPng } from "html-to-image";
import { Download, Loader2 } from "lucide-react";

export default function CardEditor() {
    const [userName, setUserName] = useState("VIBE THỦ CHIẾN");
    const [isDownloading, setIsDownloading] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const downloadImage = useCallback(async () => {
        if (!cardRef.current) return;

        setIsDownloading(true);
        try {
            const dataUrl = await toPng(cardRef.current, { cacheBust: true, pixelRatio: 3 });
            const link = document.createElement("a");
            link.download = `vibecard-${Date.now()}.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error("Failed to download image", err);
            alert("Ui da! Có lỗi khi xuất ảnh rồi. Thử lại nha!");
        } finally {
            setIsDownloading(false);
        }
    }, []);

    return (
        <div className="flex flex-col h-[calc(100vh-80px)] md:h-auto md:min-h-[600px] w-full bg-white font-sans">
            {/* --- PREVIEW AREA (Top 60% on mobile) --- */}
            <div className="h-[60%] md:h-[500px] w-full bg-[#E5E7EB] flex items-center justify-center p-6 border-b-4 border-black relative overflow-hidden">
                {/* Background Grid Pattern just for vibe */}
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
                        {/* 1. Background Layer */}
                        <rect width="300" height="400" fill="#FBBF24" /> {/* Amber-400 */}

                        {/* 2. Neubrutalism Decor */}
                        {/* Border */}
                        <rect x="5" y="5" width="290" height="390" fill="none" stroke="black" strokeWidth="10" />

                        {/* Corner Accents */}
                        <path d="M0 0 L60 0 L0 60 Z" fill="black" />
                        <path d="M300 400 L240 400 L300 340 Z" fill="black" />

                        {/* Inner Box for Title */}
                        <rect x="30" y="40" width="240" height="60" fill="white" stroke="black" strokeWidth="4" />
                        <text x="150" y="80" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="24" fill="black">
                            FLEX CHIẾN THẦN
                        </text>

                        {/* Illustration Area (Abstract) */}
                        <circle cx="150" cy="200" r="60" fill="#F472B6" stroke="black" strokeWidth="4" />
                        <path d="M120 180 L140 220 L160 180 L180 220" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

                        {/* Stars */}
                        <text x="50" y="320" fontSize="40">✨</text>
                        <text x="250" y="160" fontSize="40">🔥</text>

                        {/* 3. USER NAME - Dynamic */}
                        {/* Banner for name */}
                        <rect x="20" y="280" width="260" height="70" fill="black" transform="rotate(-2 150 315)" />
                        <rect x="20" y="275" width="260" height="70" fill="#A3E635" stroke="black" strokeWidth="4" transform="rotate(-2 150 310)" />

                        {/* Name Text */}
                        <text
                            x="150"
                            y="320"
                            textAnchor="middle"
                            fontFamily="sans-serif"
                            fontWeight="900"
                            fontSize="32"
                            fill="black"
                            transform="rotate(-2 150 310)"
                            className="uppercase"
                        >
                            {userName || "TÊN BẠN?"}
                        </text>

                        {/* Footer Text */}
                        <text x="150" y="380" textAnchor="middle" fontSize="12" fontWeight="bold" fill="black" letterSpacing="2">
                            VIBECARD.VN © 2026
                        </text>
                    </svg>
                </div>
            </div>

            {/* --- INPUT AREA (Bottom) --- */}
            <div className="flex-1 bg-white p-6 flex flex-col justify-center items-center gap-6">
                <div className="w-full max-w-md">
                    <label className="block text-black font-black uppercase mb-2 text-lg">
                        Nhập tên của bạn
                    </label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        maxLength={18}
                        placeholder="Ví dụ: Hùng Bá..."
                        className="w-full bg-[#F3F4F6] border-4 border-black p-4 text-xl font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow placeholder:text-gray-400"
                    />
                    <p className="text-right text-xs font-bold mt-1 text-gray-500">
                        {userName.length}/18 ký tự
                    </p>
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
          `}
                >
                    {isDownloading ? (
                        <>
                            <Loader2 className="animate-spin w-6 h-6" />
                            Đang xuất xưởng...
                        </>
                    ) : (
                        <>
                            <Download className="w-6 h-6 border-2 border-transparent" />
                            Tải Ảnh Ngay
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
