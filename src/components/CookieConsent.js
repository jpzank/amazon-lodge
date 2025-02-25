import React from 'react';
import { inject } from '@vercel/analytics';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = React.useState(true);

  // Simple function to set cookie
  const setCookie = (value) => {
    const date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000)); // 1 year
    document.cookie = `uiPreferences=${value};expires=${date.toUTCString()};path=/`;
  };

  // Check if cookie exists
  const checkCookie = () => {
    return document.cookie.split(';').some(item => item.trim().startsWith('uiPreferences='));
  };

  const handleAccept = () => {
    setCookie('accepted');
    setShowConsent(false);
    // Store UI preferences
    localStorage.setItem('uiPreferences', JSON.stringify({
      date: new Date().toISOString(),
      status: 'accepted'
    }));
    // Initialize Vercel Analytics
    inject();
  };

  const handleDecline = () => {
    setCookie('declined');
    setShowConsent(false);
  };

  // Check for existing consent on mount
  React.useEffect(() => {
    if (checkCookie()) {
      setShowConsent(false);
      // If previously accepted, initialize analytics
      const preferences = localStorage.getItem('uiPreferences');
      if (preferences) {
        const { status } = JSON.parse(preferences);
        if (status === 'accepted') {
          inject();
        }
      }
    }
  }, []);

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[49] animate-fadeIn">
      <div className="relative bg-white/90 backdrop-blur-sm text-gray-700 py-2 px-3 rounded-lg shadow-md border border-gray-100 flex flex-col items-center gap-2 max-w-[140px]">
        <button 
          onClick={handleDecline}
          className="absolute -top-1 -left-1 bg-white/90 text-gray-400 hover:text-gray-600 text-[10px] rounded-full flex items-center justify-center w-5 h-5 shadow-sm border border-gray-100"
          aria-label="Close"
        >
          ✕
        </button>
        
        <span className="text-[10px] leading-tight text-center">
          Cookies para melhorar experiência
        </span>
        
        <button
          onClick={handleAccept}
          className="bg-primary-dark text-white text-[11px] font-medium px-4 py-1 rounded-full hover:bg-primary-dark/90 transition-colors w-full"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CookieConsent; 