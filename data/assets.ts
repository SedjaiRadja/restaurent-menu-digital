export interface MenuItem {
  menu_name: string;
  menu_image: string;
}

export interface FoodItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}
export const assets = {
  logo: "/assets/logo.png",
  basket_icon: "/assets/basket_icon.png",
  header_img: "/assets/header_img.png",
  search_icon: "/assets/search_icon.png",
  rating_starts: "/assets/rating_starts.png",
  add_icon_green: "/assets/add_icon_green.png",
  add_icon_white: "/assets/add_icon_white.png",
  remove_icon_red: "/assets/remove_icon_red.png",
  app_store: "/assets/app_store.png",
  play_store: "/assets/play_store.png",
  linkedin_icon: "/assets/linkedin_icon.png",
  facebook_icon: "/assets/facebook_icon.png",
  twitter_icon: "/assets/twitter_icon.png",
  cross_icon: "/assets/cross_icon.png",
  selector_icon: "/assets/selector_icon.png",
  profile_icon: "/assets/profile_icon.png",
  logout_icon: "/assets/logout_icon.png",
  bag_icon: "/assets/bag_icon.png",
  parcel_icon: "/assets/parcel_icon.png",
  address_logo: "/assets/adresse_logo.png",
  phone_logo: "/assets/phone_logo.jpg",
  mail_logo: "/assets/mail_logo.png",
};

export const menu_list: MenuItem[] = [
  {
    menu_name: "Entrées",
    menu_image: "/assets/menu_1.png",
  },
  {
    menu_name: "Salades",
    menu_image: "/assets/menu_2.png",
  },
  {
    menu_name: "Plats",
    menu_image: "/assets/menu_3.png",
  },
  {
    menu_name: "Grillades",
    menu_image: "/assets/menu_4.png",
  },
  {
    menu_name: "Pâtes",
    menu_image: "/assets/menu_5.png",
  },
  {
    menu_name: "Poissons",
    menu_image: "/assets/menu_6.png",
  },
  {
    menu_name: "Desserts",
    menu_image: "/assets/menu_7.png",
  },
  {
    menu_name: "Boissons",
    menu_image: "/assets/menu_8.png",
  },
];

