import { useState } from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="planos" className="section pricing">
      <div className="container">
        <h2 className="section-title animate-fade-up">
          Planos <span className="text-brand">Simples e Transparentes</span>
        </h2>
        <p className="section-subtitle animate-fade-up">
          Não pague pelo desenvolvimento. Escolha apenas como deseja manter seu site no ar.
        </p>

        <div className="billing-toggle">
          <span className={!isAnnual ? 'active' : ''}>Mensal</span>
          <button 
            className={`toggle-btn ${isAnnual ? 'toggled' : ''}`}
            onClick={() => setIsAnnual(!isAnnual)}
            aria-label="Toggle billing period"
          >
            <div className="toggle-circle"></div>
          </button>
          <span className={isAnnual ? 'active' : ''}>
            Anual <span className="badge-saving">2 meses grátis</span>
          </span>
        </div>

        <div className="pricing-grid">
          {/* Card Pricing */}
          <div className="glass-card pricing-card featured">
            <div className="pricing-header">
              <div className="pricing-badge">Criação 100% Grátis</div>
              <h3>Plano Essencial</h3>
              <p>Tudo o que você precisa para começar a vender online.</p>
            </div>
            
            <div className="pricing-price">
              <span className="currency">R$</span>
              <span className="amount">{isAnnual ? '124,90' : '149,90'}</span>
              <span className="period">/mês</span>
            </div>
            {isAnnual && (
              <div className="pricing-billed-annual">
                Cobrado R$ 1.499 anualmente
              </div>
            )}

            <a href="#" className="btn btn-primary btn-block">Assinar e Iniciar</a>

            <div className="pricing-features-wrap">
              <p className="features-title">O que está incluso:</p>
              <ul className="pricing-features">
                <li><Check size={18} className="text-brand" /> Desenvolvimento Completo</li>
                <li><Check size={18} className="text-brand" /> Hospedagem de Alta Velocidade</li>
                <li><Check size={18} className="text-brand" /> Domínio Grátis (1º ano)</li>
                <li><Check size={18} className="text-brand" /> Certificado SSL de Segurança</li>
                <li><Check size={18} className="text-brand" /> Botão de WhatsApp Flutuante</li>
                <li><Check size={18} className="text-brand" /> Otimização para Google (SEO)</li>
                <li><Check size={18} className="text-brand" /> Suporte VIP via WhatsApp</li>
                <li><Check size={18} className="text-brand" /> 1 Edição Gratuita por mês</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
