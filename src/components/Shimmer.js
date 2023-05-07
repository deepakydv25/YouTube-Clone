import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(50)
        .fill("")
        .map((e, index) => (
          <div key={index} className="">
            <div className="h-[170px] w-[270px] m-5 bg-slate-200 rounded-md"></div>
            <div className="flex flex-row">
              <div className="h-[35px] w-[35px] mx-5 rounded-full bg-slate-200"></div>
              <div className="flex flex-col">
                <div className="h-[20px] w-[200px] bg-slate-200 mb-2"></div>
                <div className="h-[20px] w-[200px] bg-slate-200"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
