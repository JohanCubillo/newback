import React from 'react';
import Banner from './Banner';

const BannerCustom = () => {
  const imageUrl = 'https://static1.abc.es/media/cultura/2017/11/13/entradas-conciertos-kGvF--1240x698@abc.jpg';

  return (
    <div>
      
      <Banner imageUrl={imageUrl} />
    </div>
  );
};

export default BannerCustom;