import React, { useState, useEffect } from "react";

export default function Slider() {
  const imageArray = [
    "./assets/2.jpeg",
    "./assets/3.jpeg",
    "./assets/4.jpeg",
    "./assets/5.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideshowInterval, setSlideshowInterval] = useState(null);

  const prevImage = () => {
    setCurrentIndex((index) =>
      index === 0 ? imageArray.length - 1 : index - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((index) =>
      index === imageArray.length - 1 ? 0 : index + 1
    );
  };

  const slideShow = () => {
    if (!slideshowInterval) {
      const interval = setInterval(() => {
        nextImage();
      }, 2000);
      setSlideshowInterval(interval);
    }
  };

  const stop = () => {
    if (slideshowInterval) {
      clearInterval(slideshowInterval);
      setSlideshowInterval(null);
    }
  };

  useEffect(() => {
    return () => {
      if (slideshowInterval) {
        clearInterval(slideshowInterval);
      }
    };
  }, [slideshowInterval]);

  return (
    <div>
      <h1>Image Slider</h1>
      <div className="image-container">
        <div>
          <img src={imageArray[currentIndex]} alt="slider" />
        </div>
        <div>
          <button type="button" onClick={prevImage}>
            Previous
          </button>
          <button type="button" onClick={nextImage}>
            Next
          </button>
          <button type="button" onClick={slideShow}>
            Start Slideshow
          </button>
          <button type="button" onClick={stop}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}
