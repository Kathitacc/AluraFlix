// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Header from '../Header';
import Footer from '../Footer';
import './NewVideo.css';

function NewVideo({ addVideo }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Frontend');
  const [image, setImage] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');

  
  const handleSave = () => {
    const newVideo = {
      title,
      category,
      image,
      url: videoUrl,
      description,
    };

    axios.post('http://localhost:5000/videos', newVideo)
      .then(response => {
        addVideo(response.data); 
        handleClear(); 
      })
      .catch(error => {
        console.error('Error creating new video:', error);
      });
  };

  
  const handleClear = () => {
    setTitle('');
    setCategory('Frontend');
    setImage('');
    setVideoUrl('');
    setDescription('');
  };

  return (
    <div className="new-video">
      <div className="new-video-content">
        <h2>Nuevo Video</h2>
        <form>
          <label>
            Título:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            Categoría:
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Innovación">Innovación</option>
              <option value="Gestión">Gestión</option>
            </select>
          </label>
          {/* <label>
            Imagen:
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="URL de la imagen" />
          </label> */}
          <label>
            Video:
            <input type="text" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} placeholder="URL del video" />
          </label>
          <label>
            Descripción:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </label>
          <div className="new-video-buttons">
            <button type="button" onClick={handleSave}>Guardar</button>
            <button type="button" onClick={handleClear}>Limpiar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewVideo;

