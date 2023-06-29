import React from 'react';
import './Bannerbbw.css';
import publitickets from './back.png';

const imageUrl = 'https://th.bing.com/th/id/R.8a13ff8dde602d5125406ad4db6c9832?rik=8%2fZQVvyfM3clrw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-VT6Fq7cebi0%2fUWMvqAYoTaI%2fAAAAAAAAMAc%2f8OjX6ec5hWU%2fw1200-h630-p-k-no-nu%2fConcert-stock3112.jpg&ehk=kCpHfFBKQjvtFMABGSNiCvaTD%2bJEDsyBF5kDhFA7RZQ%3d&risl=&pid=ImgRaw&r=0';

const BackgroundComponent = () => {
  return (
    <div className="containersa" style={{ backgroundImage: `url(${imageUrl})` }}>
      <img className="logosss" src={publitickets} alt="Logo" />
    </div>
  );
};

export default BackgroundComponent;