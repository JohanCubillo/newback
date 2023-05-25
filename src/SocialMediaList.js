import React from 'react';
import tw from './twitter.png'; 
import ins from './insta.png';
import fa from './face.png';
import back from './back.png';
import './SocialMediaList.css';

const SocialMediaList = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={back} alt="Logo" />
      </div>
      <div className="social-icons">
       
      </div>
    </nav>
  );
};

export default SocialMediaList;