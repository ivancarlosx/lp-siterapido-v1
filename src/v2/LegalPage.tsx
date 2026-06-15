import { ArrowLeft } from 'lucide-react';
import { Logo } from './Logo';
import './v2.css';
import './v2-white.css';
import './legal.css';

const company = {
  name: 'SiteRápido 48h',
  cnpj: '31.305.061/0001-90',
  email: 'contato@siterapido.me',
};

const legalContent = {
  termos: {
    title: 'Termos de uso',
    intro: 'Condições gerais para contratação e uso dos serviços da SiteRápido 48h.',
    sections: [
      {
        title: 'Serviço contratado',
        text: 'Criamos, publicamos e mantemos sites profissionais mediante assinatura. O escopo contratado pode incluir design, hospedagem, manutenção, suporte, domínio e ajustes mensais conforme o plano escolhido.',
      },
      {
        title: 'Prazo de entrega',
        text: 'O prazo de até 48 horas começa após o recebimento completo do briefing, materiais obrigatórios e confirmação do plano. Solicitações adicionais podem alterar o prazo.',
      },
      {
        title: 'Responsabilidades do cliente',
        text: 'O cliente é responsável por fornecer informações verdadeiras, imagens, textos, marcas e permissões de uso dos materiais enviados para publicação no site.',
      },
      {
        title: 'Pagamentos e assinatura',
        text: 'A manutenção do site depende da assinatura ativa. A inadimplência pode ocasionar pausa no suporte, suspensão do site ou cancelamento dos serviços recorrentes.',
      },
    ],
  },
  privacidade: {
    title: 'Política de privacidade',
    intro: 'Como tratamos dados recebidos em formulários, atendimento e contratação dos serviços.',
    sections: [
      {
        title: 'Dados coletados',
        text: 'Podemos coletar nome, e-mail, telefone, dados de empresa, briefing do projeto e informações necessárias para atendimento, contratação, suporte e publicação do site.',
      },
      {
        title: 'Uso das informações',
        text: 'Usamos os dados para responder contatos, preparar propostas, executar serviços contratados, manter suporte, emitir comunicações operacionais e melhorar a experiência do cliente.',
      },
      {
        title: 'Compartilhamento',
        text: 'Dados podem ser compartilhados com provedores essenciais para hospedagem, domínio, pagamento, analytics e suporte, sempre no limite necessário para operação do serviço.',
      },
      {
        title: 'Solicitações do titular',
        text: 'Você pode solicitar acesso, correção ou exclusão de dados pelo e-mail de contato, respeitadas obrigações legais e registros necessários para execução contratual.',
      },
    ],
  },
  cancelamento: {
    title: 'Política de cancelamento',
    intro: 'Regras para pausas, cancelamentos e encerramento da assinatura.',
    sections: [
      {
        title: 'Cancelamento da assinatura',
        text: 'O cliente pode solicitar cancelamento a qualquer momento pelo canal de atendimento. O site permanece ativo enquanto a assinatura estiver regular e vigente.',
      },
      {
        title: 'Efeito do cancelamento',
        text: 'Após o encerramento, serviços de hospedagem, suporte, manutenção e atualizações deixam de ser prestados. Recursos vinculados ao plano podem ser desativados.',
      },
      {
        title: 'Domínio e materiais',
        text: 'Domínios, artes, textos e arquivos seguem as condições do plano contratado. Caso haja transferência, ela depende de regularidade financeira e viabilidade técnica.',
      },
      {
        title: 'Reativação',
        text: 'A reativação pode ser solicitada posteriormente, sujeita à disponibilidade, análise técnica e eventuais custos de retomada, domínio ou republicação.',
      },
    ],
  },
};

type LegalPageProps = {
  type: keyof typeof legalContent;
};

export function LegalPage({ type }: LegalPageProps) {
  const page = legalContent[type];

  return (
    <div className="v2 v2-white v2-legal-page">
      <div className="v2-grain" aria-hidden />
      <header className="v2-legal-nav">
        <div className="v2-wrap v2-legal-nav-inner">
          <a href="/v2-completa-white" className="v2-logo">
            <Logo variant="white" />
          </a>
          <a href="/v2-completa-white" className="v2-btn v2-btn-ghost">
            <ArrowLeft size={16} /> Voltar para o site
          </a>
        </div>
      </header>

      <main className="v2-legal-main">
        <section className="v2-wrap v2-legal-hero">
          <span className="v2-kicker">Legal</span>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </section>

        <section className="v2-wrap v2-legal-content">
          {page.sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}

          <aside className="v2-legal-company">
            <strong>{company.name}</strong>
            <span>CNPJ {company.cnpj}</span>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </aside>
        </section>
      </main>
    </div>
  );
}
