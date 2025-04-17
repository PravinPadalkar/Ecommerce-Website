import { Button } from '@heroui/react'
import React from 'react'
import { useLocation, useNavigation, useParams } from 'react-router'
import { Link } from 'react-router'

export default function Login(props) {
  const x= useLocation()
  console.log(x)

  return (
    <div className='text-2xl text-center'>Please Login
    </div>
  )
}
