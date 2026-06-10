import { useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Check, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';
import { HeroMarquee } from './Marquee';
import './heroes.css';

/* ------------------------------------------------------------------ */
/*  Shared pieces                                                      */
/* ------------------------------------------------------------------ */
function Headline() {
  return (
    <>
      Sites profissionais,
      <br />
      <em>sem custo de criação.</em>
    </>
  );
}

const SUB =
  'Desenvolvemos seu site 100% grátis. Você paga apenas uma assinatura fixa e acessível para manter tudo no ar — rápido, seguro e sempre atualizado.';

const TRUST = ['Criação zero custo', 'Domínio grátis no 1º ano', 'Hospedagem inclusa'];

function Mockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`v2-frame ${compact ? 'v2-frame-compact' : ''}`}>
      <div className="v2-frame-bar">
        <span /><span /><span />
        <div className="v2-frame-url">seunegocio.com.br</div>
      </div>
      <div className="v2-frame-body">
        <div className="v2-sk v2-sk-hero" />
        <div className="v2-sk-row">
          <div className="v2-sk v2-sk-line w70" />
          <div className="v2-sk v2-sk-line w90" />
          <div className="v2-sk v2-sk-line w50" />
          <div className="v2-sk v2-sk-pill" />
        </div>
        <div className="v2-sk-cards">
          <div className="v2-sk v2-sk-card" />
          <div className="v2-sk v2-sk-card" />
          <div className="v2-sk v2-sk-card" />
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  HERO A — Editorial centralizado (refinado, mockup mais próximo)    */
/* ================================================================== */
export function HeroA() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
        el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
      });
    };
    el.addEventListener('pointermove', onMove);
    return () => {
      el.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={ref} className="v2-hero v2-heroA" id="top">
      <div className="v2-hero-beams" aria-hidden>
        <div className="v2-hero-beams-base" />
        <div className="v2-hero-beams-lit" />
      </div>
      <div className="v2-hero-spot" aria-hidden />
      <div className="v2-wrap">
        <Reveal as="div" className="v2-eyebrow">
          <span className="v2-eyebrow-dot" />
          <span>Seu site no ar em 48 horas</span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="v2-hero-title"><Headline /></h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="v2-hero-sub">{SUB}</p>
        </Reveal>

        <Reveal delay={240} className="v2-hero-ctas">
          <a href="#planos" className="v2-btn v2-btn-primary">
            Quero meu site <ArrowRight size={17} />
          </a>
          <a href="#metodo" className="v2-btn v2-btn-ghost">Ver como funciona</a>
        </Reveal>

        <Reveal delay={320} className="v2-hero-trust">
          {TRUST.map((t) => (
            <span key={t}><Check size={14} /> {t}</span>
          ))}
        </Reveal>
      </div>

      <Reveal delay={120} className="v2-heroA-mq">
        <HeroMarquee />
      </Reveal>
    </section>
  );
}

/* ================================================================== */
/*  HERO B — Split assimétrico (texto à esquerda, produto à direita)   */
/* ================================================================== */
export function HeroB() {
  return (
    <section className="v2-hero v2-heroB" id="top">
      <div className="v2-hero-glow v2-hero-glow-right" aria-hidden />
      <div className="v2-wrap v2-heroB-grid">
        <div className="v2-heroB-copy">
          <Reveal as="div" className="v2-eyebrow">
            <Sparkles size={14} />
            <span>Seu site no ar em 48 horas</span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="v2-hero-title v2-heroB-title"><Headline /></h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="v2-hero-sub v2-heroB-sub">{SUB}</p>
          </Reveal>

          <Reveal delay={240} className="v2-hero-ctas v2-heroB-ctas">
            <a href="#planos" className="v2-btn v2-btn-primary">
              Quero meu site <ArrowRight size={17} />
            </a>
            <a href="#metodo" className="v2-btn v2-btn-ghost">Ver como funciona</a>
          </Reveal>

          <Reveal delay={320} className="v2-heroB-trust">
            {TRUST.map((t) => (
              <span key={t}><Check size={14} /> {t}</span>
            ))}
          </Reveal>
        </div>

        <Reveal delay={120} className="v2-heroB-visual">
          <Mockup />
          <div className="v2-heroB-badge">
            <Clock size={16} />
            <div>
              <strong>48h</strong>
              <span>do briefing ao ar</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  HERO C — Minimal tipográfico (sem mockup, foco total no texto)     */
/* ================================================================== */
export function HeroC() {
  return (
    <section className="v2-hero v2-heroC" id="top">
      <div className="v2-hero-glow v2-hero-glow-c" aria-hidden />
      <div className="v2-wrap v2-heroC-inner">
        <Reveal as="div" className="v2-eyebrow">
          <Sparkles size={14} />
          <span>Seu site no ar em 48 horas</span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="v2-heroC-title">
            Sites profissionais,
            <br />
            <em>sem custo</em> de criação.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="v2-heroC-sub">
            Criação 100% grátis. Você paga só uma assinatura fixa para manter no ar.
          </p>
        </Reveal>

        <Reveal delay={240} className="v2-heroC-ctas">
          <a href="#planos" className="v2-btn v2-btn-primary v2-btn-lg">
            Quero meu site <ArrowRight size={18} />
          </a>
          <a href="#metodo" className="v2-heroC-link">
            Ver como funciona <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <Reveal delay={340} className="v2-heroC-stats">
          <div>
            <strong>48h</strong>
            <span>para o site no ar</span>
          </div>
          <div>
            <strong>R$ 0</strong>
            <span>de custo de criação</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>manutenção inclusa</span>
          </div>
          <div className="v2-heroC-stat-badges">
            <span><Clock size={13} /> Entrega em 48h</span>
            <span><ShieldCheck size={13} /> Cancele quando quiser</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
