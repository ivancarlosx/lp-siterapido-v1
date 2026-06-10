import { useState, useEffect, useCallback, useRef } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  BadgeCheck,
  Globe2,
  Plus,
  Minus,
  MessageCircle,
  Clock,
  PlayCircle,
  ShieldCheck,
  Star,
  Target,
  Users,
  Wrench,
  X,
} from 'lucide-react';
import { Reveal } from './Reveal';
import { HeroA } from './Heroes';
import { Comparison } from './Comparison';
import { Method } from './Method';
import { Testimonials } from './Testimonials';
import { Cursor } from './Cursor';
import { Logo } from './Logo';
import { initLenis, destroyLenis, lenisStop, lenisStart } from './lenis';
import 'lenis/dist/lenis.css';
import './v2.css';
import './v2-white.css';
import './v2-complete.css';

/* ------------------------------------------------------------------ */
/*  Animated count-up for the big stat numbers                         */
/* ------------------------------------------------------------------ */
function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const m = value.match(/\d+/);
  const target = m ? parseInt(m[0], 10) : 0;
  const prefix = m ? value.slice(0, m.index) : '';
  const suffix = m ? value.slice((m.index ?? 0) + m[0].length) : value;
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (target === 0 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      queueMicrotask(() => setN(target));
      return;
    }
    let raf = 0;
    let start = 0;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const tick = (t: number) => {
          if (!start) start = t;
          const p = Math.min((t - start) / 1300, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(eased * target));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.45 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <div ref={ref} className="v2-stat-k">
      {prefix}{n}{suffix}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const templates = [
  { title: 'Consultório Odontológico', cat: 'Dentista', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80' },
  { title: 'Clínica de Fisioterapia', cat: 'Fisioterapia', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80' },
  { title: 'Academia & Cross', cat: 'Academia', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80' },
  { title: 'Espaço de Psicologia', cat: 'Psicologia', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80' },
];


const faqs = [
  {
    q: 'A criação do site é realmente grátis?',
    a: 'Sim. Não cobramos pelo serviço de criação, design ou programação. Você paga apenas uma assinatura fixa que cobre hospedagem, domínio, manutenção e suporte contínuo.',
  },
  {
    q: 'E se eu quiser cancelar?',
    a: 'Você pode cancelar a qualquer momento, sem multas. O site permanece ativo enquanto a assinatura estiver ativa, pois é hospedado em nossa infraestrutura dedicada.',
  },
  {
    q: 'Em quanto tempo meu site fica pronto?',
    a: 'Garantimos a entrega da primeira versão em até 48 horas úteis após o preenchimento do formulário de briefing.',
  },
  {
    q: 'Posso pedir alterações depois de pronto?',
    a: 'Com certeza. Os planos incluem edições gratuitas mensais para ajustes de texto, imagens ou layout.',
  },
  {
    q: 'O domínio está incluso?',
    a: 'No plano Profissional registramos o domínio com validade de 1 ano gratuitamente. A renovação a partir do 2º ano é cobrada apenas pelo custo de registro.',
  },
];

const WHATSAPP_MESSAGE =
  'Olá! Quero criar meu site com a SiteRápido. Pode me ajudar?';
const WHATSAPP_URL =
  import.meta.env.VITE_WHATSAPP_URL ||
  `https://wa.me/?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const COMPLETE_VIDEO_URL = import.meta.env.VITE_COMPLETE_VIDEO_URL || '';

const socialProof = [
  { value: '48h', label: 'prazo médio de primeira versão' },
  { value: '+120', label: 'sites entregues para negócios locais' },
  { value: 'R$ 0', label: 'custo inicial de criação' },
  { value: '4.9/5', label: 'média de satisfação no atendimento' },
];

const audiences = [
  { icon: Target, title: 'Profissionais liberais', text: 'Dentistas, psicólogos, fisioterapeutas e consultores que precisam gerar confiança rápido.' },
  { icon: Users, title: 'Negócios locais', text: 'Clínicas, academias, salões e serviços que dependem de agenda, WhatsApp e indicação.' },
  { icon: Globe2, title: 'Marcas começando', text: 'Empresas que querem sair do improviso sem investir milhares no primeiro site.' },
];

const includedItems = [
  'Design profissional personalizado',
  'Hospedagem rápida e segura',
  'SSL, SEO básico e performance',
  'Botões e integração com WhatsApp',
  'Domínio grátis no plano Profissional',
  'Manutenção e edições mensais',
];

const teamMembers = [
  {
    name: 'Marina Costa',
    role: 'Estratégia e briefing',
    quote: 'Traduzimos a história do negócio em uma página clara, objetiva e pronta para converter.',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Rafael Lima',
    role: 'Design e experiência',
    quote: 'Cada seção precisa parecer bonita, mas principalmente ajudar o visitante a tomar uma decisão.',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Bianca Martins',
    role: 'Copy e conversão',
    quote: 'A oferta fica simples de entender, com menos ruído e mais motivo para chamar no WhatsApp.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Lucas Rocha',
    role: 'Publicação e suporte',
    quote: 'Depois que o site vai ao ar, seguimos cuidando da parte técnica para o cliente focar no negócio.',
    img: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=900&q=85',
  },
];

type CtaConfig = {
  primaryCtaHref: string;
  primaryCtaLabel: string;
  externalLinkProps: { target?: string; rel?: string };
};

function CompleteVideoSection({ cta }: { cta: CtaConfig }) {
  return (
    <section className="v2-section v2-complete-video" id="video">
      <div className="v2-wrap v2-video-grid">
        <Reveal className="v2-head v2-head-left">
          <span className="v2-kicker">Apresentação</span>
          <h2 className="v2-h2">Veja como tiramos seu site do papel em 48 horas.</h2>
          <p className="v2-lead">
            Uma visão direta do processo, do briefing até a publicação, para você entender
            exatamente o que acontece antes de escolher um plano.
          </p>
          <a href={cta.primaryCtaHref} className="v2-btn v2-btn-primary" {...cta.externalLinkProps}>
            {cta.primaryCtaLabel} <ArrowRight size={17} />
          </a>
        </Reveal>

        <Reveal delay={120} className="v2-video-card">
          {COMPLETE_VIDEO_URL ? (
            <iframe
              src={COMPLETE_VIDEO_URL}
              title="Apresentação SiteRápido"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="v2-video-placeholder">
              <PlayCircle size={72} />
              <span>Vídeo de apresentação</span>
              <strong>Site pronto, seguro e publicado em 48h</strong>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function CompleteProofSection() {
  return (
    <section className="v2-section v2-proof-impact" id="prova-social">
      <div className="v2-wrap">
        <Reveal className="v2-head">
          <span className="v2-kicker">Prova social</span>
          <h2 className="v2-h2">Mais confiança antes do primeiro clique.</h2>
          <p className="v2-lead">
            A página é construída para responder objeções, valorizar sua marca e transformar
            visitantes em conversas reais.
          </p>
        </Reveal>

        <div className="v2-proof-grid">
          <Reveal className="v2-proof-score">
            <div className="v2-proof-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} />
              ))}
            </div>
            <strong>Clientes chegam entendendo o valor antes de chamar.</strong>
            <p>
              "A página deixou nossa oferta mais clara. O WhatsApp passou a receber pessoas
              mais decididas e com menos dúvidas básicas."
            </p>
            <span>Relato recorrente de clientes SiteRápido</span>
          </Reveal>

          <div className="v2-proof-metrics">
            {socialProof.map((item, i) => (
              <Reveal key={item.value} delay={i * 70} className="v2-proof-metric">
                <span className="v2-proof-index">0{i + 1}</span>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CompleteAudienceSection() {
  return (
    <section className="v2-section v2-audience" id="para-quem">
      <div className="v2-wrap">
        <Reveal className="v2-head">
          <span className="v2-kicker">Para quem é</span>
          <h2 className="v2-h2">Feito para quem precisa vender confiança sem perder semanas.</h2>
        </Reveal>
        <div className="v2-audience-grid">
          {audiences.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 90} className="v2-audience-card">
                <span className="v2-audience-n">0{i + 1}</span>
                <div className="v2-audience-icon">
                  <Icon size={22} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CompleteIncludedSection({ cta }: { cta: CtaConfig }) {
  return (
    <section className="v2-section v2-included" id="incluso">
      <div className="v2-wrap v2-included-grid">
        <Reveal className="v2-head v2-head-left">
          <span className="v2-kicker">O que está incluso</span>
          <h2 className="v2-h2">Tudo que seu site precisa para parecer profissional desde o primeiro dia.</h2>
          <p className="v2-lead">
            Você não precisa juntar freelancer, hospedagem, domínio e manutenção em contratos separados.
          </p>
          <a href={cta.primaryCtaHref} className="v2-btn v2-btn-ghost" {...cta.externalLinkProps}>
            Ver melhor caminho <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <div className="v2-included-list">
          {includedItems.map((item, i) => (
            <Reveal key={item} delay={i * 55} className="v2-included-item">
              <span className="v2-included-n">{String(i + 1).padStart(2, '0')}</span>
              <span>{item}</span>
              <Check size={17} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompleteAboutSection() {
  const [activeMember, setActiveMember] = useState(0);
  const member = teamMembers[activeMember];
  const goToMember = (direction: -1 | 1) => {
    setActiveMember((current) => (current + direction + teamMembers.length) % teamMembers.length);
  };

  return (
    <section className="v2-section v2-about" id="quem-somos">
      <div className="v2-wrap v2-about-grid">
        <Reveal className="v2-head v2-head-left">
          <span className="v2-kicker">Quem somos</span>
          <h2 className="v2-h2">O time por trás do seu site em 48 horas.</h2>
          <p className="v2-lead">
            Estratégia, design, texto e publicação trabalhando juntos para transformar
            uma ideia simples em uma presença digital confiável.
          </p>
        </Reveal>

        <Reveal delay={120} className="v2-team-carousel">
          <div className="v2-team-photo">
            <img src={member.img} alt={`${member.name}, ${member.role}`} />
          </div>
          <div className="v2-team-copy">
            <span>{member.role}</span>
            <h3>{member.name}</h3>
            <p>{member.quote}</p>
          </div>
          <div className="v2-team-controls">
            <button type="button" onClick={() => goToMember(-1)} aria-label="Pessoa anterior">
              <ChevronLeft size={18} />
            </button>
            <div className="v2-team-dots" aria-label="Selecionar pessoa do time">
              {teamMembers.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  className={activeMember === index ? 'is-active' : ''}
                  onClick={() => setActiveMember(index)}
                  aria-label={`Ver ${item.name}`}
                />
              ))}
            </div>
            <button type="button" onClick={() => goToMember(1)} aria-label="Próxima pessoa">
              <ChevronRight size={18} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CompleteGuaranteesSection() {
  const items = [
    { icon: ShieldCheck, title: 'Cancele quando quiser', text: 'A assinatura é simples e transparente, sem multa para sair.' },
    { icon: Wrench, title: 'Manutenção inclusa', text: 'Ajustes, suporte e atualizações ficam dentro do plano escolhido.' },
    { icon: BadgeCheck, title: 'Publicado com cuidado', text: 'Site seguro, responsivo, com SSL e preparado para receber visitas.' },
  ];

  return (
    <section className="v2-section v2-guarantees" id="garantias">
      <div className="v2-wrap">
        <Reveal className="v2-head">
          <span className="v2-kicker">Segurança</span>
          <h2 className="v2-h2">Sem susto, sem taxa escondida, sem abandono depois da entrega.</h2>
        </Reveal>
        <div className="v2-guarantee-grid">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 80} className="v2-guarantee-card">
                <div className="v2-guarantee-icon">
                  <Icon size={22} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
type LandingV2Props = {
  variant?: 'dark' | 'white';
  goal?: 'checkout' | 'whatsapp';
  version?: 'standard' | 'complete';
};

export function LandingV2({ variant = 'dark', goal = 'checkout', version = 'standard' }: LandingV2Props) {
  const [scrolled, setScrolled] = useState(false);
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCat, setActiveCat] = useState('Todos');
  const [selectedTpl, setSelectedTpl] = useState<(typeof templates)[number] | null>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // CTA interactive light beams follow the pointer
  useEffect(() => {
    const el = ctaRef.current;
    if (!el || !window.matchMedia('(pointer: fine)').matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--cx', `${e.clientX - r.left}px`);
        el.style.setProperty('--cy', `${e.clientY - r.top}px`);
      });
    };
    el.addEventListener('pointermove', onMove);
    return () => {
      el.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);

  useEffect(() => {
    if (!selectedTpl) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedTpl(null); };
    lenisStop();
    window.addEventListener('keydown', onKey);
    return () => {
      lenisStart();
      window.removeEventListener('keydown', onKey);
    };
  }, [selectedTpl]);

  const cats = ['Todos', 'Dentista', 'Fisioterapia', 'Academia', 'Psicologia'];
  const visibleTemplates =
    activeCat === 'Todos' ? templates : templates.filter((t) => t.cat === activeCat);

  const toggleFaq = useCallback(
    (i: number) => setOpenFaq((cur) => (cur === i ? null : i)),
    []
  );
  const isWhatsapp = goal === 'whatsapp';
  const externalLinkProps = isWhatsapp ? { target: '_blank', rel: 'noreferrer' } : {};
  const primaryCtaHref = isWhatsapp ? WHATSAPP_URL : '#planos';
  const primaryCtaLabel = isWhatsapp ? 'Falar no WhatsApp' : 'Quero meu site';
  const pricingCtaHref = isWhatsapp ? WHATSAPP_URL : '#contato';
  const finalCtaHref = isWhatsapp ? WHATSAPP_URL : '#planos';
  const finalCtaLabel = isWhatsapp ? 'Chamar no WhatsApp' : 'Começar agora';
  const isComplete = version === 'complete';
  const ctaConfig = { primaryCtaHref, primaryCtaLabel, externalLinkProps };

  return (
    <div className={`v2 ${variant === 'white' ? 'v2-white' : ''} ${isComplete ? 'v2-complete' : ''}`}>
      <Cursor />
      <div className="v2-grain" aria-hidden />

      {/* ---------------- Nav ---------------- */}
      <header className={`v2-nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="v2-wrap v2-nav-inner">
          <a href="#top" className="v2-logo">
            <Logo variant={variant} />
          </a>
          <nav className="v2-nav-links">
            {isComplete && <a href="#video">Vídeo</a>}
            <a href="#metodo">Método</a>
            <a href="#modelos">Modelos</a>
            <a href="#planos">Planos</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href={isWhatsapp ? WHATSAPP_URL : '#contato'} className="v2-btn v2-btn-ghost v2-nav-cta" {...externalLinkProps}>
            Falar agora <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      {/* ---------------- Hero ---------------- */}
      <HeroA
        primaryHref={primaryCtaHref}
        primaryLabel={primaryCtaLabel}
        primaryExternal={isWhatsapp}
      />

      {/* ---------------- Stat band ---------------- */}
      <section className="v2-stats">
        <div className="v2-wrap v2-stats-grid">
          {[
            { k: '48h', v: 'para o site no ar' },
            { k: 'R$ 0', v: 'de custo de criação' },
            { k: '100%', v: 'manutenção inclusa' },
            { k: '24/7', v: 'site rápido e seguro' },
          ].map((s, i) => (
            <Reveal key={s.k} delay={i * 70} className="v2-stat">
              <AnimatedNumber value={s.k} />
              <div className="v2-stat-v">{s.v}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {isComplete && (
        <>
          <CompleteVideoSection cta={ctaConfig} />
          <CompleteProofSection />
        </>
      )}

      {/* ---------------- Comparison (scroll-driven) ---------------- */}
      <Comparison
        ctaHref={primaryCtaHref}
        ctaLabel={isWhatsapp ? 'Conversar no WhatsApp' : 'Escolher este método'}
        ctaExternal={isWhatsapp}
      />

      {isComplete && <CompleteAudienceSection />}

      {/* ---------------- Method (timeline) ---------------- */}
      <Method />

      {isComplete && <CompleteIncludedSection cta={ctaConfig} />}

      {/* ---------------- Templates ---------------- */}
      <section className="v2-section" id="modelos">
        <div className="v2-wrap">
          <Reveal className="v2-head">
            <span className="v2-kicker">Modelos</span>
            <h2 className="v2-h2">Estruturas provadas em conversão.</h2>
            <p className="v2-lead">Escolha um nicho. Personalizamos com a sua marca, suas cores e seus textos.</p>
          </Reveal>

          <Reveal className="v2-pills">
            {cats.map((c) => (
              <button
                key={c}
                className={`v2-pill ${activeCat === c ? 'is-active' : ''}`}
                onClick={() => setActiveCat(c)}
              >
                {c}
              </button>
            ))}
          </Reveal>

          <div className="v2-gallery">
            {visibleTemplates.map((t, i) => (
              <Reveal key={t.title} delay={i * 70}>
                <div
                  className="v2-tpl"
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedTpl(t)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedTpl(t);
                    }
                  }}
                >
                  <div className="v2-tpl-img">
                    <img src={t.img} alt={t.title} loading="lazy" />
                    <div className="v2-tpl-over">
                      <span>Ver design</span>
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                  <div className="v2-tpl-meta">
                    <span className="v2-tpl-cat">{t.cat}</span>
                    <h4>{t.title}</h4>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Testimonials (carousel) ---------------- */}
      <Testimonials />

      {isComplete && <CompleteAboutSection />}

      {/* ---------------- Pricing ---------------- */}
      <section className="v2-section" id="planos">
        <div className="v2-wrap">
          <Reveal className="v2-head">
            <span className="v2-kicker">Planos</span>
            <h2 className="v2-h2">Simples e transparente.</h2>
            <p className="v2-lead">Não pague pelo desenvolvimento. Escolha só como manter seu site no ar.</p>
          </Reveal>

          <Reveal className="v2-toggle">
            <button
              className={!annual ? 'is-on' : ''}
              onClick={() => setAnnual(false)}
            >
              Mensal
            </button>
            <button
              className={annual ? 'is-on' : ''}
              onClick={() => setAnnual(true)}
            >
              Anual <span className="v2-save">−2 meses</span>
            </button>
          </Reveal>

          <div className="v2-plans">
            <Reveal className="v2-plan">
              <div className="v2-plan-top">
                <h3>Essencial</h3>
                <p>Para profissionais começando no digital.</p>
              </div>
              <div className="v2-price">
                <span className="v2-cur">R$</span>
                <span className="v2-amt">{annual ? '124,90' : '149,90'}</span>
                <span className="v2-per">/mês</span>
              </div>
              {annual && <div className="v2-billed">Cobrado R$ 1.499 anualmente</div>}
              <ul className="v2-plan-list">
                <li><Check size={16} /> Site pronto em até 48h</li>
                <li><Check size={16} /> Hospedagem de alta velocidade</li>
                <li><Check size={16} /> Certificado SSL de segurança</li>
                <li><Check size={16} /> Configuração de SEO (Google)</li>
                <li><Check size={16} /> Botão de WhatsApp flutuante</li>
                <li><Check size={16} /> 1 edição gratuita por mês</li>
                <li><Check size={16} /> Suporte via e-mail</li>
              </ul>
              <a href={pricingCtaHref} className="v2-btn v2-btn-ghost v2-btn-full" {...externalLinkProps}>
                {isWhatsapp ? 'Falar sobre Essencial' : 'Assinar Essencial'}
              </a>
            </Reveal>

            <Reveal delay={100} className="v2-plan v2-plan-featured">
              <div className="v2-plan-flag">Mais escolhido</div>
              <div className="v2-plan-top">
                <h3>Profissional</h3>
                <p>Uma máquina completa, com suporte ágil.</p>
              </div>
              <div className="v2-price">
                <span className="v2-cur">R$</span>
                <span className="v2-amt">{annual ? '141,50' : '169,90'}</span>
                <span className="v2-per">/mês</span>
              </div>
              {annual && <div className="v2-billed">Cobrado R$ 1.698 anualmente</div>}
              <ul className="v2-plan-list">
                <li><Check size={16} /> <strong>Site pronto em até 48h</strong></li>
                <li><Check size={16} /> <strong>Domínio grátis (1º ano)</strong></li>
                <li><Check size={16} /> <strong>Suporte VIP via WhatsApp</strong></li>
                <li><Check size={16} /> <strong>Até 2 edições gratuitas / mês</strong></li>
                <li><Check size={16} /> Atualizações contínuas</li>
                <li><Check size={16} /> Hospedagem de alta velocidade</li>
                <li><Check size={16} /> SSL, SEO e WhatsApp inclusos</li>
              </ul>
              <a href={pricingCtaHref} className="v2-btn v2-btn-primary v2-btn-full" {...externalLinkProps}>
                {isWhatsapp ? 'Falar sobre Profissional' : 'Assinar Profissional'}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {isComplete && <CompleteGuaranteesSection />}

      {/* ---------------- FAQ ---------------- */}
      <section className="v2-section" id="faq">
        <div className="v2-wrap v2-faq-wrap">
          <Reveal className="v2-head v2-head-left">
            <span className="v2-kicker">FAQ</span>
            <h2 className="v2-h2">Perguntas frequentes.</h2>
            <p className="v2-lead">Ainda com dúvidas? Falamos pelo WhatsApp a qualquer momento.</p>
            <a href={isWhatsapp ? WHATSAPP_URL : '#contato'} className="v2-btn v2-btn-ghost" {...externalLinkProps}>
              <MessageCircle size={16} /> Falar com consultor
            </a>
          </Reveal>

          <div className="v2-faq-list">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <div className={`v2-faq ${openFaq === i ? 'is-open' : ''}`}>
                  <button className="v2-faq-q" onClick={() => toggleFaq(i)}>
                    <span>{f.q}</span>
                    {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                  <div
                    className="v2-faq-a"
                    style={{ maxHeight: openFaq === i ? '240px' : '0' }}
                  >
                    <p>{f.a}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Final CTA (horizon) ---------------- */}
      <section ref={ctaRef} className="v2-cta" id="contato">
        <div className="v2-cta-beams" aria-hidden>
          <div className="v2-cta-beams-base" />
          <div className="v2-cta-beams-lit" />
        </div>
        <div className="v2-wrap v2-cta-inner">
          <Reveal>
            <span className="v2-cta-pill">
              <span className="v2-cta-pill-dot" /> Comece hoje, sem custo de criação
            </span>
            <h2>Pronto para ter seu site no ar em 48h?</h2>
            <p>Sem custo de criação. Sem dor de cabeça. Só resultado.</p>
            <div className="v2-cta-actions">
              <a href={finalCtaHref} className="v2-btn v2-btn-primary v2-btn-lg" {...externalLinkProps}>
                {finalCtaLabel} <ArrowRight size={18} />
              </a>
              <a href={WHATSAPP_URL} className="v2-btn v2-btn-ghost v2-btn-lg" target="_blank" rel="noreferrer">
                <MessageCircle size={17} /> Falar no WhatsApp
              </a>
            </div>
            <div className="v2-cta-badges">
              <span><Clock size={14} /> Entrega em 48h</span>
              <span><ShieldCheck size={14} /> Cancele quando quiser</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className="v2-footer">
        <div className="v2-wrap v2-footer-inner">
          <div className="v2-footer-brand">
            <a href="#top" className="v2-logo">
              <Logo variant={variant} />
            </a>
            <p>Mais rápido, mais barato, mais profissional. Do briefing ao ar em 48 horas.</p>
          </div>
          <div className="v2-footer-cols">
            <div>
              <h5>Navegação</h5>
              <a href="#metodo">Método</a>
              <a href="#vantagens">Vantagens</a>
              <a href="#planos">Planos</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <h5>Legal</h5>
              <a href="#">Termos de uso</a>
              <a href="#">Privacidade</a>
              <a href="#">Cancelamento</a>
            </div>
            <div>
              <h5>Contato</h5>
              <a href={isWhatsapp ? WHATSAPP_URL : '#contato'} {...externalLinkProps}>Falar com consultor</a>
              <a href="#">contato@siterapido.com</a>
            </div>
          </div>
        </div>
        <div className="v2-wrap v2-footer-bottom">
          <span>© {new Date().getFullYear()} SiteRápido 48h. Todos os direitos reservados.</span>
          <span>CNPJ 00.000.000/0001-00</span>
        </div>
      </footer>

      {/* Model preview modal */}
      {selectedTpl && (
        <div className="v2-modal" onClick={() => setSelectedTpl(null)} role="dialog" aria-modal="true">
          <button className="v2-modal-close" onClick={() => setSelectedTpl(null)} aria-label="Fechar">
            <X size={20} />
          </button>
          <div className="v2-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="v2-modal-bar">
              <span /><span /><span />
              <div className="v2-modal-url">
                {selectedTpl.title.toLowerCase().replace(/[^a-z0-9]+/g, '')}.siterapido.me
              </div>
            </div>
            <div className="v2-modal-scroll">
              <div className="v2-modal-hero" style={{ backgroundImage: `url(${selectedTpl.img})` }}>
                <span className="v2-modal-cat">{selectedTpl.cat}</span>
                <h3>{selectedTpl.title}</h3>
                <span className="v2-modal-fakebtn">Agendar agora</span>
              </div>
              <div className="v2-modal-section">
                <div className="sk sk-title" />
                <div className="sk sk-line w90" />
                <div className="sk sk-line w70" />
                <div className="v2-modal-cards">
                  <div className="sk" /><div className="sk" /><div className="sk" />
                </div>
              </div>
              <div className="v2-modal-section">
                <div className="sk sk-title" />
                <div className="sk sk-line w90" />
                <div className="sk sk-line w70" />
              </div>
            </div>
            <div className="v2-modal-cta">
              <div>
                <strong>Gostou desse modelo?</strong>
                <p>Personalizamos com a sua marca, cores e textos.</p>
              </div>
              <a
                href={primaryCtaHref}
                className="v2-btn v2-btn-primary"
                onClick={() => setSelectedTpl(null)}
                {...externalLinkProps}
              >
                {isWhatsapp ? 'Falar sobre este modelo' : 'Quero esse modelo'} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp */}
      <a href={WHATSAPP_URL} className="v2-wa" aria-label="Falar no WhatsApp" target="_blank" rel="noreferrer">
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
