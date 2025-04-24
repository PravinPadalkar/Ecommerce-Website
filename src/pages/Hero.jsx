import { Button } from "@heroui/react";
import React, { useEffect } from "react";
import { Link, useNavigate, useOutletContext } from "react-router";
import ProductCard from "../components/ProductCard";
import Lottie from "lottie-react";
import animationData from "../animations/Hero.json";
export default function Hero() {
  const navigate = useNavigate();
  const states = useOutletContext();
  const [productList, setProductList] = states.productState;
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);
  return (
    <main className="min-h-[calc(90vh)] flex justify-start items-center flex-col gap-8 mb-10">
      <div>
        <h1 className="block text-left text-4xl font-bold  text-custom my-4 bg-custom-400 text-orange-500">
          Welcome To My Ecommerce
        </h1>
      </div>
      <div className="w-2/4">
        <Lottie animationData={animationData} loop={true} />
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
        <Button
          color="warning"
          radius="sm"
          variant="bordered"
          className="shadow-md self-center"
          onPress={() => navigate('productlist')}
        >
          Explore All Products
        </Button>
      </div>
    </main>
  );
}
