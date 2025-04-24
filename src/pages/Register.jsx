import { Button, Card, Form, Input } from "@heroui/react";
import React from "react";
import { Link } from "react-router";

export default function Register() {
  return (
    <div className="min-h-[80vh] flex items-center">
      <Card className="w-[500px] mx-auto">
        <Form action="#" className="flex flex-col gap-4 shadow-md rad px-4 py-8">
          <p className="text-xl font-bold mb-4 self-center">User Registration</p>
          <Input label="Full Name" placeholder="Enter your Name" type="text" />
          <Input label="username" placeholder="Enter your username" type="text" />
          <Input label="password" placeholder="Enter your Password" type="password" />
          <Input label="password" placeholder="Confirm Password" type="password" />
          <Button variant="bordered" color="success" className="mt-6 self-center">
            Register
          </Button>
        </Form>
      </Card>
    </div>
  );
}
