import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import LegalPageTemplate, { type LegalSection } from "@/components/legal/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Termos de Uso | Grafo Studio",
  description:
    "Leia os Termos de Uso do site da Grafo Studio e entenda as condições de navegação e contratação dos nossos serviços.",
};

const sections: LegalSection[] = [
  {
    titulo: "1. Aceitação dos termos",
    conteudo:
      "Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. Caso não concorde com alguma das condições, recomendamos que não utilize o site. A Grafo Studio reserva-se o direito de atualizar estes termos a qualquer momento, sendo a versão mais recente sempre disponibilizada nesta página.",
  },
  {
    titulo: "2. Sobre a Grafo Studio",
    conteudo:
      "A Grafo Studio é uma agência de marketing digital que presta serviços de branding, tráfego pago, social media, desenvolvimento web e tecnologia para empresas. As informações contidas neste site têm caráter exclusivamente institucional e informativo.",
  },
  {
    titulo: "3. Uso permitido",
    conteudo: "Você pode utilizar este site para:",
    lista: [
      "Conhecer os serviços oferecidos pela Grafo Studio",
      "Entrar em contato para solicitar orçamentos",
      "Navegar pelo portfólio de projetos realizados",
      "Obter informações de contato",
    ],
  },
  {
    titulo: "4. Uso proibido",
    conteudo: "É expressamente proibido:",
    lista: [
      "Reproduzir, copiar ou distribuir qualquer conteúdo deste site sem autorização prévia e por escrito",
      "Usar o site para fins ilegais ou que violem direitos de terceiros",
      "Tentar acessar áreas restritas ou sistemas da Grafo Studio sem autorização",
      "Enviar comunicações não solicitadas (spam) através dos canais de contato",
      "Realizar engenharia reversa ou qualquer ação que comprometa a segurança do site",
    ],
  },
  {
    titulo: "5. Propriedade intelectual",
    conteudo:
      "Todo o conteúdo deste site — incluindo textos, imagens, logotipos, identidade visual, layout e código-fonte — é de propriedade exclusiva da Grafo Studio ou licenciado por ela, protegido pela Lei de Direitos Autorais (Lei 9.610/1998) e demais normas de propriedade intelectual aplicáveis. Qualquer uso não autorizado constituirá violação dos direitos da Grafo Studio.",
  },
  {
    titulo: "6. Formulário de contato e orçamento",
    conteudo:
      "O envio do formulário de contato não gera qualquer vínculo contratual entre as partes. A prestação de serviços pela Grafo Studio está condicionada à assinatura de proposta comercial aceita por ambas as partes. As informações fornecidas no formulário serão tratadas conforme nossa Política de Privacidade.",
  },
  {
    titulo: "7. Links externos",
    conteudo:
      "Este site pode conter links para sites de terceiros (como Instagram, WhatsApp e portfólios de clientes). A Grafo Studio não se responsabiliza pelo conteúdo, políticas ou práticas desses sites externos. O acesso a esses links é de inteira responsabilidade do usuário.",
  },
  {
    titulo: "8. Isenção de responsabilidade",
    lista: [
      "As informações deste site são fornecidas \"como estão\", sem garantias de qualquer tipo",
      "A Grafo Studio não garante que o site estará disponível de forma ininterrupta ou livre de erros",
      "Resultados apresentados em cases e portfólio são específicos de cada projeto e não garantem resultados idênticos para outros clientes",
      "A Grafo Studio não se responsabiliza por danos diretos, indiretos ou consequenciais decorrentes do uso ou impossibilidade de uso deste site",
    ],
  },
  {
    titulo: "9. Disponibilidade do site",
    conteudo:
      "A Grafo Studio emprega esforços razoáveis para manter o site disponível, mas não garante disponibilidade contínua. O site pode ficar indisponível temporariamente por motivos de manutenção, atualização ou fatores externos fora do controle da empresa.",
  },
  {
    titulo: "10. Privacidade e proteção de dados",
    conteudo: (
      <>
        O tratamento de dados pessoais coletados através deste site é regido pela nossa{" "}
        <Link
          href="/politica-de-privacidade"
          className="text-[#ff4e00] hover:underline font-semibold"
        >
          Política de Privacidade
        </Link>
        , em conformidade com a LGPD (Lei 13.709/2018). Recomendamos a leitura completa do
        documento.
      </>
    ),
  },
  {
    titulo: "11. Legislação aplicável e foro",
    conteudo:
      "Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Quaisquer disputas decorrentes do uso deste site serão submetidas ao foro da comarca competente no Brasil, com renúncia a qualquer outro, por mais privilegiado que seja.",
  },
  {
    titulo: "12. Contato",
    conteudo: `Para dúvidas sobre estes Termos de Uso, entre em contato:\n\nE-mail: ${SITE.email}\nHorário de atendimento: ${SITE.horario}`,
  },
];

export default function TermosDeUsoPage() {
  return (
    <LegalPageTemplate
      title="Termos de Uso"
      subtitle="Ao navegar neste site, você concorda com as condições descritas abaixo. Leia com atenção antes de utilizar nossos serviços ou enviar qualquer informação através dos nossos canais de contato."
      date="maio de 2026"
      sections={sections}
      ctaHeading="Ficou com alguma dúvida?"
      ctaActions={
        <div className="flex gap-4 flex-shrink-0">
          <Link
            href="/politica-de-privacidade"
            className="inline-flex items-center gap-2 border border-[#ff4e00] text-[#ff4e00] font-body font-bold text-sm uppercase tracking-widest py-4 px-8 hover:bg-[#ff4e00] hover:text-white transition-all"
          >
            Política de Privacidade
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-[#ff4e00] text-white font-body font-bold text-sm uppercase tracking-widest py-4 px-8 hover:bg-[#e04500] transition-all"
          >
            Falar com a equipe
          </Link>
        </div>
      }
    />
  );
}
