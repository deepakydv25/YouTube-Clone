import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name={"ALL"} />
      <Button name={"Cricket"} />
      <Button name={"Gaming"} />
      <Button name={"News"} />
      <Button name={"Musics"} />
      <Button name={"Live"} />
      <Button name={"ALL"} />
    </div>
  );
};

export default ButtonList;
