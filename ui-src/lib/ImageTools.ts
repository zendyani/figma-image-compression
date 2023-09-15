/**
 * Converts a File object to a Data URL asynchronously.
 *
 * @param file - The Blob object to convert to a Data URL.
 * @returns A Promise that resolves with the Data URL when the conversion is complete.
 */
export const getFileDataUrl = async (file: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (evt) => {
      if (evt.target && typeof evt.target.result === "string") {
        resolve(evt.target.result);
      } else {
        reject(new Error("Failed to read file as Data URL."));
      }
    };

    reader.onerror = () => {
      reject(new Error("An error occurred while reading the file."));
    };

    reader.readAsDataURL(file);
  });
};

export const ImageSize = async (image: Uint8Array): Promise<string> => {
  // Calculate size
  const tblob = new Blob([image.buffer]);
  const dataUrl: string = await getFileDataUrl(tblob);
  const base64str = atob(dataUrl.split("base64,")[1]);
  return (base64str.length / 1024 / 1024).toFixed(2);
};

export const b64toBlob = (b64Data: string, contentType = '', sliceSize = 512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
}