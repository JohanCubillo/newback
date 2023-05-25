import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaTiktok, FaSpotify } from 'react-icons/fa';
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <div className="row">
      <div className="col-1"></div> {/* Columna en blanco al inicio */}
      <div className="col-6">
        <h4 className='title'>Únete a nuestras redes sociales y no te pierdas nada de las últimas noticias de la música en Costa Rica:</h4>
      </div>
      <div className="col-4">
        <div className="button-container"> {/* Columna para los botones */}
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="button instagram">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="button facebook">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="button twitter">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="button youtube">
            <FaYoutube />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="button tiktok">
            <FaTiktok />
          </a>
          <a href="https://www.spotify.com/" target="_blank" rel="noreferrer" className="button spotify">
            <FaSpotify />
          </a>
        </div>
      </div>
      <div className="col-1"></div> {/* Columna en blanco al final */}

      <hr className="custom-hr" />
    </div>
  );
};

export default SocialMedia;