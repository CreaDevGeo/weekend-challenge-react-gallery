import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // - USE STATES -
  // Use state for galleryItems array
  const [galleryItems, setGalleryItems] = useState([]);

  // GET request to server for galleryItems array
  const getGalleryItems = () => {
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((response) => {
        // Entire response
        console.log("\nGet request to '/gallery' sent! Response is:", response);

        // Setting galleryItems to array that was retrieved
        setGalleryItems(response.data);
        console.log("\tResponse stored. galleryItems is:", response.data);
      })
      .catch((error) => {
        console.log("\nError with GET request. Error is:", error);
        alert("Uh-oh! Error loading gallery.");
      });
  };

  // - On DOM LOAD run... -
  // Call function so it runs once on component load
  // Similar to jQuery's document ready
  useEffect(() => {
    getGalleryItems();
  }, []);


  // - RENDERING -
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Amazing Art Gallery</h1>
      </header>
      <main>
        <section className="image-gallery">
          <div className="image-size">
            <img src="images/black-silhouettes.jpg" />
          </div>
          <div className="image-size">
            <img src="images/mask.jpg" />
          </div>
          <div className="image-size">
            <img src="images/overwhelming-love.jpg" />
          </div>
          <div className="image-size">
            <img src="images/pumpkin-knight.jpg" />
          </div>
          <div className="image-size">
            <img src="images/smiling-purple-face.jpg" />
          </div>
          <div className="image-size">
            <img src="images/spooky-surprise.jpg" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
