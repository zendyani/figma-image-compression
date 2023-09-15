import JSZip from "jszip";
import Image from "../../shared/entities/Image";
import { ImageSize } from "./ImageTools";
import ImageService from "../services/ImageService";

/**
 * Generate a Zip file from a list of Images
 * @param images 
 * @param updateLoadingState 
 * @returns 
 */
const handleZipGeneration = async (
  images: Image[],
  updateLoadingState: (id: number, property: "loading", val: boolean) => void
): Promise<string> => {
  const zip = new JSZip();

  // Update loading when compressing
  for (const img of images) {
    // Check Size
    const size = await ImageSize(img.raw);

    if (parseInt(size) <= 4) {
      // Update loading when compressing
      updateLoadingState(img.id, "loading", true);

      const response = await ImageService.compress(img);
      const dataImg = response.dataUrl.split("base64,")[1];

      // Add the compressed result to the zip files
      zip.file(`${response.name}${img.suffix}.${response.ext}`, dataImg, {
        base64: true,
      });

      // Finish loading
      updateLoadingState(img.id, "loading", false);
    }
  }

  if (Object.keys(zip.files).length > 0) {
    return zip.generateAsync({ type: "base64" });
  }

  return "";
};

export default handleZipGeneration;
