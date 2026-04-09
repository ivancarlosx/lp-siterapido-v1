import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Dr. Ricardo Silva",
    role: "Dentista",
    content: "O SiteRápido mudou o patamar da minha clínica. Em menos de 48h já tinha um site profissional que meus pacientes elogiam todos os dias. O custo-benefício é imbatível.",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Mariana Costa",
    role: "Fisioterapeuta",
    content: "Eu não tinha tempo nem conhecimento para criar um site. Eles fizeram tudo por mim e o suporte é sensacional. Recomendo para todos os meus colegas de profissão.",
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Gustavo Mendes",
    role: "Dono de Academia",
    content: "O que mais me impressionou foi a facilidade. Fizemos o briefing e em 2 dias o site estava rodando. Hoje recebo muito mais contatos via WhatsApp por conta da página.",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80"
  }
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="section testimonials">
      <div className="container">
        <h2 className="section-title animate-fade-up">
          Quem já <span className="text-brand">acelerou conosco</span>
        </h2>
        <p className="section-subtitle animate-fade-up">
          Veja o que nossos clientes dizem sobre a rapidez e qualidade do nosso serviço.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card glass-card animate-fade-up">
              <div className="quote-icon">
                <Quote size={40} className="text-brand opacity-20" />
              </div>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-brand fill-brand" />
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <span className="author-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
