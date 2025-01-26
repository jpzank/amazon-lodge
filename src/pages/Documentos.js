import React from 'react';
import Menu from '../documents/Menu';
import WineList from '../documents/WineList';
import Receptivo from '../documents/Receptivo';
import Cestas from '../documents/Cestas';
import GoogleReviews from '../documents/GoogleReviews';
import { getFolderImage } from '../config/cloudinaryConfig';

const heroStyle = {
  backgroundImage: `url(${getFolderImage('documentos', 'hero')})`,
};

function Documentos() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-cover bg-center" style={heroStyle}>
        <div className="absolute inset-0 bg-black/60">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Documentos Úteis</h1>
            <p className="text-xl text-gray-200">Informações importantes para sua estadia</p>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="transform hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-center mb-6">Cardápio</h2>
                  <Menu />
                </div>
              </div>
            </div>

            <div className="transform hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-center mb-6">Carta de Vinhos</h2>
                  <WineList />
                </div>
              </div>
            </div>

            <div className="transform hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-center mb-6">Informações de Boas-vindas</h2>
                  <Receptivo />
                </div>
              </div>
            </div>

            <div className="transform hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-center mb-6">Cestas de Piquenique</h2>
                  <Cestas />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            <GoogleReviews />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Documentos; 