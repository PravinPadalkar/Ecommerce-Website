import React from "react";
import logo from "/vite.svg";
import MyDropDown from "../utilities/MyDropDown";

export default function Header() {
  return (
    <header className="bg-gray-50 px-6 py-4 h-[72px] flex justify-between shadow-md rounded-sm items-center mb-2">
        <div className="flex items-center gap-1">
          <img src={logo} className="w-12" alt="Logo" />
          <h1 className="text-2xl">My Ecommerce</h1>
        </div>

        <div className="flex space-x-4">
          <span>CartList</span>
          <span>wishlist</span>
          <MyDropDown/>
        </div>
    </header>
  );
}
