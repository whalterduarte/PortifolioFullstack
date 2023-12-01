import Login from '@/app/_components/login'
import { ModeToggle } from '@/app/_components/mode-toggle'
import Navbar from '@/app/_components/navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='absolute z-10'>
    <ModeToggle />
    </div>
    <Login/> 
    </>
  )
}

export default page
