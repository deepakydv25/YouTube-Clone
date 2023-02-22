import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);
  return (
    <form
      className=""
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          addMessage({
            name: "Deepak Yadav",
            message: liveMessage,
          })
        );
        setLiveMessage("");
      }}
    >
      <div className="w-full h-[575px] border border-black bg-slate-50 rounded-lg mx-2 p-2 overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <div className="w-full border border-black ml-2 mt-1 p-2">
        <input
          className="w-[310px] px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="mx-2 bg-green-100 px-2">Send</button>
      </div>
    </form>
  );
};

export default LiveChat;
