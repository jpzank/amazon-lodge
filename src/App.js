// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Acomodacoes from './pages/Acomodacoes';
import AreasExternas from './pages/AreasExternas';
import Gastronomia from './pages/Gastronomia';
import Birdwatching from './pages/Birdwatching';
import Primatas from './pages/Primatas';
import SafariBoat from './pages/SafariBoat';
import GuiasCampo from './pages/GuiasCampo';
import EstacaoPesquisa from './pages/EstacaoPesquisa';
import NascenteNatural from './pages/NascenteNatural';
import FAQ from './pages/FAQ';
import ComoChegar from './pages/ComoChegar';
import EventosCorporativos from './pages/EventosCorporativos';
import Trilhas from './pages/Trilhas';
import NossaHistoria from './pages/NossaHistoria';
import FalaramDeNos from './pages/FalaramDeNos';
import './styles/App.css';
import './styles/shared.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acomodacoes" element={<Acomodacoes />} />
          <Route path="/areas-externas" element={<AreasExternas />} />
          <Route path="/gastronomia" element={<Gastronomia />} />
          <Route path="/birdwatching" element={<Birdwatching />} />
          <Route path="/primatas" element={<Primatas />} />
          <Route path="/safari-boat" element={<SafariBoat />} />
          <Route path="/guias-campo" element={<GuiasCampo />} />
          <Route path="/estacao-pesquisa" element={<EstacaoPesquisa />} />
          <Route path="/nascente-natural" element={<NascenteNatural />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/como-chegar" element={<ComoChegar />} />
          <Route path="/eventos-corporativos" element={<EventosCorporativos />} />
          <Route path="/trilhas" element={<Trilhas />} />
          <Route path="/nossa-historia" element={<NossaHistoria />} />
          <Route path="/falaram-de-nos" element={<FalaramDeNos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;