import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: 'A criação do site é realmente grátis?',
    answer: 'Sim! Nós não cobramos pelo serviço de criação, design ou programação. Você paga apenas uma assinatura recorrente fixa para cobrir os custos de hospedagem, domínio, manutenção e suporte contínuo.'
  },
  {
    question: 'E se eu quiser cancelar?',
    answer: 'Você pode cancelar sua assinatura a qualquer momento, sem multas. No entanto, o site permanecerá ativo apenas enquanto a assinatura estiver ativa, pois ele é hospedado em nossa infraestrutura dedicada.'
  },
  {
    question: 'Em quanto tempo meu site fica pronto?',
    answer: 'Garantimos a entrega da primeira versão em até 48 horas úteis após o preenchimento do formulário de briefing.'
  },
  {
    question: 'Posso pedir alterações depois de pronto?',
    answer: 'Com certeza! Nosso plano inclui 1 hora de manutenção mensal para você solicitar edições de texto, imagens ou ajustes de layout.'
  },
  {
    question: 'O domínio (www.meunome.com.br) está incluso?',
    answer: 'Sim, registramos o domínio para você com validade de 1 ano, de forma 100% gratuita no plano. A partir do segundo ano, a renovação do domínio é feita separadamente (apenas o custo do registro).'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <h2 className="section-title animate-fade-up">
          Perguntas Frequentes
        </h2>
        <p className="section-subtitle animate-fade-up">
          Ainda com dúvidas? Nós respondemos as mais comuns.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item glass-card ${openIndex === index ? 'faq-open' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="text-brand" />
                ) : (
                  <ChevronDown className="text-secondary" />
                )}
              </button>
              <div 
                className="faq-answer"
                style={{ 
                  maxHeight: openIndex === index ? '200px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
