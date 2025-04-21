import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import CartList from "./pages/CartList";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import WishList from "./pages/WishList";
import Hero from "./pages/Hero";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Hero/>}/>
          <Route path="productlist" element={<ProductList/>}/>
          <Route path="cartlist" element={<CartList />} />
          <Route path="wishlist" element={<WishList />} />
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
