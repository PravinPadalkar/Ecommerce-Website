import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@heroui/table";
import { Button, Image } from "@heroui/react";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOutletContext } from "react-router";
import { useEffect, useState } from "react";
import { addToast } from "@heroui/react";
export default function CartList() {
  const states = useOutletContext();
  const [cartList, setCartList] = states.cartState;
  const [orderHistoryList, setOrderHistoryList] = states.orderHistroyState;
  const [grandTotal, setGrandTotal] = useState(0);

  const handleDelete = (id) => {
    setCartList((prevState) => prevState.filter((item) => item.id !== id));
  };
  const handleOrderSubmit = () => {
    let newOrder = {
      orderId: orderHistoryList.length + 1,
      orderDate: new Date(),
      noOfItems: cartList.reduce((acc, { quantity }) => acc + quantity, 0),
      paymentMode: "UPI",
      grandTotal: grandTotal,
    };
    setOrderHistoryList((prevState) => [...prevState, newOrder]);
    setCartList([]);
    addToast({
      title: "Congratulations!!",
      description: "Your Order Placed Succefully",
      color:'success'
    });
  };
  const handleDecreaseQuantity = (id) => {
    setCartList((prevState) => {
      return prevState.map((item) => {
        if (item.id == id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };
  const handleIncreaseQuantity = (id) => {
    setCartList((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };
  useEffect(() => {
    setGrandTotal(
      () =>
        Math.round(cartList.reduce((acc, { price, quantity }) => acc + price * quantity, 0) * 100) /
        100
    );
  }, [cartList]);
  return (
    <div className="max-w-[1000px] mx-auto">
      <p className="text-2xl font-bold  text-custom my-4 bg-custom-400">CartList</p>
      <Table className="table-fixed  " color="success" aria-label="CartList Table">
        <TableHeader>
          <TableColumn className="w-1/12 text-lg  text-gray-800 ">Id</TableColumn>
          <TableColumn className="w-1/12 text-lg text-gray-800">Image</TableColumn>
          <TableColumn className="w-1/2  text-lg text-gray-800">Title</TableColumn>
          <TableColumn className="w-2/12 text-lg text-gray-800">Price</TableColumn>
          <TableColumn className="w-1/12 text-lg text-center text-gray-800">Quantity</TableColumn>
          <TableColumn className="w-1/12 text-lg text-center text-gray-800">Total</TableColumn>
          <TableColumn className="w-1/6 text-lg text-gray-800">Action</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No Data to Show"}>
          {cartList.map(({ id, title, imageUrl, price, quantity = 1 }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>
                <Image radius="none" src={imageUrl} className=" w-full h-24 object-contain p-2" />
              </TableCell>
              <TableCell>{title}</TableCell>
              <TableCell>₹{price}</TableCell>
              <TableCell>
                <div className="flex justify-between items-center gap-2">
                  <Button
                    isIconOnly
                    size="sm"
                    radius="md"
                    variant="flat"
                    isDisabled={quantity <= 1}
                    onPress={() => handleDecreaseQuantity(id)}
                  >
                    <FontAwesomeIcon icon={faMinus} className="fa-lg  cursor-pointer" />
                  </Button>
                  <p className="text-md">{quantity}</p>
                  <Button
                    isIconOnly
                    size="sm"
                    radius="md"
                    variant="flat"
                    onPress={() => handleIncreaseQuantity(id)}
                  >
                    <FontAwesomeIcon icon={faPlus} className="fa-lg  cursor-pointer" />
                  </Button>
                </div>
              </TableCell>
              <TableCell className="text-center">
                ₹{Math.round(quantity * price * 100) / 100}
              </TableCell>
              <TableCell>
                <div className="flex h-full items-center justify-center ">
                  <Button
                    isIconOnly
                    size="sm"
                    radius="md"
                    aria-label="Like"
                    color="danger"
                    onPress={() => handleDelete(id)}
                  >
                    <FontAwesomeIcon icon={faTrash} className="fa-lg " />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
          {cartList.length && (
            <TableRow>
              <TableCell colSpan={6} className=" text-right font-bold text-lg">
                Grand Total: ₹{grandTotal}
              </TableCell>
              <TableCell className=" text-right font-bold text-lg">
                <Button color="success" variant="shadow" onPress={() => handleOrderSubmit()}>
                  Order Now
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
