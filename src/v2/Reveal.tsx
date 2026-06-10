import { useState, useEffect, useRef } from 'react';
import type { ReactNode, RefObject } from 'react';

/* Reveal-on-scroll helper shared across the v2 landing + hero variants */
export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  as?: 'div' | 'section' | 'header' | 'span' | 'li';
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already visible on mount (above the fold) → reveal right away so content
    // is never left stuck at opacity 0 if the observer's first tick is delayed.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      queueMicrotask(() => setShown(true));
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);

    // Safety net: never keep content hidden for more than ~1.2s.
    const timer = window.setTimeout(() => setShown(true), 1200);
    return () => {
      obs.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const Comp = Tag as 'div';
  return (
    <Comp
      ref={ref as RefObject<HTMLDivElement>}
      className={`v2-reveal ${shown ? 'is-shown' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}
