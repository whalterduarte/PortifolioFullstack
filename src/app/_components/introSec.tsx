'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const Intro = () => {
  return (
    <section id='intro' className='space-y-6 py-8 md:py-12 lg:py-32 relative '>

    
    <svg
  viewBox='0 0 1024 1024'
  className='absolute left-1/3 top-full

  sm:h-[46rem] sm:w-[46rem] sm:left-1/4 sm:-ml-80
  md:left-1/2 md:top-1/2 -z-10 
  md:h-[46rem] md:w-[46rem] 
  -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]  
  lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'

  aria-hidden='true'
>
  <circle
    cx='512'
    cy='512'
    r='512'
    fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
    fillOpacity='0.7'
  />
  <defs>
    <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
      <stop stopColor='#7775D6' />
      <stop offset='1' stopColor='#E935C1' />
    </radialGradient>
  </defs>
</svg>
 


    <div className='md:static container flex max-w-[64rem] flex-col items-center text-center gap-4'>
        <h2 className='text-3xl'>Hello, I’m</h2>
      <h1 className='font-heading text-4xl md:text-6xl lg:text-7xl'>
        Whalter <span className='text-primary'>D</span>uarte
        <br />
       <span className='text-3xl text-primary'>Software engineer Full-Stack</span>
      </h1>
      <p className='max-w-[42ren] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
        I specialize in crafting dynamic and efficient applications using cutting-edge
        technologies such as <span className='text-primary font-bold'>React and Node.js.</span> My proficiency extends to creating applications 
        ranging from <span className='text-primary font-bold'>Web to Mobile</span>, where I adeptly develop everything from <span className='text-primary font-bold'>RESTful APIs</span> to dynamic 
        pages using <span className='text-primary font-bold'>React and React Native.</span> 
        My expertise also encompasses modern architectural patterns such as <span className='text-primary font-bold'>MVC (Model-View-Controller)</span> 
        , <span className='text-primary font-bold'>OO (Object-Oriented)</span> principles, and <span className='text-primary font-bold'>OOP 
        (Object-Oriented Programming).</span> With a commitment to innovation and staying current
        with industry trends, my main skills are these but they are not limited to, I bring a comprehensive skill set to every project.
      </p>
      <div className='space-x-4'>
        <a className='bg-primary py-2 px-4 text-md text-white rounded shadow-lg font-bold' 
        target="_blank"
        rel="noopener noreferrer"
        href="https://whalter.com.br/WhalterDEV.pdf">Curriculum vitae</a>
        <a className={cn(buttonVariants({variant: 'outline', size:'lg'}))} 
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/whalterduarte">GitHub</a>
      </div>
    </div>
    
  </section>
  )
}

export default Intro
