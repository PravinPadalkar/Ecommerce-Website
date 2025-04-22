import { faHistory } from "@fortawesome/free-solid-svg-icons/faHistory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@heroui/table";
export default function OrderHistory() {
    const orderHistoryList = [{
        orderId :1,
        orderDate : '22-04-2025',
        paymentMode : 'UPI',
        noOfItems:4,
        grandTotal: 500

    },
    {
        orderId :2,
        orderDate : '22-04-2025',
        paymentMode : 'UPI',
        noOfItems:4,
        grandTotal: 500

    },{
        orderId :3,
        orderDate : '22-04-2025',
        paymentMode : 'UPI',
        noOfItems:4,
        grandTotal: 500

    }]
  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <p className="text-2xl font-bold  text-custom my-4 bg-custom-400">Order History</p>
        <FontAwesomeIcon icon={faHistory} className="text-xl"></FontAwesomeIcon>
      </div>
      <Table isStriped  aria-label="Order History Table">
        <TableHeader  className="text-xl">
            <TableColumn className="text-md text-black opacity-80 bg-green-400 text-center">ID</TableColumn>
            <TableColumn className="text-md text-black opacity-80 bg-green-400 text-center">Date</TableColumn>
            <TableColumn className="text-md text-black opacity-80 bg-green-400 text-center">Payment Mode</TableColumn>    
            <TableColumn className="text-md text-black opacity-80 bg-green-400 text-center">No Of Items</TableColumn>
            <TableColumn className="text-md text-black opacity-80 bg-green-400 text-center">Grand Total</TableColumn>
        </TableHeader>
        <TableBody>
            {
                orderHistoryList.map(({orderId,orderDate,paymentMode,noOfItems,grandTotal})=>(
                    <TableRow>
                        <TableCell className="text-center">{orderId}</TableCell>
                        <TableCell className="text-center">{orderDate}</TableCell>
                        <TableCell className="text-center">{paymentMode}</TableCell>
                        <TableCell  className="text-center">{noOfItems}</TableCell>
                        <TableCell className="text-center">₹{grandTotal}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </div>
  );
}
