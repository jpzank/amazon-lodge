import React from 'react';
import { FaPrint } from 'react-icons/fa';
import { GiWineBottle, GiGrapes } from 'react-icons/gi';
import '../styles/WineList.css';

function WineList() {
  const printWineList = () => {
    const content = document.querySelector('.wine-list-preview').outerHTML;
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
          <title>Carta de Vinhos</title>
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
    <div className="wine-list-preview">
      <div className="wine-list-actions">
        <button onClick={printWineList} className="btn primary-btn">
          <FaPrint /> Imprimir Carta de Vinhos
        </button>
      </div>
      
      <div className="wine-list-paper">
        <div className="wine-list-header">
          <div className="wine-list-logo">
            <img src="/Logo_Jardim_Amazonia_COLORIDO.png" alt="Jardim da Amazônia" />
          </div>
          <div className="wine-list-title-container">
            <h1 className="wine-list-title">CARTA DE VINHOS</h1>
            <div className="wine-list-decoration">
              <GiWineBottle className="wine-icon" />
              <span className="decoration-line"></span>
              <GiGrapes className="wine-icon" />
            </div>
          </div>
        </div>

        <div className="wine-list-content">
          <div className="wine-category">
            <h2>VINHOS TINTOS</h2>
            
            <div className="wine-region">
              <h3>ARGENTINA</h3>
              <div className="wine-item">
                <div className="wine-info">
                  <h4>KALEU MALBEC-BONARDA</h4>
                  <p className="wine-details">Mendoza | Aitor Ider Balbo</p>
                </div>
                <div className="wine-price">R$ 120,00</div>
              </div>

              <div className="wine-item">
                <div className="wine-info">
                  <h4>ZAPA MALBEC</h4>
                  <p className="wine-details">Mendoza | Familia Falasconza</p>
                </div>
                <div className="wine-price">R$ 140,00</div>
              </div>
            </div>

            <div className="wine-region">
              <h3>CHILE</h3>
              <div className="wine-item">
                <div className="wine-info">
                  <h4>RAVANAL SELECTION TERRIOR CARMENERE</h4>
                  <p className="wine-details">Valle Central | Vinos Ravanal</p>
                </div>
                <div className="wine-price">R$ 120,00</div>
              </div>

              <div className="wine-item">
                <div className="wine-info">
                  <h4>VIU MANENT RESERVA CARBERNET SAUVIGNON</h4>
                  <p className="wine-details">Valle Colchagua | Viu Manent</p>
                </div>
                <div className="wine-price">R$ 170,00</div>
              </div>

              <div className="wine-item">
                <div className="wine-info">
                  <h4>DON CAYTANO PINOT NOIR</h4>
                  <p className="wine-details">Valle Central</p>
                </div>
                <div className="wine-price">R$ 120,00</div>
              </div>
            </div>
          </div>

          <div className="wine-category">
            <h2>ESPUMANTES + VINHOS BRANCOS</h2>
            
            <div className="wine-item">
              <div className="wine-info">
                <h4>BOSSA BRUT</h4>
                <p className="wine-details">Bento Gonçalves | Cave Hermann</p>
              </div>
              <div className="wine-price">R$ 145,00</div>
            </div>

            <div className="wine-region">
              <h3>CHILE</h3>
              <div className="wine-item">
                <div className="wine-info">
                  <h4>ZAPA TORRONTES</h4>
                  <p className="wine-details">Mendoza | Familia Falascomza</p>
                </div>
                <div className="wine-price">R$ 140,00</div>
              </div>

              <div className="wine-item">
                <div className="wine-info">
                  <h4>RAVANAL SELECTION TERRIOR SAUVIGNON BLANC</h4>
                  <p className="wine-details">Valle Central | Vinos Ravanal</p>
                </div>
                <div className="wine-price">R$ 120,00</div>
              </div>

              <div className="wine-item">
                <div className="wine-info">
                  <h4>RAVANAL SELECTION TERRIOR CHARDONNAY</h4>
                  <p className="wine-details">Valle Central | Vinos Ravanal</p>
                </div>
                <div className="wine-price">R$ 120,00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="wine-list-footer">
          <div className="wine-list-decoration">
            <GiGrapes className="wine-icon" />
            <span className="decoration-line"></span>
            <GiWineBottle className="wine-icon" />
          </div>
          <p className="footer-note">Harmonização perfeita com nossa gastronomia sustentável</p>
        </div>
      </div>
    </div>
  );
}

export default WineList; 