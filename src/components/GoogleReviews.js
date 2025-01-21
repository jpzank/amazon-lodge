import React from 'react';
import { FaPrint } from 'react-icons/fa';
import '../styles/GoogleReviews.css';

function GoogleReviews() {
  const printReviews = () => {
    const content = document.querySelector('.reviews-preview').outerHTML;
    const styles = Array.from(document.styleSheets)
      .map(styleSheet => {
        try {
          return Array.from(styleSheet.cssRules)
            .map(rule => rule.cssText)
            .join('\n');
        } catch (e) {
          return '';
        }
      })
      .join('\n');

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Avalie-nos no Google</title>
          <style>
            @page {
              size: A4;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
            }
            ${styles}
          </style>
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
    }, 250);
  };

  return (
    <div className="reviews-preview">
      <div className="reviews-actions">
        <button onClick={printReviews} className="btn">
          <FaPrint /> Imprimir
        </button>
      </div>
      
      <div className="reviews-paper">
        <div className="reviews-header">
          <div className="coffee-section">
            <div className="coffee-mug">
              <div className="coffee-icon">
                <img 
                  src="https://media1.thehungryjpeg.com/thumbs2/800_3498249_405c4052489511468a7eae8a9c43d80a5d865323_coffee-cup-steam-mug-vector-icon.jpg" 
                  alt="Coffee mug with steam"
                />
              </div>
            </div>
            <h2 className="coffee-title">
              Que tal um café por sua opinião?
              <div className="english-subtitle">How about a coffee for your review?</div>
            </h2>
          </div>

          <div className="qr-section">
            <img 
              src="/QRCode.jpg" 
              alt="QR Code para avaliação" 
              className="qr-code"
            />
            <div className="qr-text-container">
              <p className="qr-text">Escaneie o QR Code, compartilhe sua experiência e sirva um cafézinho!</p>
              <p className="qr-text-english">Scan the QR Code, share your experience and get a coffee!</p>
            </div>
          </div>
        </div>

        <div className="reviews-logo">
          <img src="/Logo_Jardim_Amazonia_COLORIDO.png" alt="Jardim da Amazônia" />
        </div>
      </div>
    </div>
  );
}

export default GoogleReviews; 