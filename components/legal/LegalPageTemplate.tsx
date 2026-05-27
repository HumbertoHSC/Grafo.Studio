import { SITE } from "@/lib/constants";

export interface LegalSection {
  titulo: string;
  conteudo?: string | React.ReactNode;
  lista?: string[];
}

interface Props {
  title: string;
  subtitle: React.ReactNode;
  date: string;
  sections: LegalSection[];
  ctaHeading: string;
  ctaActions: React.ReactNode;
}

export default function LegalPageTemplate({
  title,
  subtitle,
  date,
  sections,
  ctaHeading,
  ctaActions,
}: Props) {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-5 md:px-20 bg-[#0c0f0f]">
        <div className="max-w-4xl mx-auto">
          <span className="section-marker" />
          <h1 className="font-institutional text-4xl md:text-6xl font-bold uppercase text-[#e2e2e2] mb-6">
            {title}
          </h1>
          <p className="font-body text-[#e6beb2] text-lg leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          <p className="font-body text-sm text-[#e6beb2]/50 mt-6">
            Última atualização: {date}
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-20 px-5 md:px-20 bg-[#121414]">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((s) => (
            <div key={s.titulo} className="border-b border-[#5c4037]/20 pb-12">
              <h2 className="font-institutional text-xl md:text-2xl font-bold text-[#e2e2e2] mb-4 flex items-center gap-3">
                <span className="w-6 h-0.5 bg-[#ff4e00] flex-shrink-0" />
                {s.titulo}
              </h2>
              {s.conteudo != null && (
                typeof s.conteudo === "string" ? (
                  <p className="font-body text-[#e6beb2] leading-relaxed whitespace-pre-line mb-4">
                    {s.conteudo}
                  </p>
                ) : (
                  <p className="font-body text-[#e6beb2] leading-relaxed mb-4">
                    {s.conteudo}
                  </p>
                )
              )}
              {s.lista && (
                <ul className="space-y-3 mt-4">
                  {s.lista.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-[#e6beb2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e00] flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 md:px-20 bg-[#0c0f0f]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-institutional text-xl font-bold text-[#e2e2e2] mb-2">
              {ctaHeading}
            </p>
            <p className="font-body text-[#e6beb2]">
              Fale conosco pelo e-mail{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-[#ff4e00] hover:underline"
              >
                {SITE.email}
              </a>
            </p>
          </div>
          {ctaActions}
        </div>
      </section>
    </>
  );
}
