import { Button } from "@heroui/react";
import React, { useEffect } from "react";
import { Link, useOutletContext } from "react-router";
import ProductCard from "../components/ProductCard";

export default function Hero() {
  const states = useOutletContext();
  const [productList, setProductList] = states.productState;
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);
  console.log(productList);
  return (
    <main className="min-h-[calc(90vh)] flex justify-center items-center flex-col gap-8">
      <div>
        <h1 className="block text-4xl font-bold  text-custom my-4 bg-custom-400">
          Welcome To My Ecommerce
        </h1>
      </div>
      <div className="grid grid-cols-custom-400 w-full gap-x-4 gap-y-8">
        {productList.slice(0, 4).map(({ id, image, title, category, price, rating }) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            imageUrl={image}
            category={category}
            price={price}
            rating={rating.rate}
          />
        ))}
      </div>
      <div className="flex gap-4">
        <Button color="warning" radius="sm" variant="bordered" className="shadow-md self-center">
          <Link to="productlist">Explore All Products</Link>
        </Button>
      </div>
    </main>
  );
}
