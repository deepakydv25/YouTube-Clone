import React from "react";
import { Link } from "react-router-dom";
import { restrictText } from "../utils/helper";

const RecommendedVideo = ({ data }) => {
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

  return (
    <div className="" key={data.id}>
      <Link to={"/watch?v=" + data.id.videoId}>
        <div className="flex flex-row mb-3">
          <div className="relative h-[100px] lg:h-20 xl:h-24 w-40 min-w-[170px] lg:w-32 lg:min-w-[170px] xl:w-40 xl-min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={data.snippet.thumbnails.medium.url}
              alt="recommendedVideo"
            />
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-black">
              {restrictText(data.snippet.title, 50)}
            </span>
            <span className="text-[12px] lg-text-[10px] xl:text-[12px] font-semibold mt-2 text-black/[0.7] flex items-center">
              {data.snippet.channelTitle}
            </span>

            <span className="text-[12px] lg-text-[10px] xl:text-[12px] font-semibold text-black/[0.7] flex items-center">
              {formatTime(data.snippet.publishedAt)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecommendedVideo;
