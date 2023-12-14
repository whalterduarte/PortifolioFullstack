'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface ProjectData {
  photo: File | null;
  linkgit: string;
  descproject: string;
  desc: string;
  title: string;
  body: string;
  slug: string;
  linkproject: string;
}

function ProjectForm() {
  const [projectData, setProjectData] = useState<ProjectData>({
    photo: null,
    linkgit: '',
    descproject: '',
    desc: '',
    title: '',
    body: '',
    slug: '',
    linkproject: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setProjectData((prevData) => ({
      ...prevData,
      photo: file || null,
    }));
  };

  const handleBodyChange = (value: string) => {
    setProjectData((prevData) => ({
      ...prevData,
      body: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append('photo', projectData.photo || '');
      formData.append('linkgit', projectData.linkgit);
      formData.append('descproject', projectData.descproject);
      formData.append('desc', projectData.desc);
      formData.append('title', projectData.title);
      formData.append('body', projectData.body);
      formData.append('slug', projectData.slug);
      formData.append('linkproject', projectData.linkproject);

      const response = await axios.post(`${process.env.BASEAPI}/project/add`, formData);

      console.log('Resposta da API:', response.data);
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8  shadow-md rounded-md mt-8">
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
          <label className="text-gray-600">GitHub Link:</label>
          <input
            type="text"
            name="linkgit"
            value={projectData.linkgit}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-600">Descrição do Card do Projeto:</label>
          <textarea
            name="descproject"
            value={projectData.descproject}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-600">Descrição:</label>
          <textarea
            name="desc"
            value={projectData.desc}
            onChange={handleChange}
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
          <label className="text-gray-600">Link do Projeto:</label>
          <input
            type="text"
            name="linkproject"
            value={projectData.linkproject}
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
