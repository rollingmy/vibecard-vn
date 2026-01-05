import React from "react";

interface CardItemProps {
    title: string;
    icon?: React.ReactNode;
    color?: string;
}

export default function CardItem({ title, icon, color }: CardItemProps) {
    const isHex = color?.startsWith('#');
    const style = isHex ? { backgroundColor: color } : {};
    const className = `flex flex-col items-center p-6 border-4 border-black ${!isHex ? color : ''} shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1`;

    return (
        <div className={className} style={style}>
            <div className="w-24 h-24 mb-4 border-2 border-black rounded-full flex items-center justify-center bg-white overflow-hidden">
                {icon || (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                )}
            </div>
            <h3 className="text-xl font-bold mb-4 text-center uppercase">{title}</h3>
            <button className="mt-auto px-6 py-2 bg-[#FFD600] border-2 border-black font-black uppercase text-sm tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer">
                Dùng ngay
            </button>
        </div>
    );
}
