import { Pagination } from "@heroui/react";
import React from "react";

export default function MyPagination({ total, setPage }) {
  return (
    <Pagination
      showControls
      showShadow
      color="warning"
      variant="bordered"
      initialPage={1}
      total={total}
      onChange={(e)=>setPage(e)}
      className="mx-auto"
    />
  );
}
