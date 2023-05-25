import React from 'react';
import EventCarousel from './EventCarousel';
import './Carousel.css';


function Carousel() {
  const events = [
    {
      
      id: 1,
      image: './red.jpg',
      title: 'Red Hot Chili Peppers',
      description: '31 de Octubre'
      
    },
    {
      id: 2,
      title: 'Taller de diseño web',
      description: 'Aprende a crear diseños impresionantes para la web',
      image: './logo.svg'
    },
    {
        id: 2,
        title: 'Taller de diseño web',
        description: 'Aprende a crear diseños impresionantes para la web',
        image: 'red.jpg'
      },
      {
        id: 2,
        title: 'Taller de diseño web',
        description: 'Aprende a crear diseños impresionantes para la web',
        image: 'red-hot-chili-peppers.jpeg'

      },
      {
        id: 2,
        title: 'Taller de diseño web',
        description: 'Aprende a crear diseños impresionantes para la web',
        image: 'red-hot-chili-peppers.jpeg'
      },
    {
      id: 3,
      title: 'Hackathon de programación',
      description: 'Desafía tus habilidades de programación en una competencia amistosa',
      image: 'red-hot-chili-peppers.jpeg'
    }
  ];

  return (
    <div>
      <EventCarousel events={events} />
      <main>
        {/* Contenido de la aplicación */}
      </main>
    </div>
  );
}

export default Carousel;