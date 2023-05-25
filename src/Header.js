import React from 'react';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
        <div className="container">
          <a className="navbar-brand" href="#!">
          <h2 className="navbar-brand">BackStage Magazine CR</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Conciertos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Festivales
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Presentaciones Recientes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Playlists
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Acerca de nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Boletin semanal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Contacto
                </a>
              </li>
            </ul>
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#!">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </li>
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#!">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#!">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar */}

      {/* Section: Design Block */}
      <section>
        {/* Intro */}
        <div
          id="intro"
          className="bg-image vh-100"
          style={{
            
             
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: 'rgba(250, 182, 162, 0.15)' }}
          ></div>
        </div>
        {/* Intro */}
      </section>
      {/* Section: Design Block */}
    </header>
  );
}

export default Header;