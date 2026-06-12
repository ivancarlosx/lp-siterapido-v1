import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { templates } from './templateData';

type Site = (typeof templates)[number];

function SiteCard({ title, cat, img }: Site) {
  return (
    <a className="v2-site" href="#modelos" tabIndex={-1} aria-label={`${title} — ${cat}`}>
      <div className="v2-site-shot">
        <span className="v2-site-bar"><i /><i /><i /></span>
        <img src={img} alt={title} loading="lazy" />
        <span className="v2-site-open"><ArrowUpRight size={16} /></span>
      </div>
      <div className="v2-site-meta">
        <span className="v2-site-name">{cat}</span>
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
        {[...templates, ...templates].map((s, i) => (
          <SiteCard key={i} {...s} />
        ))}
      </div>
    </div>
  );
}
