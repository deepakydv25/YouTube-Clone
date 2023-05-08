import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS } from "../config";

const Comments = () => {
  const [comment, setComments] = useState();

  useEffect(() => {
    getCommentDetails();
  }, []);

  const getCommentDetails = async () => {
    let data = await fetch(YOUTUBE_COMMENTS);
    let json = await data.json();
    setComments(json.items);
    console.log("Comment- ", json.items);
  };

  return (
    <div className="font-bold bg-slate-100 rounded-md">
      <span className="ml-1">Comments</span>
      <div>
        {comment &&
          comment.map((item) => (
            <div key={item.id} className="flex m-2 items-center bg-slate-200">
              <img
                className="h-10 rounded-full mr-1"
                src={item.snippet.authorProfileImageUrl}
              />
              <div className="flex flex-col">
                <div className="font-bold">
                  {item.snippet.authorDisplayName}
                </div>
                <div className="font-semibold ml-1">
                  {item.snippet.textDisplay}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comments;
