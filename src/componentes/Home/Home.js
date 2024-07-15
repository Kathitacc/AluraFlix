 import React from 'react';
 import Header from '../Header';
 import Footer from '../Footer';
 import Categories from '../Categories/Categories.js';
 import Banner from '../Banner';

 function Home({ videos, updateVideo, deleteVideo }) {
  const latestVideo = videos.length > 0 ? videos[videos.length - 1] : null;
   return (
     <div className="home">
        <Banner video={latestVideo} />
        <Categories videos={videos} updateVideo={updateVideo} deleteVideo={deleteVideo} />
       {/* <Banner videos={videos} />
       <Categories videos={videos} updateVideo={updateVideo} deleteVideo={deleteVideo} /> */}
     </div>
   );
 }

 export default Home;