import React from 'react';
import Slider from 'react-slick';
import './Albumes.css';
const albums = [
  {
    year: 2010,
    title: 'Álbum 1',
    image: 'https://images-na.ssl-images-amazon.com/images/I/715LZJ5qX0L._AC_SL1200_.jpg',
    spotifyLink: 'https://images-na.ssl-images-amazon.com/images/I/715LZJ5qX0L._AC_SL1200_.jpg',
  },
  {
    year: 2015,
    title: 'Álbum 2',
    image: 'https://th.bing.com/th/id/OIP.sXg-jfV1VOZEsNYYsmgM3gHaHa?pid=ImgDet&rs=1',
    spotifyLink: 'https://th.bing.com/th/id/OIP.sXg-jfV1VOZEsNYYsmgM3gHaHa?pid=ImgDet&rs=1',
  },
  {
    year: 2020,
    title: 'Álbum 3',
    image: 'https://i.discogs.com/QYfUGP0E8_rCs-3dbozbHOfjzLRPavwcaGinnDu-DLY/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYzOTQx/NDItMTQxODE0NzEx/MS05OTEzLmpwZWc.jpeg',
    spotifyLink: 'url_de_spotify_3',
  },
  {
    year: 2020,
    title: 'Álbum 3',
    image: 'https://i.discogs.com/QYfUGP0E8_rCs-3dbozbHOfjzLRPavwcaGinnDu-DLY/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYzOTQx/NDItMTQxODE0NzEx/MS05OTEzLmpwZWc.jpeg',
    spotifyLink: 'url_de_spotify_3',
  },

  {
    year: 2015,
    title: 'Álbum 2',
    image: 'https://th.bing.com/th/id/OIP.sXg-jfV1VOZEsNYYsmgM3gHaHa?pid=ImgDet&rs=1',
    spotifyLink: 'https://th.bing.com/th/id/OIP.sXg-jfV1VOZEsNYYsmgM3gHaHa?pid=ImgDet&rs=1',
  },


];

const AlbumSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const openSpotify = (spotifyLink) => {
    window.open(spotifyLink, '_blank');
  };

  return (
    <>
      <h1 className="siguientes">Albumes Lanzados hoy</h1>
      <Slider {...settings}>
        {albums.map((album) => (
          <div key={album.year} className="slider-item">
            <div className="image-container">
              <img src={album.image} alt={album.title} />
              <div className="overlay">
                <h3>{album.title}</h3>
                <p>
                  Un día como hoy, pero en el año {album.year}, se lanzó el álbum {album.title}.
                </p>
                <button onClick={() => openSpotify(album.spotifyLink)}>Ir a Spotify</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default AlbumSlider;