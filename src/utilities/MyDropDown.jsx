import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  User,
} from "@heroui/react";
import { Link } from "react-router";
import profileJpeg from '/profile.jpeg'
export default function MyDropDown() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return isLoggedIn ? (
    <Dropdown offset={16} radius="sm">
      <DropdownTrigger>
        <User
          as="button"
          
          avatarProps={{
            isBordered: true,
            src: profileJpeg,
          }}
          className="transition-transform"
          description="@pravinpadalkar"
          name="Pravin Padalkar"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new" color="primary">Order Histroy</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger" onPress={()=>setIsLoggedIn(false)}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ) : (
    <Button variant="bordered" onPress={() => setIsLoggedIn(true)}>
      Login
    </Button>
  );
}
