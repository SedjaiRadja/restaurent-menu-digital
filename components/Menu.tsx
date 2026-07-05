"use client";

import { useEffect } from "react";
import Image from "next/image";
import { food_list, menu_list, FoodItem } from "@/data/assets";
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
      className="font-['Franklin_Gothic_Medium',Arial,sans-serif]"
    >
      <h1 className="ml-8 mt-10 text-[40px] font-bold">Explore our Menu!</h1>

      <p className="ml-8 mt-3 text-[30px] text-[#555]">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and provide an exceptional dining
        experience.
      </p>

      <div className="ml-5 mr-24 flex gap-3 overflow-x-auto pr-12 text-center scrollbar-hide">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "" : item.menu_name,
              )
            }
            className="cursor-pointer"
          >
            <Image
              src={item.menu_image}
              alt={item.menu_name}
              width={150}
              height={150}
              className={`mt-3 h-auto w-[120%] rounded-[10px] object-cover transition-all ${
                category === item.menu_name
                  ? "rounded-full border-4 border-[tomato] p-1"
                  : ""
              }`}
            />

            <p className="mt-2 cursor-pointer text-[30px]">{item.menu_name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
