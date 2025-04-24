import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useOutletContext } from "react-router";
import MyPagination from "../utilities/MyPagination";
import SearchInput from "../utilities/SearchInput";
import SelectInput from "../utilities/SelectInput";
import useFilter from '../hooks/useFilter'
export default function ProductList() {
  const states = useOutletContext();
  const [productList, setProductList] = states.productState;
  const [page, setPage] = useState(1);
  const NoOfItems = 4;


  const [filteredList,setSearchQuery] = useFilter(productList,(data)=>data.title)
  const [filteredList2,setSelectQuery] = useFilter(productList,(data)=>data.category)
  console.log(filteredList2)
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
      <div className="flex flex-wrap justify-between gap-8 my-8">
        <div className="flex flex-wrap sm:flex-nowrap items-center w-[600px] gap-6">
          <SearchInput setSearchQuery={setSearchQuery} />
          <SelectInput setSelectQuery={setSelectQuery} />
        </div>
        <MyPagination
          total={Math.floor(filteredList.length / NoOfItems)}
          setPage={setPage}
        />
      </div>
      <div className="grid grid-cols-custom-300 gap-x-4 gap-y-8">
        {filteredList
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
