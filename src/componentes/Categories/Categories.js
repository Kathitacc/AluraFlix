import './Categories.css';
import React, { useState } from 'react';
import VideoCard from '../VideoCard/VideoCard';
import EditModal from '../EditModal/EditModal';

function Categories({ videos = [], updateVideo, deleteVideo }) {
  const categories = ['Frontend', 'Backend', 'Innovación', 'Gestión'];

  return (
    <div className="categories">
      {categories.map((category) => (
        <Category key={category} name={category} videos={videos.filter(video => video.category === category)} onDelete={deleteVideo} onEdit={updateVideo}/>
      ))}
    </div>
  );
}

function Category({ name, videos, onDelete, onEdit }) {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleEdit = (video) => {
    setCurrentVideo(video);
    setEditModalOpen(true);
  };

  const handleSaveEdit = (updatedVideo) => {
    onEdit(updatedVideo);
    setEditModalOpen(false);
  };

  return (
    <div className="category">
      <h2>{name}</h2>
      <div className="video-cards">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onDelete={onDelete} onEdit={handleEdit} />
        ))}
      </div>
      {editModalOpen && <EditModal video={currentVideo} onClose={() => setEditModalOpen(false)} onSave={handleSaveEdit} />}
    </div>
  );
}

export default Categories;
