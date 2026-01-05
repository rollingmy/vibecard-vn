export default function Hero() {
    return (
        <section className="w-full border-b-4 border-black bg-gradient-to-br from-yellow-400 via-orange-300 to-pink-500 py-20 px-4 text-center">
            <div className="container mx-auto">
                <h1 className="text-5xl md:text-7xl font-black text-black leading-tight mb-6 drop-shadow-[4px_4px_0px_rgba(255,255,255,0.5)]">
                    Tạo thẻ Flex <br className="md:hidden" />
                    <span className="bg-white px-2 border-2 border-black rotate-[-2deg] inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        Chuẩn Vibe 2026
                    </span>
                </h1>
                <p className="text-xl md:text-2xl font-bold font-mono mb-8 max-w-2xl mx-auto">
                    Danh thiếp ảo cực chất cho Gen Z hệ Flex.
                </p>
            </div>
        </section>
    );
}
