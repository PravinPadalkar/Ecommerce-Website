import { Pagination } from "@heroui/react";
import React from "react";

export default function MyPagination({ total, page, setPage }) {
    console.log(page)
  return (
    <Pagination
      showControls
      showShadow
      color="warning"
      variant="bordered"
      initialPage={page}
      total={total}
      onChange={(e)=>setPage(e)}
    />
  );
}
