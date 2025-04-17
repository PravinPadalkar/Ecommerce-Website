import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'

export default function Home() {
  return (
    <div className='max-w-[1200px] mx-auto'>
        <Header/>
        <Outlet/>
    </div>
  )
}
