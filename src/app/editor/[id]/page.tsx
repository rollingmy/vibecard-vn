import CardEditor from "@/components/CardEditor";
import templates from "@/data/templates.json";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Next.js 15 App Router dynamic params are Promises
type Params = Promise<{ id: string }>;

export default async function EditorPage({ params }: { params: Params }) {
    const { id } = await params;
    const template = templates.find((t) => t.id === id);

    if (!template) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
                <h1 className="text-3xl font-black mb-4">404 - MẪU THẺ KHÔNG TỒN TẠI</h1>
                <p className="mb-8">Có vẻ như bạn đã đi lạc vào vùng đất không có thật.</p>
                <Link
                    href="/"
                    className="px-6 py-3 bg-black text-white font-bold uppercase hover:bg-gray-800 transition-colors"
                >
                    Quay lại Trang chủ
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Simple Header for navigation */}
            <div className="bg-black text-white p-4 flex items-center gap-4 sticky top-0 z-50">
                <Link href="/" className="flex items-center gap-2 font-bold hover:underline">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="hidden md:inline">Trang chủ</span>
                </Link>
                <span className="font-mono opacity-50">|</span>
                <h1 className="font-bold uppercase tracking-wider truncate">
                    Tạo thẻ: {template.name}
                </h1>
            </div>

            <CardEditor template={template} />
        </div>
    );
}
