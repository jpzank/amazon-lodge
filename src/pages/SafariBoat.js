import React from 'react';
import { getFolderImage } from '../config/cloudinaryConfig';

const SafariBoat = () => {
  const heroStyle = {
    backgroundImage: `url(${getFolderImage('safari-boat', 'hero')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const speciesStyles = {
    pirarucu: {
      backgroundImage: `url(${getFolderImage('safari-boat', 'pirarucu')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    pintado: {
      backgroundImage: `url(${getFolderImage('safari-boat', 'pintado')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    martim: {
      backgroundImage: `url(${getFolderImage('safari-boat', 'martim')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    bigua: {
      backgroundImage: `url(${getFolderImage('safari-boat', 'bigua')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    sucuri: {
      backgroundImage: `url(${getFolderImage('safari-boat', 'sucuri')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] flex items-center justify-center text-center text-white"
        style={heroStyle}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4 tracking-wide text-shadow">
            Boat Safari
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            Aventuras pelos Rios da Amazônia
          </p>
        </div>
      </div>

      {/* Rio Claro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-semibold text-center mb-12">Safari no Rio Claro</h2>
          <div className="space-y-8 text-gray-700">
            <p>
              O Rio Claro, como revela o nome, um rio de águas muito claras que quanto mais avança a estação seca, 
              entre maio e setembro, mais transparentes ficam suas águas. Então, formam-se belas praias de areia 
              branca e sua água tem temperatura sempre agradável.
            </p>
            <p>
              As matas de galeria ao longo do rio Claro e principalmente a vegetação de mata aberta ao longo dos lagos, 
              são hábitats do Conothraupis mesoleuca (tiê bicudo), registrado no local em 2006. O rio Claro é a 
              principal área conhecida de ocorrência da espécie.
            </p>
          </div>
        </div>
      </section>

      {/* Wildlife Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-8">Vida Selvagem</h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
            O Rio Claro e seus arredores são um refúgio para uma incrível diversidade de vida selvagem, cada expedição representa oportunidades de observar espécies fascinantes, como:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 relative" style={speciesStyles.pirarucu}></div>
              <div className="p-6">
                <span className="block text-lg font-semibold text-gray-900">Arapaima gigas</span>
                <span className="block text-primary text-sm font-medium mb-4">(Pirarucu)</span>
                <p className="text-gray-700">
                  O Pirarucu é um dos maiores peixes de água doce do mundo, podendo atingir até 3 metros 
                  de comprimento e pesar mais de 200 kg.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 relative" style={speciesStyles.pintado}></div>
              <div className="p-6">
                <span className="block text-lg font-semibold text-gray-900">Pseudoplatystoma corruscans</span>
                <span className="block text-primary text-sm font-medium mb-4">(Pintado)</span>
                <p className="text-gray-700">
                  O Pintado é um peixe de couro com coloração acinzentada e manchas escuras, podendo 
                  alcançar até 1,8 metro de comprimento e pesar cerca de 86 kg.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 relative" style={speciesStyles.martim}></div>
              <div className="p-6">
                <span className="block text-lg font-semibold text-gray-900">Megaceryle torquata</span>
                <span className="block text-primary text-sm font-medium mb-4">(Martim-pescador-grande)</span>
                <p className="text-gray-700">
                  Ave pescadora de coloração azulada e peito branco, especialista em capturar peixes 
                  com seus mergulhos precisos.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 relative" style={speciesStyles.bigua}></div>
              <div className="p-6">
                <span className="block text-lg font-semibold text-gray-900">Nannopterum brasilianum</span>
                <span className="block text-primary text-sm font-medium mb-4">(Biguá)</span>
                <p className="text-gray-700">
                  Ave mergulhadora comum em rios e lagos, de plumagem escura, exímia nadadora que 
                  pode permanecer submersa por longos períodos.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 relative" style={speciesStyles.sucuri}></div>
              <div className="p-6">
                <span className="block text-lg font-semibold text-gray-900">Eunectes murinus</span>
                <span className="block text-primary text-sm font-medium mb-4">(Sucuri ou Anaconda)</span>
                <p className="text-gray-700">
                  Serpente aquática de grande porte, frequentemente encontrada em corpos d'água da região, 
                  perfeitamente adaptada ao ambiente aquático.
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mt-12">
            Além destas espécies emblemáticas, o Rio Claro abriga uma extraordinária variedade de vida selvagem, 
            incluindo diversos peixes amazônicos, aves aquáticas, jacarés e tartarugas. Cada expedição oferece 
            oportunidades especiais de observação da fauna em seu habitat natural.
          </p>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-12">Segurança e Conforto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="text-4xl text-center mb-6">🦺</div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">Segurança Garantida</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  Coletes salva-vidas
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  Kit primeiros socorros
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  Comunicação por rádio
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  Controle do limite de passageiros
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="text-4xl text-center mb-6">🌡️</div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">Para o seu conforto, traga:</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  Protetor solar indispensável
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  Água mineral para hidratação
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  Repelente para sua proteção contra insetos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-semibold mb-6">Reserve Sua Aventura</h2>
          <p className="text-lg text-gray-700 mb-12">
            Embarque em uma jornada inesquecível pelos rios da Amazônia
          </p>
          <button 
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
            onClick={() => window.open('https://book.omnibees.com/hotel/19972?lang=pt-BR&currencyId=16&version=4', '_blank')}
          >
            Reserve Agora
          </button>
        </div>
      </section>
    </div>
  );
}

export default SafariBoat; 