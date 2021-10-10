import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Nike Blazer Mid '77 Vintage",
      type: "Custom Shoe",
      price: 10295,
      suitable: "men",
      image: "custom-nike-blazer-mid-77-vintage-by-you",
      colors: ["blue", "red", "white"],
      size: [5, 5.5, 8, 9, 10],
      tags: ["featured"],
    },
    {
      id: 2,
      title: "NikeCourt Legacy Canvas",
      type: "Men's Shoes",
      price: 3995,
      suitable: "men",
      image: "court-legacy-canvas-shoes-0wXxWF",
      colors: ["black", "brown", "white"],
      size: [5, 5.5, 8, 9, 10],
      tags: ["featured"],
    },
    {
      id: 3,
      title: "Nike Phantom GT Elite By You",
      type: "Football Shoe",
      price: 12295,
      suitable: "men",
      image: "custom-nike-phantom-gt-elite-by-you",
      colors: ["black", "green"],
      size: [9, 10, 12],
      tags: ["featured"],
    },
    {
      id: 4,
      title: "Nike Air Force 1 '07",
      type: "Men's Shoe",
      price: 7495,
      suitable: "men",
      image: "air-force-1-07-shoe-WrLlWX",
      colors: ["white", "black"],
      size: [6, 7, 8, 9, 10, 12],
      tags: ["featured"],
    },
    {
      id: 5,
      title: "Nike Air Force 1 '07 LV8 EMB",
      type: "Men's Shoe",
      price: 8295,
      suitable: "men",
      image: "air-force-1-07-lv8-emb-shoes-hmqZHr",
      colors: ["white"],
      size: [9, 10, 12],
      tags: ["featured"],
    },
    {
      id: 6,
      title: "Nike Legend Essential 2",
      type: "Womens's Training Shoe",
      price: 4495,
      suitable: "women",
      image: "legend-essential-2-training-shoe-3pRG2G",
      colors: ["white"],
      size: [9, 10, 12],
      tags: ["featured"],
    },
    {
      id: 7,
      title: "Nike Air Force 1 '07 LV8 EMB",
      type: "Womens's Shoe",
      price: 8295,
      suitable: "women",
      image: "air-force-1-07-lv8-emb-shoes-hmqZHr",
      colors: ["white"],
      size: [9, 10, 12],
      tags: ["featured"],
    },
    {
      id: 8,
      title: "Nike Blazer Mid '77 SE",
      type: "Womens's Shoe",
      price: 9295,
      suitable: "women",
      image: "blazer-mid-77-se-shoe-FJ3XTQ",
      colors: ["white"],
      size: [9, 10, 12],
      tags: ["featured"],
    },
    {
      id: 9,
      title: "Nike Air Force 1 Shadow",
      type: "Womens's Shoe",
      price: 10295,
      suitable: "women",
      image: "air-force-1-shadow-shoe-jcctFq",
      colors: ["orange"],
      size: [9, 10, 12],
      tags: ["featured"],
    },
    {
      id: 10,
      title: "Nike Renew Serenity Run",
      type: "Women's Road Running Shoes",
      price: 5437,
      suitable: "women",
      image: "renew-serenity-run-road-running-shoes-BVzhTq",
      colors: ["white", "black"],
      size: [9, 10, 12],
      tags: ["featured"],
    },
    {
      id: 11,
      title: "Kyrie Low 4 EP",
      type: "Basketball Shoe",
      price: 9295,
      suitable: "unisex",
      image: "kyrie-low-4-ep-basketball-shoe-gD2KLL",
      colors: ["white", "blue", "green", "red", "grey", "black"],
      size: [9, 10, 12],
      tags: ["featured"],
    },
    {
      id: 12,
      title: "Nike Flow 2020 ISPA SE",
      type: "Shoe",
      price: 17595,
      suitable: "unisex",
      image: "flow-2020-ispa-se-shoes-HdPc5n",
      colors: ["grey", "black"],
      size: [9, 10, 12],
      tags: ["featured"],
    },
    {
      id: 13,
      title: "Giannis Immortality 'Force Field'",
      type: "Basketball Shoe",
      price: 6795,
      suitable: "unisex",
      image: "giannis-immortality-force-field-basketball-shoe-7MLR3K",
      colors: ["grey"],
      size: [9, 10, 12],
      tags: ["featured"],
    },
    {
      id: 14,
      title: "Giannis Immortality",
      type: "Women's Road Running Shoes",
      price: 6795,
      suitable: "unisex",
      image: "giannis-immortality-basketball-shoes-X7QzFT",
      colors: ["blue", "black"],
      size: [9, 10, 12],
      tags: ["featured"],
    },
    {
      id: 15,
      title: "Nike SB Zoom Blazer Mid Premium",
      type: "Skate Shoes",
      price: 5437,
      suitable: "unisex",
      image: "sb-zoom-blazer-mid-skate-shoe-jkRh6g",
      colors: ["grey"],
      size: [9, 10, 12],
      tags: ["featured"],
    },
  ];
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);

  const filterPriceData = (data) => {
    let maxPrice = Math.max.apply(
      Math,
      data.map((o) => o.price)
    );
    let minPrice = Math.min.apply(
      Math,
      data.map((o) => o.price)
    );

    setMaxPrice(maxPrice);
    setMinPrice(minPrice);
  };

  useEffect(async () => {
    await filterPriceData(products);
  }, []);

  return (
    <div className="container mx-auto max-w-[90%] sm:max-w-[80%]">
      <Head>
        <title>Nike PWA</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <main>
        <div className="h-10 mb-8 z-10 flex items-center justify-between bg-white sticky top-0">
          <h2 className="text-2xl text-black font-semibold">
            Shoes <span>15</span>
          </h2>
          <div>
            <label className="font-semibold text-black mr-2">Sort By</label>
            <select className="outline-none" name="sort" id="select">
              <option value="default">Default</option>
              <option value="lowToHigh">Price: Low - High</option>
              <option value="highToLow">Price: High - Low</option>
            </select>
          </div>
        </div>
        <div className="flex">
          <Sidebar maxPrice={maxPrice} minPrice={minPrice} />
          <Products products={products} />
        </div>
      </main>
    </div>
  );
}
