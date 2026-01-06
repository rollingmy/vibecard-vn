import React from 'react';
import { FlexTheme } from './templates/FlexTheme';
import { LoveTheme } from './templates/LoveTheme';

const AllTemplates = {
    ...FlexTheme,
    ...LoveTheme
};

interface Template {
    id: string;
    name: string;
    description: string;
    color: string;
}

interface CardThumbnailProps {
    template: Template;
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

export default function CardThumbnail({ template }: CardThumbnailProps) {
    const TemplateRenderer = AllTemplates[template.id as keyof typeof AllTemplates];

    if (!TemplateRenderer) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-500 font-bold">Preview not available</span>
            </div>
        );
    }

    // Determine default name
    const defaultName = DEFAULT_NAMES[template.id] || "";

    // Mock calculations for thumbnail
    const nameFontSize = 24; // Standard size for thumbnail

    return (
        <svg
            viewBox="0 0 300 400"
            className="w-full h-full object-contain"
            preserveAspectRatio="xMidYMid meet"
        >
            <TemplateRenderer
                userName={defaultName}
                userImage=""
                nameFontSize={nameFontSize}
            />
        </svg>
    );
}
