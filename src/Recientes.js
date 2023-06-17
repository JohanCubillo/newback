import React from 'react';
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
    arrows: true, // Habilita las flechas de navegación
    autoplay: true, // Activa el modo automático
    autoplaySpeed: 1800,
  };

  const images = [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/ColdplayBBC071221_%28cropped%29.jpg',
      alt: 'Imagen 1',
      href: 'https://example.com/image1',
      overlaySrc: 'https://th.bing.com/th/id/R.b04ede71cb85846f14273e3dd5d9513e?rik=7duXStv1HUxfSw&riu=http%3a%2f%2fth00.deviantart.net%2ffs70%2fPRE%2ff%2f2011%2f282%2f9%2f8%2frammstein_logo_mod_2_by_schlash-d4cay0b.png&ehk=OFcVyIrEhh82tRTkkVpFLMF3QVdmYnYCUuB8or1gRwc%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      src: 'https://media.admagazine.com/photos/6361ba10ab1bdcc338bec725/master/w_1600,c_limit/Rammstein_Berlin_01.jpg',
      alt: 'Imagen 2',
      href: 'https://example.com/image2',
      overlaySrc: 'https://example.com/overlay2.png',
    },
    // Add more images with overlaySrc if needed
  ];

  return (
    <div className="container recientes">
      <h2 className="title">Mira los eventos recientes en los que ha estado Backstage Magazine</h2>
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <Slider {...settings}>
          {images.map((image, index) => (
 <div key={index} className="slider-image-container">
  
 <a href={image.href} target="_blank" rel="noopener noreferrer">
 <img className="overlay-image" src={image.overlaySrc} alt="Overlay" />
   <img src={image.src} alt={image.alt} />
   
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
  );
};

export default Recientes;