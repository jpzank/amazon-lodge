import React from 'react';

/**
 * Generic print function that handles the printing of any HTML content
 * @param {string} content - The HTML content to print
 * @param {string} title - The title of the print window
 * @param {Object} styles - Additional styles specific to the document type
 */
const printDocument = (content, title, styles = '') => {
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <style>
          @page {
            size: A4;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }
          @media print {
            * {
              -webkit-print-color-adjust: exact !important;
              color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            img {
              max-width: 100%;
              height: auto;
            }
          }
          ${styles}
        </style>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      </head>
      <body>
        ${content}
      </body>
    </html>
  `);
  printWindow.document.close();
  
  // Wait for resources to load before printing
  setTimeout(() => {
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  }, 500);
};

/**
 * Print wine list with specific styling
 */
export const printWineList = () => {
  const content = document.querySelector('.wine-list-content')?.outerHTML;
  if (!content) {
    console.error('Wine list content not found');
    return;
  }

  const styles = `
    .wine-list-content {
      max-width: none;
      margin: 0;
      padding: 0.5cm 2cm;
    }
  `;

  printDocument(content, 'Carta de Vinhos', styles);
};

/**
 * Print menu with specific styling
 */
export const printMenu = () => {
  const content = document.querySelector('.menu-content')?.outerHTML;
  if (!content) {
    console.error('Menu content not found');
    return;
  }

  const styles = `
    .menu-content {
      max-width: none;
      margin: 0;
      padding: 0.5cm 2cm;
    }
  `;

  printDocument(content, 'Menu', styles);
};

/**
 * Print receptive information with specific styling
 */
export const printReceptivo = () => {
  const content = document.querySelector('.receptivo-content')?.outerHTML;
  if (!content) {
    console.error('Receptivo content not found');
    return;
  }

  const styles = `
    .receptivo-content {
      max-width: none;
      margin: 0;
      padding: 0.5cm 2cm;
    }
  `;

  printDocument(content, 'Informações de Receptivo', styles);
};

/**
 * Print gift baskets information with specific styling
 */
export const printCestas = () => {
  const content = document.querySelector('.cestas-content')?.outerHTML;
  if (!content) {
    console.error('Cestas content not found');
    return;
  }

  const styles = `
    .cestas-content {
      max-width: none;
      margin: 0;
      padding: 0.5cm 2cm;
    }
  `;

  printDocument(content, 'Cestas', styles);
};

/**
 * Print Google reviews information with specific styling
 */
export const printReviews = () => {
  const content = document.querySelector('.reviews-content')?.outerHTML;
  if (!content) {
    console.error('Reviews content not found');
    return;
  }

  const styles = `
    .reviews-content {
      max-width: none;
      margin: 0;
      padding: 0.5cm 2cm;
    }
  `;

  printDocument(content, 'Avalie-nos no Google', styles);
}; 