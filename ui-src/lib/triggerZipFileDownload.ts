import { b64toBlob } from "../../shared/ImageTools";

/**
 * Generate and trigger a click event on a link for exporting a zip file
 * @param b64ZipFiles
 */
const triggerZipFileDownload = (b64ZipFiles: string) => {
  const blob = b64toBlob(b64ZipFiles, "application/zip");
  const blobUrl = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = "export.zip";
  link.setAttribute("download", "export.zip");
  link.click();
  URL.revokeObjectURL(blobUrl);
  link.remove();
};

export default triggerZipFileDownload;
