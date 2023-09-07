import axios from "axios";
import { getFileDataUrl } from "./ImageTools";
import Image from "../../shared/entities/Image";

interface ImageData {
  id: number;
  name: string;
  ext: string;
  percent: number;
  dataUrl: string;
}

class ImageService {
  http = axios.create({
    baseURL: "https://figma-compression-plugin.ncodyco.workers.dev",
  });

  compress = async (image: Image) => {
    const tblob = new Blob([image.image.buffer]);
    const dataUrl = await getFileDataUrl(tblob);

    const body: ImageData = {
      id: image.id,
      name: image.name,
      ext: image.ext,
      percent: 90,
      dataUrl: dataUrl,
    };

    return this.http
      .post<ImageData>("/", body)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.message);
      });
  };
}

export default new ImageService();
