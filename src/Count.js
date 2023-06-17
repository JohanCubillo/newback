import React, { useState } from 'react';
import CountDown from './CountDown';
import './Count.css';
import back from './back.png';

function Count() {
  const [showText1, setShowText1] = useState(true);
  const [showText2, setShowText2] = useState(true);

  // Event 1
  const eventDate1 = new Date('2023-05-30');
  eventDate1.setHours(17);
  eventDate1.setMinutes(42);
  eventDate1.setSeconds(0);
  const eventImage1 = 'https://cdn.eticket.cr/imagenes/artistas/230504102907138_performer_img_firme1200x400.jpg';

  const handleCountEnd1 = () => {
    setShowText1(false);
  };

  // Event 2
  const eventDate2 = new Date('2023-06-17');
  eventDate2.setHours(20);
  eventDate2.setMinutes(0);
  eventDate2.setSeconds(0);
  const eventImage2 = 'https://cdn.eticket.cr/imagenes/artistas/230504102907138_performer_img_firme1200x400.jpg';

  const handleCountEnd2 = () => {
    setShowText2(false);
  };

  const announcementDate1 = new Date(eventDate1); // Fecha del anuncio 1
  const announcementDate2 = new Date(eventDate2); // Fecha del anuncio 2

  return (
    <div className="full-screen-container">
      <div className="container count-container">
        <h1 className="new-announcements custom-text" style={{ fontSize: '32px', textAlign: 'left' }}>Nuevos Anuncios</h1>
        <div className="row">
          <div className="col-md-6">
            {showText1 && (
              <React.Fragment>
                <div className="image-containers">
                  <CountDown date={eventDate1} image={eventImage1} onCountEnd={handleCountEnd1} />
                </div>
                <h1 className="announcement-date custom-text" style={{ fontSize: '18px' }}>Anunciado el {announcementDate1.toLocaleDateString()}</h1>
                <hr className="white-hr" /> {/* Agregado hr */}
              </React.Fragment>
            )}
          </div>

          <div className="col-md-6">
            {showText2 && (
              <React.Fragment>
                <div className="image-container">
                  <CountDown date={eventDate2} image={eventImage2} onCountEnd={handleCountEnd2} />
                </div>
                <h1 className="announcement-date custom-text" style={{ fontSize: '18px' }}>Anunciado el {announcementDate2.toLocaleDateString()}</h1>
                <hr className="white-hr" /> {/* Agregado hr */}
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Count;