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
      data: {
        images: Image[],
        loadingNewSelection: boolean
      }
    }
  }
}

function App() {
  const { setImagesData } = useImagesStore()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleMessage = (event: EventData) => {

      console.log(event.data.pluginMessage)

      // Handle the received data here
      if (event.data.pluginMessage) {
        const { data, type } = event.data.pluginMessage
        if (type === 'updateSelection' && data.loadingNewSelection) {
          // Enable loading
          setLoading(data.loadingNewSelection)
        } else {
          if (data.images) {
            // Add states properties to images
            const flattenedImage = data.images?.flat().map(img => ({ ...img, checked: false, loading: null }));
            setImagesData(flattenedImage)
          }
          // Disable loading
          setLoading(data.loadingNewSelection)
        }
      }
    };

    window.addEventListener('message', handleMessage);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [loading]);

  return (
    <>
      {/* <Menu /> */}
      <HelpNotice />
      <div className="d-flex flex-column justify-content-start align-items-start w-100 page-container">
        {loading && <p>Loading</p>}
        <ImagesList />
      </div>
    </>
  );
}

export default App;
