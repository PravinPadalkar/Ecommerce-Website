import { Button, Card, Form, Input } from "@heroui/react";
import React from "react";
import { Link } from "react-router";

export default function Login(props) {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center mx-4">
      {/* <h1 className="text-2xl text-center ">Please Login</h1> */}
      <Card className="w-[500px] mx-auto">
        <Form action="#" className="flex flex-col gap-4 shadow-md rad px-4 py-8">
          <p className="text-xl font-bold mb-4 self-center">User Login</p>
          <Input label="username" placeholder="Enter your username" type="text" />
          <Input label="password" placeholder="Enter your Password" type="password" />
          <Button variant="bordered" color="success" className="mt-2 self-center">Login</Button>
          <div className="flex self-center gap-1 text-sm">
            <p className="text-center">Don't Have Account? </p><Link to="/register" className="text-fuchsia-800">Register</Link>
          </div>
        </Form>
      </Card>
    </section>
  );
}
