import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

// Component Imports
import GalleryList from "../GalleryList/GalleryList.jsx";

function App() {
  // - USE STATES -
  // Use state for galleryList array
  const [galleryList, setGalleryList] = useState([]);

  // GET request to server for galleryList array
  const getGalleryList = () => {
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((response) => {
        // Entire response
        console.log("\nGet request to '/gallery' sent! Response is:", response);

        // Setting galleryList to array that was retrieved
        setGalleryList(response.data);
        console.log("\tResponse stored. galleryList is:", response.data);
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
    getGalleryList();
  }, []);

  // - RENDERING -
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Amazing Art Gallery</h1>
      </header>
      <main>
        <section className="image-gallery">
          
          {/* GalleryList Component 
            - using galleryList array as a prop */}
          <GalleryList galleryList={galleryList} />
        </section>
      </main>
    </div>
  );
}

export default App;
