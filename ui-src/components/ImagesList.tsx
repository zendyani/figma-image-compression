import React from "react";
import ImageItem from "./ImageItem";
import Image from "../../shared/entities/Image";
import useSelection from "../hooks/UseSelection";

interface Props {
  images: Image[];
}

const ImagesList = ({ images }: Props) => {
  const {selectedImg, imagesState, checkAll, updateSelection} = useSelection(images);
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
            onChange={(e) => checkAll(e.target.checked)}
            checked={selectedImg === imagesState.length}
          />
          <label
            className="form-check-label second-text-color"
            htmlFor="flexCheckDefault"
            id="selected-images"
          >
            {selectedImg} of {imagesState.length} Selected
          </label>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-start align-items-start w-100 light-background-color">
        {imagesState.map((image) => (
          <ImageItem key={image.id} {...image} onSelected={updateSelection} />
        ))}
      </div>
    </>
  );
};

export default ImagesList;
