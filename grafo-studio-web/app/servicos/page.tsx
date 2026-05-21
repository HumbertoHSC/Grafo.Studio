import Link from "next/link";
import { ArrowRight, Palette, TrendingUp, Camera, Code2, BarChart3 } from "lucide-react";
import { WHATSAPP_URL, SERVICOS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços | Grafo Studio",
  description:
    "Branding, Tráfego Pago, Social Media, Desenvolvimento Web e Tecnologia — soluções completas para crescer no digital.",
};

const ICON_MAP: Record<string, React.ElementType> = {
  Palette, TrendingUp, Camera, Code2, BarChart3,
};

export default function ServicosPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-4 bg-[#191919] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff4e00]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#ff4e00] text-sm font-semibold uppercase tracking-widest mb-4">
            O que fazemos
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Cada serviço tem um objetivo:
            <br />
            <span className="text-[#ff4e00]">trazer resultado.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Soluções completas para empresas que querem evoluir no digital — com
            estratégia, design e tecnologia.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICOS.map((s) => {
              const Icon = ICON_MAP[s.icone] || Palette;
              return (
                <Link
                  key={s.id}
                  href={s.href}
                  className={`group p-8 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col ${
                    s.destaque
                      ? "border-[#ff4e00] bg-[#ff4e00]/5 md:col-span-2"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <div className={`flex items-start gap-6 ${s.destaque ? "md:items-center" : ""}`}>
                    <div className="w-14 h-14 rounded-2xl bg-[#ff4e00]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-[#ff4e00]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-xl font-bold text-white">{s.titulo}</h2>
                        {s.destaque && (
                          <span className="text-xs font-semibold text-[#ff4e00] bg-[#ff4e00]/10 px-2 py-0.5 rounded-full">
                            Carro-chefe
                          </span>
                        )}
                      </div>
                      <p className="text-white/60 leading-relaxed mb-4">{s.descricao}</p>
                      <span className="inline-flex items-center gap-1 text-[#ff4e00] text-sm font-semibold group-hover:gap-2 transition-all">
                        Ver detalhes <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-[#191919]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Não sabe qual serviço escolher?
          </h2>
          <p className="text-white/50 mb-8">
            Fale com a gente. Vamos entender seu negócio e montar a estratégia ideal.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#ff4e00] text-white font-bold hover:bg-[#e04500] transition-all hover:scale-105"
          >
            Solicitar Orçamento <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
