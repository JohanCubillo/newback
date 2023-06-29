import React from 'react';
import logoImage from './count.png';
import './eventosComponent.css';

const EventosComponent = () => {
  return (
    <div className="eventos-component allow">
      <div className="row">
        <div className="col-12 col-md-7 text-containerss">
          <h1>Próximos eventos</h1>
          <p>Aquí puedes agregar información adicional sobre los eventos.</p>
          <button>Mirar eventos</button>
          {/* Agrega más elementos <p> si es necesario */}
        </div>
        <div className="col-12 col-md-5 image-container">
          <img src={logoImage} alt="Evento" />
        </div>
      </div>
    </div>
  );
};

export default EventosComponent;