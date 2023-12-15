import Login from '@/app/_components/login'
import { ModeToggle } from '@/app/_components/mode-toggle'
import Navbar from '@/app/_components/navbar'
import React from 'react'
import NavbarBlog from '../_components/navbar'

const page = () => {
  return (
    <>
    <NavbarBlog/>
    <div className='absolute z-10'>
    <ModeToggle />
    </div>
    <Login/> 
    </>
  )
}

export default page
