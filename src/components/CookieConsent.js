import React from 'react';
import { useTranslation } from 'react-i18next';
import { inject } from '@vercel/analytics';

const CookieConsent = () => {
  const { t } = useTranslation();
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
    <div className="fixed bottom-0 left-0 right-0 bg-primary-dark/95 text-white p-4 z-50">
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm md:text-base">
          {t('cookieConsent.message')}
          <a 
            href="/privacy-policy" 
            className="underline ml-1 hover:text-white/80"
          >
            {t('cookieConsent.learnMore')}
          </a>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm border border-white/20 rounded hover:bg-white/10 transition-colors"
          >
            {t('cookieConsent.decline')}
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-white text-primary-dark rounded hover:bg-white/90 transition-colors"
          >
            {t('cookieConsent.accept')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 