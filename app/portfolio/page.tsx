import { GrafoPictogram } from "@/components/brand/GrafoPictogram";
import { FadeIn } from "@/components/ui/FadeIn";
import PortfolioContent from "./PortfolioContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portfólio | Grafo Studio",
  description:
    "Conheça os projetos e cases da Grafo Studio — branding, web design e desenvolvimento de marcas que vendem. Do traço à marca.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <main className="relative overflow-hidden">
      {/* G watermark fixo */}
      <div
        className="fixed top-[10%] right-[-10%] w-[60%] opacity-[0.04] z-[-1] pointer-events-none select-none"
        style={{ transform: "rotate(-15deg)" }}
        aria-hidden="true"
      >
        <GrafoPictogram color="#ffffff" className="w-full" />
      </div>

      {/* Hero */}
      <section className="pt-36 pb-16 px-5 md:px-20 max-w-7xl mx-auto">
        <FadeIn>
          <div className="w-24 h-1 bg-[#ff4e00] mb-6" />
          <h1 className="font-institutional text-5xl md:text-[5rem] font-black uppercase mb-4 leading-none text-[#e2e2e2]">
            Portfólio
          </h1>
          <h2 className="font-institutional text-3xl md:text-5xl font-bold text-[#e6beb2] mb-8">
            Projetos Selecionados
          </h2>
          <p className="font-body text-lg max-w-2xl text-[#e2e2e2]/80 leading-relaxed">
            Transformamos visões ousadas em impacto tangível através de design estratégico
            e excelência criativa. Explore nossa curadoria de trabalhos recentes.
          </p>
        </FadeIn>
      </section>

      <PortfolioContent />
    </main>
  );
}
