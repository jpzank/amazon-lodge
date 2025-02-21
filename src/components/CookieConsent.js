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
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto bg-white/95 text-gray-600 p-3 rounded-lg shadow-lg z-50 max-w-md">
      <div className="flex flex-col gap-2">
        <div className="text-xs md:text-sm">
          {t('cookieConsent.message')}
          <a 
            href="/privacy-policy" 
            className="text-primary-dark hover:underline ml-1"
          >
            {t('cookieConsent.learnMore')}
          </a>
        </div>
        <div className="flex gap-2 justify-end">
          <button
            onClick={handleDecline}
            className="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 transition-colors"
          >
            {t('cookieConsent.decline')}
          </button>
          <button
            onClick={handleAccept}
            className="px-3 py-1 text-xs bg-primary-dark text-white rounded hover:bg-primary-dark/90 transition-colors"
          >
            {t('cookieConsent.accept')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 