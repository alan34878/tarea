import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Principal from './Principal';
import Peliculas from './Peliculas';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/pag2" element={<Peliculas />} />
    </Routes>
  );
}

export default App;


