import { useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';
import './testimonials.css';

type Item =
  | { type: 'text'; name: string; role: string; content: string; avatar: string }
  | { type: 'video'; name: string; role: string; quote: string; poster: string };

const items: Item[] = [
  {
    type: 'text',
    name: 'Dr. Ricardo Silva',
    role: 'Dentista',
    content: 'Em menos de 48h eu já tinha um site profissional que meus pacientes elogiam todos os dias. O custo-benefício é imbatível.',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80',
  },
  {
    type: 'video',
    name: 'Camila Duarte',
    role: 'Confeitaria Doce Encanto',
    quote: 'Triplicou meus pedidos pelo WhatsApp.',
    poster: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
  },
  {
    type: 'text',
    name: 'Mariana Costa',
    role: 'Fisioterapeuta',
    content: 'Eu não tinha tempo nem conhecimento para criar um site. Fizeram tudo por mim e o suporte é sensacional.',
    avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=150&q=80',
  },
  {
    type: 'video',
    name: 'Lucas Almeida',
    role: 'Personal Trainer',
    quote: 'O site virou minha máquina de captar alunos.',
    poster: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    type: 'text',
    name: 'Gustavo Mendes',
    role: 'Dono de Academia',
    content: 'Fizemos o briefing e em 2 dias o site estava rodando. Hoje recebo muito mais contatos via WhatsApp.',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
  },
  {
    type: 'text',
    name: 'Renata Farias',
    role: 'Clínica de Estética',
    content: 'O site ficou com cara de marca grande e trouxe muito mais confiança para quem chega até a clínica pela primeira vez.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
  },
  {
    type: 'text',
    name: 'Paulo Henrique',
    role: 'Consultor Financeiro',
    content: 'Eu precisava de uma página objetiva, bonita e que explicasse meu serviço sem enrolação. Entregaram exatamente isso.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
  },
  {
    type: 'text',
    name: 'Aline Barbosa',
    role: 'Nutricionista',
    content: 'A estrutura da página deixou minha oferta muito mais clara. Hoje sinto que o cliente entende o valor antes mesmo de falar comigo.',
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=150&q=80',
  },
  {
    type: 'text',
    name: 'Felipe Rocha',
    role: 'Infoprodutor',
    content: 'A página ficou leve, rápida e direta para conversão. Foi uma das entregas mais tranquilas que já contratei.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
  },
  {
    type: 'text',
    name: 'Larissa Monteiro',
    role: 'Advogada',
    content: 'O resultado passou a credibilidade que eu precisava sem perder simplicidade. Em poucos dias eu já estava divulgando o novo site.',
    avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=150&q=80',
  },
  {
    type: 'video',
    name: 'Patrícia Nunes',
    role: 'Studio Sálvia',
    quote: 'Profissional, rápido e sem dor de cabeça.',
    poster: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
];

export function Testimonials({ isWhatsapp = true }: { isWhatsapp?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const displayItems = items.filter((item): item is Extract<Item, { type: 'text' }> => item.type === 'text').map((item) => {
    if (isWhatsapp) return item;
    if (item.name === 'Gustavo Mendes') {
      return {
        ...item,
        content: 'Fizemos o briefing e em 2 dias o site estava rodando. Hoje recebo muito mais contatos pelo site.',
      };
    }
    return item;
  });

  const scrollByCards = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.v2-tcard');
    const amount = card ? card.offsetWidth + 20 : 360;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section className="v2-section" id="depoimentos">
      <div className="v2-wrap">
        <Reveal className="v2-head">
          <span className="v2-kicker">Depoimentos</span>
          <h2 className="v2-h2">Quem já acelerou conosco.</h2>
        </Reveal>
      </div>

      <div className="v2-tt-track" ref={trackRef}>
        <div className="v2-tt-pad" aria-hidden />
        {displayItems.map((t, i) => (
          <article className="v2-tcard v2-tcard-text" key={i}>
            <Quote className="v2-tcard-q" size={34} />
            <div className="v2-stars">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={14} className="v2-star" />
              ))}
            </div>
            <p>"{t.content}"</p>
            <div className="v2-tcard-author">
              <img src={t.avatar} alt={t.name} loading="lazy" />
              <div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </article>
        ))}
        <div className="v2-tt-pad" aria-hidden />
      </div>

      <div className="v2-tt-nav">
        <button onClick={() => scrollByCards(-1)} aria-label="Anterior"><ChevronLeft size={20} /></button>
        <button onClick={() => scrollByCards(1)} aria-label="Próximo"><ChevronRight size={20} /></button>
      </div>
    </section>
  );
}
