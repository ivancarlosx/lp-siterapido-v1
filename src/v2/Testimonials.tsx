import { useEffect, useRef, useState } from 'react';
import { Star, Quote, Play, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Reveal } from './Reveal';
import { lenisStop, lenisStart } from './lenis';
import './testimonials.css';

type Item =
  | { type: 'text'; name: string; role: string; content: string; avatar: string }
  | { type: 'video'; name: string; role: string; poster: string; videoId: string };

const items: Item[] = [
  {
    type: 'video',
    name: 'Vanessa Melo',
    role: 'Cliente SiteRápido',
    poster: 'https://i.ytimg.com/vi/gXUCsEJ6kl4/oar2.jpg',
    videoId: 'gXUCsEJ6kl4',
  },
  {
    type: 'text',
    name: 'Dr. Ricardo Silva',
    role: 'Dentista',
    content: 'Em menos de 48h eu já tinha um site profissional que meus pacientes elogiam todos os dias. O custo-benefício é imbatível.',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80',
  },
  {
    type: 'video',
    name: 'Marcos Araújo',
    role: 'Cliente SiteRápido',
    poster: 'https://i.ytimg.com/vi/fGzaeQ-qiTg/oar2.jpg',
    videoId: 'fGzaeQ-qiTg',
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
    name: 'Gilberto Alvares',
    role: 'Cliente SiteRápido',
    poster: 'https://i.ytimg.com/vi/IG_g3ipkQSA/oar2.jpg',
    videoId: 'IG_g3ipkQSA',
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
];

export function Testimonials({ isWhatsapp = true }: { isWhatsapp?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [video, setVideo] = useState<Extract<Item, { type: 'video' }> | null>(null);
  const displayItems = items.map((item) => {
    if (isWhatsapp) return item;
    if (item.type === 'text' && item.name === 'Gustavo Mendes') {
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

  useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVideo(null);
    };
    lenisStop();
    window.addEventListener('keydown', onKey);
    return () => {
      lenisStart();
      window.removeEventListener('keydown', onKey);
    };
  }, [video]);

  return (
    <>
      <section className="v2-section" id="depoimentos">
        <div className="v2-wrap">
          <Reveal className="v2-head">
            <span className="v2-kicker">Depoimentos</span>
            <h2 className="v2-h2">Quem já acelerou conosco.</h2>
          </Reveal>
        </div>

        <div className="v2-tt-track" ref={trackRef}>
          <div className="v2-tt-pad" aria-hidden />
          {displayItems.map((t) =>
            t.type === 'text' ? (
              <article className="v2-tcard v2-tcard-text" key={`text-${t.name}`}>
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
            ) : (
              <button className="v2-tcard v2-tcard-video" key={`video-${t.name}`} onClick={() => setVideo(t)}>
                <div className="v2-tcard-video-thumb">
                  <img className="v2-tcard-poster" src={t.poster} alt={t.name} loading="lazy" />
                  <span className="v2-tcard-play"><Play size={22} fill="currentColor" /></span>
                </div>
                <div className="v2-tcard-author v2-tcard-video-author">
                  <img src={t.poster} alt={t.name} loading="lazy" />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </button>
            )
          )}
          <div className="v2-tt-pad" aria-hidden />
        </div>

        <div className="v2-tt-nav">
          <button onClick={() => scrollByCards(-1)} aria-label="Anterior"><ChevronLeft size={20} /></button>
          <button onClick={() => scrollByCards(1)} aria-label="Próximo"><ChevronRight size={20} /></button>
        </div>
      </section>

      {video && (
        <div className="v2-modal" onClick={() => setVideo(null)} role="dialog" aria-modal="true">
          <button className="v2-modal-close" onClick={() => setVideo(null)} aria-label="Fechar">
            <X size={20} />
          </button>
          <div className="v2-vmodal" onClick={(e) => e.stopPropagation()}>
            <div className="v2-vmodal-player">
              <iframe
                src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={`Depoimento ${video.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="v2-vmodal-foot">
              <div>
                <strong>{video.name}</strong>
                <span>{video.role}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
