import React from 'react';
import { FaPrint } from 'react-icons/fa';
import { printReceptivo } from '../utils/printUtils';

function Receptivo() {
  return (
    <div className="max-w-[21cm] mx-auto px-4">
      <div className="flex justify-center mb-8">
        <button 
          onClick={printReceptivo} 
          className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-base bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5"
        >
          <FaPrint /> Imprimir Informações
        </button>
      </div>

      <div className="bg-white shadow-lg mb-16 p-[0.5cm] md:p-[2cm] rounded-lg">
        <div className="receptivo-content max-w-3xl mx-auto">
          <div className="flex flex-col items-center mb-8 pb-8 border-b-2 border-gray-200">
            <img 
              src="/Logo Jd Amazonia.png" 
              alt="Jardim da Amazônia Lodge"
              className="h-24 w-auto mb-4"
            />
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Bem-vindo ao Jardim da Amazônia Lodge</h2>
              <p className="text-lg text-gray-700">Estamos muito felizes em recebê-lo! Para garantir uma estadia tranquila e agradável, confira as informações importantes sobre horários e serviços:</p>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4">Horários de Entrada e Saída</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Entrada nos apartamentos: a partir das 16h</li>
                    <li>Saída dos apartamentos: até as 14h</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4">Horários de Funcionamento</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Cozinha: fecha às 15h, reabre às 17h30</li>
                    <li>Bar: fecha às 22h</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-4">Horários das Refeições</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Café da manhã: das 7h30 às 9h30</li>
                  <li>Almoço: às 12h30</li>
                  <li>Jantar: às 19h30</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-4">Wi-Fi</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="font-semibold">Rede:</span> pousadavisitante | <span className="font-semibold">Senha:</span> jardim2020</li>
                  <li><span className="font-semibold">Rede:</span> pousada | <span className="font-semibold">Senha:</span> jdamazonia</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-4 text-red-800">O que não está incluído na hospedagem:</h4>
                <ul className="space-y-2 text-red-700">
                  <li>Bebidas</li>
                  <li>Transporte</li>
                  <li>Passeios</li>
                  <li>Pescaria (não atendemos pescaria)</li>
                  <li>Itens extras não mencionados</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-4">Serviço de Cozinha</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Sexta e Sábado: Buffet</li>
                  <li>Domingo a Quinta-feira à noite: Prato do dia</li>
                  <li className="text-sm italic mt-2">*Os serviços podem ser alterados conforme a demanda</li>
                </ul>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-4">Compromisso com a Natureza</h4>
                <p className="text-gray-700">Como hóspede do Jardim da Amazônia Lodge, você faz parte do nosso compromisso com a preservação ambiental. Ajude-nos a proteger este paraíso natural utilizando recursos de forma consciente e respeitando a vida selvagem local.</p>
              </div>

              <div className="text-center space-y-4 pt-8 border-t border-gray-200">
                <p className="text-gray-700">Se tiver dúvidas ou precisar de assistência durante sua estadia, nossa equipe estará à disposição para ajudar.</p>
                <p className="text-gray-700">Agradecemos por escolher o Jardim da Amazônia. Aproveite sua estadia!</p>
                <p className="text-gray-800 italic">
                  Atenciosamente,<br />
                  Equipe Jardim da Amazônia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receptivo; 