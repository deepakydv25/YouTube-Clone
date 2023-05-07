import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  YOUTUBE_CHANNEL_ID,
  YOUTUBE_ID_VIDEO,
  YOUTUBE_VIDEOS_API,
} from "../config";
import VideoCard, { AdvideoCard } from "./VideoCard";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  // /watch?v=OEKNl5qKdDA
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log("data", json.items[0].id);
    // console.log("data :", json);
    setVideos(json.items);
  };

  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap p-2 bg-yellow-200">
      {videos[0] && <AdvideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
