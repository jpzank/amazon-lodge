export const siteConfig = {
  // Site-wide settings
  site: {
    name: 'Jardim da Amazônia',
    description: 'Um Refúgio de Riquezas Naturais',
    baseUrl: process.env.REACT_APP_BASE_URL || 'https://jardimdaamazonia.com.br',
    bookingUrl: 'https://book.omnibees.com/hotel/19972?lang=pt-BR&currencyId=16&version=4'
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
      videoUrl: 'https://player.vimeo.com/video/1043999382'
    },

    biodiversity: {
      stats: [
        { number: '580+', title: 'Espécies de Aves', desc: 'Catalogadas em nossa reserva' },
        { number: '7', title: 'Espécies de Primatas', desc: 'Dos 29 reconhecidos em MT' },
        { number: '30+', title: 'Mamíferos', desc: 'De médio e grande porte' },
        { number: '∞', title: 'Experiências', desc: 'Únicas na natureza' }
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
      title: 'EXPERIÊNCIAS EXTRAORDINÁRIAS',
      subtitle: 'Aventuras no Coração da Natureza',
      items: [
        {
          id: 'birdwatching',
          title: 'Birdwatching',
          desc: 'Um dos melhores destinos de observação de aves do Brasil',
          link: '/birdwatching'
        },
        {
          id: 'primates',
          title: 'Primatas',
          desc: 'Descubra e explore a fascinante Rota dos Primatas',
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

    testimonials: {
      title: 'O QUE DIZEM NOSSOS VISITANTES',
      items: [
        {
          quote: "Jardim da Amazônia – Uma incrível empresa familiar na linha de frente da conservação da Floresta Amazônica!",
          author: "M Carr - USA",
          date: "April 2023"
        },
        {
          quote: "Uma experiência única de imersão na natureza. O encontro perfeito entre conforto e aventura sustentável.",
          author: "Ana Silva - Brasil",
          date: "Março 2023"
        },
        {
          quote: "Paradise for birdwatchers! The diversity of species and professional guidance made our stay unforgettable.",
          author: "John Miller - UK",
          date: "May 2023"
        }
      ]
    },

    conservation: {
      title: 'COMPROMISSO COM O FUTURO',
      description: `Nossa dedicação à conservação da biodiversidade e ao turismo sustentável 
        tem ajudado a preservar uma das últimas áreas intocadas de floresta 
        amazônica primária, transformando este lugar em um importante santuário 
        ecológico para as gerações futuras.`
    },

    cta: {
      title: 'Sua Aventura Começa Aqui',
      subtitle: 'Descubra experiências únicas no coração da Amazônia'
    }
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
      tertiary: "'Poppins', sans-serif"
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
    booking: process.env.REACT_APP_BOOKING_API || 'https://api.jardimdaamazonia.com.br/booking',
    contact: process.env.REACT_APP_CONTACT_API || 'https://api.jardimdaamazonia.com.br/contact'
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