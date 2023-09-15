import { useState } from "react";
import Image from "../../shared/entities/Image";
import useImagesStore from "../store";
import triggerZipFileDownload from "../lib/triggerZipFileDownload";
import handleZipGeneration from "../lib/handleZipGeneration";

const UseDownload = () => {
  const { imagesData, updateProperty, setError } = useImagesStore();
  const [downloading, setDownloading] = useState(false);

  const download = async () => {
    try {
      const selected: Image[] = imagesData.filter((img) => img.checked);

      if (selected.length === 0) {
        return;
      }

      setDownloading(true);

      const b64ZipFiles = await handleZipGeneration(selected, updateProperty);

      if (b64ZipFiles !== "") {
        triggerZipFileDownload(b64ZipFiles);
      }

      // Reset all loading to null
      for (const img of imagesData) {
        updateProperty(img.id, "loading", null);
      }

      setDownloading(false);
    } catch (error) {
      setError("An error occured when trying to compress the images");
    }

    // Reset all loading to null
    for (const img of imagesData) {
      updateProperty(img.id, "loading", null);
    }

    setDownloading(false);
  };
  return { downloading, download };
};

export default UseDownload;
