import React from 'react';
import { FaPrint } from 'react-icons/fa';
import '../styles/Receptivo.css';

function Receptivo() {
  const printReceptivo = () => {
    const content = document.querySelector('.receptivo-preview').outerHTML;
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
          <title>Informações de Boas-vindas</title>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
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
    <div className="receptivo-wrapper">
      <div className="receptivo-actions">
        <button onClick={printReceptivo} className="btn primary-btn">
          <FaPrint /> Imprimir Informações
        </button>
      </div>

      <div className="receptivo-preview">
        <div className="receptivo-container">
          <div className="letterhead">
            <img 
              src="/Logo_Jardim_Amazonia_COLORIDO.png" 
              alt="Jardim da Amazônia Lodge"
              className="logo"
            />
            <div className="letterhead-border"></div>
          </div>

          <div className="receptivo-content">
            <h2>Bem-vindo ao Jardim da Amazônia Lodge</h2>
            <p className="welcome-text">Estamos muito felizes em recebê-lo! Para garantir uma estadia tranquila e agradável, confira as informações importantes sobre horários e serviços:</p>

            <div className="info-section">
              <div className="info-row">
                <div className="info-block flex-1">
                  <h4>Horários de Entrada e Saída</h4>
                  <ul>
                    <li>Entrada nos apartamentos: a partir das 16h</li>
                    <li>Saída dos apartamentos: até as 14h</li>
                  </ul>
                </div>

                <div className="info-block flex-1">
                  <h4>Horários de Funcionamento</h4>
                  <ul>
                    <li>Cozinha: fecha às 15h, reabre às 17h30</li>
                    <li>Bar: fecha às 22h</li>
                  </ul>
                </div>
              </div>

              <div className="info-block">
                <h4>Horários das Refeições</h4>
                <ul>
                  <li>Café da manhã: das 7h30 às 9h30</li>
                  <li>Almoço: às 12h30</li>
                  <li>Jantar: às 19h30</li>
                </ul>
              </div>

              <div className="info-block">
                <h4>Wi-Fi</h4>
                <ul className="wifi-list">
                  <li><strong>Rede:</strong> pousadavisitante | <strong>Senha:</strong> jardim2020</li>
                  <li><strong>Rede:</strong> pousada | <strong>Senha:</strong> jdamazonia</li>
                </ul>
              </div>

              <div className="info-block important-notice">
                <h4>O que não está incluído na hospedagem:</h4>
                <ul>
                  <li>Bebidas</li>
                  <li>Transporte</li>
                  <li>Passeios</li>
                  <li>Pescaria (não atendemos pescaria)</li>
                  <li>Itens extras não mencionados</li>
                </ul>
              </div>

              <div className="info-block warning">
                <p>Quadros de decoração no bangalô, se quebrar, uma taxa de R$450 será cobrada</p>
              </div>

              <div className="eco-message">
                <h4>Compromisso com a Natureza</h4>
                <p>Como hóspede do Jardim da Amazônia Lodge, você faz parte do nosso compromisso com a preservação ambiental. Ajude-nos a proteger este paraíso natural utilizando recursos de forma consciente e respeitando a vida selvagem local.</p>
              </div>

              <div className="closing-message">
                <p>Se tiver dúvidas ou precisar de assistência durante sua estadia, nossa equipe estará à disposição para ajudar.</p>
                <p>Agradecemos por escolher o Jardim da Amazônia. Aproveite sua estadia!</p>
                <p className="signature">Atenciosamente,<br />Equipe Jardim da Amazônia</p>
              </div>
            </div>
          </div>
          <div className="letterhead-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default Receptivo; 