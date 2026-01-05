import Link from "next/link";
import templates from "@/data/templates.json";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CardItem from "@/components/CardItem";
import CardThumbnail from "@/components/CardThumbnail";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow bg-[#F3F4F6]">
        <Hero />

        <section className="container mx-auto py-16 px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black uppercase border-b-8 border-black inline-block pb-2 transform -rotate-1">
              Chọn mẫu thẻ
            </h2>
            <p className="mt-6 text-xl text-gray-700 font-bold max-w-2xl mx-auto">
              Đã có {templates.length} mẫu thẻ thiết kế sành điệu. Click vào để chế ngay!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-0">
            {templates.map((item, index) => (
              <Link key={item.id} href={`/editor/${item.id}`} className="group relative block">
                <div className="
                    relative 
                    aspect-[3/4] 
                    w-full 
                    border-4 border-black 
                    bg-white 
                    transition-all duration-300 ease-out 
                    group-hover:-translate-y-2 
                    group-hover:rotate-1 
                    group-hover:shadow-[12px_12px_0px_rgba(0,0,0,1)]
                    shadow-[4px_4px_0px_rgba(0,0,0,0.2)]
                ">
                  {/* Badge/Tag */}
                  <div className="absolute top-4 -right-4 bg-[#FFD700] text-black border-2 border-black font-black px-3 py-1 transform rotate-12 z-10 text-sm shadow-[2px_2px_0px_black]">
                    {index === 0 ? "HOT 🔥" : index === 1 ? "BEST SELLER" : "NEW ✨"}
                  </div>

                  {/* Thumbnail Component */}
                  <CardThumbnail template={item} />

                  {/* Hover Overlay Text */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white border-2 border-black font-black px-4 py-2 transform -rotate-3 hover:scale-110 transition-transform">
                      CHẾ NGAY ⚡
                    </span>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-xl font-black uppercase">{item.name}</h3>
                  <p className="text-sm font-bold text-gray-500">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
