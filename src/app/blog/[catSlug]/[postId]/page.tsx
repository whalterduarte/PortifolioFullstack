'use client'
import React, { useEffect, useState } from 'react'
import styles from './moduleCss/home.module.css'
import Footer from '@/app/_components/footer'
import NavbarBlog from '../../_components/navbar'
import Link from 'next/link'
import axios from 'axios'
import Image from 'next/image'
import RenderHTMLContent from '@/app/_components/RenderHTMLContent'

type Props = {
  body: string | null;
  params: {
    catSlug: string;
    postId: string;
  };
};

type Post = {
  id: number;
  slug: string;
  content: string;
  body: string;
  title: string;
  date: Date;
  author: string;
  url: string;
};

const Postpage = ({ params, body }: Props) => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://api-whalter.vercel.app/blog/posts/${params.catSlug}/${params.postId}`); 
        if (response.data && response.data.post) {
          setPost(response.data.post);
        } else {
          console.error('Response data or Post object is not defined:', response.data); 
        }
      } catch (error) {
        console.error('Error fetching post:', error)
      }
    };
  
    fetchPost();
  }, [params.catSlug, params.postId])


  return (
    <main >
      <div className={styles.container}>
        <NavbarBlog/>
        <div className={styles.content}>
          <div className={styles.cardPost}>
          {post && (<div className={styles.title}><h1>{post.title}</h1></div>)}
          <div className={styles.contImg}>
            {post && (<div ><img className={styles.img} src={post.url} alt={post.title} width={400} height={300} /></div>)}
            <div className={styles.conteudo}>{post?.content}</div>
            
          </div>
          <hr />
          <div className={styles.body}>
          <RenderHTMLContent body={post?.body || ''} />
          </div>
          </div>
            <div className={styles.cardLateral}>
              <div className={styles.categoryMain}>
                <h1 className='font-bold'>Category</h1>
                <Link className={styles.link} href={'/blog/tech'}>Technology</Link>
                <Link className={styles.link} href={'/blog/tech'}>Coffees</Link>
                <Link className={styles.link} href={'/blog/tech'}>Code</Link>
              </div>
              <div><span>Author {post && (<h1>{post?.author}</h1>)}</span></div>
              
            </div>
        </div>
      </div>
      
      <Footer/>
    </main>
  )
}

export default Postpage
