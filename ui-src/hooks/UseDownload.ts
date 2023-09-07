import { useState } from "react";
import Image from "../../shared/entities/Image";
import JSZip from "jszip";
import ImageService from "../services/ImageService";
import { b64toBlob } from "../services/ImageTools";

const UseDownload = (
  images: Image[],
  updateLoading: (id: number, val: boolean) => void
) => {
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState("");

  const download = async () => {
    try {
      setDownloading(true);
      const selected: Image[] = images.filter((img) => img.checked);

      const zip = new JSZip();

      // Update loading when compressing
      for (const img of selected) {
        // Update loading when compressing
        updateLoading(img.id, true);

        const response = await ImageService.compress(img);
        const dataImg = response.dataUrl.split("base64,")[1];

        // Add the compressed result to the zip files
        zip.file(`${response.name}${img.suffix}.${response.ext}`, dataImg, {
          base64: true,
        });

        // Finish loading
        updateLoading(img.id, false);
      }

      zip.generateAsync({ type: "base64" }).then(function (base64) {
        const blob = b64toBlob(base64, "application/zip");
        const blobUrl = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = "export.zip";
        link.setAttribute("download", "export.zip");
        link.click();
        URL.revokeObjectURL(blobUrl);
        link.remove();
      });

      
    } catch (error) {
      setError("An error occured when trying to compress the images");
    }
    setDownloading(false);
  };
  return { downloading, download, error };
};

export default UseDownload;