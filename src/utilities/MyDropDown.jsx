import React, { useContext, useEffect, useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, User } from "@heroui/react";
import { useNavigate } from "react-router";
import { UsersListContext } from "../contexts/UsersListContext";

export default function MyDropDown() {
  const { isAuthenticated, setIsAuthenticated ,userDetails } = useContext(UsersListContext);
  const navigate = useNavigate();
  return isAuthenticated ? (
    <Dropdown offset={16} radius="xs">
      <DropdownTrigger>
        <User
          as="button"
          avatarProps={{
            isBordered: true,
          }}
          className="transition-transform"
          description={userDetails.username}
          name={userDetails.fullName}
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
          onPress={() => {
            setIsAuthenticated(false);
            navigate('/login')
          }}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ) : (
    <Button variant="bordered" onPress={() => navigate("/login")}>
      Login
    </Button>
  );
}
