import React from 'react';
import { FaPrint } from 'react-icons/fa';
import '../styles/Menu.css';

function Menu() {
  const printMenu = () => {
    const content = document.querySelector('.menu-preview').outerHTML;
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
          <title>Cardápio</title>
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
    <div className="menu-preview">
      <div className="menu-actions">
        <button onClick={printMenu} className="btn primary-btn">
          <FaPrint /> Imprimir Cardápio
        </button>
      </div>
      
      {/* Menu Template */}
      <div className="menu-paper">
        <div className="menu-header">
          <div className="menu-logo">
            <img src="/Logo_Jardim_Amazonia_COLORIDO.png" alt="Jardim da Amazônia" />
          </div>
          <div className="menu-title-container">
            <h1 className="menu-title" style={{ color: '#000000' }}>CARDÁPIO</h1>
            <p className="menu-subtitle">Sabores de Casa na Floresta</p>
          </div>
        </div>

        <div className="menu-content">
          <div className="menu-section">
            <h2>BEBIDAS NÃO ALCOÓLICAS</h2>
            
            <div className="menu-subsection">
              <h3>Sucos Naturais</h3>
              <div className="menu-item">
                <div className="item-name">Uva Integral, Limonada Especial</div>
                <div className="dots"></div>
                <div className="item-prices">
                  <div className="item-price">R$ 20<span className="price-detail">400 ml</span></div>
                  <div className="item-price">R$ 40<span className="price-detail">950 ml</span></div>
                </div>
              </div>
            </div>

            <div className="menu-subsection">
              <h3>Águas</h3>
              <div className="menu-item">
                <div className="item-name">Água sem gás</div>
                <div className="dots"></div>
                <div className="item-price">R$ 6<span className="price-detail">500 ml</span></div>
              </div>
              <div className="menu-item">
                <div className="item-name">Água com gás</div>
                <div className="dots"></div>
                <div className="item-price">R$ 8<span className="price-detail">500 ml</span></div>
              </div>
            </div>

            <div className="menu-subsection">
              <h3>Refrigerantes</h3>
              <div className="menu-item">
                <div className="item-name">Coca-Cola, Coca-Cola Zero, Guaraná, Sprite, Schweppes</div>
                <div className="dots"></div>
                <div className="item-price">R$ 8</div>
              </div>
            </div>

            <div className="menu-subsection">
              <h3>Energéticos</h3>
              <div className="menu-item">
                <div className="item-name">Monster Energy</div>
                <div className="dots"></div>
                <div className="item-price">R$ 18</div>
              </div>
            </div>
          </div>

          <div className="menu-section">
            <h2>BEBIDAS ALCOÓLICAS</h2>
            
            <div className="menu-subsection">
              <h3>Cervejas</h3>
              <div className="menu-item">
                <div className="item-name">Long Neck (Heineken, Budweiser)</div>
                <div className="dots"></div>
                <div className="item-price">R$ 16</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Brahma Lata</div>
                <div className="dots"></div>
                <div className="item-price">R$ 8</div>
              </div>
            </div>

            <div className="menu-subsection">
              <h3>Drinks e Cachaças</h3>
              <div className="menu-item">
                <div className="item-name">Caipirinha (Cachaça e limão)</div>
                <div className="dots"></div>
                <div className="item-price">R$ 30</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Caipiroska (Vodka e frutas da estação)</div>
                <div className="dots"></div>
                <div className="item-price">R$ 35</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Dose de Cachaça (Colonial ou Seleta)</div>
                <div className="dots"></div>
                <div className="item-price">R$ 12</div>
              </div>
              <div className="menu-item">
                <div className="item-name">Dupla dose de Campari com gelo</div>
                <div className="dots"></div>
                <div className="item-price">R$ 18</div>
              </div>
            </div>
          </div>

          <div className="menu-section">
            <h2>ENTRADAS E PETISCOS</h2>
            <div className="menu-item">
              <div className="item-name">Prato de Frios Especial da Casa</div>
              <div className="dots"></div>
              <div className="item-price">R$ 40</div>
            </div>
            <div className="item-description">Azeitona preta, Pepino e Queijo</div>

            <div className="menu-item">
              <div className="item-name">Tirinhas de Peixe da Casa</div>
              <div className="dots"></div>
              <div className="item-price">R$ 60</div>
            </div>
            <div className="item-description">Matrinxã, Pintado ou peixe do dia</div>

            <div className="menu-subsection">
              <h3>Sanduíches e Lanches</h3>
              <div className="menu-item">
                <div className="item-name">Tostex Misto</div>
                <div className="dots"></div>
                <div className="item-price">R$ 25</div>
              </div>
              <div className="item-description">Queijo, presunto e tomate no pão de forma</div>
            </div>
          </div>

          <div className="menu-section">
            <h2>PRATOS RÁPIDOS</h2>
            <div className="item-description special-note">Disponíveis após o horário do buffet para hóspedes</div>
            <div className="menu-item">
              <div className="item-name">Nhoque de Mandioca ao Sugo</div>
              <div className="dots"></div>
              <div className="item-price">R$ 45</div>
            </div>
            <div className="menu-item">
              <div className="item-name">Spaguetti Napolitano</div>
              <div className="dots"></div>
              <div className="item-price">R$ 45</div>
            </div>
            <div className="item-description">Molho de tomate com manjericão</div>
          </div>

          <div className="menu-section">
            <h2>SOBREMESAS</h2>
            <div className="menu-item">
              <div className="item-name">Sagu</div>
              <div className="dots"></div>
              <div className="item-price">R$ 10<span className="price-detail">100 ml</span></div>
            </div>
          </div>

          <div className="menu-footer">
            <div className="eco-friendly-note">
              <div className="leaf-icon">🌿</div>
              <p>Sabores de Casa na Floresta</p>
            </div>
            
            <div className="footer-content">
              <div className="footer-left">
                <div className="footer-notes">
                  <p>Restrições alimentares: Informe ao garçom</p>
                </div>
              </div>
              <div className="footer-right">
                <div className="footer-notes">
                  <p>Gostou da experiência? Avalie-nos no Google!</p>
                </div>
              </div>
            </div>

            <div className="google-review-section">
              <img src="/QRCode.jpg" alt="Google Review QR Code" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu; 