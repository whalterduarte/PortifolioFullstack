'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './category.module.css'
import { format } from 'date-fns'
import NavbarBlog from '../_components/navbar'
import Footer from '@/app/_components/footer'


type Props = {
  params: {
    catSlug: string
  }
}
type Category = {
  id: number;
  slug: string;
  content: string;
  title: string;
  date: Date;
  author: string;
}

const Category = ({params}:Props) => {
  const [category, setCategory] = useState<Category[]>([]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`https://www.api.whalter.com.br/blog/posts/${params.catSlug}`)
        if (response.data && response.data.posts) {
          setCategory(response.data.posts)
          console.log(response.data.posts)
        } else {
          console.error('Response data or Category array is not defined:', response.data)
        }
      } catch (error) {
        console.error('Error fetching :', error)
      }
    }

    fetchCategory()
  }, [params.catSlug])

  return (
    <div className='mb-10'>
         <div className={styles.fix}>
          <div className={styles.catLink}>
          <div className={styles.link}><Link  href={'/blog/tech'}> Tech</Link></div>
          <div className={styles.link}><Link  href={'/blog/coffees'}> Coffees</Link></div>
          <div className={styles.link}><Link  href={'/blog/code'}> Code</Link></div>
          <div className={styles.link}><Link  href={'/blog/posts'}> All Posts</Link></div>
         </div>
    </div>
      <div className={styles.header}>
        <h1 className='text-4xl font-bold text-center my-4'>Category {params.catSlug}</h1>
      </div>
      <NavbarBlog/>
      
      <div className={styles.main}>
      <div></div>
            {category.map((posts)=>(
              
              <div  key={posts.id}>
               
                <div className={styles.title}>{posts.title}</div>
                <div className={styles.content}>{posts.content}</div>
                <div className={styles.authorDateArea}>
                  <div className={styles.dateAuthor}><p><span>Author:</span> {posts.author}</p></div>
                  <div className={styles.dateAuthor}><p><span>Date:</span> {format(new Date(posts.date), 'dd/MM/yyyy HH:mm:ss')}</p></div>
                </div>
                <div className={styles.postsLink}><Link className={styles.links}  href={`/blog/${params.catSlug}/${posts.slug}`}>View post . . .</Link></div>

              <br />
              <hr />
              </div>
              
            ))}
         
          </div>
          <Footer/>
    </div>
  )
}

export default Category
