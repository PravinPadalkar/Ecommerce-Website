import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Image } from "@heroui/react";
import img from "/profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

export default function ProductCard() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <Image src={img} alt="ProductImg" radius="lg" />
        <FontAwesomeIcon
          icon={isLiked ? solidHeart : regularHeart}
          onClick={()=>setIsLiked(!isLiked)}
          className="fa-xl absolute top-4 right-4 z-10 cursor-pointer"
        />
      </CardHeader>
      <CardBody>body</CardBody>
      <CardFooter>footer</CardFooter>
    </Card>
  );
}
