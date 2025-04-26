import { addToast, Button, Card, Form, Input } from "@heroui/react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { UsersListContext } from "../contexts/UsersListContext";

export default function Login(props) {
  const navigate = useNavigate();
  const { usersList,setIsAuthenticated,setUserDetails} = useContext(UsersListContext);
  const validateUser = (username, password) => {
    const existingUser = usersList.find((user) => user.username == username);
    if (existingUser) {
      if (existingUser.password == password) {
        setIsAuthenticated(true);
        setUserDetails(existingUser)
        navigate("/");
        addToast({
          title: "Login Successful!!",
          description: `Welcome ${existingUser.fullName}`,
          color: "success",
        });
      }
      else{
        addToast({
          title: "Invalid Password!!",
          description: `Please Try Again`,
          color: "Warning",
        });
      }
    }
    else{
      addToast({
        title: "Invalid Credentials!!",
        description: `Please Try Again`,
        color: "Warning",
      })
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    const { username, password } = Object.fromEntries(new FormData(e.currentTarget));
    console.log(username, password);
    const result = validateUser(username, password);
  };
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center mx-4">
      {/* <h1 className="text-2xl text-center ">Please Login</h1> */}
      <Card className="w-[300px] md:w-[500px] mx-auto">
        <Form
          action="#"
          className="flex flex-col gap-4 shadow-md rad px-4 py-8"
          onSubmit={(e) => handleSubmit(e)}
        >
          <p className="text-xl font-bold mb-4 self-center">User Login</p>
          <Input label="username" name="username" placeholder="Enter your username" type="text" />
          <Input
            label="password"
            name="password"
            placeholder="Enter your Password"
            type="password"
          />
          <Button variant="bordered" color="success" className="mt-2 self-center" type="submit">
            Login
          </Button>
          <div className="flex self-center gap-1 text-sm">
            <p className="text-center">Don't Have Account? </p>
            <Link to="/register" className="text-fuchsia-800">
              Register
            </Link>
          </div>
        </Form>
      </Card>
    </section>
  );
}
