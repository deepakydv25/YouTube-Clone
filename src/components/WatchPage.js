import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { RELATED_API, YOUTUBE_CHANNEL_ID, YOUTUBE_ID_VIDEO } from "../config";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { TbArrowBarToDown, TbShare3 } from "react-icons/tb";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Comments from "./Comments";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  const [videoDetails, setVideoDetails] = useState({});
  const [channelDetails, setChannelDetails] = useState({});
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
    getRelatedVideos();
  }, []);

  useEffect(() => {
    if (videoDetails.snippet?.channelId) {
      getChannelDetails();
    }
  }, [videoDetails]);

  const getRelatedVideos = async () => {
    let data = await fetch(RELATED_API.replace("[VIDEO_ID]", videoId));
    data = await data.json();
    setRelatedVideos(data.items);
    console.log("Related Video-", data.items);
  };

  const getVideoDetails = async () => {
    let data = await fetch(YOUTUBE_ID_VIDEO + videoId);
    let json = await data.json();
    setVideoDetails(json.items[0]);
    console.log("Get Video Details - ", json.items[0]);
  };

  const getChannelDetails = async () => {
    let data = await fetch(YOUTUBE_CHANNEL_ID + videoDetails.snippet.channelId);
    let json = await data.json();
    setChannelDetails(json.items[0]);
    console.log("channel-", json.items[0]);
  };

  const playVideo = () => {
    const videoFrame = document.getElementsByTagName("iframe");
    videoFrame[0].click();
  };

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

  const restrictText = (text, len) => {
    try {
      if (text.length < len) return text;

      return text.substring(0, len) + "...";
    } catch {
      return false;
    }
  };

  return (
    <div className="flex">
      <div className="w-2/3">
        <div className="h-screen pt-2 bg-purple-200">
          <div>
            <iframe
              className="w-full h-[500px]"
              src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
              title="YouTube video player"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              onLoad={() => playVideo()}
            ></iframe>
          </div>
          <div className="text-lg py-2 px-1 font-semibold">
            {videoDetails?.snippet?.title}
          </div>
          <div>
            <div className="flex justify-between">
              <div className="flex w-1/2 mb-1 bg-yellow-200">
                <img
                  className="h-10 rounded-full ml-1"
                  src={channelDetails?.snippet?.thumbnails?.default?.url}
                />
                <div className="flex flex-col">
                  <span className="font-semibold px-2 text-sm">
                    {channelDetails?.snippet?.title}
                  </span>
                  <span className="px-2 text-sm text-slate-500">
                    {formatViews(channelDetails?.statistics?.subscriberCount)}{" "}
                    subscribers
                  </span>
                </div>
                <div className="flex flex-col justify-center ml-2">
                  <button className="px-2 py-1 bg-black text-white rounded-2xl text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="flex justify-end w-1/2 mb-1 bg-green-200">
                <div className="flex ml-3">
                  <div className="flex bg-slate-200 rounded-3xl">
                    <div className=" flex flex-row items-center rounded-l-3xl hover:bg-slate-300 cursor-pointer text-sm py-1 px-2 ">
                      <FiThumbsUp />
                      <span className="ml-2">
                        {formatViews(videoDetails?.statistics?.likeCount)}
                      </span>
                    </div>
                    <div className="w-[1px] mt-2 h-2/3 bg-black"></div>
                    <div className="flex bg-slate-200 rounded-r-3xl">
                      <div className="flex flex-row items-center rounded-r-3xl hover:bg-slate-300 cursor-pointer text-sm py-1 px-2 ">
                        <FiThumbsDown />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex ml-3">
                  <div className="flex bg-slate-200 rounded-3xl hover:bg-slate-300">
                    <div className="flex flex-row items-center text-sm py-1 px-2 cursor-pointer">
                      <TbShare3 />
                      <span className="text-xs ml-2">Share</span>
                    </div>
                  </div>
                </div>
                <div className="flex ml-3">
                  <div className="flex bg-slate-200 rounded-3xl hover:bg-slate-300">
                    <div className="flex flex-row items-center text-sm py-1 mx-2 cursor-pointer">
                      <TbArrowBarToDown />
                      <span className="text-xs ml-2">Download</span>
                    </div>
                  </div>
                </div>
                <div className="flex ml-3">
                  <div className="flex bg-slate-200 items-center rounded-full hover:bg-slate-300">
                    <div className="px-2 cursor-pointer">
                      <HiOutlineDotsHorizontal />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-2 my-2 px-2 rounded-lg bg-slate-200">
            <div className="text-sm font-semibold">
              {formatViews(
                videoDetails?.statistics
                  ? videoDetails?.statistics?.viewCount
                  : 0
              )}
              <span className="ml-1">views</span>{" "}
              <span className="mx-1">•</span>
              {videoDetails?.snippet
                ? formatTime(videoDetails?.snippet?.publishedAt)
                : 0}
              <div className="font-normal">
                {/* {!showMore
                  ? restrictText(videoDetails?.snippet?.description, 200)
                  : videoDetails?.snippet.description} */}
                {/* {showMore
                  ? videoDetails?.snippet?.tags?.map((tag) => <div>#{tag}</div>)
                  : null} */}
              </div>
            </div>
          </div>
          <div>
            <Comments />
          </div>
          <div className="w-full">{/* <LiveChat /> */}</div>
        </div>
        <div>{/* <CommentContainer /> */}</div>
      </div>
    </div>
  );
};

export default WatchPage;
