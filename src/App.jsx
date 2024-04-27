import "./App.css";
import React, { useContext } from "react";
import UserDisplay from "./components/UserDisplay";
import UserForm from "./components/UserForm";
import ImageDisplay from "./components/ImageDisplay";
import { UserImageContext } from "./context/UserImageContext";

function App() {
  const {
    imageTopic,
    imageDisplay,
    userDetail,
    imagesData,
    imageOverlayHandle,
  } = useContext(UserImageContext);
  return (
    <div className="main">
      <h1>Image finder</h1>
      <UserForm />
      {imageTopic && <ImageDisplay />}
      {imageDisplay && (
        <UserDisplay
          userDetail={userDetail}
          imagesData={imagesData}
          imageOverlayHandle={imageOverlayHandle}
        />
      )}
    </div>
  );
}

export default App;
