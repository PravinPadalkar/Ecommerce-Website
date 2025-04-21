import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useOutletContext } from "react-router";
export default function ProductList() {
  const states = useOutletContext();
  const [productList,setProductList] = states.productState;

  return (
    <section>
      <h1 className="text-2xl font-bold  text-custom my-4 bg-custom-400">Products List</h1>
      <div className="grid grid-cols-custom-300 gap-x-4 gap-y-8">
        {
          productList.map(({id,image, title, category,price,rating})=>(
            <ProductCard key={id} id={id} title={title} imageUrl={image} category={category} price={price} rating={rating.rate} />
          ))
        }
      </div>
    </section>
  );
}
