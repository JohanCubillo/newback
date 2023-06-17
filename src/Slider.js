import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './estilo.css';



  const slides = [
    {
      image: 'https://cdn.shortpixel.ai/spai/w_800+q_glossy+ret_img+to_webp/https://entradas.quelapaseslindo.com.ar/wp-content/uploads/red-hot-chili-peppers-argentina-2023.jpg',
      title: 'Red Hot Chili Peppers',
      description: '31 de Octubre, Estadio Nacional,7:00 pm',
      href: 'https://www.eticket.cr/home.aspx'
    },
    {
      image: 'https://www.infobae.com/new-resizer/tK7pv9dzDr3N4OYtEkNsvXfAde8=/992x1323/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/MD7TKI2EFVBUDABZLS6DN3N4SQ.jpg',
      title: 'Manuel Turizo',
      description: '20 de Mayo, Anfiteatro Coca-Cola, 6:00 pm',
      href: 'https://www.eticket.cr/paso1a.aspx?idevento=8037'
    },
    {
      image: 'https://cdn.eticket.cr/imagenes/artistas/230425103219850_performer_img_1200x400.jpg',
      title: 'Juan Luis Guerra',
      description: '10 de Junio, Estadio Nacional',
      href: 'https://www.eticket.cr/home.aspx'
    },
    {
        image: 'https://cdn.eticket.cr/imagenes/artistas/230504102907138_performer_img_firme1200x400.jpg',
        title: 'Grupo Firme',
        description: '29 de junio, Estadio Nacional',
        href: 'https://www.eticket.cr/eventos.aspx?idartista=1056'
      },
      {
      image: 'https://cdn.eticket.cr/imagenes/artistas/230504102907138_performer_img_firme1200x400.jpg',
      title: 'Grupo Firme',
      description: '29 de junio, Estadio Nacional',
      href: 'https://www.eticket.cr/eventos.aspx?idartista=1056'
    }
  ];
  

const MySlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <h2 className="siguientes">Siguientes eventos</h2>
      <Slider {...settings} className="slider-container">
        {slides.map((slide) => (
          <div key={slide.title} className="slide">
            <img src={slide.image} alt={slide.title} />
            <div className="slide-content">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <a href={slide.href}>
                <button>Boletos</button>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
