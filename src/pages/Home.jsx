import React, { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

export default function Home() {
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [orderHistoryList,setOrderHistoryList] = useState([]);
  return (
    <div className="max-w-[1300px] mx-4  xl:mx-auto font-roboto  ">
      <Header wishList={wishList} cartList={cartList} />
      <Outlet
        context={{
          productState: [productList, setProductList],
          cartState: [cartList, setCartList],
          wishState: [wishList, setWishList],
          orderHistroyState:[orderHistoryList,setOrderHistoryList]
        }}
      />
    </div>
  );
}
