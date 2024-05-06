'use client'
import React, { useEffect, useState } from 'react'
import { ModeToggle } from '@/app/_components/mode-toggle'
import Link from 'next/link'
import styles from '../_components/modeuleCss/details.module.css'
import Image from 'next/image'
import { project } from '@/types/project'
import axios from 'axios'
import Footer from '@/app/_components/footer'
import Portifolio from '@/app/_components/portifolio'
import Navbar from '@/app/_components/navbar'
import RenderHTMLContent from '@/app/_components/RenderHTMLContent'

type Props = {
  params: {
    projectSlug: string
  }
}

const Details = ({ params }: Props) => {
  const [project, setProject] = useState<project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.api.whalter.com.br/project/${params.projectSlug}`)
        const projectData = response.data.project;
        setProject(projectData);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    fetchData();
  }, [params.projectSlug])

  return (

    <div>
      <Navbar/>
    {loading ? (
      <p>Carregando...</p>
    ) : project ? (
      <>
       
        <div className={styles.main}>
        <ModeToggle />
        <div className={styles.container}>
          <div>
            
            <div className={styles.imgContent}>
              <div className={styles.img}>
              <img
                className={styles.image}
                src={project.url}
                alt="Project"
                width={500} 
                height={400}
                 />
              </div>
              <div className={styles.desc}>
                <div className={styles.descTitle}>
                  <h1 
                  className={styles.titleProjectdescript}>
                    Project description
                  </h1>
                </div>
                <div className={styles.contDesc}>
                  <p className=' text-base text-muted-foreground'>
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <h1 className= 'font-heading text-3xl md:text-4xl lg:text-5xl'>{project.title}</h1>
              <div className={styles.body}> 
              <RenderHTMLContent body={project.body} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    ) : (
      <p>Nenhum projeto encontrado.</p>
    )}
    <div className={styles.portfolio}><Portifolio/></div>
    <Footer/>
  </div>
    
  )
}

export default Details
