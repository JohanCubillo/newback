import React from 'react';

const Banner = ({ imageUrl }) => {
  return (
    <div style={{ width: '100%', height: '40vh' }}>
      <img src={imageUrl} alt="Banner" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default Banner;