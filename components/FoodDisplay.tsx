"use client";

import { useState } from "react";
import Image from "next/image";
import { FoodItem } from "@/data/assets";
import { cormorant } from "@/components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";

interface FoodDisplayProps {
  foodList: FoodItem[];
  category: string;
}

const ITEMS_PER_PAGE = 6;

export default function FoodDisplay({ foodList, category }: FoodDisplayProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(foodList.length / ITEMS_PER_PAGE);

  const currentItems = foodList.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <section className="bg-gradient-to-b from-[#17130D] to-[#0F0F0F] px-6 py-20 md:px-12 lg:px-20">
      {/* Section Title */}
      <div className="flex flex-col items-center text-center">
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

      {/* Food Cards */}
      <HoverEffect items={currentItems} />

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
            disabled={currentPage === 1}
            className="rounded-lg border border-[#D4AF37] px-4 py-2 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
          >
            ←
          </button>

          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`h-10 w-10 rounded-full border transition ${
                  currentPage === page
                    ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                    : "border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() =>
              setCurrentPage((page) => Math.min(page + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="rounded-lg border border-[#D4AF37] px-4 py-2 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}
