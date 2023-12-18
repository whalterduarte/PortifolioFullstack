'use client'
import React, { useEffect, useState } from 'react'
import styles from '../_components/moduleCss/tech.module.css'
import axios from 'axios'
import Image from 'next/image';


type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  url: string;
  date: Date;
  author: string;
};

const Tech: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api-whalter.vercel.app/blog/posts/tech`);
        setPosts(response.data.posts);
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    fetchData()
  }, [])

  // Calcula os índices dos posts a serem exibidos com base na página atual
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Muda de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <div className={styles.tech}>
        <div className="mx-auto flex max-w-[58rem] flex-col  items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Technology
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground  sm:text-lg sm:leading-7">
            News about Technology
          </p>
        </div>
      </div>
      
      <div className={styles.session}>
        {/* Renderiza cada post individualmente */}
        {currentPosts.map((post) => (
          <div key={post.id}>
            {/* Área do post */}
            <div className={styles.mainTech}>
              <div>
                <Image className={styles.img} src={post.url} alt={post.title} width={500} height={300} />
              </div>
              <div className={styles.containerContent}>
                <div className={styles.title}>{post.title}</div>
                <div className={styles.content}>{post.content}</div>
              </div>
            </div>
          </div>
        ))} 

        {/* Controles de página */}
        <div className={styles.containerPagination}>
          <button className={styles.button} onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            Anterior
          </button>
          <div className={styles.pagination}>
          {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              disabled={currentPage === i + 1 }
              className={currentPage === i + 1 ? styles.currentPage : ''}
            >
              {i + 1}
            </button>
          ))}
          </div>
          <button className={styles.button} onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(posts.length / postsPerPage)}>
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tech