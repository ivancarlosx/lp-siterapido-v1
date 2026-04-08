
import { PenTool, Rocket, CheckSquare } from 'lucide-react';
import './Method.css';

export function Method() {
  return (
    <section id="como-funciona" className="section method">
      <div className="container">
        <h2 className="section-title animate-fade-up">
          Como funciona em <span className="text-brand">3 passos simples</span>
        </h2>
        <p className="section-subtitle animate-fade-up">
          Processo sem dor de cabeça, para você focar apenas no seu negócio.
        </p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <PenTool size={24} className="text-bg" />
            </div>
            <div className="timeline-content glass-card">
              <h3 className="text-brand">1. Briefing Rápido</h3>
              <p>Você escolhe o plano, realiza a assinatura e preenche um formulário simples (leva 5 minutos) com as informações do seu negócio, logo e cores.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <Rocket size={24} className="text-bg" />
            </div>
            <div className="timeline-content glass-card">
              <h3 className="text-brand">2. Produção em 48h</h3>
              <p>Nossa equipe de especialistas entra em ação. Criamos o design, escrevemos os textos focados em conversão e deixamos o site prontinho.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <CheckSquare size={24} className="text-bg" />
            </div>
            <div className="timeline-content glass-card">
              <h3 className="text-brand">3. Lançamento e Suporte</h3>
              <p>Apresentamos o resultado para você. Com o seu "OK", o site vai pro ar. A partir daí, nossa equipe cuida de toda manutenção e atualizações.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
