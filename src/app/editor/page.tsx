import CardEditor from "@/components/CardEditor";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EditorPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Simple Header for navigation */}
            <div className="bg-black text-white p-4 flex items-center gap-4">
                <Link href="/" className="flex items-center gap-2 font-bold hover:underline">
                    <ArrowLeft className="w-5 h-5" />
                    Quay lại Trang chủ
                </Link>
                <span className="font-mono opacity-50">|</span>
                <h1 className="font-bold uppercase tracking-wider">Trình Tạo Thẻ - VibeCard Demo</h1>
            </div>

            <CardEditor template={{
                id: 'chien-than-san-sale',
                name: 'Chiến Thần Săn Sale',
                color: '#FFD700',
                description: 'Vợt deal nhanh như người yêu cũ trở mặt'
            }} />
        </div>
    );
}
