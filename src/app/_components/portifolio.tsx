'use client'
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './moduleCss/portifolio.module.css';
import { portifolioData } from '@/utils/data';
import {  GitHubIcon } from '@/components/social-icons'
import Link from 'next/link';

const Portifolio = () => {

  function SocialLink({icon: Icon, ...props}: any){
    return(
      <Link className='group -m-1 p-1'{...props}>
        <Icon className={styles.social}/>
      </Link>
    )
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);

  const updateSlidesToShow = () => {
    
    if (window.innerWidth <= 1750) {
      setSlidesToShow(4);
      if (window.innerWidth <= 1450){
        setSlidesToShow(3)
      }
    } if (window.innerWidth <= 900) {
      setSlidesToShow(2);
    } if(window.innerWidth <= 725) {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateSlidesToShow);
    updateSlidesToShow();
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    draggable: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  return (
    <div>
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Projects
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Featured projects
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.main}>
         
          <Slider {...settings} className={styles.slider}>
            {portifolioData.map((data, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.title}>{data.project}</div>
                <div className={styles.aboutProject}>{data.aboutProject}</div>
                <div className={styles.gitLink}><SocialLink target="_blank" href="https://www.linkedin.com/in/whalter-duarte/" icon={GitHubIcon}/></div>
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.dotsContainer}>
          {portifolioData.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${
                index === currentSlide ? styles.activeDot : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portifolio;