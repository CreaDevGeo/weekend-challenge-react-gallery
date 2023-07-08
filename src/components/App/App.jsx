import React from 'react';
import './App.css';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <main>
          <p>Gallery goes here</p>
          <section className='image-gallery'>
            <div className='image-size'><img src="images/black-silhouettes.jpg" /></div>
            <div className='image-size'><img src="images/mask.jpg" /></div>
            <div className='image-size'><img src="images/overwhelming-love.jpg" /></div>
            <div className='image-size'><img src="images/pumpkin-knight.jpg" /></div>
            <div className='image-size'><img src="images/smiling-purple-face.jpg" /></div>
            <div className='image-size'><img src="images/spooky-surprise.jpg" /></div>
          </section>
        </main>
      </div>
    );
}

export default App;
