"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  WHATSAPP_URL,
  SERVICOS,
  METODO,
  SEGMENTOS,
  PACOTES,
  DIFERENCIAIS,
  NUMEROS,
  SITE,
  SERVICE_ICONS,
  SEGMENT_ICONS,
} from "@/lib/constants";
import { GrafoPictogram } from "@/components/brand/GrafoPictogram";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

function CounterUp({ value, suffix }: { value: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const target = parseInt(value, 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          const duration = 1200;
          const startTime = performance.now();
          function tick(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
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


export default function HomeContent() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center bg-[#121414] overflow-hidden pt-20">
        <div className="absolute right-[-8%] top-1/2 -translate-y-1/2 h-[110%] pointer-events-none select-none opacity-[0.04]">
          <GrafoPictogram color="#ffffff" className="h-full w-auto" />
        </div>

        <div className="relative z-10 w-full px-5 md:px-20 max-w-7xl mx-auto py-24 text-center">
          <FadeIn delay={0.1}>
          <div className="overflow-hidden mb-4">
            <h1 className="font-institutional text-4xl md:text-6xl lg:text-[5rem] font-black leading-[1.1] tracking-wider text-[#e2e2e2] uppercase">
              Sua empresa não precisa
              <br className="hidden md:block" /> apenas aparecer.
            </h1>
          </div>
          <div className="overflow-hidden mb-12">
            <p className="font-institutional text-2xl md:text-4xl lg:text-5xl font-bold text-[#ff4e00] italic leading-tight tracking-normal">
              Precisa ser lembrada.
            </p>
          </div>
          </FadeIn>
          <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#ff4e00] text-white font-body font-semibold text-sm uppercase tracking-widest py-4 px-10 hover:bg-[#e04500] hover:scale-105 active:scale-95 transition-all"
            >
              SOLICITAR ORÇAMENTO <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 border border-[#5c4037] text-[#e2e2e2] font-body font-semibold text-sm uppercase tracking-widest py-4 px-10 hover:bg-white/5 transition-all"
            >
              VER PORTFÓLIO
            </Link>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. NÚMEROS */}
      <section className="bg-[#ff4e00] py-24 text-white">
        <FadeInStagger className="px-5 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {NUMEROS.map((n) => (
            <FadeInItem key={n.label} className="flex flex-col items-center">
              <span className="font-institutional text-5xl md:text-6xl font-black mb-2">
                <CounterUp value={n.valor} suffix={n.sufixo} />
              </span>
              <p className="font-body text-lg uppercase font-bold tracking-wider">{n.label}</p>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* 3. QUEM É A GRAFO */}
      <section className="py-32 px-5 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <FadeIn className="md:col-span-7">
          <span className="section-marker" />
          <h2 className="font-institutional text-3xl md:text-5xl font-bold uppercase mb-8 text-[#e2e2e2]">
            | Quem é a Grafo?
          </h2>
          <p className="font-body text-lg text-[#e6beb2] mb-8 max-w-2xl leading-relaxed">
            Somos um estúdio de estratégia criativa focado em resultados tangíveis. Não
            acreditamos em métricas de vaidade; acreditamos em crescimento sustentável e
            posicionamento de marca que perdura.
          </p>
          <blockquote className="border-l-4 border-[#ff4e00] pl-6 py-4 bg-[#1e2020]/50 hover:scale-[1.01] transition-transform">
            <p className="font-institutional text-xl md:text-2xl italic leading-tight text-[#e2e2e2]">
              &ldquo;Não vendemos tarefas. Entregamos crescimento e previsibilidade para o
              seu negócio.&rdquo;
            </p>
          </blockquote>
        </FadeIn>
        <FadeIn delay={0.2} direction="left" className="md:col-span-5 flex justify-center">
          <GrafoPictogram
            color="#ff4e00"
            className="w-full max-w-sm opacity-20 hover:opacity-40 transition-opacity duration-700"
          />
        </FadeIn>
      </section>

      {/* 4. SERVIÇOS — bento grid */}
      <section className="py-32 bg-[#0c0f0f]">
        <div className="px-5 md:px-20 max-w-7xl mx-auto">
          <FadeIn>
            <span className="section-marker" />
            <h2 className="font-institutional text-3xl md:text-5xl font-bold uppercase mb-16 text-[#e2e2e2]">
              | O que fazemos
            </h2>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Card grande — Branding */}
            {SERVICOS.filter((s) => s.destaque).map((s) => (
              <FadeInItem key={s.id} className="md:col-span-4">
                <Link
                  href={s.href}
                  aria-label={`Saiba mais sobre ${s.titulo}`}
                  className="bg-[#1e2020] p-10 border-b-2 border-[#ff4e00] card-glow transition-all group relative overflow-hidden min-h-[400px] flex flex-col w-full"
                >
                  <span aria-hidden="true" className="material-symbols-outlined text-[#ff4e00] text-5xl mb-6">
                    {SERVICE_ICONS[s.icone] ?? "auto_awesome"}
                  </span>
                  <h3 className="font-institutional text-4xl font-bold mb-4 text-[#e2e2e2]">{s.titulo}</h3>
                  <p className="font-body text-lg text-[#e6beb2] mb-8 max-w-lg flex-1">{s.descricao}</p>
                  <span className="inline-flex items-center gap-2 text-[#ff4e00] font-body font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                    SAIBA MAIS <ArrowRight className="w-4 h-4" />
                  </span>
                  <div className="absolute -right-10 -bottom-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <GrafoPictogram color="#ffffff" className="w-64" />
                  </div>
                </Link>
              </FadeInItem>
            ))}
            {/* Cards menores */}
            {SERVICOS.filter((s) => !s.destaque).map((s) => (
              <FadeInItem key={s.id} className="md:col-span-2">
                <Link
                  href={s.href}
                  aria-label={`Saiba mais sobre ${s.titulo}`}
                  className="bg-[#1e2020] p-8 border-b-2 border-[#ff4e00] card-glow transition-all group flex flex-col w-full h-full"
                >
                  <span aria-hidden="true" className="material-symbols-outlined text-[#ff4e00] text-4xl mb-6">
                    {SERVICE_ICONS[s.icone] ?? "star"}
                  </span>
                  <h3 className="font-institutional text-2xl font-bold mb-4 text-[#e2e2e2]">{s.titulo}</h3>
                  <p className="font-body text-[#e6beb2] mb-6 flex-1">{s.descricao}</p>
                  <span className="inline-flex items-center gap-2 text-[#ff4e00] font-body font-bold text-sm uppercase transition-all group-hover:gap-4">
                    SAIBA MAIS <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* 5. MÉTODO GRAFO 360° */}
      <section className="py-32 px-5 md:px-20 bg-[#121414]">
        <div className="max-w-7xl mx-auto">
          <span className="section-marker" />
          <h2 className="font-institutional text-3xl md:text-5xl font-bold uppercase mb-16 text-[#e2e2e2]">
            | Método GRAFO 360°
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff4e00]/40 to-transparent" />
            <FadeInStagger className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {METODO.map((m) => (
                <FadeInItem key={m.letra} className="h-full">
                  <div className="bg-[#ff4e00] p-8 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ff4e00]/20 transition-all h-full">
                    <span className="font-institutional text-6xl font-black text-white mb-4">{m.letra}</span>
                    <h4 className="font-institutional text-xl font-bold text-white mb-2">{m.titulo}</h4>
                    <p className="font-body text-sm text-white/90 leading-relaxed">{m.descricao}</p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* 6. PARA QUEM TRABALHAMOS */}
      <section className="py-24 bg-[#1a1c1c]">
        <div className="px-5 md:px-20 max-w-7xl mx-auto text-center">
          <FadeIn>
            <p className="font-body text-sm mb-12 uppercase tracking-widest text-[#ff4e00]">
              Nossos principais segmentos
            </p>
          </FadeIn>
          <FadeInStagger className="flex flex-wrap justify-center gap-4 md:gap-6">
            {SEGMENTOS.map((s) => (
              <FadeInItem key={s.nome}>
                <div className="flex items-center gap-3 px-6 py-4 border border-[#5c4037] hover:bg-[#ff4e00] hover:border-[#ff4e00] hover:text-white transition-all cursor-default group">
                  <span aria-hidden="true" className="material-symbols-outlined text-[#ff4e00] text-xl group-hover:text-white transition-colors">
                    {SEGMENT_ICONS[s.icone] ?? "star"}
                  </span>
                  <span className="font-body text-[#e2e2e2] group-hover:text-white transition-colors">
                    {s.nome}
                  </span>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* 7. PACOTES */}
      <section className="py-32 px-5 md:px-20">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="section-marker mx-auto" />
            <h2 className="font-institutional text-3xl md:text-5xl font-bold uppercase text-[#e2e2e2]">
              Planos Estratégicos
            </h2>
          </FadeIn>
          <div className="group/plans grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {PACOTES.map((p) => (
              <div
                key={p.nome}
                className={`bg-[#1e2020] p-8 flex flex-col h-full relative
                  transition-all duration-300
                  group-hover/plans:opacity-60
                  hover:!opacity-100 hover:!-translate-y-2 hover:!z-20 hover:shadow-2xl hover:shadow-[#ff4e00]/15
                  ${p.destaque
                    ? "border-2 border-[#ff4e00] shadow-xl z-10"
                    : "border-b-2 border-[#5c4037] hover:!border-[#ff4e00] hover:!border-2"
                  }`}
              >
                {p.destaque && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff4e00] text-white px-4 py-1 font-body text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                    ⭐ MAIS INDICADO
                  </span>
                )}
                <h3 className="font-institutional text-2xl font-bold mb-2 text-[#e2e2e2]">{p.nome}</h3>
                <p className="font-institutional text-3xl font-black text-[#ff4e00] mb-8">
                  R$ {p.preco}
                  <span className="text-sm font-body text-[#e6beb2] font-normal">/{p.periodo}</span>
                </p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {p.itens.map((item) => (
                    <li key={item} className="flex gap-2 items-center font-body text-sm text-[#e2e2e2]">
                      <CheckCircle2 className="w-4 h-4 text-[#ff4e00] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 font-body font-bold text-center uppercase tracking-widest text-sm transition-all ${
                    p.destaque
                      ? "bg-[#ff4e00] text-white hover:bg-[#e04500]"
                      : "border border-[#ff4e00] text-[#ff4e00] hover:bg-[#ff4e00] hover:text-white"
                  }`}
                >
                  QUERO ESSE PLANO →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. POR QUE ESCOLHER A GRAFO */}
      <section className="py-32 px-5 md:px-20 bg-[#0c0f0f]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-marker" />
            <h2 className="font-institutional text-3xl md:text-5xl font-bold uppercase mb-10 text-[#e2e2e2]">
              Por que escolher
              <br />o Grafo Studio?
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {DIFERENCIAIS.map((d, i) => {
                const icons = ["diversity_3", "ads_click", "speed", "insights", "verified"];
                const descs = [
                  "Você fala direto com quem executa. Sem burocracia, sem ruídos.",
                  "Não usamos fórmulas prontas. Estudamos seu negócio para criar um plano único.",
                  "Entregas rápidas sem abrir mão da excelência artística e técnica.",
                  "Decisões baseadas em dados reais, não em achismos.",
                  "Crescimento real e previsível, mês após mês.",
                ];
                return (
                  <div key={d} className="flex items-start gap-4 group cursor-default">
                    <span aria-hidden="true" className="material-symbols-outlined text-[#ff4e00] bg-[#ff4e00]/20 p-2 text-2xl flex-shrink-0 transition-all duration-300 group-hover:bg-[#ff4e00] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-[#ff4e00]/30">
                      {icons[i] ?? "check_circle"}
                    </span>
                    <div>
                      <h4 className="font-institutional font-bold text-lg text-[#e2e2e2] mb-1 group-hover:text-[#ff4e00] transition-colors duration-300">{d}</h4>
                      <p className="font-body text-[#e6beb2] text-sm">{descs[i]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <GrafoPictogram color="#ff4e00" className="w-full max-w-sm opacity-20 hover:opacity-40 transition-opacity duration-700" />
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-32 px-5 md:px-20 bg-[#121414]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Vocês atendem empresas fora de São Paulo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim, atendemos clientes em todo o Brasil. Nossa operação é 100% remota, o que garante agilidade e comunicação direta independente de localização.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quanto tempo leva para criar uma identidade visual completa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Um projeto de branding completo leva entre 3 e 6 semanas, dependendo da complexidade e dos prazos de feedback do cliente.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Os planos têm contrato de fidelidade?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nossos planos mensais não exigem fidelidade mínima. Projetos pontuais (branding, site) têm escopo e prazo definidos em proposta formal.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Como funciona o processo após entrar em contato?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Após o primeiro contato via WhatsApp, agendamos uma reunião de diagnóstico gratuita de 30 minutos para entender seu negócio e apresentar a melhor solução.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Vocês oferecem suporte após a entrega do projeto?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim. Todos os projetos incluem período de suporte pós-entrega conforme definido em contrato, garantindo que as entregas funcionem como esperado.",
                  },
                },
              ],
            }),
          }}
        />
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <span className="section-marker" />
            <h2 className="font-institutional text-3xl md:text-5xl font-bold uppercase mb-16 text-[#e2e2e2]">
              Perguntas Frequentes
            </h2>
          </FadeIn>
          <FadeInStagger className="divide-y divide-[#5c4037]/20">
            {[
              {
                q: "Vocês atendem empresas fora de São Paulo?",
                a: "Sim, atendemos clientes em todo o Brasil. Nossa operação é 100% remota, com comunicação direta e ágil independente de localização.",
              },
              {
                q: "Quanto tempo leva para criar uma identidade visual completa?",
                a: "Um projeto de branding completo leva entre 3 e 6 semanas, dependendo da complexidade e dos prazos de feedback.",
              },
              {
                q: "Os planos têm contrato de fidelidade?",
                a: "Nossos planos mensais não exigem fidelidade mínima. Projetos pontuais (branding, site) têm escopo e prazo definidos em proposta formal.",
              },
              {
                q: "Como funciona o processo após entrar em contato?",
                a: "Agendamos uma reunião de diagnóstico gratuita de 30 minutos para entender seu negócio e apresentar a melhor solução.",
              },
              {
                q: "Vocês oferecem suporte após a entrega?",
                a: "Sim. Todos os projetos incluem período de suporte pós-entrega conforme definido em contrato.",
              },
            ].map((item) => (
              <FadeInItem key={item.q}>
                <details className="group py-6 cursor-pointer list-none">
                  <summary className="flex items-center justify-between gap-4 font-institutional text-lg md:text-xl font-bold text-[#e2e2e2] group-open:text-[#ff4e00] transition-colors select-none list-none">
                    {item.q}
                    <span aria-hidden="true" className="material-symbols-outlined flex-shrink-0 text-[#ff4e00] transition-transform duration-300 group-open:rotate-45">
                      add
                    </span>
                  </summary>
                  <p className="font-body text-[#e6beb2] mt-4 leading-relaxed max-w-2xl">
                    {item.a}
                  </p>
                </details>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* 10. CTA FINAL */}
      <section className="py-32 px-5 md:px-20 bg-[#282a2b] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff4e00]/10 via-transparent to-transparent pointer-events-none" />
        <FadeIn className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="font-institutional text-4xl md:text-6xl font-black uppercase mb-8 text-[#e2e2e2]">
            O próximo passo é seu.
          </h2>
          <p className="font-body text-lg text-[#e6beb2] mb-12 max-w-xl mx-auto">
            Estamos prontos para elevar o nível da sua comunicação digital e transformar
            sua marca em uma referência no mercado.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-[#ff4e00] text-white font-institutional font-black text-xl md:text-2xl py-6 px-12 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#ff4e00]/20"
          >
            SOLICITAR NO WHATSAPP{" "}
            <span aria-hidden="true" className="material-symbols-outlined text-3xl">chat</span>
          </a>
        </FadeIn>
      </section>

      {/* 10. INSTAGRAM */}
      <section className="py-24 px-5 md:px-20 bg-[#0c0f0f]">
        <FadeIn className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <span className="section-marker" />
            <h2 className="font-institutional text-3xl md:text-4xl font-bold text-[#e2e2e2] mb-4">
              Acompanhe nos bastidores
            </h2>
            <p className="font-body text-[#e6beb2] max-w-md leading-relaxed">
              Estratégias, processos e resultados reais — tudo no nosso Instagram. Siga e
              veja de perto como transformamos marcas.
            </p>
          </div>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-3 border-2 border-[#ff4e00] text-[#ff4e00] font-body font-bold uppercase tracking-widest text-sm py-5 px-10 hover:bg-[#ff4e00] hover:text-white transition-all"
          >
            <span aria-hidden="true" className="material-symbols-outlined">photo_camera</span>
            {SITE.instagram}
          </a>
        </FadeIn>
      </section>
    </>
  );
}
