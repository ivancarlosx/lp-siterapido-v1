import { useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import './comparison.css';

/* Scroll-driven comparison: progress is tied to where the CARDS sit in the
   viewport, so the 3D tilt/raise plays exactly while the cards are on screen
   (staggered), and the winner's glow grows. Continuous with scroll position. */
type ComparisonProps = {
  ctaHref?: string;
  ctaLabel?: string;
  ctaExternal?: boolean;
};

export function Comparison({
  ctaHref = '#planos',
  ctaLabel = 'Escolher este método',
  ctaExternal = false,
}: ComparisonProps) {
  const ref = useRef<HTMLElement>(null);
  const ctaLinkProps = ctaExternal ? { target: '_blank', rel: 'noreferrer' } : {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const grid = el.querySelector<HTMLElement>('.v2-compare');
    if (!grid) return;

    let raf = 0;
    const clamp = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

    const update = () => {
      raf = 0;
      const r = grid.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when the cards' top is at the viewport bottom, 1 once it reaches ~28% up
      const p = clamp((vh - r.top) / (vh * 0.72));
      const stagger = (o: number) => clamp((p - o) / (1 - o));
      el.style.setProperty('--p1', stagger(0).toFixed(3));
      el.style.setProperty('--p2', stagger(0.16).toFixed(3));
      el.style.setProperty('--p3', stagger(0.32).toFixed(3));
    };

    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={ref} className="v2-section v2-compare-sec" id="vantagens">
      <div className="v2-wrap">
        <Reveal className="v2-head">
          <span className="v2-kicker">Por que nós</span>
          <h2 className="v2-h2">O jeito antigo de fazer sites ficou no passado.</h2>
          <p className="v2-lead">
            Compare o modelo tradicional com o método SiteRápido e veja onde você
            economiza tempo e dinheiro.
          </p>
        </Reveal>

        <div className="v2-compare">
          <div className="v2-compare-col v2-muted-col">
            <h3>Agências &amp; Freelas</h3>
            <ul>
              <li>Custo inicial alto (R$ 3.000+)</li>
              <li>30 a 60 dias para lançar</li>
              <li>Manutenção cobrada à parte</li>
            </ul>
          </div>

          <div className="v2-compare-col v2-muted-col">
            <h3>Faça você mesmo</h3>
            <ul>
              <li>Exige seu tempo e energia</li>
              <li>Risco de ficar lento e amador</li>
              <li>Mensalidades ocultas de plugins</li>
            </ul>
          </div>

          <div className="v2-compare-col v2-win-col">
            <div className="v2-win-tag">Novo padrão</div>
            <h3>O Método SiteRápido</h3>
            <ul>
              <li><Check size={17} /> <span><strong>Zero custo de criação.</strong> Você não paga pela mão de obra.</span></li>
              <li><Check size={17} /> <span><strong>Entrega em 48h.</strong> Profissional e focado em converter.</span></li>
              <li><Check size={17} /> <span><strong>Tudo em uma assinatura.</strong> Hospedagem, suporte e manutenção.</span></li>
            </ul>
            <a href={ctaHref} className="v2-btn v2-btn-primary v2-btn-full" {...ctaLinkProps}>
              {ctaLabel} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
