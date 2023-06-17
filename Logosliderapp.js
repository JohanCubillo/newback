import React from 'react';
import LogoSlider from './LogoSlider'; // Ajusta la ruta del archivo LogoSlider.js

const App = () => {
  const imageData = [
    { url: 'imagen1.jpg', link: 'enlace1.html' },
    { url: 'imagen2.jpg', link: 'enlace2.html' },
    { url: 'imagen3.jpg', link: 'enlace3.html' },
  ];

  return (
    <div className="app">
      <h1>Logo Slider Example</h1>
      <LogoSlider images={imageData} />
    </div>
  );
};

export default App;