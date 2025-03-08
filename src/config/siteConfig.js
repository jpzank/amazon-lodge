export const siteConfig = {
  // Site-wide settings
  site: {
    name: 'Jardim da Amazônia',
    description: 'Um Refúgio de Riquezas Naturais',
    baseUrl: process.env.REACT_APP_BASE_URL || 'https://www.jardimdaamazonia.com',
    bookingUrl: 'https://book.omnibees.com/hotel/19972?lang=pt-BR&currencyId=16&version=4'
  },

  // Button Links Configuration
  buttonLinks: {
    // Booking related
    bookNow: 'https://book.omnibees.com/hotel/19972?lang=pt-BR&currencyId=16&version=4',
    
    // Social Media and Contact
    whatsapp: 'https://wa.me/556540420595',
    instagram: 'https://instagram.com/jardimdaamazonia',
    facebook: 'https://www.facebook.com/jdamazonia',
    tripadvisor: 'https://www.tripadvisor.com.br/Hotel_Review-g2510096-d2500139-Reviews-or5-Jardim_Da_Amazonia_Lodge-Sao_Jose_do_Rio_Claro_State_of_Mato_Grosso.html',
    email: 'atendimento@jardimdaamazonia.com',
    
    // Main Navigation
    home: '/',
    
    // Experience Pages
    birdwatching: '/birdwatching',
    safariBoat: '/safari-boat',
    primates: '/primatas',
    gastronomy: '/gastronomia',
    accommodation: '/acomodacoes',
    areasExternas: '/lodge',
    trilhas: '/trilhas',
    guiasCampo: '/guias-campo',
    eventosCorporativos: '/eventos-corporativos',
    eventosNatureza: '/eventos-natureza',
    
    // Information Pages
    ourHistory: '/nossa-historia',
    documents: '/documentos',
    faq: '/faq',
    comoChegar: '/como-chegar',
    contato: '/como-chegar',
    reservas: '/faq',
    galeria: '/galeria',
    privacyPolicy: '/privacy-policy',
    
    // Research and Nature
    estacaoPesquisa: '/estacao-pesquisa',
    nascenteNatural: '/nascente-natural',
    falaramDeNos: '/falaram-de-nos',
    
    // External Research Links
    ebirdHotspot: 'https://ebird.org/hotspot/L968651',
    birdlifeDatazone: 'https://datazone.birdlife.org/site/factsheet/rio-claro-iba-brazil',
    wikiAves: 'https://www.wikiaves.com.br/municipio_5107305'
  },

  // Social media links
  social: {
    instagram: 'https://instagram.com/jardimdaamazonia',
    facebook: 'https://facebook.com/jardimdaamazonia',
    tripadvisor: 'https://tripadvisor.com/jardimdaamazonia'
  },

  // Homepage sections configuration
  home: {
    hero: {
      title: 'JARDIM DA AMAZÔNIA',
      subtitle: 'Um Refúgio de Riquezas Naturais',
      videoUrl: 'https://player.vimeo.com/video/1050426624',
      mobileVideoUrl: 'https://player.vimeo.com/video/1050452277'
    },

    biodiversity: {
      stats: [
        { number: '590+', title: 'Espécies de Aves', desc: 'Catalogadas em nossa reserva' },
        { number: '7', title: 'Espécies de Primatas', desc: 'Dos 29 reconhecidos em MT' },
        { number: '30+', title: 'Mamíferos', desc: 'De médio e grande porte' },
        { number: '∞', title: 'Experiências', desc: 'na natureza' }
      ]
    },

    conservation: {
      title: 'CONSERVAÇÃO',
      subtitle: 'Preservando o futuro da Amazônia',
      description: 'Comprometidos com a preservação da biodiversidade, atuamos em diversas frentes de conservação e pesquisa científica.',
      items: [
        {
          id: 'research',
          title: 'Pesquisa Científica',
          desc: 'Apoiamos cientistas e pesquisadores em estudos sobre a fauna e flora locais.'
        },
        {
          id: 'education',
          title: 'Educação Ambiental',
          desc: 'Programas educativos para comunidades locais e visitantes.'
        },
        {
          id: 'sustainable',
          title: 'Turismo Sustentável',
          desc: 'Práticas de baixo impacto que beneficiam o meio ambiente e a comunidade.'
        }
      ]
    },

    recognition: {
      items: [
        {
          id: 'save-brasil',
          title: 'Important Bird Area',
          desc: 'Reconhecido pela BirdLife International e SAVE Brasil'
        },
        {
          id: 'ebird',
          title: 'TOP 3 Hotspot',
          desc: 'E-bird / The Cornell Lab of Ornithology'
        },
        {
          id: 'i-eco',
          title: 'Instituto Ecótono',
          desc: 'Parceria com o IECO no em estudos científicos'
        }
      ]
    },

    experiences: {
      title: 'EXPERIÊNCIAS',
      items: [
        {
          id: 'birdwatching',
          title: 'Birdwatching',
          desc: 'Top 3 melhores destinos de observação de aves do Brasil',
          link: '/birdwatching'
        },
        {
          id: 'primates',
          title: 'Primatas',
          desc: 'Se encante com a fascinante Rota dos Primatas de MT',
          link: '/primatas'
        },
        {
          id: 'safari',
          title: 'Safari no Rio Claro',
          desc: 'Navegue por águas cristalinas em meio à natureza',
          link: '/safari-boat'
        }
      ]
    },
  }
};

// Theme configuration
export const themeConfig = {
  colors: {
    primary: '#2C5530',
    primaryLight: 'rgba(44, 85, 48, 0.1)',
    secondary: '#8B9D77',
    accent: '#E4B04A',
    text: '#333333',
    textLight: '#666666',
    light: '#FFFFFF',
    backgroundLight: '#F5F5F5',
    backgroundDark: '#1A1A1A'
  },
  
  typography: {
    fontFamily: {
      primary: "'Montserrat', sans-serif",
      secondary: "'Lato', sans-serif",
      tertiary: "'Montserrat', sans-serif"
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem'
    }
  },

  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem'
  },

  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '1024px',
    lg: '1280px',
    xl: '1536px'
  }
};

// API endpoints configuration
export const apiConfig = {
  endpoints: {
    booking: process.env.REACT_APP_BOOKING_API || 'https://book.omnibees.com/hotel/19972?lang=pt-BR&currencyId=16&version=4'
  },
  timeout: 30000, // 30 seconds
  retryAttempts: 3
};

// Feature flags for controlling functionality
export const featureFlags = {
  enableBooking: true,
  enableTestimonials: true,
  enableNewsletter: false,
  enableChat: false
}; 