import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Divider,
  Button,
  addToast,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { useNavigate, useOutletContext } from "react-router";
import useStars from "../hooks/useStars";

export default function ProductCard({ id, imageUrl, title, category, price, rating }) {
  const navigate = useNavigate()
  const states = useOutletContext();
  const [, setWishList] = states.wishState;
  const [cartList, setCartList] = states.cartState;
  const [isLiked, setIsLiked] = useState(false);
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
  const handleAddToWish = (id, imageUrl, title, price) => {
    setWishList((prevState) => {
      const existingItem = prevState.find((item) => item.id == id);
      if (!existingItem) {
        setTimeout(() => {
          setIsLiked(true);
          addToast({
            title: "Added To Wish!!",
            description: `Product with ID : ${id} Added To WishList`,
            color: "success",
          });
        }, 0);

        return [...prevState, { id, imageUrl, title, price }];
      } else {
        setTimeout(
          () =>
            addToast({
              title: "Item Already Present",
              description: `Product with ID : ${id} Already Available To WishList`,
              color: "danger",
            }),
          0
        );
        return prevState;
      }
    });
  };
  return (
    <Card shadow="sm" radius="md">
      <CardHeader className="h-[200px] justify-center">
        <Image className="h-[170px] object-fill" src={imageUrl} alt="ProductImg" radius="lg" />
        <FontAwesomeIcon
          icon={isLiked ? solidHeart : regularHeart}
          onClick={() => handleAddToWish(id, imageUrl, title, price)}
          className="fa-xl absolute top-4 right-4 z-10 cursor-pointer text-green-600"
        />
      </CardHeader>
      <Divider />
      <CardBody className="flex justify-between">
        <h3 className=" font-bold text-lg">{title}</h3>
        <span className="inline text-lg my-2">{category}</span>
        <div className="flex justify-between opacity-90">
          <p>Rating: {useStars(rating)}</p>
          <Divider orientation="vertical" />
          <p>Price: ${price}</p>
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex justify-between w-full gap-2 mb-2">
          <Button
            className="text-sm px-4"
            size="sm"
            v
            color="success"
            radius="sm"
            onPress={() => handleAddToCart(id, imageUrl, title, category, price, rating)}
          >
            Add To Cart<FontAwesomeIcon className="fa-lg" icon={faCartShopping}></FontAwesomeIcon>
          </Button>
          <Button
            className="text-sm px-4"
            variant="bordered"
            size="sm"
            color="default"
            radius="sm"
            onPress={() =>navigate(`/product/${id}`) }
          >
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
