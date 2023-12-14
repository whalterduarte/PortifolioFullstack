import React from 'react'
import styles from '../_components/moduleCss/latest.module.css'

const Latest = () => {
  return (
    <div className={styles.container}>
      
      
    <div className={styles.session}>

   <div className={styles.centralize}>
   <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className='text-3xl'>Hello, I’m</h2>
        <h1 className='font-heading text-4xl md:text-6xl lg:text-7xl'>
        Whalter <span className='text-primary'>D</span>uarte
        <br />
        <span className='text-3xl'>Welcome my Blog</span>
         </h1>
    </div >
   </div>
      
    </div>

    </div>
  )
}

export default Latest
