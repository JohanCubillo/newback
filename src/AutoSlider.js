import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LogoSlider';
import './AutoSlider.css'; // Importa el archivo CSS para los estilos personalizados
import credomatic from './images/credomatic.png';
import davivienda from './images/davivienda.png';
import eticket from './images/eticket.png';
import imsomnio from './images/imsomnio.png';
import marvi from './images/marvi.png';
import publitickets from './images/publitickets.png';

class AutoSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1800 // Cambia la velocidad de cambio de imagen aquí (en milisegundos)
    };

    const responsiveSettings = [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ];

    return (
      <div className='ally'>
      <div className="AutoSlider">
        <h2 className='colorh2'>Nuestros Patrocinadores</h2>
        <Slider {...settings} responsive={responsiveSettings}>
          <div>
            <img src={credomatic} alt="Imagen 1" />
          </div>
          <div>
            <img src={davivienda} alt="Imagen 2" />
          </div>
          <div>
            <img src={eticket} alt="Imagen 3" />
          </div>
          <div>
            <img src={imsomnio} alt="Imagen 3" />
          </div>

          <div>
            <img src={marvi} alt="Imagen 3" />
          </div>

          <div>
            <img src={publitickets} alt="Imagen 3" />
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}

export default AutoSlider;