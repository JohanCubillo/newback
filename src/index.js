import React from 'react';
import Slider from './Slider';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AlbumSlider from './AlbumSlider';
import Footer from './Footer';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
    {/* <Route path="/ProxEvent" element={<ProxEvent />} /> */}
    </Routes>

    <React.StrictMode>
      <div style={{backgroundColor: 'black', height: '10px'}}>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6527724668452654" crossorigin="anonymous"></script>
        
        <ExampleComponent />
     
        <SocialMediaList />
        
      </div>
      <BannerCustom /> 
      <CustomComponent /> 
      <Slider />
      <Count />
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
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();