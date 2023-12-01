'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './moduleCss/contact.module.css'

const Contact = () => {

  const [state, handleSubmit] = useForm("mqkvvgvj");
  if (state.succeeded) {
      return <div className={styles.containerform}>
      <div>
        <h1 className="font-heading text-3xl">Email successfully sent! 📬  <br /> Please monitor your 
          inbox for further communication.</h1>
      </div>
      </div>;
  }
  return (
    <div  id='contact' className={styles.container}>
       <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Get In Touch
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Contact me
        </p>
      </div >

      <div className={styles.tanksContainer}>
      <div className={styles.areaTanks}> 
        <h1>Thank you</h1>
        <p>Do you have any doubts?</p>
        

        <svg 
        aria-hidden="true" 
        focusable="false" data-prefix="fas" 
        data-icon="handshake" 
        className="svg-inline--fa fa-handshake fa-w-20 fa-5x " role="img" xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 640 512"><path fill='#5078e9' d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path></svg>

      </div>

      <form className={styles.formContainer} onSubmit={handleSubmit}>
     <div className={styles.alignInput}>
      <div className={styles.input}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Type your Email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors} 
      />
      </div>

      <div className={styles.input}>
      <label htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="name" 
        name="name"
        placeholder='Type your name'
      />
      <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors} 
      />
      </div>
      </div>

      <textarea
        id="message"
        name="message"
        className={styles.text}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className={styles.submit} type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>

    </div>



    </div>
  )
}

export default Contact
