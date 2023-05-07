import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="">
      <div className="mr-3">
        <ButtonList />
      </div>
      <div className="mt-2 mr-3">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
