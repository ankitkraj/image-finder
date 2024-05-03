import React from "react";
import { UserImageContext } from "../context/UserImageContext";
import { useContext } from "react";

function UserDisplay() {
  const {
    imagesData,
    setImageDisplay,
    setImageTopic,
    setManualSearch,
    userDetail,
    setImageSearched,
  } = useContext(UserImageContext);

  const imageOverlayHandle = () => {
    setImageDisplay(false);
    setImageTopic("");
    setManualSearch(false);
    setImageSearched(false);
  };
  return (
    <div className="image-display">
      <div className="user-details">
        <h2>User Details</h2>
        <p>Name: {userDetail.firstName}</p>
        <p>Surname: {userDetail.surName}</p>
        <div className="selected-image">
          <img src={imagesData} alt="Selected" />
        </div>
        <button onClick={imageOverlayHandle}>Close</button>
      </div>
    </div>
  );
}

export default UserDisplay;
