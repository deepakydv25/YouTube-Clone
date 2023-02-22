import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-md flex-wrap">
      <img
        className="h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="flex flex-col">
        <span className="font-bold px-2">{name}</span>
        <span className="px-2">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
