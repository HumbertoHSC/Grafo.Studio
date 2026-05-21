"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Camera,
  Code2,
  BarChart3,
  Palette,
  Utensils,
  Stethoscope,
  Scale,
  Sparkles,
  ShoppingBag,
  Wrench,
  Camera as CameraIcon,
  ExternalLink,
} from "lucide-react";
import {
  WHATSAPP_URL,
  SERVICOS,
  METODO,
  SEGMENTOS,
  PACOTES,
  DIFERENCIAIS,
  NUMEROS,
  SITE,
} from "@/lib/constants";
import { GrafoPictogram } from "@/components/brand/GrafoPictogram";

const ICON_MAP: Record<string, React.ElementType> = {
  Palette,
  TrendingUp,
  Camera,
  Code2,
  BarChart3,
  Utensils,
  Stethoscope,
  Scale,
  Sparkles,
  ShoppingBag,
  Wrench,
};

function CounterUp({ value, suffix }: { value: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const target = parseInt(value, 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 30);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#191919]">
        {/* Pictograma decorativo de fundo — SVG oficial em baixíssima opacidade */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] opacity-[0.03]">
            <GrafoPictogram color="#ffffff" />
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff4e00]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center pt-24 pb-20">
          <p className="text-[#ff4e00] text-sm font-semibold uppercase tracking-widest mb-6">
            Agência de Marketing Digital
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 text-white">
            Sua empresa não precisa
            <br />
            apenas <span className="text-white/30">aparecer.</span>
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-[#ff4e00]">
            Precisa ser lembrada.
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Unimos estratégia, criatividade e tecnologia para transformar empresas comuns
            em marcas que crescem com consistência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#ff4e00] text-white font-bold text-base hover:bg-[#e04500] transition-all hover:scale-105 shadow-lg"
            >
              Solicitar Orçamento <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all hover:border-white/40"
            >
              Ver Portfólio
            </Link>
          </div>
        </div>
      </section>

      {/* 2. NÚMEROS — com contexto */}
      <section className="bg-[#ff4e00] py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {NUMEROS.map((n) => (
            <div key={n.label}>
              <div className="text-5xl font-black text-white mb-1">
                <CounterUp value={n.valor} suffix={n.sufixo} />
              </div>
              <p className="text-white font-semibold text-base mb-1">{n.label}</p>
              <p className="text-white/70 text-sm">{n.contexto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. QUEM É A GRAFO */}
      <section className="py-24 px-4 bg-[#191919]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-1 h-8 bg-[#ff4e00] rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold">Quem é a Grafo?</h2>
            </div>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Somos uma agência de marketing criada para{" "}
              <span className="text-white font-semibold">
                transformar empresas comuns em marcas lembradas.
              </span>
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              Nosso foco não é apenas criar posts ou anúncios. Trabalhamos para gerar
              crescimento real, posicionamento forte e mais vendas. Unimos{" "}
              <strong className="text-white">estratégia, criatividade e tecnologia</strong>{" "}
              para entregar soluções completas.
            </p>
            <blockquote className="border-l-2 border-[#ff4e00] pl-4 text-white/50 italic">
              "Não vendemos tarefas. Entregamos crescimento e previsibilidade para o seu
              negócio."
            </blockquote>
          </div>
          {/* Pictograma oficial com grade decorativa */}
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <div className="absolute inset-0 rounded-3xl border border-[#ff4e00]/20 bg-[#ff4e00]/5" />
              {/* Grade de pontos */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-[#ff4e00]/20"
                    style={{
                      left: `${(i % 5) * 22 + 8}%`,
                      top: `${Math.floor(i / 5) * 22 + 8}%`,
                    }}
                  />
                ))}
              </div>
              {/* Pictograma SVG oficial */}
              <GrafoPictogram color="#ff4e00" className="relative z-10 w-40 md:w-52" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVIÇOS */}
      <section className="py-24 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-1 h-8 bg-[#ff4e00] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold">O Que Fazemos</h2>
          </div>
          <p className="text-white/50 mb-12 ml-4">
            Na Grafo, cada serviço tem um objetivo claro: trazer resultado.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICOS.map((s) => {
              const Icon = ICON_MAP[s.icone] || Palette;
              return (
                <Link
                  key={s.id}
                  href={s.href}
                  className={`group p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col ${
                    s.destaque
                      ? "border-[#ff4e00] bg-[#ff4e00]/5 md:col-span-2"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <div className={`flex items-start gap-6 ${s.destaque ? "md:items-center" : "flex-col"}`}>
                    <div className="w-14 h-14 rounded-2xl bg-[#ff4e00]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-[#ff4e00]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{s.titulo}</h3>
                        {s.destaque && (
                          <span className="text-xs font-semibold text-[#ff4e00] bg-[#ff4e00]/10 px-2 py-0.5 rounded-full">
                            Carro-chefe
                          </span>
                        )}
                      </div>
                      <p className="text-white/60 leading-relaxed mb-3">{s.descricao}</p>
                      <p className="text-[#ff4e00]/70 text-xs font-medium mb-4">{s.entregaveis}</p>
                      <span className="inline-flex items-center gap-1 text-[#ff4e00] text-sm font-semibold group-hover:gap-2 transition-all">
                        Saiba mais <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. PARA QUEM TRABALHAMOS — movido para antes do método */}
      <section className="py-24 px-4 bg-[#191919]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-1 h-8 bg-[#ff4e00] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold">Para Quem Trabalhamos</h2>
          </div>
          <p className="text-white/50 mb-12 ml-4">
            Atendemos empresas locais e regionais de diversos segmentos — se o seu negócio
            precisa crescer no digital, a Grafo é para você.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SEGMENTOS.map((s) => {
              const Icon = ICON_MAP[s.icone] || Palette;
              return (
                <div
                  key={s.nome}
                  className="flex flex-col items-center text-center p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#ff4e00]/40 hover:bg-[#ff4e00]/5 transition-all cursor-default group"
                >
                  <Icon className="w-7 h-7 text-white/40 group-hover:text-[#ff4e00] mb-3 transition-colors" />
                  <p className="text-white/60 group-hover:text-white text-sm font-medium transition-colors">
                    {s.nome}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-white/30 text-sm mt-8 text-center">
            Não viu o seu segmento?{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#ff4e00] hover:underline">
              Fale com a gente
            </a>{" "}
            — atendemos outros nichos sob consulta.
          </p>
        </div>
      </section>

      {/* 6. MÉTODO GRAFO 360° — agora com descrições */}
      <section className="py-24 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-1 h-8 bg-[#ff4e00] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold">Método GRAFO 360°</h2>
          </div>
          <p className="text-white/50 mb-12 ml-4">
            Não vendemos tarefas. Entregamos crescimento baseado em 5 pilares:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {METODO.map((m, i) => (
              <div
                key={m.letra}
                className="relative flex flex-col p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#ff4e00]/40 transition-colors group"
              >
                {/* Número de sequência */}
                <span className="text-white/10 text-xs font-bold mb-2">0{i + 1}</span>
                <span className="text-4xl font-black text-[#ff4e00] mb-2">{m.letra}</span>
                <p className="text-white font-semibold text-sm mb-2">{m.titulo}</p>
                <p className="text-white/40 text-xs leading-relaxed group-hover:text-white/60 transition-colors">
                  {m.descricao}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#ff4e00] font-semibold mt-8 text-sm">
            Visão completa para resultados reais.
          </p>
        </div>
      </section>

      {/* 7. PACOTES */}
      <section className="py-24 px-4 bg-[#191919]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-1 h-8 bg-[#ff4e00] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold">Pacotes Mais Escolhidos</h2>
          </div>
          <p className="text-white/50 mb-12 ml-4">
            Escolha o plano ideal para o crescimento da sua empresa:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACOTES.map((p) => (
              <div
                key={p.nome}
                className={`relative p-8 rounded-2xl border flex flex-col transition-all hover:-translate-y-1 ${
                  p.destaque
                    ? "border-[#ff4e00] bg-[#ff4e00]/5 shadow-2xl"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                {p.destaque && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff4e00] text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    MAIS INDICADO
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-1">{p.nome}</h3>
                <p className="text-white/40 text-sm mb-6">{p.descricao}</p>
                <div className="mb-6">
                  <span className="text-4xl font-black text-[#ff4e00]">R$ {p.preco}</span>
                  <span className="text-white/40 text-sm">/{p.periodo}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.itens.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/70 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#ff4e00] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 ${
                    p.destaque
                      ? "bg-[#ff4e00] text-white hover:bg-[#e04500]"
                      : "border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  Quero esse plano →
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-white/30 text-sm mt-6">
            Precisa de algo personalizado?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff4e00] hover:underline"
            >
              Fale com a gente
            </a>
          </p>
        </div>
      </section>

      {/* 8. POR QUE A GRAFO */}
      <section className="py-24 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-1 h-8 bg-[#ff4e00] rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold">Por Que Escolher a Grafo?</h2>
            </div>
            <ul className="space-y-4">
              {DIFERENCIAIS.map((d) => (
                <li key={d} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#ff4e00] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </span>
                  <span className="text-white/80 text-base">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center gap-4 opacity-20 select-none">
            <GrafoPictogram color="#ff4e00" className="w-32 md:w-44" />
            <span className="text-5xl md:text-7xl font-black text-[#ff4e00] font-institutional">360°</span>
          </div>
        </div>
      </section>

      {/* 9. CTA FINAL — fundo laranja sólido, mais impactante */}
      <section className="py-32 px-4 bg-[#ff4e00] relative overflow-hidden">
        {/* Pictograma SVG decorativo no CTA laranja */}
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-80 opacity-[0.06] pointer-events-none select-none">
          <GrafoPictogram color="#ffffff" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">
            O próximo passo é seu
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            Podemos montar o plano ideal
            <br />
            para sua empresa.
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Mostre como crescer no digital com clareza, estratégia e resultados reais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-[#ff4e00] font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-xl"
            >
              Falar no WhatsApp <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Enviar Mensagem
            </Link>
          </div>
        </div>
      </section>

      {/* 10. INSTAGRAM — banner de follow, sem grid placeholder */}
      <section className="py-20 px-4 bg-[#0f0f0f]">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff4e00] to-[#ff4e00]/60 flex items-center justify-center flex-shrink-0">
              <CameraIcon className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-white font-bold text-lg mb-1">{SITE.instagram}</p>
              <p className="text-white/50 text-sm">
                Acompanhe nosso conteúdo: cases, bastidores e dicas de marketing para o seu negócio.
              </p>
            </div>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff4e00] text-white font-semibold text-sm hover:bg-[#e04500] transition-all hover:scale-105 whitespace-nowrap flex-shrink-0"
            >
              Seguir no Instagram <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
