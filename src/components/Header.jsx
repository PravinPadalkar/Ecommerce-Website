import React from "react";
import logo from "/logo.svg";
import MyDropDown from "../utilities/MyDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping,faHeart} from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@heroui/react";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className=" px-4 md:px-8 py-4 h-[72px] flex justify-between shadow-md rounded-sm items-center mb-2  ">
      <div className="flex items-center gap-4 w-[500px]">
        <img src={logo} className="w-12" alt="Logo" />
        <h1  className="hidden md:block text-2xl">My Ecommerce</h1>
      </div>
      <div className="flex gap-4 md:gap-12">
        <div className="flex gap-4 items-center mt-1">
          <Badge color="success" content={5}>
            <Link to="/cartlist">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="fa-2xl text-blue-400"
              />
            </Link>
          </Badge>

          <Badge color="success" content={5} variant="shadow">
            <Link to="/wishlist">
              <FontAwesomeIcon icon={faHeart} className="fa-2xl text-red-800" />
            </Link>
          </Badge>
        </div>
        <MyDropDown />
      </div>
    </header>
  );
}
