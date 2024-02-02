import React from 'react';
import './Css/Home.css'

function Home() {
  return (
    <>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active"  data-bs-interval="5000">
            <img src="https://images.pexels.com/photos/17485683/pexels-photo-17485683/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-illustration-depicts-how-ai-could-be-used-in-the-field-of-sustainability-from-biodiversity-to-climate-it-was-created-by-nidi.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item"  data-bs-interval="2000">
            <img src="https://images.pexels.com/photos/17483868/pexels-photo-17483868/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/17483867/pexels-photo-17483867/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Home;
