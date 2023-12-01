import Image from 'next/image';
import Link from 'next/link';
import {  GitHubIcon, InstagramIcon, LinkedInIcon, } from '@/components/social-icons'

function SocialLink({icon: Icon, ...props}: any){
  return(
    <Link className='group -m-1 p-1'{...props}>
       <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
    </Link>
  )
}
 
const AboutSection = () => {
  return (
    <section
      id='about'
      className='container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24'
    >
      <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]'>
        <div className='lg:pl-20 flex justify-center'>
          <div className='max-w-xs px-2.5 lg:max-w-none'>
            <Image
              src='/avatar.png'
              alt='Whalter Duarte'
              width={300}
              height={300}
              quality='95'
              priority={true}
              className='aspect-square rotate-3 rounded-lg object-cover'
            />
          </div>
        </div>
        <div className='lg:order-first lg:row-span-2 text-center md:text-start'>
          <h1 className='font-heading text-3xl md:text-4xl lg:text-5xl'>
            @whalterduarte
          </h1>
          <p className='mt-6 text-base text-muted-foreground'>
          Passionate technology enthusiast with a journey starting in 2015, 
          exploring HTML, CSS, and JavaScript. As a Full Stack Developer, I
           specialize in crafting innovative solutions with React, React Native, 
           and Node.js. Proficient in frameworks like Express.js and tools such as 
           Redux, Docker, and JWT, I bring expertise in MVC, Monolithic, and Microservices. 
           Committed to building scalable solutions, adhering to best practices, and 
           fostering a continuous pursuit of innovation.
          </p>
            <div className='mt-6 flex justify-center md:justify-start gap-6'>
              <SocialLink target="_blank" href="https://www.instagram.com/whalterdart/" icon={InstagramIcon}/>
              <SocialLink target="_blank" href="https://github.com/whalterduarte" icon={GitHubIcon}/>
              <SocialLink target="_blank" href="https://www.linkedin.com/in/whalter-duarte/" icon={LinkedInIcon}/>
            </div>
          </div>
        </div>
       
    </section>
  );
}

export default AboutSection;
