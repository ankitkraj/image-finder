import React from "react";

function UserDisplay({ userDetail, imagesData, imageOverlayHandle }) {
  return (
    <div className="image-display" onClick={imageOverlayHandle}>
      <div className="user-details">
        <h2>User Details</h2>
        <p>Name: {userDetail.firstName}</p>
        <p>Surname: {userDetail.surName}</p>
        <div className="selected-image">
          <img src={imagesData} alt="Selected" />
        </div>
      </div>
    </div>
  );
}

export default UserDisplay;
