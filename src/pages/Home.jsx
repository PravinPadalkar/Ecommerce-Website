import React, { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import useLocalStroage from "../hooks/useLocalStroage";

export default function Home() {
  const [cartList, setCartList] = useLocalStroage('cartList',[]);
  const [wishList, setWishList] = useLocalStroage('wishList',[]);
  const [productList, setProductList] = useLocalStroage('productList',[]);
  const [orderHistoryList,setOrderHistoryList] = useLocalStroage('orderHistoryList',[]);
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
