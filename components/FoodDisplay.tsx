"use client";

import Image from "next/image";
import { FoodItem } from "@/data/assets";

interface FoodDisplayProps {
  foodList: FoodItem[];
}

const FoodDisplay = ({ foodList }: FoodDisplayProps) => {
  return (
    <>
      <hr className="my-5 h-[2px] border-none bg-gray-400" />

      <h1 className="mx-8 text-[40px] font-bold text-black">
        Top dishes near you
      </h1>

      <div className="ml-8 mt-8 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-x-[250px] gap-y-[50px]">
        {foodList.map((item) => (
          <div
            key={item._id}
            className="mx-auto flex flex-col items-center rounded-[15px] border-[5px] border-[tomato] px-[10px] py-5 text-center shadow-lg transition-transform duration-200 hover:-translate-y-2 hover:cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={250}
              className="h-auto w-full rounded-t-[15px]"
            />

            <h3 className="my-[10px] text-[28px] font-semibold">{item.name}</h3>

            <p className="text-[25px] text-[#555]">{item.description}</p>

            <p className="mt-[10px] text-[30px] font-bold text-[tomato]">
              ${item.price.toFixed(2)}
            </p>

            <p className="text-[25px] text-[#555]">{item.category}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodDisplay;
