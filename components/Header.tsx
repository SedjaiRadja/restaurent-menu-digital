"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
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

export default function Header() {
  const { scrollY } = useScroll();

  // Background
  const scale = useTransform(scrollY, [0, 800], [1, 1.04]);
  const brightness = useTransform(scrollY, [0, 800], [1, 0.6]);
  const overlayOpacity = useTransform(scrollY, [0, 800], [0.25, 0.7]);

  // Content
  const contentY = useTransform(scrollY, [0, 500], [0, -100]);
  const contentOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <section className="sticky top-0 h-screen overflow-hidden">
      {/* Background */}
      <motion.div
        style={{
          scale,
          filter: useMotionTemplate`brightness(${brightness})`,
        }}
        className="absolute -inset-8 bg-[url('/assets/headerPhone.jpeg')] bg-cover bg-center md:bg-[url('/assets/headerLap.jpeg')]"
      />

      {/* Overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black"
      />

      {/* Content */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="relative z-10 flex h-screen items-center justify-center md:justify-start"
      >
        <div className="w-full max-w-2xl px-6 text-center text-white md:px-12 lg:px-20 md:text-left">
          <h1
            className={`text-6xl leading-tight text-[#C8A96A] sm:text-7xl lg:text-8xl ${cormorant.className}`}
          >
            Safran
          </h1>

          <div
            className={`mt-6 text-xl text-gray-100 sm:text-2xl ${manrope.className}`}
          >
            <SplitText
              text="Une expérience gastronomique raffinée où chaque plat est préparé avec passion et élégance."
              className={`text-xl sm:text-2xl ${manrope.className}`}
              delay={35}
              duration={1.2}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 35 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>

          <Link href="/#menu">
            <button
              className={`group mx-auto mt-8 flex cursor-pointer items-center gap-2 rounded-lg bg-white px-6 py-3 text-black transition hover:bg-gray-200 md:mx-0 ${poppins.className}`}
            >
              Découvrez notre menu
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
