import React, { createContext, useState } from "react";

const UserImageContext = createContext();

const UserImageProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState({});
  const [imageTopic, setImageTopic] = useState("");
  const [imagesData, setImagesData] = useState([]);
  const [manualSearch, setManualSearch] = useState(false);
  const [imageDisplay, setImageDisplay] = useState(false);
  const [imageSearching, setImageSearching] = useState(false);
  const [imageSearched, setImageSearched] = useState(false);

  return (
    <UserImageContext.Provider
      value={{
        userDetail,
        imageTopic,
        imagesData,
        manualSearch,
        imageDisplay,
        imageSearching,
        imageSearched,
        setUserDetail,
        setImageTopic,
        setImagesData,
        setManualSearch,
        setImageDisplay,
        setImageSearching,
        setImageSearched,
      }}
    >
      {children}
    </UserImageContext.Provider>
  );
};

export { UserImageProvider, UserImageContext };
