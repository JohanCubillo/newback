import React from 'react';
import './Footer.css';
import logoImage from './back.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="left-section">
          <p>Texto a la izquierda</p>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>

        <div className="center-section">
          <img src={logoImage} alt="Logo" className="logo-foot" />
        </div>

        <div className="right-section">
        <p><a href="google.com">Numero de telefono : 60492466</a></p>
          <p><a href="google.com">Términos y condiciones</a></p>
          <p><a href="#">Políticas de privacidad</a></p>
        </div>
      </footer>
      <div className="policies-section">
        <p> © {new Date().getFullYear()}  BackStage Magazine CR. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

export default Footer;