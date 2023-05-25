import React from 'react';
import CountDown from './CountDown';
import './Count.css';

function Count() {
  const eventDate = new Date('2023-5-25');
  eventDate.setHours(17); // Establecer la hora a las 18:00 (6:00 PM)
  eventDate.setMinutes(42); // Establecer los minutos a 30
  eventDate.setSeconds(0); 

  const eventImage = 'https://cdn.eticket.cr/imagenes/artistas/230504102907138_performer_img_firme1200x400.jpg';

  return (
    <div className="container count-container">
      <h1 className="event-title custom-text">Próximo gran evento</h1>
      <CountDown date={eventDate} image={eventImage} />
      <hr className="custom-hr" />
    </div>
  );
}

export default Count;