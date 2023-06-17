import React, { useState, useEffect } from 'react';

const LogoSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const nextSlide = (currentSlide + 1) % images.length;
    const timer = setTimeout(() => {
      setCurrentSlide(nextSlide);
    }, 3000); // Cambia el intervalo de tiempo aquí (en milisegundos)

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide, images.length]);

  return (
    <div className="auto-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <a href={image.link}>
            <img src={image.url} alt={`Slide ${index + 1}`} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default  LogoSlider;