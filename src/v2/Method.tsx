import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';
import './method.css';

const steps = [
  {
    n: '01',
    title: 'Escolha o plano',
    text: 'Você seleciona a assinatura mensal, escolhe o modelo que combina com o negócio e confirma o início.',
    dur: 'Hoje',
  },
  {
    n: '02',
    title: 'Envie o briefing',
    text: 'Recebemos logo, cores, fotos, contatos e as informações principais em um formulário simples.',
    dur: '5 min',
  },
  {
    n: '03',
    title: 'Montamos seu site',
    text: 'Nossa equipe adapta o template, organiza os textos, configura os botões e prepara tudo para aprovação.',
    dur: 'Até 48h',
  },
  {
    n: '04',
    title: 'Publicamos e cuidamos',
    text: 'Depois do seu ok, colocamos o site no ar e seguimos com hospedagem, suporte e atualizações.',
    dur: 'Sempre',
  },
];

export function Method() {
  return (
    <section className="v2-section v2-method" id="metodo">
      <div className="v2-wrap">
        <Reveal className="v2-head">
          <span className="v2-kicker">Como funciona</span>
          <h2 className="v2-h2">Um caminho simples até seu site publicado.</h2>
        </Reveal>

        <div className="v2-process">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} className="v2-process-step">
              <div className="v2-process-marker">
                <span>{s.n}</span>
                {i < steps.length - 1 ? <ArrowRight size={18} /> : <CheckCircle2 size={18} />}
              </div>
              <div className="v2-process-copy">
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                <strong>{s.dur}</strong>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
