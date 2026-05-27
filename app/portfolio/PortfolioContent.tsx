"use client";

import { useState } from "react";
import { WHATSAPP_URL, CASES } from "@/lib/constants";
import { GrafoPictogram } from "@/components/brand/GrafoPictogram";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import ProjectCard from "@/components/portfolio/ProjectCard";

const FILTROS = ["Todos", "Branding", "Web", "Desenvolvimento"];

function caseMatchesFiltro(caso: typeof CASES[number], filtro: string) {
  if (filtro === "Todos") return true;
  return caso.categoria === filtro || caso.tags.some((t) => t === filtro);
}

export default function PortfolioContent() {
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");
  const casesFiltrados = CASES.filter((c) => caseMatchesFiltro(c, filtroAtivo));

  return (
    <>
      {/* Filtros */}
      <section className="px-5 md:px-20 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-8 font-body text-xs uppercase tracking-widest border-b border-[#333535] pb-4">
          {FILTROS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFiltroAtivo(f)}
              className={`font-body text-xs uppercase tracking-widest transition-colors ${
                filtroAtivo === f
                  ? "text-[#ff4e00] font-bold"
                  : "text-[#e2e2e2]/60 hover:text-[#ff4e00] cursor-pointer"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid editorial */}
      <section className="px-5 md:px-20 max-w-7xl mx-auto pb-32">
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6">
          {casesFiltrados[0] && (
            <FadeInItem className="sm:col-span-2 md:col-span-8">
              <ProjectCard caso={casesFiltrados[0]} fallbackTextSize="text-[10rem]" />
            </FadeInItem>
          )}

          {casesFiltrados[1] && (
            <FadeInItem className="md:col-span-4">
              <ProjectCard caso={casesFiltrados[1]} />
            </FadeInItem>
          )}

          {casesFiltrados.length === 0 && (
            <FadeInItem className="sm:col-span-2 md:col-span-12">
              <div className="py-24 text-center">
                <p className="font-body text-[#e2e2e2]/50 text-lg">
                  Nenhum projeto nesta categoria ainda.
                </p>
              </div>
            </FadeInItem>
          )}

          {/* Placeholders — segunda linha */}
          <FadeInItem className="md:col-span-5">
            <div className="group mt-0 md:mt-12">
              <div className="relative overflow-hidden mb-6 h-[500px] bg-[#1e2020] flex items-center justify-center">
                <GrafoPictogram color="#ff4e00" className="w-1/2 opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff4e00]" />
                <span className="absolute top-4 left-4 font-body text-xs uppercase tracking-widest text-[#e2e2e2]/30">
                  Em breve
                </span>
              </div>
              <div>
                <h3 className="font-institutional text-2xl font-bold mb-2 text-[#e2e2e2]/30">
                  Branding — em andamento
                </h3>
                <p className="font-body text-xs text-[#ff4e00]/70 uppercase tracking-widest">
                  Branding
                </p>
              </div>
            </div>
          </FadeInItem>

          <FadeInItem className="md:col-span-7">
            <div className="group mt-0 md:mt-32">
              <div className="relative overflow-hidden mb-6 h-[500px] bg-[#1e2020] flex items-center justify-center">
                <GrafoPictogram color="#ff4e00" className="w-1/2 opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff4e00]" />
                <span className="absolute top-4 left-4 font-body text-xs uppercase tracking-widest text-[#e2e2e2]/30">
                  Em breve
                </span>
              </div>
              <div>
                <h3 className="font-institutional text-2xl font-bold mb-2 text-[#e2e2e2]/30">
                  Web Design — em andamento
                </h3>
                <p className="font-body text-xs text-[#ff4e00]/70 uppercase tracking-widest">
                  Web Design
                </p>
              </div>
            </div>
          </FadeInItem>
        </FadeInStagger>
      </section>

      {/* CTA Final */}
      <section className="bg-[#121414] py-32 px-5 md:px-20 relative overflow-hidden">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-10 select-none pointer-events-none">
          <span className="font-institutional text-[400px] leading-none text-[#ff4e00]">g</span>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-20 h-1 bg-[#ff4e00] mx-auto mb-8" />
          <h2 className="font-institutional text-4xl md:text-6xl font-black uppercase mb-8 text-[#e2e2e2]">
            Seu próximo capítulo começa aqui
          </h2>
          <p className="font-body text-lg text-[#e2e2e2]/70 mb-12 max-w-xl mx-auto">
            Pronto para elevar sua marca a um novo patamar de excelência visual e
            estratégica? Vamos conversar sobre seu projeto.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff4e00] text-white font-body font-bold uppercase tracking-widest text-sm py-5 px-12 hover:scale-105 transition-all"
            >
              Iniciar Projeto
            </a>
            <a
              href="/servicos"
              className="border border-[#e2e2e2] text-[#e2e2e2] font-body font-bold uppercase tracking-widest text-sm py-5 px-12 hover:bg-[#e2e2e2] hover:text-[#121414] transition-all"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
