import React from "react";
import { UserImageContext } from "../context/UserImageContext";
import { useContext } from "react";

function ImageDisplay() {
  const { imagesData, setImageDisplay, setImageTopic, setImageSearched } =
    useContext(UserImageContext);

  const acceptHandle = () => {
    setImageDisplay(true);
  };

  const rejectHandle = () => {
    setImageDisplay(false);
    setImageTopic("");
    setImageSearched(false);
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
