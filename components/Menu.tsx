"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { useEffect } from "react";
import Image from "next/image";

import { food_list, menu_list, FoodItem } from "@/data/assets";
import { cormorant, manrope, poppins } from "@/components/Header";

interface MenuProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setFoodList: React.Dispatch<React.SetStateAction<FoodItem[]>>;
}

const Menu = ({ category, setCategory, setFoodList }: MenuProps) => {
  useEffect(() => {
    if (category) {
      setFoodList(food_list.filter((item) => item.category === category));
    } else {
      setFoodList(food_list);
    }
  }, [category, setFoodList]);

  return (
    <section
      id="menu"
      className="bg-gradient-to-b from-[#0F0F0F] to-[#17130D] px-6 py-20 text-white md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Title */}
      <div className="flex flex-1 flex-col items-center text-center">
        <h1
          className={`text-4xl md:text-5xl text-[#D4AF37] ${cormorant.className}`}
        >
          Notre Menu
        </h1>
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
          Découvrez une sélection raffinée de plats préparés avec passion et
          élégance pour offrir une expérience gastronomique unique.
        </p>
      </div>

      {/* Categories Slider */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
        className="menu-swiper mt-12 pb-14"
      >
        {menu_list.map((item) => (
          <SwiperSlide
            key={item.menu_name}
            className="!flex !justify-center pt-2"
          >
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "" : item.menu_name,
                )
              }
              className="flex cursor-pointer flex-col items-center text-center"
            >
              <div
                className={`
                  rounded-full p-[3px]
                  transition-all duration-300
                  ${category === item.menu_name ? "ring-4 ring-[#C8A96A]" : ""}
                `}
              >
                <Image
                  src={item.menu_image}
                  alt={item.menu_name}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full object-cover"
                />
              </div>

              <h3
                className={`
                  mt-3 text-sm md:text-base
                  transition-colors duration-300
                  ${poppins.className}
                  ${
                    category === item.menu_name
                      ? "text-[#C8A96A]"
                      : "text-white"
                  }
                `}
              >
                {item.menu_name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Menu;
