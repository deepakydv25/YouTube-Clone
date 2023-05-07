import React, { useEffect, useState } from "react";
import {
  YOUTUBE_CHANNEL_ID,
  YOUTUBE_ID_VIDEO,
  YOUTUBE_VIDEOS_API,
} from "../config";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  function formatViews(numViews) {
    if (numViews < 1000) {
      return numViews.toLocaleString();
    } else if (numViews < 1000000) {
      const thousands = Math.floor(numViews / 1000);
      return `${thousands}K`;
    } else if (numViews < 1000000000) {
      const millions = Math.floor(numViews / 1000000);
      const remainder = Math.floor((numViews - millions * 1000000) / 100000);
      if (remainder === 0) {
        return `${millions}M`;
      } else {
        return `${millions}.${remainder}M`;
      }
    } else {
      const billions = Math.floor(numViews / 1000000000);
      const remainder = Math.floor(
        (numViews - billions * 1000000000) / 1000000
      );
      if (remainder === 0) {
        return `${billions}B`;
      } else {
        return `${billions}.${remainder}B`;
      }
    }
  }

  function formatTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    }
  }
  // console.log(info);

  const [videoDetials, setVideoDetails] = useState({});
  const [channelDetails, setChannelDetails] = useState({});

  useEffect(() => {
    getVideoDetails();
  }, []);

  // /watch?v=OEKNl5qKdDA

  const getVideoDetails = async () => {
    let data = await fetch(YOUTUBE_ID_VIDEO + info?.id);
    let json = await data?.json();
    setVideoDetails(json.items[0]);
    // console.log("Get Video Details - ", json?.items[0]);
  };

  useEffect(() => {
    if (videoDetials?.snippet?.channelId) {
      getChannelDetails();
    }
  }, [videoDetials]);

  const getChannelDetails = async () => {
    let data = await fetch(YOUTUBE_CHANNEL_ID + videoDetials.snippet.channelId);
    data = await data.json();
    setChannelDetails(data.items[0]);
    console.log("channel-", data.items[0]);
  };

  return (
    <div className="">
      <div className="m-2 h-[330px] w-72 bg-blue-200">
        <img
          className="rounded-lg"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
        <ul>
          <li className="font-bold py-2">{title}</li>
          <div className="flex flex-row items-center">
            <img
              className="h-10 rounded-full m-1"
              src={channelDetails?.snippet?.thumbnails?.default?.url}
            />
            <li className="text-[rgb(155,155,155)] ml-2">{channelTitle}</li>
          </div>
          <div className="flex flex-row">
            <li className="text-[rgb(155,155,155)] ml-1 mr-2">
              {formatViews(statistics.viewCount)} views
            </li>
            <li className="text-[rgb(155,155,155)]">
              <span className="mr-1">•</span>
              {formatTime(snippet.publishedAt)}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export const AdvideoCard = ({ info }) => {
  return (
    <div className="p-1 border border-red-900">
      <VideoCard info={info} />
      <span>Ad</span>
    </div>
  );
};
export default VideoCard;
