import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12 ml-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
