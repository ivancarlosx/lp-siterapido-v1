import { XCircle, CheckCircle2, AlertTriangle } from 'lucide-react';
import './Comparison.css';

export function Comparison() {
  return (
    <section id="comparativo" className="section comparison">
      <div className="container">
        <h2 className="section-title animate-fade-up">
          Por que somos a <span className="text-brand">melhor escolha?</span>
        </h2>
        <p className="section-subtitle animate-fade-up">
          O modelo tradicional de criar sites ficou no passado. Veja como nosso método economiza seu tempo e dinheiro.
        </p>

        <div className="bento-grid">
          {/* Card Agências */}
          <div className="glass-card bento-card bento-bad">
            <div className="bento-header">
              <XCircle className="text-red" size={32} />
              <h3>Agências e Freelas</h3>
            </div>
            <ul className="bento-list bento-list-bad">
              <li><XCircle size={18} className="text-red flex-shrink-0" /> <span>Custo inicial alto (R$ 3.000+)</span></li>
              <li><XCircle size={18} className="text-red flex-shrink-0" /> <span>Demora 30 a 60 dias para lançar</span></li>
              <li><XCircle size={18} className="text-red flex-shrink-0" /> <span>Manutenção extra cobrada à parte</span></li>
            </ul>
          </div>

          {/* Card DIY */}
          <div className="glass-card bento-card bento-warn">
            <div className="bento-header">
              <AlertTriangle className="text-yellow" size={32} />
              <h3>Faça você mesmo</h3>
            </div>
            <ul className="bento-list bento-list-bad">
              <li><XCircle size={18} className="text-yellow flex-shrink-0" /> <span>Exige seu tempo e energia aprendendo</span></li>
              <li><XCircle size={18} className="text-yellow flex-shrink-0" /> <span>Pode ficar lento e parecer amador</span></li>
              <li><XCircle size={18} className="text-yellow flex-shrink-0" /> <span>Mensalidades ocultas com plugins</span></li>
            </ul>
          </div>

          {/* Nosso Método */}
          <div className="glass-card bento-card bento-highlight">
            <div className="bento-tag">Novo Padrão</div>
            <div className="bento-header">
              <CheckCircle2 className="text-brand" size={40} />
              <h3>O Método SiteRápido</h3>
            </div>
            <ul className="bento-list bento-list-highlight">
              <li>
                <CheckCircle2 size={24} className="text-brand" />
                <div className="highlight-text-wrapper">
                  <strong>Zero custo de criação.</strong> 
                  <span>Você não paga milhares de reais pela mão de obra.</span>
                </div>
              </li>
              <li>
                <CheckCircle2 size={24} className="text-brand" />
                <div className="highlight-text-wrapper">
                  <strong>Entrega em 48h.</strong> 
                  <span>Rápido, profissional e focado em converter clientes.</span>
                </div>
              </li>
              <li>
                <CheckCircle2 size={24} className="text-brand" />
                <div className="highlight-text-wrapper">
                  <strong>Tudo em uma assinatura.</strong> 
                  <span>Hospedagem, manutenção e suporte inclusos.</span>
                </div>
              </li>
            </ul>
            <div className="bento-action">
              <a href="#planos" className="btn btn-primary w-full">Escolher este método</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
