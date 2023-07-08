import axios from "react";
import AppCSS from "../App/App.css"

function GalleryItem({ galleryItem }) {
    
  return (
    <div className="image-size">
      <img src={galleryItem.path} alt={galleryItem.description} />
    </div>
  );
}

export default GalleryItem;
