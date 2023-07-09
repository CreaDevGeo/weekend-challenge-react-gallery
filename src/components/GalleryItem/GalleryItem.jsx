import axios from "axios";
import AppCSS from "../App/App.css";
import { useState } from "react";

function GalleryItem({ galleryItem }) {
  // Use states
  const [showImage, setShowImage] = useState(true);

  const handleShowDescription = () => {
    console.log("Image clicked!");
    setShowImage(!showImage);
  };

  return (
    <div onClick={handleShowDescription} >
      {showImage ? (
        <>
            <div className="image-box">
                <img src={galleryItem.path} alt={galleryItem.description} />
            </div>
                <div><p>Likes: {galleryItem.likes} ❤️</p></div>
        </>
        
      ) : (
        <p className="image-description">{galleryItem.description}</p>
      )}
    </div>
  );
}

export default GalleryItem;
