import React from 'react';
import { FaPrint } from 'react-icons/fa';

const printTarifario = () => {
  const content = document.querySelector('.tarifario-content')?.outerHTML;
  if (!content) {
    console.error('Tarifario content not found');
    return;
  }

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Tarifário de Eventos</title>
        <style>
          @page {
            size: A4;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }
          @media print {
            * {
              -webkit-print-color-adjust: exact !important;
              color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            img {
              max-width: 100%;
              height: auto;
            }
            .tarifario-content {
              padding: 2cm !important;
            }
          }
        </style>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      </head>
      <body>
        ${content}
      </body>
    </html>
  `);
  printWindow.document.close();
  
  setTimeout(() => {
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  }, 500);
};

function TarifarioEventos() {
  return (
    <div className="max-w-[21cm] mx-auto px-4">
      <div className="flex justify-center mb-8">
        <button 
          onClick={printTarifario} 
          className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-base bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5"
        >
          <FaPrint /> Imprimir Tarifário
        </button>
      </div>
      
      <div className="bg-white shadow-lg mb-16 p-[0.5cm] md:p-[2cm] rounded-lg">
        <div className="tarifario-content max-w-3xl mx-auto">
          {/* Header with Logo */}
          <div className="flex justify-between items-start mb-8 border-b border-black pb-4">
            <div>
              <img src="/Logo_Jardim_Amazonia_COLORIDO.png" alt="Jardim da Amazônia" className="h-20 w-auto" />
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-black mb-1">TARIFÁRIO DE EVENTOS</h1>
              <p className="text-sm text-gray-600 italic">Experiências na Natureza</p>
            </div>
          </div>

          {/* Ensaios Fotográficos */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-black mb-4 border-b border-black pb-2">ENSAIOS FOTOGRÁFICOS</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-baseline">
                <span className="text-base font-medium">Meia diária para ensaio</span>
                <span className="font-bold">R$ 890</span>
              </div>
              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>Acesso a todas as áreas do lodge por 6 horas</li>
                <li>Garrafa de vinho selecionado</li>
                <li>Assistente para auxílio com locações</li>
                <li>Até 5 pessoas (fotógrafo + equipe/modelos)</li>
              </ul>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Pessoa adicional:</span> R$ 150
              </div>
            </div>
          </div>

          {/* Noite de Núpcias */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-black mb-4 border-b border-black pb-2">NOITE DE NÚPCIAS</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-baseline">
                <span className="text-base font-medium">Pacote básico</span>
                <span className="font-bold">R$ 2.500</span>
              </div>
              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>1 diária no Bangalô Jardim</li>
                <li>Decoração romântica especial</li>
                <li>Roupão personalizado para o casal</li>
                <li>Espumante de boas-vindas</li>
                <li>Café da manhã especial servido no quarto</li>
                <li>Early check-in e late check-out (sujeito a disponibilidade)</li>
              </ul>
            </div>
          </div>

          {/* Mini-Weddings */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-black mb-4 border-b border-black pb-2">MINI-WEDDINGS</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-baseline">
                <span className="text-base font-medium">Pacote básico (até 40 pessoas)</span>
                <span className="font-bold">R$ 19.900</span>
              </div>
              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>Exclusividade do espaço por 12 horas</li>
                <li>Decoração básica com flores naturais</li>
                <li>Buffet completo com bebidas não alcoólicas</li>
                <li>Equipe de coordenação do evento</li>
                <li>2 diárias para os noivos no Bangalô Jardim</li>
                <li>Estrutura de som e iluminação básica</li>
              </ul>
              <div className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Serviços adicionais:</span>
                <ul className="list-none pl-5 space-y-1 mt-1">
                  <li>• Cerimonialista: R$ 2.500</li>
                  <li>• Fotógrafo: R$ 3.500</li>
                  <li>• DJ: R$ 2.000</li>
                  <li>• Bartender: R$ 1.500</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Retiros Corporativos */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-black mb-4 border-b border-black pb-2">RETIROS CORPORATIVOS</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-baseline">
                <span className="text-base font-medium">Pacote básico (até 20 pessoas)</span>
                <span className="font-bold">R$ 15.900/dia</span>
              </div>
              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>Uso exclusivo do espaço</li>
                <li>Hospedagem nas acomodações disponíveis</li>
                <li>Pensão completa</li>
                <li>Sala de reuniões equipada</li>
                <li>1 atividade team building</li>
                <li>Wi-Fi de alta velocidade</li>
              </ul>
              <div className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Serviços adicionais:</span>
                <ul className="list-none pl-5 space-y-1 mt-1">
                  <li>• Facilitador para workshops: R$ 2.500/dia</li>
                  <li>• Equipamentos audiovisuais: R$ 1.500/dia</li>
                  <li>• Atividades extras de team building: R$ 1.800/atividade</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Residências Artísticas e Nômade Digital */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-lg font-bold text-black mb-4 border-b border-black pb-2">RESIDÊNCIAS ARTÍSTICAS</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-base font-medium">Pacote semanal</span>
                  <span className="font-bold">R$ 4.900</span>
                </div>
                <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                  <li>7 diárias com pensão completa</li>
                  <li>Espaço dedicado para criação</li>
                  <li>Wi-Fi de alta velocidade</li>
                  <li>Acesso a todas as áreas comuns</li>
                </ul>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Semana adicional:</span> R$ 4.200
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-black mb-4 border-b border-black pb-2">NÔMADE DIGITAL</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-base font-medium">Pacote semanal</span>
                  <span className="font-bold">R$ 3.900</span>
                </div>
                <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                  <li>7 diárias com pensão completa</li>
                  <li>Wi-Fi de alta velocidade</li>
                  <li>Espaço de trabalho dedicado</li>
                  <li>Acesso a todas as áreas comuns</li>
                </ul>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Semana adicional:</span> R$ 3.300
                </div>
              </div>
            </div>
          </div>

          {/* Políticas e Condições */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-black mb-4 border-b border-black pb-2">POLÍTICAS E CONDIÇÕES</h2>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Reserva antecipada obrigatória</li>
              <li>Sinal de 50% para confirmação</li>
              <li>Cancelamento gratuito até 30 dias antes do evento</li>
              <li>Seguro evento obrigatório para mini-weddings e eventos corporativos</li>
              <li>Horários flexíveis mediante consulta</li>
              <li>Serviços adicionais devem ser contratados com 15 dias de antecedência</li>
            </ul>
          </div>

          {/* Benefícios Inclusos */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-black mb-4 border-b border-black pb-2">BENEFÍCIOS INCLUSOS</h2>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Coordenador dedicado</li>
              <li>Estacionamento</li>
              <li>Gerador de emergência</li>
              <li>Equipe de limpeza</li>
              <li>Segurança</li>
              <li>Acesso à piscina natural (quando aplicável ao tipo de evento)</li>
              <li>Wi-Fi nas áreas comuns</li>
            </ul>
          </div>

          {/* Descontos e Promoções */}
          <div>
            <h2 className="text-lg font-bold text-black mb-4 border-b border-black pb-2">DESCONTOS E PROMOÇÕES</h2>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>10% para eventos em baixa temporada (janeiro-junho)</li>
              <li>15% para pacotes de residência artística acima de 30 dias</li>
              <li>10% para retiros corporativos acima de 3 dias</li>
              <li>Condições especiais para eventos beneficentes ou culturais</li>
            </ul>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-4 border-t border-gray-300 text-center text-sm text-gray-600">
            <p>Valores sujeitos a alteração sem aviso prévio.</p>
            <p className="mt-2">
              Para mais informações e reservas: <br />
              WhatsApp: (65) 99675-1401 | E-mail: atendimento@jardimamazonia.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TarifarioEventos; 