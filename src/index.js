import React from 'react';
import Slider from './Slider';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './Header.css';
import './Carousel';
import Count from './Count';
import Recientes from './Recientes';
import Compospoty from './compospoty';
import BannerCustom from './BannerCustom';
import SocialMedia from './SocialMedia';
import ContactForm from './ContactForm';
import ExampleComponent from './ExampleComponent';
import SocialMediaList from './SocialMediaList';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProxEvent from './ProxEvent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/ProxEvent" element={<ProxEvent />} />
    </Routes>

    <React.StrictMode>
      <div style={{backgroundColor: 'black', height: '10px'}}>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6527724668452654" crossorigin="anonymous"></script>
        <ExampleComponent />
     
        <SocialMediaList />
        
      </div>
      <BannerCustom />
      <Slider />
      <Count />
      <Recientes />
      <Compospoty />
      <SocialMedia />
      <ContactForm />
      <SocialMediaList />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();