import { useEffect, useRef } from 'react';

/* Custom interactive cursor: a small dot that tracks the pointer exactly plus a
   ring that trails with easing and grows over interactive elements. Desktop only. */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add('v2-has-cursor');

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };
    const onOver = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(
        'a, button, [role="button"], input, .v2-tpl, .v2-tl-step'
      );
      ring.classList.toggle('is-active', !!target);
    };
    const onLeave = () => { dot.style.opacity = '0'; ring.style.opacity = '0'; };

    const tick = () => {
      rx += (mx - rx) * 0.2;
      ry += (my - ry) * 0.2;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerover', onOver);
    document.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove('v2-has-cursor');
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="v2-cursor-ring" aria-hidden />
      <div ref={dotRef} className="v2-cursor-dot" aria-hidden />
    </>
  );
}
