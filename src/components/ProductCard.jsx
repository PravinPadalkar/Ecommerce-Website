import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
export default function ProductCard() {
  return (
    <Card className="max-w-[300px]">
      <CardHeader>header</CardHeader>
      <CardBody>body</CardBody>
      <CardFooter>footer</CardFooter>
    </Card>
  );
}
