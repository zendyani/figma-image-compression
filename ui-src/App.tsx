import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import DownloadAllButton from "./components/DownloadAllButton";
import ImagesList from "./components/ImagesList";

function App() {
  return (
    <>
      <Menu />
      <div className="d-flex flex-column justify-content-start align-items-start w-100 page-container" id="images_container">
        <ImagesList />
        <DownloadAllButton />
      </div>
    </ >
  );
}

export default App;
