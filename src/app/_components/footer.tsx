import Link from 'next/link'
import styles from './moduleCss/footer.module.css'


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
          <div>
            <h1 className={styles.title}>
               Whalter <span className='text-primary'>D</span>uarte
            </h1>
            <p className={styles.link}> &copy; 2023. All rights reserved.</p>
          </div>
          <div className={styles.itemsBlog}>
             <h1 className={styles.title}>Blog</h1>
              <Link className={styles.link} href={'/blog'}>Tech</Link>
              <Link className={styles.link} href={'/blog'}>Coffees</Link>
              <Link className={styles.link} href={'/blog'}>Social</Link>
          </div>
         <div className={styles.itemsSocial}>
             <h1 className={styles.title}>Social Midia</h1>
              <Link className={styles.link} href={'https://www.instagram.com/whalterdart/'}>Instagram</Link>
              <Link className={styles.link} href={'https://www.linkedin.com/in/whalter-duarte'}>Linkedin</Link>
              <Link className={styles.link} href={'https://github.com/whalterduarte'}>Github</Link>
         </div>
      </div>
   </div>
  )
}

export default Footer
