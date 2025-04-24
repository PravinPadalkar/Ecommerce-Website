import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useOutletContext } from "react-router";
import MyPagination from "../utilities/MyPagination";
export default function ProductList() {
  const states = useOutletContext();
  const [productList, setProductList] = states.productState;
  const [page, setPage] = useState(1);
  const NoOfItems = 4;
  useEffect(() => {
    if (!productList.length) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProductList(data));
    }
  }, []);
  return (
    <section>
      <h1 className="text-2xl font-bold  text-custom my-4 bg-custom-400">Products List</h1>
      <div className="flex justify-end items-center min-h-16 my-4">
        <MyPagination
          total={Math.floor(productList.length / NoOfItems)}
          page={page}
          setPage={setPage}
        />
      </div>
      <div className="grid grid-cols-custom-300 gap-x-4 gap-y-8">
        {productList
          .slice((page - 1) * NoOfItems, page * NoOfItems)
          .map(({ id, image, title, category, price, rating }) => (
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
    </section>
  );
}
