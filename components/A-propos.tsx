"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cormorant, manrope, poppins } from "@/components/Header";

export default function AboutUs() {
  return (
    <motion.section
      id="a-propos"
      initial={{ y: 120, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative z-20 bg-[#16120D] pt-28 pb-28"
    >
      <div className="relative overflow-hidden rounded-t-[50px] bg-[#16120D]">
        {/* Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Image
            src="/assets/S.png"
            alt="Background"
            width={450}
            height={475}
          />
        </div>

        <div className="bg-[#16120D] relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:justify-between">
          {/* Left */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-end lg:text-right">
            <h2
              className={`text-4xl md:text-5xl text-[#D4AF37] ${cormorant.className}`}
            >
              À propos de nous
            </h2>

            <Image
              src="/assets/spoon.png"
              alt="Décoration"
              width={45}
              height={45}
              className="my-5"
            />

            <p
              className={`max-w-md text-lg leading-8 text-gray-300 ${manrope.className}`}
            >
              Chez <span className="font-semibold text-[#D4AF37]">Safran</span>,
              chaque repas est une invitation à découvrir une cuisine raffinée,
              préparée avec des ingrédients soigneusement sélectionnés et une
              passion pour l&apos;excellence.
            </p>

            <Link
              href="/#menu"
              className={`mt-8 rounded-md border border-[#D4AF37] px-8 py-3 text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black ${poppins.className}`}
            >
              Découvrir le menu
            </Link>
          </div>

          {/* Knife */}
          <div className="flex justify-center">
            <Image
              src="/assets/knife.png"
              alt="Knife"
              width={120}
              height={900}
              className="h-[450px] w-auto md:h-[650px] lg:h-[850px]"
            />
          </div>

          {/* Right */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <h2
              className={`text-4xl md:text-5xl text-[#D4AF37] ${cormorant.className}`}
            >
              Notre histoire
            </h2>

            <Image
              src="/assets/spoon.png"
              alt="Décoration"
              width={45}
              height={45}
              className="my-5"
            />

            <p
              className={`max-w-md text-lg leading-8 text-gray-300 ${manrope.className}`}
            >
              Depuis notre ouverture, nous avons pour ambition d&apos;offrir une
              expérience gastronomique élégante où tradition et modernité se
              rencontrent pour créer des saveurs inoubliables.
            </p>

            <Link
              href="/#contact"
              className={`mt-8 rounded-md border border-[#D4AF37] px-8 py-3 text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black ${poppins.className}`}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
