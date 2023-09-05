import ExportedImage from "../interfaces/ExportedImage";
import ExtractImages from "./ExtractImages";

export default async function ExtractImagesFrame(frame: SceneNode[], container: ExportedImage[][] = []) {
    for (const node of frame) {
      const data: ExportedImage[] = await ExtractImages(node);
      if (data.length > 0) {
        container.push(data);
      }
  
      if (node.type === 'FRAME' && node.children && node.children.length > 0) {
        await ExtractImagesFrame(node.children as SceneNode[], container);
      }
    }
  }