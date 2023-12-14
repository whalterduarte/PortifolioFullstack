'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// Interface para os dados do projeto
interface ProjectData {
  photo: File | null;
  title: string;
  slug: string;
  content: string;
  body: string;
  author: string;
  categoryId: string;
}

// Componente do formulário
function ProjectForm() {
  // Estado inicial
  const [projectData, setProjectData] = useState<ProjectData>({
    photo: null,
    title: '',
    slug: '',
    content: '',
    body: '',
    author: '',
    categoryId: '',
  });

  // Função para lidar com mudanças nos campos de input
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para lidar com mudanças na imagem
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setProjectData((prevData) => ({
      ...prevData,
      photo: file || null,
    }));
  };

  // Função para lidar com mudanças no corpo do texto (ReactQuill)
  const handleBodyChange = (value: string) => {
    setProjectData((prevData) => ({
      ...prevData,
      body: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append('photo', projectData.photo || '');
      formData.append('title', projectData.title);
      formData.append('slug', projectData.slug);
      formData.append('content', projectData.content);
      formData.append('body', projectData.body);
      formData.append('author', projectData.author);
      formData.append('categoryId', projectData.categoryId);

      const response = await axios.post(`${process.env.BASEAPI}/blog/admin/newpost`, formData);

      console.log('Resposta da API:', response.data);
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  // Renderização do componente
  return (
    <div className="max-w-2xl mx-auto p-8 shadow-md rounded-md mt-8">
      <h1 className="text-3xl font-bold mb-4">Adicionar Novo Projeto</h1>
      <form onSubmit={handleSubmit}>
        {/* Campos do formulário */}
        <div className="mb-4">
          <label className="text-gray-600">Photo:</label>
          <input
            type="file"
            name="photo"
            onChange={handleImageChange}
            className="border rounded-md px-3 py-2 w-full mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-600">Título:</label>
          <input
            type="text"
            name="title"
            value={projectData.title}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-600">Slug:</label>
          <input
            type="text"
            name="slug"
            value={projectData.slug}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-600">Conteúdo:</label>
          <textarea
            name="content"
            value={projectData.content}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-600">Corpo da Postagem:</label>
          {typeof window !== 'undefined' && (
            <ReactQuill
              value={projectData.body}
              onChange={handleBodyChange}
              className="border rounded-md mt-2"
              style={{ height: '200px', width: '100%' }}
            />
          )}
        </div>
        <br />
        <div className="mb-4">
          <label className="text-gray-600">Autor:</label>
          <input
            type="text"
            name="author"
            value={projectData.author}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-600">Categoria ID:</label>
          <input
            type="text"
            name="categoryId"
            value={projectData.categoryId}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full mt-2"
          />
        </div>
        {/* Adicione mais campos conforme necessário */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Adicionar Projeto
        </button>
      </form>
    </div>
  );
}

export default ProjectForm;
