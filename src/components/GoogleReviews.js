import React from 'react';
import { FaPrint } from 'react-icons/fa';
import { printReviews } from '../utils/printUtils';

function GoogleReviews() {
  return (
    <div className="max-w-[21cm] mx-auto px-4">
      <div className="flex justify-center mb-8">
        <button 
          onClick={printReviews} 
          className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-base bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5"
        >
          <FaPrint /> Imprimir
        </button>
      </div>
      
      <div className="bg-white shadow-lg mb-16 p-[0.5cm] md:p-[2cm] rounded-lg">
        <div className="reviews-content max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="flex-1 text-center md:text-left">
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto md:mx-0">
                  <img 
                    src="https://media1.thehungryjpeg.com/thumbs2/800_3498249_405c4052489511468a7eae8a9c43d80a5d865323_coffee-cup-steam-mug-vector-icon.jpg" 
                    alt="Coffee mug with steam"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-2">
                Que tal um café por sua opinião?
              </h2>
              <div className="text-lg text-gray-600 italic">
                How about a coffee for your review?
              </div>
            </div>

            <div className="flex-1 text-center md:text-right">
              <img 
                src="/QRCode.jpg" 
                alt="QR Code para avaliação" 
                className="w-48 h-48 mx-auto md:ml-auto"
              />
              <div className="mt-4 space-y-2">
                <p className="text-gray-800">Escaneie o QR Code, compartilhe sua experiência e sirva um cafézinho!</p>
                <p className="text-gray-600 italic">Scan the QR Code, share your experience and get a coffee!</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center border-t border-gray-200 pt-8">
            <img 
              src="/Logo_Jardim_Amazonia_COLORIDO.png" 
              alt="Jardim da Amazônia" 
              className="h-16 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoogleReviews; 