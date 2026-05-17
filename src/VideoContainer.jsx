import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from './utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {


  const [videos, setvideos] = useState([]);


  useEffect(() => {

    getPopularVideos();

  }, [])

  const getPopularVideos = async () => {


    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const res = await data.json();
      setvideos(res?.items);
      console.log(res);
    }

    catch (e) {

    }



  }


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4">
      {videos.map((item) => (
        <VideoCard key={item.id} data={item} />
      ))}
    </div>
  )
}

export default VideoContainer