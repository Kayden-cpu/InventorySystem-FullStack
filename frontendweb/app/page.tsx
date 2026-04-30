"use client"
import Image from "next/image";
import ProductCard from "./Components/ProductCard";
import { useState } from "react";
import { InventoryItem, mockInventoryItems } from "./Objects/InvetoryItem";

export default function Home() {
  const [allProductsLoaded] = useState<InventoryItem[]>(mockInventoryItems);

  return (
    <main className="p-6 flex gap-5 flex-wrap items-center justify-around">
      
        {allProductsLoaded.map((item) => (
          <section className="mb-6 rounded-xl bg-stone-100 p-4 " key={item.id}>
          <ProductCard inventoryItem={item} key={item.id} />
          </section>
        ))
        }
      
    </main>
  );
}
