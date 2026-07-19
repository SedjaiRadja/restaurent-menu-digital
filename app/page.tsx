import Header from "@/components/Header";
import Apropos from "@/components/A-propos";
import Contact from "@/components/Contact";
import MenuSection from "@/components/MenuSection";

export default function Home() {
  return (
    <section className="relative bg-[#0F0F0F]">
      <Header />

      <main className="relative z-20">
        <Apropos />
        <MenuSection />
        <Contact />
      </main>
    </section>
  );
}
