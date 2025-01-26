import React from 'react';
import { FaPrint } from 'react-icons/fa';
import { GiWineBottle, GiGrapes } from 'react-icons/gi';
import { printWineList } from '../utils/printUtils';

function WineList() {
  return (
    <div className="max-w-[21cm] mx-auto px-4">
      <div className="flex justify-center mb-8">
        <button 
          onClick={printWineList} 
          className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-base bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5"
        >
          <FaPrint /> Imprimir Carta de Vinhos
        </button>
      </div>
      
      <div className="bg-white shadow-lg mb-16 p-[0.5cm] md:p-[2cm] rounded-lg">
        <div className="wine-list-content max-w-3xl mx-auto">
          <div className="flex justify-between items-start mb-8 border-b border-black pb-4">
            <div>
              <img src="/Logo_Jardim_Amazonia_COLORIDO.png" alt="Jardim da Amazônia" className="h-20 w-auto" />
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-black mb-2">CARTA DE VINHOS</h1>
              <div className="flex items-center justify-end gap-4">
                <GiWineBottle className="text-xl text-primary" />
                <div className="w-12 h-px bg-primary"></div>
                <GiGrapes className="text-xl text-primary" />
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-bold text-black mb-6 pb-2 border-b border-gray-200">VINHOS TINTOS</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">ARGENTINA</h3>
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between w-full">
                      <div>
                        <h4 className="font-medium text-gray-800">KALEU MALBEC-BONARDA</h4>
                        <p className="text-sm text-gray-600">Mendoza | Aitor Ider Balbo</p>
                      </div>
                      <div className="ml-4 font-semibold">R$ 120,00</div>
                    </div>

                    <div className="flex items-baseline justify-between w-full">
                      <div>
                        <h4 className="font-medium text-gray-800">ZAPA MALBEC</h4>
                        <p className="text-sm text-gray-600">Mendoza | Familia Falasconza</p>
                      </div>
                      <div className="ml-4 font-semibold">R$ 140,00</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">CHILE</h3>
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between w-full">
                      <div>
                        <h4 className="font-medium text-gray-800">RAVANAL SELECTION TERRIOR CARMENERE</h4>
                        <p className="text-sm text-gray-600">Valle Central | Vinos Ravanal</p>
                      </div>
                      <div className="ml-4 font-semibold">R$ 120,00</div>
                    </div>

                    <div className="flex items-baseline justify-between w-full">
                      <div>
                        <h4 className="font-medium text-gray-800">VIU MANENT RESERVA CARBERNET SAUVIGNON</h4>
                        <p className="text-sm text-gray-600">Valle Colchagua | Viu Manent</p>
                      </div>
                      <div className="ml-4 font-semibold">R$ 170,00</div>
                    </div>

                    <div className="flex items-baseline justify-between w-full">
                      <div>
                        <h4 className="font-medium text-gray-800">DON CAYTANO PINOT NOIR</h4>
                        <p className="text-sm text-gray-600">Valle Central</p>
                      </div>
                      <div className="ml-4 font-semibold">R$ 120,00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-black mb-6 pb-2 border-b border-gray-200">ESPUMANTES + VINHOS BRANCOS</h2>
              
              <div className="space-y-8">
                <div className="flex items-baseline justify-between w-full">
                  <div>
                    <h4 className="font-medium text-gray-800">BOSSA BRUT</h4>
                    <p className="text-sm text-gray-600">Bento Gonçalves | Cave Hermann</p>
                  </div>
                  <div className="ml-4 font-semibold">R$ 145,00</div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">CHILE</h3>
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between w-full">
                      <div>
                        <h4 className="font-medium text-gray-800">ZAPA TORRONTES</h4>
                        <p className="text-sm text-gray-600">Mendoza | Familia Falascomza</p>
                      </div>
                      <div className="ml-4 font-semibold">R$ 140,00</div>
                    </div>

                    <div className="flex items-baseline justify-between w-full">
                      <div>
                        <h4 className="font-medium text-gray-800">RAVANAL SELECTION TERRIOR SAUVIGNON BLANC</h4>
                        <p className="text-sm text-gray-600">Valle Central | Vinos Ravanal</p>
                      </div>
                      <div className="ml-4 font-semibold">R$ 120,00</div>
                    </div>

                    <div className="flex items-baseline justify-between w-full">
                      <div>
                        <h4 className="font-medium text-gray-800">RAVANAL SELECTION TERRIOR CHARDONNAY</h4>
                        <p className="text-sm text-gray-600">Valle Central | Vinos Ravanal</p>
                      </div>
                      <div className="ml-4 font-semibold">R$ 120,00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center gap-4 mb-4">
              <GiGrapes className="text-xl text-primary" />
              <div className="w-12 h-px bg-primary"></div>
              <GiWineBottle className="text-xl text-primary" />
            </div>
            <p className="text-gray-600 italic">Harmonização perfeita com nossa gastronomia sustentável</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WineList; 