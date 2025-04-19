import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@heroui/table";
import { Button, Image } from "@heroui/react";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function CartList({cartList=[]}) {
  return (
    <div className="max-w-[1000px] mx-auto">
      <p className="text-2xl font-bold  text-custom my-4 bg-custom-400">CartList</p>
      <Table
      className="table-fixed  "
      color="success"
      aria-label="CartList Table"
    >
      <TableHeader>
        <TableColumn className="w-1/12 text-lg  text-gray-800 ">Id</TableColumn>
        <TableColumn className="w-1/12 text-lg text-gray-800">Image</TableColumn>
        <TableColumn className="w-1/2  text-lg text-gray-800">Title</TableColumn>
        <TableColumn className="w-2/12 text-lg text-gray-800">Price</TableColumn>
        <TableColumn className="w-1/12 text-lg text-gray-800">Quantity</TableColumn>
        <TableColumn className="w-1/12 text-lg text-gray-800">Total</TableColumn>
        <TableColumn className="w-1/6 text-lg text-gray-800">Action</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No Data to Show"}>
        {cartList.map(({ id, title, image, price, quantity = 1 }) => (
          <TableRow key={id}>
            <TableCell>{id}</TableCell>
            <TableCell>
              <Image radius="none" src={image} className=" w-full h-24 object-contain p-2" />
            </TableCell>
            <TableCell>{title}</TableCell>
            <TableCell>₹{price}</TableCell>
            <TableCell>
              <div className="flex justify-between items-center gap-2">
                <Button isIconOnly size="sm" radius="md" variant="flat">
                  <FontAwesomeIcon icon={faMinus} className="fa-lg  cursor-pointer" />
                </Button>
                <p className="text-lg">{quantity}</p>
                <Button isIconOnly size="sm" radius="md" variant="flat">
                  <FontAwesomeIcon icon={faPlus} className="fa-lg  cursor-pointer" />
                </Button>
              </div>
            </TableCell>
            <TableCell className="text-center">Total</TableCell>
            <TableCell>
              <div className="flex h-full items-center justify-center ">
                <Button isIconOnly size="sm" radius="md" aria-label="Like" color="danger">
                  <FontAwesomeIcon icon={faTrash} className="fa-lg " />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
        { cartList && <TableRow>
          <TableCell  colSpan={7} className=" text-right font-bold text-lg">
            Grand Total: ₹5600
          </TableCell>
        </TableRow>}
      </TableBody>
    </Table>
    </div>
  );
}
