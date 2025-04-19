import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@heroui/table";
import { Button, Image } from "@heroui/react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOutletContext } from "react-router";

export default function WishList() {
  const states = useOutletContext();  
  const [wishList,setWishList] = states.wishState;
  return (
    <div className="max-w-[1000px] mx-auto">
      <p className="text-2xl font-bold  text-custom my-4 bg-custom-400">WishList</p>
      <Table className="table-fixed " color="success" aria-label="CartList Table">
        <TableHeader>
          <TableColumn className=" w-1/12 text-lg  text-gray-800 ">Id</TableColumn>
          <TableColumn className="w-1/6 text-lg text-gray-800">Image</TableColumn>
          <TableColumn className="w-1/2 text-lg text-gray-800">Title</TableColumn>
          <TableColumn className="w-2/12 text-lg text-gray-800">Price</TableColumn>
          <TableColumn className="w-1/12 text-center text-lg text-gray-800">Action</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No Data to Show"}>
          {wishList.map(({ id, title, image, price, quantity = 1 }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>
                <Image radius="none" src={image} className=" w-full h-24 object-contain p-2" />
              </TableCell>
              <TableCell>{title}</TableCell>
              <TableCell>₹{price}</TableCell>

              <TableCell>
                <div className="flex h-full items-center justify-center ">
                  <Button isIconOnly size="sm" radius="md" aria-label="Like" color="danger">
                    <FontAwesomeIcon icon={faTrash} className="fa-lg " />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
