import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import LegalPageTemplate, { type LegalSection } from "@/components/legal/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Política de Privacidade | Grafo Studio",
  description:
    "Saiba como a Grafo Studio coleta, usa e protege seus dados pessoais em conformidade com a LGPD.",
};

const sections: LegalSection[] = [
  {
    titulo: "1. Quem somos",
    conteudo: `A Grafo Studio é uma agência de marketing digital responsável pelo tratamento dos dados pessoais coletados neste site. Para dúvidas sobre esta política, entre em contato pelo e-mail ${SITE.email}.`,
  },
  {
    titulo: "2. Dados que coletamos",
    lista: [
      "Nome completo",
      "Nome da empresa",
      "Número de WhatsApp",
      "Endereço de e-mail",
      "Serviço de interesse e mensagem enviada pelo formulário de contato",
      "Dados de navegação (páginas visitadas, tempo de sessão) via Google Analytics",
      "Dados de comportamento para fins de remarketing via Meta Pixel (mediante consentimento)",
    ],
  },
  {
    titulo: "3. Como usamos seus dados",
    lista: [
      "Responder a solicitações de orçamento e contatos enviados pelo formulário",
      "Direcionar o atendimento via WhatsApp",
      "Analisar o desempenho do site e melhorar a experiência de navegação",
      "Exibir anúncios relevantes em outras plataformas (somente com seu consentimento)",
    ],
  },
  {
    titulo: "4. Base legal (LGPD)",
    lista: [
      "Formulário de contato: legítimo interesse — você iniciou o contato voluntariamente (Art. 7º, IX)",
      "Google Analytics: legítimo interesse para melhoria do site (Art. 7º, IX)",
      "Meta Pixel / remarketing: consentimento explícito (Art. 7º, I)",
    ],
  },
  {
    titulo: "5. Compartilhamento de dados",
    conteudo: "Seus dados não são vendidos. Podemos compartilhá-los apenas com:",
    lista: [
      "WhatsApp Business (Meta Platforms) — para atendimento ao cliente",
      "Google LLC — para análise de tráfego (Google Analytics), com dados anonimizados",
      "Meta Platforms — para remarketing (somente com consentimento prévio)",
    ],
  },
  {
    titulo: "6. Retenção de dados",
    conteudo:
      "Os dados coletados pelo formulário de contato são mantidos enquanto houver interesse comercial legítimo ou até que você solicite a exclusão. Dados de analytics são retidos conforme as políticas do Google Analytics (padrão: 14 meses).",
  },
  {
    titulo: "7. Seus direitos",
    conteudo: "Nos termos da LGPD, você tem direito a:",
    lista: [
      "Confirmação da existência de tratamento dos seus dados",
      "Acesso aos dados que temos sobre você",
      "Correção de dados incompletos, inexatos ou desatualizados",
      "Anonimização, bloqueio ou eliminação de dados desnecessários",
      "Portabilidade dos dados a outro fornecedor de serviço",
      "Eliminação dos dados tratados com base no seu consentimento",
      "Revogação do consentimento a qualquer momento",
    ],
  },
  {
    titulo: "8. Como exercer seus direitos",
    conteudo: `Envie um e-mail para ${SITE.email} com o assunto "LGPD — Direitos do Titular". Responderemos em até 15 dias úteis.`,
  },
  {
    titulo: "9. Cookies",
    conteudo:
      "Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos (Google Analytics). Cookies de marketing (Meta Pixel) são carregados apenas mediante seu consentimento. Você pode gerenciar cookies nas configurações do seu navegador a qualquer momento.",
  },
  {
    titulo: "10. Segurança",
    conteudo:
      "Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou divulgação indevida. O site opera exclusivamente em HTTPS.",
  },
  {
    titulo: "11. Alterações nesta política",
    conteudo:
      "Esta política pode ser atualizada periodicamente. A data da última revisão será sempre indicada no rodapé desta página. Recomendamos a leitura periódica.",
  },
  {
    titulo: "12. Contato e encarregado (DPO)",
    conteudo: `Para questões relacionadas à privacidade e proteção de dados:\n\nE-mail: ${SITE.email}\nHorário de atendimento: ${SITE.horario}`,
  },
];

export default function PoliticaPrivacidadePage() {
  return (
    <LegalPageTemplate
      title="Política de Privacidade"
      subtitle={
        <>
          Sua privacidade é importante para nós. Esta política explica como tratamos seus
          dados pessoais em conformidade com a{" "}
          <span className="text-[#ff4e00] font-semibold">
            Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018)
          </span>
          .
        </>
      }
      date="maio de 2026"
      sections={sections}
      ctaHeading="Dúvidas sobre seus dados?"
      ctaActions={
        <Link
          href="/contato"
          className="inline-flex items-center gap-2 bg-[#ff4e00] text-white font-body font-bold text-sm uppercase tracking-widest py-4 px-8 hover:bg-[#e04500] transition-all flex-shrink-0"
        >
          Falar com a equipe
        </Link>
      }
    />
  );
}
