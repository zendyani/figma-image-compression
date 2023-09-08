import React from "react";
import ImageItem from "./ImageItem";
import DownloadAllButton from "./DownloadAllButton";
import useImagesStore from "../store";

const ImagesList = () => {

  const { imagesData, checkAll } = useImagesStore()
  const checkedImages = imagesData.filter(i => i.checked)
  
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
            checked={checkedImages.length === imagesData.length}
          />
          <label
            className="form-check-label second-text-color"
            htmlFor="flexCheckDefault"
            id="selected-images"
          >
            {checkedImages.length} of {imagesData.length} Selected
          </label>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-start align-items-start w-100 light-background-color">
        {imagesData.map((image) => (
          <ImageItem key={image.id} {...image} />
        ))}
      </div>
      <DownloadAllButton />
    </>
  );
};

export default ImagesList;
