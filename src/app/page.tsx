import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CardItem from "@/components/CardItem";
import Footer from "@/components/Footer";

export default function Home() {
  const templates = [
    { title: "Chiến thần săn sale", color: "bg-[#A3E635]" }, // Lime
    { title: "Simp Lord", color: "bg-[#F472B6]" }, // Pink
    { title: "Kẻ hủy diệt Deadline", color: "bg-[#60A5FA]" }, // Blue
    { title: "Flexing Boy", color: "bg-[#FBBF24]" }, // Amber
    { title: "Lowkey Phú Quý", color: "bg-[#C084FC]" }, // Purple
    { title: "CEO Start-up", color: "bg-[#2DD4BF]" }, // Teal
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow bg-[#F3F4F6]">
        <Hero />

        <section className="container mx-auto py-16 px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black uppercase border-b-4 border-black inline-block pb-2">
              Chọn mẫu thẻ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {templates.map((item, index) => (
              <CardItem
                key={index}
                title={item.title}
                color={item.color}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
