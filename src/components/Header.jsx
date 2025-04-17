import React from "react";
import logo from "/logo.svg";
import MyDropDown from "../utilities/MyDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCheckCircle,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@heroui/react";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-gray-50 px-6 py-4 h-[72px] flex justify-between shadow-md rounded-sm items-center mb-2">
      <div className="flex items-center gap-2 w-[500px]">
        <img src={logo} className="w-12" alt="Logo" />
        <h1 className="text-2xl">My Ecommerce</h1>
      </div>
      <div className="flex gap-4 md:gap-12">
        <div className="flex gap-4 mt-1">
          <Badge color="success" content={5}>
            <Link to="/cartlist">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="fa-2xl text-blue-400"
              />
            </Link>
          </Badge>

          <Badge color="success" content={5} variant="shadow">
            <Link to="/cartlist">
              <FontAwesomeIcon icon={faHeart} className="fa-2xl text-red-800" />
            </Link>
          </Badge>
        </div>
        <MyDropDown />
      </div>
    </header>
  );
}
