import Image from "../../shared/entities/Image";

export default interface ImagesState extends Image {
  checked: boolean;
  loading: boolean | null;
}

