import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className=" px-7 py-2 w-48 shadow-lg">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subsriptions</li>
      </ul>
      <div className="border-t-2">
        <ul>
          <li>Library</li>
          <li>History</li>
        </ul>
      </div>

      <div className="border-t-2">
        <span className="font-bold">Explore</span>
        <ul>
          <li>Trending</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
