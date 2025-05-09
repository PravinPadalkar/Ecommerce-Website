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
    addToast({
      title: `Item with id: ${id} Deleted succefully!!`,
      color: "danger",
    });
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
      color: "success",
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
      <div className="hidden md:block">
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
      {cartList.length === 0 ? (
        <div className="block md:hidden text-center ">CartList Is Empty</div>
      ) : (
        <div className="block max-w-[400px] mx-auto md:hidden space-y-4">
          {cartList.map(({ id, title, imageUrl, price, quantity = 1 }) => (
            <div key={id} className="border rounded-lg p-4 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">{title}</h3>
              </div>
              <div className="flex  justify-center ">
                <Image src={imageUrl} radius="none" className="w-full  h-48 object-contain  mb-4" />
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Quantity:</span>

                <div className="flex gap-2 items-center">
                  <Button
                    isIconOnly
                    size="sm"
                    radius="md"
                    variant="flat"
                    isDisabled={quantity <= 1}
                    onPress={() => handleDecreaseQuantity(id)}
                  >
                    <FontAwesomeIcon icon={faMinus} className="fa-lg" />
                  </Button>
                  <p>{quantity}</p>
                  <Button
                    isIconOnly
                    size="sm"
                    radius="md"
                    variant="flat"
                    onPress={() => handleIncreaseQuantity(id)}
                  >
                    <FontAwesomeIcon icon={faPlus} className="fa-lg" />
                  </Button>
                </div>
              </div>
              <p className="text-green-600 font-semibold">Price:₹{price}</p>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Total:</span>
                <p className="font-bold">₹{Math.round(quantity * price * 100) / 100}</p>
              </div>
              <div className="flex justify-end">
                <Button
                  isIconOnly
                  size="sm"
                  radius="md"
                  aria-label="Delete"
                  color="danger"
                  onPress={() => handleDelete(id)}
                >
                  <FontAwesomeIcon icon={faTrash} className="fa-lg" />
                </Button>
              </div>
            </div>
          ))}
          {cartList.length > 0 && (
            <div className="border rounded-lg p-4 shadow-md text-right space-y-4">
              <p className="font-bold text-lg">Grand Total: ₹{grandTotal}</p>
              <Button color="success" variant="shadow" onPress={handleOrderSubmit}>
                Order Now
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
