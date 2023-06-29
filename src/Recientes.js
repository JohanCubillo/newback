import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Recientes.css'; // Importa el archivo CSS con los estilos personalizados
import { Link } from 'react-router-dom';

const Recientes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1800,
  };

  const images = [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/ColdplayBBC071221_%28cropped%29.jpg',
      alt: 'Imagen 1',
      href: 'https://example.com/image1',
      overlaySrc: 'https://th.bing.com/th/id/OIP.-WblyUaHRsk9MftCMpZLQQHaAw?pid=ImgDet&rs=1',
    },
    {
      src: 'https://media.admagazine.com/photos/6361ba10ab1bdcc338bec725/master/w_1600,c_limit/Rammstein_Berlin_01.jpg',
      alt: 'Imagen 2',
      href: 'https://example.com/image2',
      overlaySrc: 'https://th.bing.com/th/id/R.53b8f1143d6827e6f596ac2262fdf753?rik=2bUZZUX1PVU6xg&pid=ImgRaw&r=0',
    },
    // Add more images with overlaySrc if needed
  ];

  const [overlayVisible, setOverlayVisible] = useState(false);
  const [currentOverlaySrc, setCurrentOverlaySrc] = useState('');

  const handleImageHover = (overlaySrc) => {
    setCurrentOverlaySrc(overlaySrc);
    setOverlayVisible(true);
  };

  const handleImageLeave = () => {
    setOverlayVisible(false);
  };

  return (
    <div className="mimo">
      <div className="container recientes">
        <h2 className="title">Mira los eventos recientes en los que ha estado Backstage Magazine</h2>
        <div className="row">
          <div className="col-lg-12 col-md-12 sip">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="slider-image-container">
                  <a href={image.href} target="_blank" rel="noopener noreferrer">
                    <div
                      className="overlay-container"
                      onMouseEnter={() => handleImageHover(image.overlaySrc)}
                      onMouseLeave={handleImageLeave}
                    >
                      <img src={image.src} alt={image.alt} />
                      {overlayVisible && (
                        <div className="overlay-image">
                          <img src={currentOverlaySrc} alt="" />
                        </div>
                      )}
                    </div>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="content">
              <Link to="/ProxEvent">
                <button className="buttonsd">Ir a Nueva Página</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recientes