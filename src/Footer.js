import React from 'react';
import './Footer.css';
import logoImage from './back.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return <h1>Home Page</h1>;
};

const AboutPage = () => {
  return <h1>About Page</h1>;
};

const TermsPage = () => {
  return <h1>Términos y condiciones</h1>;
};

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
          <p><a href="google.com">Número de teléfono: 60492466</a></p>
          <p><Link to="/terms">Términos y condiciones</Link></p>
          <p><Link to="/PrivacyPage">Políticas de privacidad</Link></p>
        </div>
      </footer>
      <div className="policies-section">
        <p> © {new Date().getFullYear()}  BackStage Magazine CR. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;