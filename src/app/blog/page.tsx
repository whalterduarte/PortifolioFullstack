
import React from 'react'
import { ModeToggle } from '../_components/mode-toggle'
import Navbar from '../_components/navbar'
import Link from 'next/link'
import styles from './_components/moduleCss/blog.module.css'
import Latest from './_components/latest'
import NavbarBlog from './_components/navbar'
import Footer from '../_components/footer'
import Tech from './_components/tech'
import Category from './_components/category'
import Coffee from './_components/coffee'

const page = () => {
  return (
    <main className={styles.container}>
    <div className='absolute z-10'>
    <ModeToggle />
    </div>
   
    <NavbarBlog/>
    <Latest/>
    <Tech/>
    <Category/>
    <Coffee/>
    <Footer/>
    </main>
  )
}

export default page
