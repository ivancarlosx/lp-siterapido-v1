import { Rocket, Mail, MessageCircle } from 'lucide-react';
import './Footer.css';

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="logo">
                <Rocket className="text-brand" size={28} />
                <span>Site<span className="text-brand">Rápido</span> 48h</span>
              </a>
              <p className="footer-desc">
                Transformando a maneira como empresas criam e mantêm seus sites na internet. Mais rápido, mais barato, mais profissional.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Mail"><Mail size={20} /></a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Navegação</h4>
              <ul>
                <li><a href="#como-funciona">Como Funciona</a></li>
                <li><a href="#comparativo">Vantagens</a></li>
                <li><a href="#planos">Planos e Preços</a></li>
                <li><a href="#faq">Perguntas Frequentes</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Termos de Uso</a></li>
                <li><a href="#">Política de Privacidade</a></li>
                <li><a href="#">Política de Cancelamento</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contato</h4>
              <p>Precisa de ajuda ou quer tirar dúvidas comerciais?</p>
              <a href="#contato" className="footer-wa-btn">
                <MessageCircle size={20} />
                Falar com Consultor
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} SiteRápido 48h. Todos os direitos reservados.</p>
            <p className="footer-cnpj">CNPJ: 00.000.000/0001-00</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Flutuante */}
      <a href="#contato" className="floating-whatsapp" aria-label="Fale conosco no WhatsApp">
        <MessageCircle size={28} />
      </a>
    </>
  );
}
