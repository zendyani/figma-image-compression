import React from "react";
import Icon61 from "../img/icons/icon-61.svg?raw";

const DownloadAllButton = () => {
  return (
    <div
      className="d-flex flex-row justify-content-between align-items-center w-100 border-top border-light-gray-2 light-gray-1"
      style={{ padding: "10px 20px", bottom: "0" }}
      data-component="downloadComponent"
    >
      <h6 className="h6 text-color"></h6>
      <button className="btn success-color active" id="download-all">
        <img src={`data:image/svg+xml;utf8,${Icon61}`} />
        <span
          className="btn-text light-text-color"
          style={{ marginLeft: "5px" }}
        >
          Download All
        </span>
      </button>
    </div>
  );
};

export default DownloadAllButton;
