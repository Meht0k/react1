import React from 'react';
import './Css/Services.css'
import { Link } from 'react-router-dom';

function Service() {
  return (
    <>
      <div className="container py-5" id="service">
        <div className="row py-5 mt-5">
          <div className='col'>
            <p className='display-4 fw-bold text-center'>What We Offer</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div class="card border-0 rounded-0 ">
              <img src="https://images.pexels.com/photos/17484899/pexels-photo-17484899/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-boundaries-set-in-place-to-secure-safe-accountable-biotechnology-it-was-created-by-khyati-trehan-as-pa.png" class="card-img-top" alt="..." />
              <div class="card-body px-0">
                <h5 class="card-title">The Power of AI Unleashed</h5>
                <p class="card-text">Revolutionize your business with cutting-edge AI solutions for unparalleled innovation and success.</p>
                <Link to="/" class="btn btn-outline-secondary stretched-link">Check Out</Link>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class="card border-0 rounded-0 ">
              <img src="https://images.pexels.com/photos/18069364/pexels-photo-18069364/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-help-understand-ecosystems-and-identify-species-it-was-created-by-nidia-dias-as-part-of-the-visua.png" class="card-img-top" alt="..." />
              <div class="card-body px-0">
                <h5 class="card-title">Smart Solutions, Smarter Future</h5>
                <p class="card-text">Empower your business with AI excellence for unparalleled innovation and success.</p>
                <Link to="/" class="btn btn-outline-secondary stretched-link">Check Out</Link>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class="card border-0 rounded-0 ">
              <img src="https://images.pexels.com/photos/17483906/pexels-photo-17483906/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-concept-of-artificial-general-intelligence-agi-it-was-created-by-domhnall-malone-as-part-of-the-visua.png" class="card-img-top" alt="..." />
              <div class="card-body px-0">
                <h5 class="card-title">AI Innovations Unleashed</h5>
                <p class="card-text">Transform your business through AI mastery, unlocking innovation and ensuring unparalleled success.</p>
                <Link to="/" class="btn btn-outline-secondary stretched-link">Check Out</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service;
