import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import {
  MdLightbulbOutline,
  MdOutlineMovie,
  MdOutlineMusicNote,
  MdOutlineShoppingBag,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
} from "react-icons/md";
import {
  RiFeedbackLine,
  RiFlagLine,
  RiHistoryLine,
  RiVideoLine,
} from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import { HiOutlineFire, HiOutlineNewspaper } from "react-icons/hi";
import { FiRadio } from "react-icons/fi";
import { SiYoutubegaming } from "react-icons/si";
import { IoSettingsOutline, IoTrophyOutline } from "react-icons/io5";
import { TbHanger } from "react-icons/tb";
import { TfiHelpAlt } from "react-icons/tfi";
import shorts from "../images/shorts.png";
import youtubeLogo from "../images/youtube-logo.png";
import youtubeStudio from "../images/youtube-studio.png";
import youtubeMusic from "../images/youtube-music.png";
import youtubeKids from "../images/youtube-kids.png";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return pattern
  if (!isMenuOpen) return <ClosedSidebar />;

  return (
    <div className="px-3 pt-2 shadow-lg bg-red-200">
      <div className="pr-2 overflow-y-auto">
        <div>
          <ul>
            <li>
              <Link
                to="/"
                className="flex bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center"
              >
                <AiFillHome className="h-5 w-7" />
                <span className="pl-2">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/shorts"
                className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center"
              >
                <img className="h-[20px] w-5" src={shorts} alt="shorts" />
                <span className="pl-[13px]">Shorts</span>
              </Link>
            </li>
            <li>
              <Link
                to="/subsriptions"
                className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center"
              >
                <MdOutlineSubscriptions className="h-5 w-7" />
                <span className="pl-2">Subsriptions</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-t-2 pt-2">
          <ul>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <MdOutlineVideoLibrary className="h-5 w-7" />
                <span className="pl-2">Library</span>
              </Link>
            </li>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <RiHistoryLine className="h-5 w-7" />
                <span className="pl-2">History</span>
              </Link>
            </li>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <RiVideoLine className="h-5 w-7" />
                <span className="pl-2">Your Videos</span>
              </Link>
            </li>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <MdOutlineWatchLater className="h-5 w-7" />
                <span className="pl-2">Watch Later</span>
              </Link>
            </li>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <BsChevronDown className="h-5 w-7" />
                <span className="pl-2">Show more</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="border-t-2 pt-2">
          <span className="font-bold">Explore</span>
          <ul>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <HiOutlineFire className="h-5 w-7" />
                <span className="pl-2">Trending</span>
              </Link>
            </li>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <MdOutlineShoppingBag className="h-5 w-7" />
                <span className="pl-2">Shopping</span>
              </Link>
            </li>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <MdOutlineMusicNote className="h-5 w-7" />
                <span className="pl-2">Music</span>
              </Link>
            </li>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <MdOutlineMovie className="h-5 w-7" />
                <span className="pl-2 w-36">Movies & Shows</span>
              </Link>
            </li>

            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <FiRadio className="h-5 w-7" />
                <span className="pl-2">Live</span>
              </Link>
            </li>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <SiYoutubegaming className="h-5 w-7" />
                <span className="pl-2">Gaming</span>
              </Link>
            </li>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <HiOutlineNewspaper className="h-5 w-7" />
                <span className="pl-2">News</span>
              </Link>
            </li>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <IoTrophyOutline className="h-5 w-7" />
                <span className="pl-2">Sports</span>
              </Link>
            </li>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <MdLightbulbOutline className="h-5 w-7" />
                <span className="pl-2">Learning</span>
              </Link>
            </li>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <TbHanger className="h-5 w-7" />
                <span className="pl-2">Fashon & Beauty</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="border-t-2 pt-2">
          <span className="font-bold">More From YouTube</span>
          <ul>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <img
                  className="h-[20px] w-5"
                  src={youtubeLogo}
                  alt="youtubeLogo"
                />
                <span className="pl-2">YouTube Premium</span>
              </Link>
            </li>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <img
                  className="h-[20px] w-5"
                  src={youtubeStudio}
                  alt="youtubeStudio"
                />
                <span className="pl-2">YouTube Studio</span>
              </Link>
            </li>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <img
                  className="h-[20px] w-5"
                  src={youtubeMusic}
                  alt="youtubeMusic"
                />
                <span className="pl-2">YouTube Music</span>
              </Link>
            </li>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <img
                  className="h-[20px] w-5"
                  src={youtubeKids}
                  alt="youtubeKids"
                />
                <span className="pl-2">YouTube Kids</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="border-t-2 pt-2">
          <ul>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <IoSettingsOutline className="h-5 w-7" />
                <span className="pl-2">Settings</span>
              </Link>
            </li>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <RiFlagLine className="h-5 w-7" />
                <span className="pl-2">Report history</span>
              </Link>
            </li>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <TfiHelpAlt className="h-5 w-7" />
                <span className="pl-2">Help</span>
              </Link>
            </li>
            <li>
              <Link className="flex hover:bg-gray-200 rounded-lg px-5 py-2 mb-1 items-center">
                <RiFeedbackLine className="h-5 w-7" />
                <span className="pl-2">Send feedback</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ClosedSidebar = () => {
  return (
    <div className=" bg-blue-200">
      <div className="w-14 h-screen z-10 fixed border-r-2">
        <ul>
          <li className="py-1 mt-1">
            <Link to="/">
              <div className="flex justify-center">
                <div className="nav hover:bg-slate-300 bg-slate-300 px-4 py-2 rounded-full">
                  <AiFillHome />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/shorts"
              className="flex hover:bg-slate-300 rounded-full px-4 py-2 m-1"
            >
              <img className="h-[17px]" src={shorts} alt="shorts" />
            </Link>
          </li>
          <li>
            <Link
              to="/subsriptions"
              className="flex hover:bg-slate-300 rounded-full px-4 py-2 m-1"
            >
              <MdOutlineSubscriptions className="h-5 w-7" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
