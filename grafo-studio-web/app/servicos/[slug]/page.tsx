import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Palette,
  TrendingUp,
  Camera,
  Code2,
  BarChart3,
} from "lucide-react";
import { SERVICOS, WHATSAPP_URL, PACOTES } from "@/lib/constants";
import { GrafoPictogram } from "@/components/brand/GrafoPictogram";
import type { Metadata } from "next";

const ICON_MAP: Record<string, React.ElementType> = {
  Palette,
  TrendingUp,
  Camera,
  Code2,
  BarChart3,
};

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICOS.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const servico = SERVICOS.find((s) => s.id === slug);
  if (!servico) return { title: "Serviço não encontrado | Grafo Studio" };
  return {
    title: `${servico.titulo} | Grafo Studio`,
    description: servico.headline,
  };
}

export default async function ServicoDetalhePage({ params }: Params) {
  const { slug } = await params;
  const servico = SERVICOS.find((s) => s.id === slug);
  if (!servico) notFound();

  const Icon = ICON_MAP[servico.icone] || Palette;
  const outrosServicos = SERVICOS.filter((s) => s.id !== servico.id);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 bg-[#191919] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff4e00]" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[480px] opacity-[0.03] pointer-events-none select-none">
          <GrafoPictogram color="#ffffff" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/servicos" className="hover:text-white/80 inline-flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3 h-3" /> Serviços
            </Link>
            <span>/</span>
            <span className="text-white/60">{servico.titulo}</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#ff4e00]/15 flex items-center justify-center">
              <Icon className="w-7 h-7 text-[#ff4e00]" />
            </div>
            <p className="text-[#ff4e00] text-sm font-semibold uppercase tracking-widest">
              {servico.titulo}
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            {servico.headline}
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mb-10">
            {servico.descricao}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#ff4e00] text-white font-bold hover:bg-[#e04500] transition-all hover:scale-105"
            >
              Solicitar Orçamento <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#processo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
            >
              Como funciona
            </a>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span className="block w-1 h-8 bg-[#ff4e00] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold">O que você ganha</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {servico.beneficios.map((b) => (
              <div
                key={b}
                className="flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#ff4e00]/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#ff4e00]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#ff4e00]" />
                </div>
                <p className="text-white/80 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entregáveis detalhados */}
      <section className="py-24 px-4 bg-[#191919]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-1 h-8 bg-[#ff4e00] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold">O que está incluso</h2>
          </div>
          <p className="text-white/50 mb-12 ml-4">
            Cada projeto entrega exatamente o que precisa — sem upsell escondido.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {servico.entregaveisDetalhados.map((item, idx) => (
              <div
                key={item}
                className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/5"
              >
                <span className="text-[#ff4e00] font-mono text-xs font-bold w-8">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section id="processo" className="py-24 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-1 h-8 bg-[#ff4e00] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold">Como funciona</h2>
          </div>
          <p className="text-white/50 mb-12 ml-4">
            Processo enxuto, transparente e sem mistério.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {servico.processo.map((etapa, idx) => (
              <div
                key={etapa.titulo}
                className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#ff4e00]/40 transition-colors group"
              >
                <span className="text-white/10 text-xs font-bold mb-2 block">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ff4e00] transition-colors">
                  {etapa.titulo}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{etapa.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-24 px-4 bg-[#191919]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="md:w-1/3 md:sticky md:top-24">
            <span className="block w-12 h-1 bg-[#ff4e00] mb-4" />
            <p className="text-[#ff4e00] text-sm font-semibold uppercase tracking-widest">
              Para quem é
            </p>
          </div>
          <p className="md:w-2/3 text-2xl md:text-3xl font-bold text-white leading-snug">
            {servico.paraQuem}
          </p>
        </div>
      </section>

      {/* CTA principal */}
      <section className="py-24 px-4 bg-[#ff4e00]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Vamos começar o seu projeto?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Conte sobre o seu negócio e montamos uma proposta sob medida para{" "}
            {servico.titulo.toLowerCase()}.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#ff4e00] font-bold hover:bg-white/90 transition-all hover:scale-105"
          >
            Solicitar Orçamento <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Pacotes (referência) */}
      <section className="py-24 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#ff4e00] text-sm font-semibold uppercase tracking-widest mb-3">
              Pacotes com este serviço
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Já vem combinado em planos completos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACOTES.map((p) => (
              <div
                key={p.nome}
                className={`p-6 rounded-2xl border ${
                  p.destaque
                    ? "border-[#ff4e00] bg-[#ff4e00]/5"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <h3 className="text-lg font-bold text-white mb-1">{p.nome}</h3>
                <p className="text-white/40 text-xs mb-4">{p.descricao}</p>
                <p className="text-3xl font-black text-[#ff4e00]">
                  R$ {p.preco}
                  <span className="text-sm text-white/40 font-normal">/{p.periodo}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outros serviços */}
      <section className="py-24 px-4 bg-[#191919] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <span className="block w-1 h-8 bg-[#ff4e00] rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold">Outros serviços</h2>
            </div>
            <Link
              href="/servicos"
              className="text-white/50 hover:text-white text-sm inline-flex items-center gap-1 transition-colors"
            >
              Ver todos <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {outrosServicos.map((s) => {
              const SIcon = ICON_MAP[s.icone] || Palette;
              return (
                <Link
                  key={s.id}
                  href={s.href}
                  className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#ff4e00]/40 transition-all hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ff4e00]/10 flex items-center justify-center mb-4">
                    <SIcon className="w-5 h-5 text-[#ff4e00]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#ff4e00] transition-colors">
                    {s.titulo}
                  </h3>
                  <p className="text-white/40 text-xs">{s.entregaveis}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
