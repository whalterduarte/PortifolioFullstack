'use client'
import React, { useEffect, useState } from 'react'
import styles from './moduleCss/coffee.module.css'
import axios from 'axios'
import Link from 'next/link'
import { format } from 'date-fns'

type Coffee = {
  id: number;
  slug: string;
  content: string;
  title: string;
  date: Date;
  author: string;
};

const Coffee: React.FC = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await axios.get(`https://api-whalter.vercel.app/blog/posts/coffees`)
        if (response.data && response.data.posts) {
          setCoffees(response.data.posts);
        } else {
          console.error('Response data or coffees array is not defined:', response.data)
        }
      } catch (error) {
        console.error('Error fetching coffees:', error)
      }
    };

    fetchCoffees()
  }, [])

  return (
    <div className={styles.catalizer}>
      <div className="mx-auto flex max-w-[58rem] flex-col mt-10 items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Coffees
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Small Snack
        </p>
        <br />
      </div>
      
      <div className={styles.container}>
        {coffees.map((coff)=>(
          <div className={`${styles.content} mb-4`} key={coff.id}>
            <div className={styles.title}><h1>{coff.title}</h1></div>
            <div className={styles.cont}>{coff.content}</div>
            <div className={styles.link}><Link  href={`/blog/coffees/${coff.slug}`}>View post . . .</Link></div>
            <div className={styles.dateAuthor}>
            <p><span>Date:</span> {format(new Date(coff.date), 'dd/MM/yyyy HH:mm:ss')}</p>
            <p><span>Author:</span> {coff.author}</p>
            </div>
            <hr />
          </div>
          
        ))}
      </div>
      <br />
    </div>
  )
}

export default Coffee;
