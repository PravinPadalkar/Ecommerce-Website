import React from "react";
import { Input } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function SearchInput({setSearchQuery}) {
  return (
    <Input
      aria-label="search"
      type="search"
      size="md"
      placeholder="Search Product By Title"
      onValueChange={(text)=>setSearchQuery(text)}
      endContent={<FontAwesomeIcon className="fa-lg" icon={faSearch}></FontAwesomeIcon>}
    />
  );
}
