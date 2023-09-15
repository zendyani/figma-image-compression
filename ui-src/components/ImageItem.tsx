import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters, AiOutlineCheck } from "react-icons/ai"
import { ImageSize } from "../lib/ImageTools";
import slugify from 'slugify'
import ImagesState from "../intrerfaces/ImagesState";
import useImagesStore from "../store";
import Error, { ErrorType } from "./Error";

const ImageItem = ({ id, name, ext, raw: image, suffix, checked, loading }: ImagesState) => {
  const { updateProperty } = useImagesStore()
  const [imgSize, setImgSize] = useState('')
  const [error, setError] = useState<ErrorType | null>(null)

  useEffect(() => {
    ImageSize(image).then(res => {
      setImgSize(res)

      // Set error
      if (parseInt(res) > 4) {
        setError("size")
      }

    });
  }, [])

  return (
    <>
      <div className={`image-container ${error ? 'dangerNote': ''}`}>
        <div className="form-check">
          <label className="form-check-label second-text-color">
            <input className="form-check-input" type="checkbox"
              onChange={(e) => updateProperty(id, 'checked', e.target.checked)}
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
            <AiOutlineLoading3Quarters className="rotate loading-icon icon-loading-color" />
          ) : loading === false ? (
            <AiOutlineCheck color="green" className="success-icon icon-success-color" />
          ) : (null)}
        </div>
      </div>
      {error && <Error type={error}/>}
    </>
  );
};

export default ImageItem;
