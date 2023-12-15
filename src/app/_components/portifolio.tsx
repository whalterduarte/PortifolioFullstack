'use client'
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './moduleCss/portifolio.module.css';
import { portifolioData } from '@/utils/data';
import {  GitHubIcon } from '@/components/social-icons'
import { project } from '@/types/project'
import Link from 'next/link'
import axios from 'axios'

const Portifolio: React.FC  = () => {
  const [projects, setProjects] = useState<project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ projects: project[] }>(`https://backendport-louz.onrender.com/projects`)
        
        setProjects(response.data.projects);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
    fetchData();
  }, []);


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
      if (window.innerWidth >= 1450){
          setSlidesToShow(3)
        }
      if(window.innerWidth <= 1350) {
        setSlidesToShow(2)
      }  
      if(window.innerWidth <= 900){
        setSlidesToShow(1)
      }
    }

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
        {projects.length > 0 && (
          <Slider {...settings} className={styles.slider}>
          {projects.map((data) => (
            <div className={styles.card} key={data.id}>
              <div className={styles.title}>{data.title}</div>
              <div className={styles.aboutProject}>{data.descproject}</div>
              <div className={styles.linksContainer}>
                <div className={styles.gitLink}>
                  <SocialLink target="_blank" href={data.linkgit} icon={GitHubIcon}/>
                </div>
                <div className={styles.detailsLink}>
                  <Link href={`/myprojects/${data.slug}`} passHref>
                    <button className={styles.detailsButton}>Details</button>
                  </Link>
                </div>
                <div className={styles.onlineLink}>
                  <Link href={data.linkproject} passHref>
                    <button className={styles.onlineButton}>View</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
              )}
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

export default Portifolio