import React from 'react';
import { FaPrint } from 'react-icons/fa';
import '../styles/Cestas.css';

function Cestas() {
  const printCestas = () => {
    const content = document.querySelector('.cestas-preview').outerHTML;
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
          <title>Cestas de Piquenique</title>
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
    <div className="cestas-preview">
      <div className="menu-actions">
        <button onClick={printCestas} className="btn primary-btn">
          <FaPrint /> Imprimir Cestas
        </button>
      </div>

      <div className="cestas-paper">
        <div className="menu-header">
          <div className="menu-logo">
            <img src="/Logo_Jardim_Amazonia_COLORIDO.png" alt="Jardim da Amazônia" />
          </div>
          <div className="menu-title-container">
            <h1 className="menu-title">CESTAS DE PIQUENIQUE</h1>
            <p className="menu-subtitle">Momentos Especiais ao Ar Livre</p>
          </div>
        </div>

        <div className="cestas-content">
          <div className="cestas-grid">
            <div className="cesta-item">
              <h3>Cesta Básica - "Delícias Simples"</h3>
              <div className="cesta-content">
                <ul>
                  <li>Ruffles (1 pacote)</li>
                  <li>Amendoim Dori Japonês (200g)</li>
                  <li>Vinho Tinto ou Vinho Branco (1 garrafa)</li>
                </ul>
                <div className="kit-section">
                  <h4>Kit de Apoio:</h4>
                  <ul>
                    <li>2 Taças de Acrílico</li>
                    <li>Talheres descartáveis</li>
                    <li>Guardanapos</li>
                    <li>Embalagem para lixo</li>
                  </ul>
                </div>
                <p className="price">R$ 170,00</p>
              </div>
            </div>

            <div className="cesta-item">
              <h3>Cesta Completa - "Experiência Gourmet"</h3>
              <div className="cesta-content">
                <ul>
                  <li>Pringles (1 lata)</li>
                  <li>Azeitonas Pretas Sem Caroço (sachê)</li>
                  <li>Amendoim Dori Japonês (200g)</li>
                  <li>Vinho Branco ou Vinho Tinto (1 garrafa)</li>
                </ul>
                <div className="kit-section">
                  <h4>Kit Completo:</h4>
                  <ul>
                    <li>2 Taças de Acrílico</li>
                    <li>Talheres descartáveis</li>
                    <li>Toalha de mesa</li>
                    <li>Guardanapos</li>
                    <li>Embalagem para lixo</li>
                  </ul>
                </div>
                <p className="price">R$ 200,00</p>
              </div>
            </div>

            <div className="cesta-item">
              <h3>Cesta Premium - "Jardim Perfeito"</h3>
              <div className="cesta-content">
                <ul>
                  <li>Pringles (1 lata)</li>
                  <li>Ruffles (1 pacote)</li>
                  <li>Azeitonas Pretas Sem Caroço (sachê)</li>
                  <li>Amendoim Dori Japonês (200g)</li>
                  <li>Vinho Branco e Vinho Tinto (2 garrafas)</li>
                </ul>
                <div className="kit-section">
                  <h4>Kit Premium:</h4>
                  <ul>
                    <li>4 Taças de Acrílico</li>
                    <li>Talheres descartáveis</li>
                    <li>Toalha de mesa</li>
                    <li>Guardanapos</li>
                    <li>Embalagem para lixo</li>
                  </ul>
                </div>
                <p className="price">R$ 330,00</p>
              </div>
            </div>
          </div>

          <div className="observacoes">
            <h4>Observações para todos os pacotes:</h4>
            <ul>
              <li>As cestas serão entregues organizadas para facilitar o transporte.</li>
              <li>Lembre-se de respeitar as regras do jardim: mantenha o ambiente limpo e aproveite a natureza em silêncio.</li>
              <li>Para solicitar sua cesta, consulte nosso bar.</li>
            </ul>
          </div>

          <div className="menu-footer">
            <div className="eco-friendly-note">
              <div className="leaf-icon">🌿</div>
              <p>Experiências Únicas na Natureza</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cestas; 