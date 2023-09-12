import React, { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import ImagesList from "./components/ImagesList";
import Image from "../shared/entities/Image";
import HelpNotice from "./components/HelpNotice";
import useImagesStore from "./store";

interface EventData {
  data: {
    pluginId: string,
    pluginMessage: {
      type: string,
      data: { images: Image[] }
    }
  }
}

function App() {
  const { setImagesData } = useImagesStore()

  useEffect(() => {
    const handleMessage = (event: EventData) => {
      // Handle the received data here
      if (event.data.pluginMessage) {
        const { data } = event.data.pluginMessage;

        // Add states properties to images
        const flattenedImage = data.images.flat().map(img => ({ ...img, checked: false, loading: null }));

        console.log(flattenedImage)

        setImagesData(flattenedImage)
      }
    };

    window.addEventListener('message', handleMessage);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <>
      {/* <Menu /> */}
      <HelpNotice />
      <div className="d-flex flex-column justify-content-start align-items-start w-100 page-container">
        <ImagesList />
      </div>
    </>
  );
}

export default App;
