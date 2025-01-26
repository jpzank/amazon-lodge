import React from 'react';
import { FaPrint } from 'react-icons/fa';
import { printMenu } from '../utils/printUtils';

function Menu() {
  return (
    <div className="max-w-[21cm] mx-auto px-4">
      <div className="flex justify-center mb-8">
        <button 
          onClick={printMenu} 
          className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-base bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5"
        >
          <FaPrint /> Imprimir Cardápio
        </button>
      </div>
      
      <div className="bg-white shadow-lg mb-16 p-[0.5cm] md:p-[2cm] rounded-lg">
        <div className="menu-content max-w-3xl mx-auto">
          <div className="flex justify-between items-start mb-0.5 border-b border-black pb-0.5">
            <div>
              <img src="/Logo_Jardim_Amazonia_COLORIDO.png" alt="Jardim da Amazônia" className="h-20 w-auto" />
            </div>
            <div className="text-right pt-1">
              <h1 className="text-xl font-bold text-black mb-0 leading-none">CARDÁPIO</h1>
              <p className="text-sm text-gray-600 italic leading-tight">Sabores de Casa na Floresta</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-6">
            {/* Column 1: Non-alcoholic beverages */}
            <div className="space-y-1.5">
              <h2 className="text-base font-bold text-black mb-0.5 border-b border-black pb-0.5 uppercase tracking-wider leading-tight">
                BEBIDAS NÃO ALCOÓLICAS
              </h2>
              
              <div className="pl-1">
                <h3 className="text-base font-semibold text-gray-800 mb-0.5 relative pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full leading-tight">
                  Sucos Naturais
                </h3>
                <div className="flex items-baseline justify-between w-full mb-0.5 leading-tight">
                  <span className="pr-1 text-sm text-gray-800 bg-white">Uva Integral, Limonada Especial</span>
                  <div className="flex-1 mx-1 border-b border-dotted border-black relative -top-1"></div>
                  <div className="flex flex-col items-end gap-0.5 pl-1 bg-white">
                    <span className="font-semibold text-black whitespace-nowrap text-sm leading-tight flex items-center gap-0.5">
                      R$ 20<span className="text-xs text-gray-600 font-normal italic ml-1">400 ml</span>
                    </span>
                    <span className="font-semibold text-black whitespace-nowrap text-sm leading-tight flex items-center gap-0.5">
                      R$ 40<span className="text-xs text-gray-600 font-normal italic ml-1">950 ml</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="pl-1">
                <h3 className="text-base font-semibold text-gray-800 mb-0.5 relative pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full leading-tight">
                  Águas
                </h3>
                <div className="flex items-baseline justify-between w-full mb-0.5 leading-tight">
                  <span className="pr-1 text-sm text-gray-800 bg-white">Água sem gás</span>
                  <div className="flex-1 mx-1 border-b border-dotted border-black relative -top-1"></div>
                  <div className="flex flex-col items-end gap-0.5 pl-1 bg-white">
                    <span className="font-semibold text-black whitespace-nowrap text-sm leading-tight flex items-center gap-0.5">
                      R$ 6<span className="text-xs text-gray-600 font-normal italic ml-1">500 ml</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-baseline justify-between w-full mb-0.5 leading-tight">
                  <span className="pr-1 text-sm text-gray-800 bg-white">Água com gás</span>
                  <div className="flex-1 mx-1 border-b border-dotted border-black relative -top-1"></div>
                  <div className="flex flex-col items-end gap-0.5 pl-1 bg-white">
                    <span className="font-semibold text-black whitespace-nowrap text-sm leading-tight flex items-center gap-0.5">
                      R$ 8<span className="text-xs text-gray-600 font-normal italic ml-1">500 ml</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="pl-1">
                <h3 className="text-base font-semibold text-gray-800 mb-0.5 relative pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full leading-tight">
                  Refrigerantes
                </h3>
                <div className="flex items-baseline justify-between w-full mb-0.5 leading-tight">
                  <span className="pr-1 text-sm text-gray-800 bg-white">Coca-Cola, Coca-Cola Zero, Guaraná, Sprite, Schweppes</span>
                  <div className="flex-1 mx-1 border-b border-dotted border-black relative -top-1"></div>
                  <div className="flex flex-col items-end gap-0.5 pl-1 bg-white">
                    <span className="font-semibold text-black whitespace-nowrap text-sm leading-tight">R$ 8</span>
                  </div>
                </div>
              </div>

              <div className="pl-1">
                <h3 className="text-base font-semibold text-gray-800 mb-0.5 relative pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full leading-tight">
                  Energéticos
                </h3>
                <div className="flex items-baseline justify-between w-full mb-0.5 leading-tight">
                  <span className="pr-1 text-sm text-gray-800 bg-white">Monster Energy</span>
                  <div className="flex-1 mx-1 border-b border-dotted border-black relative -top-1"></div>
                  <div className="flex flex-col items-end gap-0.5 pl-1 bg-white">
                    <span className="font-semibold text-black whitespace-nowrap text-sm leading-tight">R$ 18</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Alcoholic beverages */}
            <div className="space-y-1.5">
              <h2 className="text-base font-bold text-black mb-0.5 border-b border-black pb-0.5 uppercase tracking-wider leading-tight">
                BEBIDAS ALCOÓLICAS
              </h2>
              
              <div className="pl-1">
                <h3 className="text-base font-semibold text-gray-800 mb-0.5 relative pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full leading-tight">
                  Cervejas
                </h3>
                <div className="flex items-baseline justify-between w-full mb-0.5 leading-tight">
                  <span className="pr-1 text-sm text-gray-800 bg-white">Heineken, Budweiser</span>
                  <div className="flex-1 mx-1 border-b border-dotted border-black relative -top-1"></div>
                  <div className="flex flex-col items-end gap-0.5 pl-1 bg-white">
                    <span className="font-semibold text-black whitespace-nowrap text-sm leading-tight flex items-center gap-0.5">
                      R$ 16<span className="text-xs text-gray-600 font-normal italic ml-1">Long Neck</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-baseline justify-between w-full mb-0.5 leading-tight">
                  <span className="pr-1 text-sm text-gray-800 bg-white">Brahma</span>
                  <div className="flex-1 mx-1 border-b border-dotted border-black relative -top-1"></div>
                  <div className="flex flex-col items-end gap-0.5 pl-1 bg-white">
                    <span className="font-semibold text-black whitespace-nowrap text-sm leading-tight flex items-center gap-0.5">
                      R$ 8<span className="text-xs text-gray-600 font-normal italic ml-1">Lata</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="pl-1">
                <h3 className="text-base font-semibold text-gray-800 mb-0.5 relative pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full leading-tight">
                  Drinks e Cachaças
                </h3>
                <div className="flex items-baseline justify-between w-full mb-0.5 leading-tight">
                  <span className="pr-1 text-sm text-gray-800 bg-white">Caipirinha (Cachaça e limão)</span>
                  <div className="flex-1 mx-1 border-b border-dotted border-black relative -top-1"></div>
                  <div className="flex flex-col items-end gap-0.5 pl-1 bg-white">
                    <span className="font-semibold text-black whitespace-nowrap text-sm leading-tight">R$ 30</span>
                  </div>
                </div>
                <div className="flex items-baseline justify-between w-full mb-0.5 leading-tight">
                  <span className="pr-1 text-sm text-gray-800 bg-white">Caipiroska (Vodka e frutas da estação)</span>
                  <div className="flex-1 mx-1 border-b border-dotted border-black relative -top-1"></div>
                  <div className="flex flex-col items-end gap-0.5 pl-1 bg-white">
                    <span className="font-semibold text-black whitespace-nowrap text-sm leading-tight">R$ 35</span>
                  </div>
                </div>
                <div className="flex items-baseline justify-between w-full mb-0.5 leading-tight">
                  <span className="pr-1 text-sm text-gray-800 bg-white">Dose de Cachaça (Colonial ou Seleta)</span>
                  <div className="flex-1 mx-1 border-b border-dotted border-black relative -top-1"></div>
                  <div className="flex flex-col items-end gap-0.5 pl-1 bg-white">
                    <span className="font-semibold text-black whitespace-nowrap text-sm leading-tight">R$ 12</span>
                  </div>
                </div>
                <div className="flex items-baseline justify-between w-full mb-0.5 leading-tight">
                  <span className="pr-1 text-sm text-gray-800 bg-white">Dupla dose de Campari com gelo</span>
                  <div className="flex-1 mx-1 border-b border-dotted border-black relative -top-1"></div>
                  <div className="flex flex-col items-end gap-0.5 pl-1 bg-white">
                    <span className="font-semibold text-black whitespace-nowrap text-sm leading-tight">R$ 18</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Appetizers and Snacks */}
            <div className="space-y-1.5">
              <h2 className="text-base font-bold text-black mb-0.5 border-b border-black pb-0.5 uppercase tracking-wider leading-tight">
                ENTRADAS E PETISCOS
              </h2>
              
              <div className="pl-1">
                <h3 className="text-base font-semibold text-gray-800 mb-0.5 relative pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full leading-tight">
                  Sanduíches e Lanches
                </h3>
                <div className="flex items-baseline justify-between w-full mb-0.5 leading-tight">
                  <div>
                    <span className="pr-1 text-sm text-gray-800 bg-white">Prato de Frios Especial da Casa</span>
                    <p className="text-xs text-gray-600 pl-2">Azeitona preta, Pepino e Queijo</p>
                  </div>
                  <div className="flex-1 mx-1 border-b border-dotted border-black relative -top-1"></div>
                  <div className="flex flex-col items-end gap-0.5 pl-1 bg-white">
                    <span className="font-semibold text-black whitespace-nowrap text-sm leading-tight">R$ 40</span>
                  </div>
                </div>
                <div className="flex items-baseline justify-between w-full mb-0.5 leading-tight">
                  <div>
                    <span className="pr-1 text-sm text-gray-800 bg-white">Tirinhas de Peixe da Casa</span>
                    <p className="text-xs text-gray-600 pl-2">Matrinxã, Pintado ou peixe do dia</p>
                  </div>
                  <div className="flex-1 mx-1 border-b border-dotted border-black relative -top-1"></div>
                  <div className="flex flex-col items-end gap-0.5 pl-1 bg-white">
                    <span className="font-semibold text-black whitespace-nowrap text-sm leading-tight">R$ 60</span>
                  </div>
                </div>
                <div className="flex items-baseline justify-between w-full mb-0.5 leading-tight">
                  <div>
                    <span className="pr-1 text-sm text-gray-800 bg-white">Tostex Misto</span>
                    <p className="text-xs text-gray-600 pl-2">Queijo, presunto e tomate no pão de forma</p>
                  </div>
                  <div className="flex-1 mx-1 border-b border-dotted border-black relative -top-1"></div>
                  <div className="flex flex-col items-end gap-0.5 pl-1 bg-white">
                    <span className="font-semibold text-black whitespace-nowrap text-sm leading-tight">R$ 25</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Quick Dishes and Desserts */}
            <div className="space-y-1.5">
              <div>
                <h2 className="text-base font-bold text-black mb-0.5 border-b border-black pb-0.5 uppercase tracking-wider leading-tight">
                  PRATOS RÁPIDOS
                </h2>
                <p className="text-xs text-gray-600 italic mb-2">Disponíveis após o horário do buffet para hóspedes</p>
                
                <div className="pl-1 mb-4">
                  <div className="flex items-baseline justify-between w-full mb-0.5 leading-tight">
                    <span className="pr-1 text-sm text-gray-800 bg-white">Nhoque de Mandioca ao Sugo</span>
                    <div className="flex-1 mx-1 border-b border-dotted border-black relative -top-1"></div>
                    <div className="flex flex-col items-end gap-0.5 pl-1 bg-white">
                      <span className="font-semibold text-black whitespace-nowrap text-sm leading-tight">R$ 45</span>
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between w-full mb-0.5 leading-tight">
                    <div>
                      <span className="pr-1 text-sm text-gray-800 bg-white">Spaguetti Napolitano</span>
                      <p className="text-xs text-gray-600 pl-2">Molho de tomate com manjericão</p>
                    </div>
                    <div className="flex-1 mx-1 border-b border-dotted border-black relative -top-1"></div>
                    <div className="flex flex-col items-end gap-0.5 pl-1 bg-white">
                      <span className="font-semibold text-black whitespace-nowrap text-sm leading-tight">R$ 45</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-base font-bold text-black mb-0.5 border-b border-black pb-0.5 uppercase tracking-wider leading-tight">
                  SOBREMESAS
                </h2>
                
                <div className="pl-1">
                  <div className="flex items-baseline justify-between w-full mb-0.5 leading-tight">
                    <span className="pr-1 text-sm text-gray-800 bg-white">Sagu</span>
                    <div className="flex-1 mx-1 border-b border-dotted border-black relative -top-1"></div>
                    <div className="flex flex-col items-end gap-0.5 pl-1 bg-white">
                      <span className="font-semibold text-black whitespace-nowrap text-sm leading-tight flex items-center gap-0.5">
                        R$ 10<span className="text-xs text-gray-600 font-normal italic ml-1">100 ml</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-300 text-center">
            <div className="flex items-center justify-center gap-1 mb-1.5 italic">
              <span className="text-sm text-black">🌿</span>
              <p>Sabores de Casa na Floresta</p>
            </div>
            
            <div className="flex justify-center items-center gap-8 mb-1.5">
              <div>
                <p className="text-sm text-gray-600">Restrições alimentares: Informe ao garçom</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Gostou da experiência? Avalie-nos no Google!</p>
              </div>
            </div>

            <div className="flex justify-center">
              <img src="/QRCode.jpg" alt="Google Review QR Code" className="max-w-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu; 