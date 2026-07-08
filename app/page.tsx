"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import FoodDisplay from "@/components/FoodDisplay";
import Apropos from "@/components/A-propos";
import Contact from "@/components/Contact";
import { food_list, FoodItem } from "@/data/assets";

export default function Home() {
  const [category, setCategory] = useState("");
  const [foodList, setFoodList] = useState<FoodItem[]>(food_list);

  return (
    <section className="relative bg-[#0F0F0F]">
      <Header />

      <main className="relative z-20">
        <Apropos />
        <Menu
          category={category}
          setCategory={setCategory}
          setFoodList={setFoodList}
        />{" "}
        <FoodDisplay foodList={foodList} />
        <Contact />
      </main>
    </section>
  );
}
