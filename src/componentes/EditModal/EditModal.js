import React, { useState } from 'react';
import './EditModal.css';

function EditModal({ video, onSave, onClose }) {
  const [title, setTitle] = useState(video.title);
  const [category, setCategory] = useState(video.category || 'Frontend');
  const [image, setImage] = useState(video.image || '');
  const [url, setUrl] = useState(video.url || '');
  const [description, setDescription] = useState(video.description);

  const handleSave = () => {
    const updatedVideo = {
      ...video,
      title,
      category,
      image,
      url,
      description,
    };
    onSave(updatedVideo);
  };

  const handleClear = () => {
    setTitle('');
    setCategory('Frontend');
    setImage('');
    setUrl('');
    setDescription('');
  };

  return (
    <div className="edit-modal">
      <div className="edit-modal-content">
        <h2>Editar Card</h2>
        <button className="close-button" onClick={onClose}>X</button>
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
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL del video" />
          </label>
          <label>
            Descripción:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </label>
          <div className="edit-modal-buttons">
            <button type="button" onClick={handleSave}>Guardar</button>
            <button type="button" onClick={handleClear}>Limpiar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
