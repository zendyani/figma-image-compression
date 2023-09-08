import React, { useState } from "react";
import { HiDownload } from 'react-icons/hi'
import useDownload from "../hooks/UseDownload";

const DownloadAllButton = () => {
  const {download, downloading, error} = useDownload()

  return (
    <div
      className="d-flex flex-row justify-content-between align-items-center w-100 border-top border-light-gray-2 light-gray-1"
      style={{ padding: "10px 20px", bottom: "0" }}
      data-component="downloadComponent"
    >
      <h6 className="h6 text-color"></h6>
      {error && <p>{error}</p>}
      <button
        className="btn success-color"
        disabled={downloading}
        onClick={() => {
          download()
        }}>
        <HiDownload />
        <span
          className="btn-text light-text-color"
          style={{ marginLeft: "5px" }}
        >
          {downloading ? 'Downloading...' : 'Download All'}
        </span>
      </button>
    </div>
  );
};

export default DownloadAllButton;
