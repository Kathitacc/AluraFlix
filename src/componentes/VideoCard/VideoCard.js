import React from 'react';
import './VideoCard.css';

function VideoCard({ video, onDelete, onEdit }) {
  const extractVideoId = (url) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('v');
  };

  const videoId = extractVideoId(video.url);

  return (
    <div className="video-card">
      {/* <img src={video.image} alt={video.title} /> */}
      <div className="video-details">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        {videoId && (
          <iframe
            width="300"
            height="200"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
          ></iframe>
        )}
        <button onClick={() => onEdit(video)}>Edit</button>
        <button onClick={() => onDelete(video.id)}>Delete</button>
      </div>
    </div>
  );
}

export default VideoCard;
