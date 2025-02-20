// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';  // Import i18n configuration
import './index.css';  // Make sure this is the only CSS import
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
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
import Trilhas from './pages/Trilhas';
import NossaHistoria from './pages/NossaHistoria';
import FalaramDeNos from './pages/FalaramDeNos';
import Documentos from './pages/Documentos';
import Template from './pages/Template';
import EventosNatureza from './pages/EventosNatureza';
import Galeria from './pages/Galeria';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
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
            <Route path="/trilhas" element={<Trilhas />} />
            <Route path="/nossa-historia" element={<NossaHistoria />} />
            <Route path="/falaram-de-nos" element={<FalaramDeNos />} />
            <Route path="/template" element={<Template />} />
            <Route path="/documentos" element={<Documentos />} />
            <Route path="/eventos-natureza" element={<EventosNatureza />} />
            <Route path="/galeria" element={<Galeria />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;