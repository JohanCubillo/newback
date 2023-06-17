import React, { useState, useEffect } from 'react';
import './Slider.css';

const SliderCompanies = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <a key={index} href={slide.link} target="_blank" rel="noopener noreferrer">
          <img
            src={slide.image}
            alt={slide.alt}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          />
        </a>
      ))}
    </div>
  );
};

export default SliderCompanies;