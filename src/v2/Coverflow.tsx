import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';

/* 3D coverflow of site shots fanning out in perspective, with a green center
   beam. The whole arc rotates slightly following the pointer (parallax). */
const shots = [
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=520&q=80',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=520&q=80',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=520&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=520&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=520&q=80',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=520&q=80',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=520&q=80',
];

export function HeroCoverflow() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el || !window.matchMedia('(pointer: fine)').matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const nx = (e.clientX / window.innerWidth - 0.5) * 2; // -1..1
        const ny = (e.clientY / window.innerHeight - 0.5) * 2;
        el.style.setProperty('--rot', `${(nx * 9).toFixed(2)}deg`);
        el.style.setProperty('--tilt', `${(-ny * 3).toFixed(2)}deg`);
      });
    };
    window.addEventListener('pointermove', onMove);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const center = (shots.length - 1) / 2;

  return (
    <div className="v2-cf" aria-hidden>
      <div className="v2-cf-beam" />
      <div className="v2-cf-floor" />
      <div className="v2-cf-stage" ref={stageRef}>
        {shots.map((src, i) => {
          const offset = i - center;
          const abs = Math.abs(offset);
          const style: CSSProperties = {
            transform: `translateX(${offset * 122}px) translateZ(${-abs * 78}px) rotateY(${-offset * 17}deg)`,
            zIndex: 10 - abs,
            filter: `brightness(${(1 - abs * 0.13).toFixed(2)})`,
          };
          return (
            <div className={`v2-cf-card ${offset === 0 ? 'is-center' : ''}`} style={style} key={i}>
              <img src={src} alt="" loading="lazy" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
