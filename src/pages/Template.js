import React from 'react';
import { 
  FaWifi, 
  FaShower, 
  FaFan, 
  FaLeaf, 
  FaMountain, 
  FaHeart,
  FaChevronRight
} from 'react-icons/fa';
import { getFolderImage } from '../config/cloudinaryConfig';

const heroStyle = {
  backgroundImage: `url(${getFolderImage('home', 'hero')})`,
};

function Template() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-cover bg-center" style={heroStyle}>
        <div className="absolute inset-0 bg-black/60">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <span className="inline-block px-4 py-2 bg-primary/20 rounded-full text-sm font-medium mb-4">Design System</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Jardim Amazônia</h1>
            <p className="text-xl text-gray-200">Guia de estilo e componentes</p>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">01</span>
            <h2 className="text-4xl font-bold mb-4">Typography</h2>
            <p className="text-xl text-gray-600">Sistema tipográfico harmonioso que combina elegância e legibilidade</p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <h1 className="text-6xl font-bold flex-shrink-0 w-64">Heading 1</h1>
              <div className="space-y-2">
                <span className="block font-semibold">Montserrat Bold</span>
                <span className="block text-gray-600">4rem (64px) | Weight: 700</span>
                <span className="block text-gray-500">Hero titles, main headlines</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <h2 className="text-4xl font-semibold flex-shrink-0 w-64">Heading 2</h2>
              <div className="space-y-2">
                <span className="block font-semibold">Montserrat SemiBold</span>
                <span className="block text-gray-600">2.5rem (40px) | Weight: 600</span>
                <span className="block text-gray-500">Section headers, important titles</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <h3 className="text-2xl font-medium flex-shrink-0 w-64">Heading 3</h3>
              <div className="space-y-2">
                <span className="block font-semibold">Montserrat Medium</span>
                <span className="block text-gray-600">1.5rem (24px) | Weight: 500</span>
                <span className="block text-gray-500">Subtitles, card headers</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <p className="text-base flex-shrink-0 w-64">Body Text Example</p>
              <div className="space-y-2">
                <span className="block font-semibold">Lato Regular</span>
                <span className="block text-gray-600">1rem (16px) | Weight: 400</span>
                <span className="block text-gray-500">Main content, descriptions, paragraphs</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <p className="text-sm flex-shrink-0 w-64">UI Text Example</p>
              <div className="space-y-2">
                <span className="block font-semibold">Poppins Medium</span>
                <span className="block text-gray-600">0.9rem (14px) | Weight: 500</span>
                <span className="block text-gray-500">Buttons, labels, navigation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">02</span>
            <h2 className="text-4xl font-bold mb-4">Colors</h2>
            <p className="text-xl text-gray-600">Paleta de cores que reflete a natureza e sustentabilidade</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-full h-32 bg-primary rounded-lg mb-4"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Primary Green</h3>
                <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm font-mono mb-2">#45A049</span>
                <p className="text-gray-600">Main actions, highlights, accents</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-full h-32 bg-[#2C5530] rounded-lg mb-4"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Deep Forest</h3>
                <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm font-mono mb-2">#2C5530</span>
                <p className="text-gray-600">Headers, secondary elements</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-full h-32 bg-[#333333] rounded-lg mb-4"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Earth Gray</h3>
                <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm font-mono mb-2">#333333</span>
                <p className="text-gray-600">Text, content, icons</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-full h-32 bg-[#F5F5F5] rounded-lg mb-4 border border-gray-200"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cloud White</h3>
                <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm font-mono mb-2">#F5F5F5</span>
                <p className="text-gray-600">Backgrounds, cards, sections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">03</span>
            <h2 className="text-4xl font-bold mb-4">Components</h2>
            <p className="text-xl text-gray-600">Elementos de interface consistentes e reutilizáveis</p>
          </div>

          {/* Cards */}
          <div className="mb-24">
            <h3 className="text-2xl font-semibold mb-4">Cards</h3>
            <p className="text-gray-600 mb-8">Cartões informativos com layout flexível e hierarquia clara</p>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${getFolderImage('acomodacoes', 'bangalo-familia')})`}}></div>
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-primary/90 text-white px-4 py-2 rounded-full">
                  <FaLeaf className="text-sm" />
                  <span className="text-sm font-medium">Premium</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Bangalô Família</h3>
                <p className="text-gray-600 mb-6">
                  Espaçosa acomodação com vista privilegiada para a natureza, ideal para famílias que buscam conforto e privacidade.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaWifi className="text-primary" />
                    <span>Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaShower className="text-primary" />
                    <span>Chuveiro Natural</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaFan className="text-primary" />
                    <span>Ventilador</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-24">
            <h3 className="text-2xl font-semibold mb-4">Buttons</h3>
            <p className="text-gray-600 mb-8">Botões com diferentes níveis de ênfase e propósito</p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="btn-accent">
                Reservar
              </button>
              <button className="btn-primary flex items-center gap-2">
                <span>Primary Action</span>
                <FaChevronRight />
              </button>
              <button className="btn-secondary">
                Secondary Action
              </button>
            </div>
          </div>

          {/* Form Elements */}
          <div className="mb-24">
            <h3 className="text-2xl font-semibold mb-4">Form Elements</h3>
            <p className="text-gray-600 mb-8">Campos de formulário estilizados e acessíveis</p>

            <div className="max-w-xl mx-auto space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-medium text-gray-700">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Digite seu nome" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium text-gray-700">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="seu@email.com" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium text-gray-700">Mensagem</label>
                <textarea 
                  id="message" 
                  placeholder="Digite sua mensagem" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 min-h-[120px]"
                ></textarea>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                />
                <label htmlFor="terms" className="text-gray-700">Li e aceito os termos de uso</label>
              </div>
            </div>
          </div>

          {/* Icons */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Icons</h3>
            <p className="text-gray-600 mb-8">Sistema de ícones consistente para melhor comunicação visual</p>

            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaWifi className="text-xl text-primary" />
                </div>
                <span className="text-sm text-gray-600">Wi-Fi</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaShower className="text-xl text-primary" />
                </div>
                <span className="text-sm text-gray-600">Chuveiro</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaMountain className="text-xl text-primary" />
                </div>
                <span className="text-sm text-gray-600">Trilhas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Template; 