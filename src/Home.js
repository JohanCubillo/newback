import React from 'react';
import Slider from './Slider';
import './index.css';
import './Header.css';
import './Carousel';
import Count from './Count';
import MailchimpScript from './MailchimpScript';
import Recientes from './Recientes';
import Compospoty from './compospoty';
import BannerCustom from './BannerCustom';
import SocialMedia from './SocialMedia';
import ContactForm from './ContactForm';
import ExampleComponent from './ExampleComponent';
import SocialMediaList from './SocialMediaList';
import LogoSliderApp from './AutoSlider';
import CardContainer from './CardContainer';
import GoogleAds from './GoogleAds';
import CustomComponent from './CustomComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scriptjs from './Scriptjs';
import AlbumSlider from './AlbumSlider';
import Footer from './Footer';
import PrivacyPage from './PrivacyPage';
import Background from './Background.js';

import EventosComponent from './EventosComponent.js';

const Home = () => {
  return (
    <React.StrictMode>
      <div style={{ backgroundColor: 'black', height: '10px' }}>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6527724668452654" crossorigin="anonymous"></script>

        <ExampleComponent />
        
       
      </div>
      <Background/>
     
      <CustomComponent />
      <Slider />
      <EventosComponent />
      

      <AlbumSlider />
      <Recientes />
      <Compospoty />
      <Scriptjs />
      <GoogleAds />
      <ContactForm />
      <LogoSliderApp />
      <SocialMedia />
      <Footer />
    </React.StrictMode>
  );
};

export default Home;