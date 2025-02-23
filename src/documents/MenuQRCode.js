import React from 'react';
import { FaPrint } from 'react-icons/fa';

function MenuQRCode() {
  const handlePrint = () => {
    // Create a new window
    const printWindow = window.open('', '_blank');
    
    // Get the base URL of the current window
    const baseUrl = window.location.origin;
    
    // Write the HTML content
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>QR Codes do Cardápio - Jardim da Amazônia</title>
          <style>
            @page {
              size: letter;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
              width: 8.5in;
              height: 11in;
              position: relative;
            }
            .qr-container {
              position: absolute;
              width: 3.5in;
              height: 4.5in;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 20px;
            }
            /* Position each QR code in the corners */
            .qr-container:nth-child(1) { top: 0.5in; left: 0.5in; }
            .qr-container:nth-child(2) { top: 0.5in; right: 0.5in; }
            .qr-container:nth-child(3) { bottom: 0.5in; left: 0.5in; }
            .qr-container:nth-child(4) { bottom: 0.5in; right: 0.5in; }
            
            .logo {
              width: 120px;
              height: auto;
              opacity: 0.7;
              margin-top: 15px;
            }
            .qr-code {
              width: 200px;
              height: 200px;
              margin-bottom: 15px;
            }
            .text {
              text-align: center;
              font-family: Arial, sans-serif;
            }
            .text-primary {
              color: #1a472a;
              font-size: 16px;
              font-weight: 600;
              margin: 0 0 8px 0;
            }
            .text-secondary {
              color: #666;
              font-size: 14px;
              margin: 0;
            }
            @media print {
              body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
            }
          </style>
        </head>
        <body>
          ${[1, 2, 3, 4].map(() => `
            <div class="qr-container">
              <img src="${baseUrl}/QR Code - Menu.png" alt="Menu QR Code" class="qr-code" />
              <div class="text">
                <p class="text-primary">Escaneie para ver nosso cardápio</p>
                <p class="text-secondary">Scan to view our menu</p>
              </div>
              <img src="${baseUrl}/Logo Jd Amazonia.png" alt="Jardim Amazônia Logo" class="logo" />
            </div>
          `).join('')}
        </body>
      </html>
    `);

    // Wait for all images to load before printing
    printWindow.onload = () => {
      const images = printWindow.document.getElementsByTagName('img');
      let loadedImages = 0;
      
      function tryPrint() {
        loadedImages++;
        if (loadedImages === images.length) {
          printWindow.print();
          // Don't close the window immediately to allow the print dialog to show
        }
      }

      // Add load event listener to each image
      Array.from(images).forEach(img => {
        if (img.complete) {
          tryPrint();
        } else {
          img.addEventListener('load', tryPrint);
          img.addEventListener('error', tryPrint); // Handle failed loads
        }
      });
    };
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 relative group">
        <img
          src="/QR Code - Menu.png"
          alt="Menu QR Code"
          className="w-48 h-48 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 rounded-lg"></div>
      </div>
      <button
        onClick={handlePrint}
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a472a] text-white rounded-lg hover:bg-[#143d23] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
      >
        <FaPrint className="w-5 h-5" />
        <span>Imprimir QR Codes</span>
      </button>
      <p className="mt-4 text-sm text-gray-500 text-center max-w-xs">
        Clique para imprimir 4 QR codes em uma página tamanho carta
      </p>
    </div>
  );
}

export default MenuQRCode; 