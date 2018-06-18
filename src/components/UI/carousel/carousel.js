import React from 'react';
import './carousel.css';

const carousel = props => {
  return (
    <div 
      id="carouselHeader"
      class="carousel slide"
      data-ride="carousel" 
      data-interval="50000"
    >
      <ol class="carousel-indicators">
        <li data-target="#carouselHeader" data-slide-to="0" class="active"></li>
        <li data-target="#carouselHeader" data-slide-to="1"></li>
        <li data-target="#carouselHeader" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div className="slide">
            <h1>Slide one</h1>
            {/* <img className="slideImg" src="/wolf.jpg" alt="First slide" /> */}
          </div>
        </div>
        <div class="carousel-item">
          <div className="slide">
            <h1>Slide two</h1>
            {/* <img className="slideImg" src="/nature_2.jpg" alt="Second slide" />             */}
          </div>
        </div>
        <div class="carousel-item">
          <div className="slide">
            <h1>Slide three</h1>
            {/* <img className="slideImg" src="/bridge.jpg" alt="Third slide" />             */}
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselHeader" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselHeader" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  )
}

export default carousel;