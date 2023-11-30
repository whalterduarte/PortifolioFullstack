import React, { useState } from 'react'
import Navbar from './_components/navbar'
import { ModeToggle } from './_components/mode-toggle'
import Intro from './_components/introSec'
import About from './_components/aboutSec'
import MySkills from './_components/myskills'
import Portifolio from './_components/portifolio'
import Contact from './_components/contact'



export default function Home() {
  return (
    <main className="">
      <div className='absolute z-10'>
      <Navbar />
      <ModeToggle />
      </div>
      <Intro/>
      <About/>
      <MySkills/>
      <Portifolio/>
      <Contact/>
    </main>
  );
}
