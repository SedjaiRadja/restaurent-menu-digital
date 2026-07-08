import basket_icon from "./basket_icon.png";
import logo from "./logo.png";
import header_img from "./header_img.png";
import search_icon from "./search_icon.png";
import menu_1 from "./menu_1.png";
import menu_2 from "./menu_2.png";
import menu_3 from "./menu_3.png";
import menu_4 from "./menu_4.png";
import menu_5 from "./menu_5.png";
import menu_6 from "./menu_6.png";
import menu_7 from "./menu_7.png";
import menu_8 from "./menu_8.png";

import food_1 from "./food_1.png";
import food_2 from "./food_2.png";
import food_3 from "./food_3.png";
import food_4 from "./food_4.png";
import food_5 from "./food_5.png";
import food_6 from "./food_6.png";
import food_7 from "./food_7.png";
import food_8 from "./food_8.png";
import food_9 from "./food_9.png";
import food_10 from "./food_10.png";
import food_11 from "./food_11.png";
import food_12 from "./food_12.png";
import food_13 from "./food_13.png";
import food_14 from "./food_14.png";
import food_15 from "./food_15.png";
import food_16 from "./food_16.png";
import food_17 from "./food_17.png";
import food_18 from "./food_18.png";
import food_19 from "./food_19.png";
import food_20 from "./food_20.png";
import food_21 from "./food_21.png";
import food_22 from "./food_22.png";
import food_23 from "./food_23.png";
import food_24 from "./food_24.png";
import food_25 from "./food_25.png";
import food_26 from "./food_26.png";
import food_27 from "./food_27.png";
import food_28 from "./food_28.png";
import food_29 from "./food_29.png";
import food_30 from "./food_30.png";
import food_31 from "./food_31.png";
import food_32 from "./food_32.png";

import add_icon_white from "./add_icon_white.png";
import add_icon_green from "./add_icon_green.png";
import remove_icon_red from "./remove_icon_red.png";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import linkedin_icon from "./linkedin_icon.png";
import facebook_icon from "./facebook_icon.png";
import twitter_icon from "./twitter_icon.png";
import cross_icon from "./cross_icon.png";
import selector_icon from "./selector_icon.png";
import rating_starts from "./rating_starts.png";
import profile_icon from "./profile_icon.png";
import bag_icon from "./bag_icon.png";
import logout_icon from "./logout_icon.png";
import parcel_icon from "./parcel_icon.png";
import address_logo from "./adresse_logo.png";
import phone_logo from "./phone_logo.jpg";
import mail_logo from "./mail_logo.png";

export const assets = {
  logo,
  basket_icon,
  header_img,
  search_icon,
  rating_starts,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  app_store,
  play_store,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  profile_icon,
  logout_icon,
  bag_icon,
  parcel_icon,
  address_logo,
  phone_logo,
  mail_logo,
};

export const menu_list = [
  {
    menu_name: "Salad",
    menu_image: menu_1,
  },
  {
    menu_name: "Rolls",
    menu_image: menu_2,
  },
  {
    menu_name: "Deserts",
    menu_image: menu_3,
  },
  {
    menu_name: "Sandwich",
    menu_image: menu_4,
  },
  {
    menu_name: "Cake",
    menu_image: menu_5,
  },
  {
    menu_name: "Pure Veg",
    menu_image: menu_6,
  },
  {
    menu_name: "Pasta",
    menu_image: menu_7,
  },
  {
    menu_name: "Noodles",
    menu_image: menu_8,
  },
];

