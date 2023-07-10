import axios from "axios";
import AppCSS from "../App/App.css";
import { useState } from "react";

function GalleryItem({ galleryItem, getGalleryList }) {
  // Use states
  const [showImage, setShowImage] = useState(true);

  // Function to handle the click event of the image
  const handleShowDescription = () => {
    console.log("Image clicked!");
    setShowImage(!showImage);
  };

  // Function to handle the click event of the like button
  // Using PUT request to add
  const handleLikeButton = () => {
    console.log("Like button clicked!");
    console.log("galleryItem id is:", galleryItem.id);
    console.log("getGalleryList is:", getGalleryList);
    

    // PUT request to add one like
    axios({
      method: "PUT",
      url: `/gallery/like/${galleryItem.id}`,
    })
      .then((response) => {
        console.log("Image was liked! Likes are now:", galleryItem.likes);

        // Running getGalleryList GET request to re-render DOM
        getGalleryList()
      })
      .catch((error) => {
        console.log("Error with PUT request to url '/like'. Error is:", error);
        alert("Oh no! There was an error liking the image.");
      });
  }; // end handleLikeButton

  return (
    <div className="gallery-item-container">
      {showImage ? (
        <>
          <div onClick={handleShowDescription} className="image-box">
            <img src={galleryItem.path} alt={galleryItem.description} />
          </div>
          <div className="like-section">
            <p>
              <strong>Likes:</strong> {galleryItem.likes}{" "}
            </p>
            <button onClick={handleLikeButton}>❤️</button>
          </div>
        </>
      ) : (
        <>
          <div onClick={handleShowDescription}>
            <p className="image-description">{galleryItem.description}</p>
          </div>
          <div className="like-section">
            <p>
              <strong>Likes:</strong> {galleryItem.likes}
            </p>
            <button onClick={handleLikeButton}>❤️</button>
          </div>
        </>
      )}
    </div>
  );
}

export default GalleryItem;