export const food_list: FoodItem[] = [
  // ================= ENTRÉES =================
  {
    _id: "1",
    name: "Brick aux crevettes",
    image: "/assets/food_1.png",
    price: 950,
    description:
      "Feuille croustillante garnie de crevettes fraîches et fromage fondant.",
    category: "Entrées",
  },
  {
    _id: "2",
    name: "Velouté de champignons",
    image: "/assets/food_2.png",
    price: 800,
    description: "Crème de champignons frais parfumée aux herbes aromatiques.",
    category: "Entrées",
  },
  {
    _id: "3",
    name: "Assiette Méditerranéenne",
    image: "/assets/food_3.png",
    price: 1200,
    description: "Sélection raffinée de spécialités méditerranéennes maison.",
    category: "Entrées",
  },
  {
    _id: "4",
    name: "Foie gras maison",
    image: "/assets/food_4.png",
    price: 2200,
    description:
      "Foie gras artisanal accompagné de pain grillé et confiture de figues.",
    category: "Entrées",
  },

  // ================= SALADES =================
  {
    _id: "5",
    name: "Salade César",
    image: "/assets/food_5.png",
    price: 1300,
    description: "Poulet grillé, parmesan, croûtons et sauce César maison.",
    category: "Salades",
  },
  {
    _id: "6",
    name: "Salade Safran",
    image: "/assets/food_6.png",
    price: 1600,
    description:
      "Mélange de fruits frais, fromage de chèvre et noix caramélisées.",
    category: "Salades",
  },
  {
    _id: "7",
    name: "Salade Océane",
    image: "/assets/food_7.png",
    price: 1800,
    description: "Crevettes, saumon fumé et légumes croquants.",
    category: "Salades",
  },
  {
    _id: "8",
    name: "Salade Burrata",
    image: "/assets/food_8.png",
    price: 1700,
    description: "Tomates fraîches, burrata crémeuse et huile d'olive vierge.",
    category: "Salades",
  },

  // ================= PLATS =================
  {
    _id: "9",
    name: "Filet de bœuf sauce poivre",
    image: "/assets/food_9.png",
    price: 3800,
    description: "Filet de bœuf tendre accompagné de légumes sautés.",
    category: "Plats",
  },
  {
    _id: "10",
    name: "Suprême de poulet",
    image: "/assets/food_10.png",
    price: 2900,
    description:
      "Poulet fermier accompagné d'une sauce crémeuse aux champignons.",
    category: "Plats",
  },
  {
    _id: "11",
    name: "Magret de canard",
    image: "/assets/food_11.png",
    price: 4200,
    description: "Magret de canard servi avec sauce aux fruits rouges.",
    category: "Plats",
  },
  {
    _id: "12",
    name: "Couscous Royal",
    image: "/assets/food_12.png",
    price: 3500,
    description: "Couscous traditionnel aux viandes variées et légumes frais.",
    category: "Plats",
  },

  // ================= GRILLADES =================
  {
    _id: "13",
    name: "Entrecôte grillée",
    image: "/assets/food_13.png",
    price: 4500,
    description: "Entrecôte premium grillée au feu de bois.",
    category: "Grillades",
  },
  {
    _id: "14",
    name: "Brochettes d'agneau",
    image: "/assets/food_14.png",
    price: 3200,
    description: "Brochettes d'agneau marinées aux épices orientales.",
    category: "Grillades",
  },
  {
    _id: "15",
    name: "Mix Grill Safran",
    image: "/assets/food_15.png",
    price: 5200,
    description: "Assortiment de viandes grillées sélectionnées par le chef.",
    category: "Grillades",
  },
  {
    _id: "16",
    name: "Escalope grillée",
    image: "/assets/food_16.png",
    price: 2400,
    description: "Escalope de poulet tendre accompagnée de légumes grillés.",
    category: "Grillades",
  },

  // ================= PÂTES =================
  {
    _id: "17",
    name: "Tagliatelles aux crevettes",
    image: "/assets/food_17.png",
    price: 2400,
    description: "Pâtes fraîches aux crevettes et sauce crémeuse.",
    category: "Pâtes",
  },
  {
    _id: "18",
    name: "Penne Arrabiata",
    image: "/assets/food_18.png",
    price: 1900,
    description: "Sauce tomate épicée et parmesan affiné.",
    category: "Pâtes",
  },
  {
    _id: "19",
    name: "Fettuccine Alfredo",
    image: "/assets/food_19.png",
    price: 2200,
    description: "Sauce Alfredo onctueuse et parmesan italien.",
    category: "Pâtes",
  },
  {
    _id: "20",
    name: "Lasagnes maison",
    image: "/assets/food_20.png",
    price: 2500,
    description:
      "Lasagnes préparées selon la recette traditionnelle italienne.",
    category: "Pâtes",
  },

  // ================= POISSONS =================
  {
    _id: "21",
    name: "Saumon grillé",
    image: "/assets/food_21.png",
    price: 4200,
    description: "Saumon frais accompagné d'une sauce citronnée.",
    category: "Poissons",
  },
  {
    _id: "22",
    name: "Dorade royale",
    image: "/assets/food_22.png",
    price: 3900,
    description: "Dorade fraîche grillée aux herbes méditerranéennes.",
    category: "Poissons",
  },
  {
    _id: "23",
    name: "Crevettes flambées",
    image: "/assets/food_23.png",
    price: 3600,
    description: "Crevettes sautées et flambées au beurre citronné.",
    category: "Poissons",
  },
  {
    _id: "24",
    name: "Loup de mer",
    image: "/assets/food_24.png",
    price: 4100,
    description: "Filet de loup de mer accompagné de légumes vapeur.",
    category: "Poissons",
  },

  // ================= DESSERTS =================
  {
    _id: "25",
    name: "Fondant au chocolat",
    image: "/assets/food_25.png",
    price: 950,
    description: "Cœur coulant au chocolat noir accompagné de glace vanille.",
    category: "Desserts",
  },
  {
    _id: "26",
    name: "Tiramisu maison",
    image: "/assets/food_26.png",
    price: 900,
    description: "Recette traditionnelle italienne préparée sur place.",
    category: "Desserts",
  },
  {
    _id: "27",
    name: "Cheesecake fruits rouges",
    image: "/assets/food_27.png",
    price: 950,
    description: "Cheesecake crémeux accompagné d'un coulis de fruits rouges.",
    category: "Desserts",
  },
  {
    _id: "28",
    name: "Crème brûlée",
    image: "/assets/food_28.png",
    price: 850,
    description: "Dessert français classique à la vanille de Madagascar.",
    category: "Desserts",
  },

  // ================= BOISSONS =================
  {
    _id: "29",
    name: "Jus d'orange frais",
    image: "/assets/food_29.png",
    price: 450,
    description: "Préparé à partir d'oranges fraîches pressées à la minute.",
    category: "Boissons",
  },
  {
    _id: "30",
    name: "Cocktail Safran",
    image: "/assets/food_30.png",
    price: 700,
    description: "Cocktail signature aux fruits exotiques.",
    category: "Boissons",
  },
  {
    _id: "31",
    name: "Mojito sans alcool",
    image: "/assets/food_31.png",
    price: 650,
    description: "Menthe fraîche, citron vert et eau pétillante.",
    category: "Boissons",
  },
  {
    _id: "32",
    name: "Café gourmand",
    image: "/assets/food_32.png",
    price: 850,
    description: "Café accompagné d'une sélection de mini-desserts.",
    category: "Boissons",
  },
];
