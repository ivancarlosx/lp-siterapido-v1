import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
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
          {/* Plano Essencial */}
          <div className="glass-card pricing-card">
            <div className="pricing-header">
              <h3>Plano Essencial</h3>
              <p>Ideal para profissionais começando no digital.</p>
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

            <div className="pricing-features-wrap">
              <p className="features-title">O que está incluso:</p>
              <ul className="pricing-features">
                <li><CheckCircle2 size={20} className="text-brand" /> <strong>Site pronto em até 48h</strong></li>
                <li><CheckCircle2 size={20} className="text-brand" /> Hospedagem de Alta Velocidade</li>
                <li><CheckCircle2 size={20} className="text-brand" /> Certificado SSL de Segurança</li>
                <li><CheckCircle2 size={20} className="text-brand" /> Configuração de SEO (Google)</li>
                <li><CheckCircle2 size={20} className="text-brand" /> Botão de WhatsApp Flutuante</li>
                <li><CheckCircle2 size={20} className="text-brand" /> 1 Edição Gratuita por mês</li>
                <li><CheckCircle2 size={20} className="text-brand" /> Suporte Especializado via E-mail</li>
              </ul>
            </div>

            <a href="#" className="btn btn-secondary btn-block card-bottom-btn">Assinar Essencial</a>
          </div>

          {/* Plano Profissional (Destaque) */}
          <div className="glass-card pricing-card featured">
            <div className="pricing-badge">Mais Escolhido</div>
            <div className="pricing-header">
              <h3 className="text-brand">Plano Profissional</h3>
              <p>Uma máquina completa e suporte ágil.</p>
            </div>
            
            <div className="pricing-price">
              <span className="currency">R$</span>
              <span className="amount">{isAnnual ? '141,50' : '169,90'}</span>
              <span className="period">/mês</span>
            </div>
            {isAnnual && (
              <div className="pricing-billed-annual">
                Cobrado R$ 1.698 anualmente
              </div>
            )}

            <div className="pricing-features-wrap">
              <p className="features-title">O que está incluso:</p>
              <ul className="pricing-features">
                <li><CheckCircle2 size={20} className="text-brand" /> <strong>Site pronto em até 48h</strong></li>
                <li><CheckCircle2 size={20} className="text-brand" /> <strong>Domínio Grátis (1º ano)</strong></li>
                <li><CheckCircle2 size={20} className="text-brand" /> <strong>Suporte VIP via WhatsApp</strong></li>
                <li><CheckCircle2 size={20} className="text-brand" /> <strong>Até 2 edições gratuitas / mês</strong></li>
                <li><CheckCircle2 size={20} className="text-brand" /> <strong>Atualizações e melhorias contínuas</strong></li>
                <li><CheckCircle2 size={20} className="text-brand" /> Hospedagem de Alta Velocidade</li>
                <li><CheckCircle2 size={20} className="text-brand" /> Certificado SSL de Segurança</li>
                <li><CheckCircle2 size={20} className="text-brand" /> Configuração de SEO (Google)</li>
                <li><CheckCircle2 size={20} className="text-brand" /> Botão de WhatsApp Flutuante</li>
              </ul>
            </div>

            <a href="#" className="btn btn-primary btn-block card-bottom-btn btn-pulse-sub">Assinar Profissional</a>
          </div>
        </div>
      </div>
    </section>
  );
}
