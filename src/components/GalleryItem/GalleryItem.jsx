import axios from "react";
import AppCSS from "../App/App.css"
import {useState} from 'react';

function GalleryItem({ galleryItem }) {
    let [showImage, setShowImage] = useState('');


    const handleImageClick = () =>{
        console.log("Image clicked!");

    } // end handleImageClick

  return (
    // Div holding image with onClick that will run handleImageClick
    <div onClick={handleImageClick} className="image-size">
      <img src={galleryItem.path} alt={galleryItem.description} />
    </div>
  );
}

export default GalleryItem;
