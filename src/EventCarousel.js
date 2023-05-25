import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './EventCarousel.css';

function EventCarousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="event-carousel-container">
    <Slider {...settings}>
  {props.events.map(event => (
    <div key={event.id} className="event-card">
      <img src={event.image} alt={event.title} />
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <div className="event-card-overlay">
        <p className="event-card-overlay-text">{event.more}</p>
      </div>
    </div>
  ))}
</Slider>
    </div>
  );
}

export default EventCarousel;