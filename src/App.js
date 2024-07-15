import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Categories from './componentes/Categories/Categories';
import Home from './componentes/Home/Home';
import NewVideo from './componentes/NewVideo/NewVideo';

function App() {
  const [videos, setVideos] = useState([]);

 
  const fetchVideos = () => {
    axios.get('http://localhost:5000/videos')
      .then(response => {
        setVideos(response.data); 
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });
  };

  useEffect(() => {
    fetchVideos();
  }, []); 

  
  const addVideo = (newVideo) => {
    axios.post('http://localhost:5000/videos', { ...newVideo, id: uuid() })
      .then(response => {
        setVideos([...videos, response.data]); 
      })
      .catch(error => {
        console.error('Error adding video:', error);
      });
  };

 
  const updateVideo = (updatedVideo) => {
    if (!updatedVideo.id) {
      console.error('Missing ID for updated video:', updatedVideo);
      return;
    }
    axios.put(`http://localhost:5000/videos/${updatedVideo.id}`, updatedVideo)
      .then(response => {
        setVideos(videos.map(video => (video.id === updatedVideo.id ? updatedVideo : video))); 
      })
      .catch(error => {
        console.error('Error updating video:', error);
      });
  };

  
  const deleteVideo = (id) => {
    axios.delete(`http://localhost:5000/videos/${id}`)
      .then(response => {
        setVideos(videos.filter(video => video.id !== id)); 
      })
      .catch(error => {
        console.error('Error deleting video:', error);
      });
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home videos={videos} updateVideo={updateVideo} deleteVideo={deleteVideo} />} />
        <Route path="/newvideo" element={<NewVideo addVideo={addVideo} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
