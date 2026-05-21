import { ArrowUpRight, ArrowRight } from "lucide-react";
import { WHATSAPP_URL, CASES } from "@/lib/constants";
import { GrafoPictogram } from "@/components/brand/GrafoPictogram";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio | Grafo Studio",
  description: "Conheça os projetos e cases da Grafo Studio — do traço à marca.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 bg-[#191919] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff4e00]" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[480px] opacity-[0.03] pointer-events-none select-none">
          <GrafoPictogram color="#ffffff" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <p className="text-[#ff4e00] text-sm font-semibold uppercase tracking-widest mb-4">
            Nossos Trabalhos
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            do traço <span className="text-[#ff4e00]">à marca.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-xl mx-auto">
            Cada projeto é uma história de transformação. Veja alguns dos sites
            que entregamos.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-24 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span className="block w-1 h-8 bg-[#ff4e00] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold">Cases recentes</h2>
            <span className="ml-2 text-white/30 text-sm">
              {String(CASES.length).padStart(2, "0")} projetos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {CASES.map((c) => (
              <a
                key={c.id}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-[#ff4e00]/40 transition-all duration-300"
              >
                {/* Thumbnail — screenshot real OU placeholder desenhado */}
                <div
                  className="relative aspect-[4/3] overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: c.cor }}
                >
                  {c.thumb ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={c.thumb}
                      alt={`Print do site ${c.titulo}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      {/* Linhas decorativas de fundo */}
                      <div className="absolute inset-0 opacity-[0.07]">
                        <div className="absolute inset-x-0 top-1/4 h-px" style={{ background: c.corAcento }} />
                        <div className="absolute inset-x-0 top-2/4 h-px" style={{ background: c.corAcento }} />
                        <div className="absolute inset-x-0 top-3/4 h-px" style={{ background: c.corAcento }} />
                      </div>
                      {/* Iniciais gigantes do projeto */}
                      <span
                        className="font-institutional text-[8rem] md:text-[9rem] font-black leading-none tracking-tight select-none transition-transform duration-700 group-hover:scale-110"
                        style={{ color: c.corAcento, opacity: 0.9 }}
                      >
                        {c.titulo}
                      </span>
                      {/* Acento laranja Grafo no canto */}
                      <span className="absolute bottom-4 left-4 text-[#ff4e00] text-xs font-bold tracking-widest uppercase">
                        by grafo
                      </span>
                    </>
                  )}
                  {/* Overlay gradiente para legibilidade dos badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
                  {/* Categoria */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    {c.categoria}
                  </span>
                  {/* Ícone de link */}
                  <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#ff4e00] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>

                {/* Conteúdo do card */}
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-[#ff4e00] transition-colors">
                      {c.titulo}
                    </h3>
                    <span className="text-white/30 text-xs">{c.subtitulo}</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {c.descricao}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA — mais cases em breve */}
          <div className="text-center max-w-xl mx-auto pt-8 border-t border-white/5">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Quer ser o próximo case?
            </h3>
            <p className="text-white/50 mb-8 leading-relaxed text-sm">
              Estamos selecionando novos projetos. Conte sobre o seu negócio e
              vamos desenhar um plano sob medida.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#ff4e00] text-white font-bold hover:bg-[#e04500] transition-all hover:scale-105"
            >
              Quero meu projeto aqui <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
