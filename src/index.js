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
  </BrowserRouter>,
  document.getElementById('root')
);