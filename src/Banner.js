import React from 'react';
import './Banners.css';

const Banner = ({ imageUrl }) => {
  return (
    <div className='toco'>
       <img src={imageUrl} alt="Banner" />
    </div>
  );
};

export default Banner