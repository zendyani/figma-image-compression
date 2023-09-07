import React, { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import DownloadAllButton from "./components/DownloadAllButton";
import ImagesList from "./components/ImagesList";
import Image from "../shared/entities/Image";
import HelpNotice from "./components/HelpNotice";

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
  const [images, setImages] = useState<Image[]>([])

  useEffect(() => {
    const handleMessage = (event: EventData) => {
      // Handle the received data here
      if (event.data.pluginMessage) {
        const { data } = event.data.pluginMessage;
        setImages(data.images.flat());
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
      <div
        className="d-flex flex-column justify-content-start align-items-start w-100 page-container"
        id="images_container"
      >
        <ImagesList images={images} />
      </div>
    </>
  );
}

export default App;