export const food_list = [
  {
    _id: "1",
    name: "Greek Salad",
    image: food_1,
    price: 1200,
    description: "Salade méditerranéenne fraîche avec feta et olives.",
    category: "Salad",
    calories: 320,
    preparationTime: "10 min",
    spicyLevel: 0,
    chefChoice: true,
    vegetarian: true,
    popular: true,
    available: true,
  },

  {
    _id: "2",
    name: "Veg Salad",
    image: food_2,
    price: 1400,
    description: "Mélange de légumes frais accompagnés d'une sauce maison.",
    category: "Salad",
    calories: 280,
    preparationTime: "8 min",
    spicyLevel: 0,
    chefChoice: false,
    vegetarian: true,
    popular: false,
    available: true,
  },

  {
    _id: "3",
    name: "Clover Salad",
    image: food_3,
    price: 1500,
    description: "Salade croquante aux légumes de saison.",
    category: "Salad",
    calories: 340,
    preparationTime: "12 min",
    spicyLevel: 0,
    chefChoice: false,
    vegetarian: true,
    popular: true,
    available: true,
  },

  {
    _id: "4",
    name: "Chicken Salad",
    image: food_4,
    price: 1800,
    description: "Poulet grillé accompagné d'une salade fraîche.",
    category: "Salad",
    calories: 450,
    preparationTime: "15 min",
    spicyLevel: 1,
    chefChoice: true,
    vegetarian: false,
    popular: true,
    available: true,
  },

  {
    _id: "5",
    name: "Lasagna Rolls",
    image: food_5,
    price: 2200,
    description: "Lasagnes roulées garnies d'une sauce crémeuse.",
    category: "Rolls",
    calories: 650,
    preparationTime: "20 min",
    spicyLevel: 0,
    chefChoice: true,
    vegetarian: false,
    popular: true,
    available: true,
  },

  {
    _id: "6",
    name: "Peri Peri Rolls",
    image: food_6,
    price: 2400,
    description: "Rouleaux épicés au poulet et sauce peri peri.",
    category: "Rolls",
    calories: 720,
    preparationTime: "22 min",
    spicyLevel: 3,
    chefChoice: false,
    vegetarian: false,
    popular: true,
    available: true,
  },

  {
    _id: "7",
    name: "Chicken Rolls",
    image: food_7,
    price: 2100,
    description: "Rouleaux croustillants au poulet grillé.",
    category: "Rolls",
    calories: 680,
    preparationTime: "18 min",
    spicyLevel: 1,
    chefChoice: false,
    vegetarian: false,
    popular: true,
    available: true,
  },

  {
    _id: "8",
    name: "Veg Rolls",
    image: food_8,
    price: 1700,
    description: "Rouleaux végétariens préparés avec des légumes frais.",
    category: "Rolls",
    calories: 420,
    preparationTime: "15 min",
    spicyLevel: 0,
    chefChoice: false,
    vegetarian: true,
    popular: false,
    available: true,
  },

  {
    _id: "9",
    name: "Ripple Ice Cream",
    image: food_9,
    price: 900,
    description: "Glace artisanale aux saveurs délicates.",
    category: "Deserts",
    calories: 310,
    preparationTime: "5 min",
    spicyLevel: 0,
    chefChoice: false,
    vegetarian: true,
    popular: true,
    available: true,
  },

  {
    _id: "10",
    name: "Fruit Ice Cream",
    image: food_10,
    price: 1000,
    description: "Glace aux fruits frais et naturels.",
    category: "Deserts",
    calories: 280,
    preparationTime: "5 min",
    spicyLevel: 0,
    chefChoice: false,
    vegetarian: true,
    popular: true,
    available: true,
  },

  {
    _id: "11",
    name: "Jar Ice Cream",
    image: food_11,
    price: 1100,
    description: "Glace servie dans un élégant bocal en verre.",
    category: "Deserts",
    calories: 350,
    preparationTime: "5 min",
    spicyLevel: 0,
    chefChoice: true,
    vegetarian: true,
    popular: true,
    available: true,
  },

  {
    _id: "12",
    name: "Vanilla Ice Cream",
    image: food_12,
    price: 800,
    description: "Glace classique à la vanille de Madagascar.",
    category: "Deserts",
    calories: 290,
    preparationTime: "5 min",
    spicyLevel: 0,
    chefChoice: false,
    vegetarian: true,
    popular: false,
    available: true,
  },
];
