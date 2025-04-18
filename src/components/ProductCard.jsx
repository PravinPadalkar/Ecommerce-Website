import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Divider,
  Button,
} from "@heroui/react";
import img from "/profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

export default function ProductCard({id,imageUrl, title, category,price,rating}) {
  const [isLiked, setIsLiked] = useState(false);
  console.log(imageUrl)

  return (
    <Card shadow="sm" radius="md">
      <CardHeader className="h-[200px] justify-center">
        <Image className="h-[170px] object-fill"  src={imageUrl} alt="ProductImg" radius="lg" />
        <FontAwesomeIcon
          icon={isLiked ? solidHeart : regularHeart}
          onClick={() => setIsLiked(!isLiked)}
          className="fa-xl absolute top-4 right-4 z-10 cursor-pointer text-green-800"
        />
      </CardHeader>
      <Divider />
      <CardBody className="flex justify-between">
        <h3 className=" font-bold text-lg">
          {title}
        </h3>
        <span className="inline text-lg my-2">{category}</span>
        <div className="flex justify-between opacity-90">
          <p>Rating: ⭐⭐⭐⭐</p>
          <Divider orientation="vertical" />
          <p>Price: ${price}</p>
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex justify-between w-full gap-2 mb-2">
          <Button className="text-sm px-4" size="sm" v color="success" radius="sm" >Add To Cart<FontAwesomeIcon className="fa-xl" icon={faCartShopping}></FontAwesomeIcon></Button>
          <Button className="text-sm px-4" variant="bordered" size="sm" color="default" radius="sm" >Add To WishList</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
