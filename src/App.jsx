import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import Home from "./pages/Home";
import CartList from "./pages/CartList";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<ProductList/>}/>
          <Route path="cartlist" element={<CartList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
