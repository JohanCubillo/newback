import React from 'react';
import './customcomponent.css';
import renext from './renext.png'; // Ruta de la imagen del logo
import rhcp from './rhcp.png'; // Ruta de la imagen del logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';


const CustomComponent = () => {
  return (
    <div className='todo'>
    <div className='all'>
      <div className="custom-component">
        <div className="right-content">
          <div className="logo-container">
            <img src={rhcp} alt="Logo" className="logo" />
          </div>
          <h2>31 de Octumbre / Estadio Nacional</h2>
          <p>¡Prepárate Costa Rica para un evento épico! Red Hot Chili Peppers está llegando a tu país para ofrecerte una noche llena de rock.
            <br />Únete a la fiesta y déjate llevar por los increíbles sonidos de una de las bandas más influyentes de todos los tiempos.</p>
          <div className="button-container">
            <button className="buttonbuy">
              <FontAwesomeIcon icon={faTicketAlt} className="button-icon" />
              Comprar Boletos
            </button>
            <button className="buttonbuy">
              <FontAwesomeIcon icon={faSpotify} className="button-icon" />
              Playlist de RHCP
            </button>
          </div>
        </div>
        <div className="left-content">
          <img src={renext} alt="Left Image" className="left-image" />
        </div>
        </div></div>
    </div>
  );
};

export default CustomComponent;