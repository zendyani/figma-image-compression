import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import DownloadAllButton from "./components/DownloadAllButton";
import ImagesList from "./components/ImagesList";

const images = [
  { id: 1, name: "image 1", ext: "png", size: "1 mb", checked: false },
  { id: 2, name: "image 2", ext: "png", size: "1.1 mb", checked: false },
  { id: 3, name: "image 3", ext: "png", size: "0.1 mb", checked: false },
  { id: 4, name: "image 4", ext: "png", size: "2.1 mb", checked: false },
  { id: 5, name: "image 5", ext: "png", size: "0.5 mb", checked: false },
];

function App() {
  return (
    <>
      <Menu />
      <div
        className="d-flex flex-column justify-content-start align-items-start w-100 page-container"
        id="images_container"
      >
        <ImagesList images={images} />
        <DownloadAllButton />
      </div>
    </>
  );
}

export default App;
