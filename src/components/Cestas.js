import React from 'react';
import { FaPrint } from 'react-icons/fa';
import { printCestas } from '../utils/printUtils';

function Cestas() {
  return (
    <div className="max-w-[21cm] mx-auto px-4">
      <div className="flex justify-center mb-8">
        <button 
          onClick={printCestas} 
          className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-base bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5"
        >
          <FaPrint /> Imprimir Cestas
        </button>
      </div>

      <div className="bg-white shadow-lg mb-16 p-[0.5cm] md:p-[2cm] rounded-lg">
        <div className="cestas-content max-w-3xl mx-auto">
          <div className="flex justify-between items-start mb-8 border-b border-black pb-4">
            <div>
              <img src="/Logo_Jardim_Amazonia_COLORIDO.png" alt="Jardim da Amazônia" className="h-20 w-auto" />
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-black mb-1">CESTAS DE PIQUENIQUE</h1>
              <p className="text-sm text-gray-600 italic">Momentos Especiais ao Ar Livre</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-black mb-4 pb-2 border-b border-gray-200">
                  Cesta Básica - "Delícias Simples"
                </h3>
                <div className="space-y-4">
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Ruffles (1 pacote)</li>
                    <li>Amendoim Dori Japonês (200g)</li>
                    <li>Vinho Tinto ou Vinho Branco (1 garrafa)</li>
                  </ul>
                  <div>
                    <h4 className="font-semibold mb-2">Kit de Apoio:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>2 Taças de Acrílico</li>
                      <li>Talheres descartáveis</li>
                      <li>Guardanapos</li>
                      <li>Embalagem para lixo</li>
                    </ul>
                  </div>
                  <p className="text-xl font-bold text-primary text-right">R$ 170,00</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-black mb-4 pb-2 border-b border-gray-200">
                  Cesta Completa - "Experiência Gourmet"
                </h3>
                <div className="space-y-4">
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Pringles (1 lata)</li>
                    <li>Azeitonas Pretas Sem Caroço (sachê)</li>
                    <li>Amendoim Dori Japonês (200g)</li>
                    <li>Vinho Branco ou Vinho Tinto (1 garrafa)</li>
                  </ul>
                  <div>
                    <h4 className="font-semibold mb-2">Kit Completo:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>2 Taças de Acrílico</li>
                      <li>Talheres descartáveis</li>
                      <li>Toalha de mesa</li>
                      <li>Guardanapos</li>
                      <li>Embalagem para lixo</li>
                    </ul>
                  </div>
                  <p className="text-xl font-bold text-primary text-right">R$ 200,00</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-black mb-4 pb-2 border-b border-gray-200">
                  Cesta Premium - "Jardim Perfeito"
                </h3>
                <div className="space-y-4">
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Pringles (1 lata)</li>
                    <li>Ruffles (1 pacote)</li>
                    <li>Azeitonas Pretas Sem Caroço (sachê)</li>
                    <li>Amendoim Dori Japonês (200g)</li>
                    <li>Vinho Branco e Vinho Tinto (2 garrafas)</li>
                  </ul>
                  <div>
                    <h4 className="font-semibold mb-2">Kit Premium:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>4 Taças de Acrílico</li>
                      <li>Talheres descartáveis</li>
                      <li>Toalha de mesa</li>
                      <li>Guardanapos</li>
                      <li>Embalagem para lixo</li>
                    </ul>
                  </div>
                  <p className="text-xl font-bold text-primary text-right">R$ 330,00</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-bold mb-4">Observações para todos os pacotes:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>As cestas serão entregues organizadas para facilitar o transporte.</li>
                <li>Lembre-se de respeitar as regras do jardim: mantenha o ambiente limpo e aproveite a natureza em silêncio.</li>
                <li>Para solicitar sua cesta, consulte nosso bar.</li>
              </ul>
            </div>

            <div className="text-center pt-8 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 text-gray-700 italic">
                <span className="text-lg">🌿</span>
                <p>Experiências Únicas na Natureza</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cestas; 