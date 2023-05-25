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
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container recientes">
      <h2 className="title">Mira los eventos recientes en los que ha estado Backstage Magazine</h2>
      <div className="row">
        <div className="col-8">
          <Slider {...settings}>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/ColdplayBBC071221_%28cropped%29.jpg" alt="Imagen 1" />
            </div>
            <div>
              <img src="https://media.admagazine.com/photos/6361ba10ab1bdcc338bec725/master/w_1600,c_limit/Rammstein_Berlin_01.jpg" alt="Imagen 2" />
            </div>
          </Slider>
        </div>
        <div className="col-4">
          <div className="content">
            <h2 className="title">Mira los eventos recientes en los que ha estado Backstage Magazine</h2>
            <Link to="/ProxEvent"> {/* Corrige la ruta aquí */}
              <button>Ir a Nueva Página</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recientes;