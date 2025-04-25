import { Button, Card, Form, Input } from "@heroui/react";
import React from "react";

export default function Register() {

  const validate =(formdata)=>{
    let errorData = {}
    if(formdata.password !== formdata.confirmPassword){
      errorData['confirmPassword'] = 'Password is not matching'
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const newData = Object.fromEntries(new  FormData(e.currentTarget))
    const errorData = validate(newData)
    console.log(newData)
  }
  return (
    <div className="min-h-[80vh] flex items-center">
      <Card className="w-[500px] mx-auto">
        <Form action="#" className="flex flex-col gap-4 shadow-md rad px-4 py-8" onSubmit={(e)=>handleSubmit(e)}>
          <p className="text-xl font-bold mb-4 self-center">User Registration</p>
          <Input name="fullName" label="Full Name" placeholder="Enter your Name" type="text" />
          <Input name="username" label="username" placeholder="Enter your username" type="text" />
          <Input name="password" label="password" placeholder="Enter your Password" type="password" />
          <Input name="confirmPassword" label="password" placeholder="Confirm Password" type="password" />
          <Button variant="bordered" color="success" className="mt-6 self-center" type="submit">
            Register
          </Button>
        </Form>
      </Card>
    </div>
  );
}
