import { CloudinaryContext } from 'cloudinary-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CloudinaryContext cloudName="dxlhv2mji">
      <App />
    </CloudinaryContext>
  </React.StrictMode>
);

reportWebVitals((metric) => {
  const body = JSON.stringify(metric);
  if (window.location.hostname !== 'localhost') {
    // Only send metrics in production
    fetch('/api/vitals', {
      body,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else {
    console.log(metric); // Still log in development
  }
});
