"use client";

import { useState } from "react";
import Menu from "./Menu";
import FoodDisplay from "./FoodDisplay";
import { food_list, FoodItem } from "@/data/assets";

export default function MenuSection() {
  const [category, setCategory] = useState("");
  const [foodList, setFoodList] = useState<FoodItem[]>(food_list);

  return (
    <>
      <Menu
        category={category}
        setCategory={setCategory}
        setFoodList={setFoodList}
      />

      <FoodDisplay key={category} foodList={foodList} category={category} />
    </>
  );
}
