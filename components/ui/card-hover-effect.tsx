"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { cormorant, manrope, poppins } from "@/components/Header";

interface FoodCardProps {
  items: {
    _id: string;
    name: string;
    image: string;
    description: string;
    price: number;
    category: string;
  }[];
  className?: string;
}

export const HoverEffect = ({ items, className }: FoodCardProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        `
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-8
        py-10
        `,
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item._id}
          className="relative group block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="
                absolute
                inset-0
                rounded-3xl
                bg-[#C8A96A]/10
                border
                border-[#C8A96A]/20
                backdrop-blur-sm
                z-10
                "
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.25,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                  },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            {/* Image */}
            <div className="overflow-hidden rounded-t-3xl">
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={400}
                className="
                h-[240px]
                w-full
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
                "
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Name + Price */}
              <div className="relative">
                <span
                  className={`
      absolute
      top-0
      right-0
      text-lg
      font-semibold
      text-[#C8A96A]
      ${poppins.className}
    `}
                >
                  {item.price.toLocaleString("fr-FR")} DA
                </span>

                <CardTitle className="pr-24">{item.name}</CardTitle>
              </div>

              {/* Description */}
              <CardDescription>{item.description}</CardDescription>

              {/* Category */}
              <div className="mt-6">
                <span
                  className={`
                    inline-block
                    rounded-full
                    border
                    border-[#C8A96A]/30
                    bg-[#C8A96A]/10
                    px-4
                    py-2
                    text-sm
                    text-[#C8A96A]
                    ${poppins.className}
                  `}
                >
                  {item.category}
                </span>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `
        relative
        z-20
        h-full
        overflow-hidden
        rounded-3xl
        border
        border-[#242424]
        bg-[#141414]
        shadow-xl
        transition-all
        duration-500
        group-hover:-translate-y-3
        group-hover:border-[#C8A96A]
        group-hover:shadow-[0_20px_50px_rgba(200,169,106,0.18)]
        `,
        className,
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        `
        text-3xl
        font-semibold
        text-[#C8A96A]
        leading-tight
        `,
        cormorant.className,
        className,
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        `
        mt-4
        text-sm
        leading-7
        text-gray-400
        `,
        manrope.className,
        className,
      )}
    >
      {children}
    </p>
  );
};
