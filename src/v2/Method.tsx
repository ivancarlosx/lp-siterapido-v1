import { Reveal } from './Reveal';
import './method.css';

const steps = [
  {
    n: '01',
    title: 'Briefing rápido',
    text: 'Você assina o plano e preenche um formulário de 5 minutos com logo, cores e informações do seu negócio.',
    dur: '5 min',
  },
  {
    n: '02',
    title: 'Produção em 48h',
    text: 'Nossa equipe cria o design, escreve os textos focados em conversão e monta o site inteiro por você.',
    dur: '48 horas',
  },
  {
    n: '03',
    title: 'Lançamento e suporte',
    text: 'Com o seu "ok", o site vai ao ar. A partir daí cuidamos da manutenção, atualizações e suporte.',
    dur: 'Contínuo',
  },
];

export function Method() {
  return (
    <section className="v2-section v2-method" id="metodo">
      <div className="v2-wrap">
        <Reveal className="v2-head">
          <span className="v2-kicker">Como funciona</span>
          <h2 className="v2-h2">Do briefing ao ar, em três passos.</h2>
        </Reveal>

        <div className="v2-timeline">
          <div className="v2-tl-axis" aria-hidden>
            <span className="v2-tl-ruler" />
          </div>
          <div className="v2-tl-grid">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120} className="v2-tl-step">
                <div className="v2-tl-content">
                  <span className="v2-tl-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                <span className="v2-tl-line" />
                <span className="v2-tl-pill">
                  <i className="v2-tl-sq" />
                  {s.dur}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
