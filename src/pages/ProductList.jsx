import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useOutletContext } from "react-router";
import MyPagination from "../utilities/MyPagination";
import SearchInput from "../utilities/SearchInput";
import SelectInput from "../utilities/SelectInput";
import useFilter from "../hooks/useFilter";
import { addToast, Spinner } from "@heroui/react";
export default function ProductList() {
  const states = useOutletContext();
  const [productList, setProductList] = states.productState;

  const [page, setPage] = useState(1);
  const NoOfItems = 8;

  const [filteredByTitle, setSearchQuery] = useFilter(productList, (data) => data.title);
  const [filteredByCategory, setSelectQuery] = useFilter(productList, (data) => data.category);
  let filteredList = productList;
  if(filteredByTitle.length===0 && filteredByCategory.length>0){
    filteredList = filteredByCategory
    addToast({
      title: "No Data Available For Given Search",
      color: "danger",
    })
  } else if(filteredByTitle.length>0 && filteredByCategory.length===0){
    filteredList = filteredByTitle
  }else{
    filteredList = filteredByTitle.filter((product) =>
      filteredByCategory.some((p) => p.id === product.id)
    );
  }

  useEffect(() => {
    if (!productList.length) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProductList(data));
    }
  }, []);
  if(productList.length===0) return  <Spinner label="Loading" size="lg" />
  return (
    <section>
      <h1 className="text-2xl font-bold  text-custom my-4 bg-custom-400">Products List</h1>
      <div className="flex flex-wrap justify-between gap-8 my-8">
        <div className="flex flex-wrap sm:flex-nowrap items-center w-[600px] gap-6">
          <SearchInput setSearchQuery={setSearchQuery} />
          <SelectInput setSelectQuery={setSelectQuery} />
        </div>
        <MyPagination total={Math.floor(filteredList.length / NoOfItems)} setPage={setPage} />
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
