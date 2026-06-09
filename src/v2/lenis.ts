import Lenis from 'lenis';

/* Singleton Lenis instance so modals can pause/resume the smooth scroll. */
let lenis: Lenis | null = null;
let raf = 0;

export function initLenis() {
  if (lenis) return lenis;
  lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  const loop = (time: number) => {
    lenis?.raf(time);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);
  return lenis;
}

export function destroyLenis() {
  if (raf) cancelAnimationFrame(raf);
  lenis?.destroy();
  lenis = null;
  raf = 0;
}

export function lenisStop() { lenis?.stop(); }
export function lenisStart() { lenis?.start(); }
