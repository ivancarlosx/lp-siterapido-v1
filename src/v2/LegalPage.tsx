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
    intro: 'Estes Termos de Uso regulam o acesso, a contratação e a utilização dos serviços oferecidos pela SiteRápido 48h.',
    blocks: [
      {
        kind: 'p',
        text: 'Ao contratar ou utilizar os serviços da SiteRápido 48h, o cliente declara que leu, compreendeu e concorda com as condições descritas neste documento. A SiteRápido 48h oferece soluções para criação, publicação e manutenção de sites profissionais, com foco em velocidade de entrega, clareza comercial e presença digital para negócios locais, profissionais liberais e empresas em fase de estruturação.',
      },
      {
        title: 'Serviço contratado',
        text: 'O serviço contratado pode incluir criação de layout, organização de conteúdo, publicação do site, hospedagem, manutenção, suporte, domínio, integrações e ajustes mensais, conforme as condições do plano escolhido. O escopo será definido com base nas informações fornecidas pelo cliente e nos recursos disponíveis em cada modalidade de assinatura.',
      },
      {
        title: 'Prazo de entrega',
        text: 'O prazo de entrega informado, incluindo a promessa de site no ar em até 48 horas, começa a contar após a confirmação do pagamento quando aplicável, recebimento completo do briefing e envio dos materiais necessários para execução do projeto. Alterações de escopo, ausência de informações, solicitações adicionais ou demora na aprovação podem impactar o prazo originalmente previsto.',
      },
      {
        title: 'Responsabilidades do cliente',
        text: 'O cliente é responsável por fornecer informações verdadeiras, materiais autorizados para uso, imagens, textos, logotipos, dados comerciais e quaisquer permissões necessárias para publicação. A SiteRápido 48h não se responsabiliza por reclamações decorrentes do uso indevido de marcas, imagens, textos ou conteúdos enviados pelo próprio cliente.',
      },
      {
        title: 'Pagamentos e assinatura',
        text: 'A manutenção do site, hospedagem, suporte e demais serviços recorrentes dependem da assinatura ativa e regular. Em caso de inadimplência, a SiteRápido 48h poderá suspender temporariamente o suporte, pausar atualizações, retirar o site do ar ou encerrar os serviços recorrentes, sem prejuízo da cobrança de valores pendentes.',
      },
      {
        title: 'Alterações dos termos',
        text: 'A SiteRápido 48h poderá atualizar estes Termos de Uso para refletir mudanças operacionais, comerciais, técnicas ou legais. A versão publicada nesta página será considerada a versão vigente para consulta dos clientes e visitantes.',
      },
    ],
  },
  privacidade: {
    title: 'Política de privacidade',
    intro: 'Esta Política de Privacidade explica como a SiteRápido 48h coleta, utiliza, armazena e protege dados pessoais.',
    blocks: [
      {
        kind: 'p',
        text: 'A SiteRápido 48h valoriza a privacidade dos seus clientes, visitantes e leads. Os dados pessoais são tratados de forma proporcional às finalidades de atendimento, contratação, execução dos serviços, suporte, comunicação operacional e melhoria da experiência. Ao preencher formulários, iniciar contato ou contratar nossos serviços, você concorda com o tratamento das informações conforme esta política.',
      },
      {
        title: 'Dados coletados',
        text: 'Podemos coletar nome, e-mail, telefone, dados da empresa, informações de briefing, preferências de comunicação, dados de pagamento quando aplicável e materiais necessários para criação do site. Também podemos registrar informações técnicas básicas de navegação, como páginas acessadas, origem do acesso e interações com campanhas.',
      },
      {
        title: 'Uso das informações',
        text: 'As informações são utilizadas para responder contatos, preparar propostas, executar os serviços contratados, publicar e manter sites, prestar suporte, enviar comunicações operacionais, melhorar processos internos e cumprir obrigações legais ou contratuais.',
      },
      {
        title: 'Compartilhamento',
        text: 'Os dados podem ser compartilhados com provedores essenciais para hospedagem, domínio, processamento de pagamento, ferramentas de atendimento, analytics, automação, e-mail e demais recursos necessários para operação do serviço. Esse compartilhamento ocorre apenas quando necessário para execução das finalidades descritas nesta política.',
      },
      {
        title: 'Solicitações do titular',
        text: 'O titular dos dados pode solicitar acesso, correção, atualização, portabilidade ou exclusão de informações pessoais pelo e-mail de contato. Algumas informações poderão ser mantidas quando necessárias para cumprimento de obrigação legal, exercício regular de direitos ou preservação de registros contratuais.',
      },
      {
        title: 'Segurança',
        text: 'Adotamos medidas razoáveis para proteger informações contra acessos não autorizados, perda, alteração ou divulgação indevida. Nenhuma operação digital é totalmente isenta de riscos, mas buscamos utilizar ferramentas e processos compatíveis com a natureza dos dados tratados.',
      },
    ],
  },
  cancelamento: {
    title: 'Política de cancelamento',
    intro: 'Esta Política de Cancelamento descreve as condições para encerramento, pausa ou reativação dos serviços contratados.',
    blocks: [
      {
        kind: 'p',
        text: 'A SiteRápido 48h trabalha com serviços recorrentes vinculados à manutenção do site, hospedagem, suporte e demais recursos contratados. O cancelamento pode ser solicitado pelo cliente a qualquer momento, observadas as condições do plano, eventuais valores pendentes e prazos operacionais necessários para processamento da solicitação.',
      },
      {
        title: 'Cancelamento da assinatura',
        text: 'O cliente pode solicitar o cancelamento pelo canal oficial de atendimento. O site permanecerá ativo enquanto a assinatura estiver regular e vigente. Após o processamento do cancelamento, os serviços recorrentes vinculados ao plano deixam de ser prestados.',
      },
      {
        title: 'Efeito do cancelamento',
        text: 'Com o encerramento da assinatura, poderão ser desativados hospedagem, suporte, manutenção, atualizações, integrações, recursos técnicos e demais itens incluídos no plano. A indisponibilidade do site após o cancelamento não caracteriza falha do serviço, pois a continuidade depende da assinatura ativa.',
      },
      {
        title: 'Domínio e materiais',
        text: 'Domínios, artes, textos, layouts e arquivos seguem as condições comerciais do plano contratado. Eventual transferência de domínio ou entrega de materiais poderá depender de regularidade financeira, viabilidade técnica, titularidade do recurso e regras do provedor responsável.',
      },
      {
        title: 'Reativação',
        text: 'A reativação poderá ser solicitada posteriormente, sujeita à análise técnica, disponibilidade de arquivos, regularização de pendências, custos de retomada, republicação ou recuperação de domínio. A SiteRápido 48h não garante preservação indefinida de ambientes cancelados.',
      },
      {
        title: 'Valores pagos',
        text: 'Valores já pagos por períodos anteriores ou serviços executados não são automaticamente reembolsáveis, salvo quando houver previsão específica em contrato, exigência legal aplicável ou decisão comercial expressa da SiteRápido 48h.',
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
          <article className="v2-legal-article">
            {page.blocks.map((block, index) => (
              block.kind === 'p' ? (
                <p key={index}>{block.text}</p>
              ) : (
                <section key={block.title}>
                  <h2>{block.title}</h2>
                  <p>{block.text}</p>
                </section>
              )
            ))}
          </article>

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
