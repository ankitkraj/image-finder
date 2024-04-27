import React, { useEffect } from "react";
import config from "../config";
import { UserImageContext } from "../context/UserImageContext";
import { useContext } from "react";

function UserForm() {
  const {
    imageTopic,
    imageSearching,
    setImagesData,
    setUserDetail,
    setManualSearch,
    setImageTopic,
    setImageDisplay,
    setImageSearching,
    manualSearch,
    imagesData,
    userDetail,
  } = useContext(UserImageContext);

  const unsplashAccessKey = config.unsplashApiKey;
  const url = `${config.URL}?page=1&query=${imageTopic}`;

  const fetchImage = () => {
    fetch(url, {
      headers: {
        Authorization: `Client-ID ${unsplashAccessKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setImagesData(data.results[0].urls.thumb);
      });
  };

  const firstNameHandler = (e) => {
    setUserDetail((pre) => ({ ...pre, firstName: e.target.value }));
  };

  const surNameHandler = (e) => {
    setUserDetail((pre) => ({ ...pre, surName: e.target.value }));
  };

  const imageSelectHandle = (e) => {
    const imageTopic = e.target.value;
    if (imageTopic === "Other") {
      setManualSearch(true);
    } else {
      setManualSearch(false);
    }
    setImageTopic(e.target.value);
  };

  const inputImageSearch = (e) => {
    setImageTopic(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!userDetail.firstName || !userDetail.surName) {
      alert("Please Enter Name and Surname ");
      return;
    }

    setImageSearching(true);
    if (imageSearching && imageTopic) {
      fetchImage();
    }
  };

  // console.log("userDetail", userDetail);
  // console.log("imageTopic", imageTopic);
  //   console.log("imagesData", imagesData);

  return (
    <div>
      <div className="user-input">
        <form onSubmit={submitHandler}>
          <div className="first-name">
            <label htmlFor="firstName"> First Name : </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter Name...."
              onChange={firstNameHandler}
            />
          </div>

          <div className="sur-name">
            <label htmlFor="surName"> Surname : </label>
            <input
              id="surName"
              type="text"
              placeholder="Enter surname...."
              onChange={surNameHandler}
            />
          </div>

          <div className="topic-select">
            <label htmlFor="image-option">Search the image:</label>
            <select
              id="image-option"
              onChange={imageSelectHandle}
              value={imageTopic}
            >
              <option value=""></option>
              <option value="Travel">Travel</option>
              <option value="Cars">Cars</option>
              <option value="Wildlife">Wildlife</option>
              <option value="Technology">Technology</option>
              <option value="Other">Other</option>
            </select>

            {manualSearch && (
              <div className="user-Input-image">
                <label htmlFor="inputImage">
                  {" "}
                  Please Specify the image Topic :{" "}
                </label>
                <input
                  id="inputImage"
                  type="text"
                  placeholder="Enter Image Name...."
                  onChange={inputImageSearch}
                />
              </div>
            )}
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
