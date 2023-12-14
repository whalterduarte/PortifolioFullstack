import React from 'react'
import styles from './moduleCss/category.module.css'
import Link from 'next/link'

const Category = () => {
  return (
    <div className={styles.container}>
          <div className={styles.main}>
          <div className={styles.link}><Link  href={'/blog/tech'}> Tech</Link></div>
          <div className={styles.link}><Link  href={'/blog/coffees'}> Coffees</Link></div>
          <div className={styles.link}><Link  href={'/blog/code'}> Code</Link></div>
          <div className={styles.link}><Link  className={styles.links} href={'/blog/posts'}> All Posts</Link></div>
         </div>
    </div>
  )
}

export default Category
