'use client'
import Footer from '@/app/_components/footer'
import React, { useEffect, useState } from 'react'
import Category from '../_components/category'
import { ModeToggle } from '@/app/_components/mode-toggle'
import NavbarBlog from '../_components/navbar'
import styles from './moduleCss/allposts.module.css'
import axios from 'axios'
import { format } from 'date-fns'
import Link from 'next/link'

type Coffee = {
  id: number;
  slug: string;
  content: string;
  title: string;
  date: Date;
  author: string;
}

const AllPosts: React.FC = () => {
  const [allPosts, setAllPosts] = useState<Coffee[]>([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await axios.get(`${process.env.BASEAPI}/blog/posts`)
        if (response.data && response.data.posts) {
          setAllPosts(response.data.posts)
        } else {
          console.error('Response data or AllPosts array is not defined:', response.data)
        }
      } catch (error) {
        console.error('Error fetching AllPosts:', error)
      }
    }

    fetchAllPosts()
  }, [])

  return (
    <div>
       <div className='absolute z-10'>
      <ModeToggle />
      </div>
      <NavbarBlog/>
      <Category/>
            <h1 className="text-4xl font-bold text-center" >All Posts</h1>
        <div className={styles.container}>
        
          <div className={styles.main}>
            
            {allPosts.map((posts)=>(
              <div  key={posts.id}>
               
                <div className={styles.title}>{posts.title}</div>
                <div className={styles.content}>{posts.content}</div>
                <div className={styles.authorDateArea}>
                  <div className={styles.dateAuthor}><p><span>Author:</span> {posts.author}</p></div>
                  <div className={styles.dateAuthor}><p><span>Date:</span> {format(new Date(posts.date), 'dd/MM/yyyy HH:mm:ss')}</p></div>
                </div>
                <div className={styles.postsLink}><Link className={styles.link}  href={`/blog/posts/${posts.slug}`}>View post . . .</Link></div>

              <br />
              <hr />
              </div>
              
            ))}
            
          </div>
          
        </div>
      <Footer/>
    </div>
  )
}

export default AllPosts
