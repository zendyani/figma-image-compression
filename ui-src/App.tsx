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
    {/* Loading Box */}
    <div className="LoadingBox">
      <div className="rotateIcon">
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
          <path d="M12 60.0001V39H33L23.349 48.66C26.6789 52.0651 31.2374 53.9892 36 54C43.6183 53.9888 50.4046 49.1827 52.944 42H52.998C53.3416 41.0239 53.6016 40.0202 53.775 39H59.811C58.2992 50.9997 48.0946 59.9996 36 60.0001H35.97C29.6063 60.019 23.4995 57.4912 19.011 52.98L12 60.0001ZM18.222 33H12.186C13.6972 21.0048 23.895 12.0064 35.985 11.9999H36C42.3649 11.9795 48.4732 14.5075 52.962 19.02L60 11.9999V33H39L48.666 23.34C45.3327 19.9309 40.7679 18.0064 36 18C28.3817 18.0112 21.5954 22.8173 19.056 30H19.002C18.6557 30.9753 18.3957 31.9792 18.225 33H18.222Z" fill="white"/>
        </svg>
      </div>
    </div>
    {/* Starter screen */}
    <div id="splashScreen" className="text-center">
      <div id="i-icon" style={{ paddingBottom:'15px'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 40 40" fill="none">
          <path d="M19.9999 36.6666C10.7952 36.6666 3.33325 29.2047 3.33325 20C3.33325 10.7952 10.7952 3.33331 19.9999 3.33331C29.2047 3.33331 36.6666 10.7952 36.6666 20C36.6565 29.2005 29.2005 36.6565 19.9999 36.6666ZM18.3333 28.3333V31.6666H21.6666V28.3333H18.3333ZM19.9999 11.6666C21.8409 11.6666 23.3333 13.159 23.3333 15C23.3391 15.8845 22.984 16.7332 22.3499 17.35L20.2833 19.45C19.0357 20.7028 18.3346 22.3985 18.3333 24.1666V25H21.6666C21.5371 23.2083 22.2597 21.4604 23.6166 20.2833L25.1166 18.75C26.1134 17.7572 26.6715 16.4068 26.6666 15C26.6666 11.3181 23.6818 8.33331 19.9999 8.33331C16.318 8.33331 13.3333 11.3181 13.3333 15H16.6666C16.6666 13.159 18.159 11.6666 19.9999 11.6666Z" fill="#2DC071"/>
        </svg>
      </div>
      <p className="h5 text-color" style={{ paddingBottom:'15px'}}>No selected frame or image have export settings: </p>
      <p className="p text-color"style={{ paddingBottom:'5px'}}>1 - Select a frame or an image layer</p>
      <p className="p text-color"style={{ paddingBottom:'5px'}}>2 - Click + in the export section </p>
      <p className="p text-color"style={{ paddingBottom:'5px'}}>3 - Add your Export Settings</p>
    </div>
    {/* Format exceeded Alert */}
    <div className="dangerNote danger-color" style={{ padding: '10px 20px'}}>
      <p className="light-text-color">
        <strong style={{ fontWeight: '900'}}>Exceeded Size Limitation: </strong>Ensure image is under 4 MB.
      </p>
    </div>
    {/* Format Not supported Alert */}
    <div className="dangerNote danger-color" style={{ padding: '10px 20px'}}>
      <p className="light-text-color">
        <strong style={{ fontWeight: '900'}}>PDF Format not Supported: </strong>Ensure frame is JPG or PNG.
      </p>
    </div>

      {/* <Menu /> */}
      <HelpNotice />
      <div className="d-flex flex-column justify-content-start align-items-start w-100 page-container">
        <ImagesList />
      </div>
    </>
  );
}

export default App;
