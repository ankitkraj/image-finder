import React from "react";
import { UserImageContext } from "../context/UserImageContext";
import { useContext } from "react";

function ImageDisplay() {
  const { imagesData, setImageDisplay, setImageTopic } =
    useContext(UserImageContext);

  const acceptHandle = () => {
    setImageDisplay(true);
  };

  const rejectHandle = () => {
    setImageDisplay(false);
    setImageTopic("");
  };

  return (
    <div>
      <div className="image-select">
        <img src={imagesData} alt="Image searched" />
        <br />

        <button onClick={acceptHandle}>Accept</button>
        <button onClick={rejectHandle}>Reject</button>
      </div>
    </div>
  );
}

export default ImageDisplay;
