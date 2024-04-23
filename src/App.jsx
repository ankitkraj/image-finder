import { useEffect, useState } from "react";
import "./App.css";
import UserDisplay from "./components/UserDisplay";

function App() {
  const [userDetail, setUserDetail] = useState({});
  const [imageTopic, setImageTopic] = useState("");
  const [imagesData, setImagesData] = useState([]);
  const [manualSearch, setManualSearch] = useState(false);
  const [imageDisplay, setImageDisplay] = useState(false);

  const unsplashAccessKey = "13CxL9coKcN__VvWbVP44wkrlJaCOr7K3-NplIPZiOA";
  const url = `https://api.unsplash.com/search/photos?page=1&query=${imageTopic}`;

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

  useEffect(() => {
    if (imageTopic) {
      fetchImage();
    }
  }, [imageTopic]);

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

  const acceptHandle = () => {
    setImageDisplay(true);
  };

  const rejectHandle = () => {
    setImageDisplay(false);
    setImageTopic("");
  };

  const imageOverlayHandle = () => {
    setImageDisplay(false);
    setImageTopic("");
    setManualSearch(false);
  };

  // console.log("userDetail", userDetail);
  // console.log("imageTopic", imageTopic);
  console.log("imagesData", imagesData);

  return (
    <>
      <div className="main">
        <h1>Image finder</h1>
        <div className="user-input">
          <form>
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
          </form>
        </div>
        <br />
        <br />

        {imageTopic && (
          <div className="image-select">
            <img src={imagesData} alt="Image searched" />
            <br />

            <button onClick={acceptHandle}>Accept</button>
            <button onClick={rejectHandle}>Reject</button>
          </div>
        )}

        {imageDisplay && (
          <UserDisplay
            userDetail={userDetail}
            imagesData={imagesData}
            imageOverlayHandle={imageOverlayHandle}
          />
        )}
      </div>
    </>
  );
}

export default App;
