import React, { useState } from 'react';
import '../styles/FAQ.css';

function FAQ() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (sectionId, itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [`${sectionId}-${itemId}`]: !prev[`${sectionId}-${itemId}`]
    }));
  };

  return (
    <div className="faq">
      <div className="page-hero faq">
        <div className="hero-content">
          <h1>Perguntas Frequentes</h1>
          <p>Tudo que você precisa saber sobre sua estadia</p>
        </div>
      </div>

      <section className="faq-content">
        <div className="container">
          <div className="faq-grid">
            {/* Acomodações */}
            <div className="faq-section">
              <h3>Acomodações</h3>
              <div className="faq-item" onClick={() => toggleItem('acomodacao', 0)}>
                <div className="faq-question">
                  <h4>O que tem no quarto?</h4>
                  <span className={`arrow ${expandedItems['acomodacao-0'] ? 'expanded' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${expandedItems['acomodacao-0'] ? 'expanded' : ''}`}>
                  <p>Nossos quartos são equipados com itens essenciais para o seu conforto, incluindo cama confortável, banheiro privativo, ar-condicionado, e Wi-Fi.</p>
                </div>
              </div>
            </div>

            {/* Alimentos e Bebidas */}
            <div className="faq-section">
              <h3>Alimentos e Bebidas (A&B)</h3>
              <div className="faq-item" onClick={() => toggleItem('ab', 0)}>
                <div className="faq-question">
                  <h4>Há opções de almoço e jantar no local?</h4>
                  <span className={`arrow ${expandedItems['ab-0'] ? 'expanded' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${expandedItems['ab-0'] ? 'expanded' : ''}`}>
                  <p>Sim, oferecemos refeições em nosso restaurante. Horários:<br />
                    - <em>Almoço:</em> 12:30<br />
                    - <em>Jantar:</em> 19:30</p>
                </div>
              </div>
              <div className="faq-item" onClick={() => toggleItem('ab', 1)}>
                <div className="faq-question">
                  <h4>Posso levar minha própria bebida?</h4>
                  <span className={`arrow ${expandedItems['ab-1'] ? 'expanded' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${expandedItems['ab-1'] ? 'expanded' : ''}`}>
                  <p>Não é permitido trazer bebidas.<br />
                  Solicite nossa Carta de vinhos.</p>
                </div>
              </div>
            </div>

            {/* Check-in e Check-out */}
            <div className="faq-section">
              <h3>Check-in e Check-out</h3>
              <div className="faq-item" onClick={() => toggleItem('checkin', 0)}>
                <div className="faq-question">
                  <h4>Posso chegar antes do horário do check-in?</h4>
                  <span className={`arrow ${expandedItems['checkin-0'] ? 'expanded' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${expandedItems['checkin-0'] ? 'expanded' : ''}`}>
                  <p>Sim, você pode chegar e aproveitar nosso ambiente. Caso deseje consumir refeições antes do horário da sua reserva, será cobrada uma taxa de <em>R$200 por pessoa</em> para acesso ao buffet à vontade.</p>
                </div>
              </div>
            </div>

            {/* Day Use */}
            <div className="faq-section">
              <h3>Day Use</h3>
              <div className="faq-item" onClick={() => toggleItem('day-use', 0)}>
                <div className="faq-question">
                  <h4>Vocês oferecem Day Use?</h4>
                  <span className={`arrow ${expandedItems['day-use-0'] ? 'expanded' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${expandedItems['day-use-0'] ? 'expanded' : ''}`}>
                  <p>Sim, atendemos com reserva antecipada conforme disponibilidade.<br />
                  Consulte com nossa equipe de vendas ou recepção 65 99675-1401.</p>
                </div>
              </div>
            </div>

            {/* Formas de Pagamento */}
            <div className="faq-section">
              <h3>Formas de Pagamento</h3>
              <div className="faq-item" onClick={() => toggleItem('pagamento', 0)}>
                <div className="faq-question">
                  <h4>Quais formas de pagamento vocês aceitam?</h4>
                  <span className={`arrow ${expandedItems['pagamento-0'] ? 'expanded' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${expandedItems['pagamento-0'] ? 'expanded' : ''}`}>
                  <p>Aceitamos cartões de crédito, débito e transferências bancárias.</p>
                </div>
              </div>
              <div className="faq-item" onClick={() => toggleItem('pagamento', 1)}>
                <div className="faq-question">
                  <h4>Aceitam cartão internacional?</h4>
                  <span className={`arrow ${expandedItems['pagamento-1'] ? 'expanded' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${expandedItems['pagamento-1'] ? 'expanded' : ''}`}>
                  <p>Sim, aceitamos cartões internacionais.</p>
                </div>
              </div>
            </div>

            {/* Fotografia e Eventos */}
            <div className="faq-section">
              <h3>Fotografia e Eventos</h3>
              <div className="faq-item" onClick={() => toggleItem('foto', 0)}>
                <div className="faq-question">
                  <h4>É possível fazer fotos de casamento no local?</h4>
                  <span className={`arrow ${expandedItems['foto-0'] ? 'expanded' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${expandedItems['foto-0'] ? 'expanded' : ''}`}>
                  <p>Sim, oferecemos pacotes específicos para ensaios fotográficos. Entre em contato para mais detalhes.</p>
                </div>
              </div>
            </div>

            {/* Fotos */}
            <div className="faq-section">
              <h3>Fotos</h3>
              <div className="faq-item" onClick={() => toggleItem('foto', 1)}>
                <div className="faq-question">
                  <h4>Posso ver mais fotos da estrutura e passeios?</h4>
                  <span className={`arrow ${expandedItems['foto-1'] ? 'expanded' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${expandedItems['foto-1'] ? 'expanded' : ''}`}>
                  <p>Sim, visite nossa galeria no site ou solicite fotos específicas para nossa equipe.</p>
                </div>
              </div>
            </div>

            {/* Guias */}
            <div className="faq-section">
              <h3>Guias</h3>
              <div className="faq-item" onClick={() => toggleItem('guia', 0)}>
                <div className="faq-question">
                  <h4>Oferecem guia bilíngue?</h4>
                  <span className={`arrow ${expandedItems['guia-0'] ? 'expanded' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${expandedItems['guia-0'] ? 'expanded' : ''}`}>
                  <p>Sim, guias bilíngues estão disponíveis mediante solicitação prévia.</p>
                </div>
              </div>
            </div>

            {/* Horários */}
            <div className="faq-section">
              <h3>Horários</h3>
              <div className="faq-item" onClick={() => toggleItem('horario', 0)}>
                <div className="faq-question">
                  <h4>Quais são os horários das refeições e atividades?</h4>
                  <span className={`arrow ${expandedItems['horario-0'] ? 'expanded' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${expandedItems['horario-0'] ? 'expanded' : ''}`}>
                  <p>
                    - <em>Café da manhã:</em> 7:30 às 9:30<br />
                    - <em>Almoço:</em> 12:30<br />
                    - <em>Jantar:</em> 19:30<br />
                    - <em>Trilhas (quando confirmadas):</em> a partir das 8:00
                  </p>
                </div>
              </div>
            </div>

            {/* O que levar */}
            <div className="faq-section">
              <h3>O que levar?</h3>
              <div className="faq-item" onClick={() => toggleItem('levar', 0)}>
                <div className="faq-question">
                  <h4>O que levar?</h4>
                  <span className={`arrow ${expandedItems['levar-0'] ? 'expanded' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${expandedItems['levar-0'] ? 'expanded' : ''}`}>
                  <p>Recomendamos trazer protetor solar, repelente, roupas confortáveis para trilhas e passeios, e calçados adequados.</p>
                </div>
              </div>
            </div>

            {/* Observação de Aves */}
            <div className="faq-section">
              <h3>Observação de Aves</h3>
              <div className="faq-item" onClick={() => toggleItem('obs', 0)}>
                <div className="faq-question">
                  <h4>Há atividades para observação de Aves?</h4>
                  <span className={`arrow ${expandedItems['obs-0'] ? 'expanded' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${expandedItems['obs-0'] ? 'expanded' : ''}`}>
                  <p>Sim, temos áreas ideais para birdwatching. Guias especializados podem ser contratados mediante solicitação.</p>
                </div>
              </div>
            </div>

            {/* Passeios */}
            <div className="faq-section">
              <h3>Passeios</h3>
              <div className="faq-item" onClick={() => toggleItem('passeio', 0)}>
                <div className="faq-question">
                  <h4>Quais passeios vocês oferecem?</h4>
                  <span className={`arrow ${expandedItems['passeio-0'] ? 'expanded' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${expandedItems['passeio-0'] ? 'expanded' : ''}`}>
                  <p>Dispomos de atividades, como trilhas e Safari de barco a motor no Rio Claro. Consulte a recepção para informações detalhadas.</p>
                </div>
              </div>
              <div className="faq-item" onClick={() => toggleItem('passeio', 1)}>
                <div className="faq-question">
                  <h4>Crianças podem participar dos passeios?</h4>
                  <span className={`arrow ${expandedItems['passeio-1'] ? 'expanded' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${expandedItems['passeio-1'] ? 'expanded' : ''}`}>
                  <p>Sim, porém algumas atividades têm restrições de idade. Verifique com nossa equipe.</p>
                </div>
              </div>
            </div>

            {/* Política de Animais de Estimação */}
            <div className="faq-section">
              <h3>Política de Animais de Estimação</h3>
              <div className="faq-item" onClick={() => toggleItem('animal', 0)}>
                <div className="faq-question">
                  <h4>Aceitam pets?</h4>
                  <span className={`arrow ${expandedItems['animal-0'] ? 'expanded' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${expandedItems['animal-0'] ? 'expanded' : ''}`}>
                  <p>Não, infelizmente não recebemos pets.</p>
                </div>
              </div>
            </div>

            {/* Política de Crianças */}
            <div className="faq-section">
              <h3>Política de Crianças</h3>
              <div className="faq-item" onClick={() => toggleItem('crianca', 0)}>
                <div className="faq-question">
                  <h4>Crianças são bem-vindas?</h4>
                  <span className={`arrow ${expandedItems['crianca-0'] ? 'expanded' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${expandedItems['crianca-0'] ? 'expanded' : ''}`}>
                  <p>Sim, crianças são bem-vindas!<br />
                    - A <em>primeira criança</em> de até 2 anos <em>não paga</em>.<br />
                    - A <em>segunda criança em diante</em> ou acima de 2 anos: taxa de R$99 por criança.</p>
                </div>
              </div>
            </div>

            {/* Reservas */}
            <div className="faq-section">
              <h3>Reservas</h3>
              <div className="faq-item" onClick={() => toggleItem('reserva', 0)}>
                <div className="faq-question">
                  <h4>Posso reservar no mesmo dia?</h4>
                  <span className={`arrow ${expandedItems['reserva-0'] ? 'expanded' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${expandedItems['reserva-0'] ? 'expanded' : ''}`}>
                  <p>Reservas de última hora devem ser feitas diretamente com nossa recepção ou equipe de reservas.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ; 