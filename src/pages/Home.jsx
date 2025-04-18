import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'

export default function Home() {
  return (
    <div  className='max-w-[1300px] mx-2  xl:mx-auto font-roboto  '>
        <Header/>
        <Outlet/>
    </div>
  )
}
