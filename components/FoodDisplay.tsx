"use client";

import Image from "next/image";
import { FoodItem } from "@/data/assets";
import { cormorant, manrope, poppins } from "@/components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";

interface FoodDisplayProps {
  foodList: FoodItem[];
  category: string;
}

export default function FoodDisplay({ foodList, category }: FoodDisplayProps) {
  return (
    <section
      className="
    bg-gradient-to-b from-[#17130D] to-[#0F0F0F]
    px-6 py-20 md:px-12 lg:px-20"
    >
      {/* Section Title */}
      <div className="flex flex-1 flex-col items-center text-center">
        <AnimatePresence mode="wait">
          <motion.h2
            key={category || "all"}
            initial={{
              opacity: 0,
              y: 20,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: -20,
              filter: "blur(8px)",
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`text-4xl md:text-5xl text-[#D4AF37] ${cormorant.className}`}
          >
            {category || "Tous nos plats"}
          </motion.h2>
        </AnimatePresence>
        <Image
          src="/assets/spoon.png"
          alt="Décoration"
          width={45}
          height={45}
          className="my-5"
        />
      </div>

      {/* Cards */}
      <HoverEffect items={foodList} />
    </section>
  );
}
