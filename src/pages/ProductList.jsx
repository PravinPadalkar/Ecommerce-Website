import React from "react";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Products List</h1>
      <div className="grid grid-cols-4 gap-4">
        <ProductCard />
      </div>
    </section>
  );
}
