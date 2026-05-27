import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL, SERVICOS, SERVICE_ICONS } from "@/lib/constants";
import { GrafoPictogram } from "@/components/brand/GrafoPictogram";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Serviços | Grafo Studio",
  description:
    "Branding, Tráfego Pago, Social Media, Desenvolvimento Web e Tecnologia — soluções completas para crescer no digital.",
  path: "/servicos",
});


export default function ServicosPage() {
  const servicos = SERVICOS;
  const row1 = servicos.slice(0, 3);
  const row2 = servicos.slice(3);

  return (
    <main className="relative overflow-hidden">
      {/* G watermark background */}
      <div className="absolute right-[-8%] top-[8%] w-[55%] opacity-[0.04] z-0 pointer-events-none select-none rotate-[-5deg]">
        <GrafoPictogram color="#ffffff" className="w-full" />
      </div>

      {/* Hero */}
      <section className="relative pt-36 pb-32 px-5 md:px-20 max-w-7xl mx-auto z-10">
        <FadeIn>
          <span className="section-marker" />
          <h1 className="font-institutional text-5xl md:text-[5rem] font-black text-[#e2e2e2] mb-8 max-w-4xl leading-none">
            Nossos <span className="text-[#ff4e00] italic">Serviços</span>
          </h1>
          <p className="font-body text-lg text-[#e6beb2] max-w-2xl leading-relaxed">
            Soluções completas de branding, tráfego e tecnologia para marcas que buscam o
            próximo nível. Transformamos visão em resultados tangíveis através de design e
            estratégia.
          </p>
        </FadeIn>
      </section>

      {/* Serviços grid — linha 1: 3 colunas */}
      <section className="pb-6 px-5 md:px-20 max-w-7xl mx-auto relative z-10">
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {row1.map((s) => (
            <FadeInItem key={s.id}>
            <Link
              href={s.href}
              aria-label={`Saiba mais sobre ${s.titulo}`}
              className="group bg-[#191919] p-10 border-b-2 border-[#ff4e00] transition-all duration-300 hover:scale-[1.02] hover:border-b-4 flex flex-col w-full"
            >
              <div className="mb-8">
                <span aria-hidden="true" className="material-symbols-outlined text-[#ff4e00] text-5xl">
                  {SERVICE_ICONS[s.icone] ?? "auto_awesome"}
                </span>
              </div>
              <h3 className="font-institutional text-2xl font-bold mb-4 text-[#e2e2e2]">{s.titulo}</h3>
              <p className="font-body text-[#e6beb2] mb-8 flex-1">{s.descricao}</p>
              <span className="inline-flex items-center gap-2 font-body font-bold text-sm uppercase tracking-widest text-[#ff4e00] group-hover:gap-4 transition-all">
                Saiba Mais <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* Linha 2: 2 colunas centralizadas */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pb-32">
          {row2.map((s) => (
            <FadeInItem key={s.id}>
            <Link
              href={s.href}
              aria-label={`Saiba mais sobre ${s.titulo}`}
              className="group bg-[#191919] p-10 border-b-2 border-[#ff4e00] transition-all duration-300 hover:scale-[1.02] hover:border-b-4 flex flex-col w-full"
            >
              <div className="mb-8">
                <span aria-hidden="true" className="material-symbols-outlined text-[#ff4e00] text-5xl">
                  {SERVICE_ICONS[s.icone] ?? "star"}
                </span>
              </div>
              <h3 className="font-institutional text-2xl font-bold mb-4 text-[#e2e2e2]">{s.titulo}</h3>
              <p className="font-body text-[#e6beb2] mb-8 flex-1">{s.descricao}</p>
              <span className="inline-flex items-center gap-2 font-body font-bold text-sm uppercase tracking-widest text-[#ff4e00] group-hover:gap-4 transition-all">
                Saiba Mais <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* CTA */}
      <section className="py-32 px-5 md:px-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto bg-[#1e2020] p-16 border border-[#5c4037] relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 opacity-[0.04] w-64 pointer-events-none">
            <GrafoPictogram color="#ffffff" className="w-full" />
          </div>
          <h2 className="font-institutional text-3xl md:text-5xl font-bold mb-8 relative z-10 text-[#e2e2e2]">
            Pronto para transformar sua <span className="text-[#ff4e00]">marca?</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative z-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#ff4e00] text-white font-body font-bold uppercase tracking-widest text-sm px-10 py-5 hover:scale-105 transition-all shadow-lg"
            >
              <span className="material-symbols-outlined">chat_bubble</span>
              Solicitar Orçamento no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
