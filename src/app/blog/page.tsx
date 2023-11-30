
import React from 'react'
import { ModeToggle } from '../_components/mode-toggle'
import Navbar from '../_components/navbar'

const page = () => {
  return (
    <main className="">
    <div className='absolute z-10'>
    <Navbar />
    <ModeToggle />
    </div>

    <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Blog</h1>
    </div>
    </main>
  )
}

export default page
