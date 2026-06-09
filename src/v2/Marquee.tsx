import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

/* Placeholder portfolio — sites "já criados". Swap for real screenshots later. */
const sites = [
  { name: 'Sorriso Odonto', niche: 'Dentista', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=640&q=80' },
  { name: 'Movimento Fisio', niche: 'Fisioterapia', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=640&q=80' },
  { name: 'Cross Arena', niche: 'Academia', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=640&q=80' },
  { name: 'Espaço Mente', niche: 'Psicologia', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=640&q=80' },
  { name: 'NutriVida', niche: 'Nutrição', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=640&q=80' },
  { name: 'Performance PT', niche: 'Personal', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=640&q=80' },
  { name: 'Sabor & Arte', niche: 'Restaurante', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=640&q=80' },
  { name: 'Doce Encanto', niche: 'Confeitaria', img: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=640&q=80' },
  { name: 'AutoMec', niche: 'Mecânica', img: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=640&q=80' },
  { name: 'Studio Sálvia', niche: 'Estética', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=640&q=80' },
];

type Site = (typeof sites)[number];

function SiteCard({ name, niche, img }: Site) {
  return (
    <a className="v2-site" href="#modelos" tabIndex={-1} aria-label={`${name} — ${niche}`}>
      <div className="v2-site-shot">
        <span className="v2-site-bar"><i /><i /><i /></span>
        <img src={img} alt={name} loading="lazy" />
        <span className="v2-site-open"><ArrowUpRight size={16} /></span>
      </div>
      <div className="v2-site-meta">
        <span className="v2-site-name">{name}</span>
        <span className="v2-site-niche">{niche}</span>
      </div>
    </a>
  );
}

const PX_PER_SEC = 55; // base scroll speed
const HOVER_RATE = 0.22; // playback rate while hovering (slower, not stopped)

export function HeroMarquee() {
  const rootRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const row = rowRef.current;
    if (!root || !row) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const half = row.scrollWidth / 2;

    // Composited Web Animation — runs even when the tab is hidden, and
    // updatePlaybackRate() ramps the speed smoothly (no positional jump).
    const anim = row.animate(
      [{ transform: 'translateX(0)' }, { transform: `translateX(${-half}px)` }],
      { duration: (half / PX_PER_SEC) * 1000, iterations: Infinity, easing: 'linear' }
    );

    const onEnter = () => anim.updatePlaybackRate(HOVER_RATE);
    const onLeave = () => anim.updatePlaybackRate(1);
    root.addEventListener('mouseenter', onEnter);
    root.addEventListener('mouseleave', onLeave);

    return () => {
      anim.cancel();
      root.removeEventListener('mouseenter', onEnter);
      root.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="v2-mq" ref={rootRef} aria-label="Sites que já criamos">
      <div className="v2-mq-row" ref={rowRef}>
        {[...sites, ...sites].map((s, i) => (
          <SiteCard key={i} {...s} />
        ))}
      </div>
    </div>
  );
}
