import { addToast, Button, Image } from "@heroui/react";
import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router";
import useStars from "../hooks/useStars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function ProductDetails() {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const states = useOutletContext();
  const [cartList, setCartList] = states.cartState;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  const handleAddToCart = (id, imageUrl, title, category, price, rating) => {
    setCartList((prevState) => {
      const existingItem = prevState.find((ele) => ele.id == id);
      if (existingItem) {
        return cartList.map((item) => {
          if (existingItem.id == item.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }
      return [...prevState, { id, imageUrl, title, category, price, rating, quantity: 1 }];
    });
    addToast({
      title: "Added To Cart!!",
      description: `Product with ID : ${id} Added To Cart`,
      color: "success",
    });
  };
  return (
    <div className="mx-4">
      <h1 className="text-2xl font-bold  text-custom my-4  bg-custom-400 mb-8">Product Details</h1>
      <div
        shadow="sm"
        radius="md"
        className="flex flex-col md:flex-row gap-8 shadow-md py-4 pb-10 px-4"
      >
        <div className="h-[300px] flex justify-center  flex-1  ">
          <Image
            className="h-[300px] justify-center object-fill"
            src={productData.image}
            alt="ProductImg"
            radius="lg"
          />
        </div>
        <div className="flex flex-col justify-between  flex-1">
          <h3 className=" font-bold text-lg">Title: {productData.title}</h3>
          <h3 className="  text-lg">
            <b>Description:</b> {productData.description}
          </h3>
          <span className="inline text-lg my-2">
            <b>Category :</b> {productData.category}
          </span>
          <div className="flex justify-start gap-8 opacity-90">
            <p>
              <b>Rating :</b>
              {useStars(productData.rating?.rate)}
            </p>
            <p>
              <b>Price: </b>${productData.price}
            </p>
          </div>
          <div className="flex justify-start  gap-4 mt-4">
            <Button
              className="text-sm px-4"
              size="sm"
              v
              color="success"
              radius="sm"
              onPress={() => handleAddToCart(id, productData.image, productData.title, productData.category, productData.price, productData.rating)}
            >
              Add To Cart<FontAwesomeIcon className="fa-lg" icon={faCartShopping}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
