import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, User } from "@heroui/react";
import { useNavigate } from "react-router";

export default function MyDropDown() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  return isLoggedIn ? (
    <Dropdown offset={16} radius="sm">
      <DropdownTrigger>
        <User
          as="button"
          avatarProps={{
            isBordered: true,
          }}
          className="transition-transform"
          description="@pravinpadalkar"
          name="Pravin Padalkar"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          key="new"
          color="success"
          textValue="order"
          onPress={() => navigate("/orderhistory")}
        >
          Order Histroy
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          onPress={() => setIsLoggedIn(false)}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ) : (
    <Button variant="bordered" onPress={() => navigate('/login')}>
      Login
    </Button>
  );
}
