import React from "react";
import ProductCard from "../components/ProductCard";
import ProductsData from '../Data'
export default function ProductList() {
  return (
    <section>
      <h1 className="text-2xl font-bold  text-custom my-4 bg-custom-400">Products List</h1>
      <div className="grid grid-cols-custom-300 gap-x-4 gap-y-8">
        {
          ProductsData.map(({id,image, title, category,price,rating})=>(
            <ProductCard key={id} title={title} imageUrl={image} category={category} price={price} rating={rating.rate} />
          ))
        }
      </div>
    </section>
  );
}
