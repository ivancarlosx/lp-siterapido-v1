
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow"></div>
      
      <div className="container hero-container">
        <div className="hero-content animate-fade-up">
          <div className="hero-badge">
            <Zap size={16} className="text-brand" />
            <span>Mais rápido do que você imagina</span>
          </div>
          
          <h1 className="hero-title">
            Seu site profissional no ar em até <span className="text-brand">48 horas.</span>
          </h1>
          
          <p className="hero-subtitle">
            Não pague milhares de reais pela criação. Desenvolvemos seu site 100% grátis e você 
            só paga uma <strong className="text-primary">assinatura fixa acessível</strong> para manter 
            tudo funcionando, rápido e seguro.
          </p>
          
          <div className="hero-ctas">
            <a href="#planos" className="btn btn-primary cta-main">
              Quero meu site agora <ArrowRight size={20} />
            </a>
            <a href="#como-funciona" className="btn btn-secondary">
              Ver como funciona
            </a>
          </div>
          
          <div className="hero-features">
            <div className="feature-item">
              <CheckCircle size={18} className="text-brand" />
              <span>Criação Zero Custo</span>
            </div>
            <div className="feature-item">
              <CheckCircle size={18} className="text-brand" />
              <span>Domínio Grátis 1º ano</span>
            </div>
            <div className="feature-item">
              <CheckCircle size={18} className="text-brand" />
              <span>Hospedagem Inclusa</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="mockup-window glass-card">
            <div className="mockup-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="mockup-body">
              <div className="mockup-skeleton banner"></div>
              <div className="mockup-grid">
                <div className="mockup-skeleton text-line w-3-4"></div>
                <div className="mockup-skeleton text-line w-full"></div>
                <div className="mockup-skeleton text-line w-1-2"></div>
                <div className="mockup-skeleton btn-line"></div>
              </div>
              <div className="mockup-cards">
                <div className="mockup-skeleton card"></div>
                <div className="mockup-skeleton card"></div>
                <div className="mockup-skeleton card"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
