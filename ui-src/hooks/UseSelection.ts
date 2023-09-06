import { useEffect, useState } from "react";
import Image from "../../shared/entities/Image";

const UseSelection = (images: Image[]) => {
  // State to keep track of the number of selected images
  const [selectedImg, setSelectedImg] = useState(0);
  // State to keep track of the images and their selection status
  const [imagesState, setImagesState] = useState<Image[]>([]);

  // Effect to update imagesState whenever images prop changes
  useEffect(() => {
    setImagesState(images);
  }, [images]);

  // Effect to update the selected image count when the imagesState changes
  useEffect(() => {
    const count = imagesState.filter((img) => img.checked).length;
    setSelectedImg(count);
  }, [imagesState]);

  // Function to update the selection status of an individual image
  const updateSelection = (id: number, val: boolean) => {
    // Create a new array with updated image selection
    const updatedImages = imagesState.map((image) => {
      if (image.id === id) {
        return { ...image, checked: val };
      }
      return image;
    });
    // Update the imagesState with the new array
    setImagesState(updatedImages);
  };

  const updateLoading = (id: number, val: boolean) => {
    const updatedImages = imagesState.map(image => {
      if (image.id === id) {
        return {...image, loading: val}
      }
      return image
    })
    // console.log(updatedImages)
    // Update the imagesState with the new array
    setImagesState(updatedImages);
  }

  // Function to toggle the selection status of all images
  const checkAll = (val: boolean) => {
    const updatedImages = imagesState.map((image) => ({
      ...image,
      checked: val,
    }));
    setImagesState(updatedImages);
  };

  return {
    selectedImg,
    imagesState,
    checkAll,
    updateSelection,
    updateLoading
  };
};

export default UseSelection;
