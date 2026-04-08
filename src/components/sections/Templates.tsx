import { useState, useEffect } from 'react';
import { LayoutTemplate, X, ZoomIn } from 'lucide-react';
import './Templates.css';

const categories = ['Todos', 'Dentista', 'Fisioterapia', 'Academia', 'Psicologia'];

const mockTemplates = [
  {
    id: 1,
    title: 'Consultório Odontológico Premium',
    category: 'Dentista',
    imageThumb: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    imageFull: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80', // Using same for placeholder
  },
  {
    id: 2,
    title: 'Clínica de Fisioterapia e Bem-estar',
    category: 'Fisioterapia',
    imageThumb: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
    imageFull: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Landing Page Academia Cross',
    category: 'Academia',
    imageThumb: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
    imageFull: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Espaço Terapêutico e Psicologia',
    category: 'Psicologia',
    imageThumb: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    imageFull: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'Trainer Pessoal Pro',
    category: 'Academia',
    imageThumb: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80',
    imageFull: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    title: 'Sorriso Ideal Ortodontia',
    category: 'Dentista',
    imageThumb: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
    imageFull: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
  }
];

export function Templates() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedTemplate, setSelectedTemplate] = useState<typeof mockTemplates[0] | null>(null);

  const filteredTemplates = activeCategory === 'Todos' 
    ? mockTemplates 
    : mockTemplates.filter(t => t.category === activeCategory);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedTemplate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedTemplate]);

  return (
    <section id="modelos" className="section templates-section">
      <div className="container">
        <h2 className="section-title animate-fade-up">
          Escolha seu <span className="text-brand">modelo inicial</span>
        </h2>
        <p className="section-subtitle animate-fade-up">
          Nossa equipe usa essas estruturas provadas em conversão. Selecione um nicho e encante-se.
        </p>

        <div className="tabs-container animate-fade-up">
          {categories.map(category => (
            <button
              key={category}
              className={`tab-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="templates-grid">
          {filteredTemplates.map(template => (
            <div key={template.id} className="template-card glass-card" onClick={() => setSelectedTemplate(template)}>
              <div className="template-image-wrap">
                <img src={template.imageThumb} alt={template.title} className="template-img" loading="lazy" />
                <div className="template-overlay">
                  <ZoomIn size={32} className="text-brand" />
                  <span>Cique para ver o design completo</span>
                </div>
              </div>
              <div className="template-info">
                <span className="template-cat">{template.category}</span>
                <h4 className="template-title">{template.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup for Template Preview */}
      {selectedTemplate && (
        <div className="template-modal-overlay" onClick={() => setSelectedTemplate(null)}>
          <button className="modal-close-btn" onClick={() => setSelectedTemplate(null)}>
            <X size={24} />
          </button>
          
          <div className="template-modal-content" onClick={e => e.stopPropagation()}>
            {/* Template Header Simulation */}
            <div className="browser-bar">
              <div className="browser-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="browser-url">{selectedTemplate.title}</div>
            </div>
            
            <div className="template-scrollable-area">
              <img src={selectedTemplate.imageFull} alt="Visão Completa do Preview" className="full-template-img" />
              {/* Fake tall block to simulate scrolling down an extensive template if image is too short */}
              <div className="fake-content">
                <LayoutTemplate size={48} className="text-brand opacity-20" />
                <h2>O restante do design maravilhoso continuaria aqui...</h2>
                <p>Equipe SiteRápido ajustaria esta estrutura com suas fotos e textos reais focando na conversão!</p>
              </div>
            </div>

            <div className="modal-cta-bar">
              <div className="modal-cta-text">
                <strong>Gostou desse design?</strong>
                <p>Nós personalizamos com sua marca e cores.</p>
              </div>
              <a 
                href="#planos" 
                className="btn btn-primary btn-modal-pulse"
                onClick={() => setSelectedTemplate(null)}
              >
                Eu quero esse modelo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
