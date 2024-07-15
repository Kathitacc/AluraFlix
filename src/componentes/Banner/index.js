import React, { useState, useEffect } from 'react';
import './Banner.css';
 
function Banner({ video }) {
  if (!video) {
    return <div className="banner">No videos available</div>;
  }

  const extractVideoId = (url) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('v');
  };

  const videoId = extractVideoId(video.url);

  return (
    <div className="banner">
      <div className='LatestVideo'>
        {videoId && (
          <iframe
            width="450"
            height="200"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
          ></iframe>
        )}
      </div>
      <div className="video-details">
        <h3>{video.title}</h3>
        <p><strong>Category:</strong> {video.category}</p>
        <p>{video.description}</p>
      </div>
    </div>
  );
}

export default Banner;


//  function Banner() {
//   const [featuredVideo, setFeaturedVideo] = useState(null);
//   useEffect(() => {
    
//     const categories = [
//       {
//         name: 'Frontend',
//         videos: [
//           { id: 1, title: 'Video 1', description: 'Descripción del Video 1' },
//           { id: 2, title: 'Video 2', description: 'Descripción del Video 2' },
//         ],
//       },
//       {
//         name: 'Backend',
//         videos: [
//           { id: 3, title: 'Video 3', description: 'Descripción del Video 3' },
//           { id: 4, title: 'Video 4', description: 'Descripción del Video 4' },
//         ],
//       },
      
//     ];

    
//     const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    
//     const randomVideo = randomCategory.videos[Math.floor(Math.random() * randomCategory.videos.length)];

    
//     setFeaturedVideo(randomVideo);
//   }, []);


//      return (
//        <div className="banner">
//           <div className="banner-content">
//         {featuredVideo && (
//           <>
//             <h2>{featuredVideo.title}</h2>
//             <p>{featuredVideo.description}</p>
//           </>
//         )}
//       </div>
         
//        </div>
//      );
//    }  
//    export default Banner;