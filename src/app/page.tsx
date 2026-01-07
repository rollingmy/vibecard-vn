"use client";

import Link from "next/link";
import templates from "@/data/templates.json";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CardThumbnail from "@/components/CardThumbnail";
import Footer from "@/components/Footer";
import { useState } from "react";
import { CATEGORIES } from "@/constants/categories";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTemplates = templates
    .filter((t: any) => !t.hidden)
    .filter((t: any) => activeCategory === 'all' ? true : t.category === activeCategory);

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

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 px-2 sticky top-4 z-20">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  px-4 md:px-6 py-2 border-2 border-black font-black uppercase text-xs md:text-sm transform transition-all duration-200
                  ${activeCategory === cat.id
                    ? 'bg-black text-white shadow-[4px_4px_0px_#000] -translate-y-1'
                    : 'bg-white text-black hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_#000]'}
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-0 min-h-[500px]">
            {filteredTemplates.length > 0 ? (
              filteredTemplates.map((item: any, index: number) => (
                <Link key={item.id} href={`/editor/${item.id}`} className="group relative block h-full">
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
                    {/* Badge/Tag - Only show for top items in 'all' view or always? Let's keep it simple for now */}
                    {(activeCategory === 'all' && index < 3) && (
                      <div className="absolute top-4 -right-4 bg-[#FFD700] text-black border-2 border-black font-black px-3 py-1 transform rotate-12 z-10 text-sm shadow-[2px_2px_0px_black]">
                        {index === 0 ? "HOT 🔥" : index === 1 ? "BEST SELLER" : "NEW ✨"}
                      </div>
                    )}

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
                    <h3 className="text-xl font-black uppercase px-2">{item.name}</h3>
                    <p className="text-sm font-bold text-gray-500 line-clamp-2 px-4">{item.description}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-2xl font-black text-gray-400">CHƯA CÓ MẪU NÀO Ở ĐÂY CẢ :(</p>
                <button onClick={() => setActiveCategory('all')} className="mt-4 underline font-bold">Quay lại xem tất cả</button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
