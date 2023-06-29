import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivacyPage from './PrivacyPage';
import Home from './Home';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/PrivacyPage" element={<PrivacyPage />} />
      <Route path="/" element={<Home />} /> // Página principal con el componente Home
    </Routes>
<<<<<<< HEAD
=======

    <React.StrictMode>
      <div style={{backgroundColor: 'black', height: '10px'}}>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6527724668452654" crossorigin="anonymous"></script>
        
        <ExampleComponent />
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
>>>>>>> 190d8758e65d04ad8428da1ba5ca9ad8a71c78ca
  </BrowserRouter>,
  document.getElementById('root')
);