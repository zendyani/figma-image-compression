import React from "react";
import {AiOutlineLoading3Quarters, AiOutlineCheck} from "react-icons/ai"
import "./Image.css";

interface Props {
  id: number;
  name: string;
  ext: string;
  size: string;
  checked: boolean;
  onSelected: (id: number, val: boolean) => void
}

const ImageItem = ({id,  name, ext, size, checked, onSelected }: Props) => {
  
  return (
    <div className="image-container">
      <div className="form-check">
        <label className="form-check-label second-text-color">
          <input className="form-check-input" type="checkbox"
            onChange={(e) => onSelected(id, e.target.checked)}
            checked={checked}
          />
          {name}
        </label>
      </div>

      <div className="image-details">
        <small className="small second-text-color">{ext?.toUpperCase()}</small>
        <h6 className="h6 second-text-color" style={{ marginLeft: "15px" }}>
          {size?.toUpperCase()}
        </h6>
        <AiOutlineLoading3Quarters className="rotate loading-icon"/>
        <AiOutlineCheck className="success-icon"/>
      </div>
    </div>
  );
};

export default ImageItem;
