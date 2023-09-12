import ExportedImage from "../interfaces/ExportedImage";
import ExtractImagesFrame from "./ExtractImagesFrame";

export default async function ExtractImagesFromSelection() {
    const frame: readonly SceneNode[] = figma.currentPage.selection;
  
    if (frame.length === 0) {
      // throw new Error("You must select a frame");
      figma.ui.postMessage({
        type: "updateSelection",
        data: {
          loadingNewSelection: false,
          msg: "no frame selected"
        },
      });
      
    }
  
    // The need for double nested array is b/c each image can hav more than on export params
    const images: ExportedImage[][] = [];
    await ExtractImagesFrame(frame as SceneNode[], images);
  
    figma.ui.postMessage({
      type: "sendCompression",
      data: {
        images: images,
        loadingNewSelection: false,
      },
    });
  }