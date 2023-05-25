import React, { useEffect } from 'react';
import $ from 'jquery';
import './estilospurosestilos.css';
import logoImage from './back.png'; // Ruta de la imagen del logo

const ExampleComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = $(window).scrollTop();
      const navbar = $('.header');

      if (scrollTop > 120) {
        navbar.addClass('sticky');
      } else {
        navbar.removeClass('sticky');
      }
    };

    $(window).scroll(handleScroll);

    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="page-top">
      <header className="header">
        <a className="logo" href="">
          
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          <li><a href="#one" className="link link-theme link-arrow component-link">Inicio</a></li>
          <li><a href="#two" className="link link-theme link-arrow component-link">Conciertos</a></li>
          <li><a href="#three" className="link link-theme link-arrow component-link">Eventos pasados</a></li>
          <li><a href="#four" className="link link-theme link-arrow component-link">Contacto</a></li>
        </ul>
      </header>
    </div>
  );
}

export default ExampleComponent;