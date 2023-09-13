import React, { useEffect, useState } from "react";
import "./App.css";
import ImagesList from "./components/ImagesList";
import Image from "../shared/entities/Image";
import useImagesStore from "./store";
import SplasherScreen from "./components/SplasherScreen";

interface EventData {
  data: {
    pluginId: string,
    pluginMessage: {
      type: string,
      data: {
        images: Image[],
        loadingNewSelection: boolean
      }
    }
  }
}

function App() {
  const { imagesData, setImagesData } = useImagesStore()

  useEffect(() => {
    const handleMessage = (event: EventData) => {
      // Handle the received data here
      if (event.data.pluginMessage) {
        const { data, type } = event.data.pluginMessage
        if (data.images) {
          // Add states properties to images
          const flattenedImage = data.images?.flat().map(img => ({ ...img, checked: false, loading: null }));
          setImagesData(flattenedImage)
        }
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
      {imagesData.length > 0 ? <ImagesList /> : <SplasherScreen />}
    </>
  );
}

export default App;
