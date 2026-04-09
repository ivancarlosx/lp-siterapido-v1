import { useState, useEffect } from 'react';
import { Rocket, Menu, X, Sun, Moon } from 'lucide-react';
import './Header.css';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          <Rocket className="logo-icon text-brand" size={28} />
          <span className="logo-text">Site<span className="text-brand">Rápido</span> 48h</span>
        </a>

        <nav className={`nav-links ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <a href="#como-funciona" onClick={toggleMenu}>Como Funciona</a>
          <a href="#comparativo" onClick={toggleMenu}>Vantagens</a>
          <a href="#modelos" onClick={toggleMenu}>Modelos</a>
          <a href="#planos" onClick={toggleMenu}>Planos</a>
          <a href="#faq" onClick={toggleMenu}>FAQ</a>
          
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Alterar Tema">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <a href="#contato" className="btn btn-primary nav-cta">
            Falar no WhatsApp
          </a>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
