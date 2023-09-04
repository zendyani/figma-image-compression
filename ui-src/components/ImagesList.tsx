import React, { useState } from "react";
import ImageItem from "./ImageItem";
import Image from "../entities/Image";

interface Props {
  images: Image[];
}

const ImagesList = ({ images }: Props) => {
  const [selectedImg, setSelectedImg] = useState(0);

  return (
    <>
      <div
        className="d-flex flex-row justify-content-between align-items-center w-100 border-bottom border-light-gray-2 light-gray-1"
        style={{ padding: "10px 20px" }}
      >
        <div className="form-check" data-component="imagesSelection">
          <input
            className="form-check-input"
            id="flexCheckDefault"
            type="checkbox"
          />
          <label
            className="form-check-label second-text-color"
            htmlFor="flexCheckDefault"
            id="selected-images"
          >
            0 of {selectedImg} Selected
          </label>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-start align-items-start w-100 light-background-color">
        {images.map((image) => (
          <ImageItem {...image} />
        ))}
      </div>
    </>
  );
};

export default ImagesList;
