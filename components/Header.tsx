import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Cormorant_Garamond, Manrope, Poppins } from "next/font/google";
import SplitText from "./SplitText";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/assets/headerPhone.jpeg')] md:bg-[url('/assets/headerLap.jpeg')] bg-cover bg-center" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* HERO CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full max-w-2xl px-4 sm:px-6 md:px-12 lg:px-20 text-white">
          <h1
            className={`text-6xl md:text-6xl lg:text-8xl leading-tight text-[#C8A96A] ${cormorant.className}`}
          >
            Safran
          </h1>

          <div
            className={`mt-4 text-lg sm:text-xl md:text-2xl text-gray-100 ${manrope.className}`}
          >
            <SplitText
              text="Une expérience gastronomique raffinée où chaque plat est préparé avec passion et élégance."
              className={`text-lg sm:text-xl md:text-2xl ${manrope.className}`}
              delay={35}
              duration={1.2}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 35 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
          </div>

          <Link href="/#menu">
            <button
              className={`group cursor-pointer mt-6 flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-black transition hover:bg-gray-200 ${poppins.className}`}
            >
              Découvrez notre menu
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
