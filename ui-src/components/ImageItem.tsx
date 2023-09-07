import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters, AiOutlineCheck } from "react-icons/ai"
import "./Image.css";
import { ImageSize } from "../services/ImageTools";
import slugify from 'slugify'
import Image from "../../shared/entities/Image";

interface Props extends Image {
  onSelected: (id: number, val: boolean) => void
}

const ImageItem = ({ id, name, ext, image, suffix, checked, loading, onSelected }: Props) => {
  const [imgSize, setImgSize] = useState('')

  useEffect(() => {
    ImageSize(image).then(res => {
      setImgSize(res)
    });
  }, [])

  return (
    <div className="image-container">
      <div className="form-check">
        <label className="form-check-label second-text-color">
          <input className="form-check-input" type="checkbox"
            onChange={(e) => onSelected(id, e.target.checked)}
            checked={checked}
          />
          {slugify(`${name}-${suffix}`)}
        </label>
      </div>

      <div className="image-details">
        <small className="small second-text-color">{ext?.toUpperCase()}</small>
        <h6 className="h6 second-text-color" style={{ marginLeft: "15px" }}>
          {imgSize} MB
        </h6>
        {loading === true ? (
          <AiOutlineLoading3Quarters className="rotate loading-icon" />
        ) : loading === false ? (
          <AiOutlineCheck className="success-icon" />
        ): (null)}
      </div>
    </div>
  );
};

export default ImageItem;
