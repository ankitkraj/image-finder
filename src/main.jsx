import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserImageProvider } from "./context/UserImageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserImageProvider>
      <App />
    </UserImageProvider>
  </React.StrictMode>
);
