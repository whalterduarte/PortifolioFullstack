
import React from 'react'
import { ModeToggle } from '../_components/mode-toggle'
import Navbar from '../_components/navbar'
import Link from 'next/link'

const page = () => {
  return (
    <main className="">
    <div className='absolute z-10'>
    <ModeToggle />
    </div>
    <div className='fixed top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-4 font-bold'>
        <Link href={'/'}>Portfolio</Link>
      </div>


    <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Blog</h1>
    </div>
    </main>
  )
}

export default page
