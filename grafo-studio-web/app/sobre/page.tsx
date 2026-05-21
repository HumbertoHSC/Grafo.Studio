import { CheckCircle2, Target, Eye, Heart, Zap, Crosshair, Gem } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL, METODO } from "@/lib/constants";
import { GrafoPictogram } from "@/components/brand/GrafoPictogram";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Grafo Studio",
  description:
    "Conheça a Grafo Studio: nossa missão, visão, valores e o Método GRAFO 360° que transforma empresas em marcas lembradas.",
};

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 bg-[#191919] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff4e00]" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[480px] opacity-[0.03] pointer-events-none select-none">
          <GrafoPictogram color="#ffffff" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#ff4e00] text-sm font-semibold uppercase tracking-widest mb-4">
            Quem somos
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            do traço <span className="text-[#ff4e00]">à marca.</span>
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            Somos uma agência de marketing criada para transformar empresas comuns em
            marcas lembradas — com estratégia, criatividade e tecnologia.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-24 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-1 h-8 bg-[#ff4e00] rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold">Nossa História</h2>
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              A Grafo Studio nasceu em 2026 com uma missão clara: ir além do básico.
              Enquanto o mercado entregava posts e anúncios, nós queríamos entregar{" "}
              <span className="text-white font-semibold">crescimento real e previsível.</span>
            </p>
            <p className="text-white/60 leading-relaxed mb-4">
              Reunimos especialistas em tráfego pago, design, desenvolvimento e tecnologia
              em um só lugar — para que o seu negócio tenha tudo que precisa para evoluir
              no digital, sem precisar de múltiplos fornecedores.
            </p>
            <p className="text-white/60 leading-relaxed">
              Nosso propósito é simples:{" "}
              <em className="text-white/80">
                "Não vendemos tarefas. Entregamos crescimento e previsibilidade para o seu
                negócio."
              </em>
            </p>
          </div>
          {/* Pictograma oficial sobre barras decorativas */}
          <div className="flex items-center justify-center">
            <div className="relative w-72 h-72 flex items-end justify-center gap-3 pb-6">
              {[40, 65, 100, 80, 55].map((h, i) => (
                <div
                  key={i}
                  className="w-8 rounded-t-lg bg-[#ff4e00] opacity-15 hover:opacity-40 transition-opacity"
                  style={{ height: `${h}%` }}
                />
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                <GrafoPictogram color="#ff4e00" className="w-36" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 px-4 bg-[#191919]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span className="block w-1 h-8 bg-[#ff4e00] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold">Missão, Visão e Valores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icone: Target,
                titulo: "Missão",
                texto:
                  "Conectar pontos, ideias e pessoas através de soluções criativas e inovadoras, traçando o caminho visual ideal para comunicar a essência de cada projeto.",
              },
              {
                icone: Eye,
                titulo: "Visão",
                texto:
                  "Construir uma rede sólida de projetos inspiradores, tornando-nos sinônimo de excelência na interseção entre arte, estratégia e comunicação visual até 2028.",
              },
              {
                icone: Heart,
                titulo: "Valores",
                texto: "Confiança, Profissionalismo e Comprometimento. Esses são os pilares que guiam cada projeto, cada decisão e cada entrega da Grafo Studio.",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#ff4e00]/30 transition-colors"
              >
                <item.icone className="w-8 h-8 text-[#ff4e00] mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">{item.titulo}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalidade */}
      <section className="py-24 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span className="block w-1 h-8 bg-[#ff4e00] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold">Nossa Personalidade</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icone: Zap,
                palavra: "Inteligente",
                descricao: "Foca em soluções limpas, diretas e funcionais. Estratégia antes da execução.",
              },
              {
                icone: Crosshair,
                palavra: "Precisa",
                descricao: "Atenção obsessiva aos detalhes — o \"traço\" perfeito em cada entrega.",
              },
              {
                icone: Gem,
                palavra: "Elegante",
                descricao: "Estética refinada e design que sobrevive ao tempo. Visual premium, sempre.",
              },
            ].map((p) => (
              <div key={p.palavra} className="text-center p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
                <p.icone className="w-10 h-10 text-[#ff4e00] mx-auto mb-4" />
                <h3 className="text-2xl font-black text-[#ff4e00] mb-2">{p.palavra}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Método GRAFO 360° */}
      <section className="py-24 px-4 bg-[#191919]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-1 h-8 bg-[#ff4e00] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold">Método GRAFO 360°</h2>
          </div>
          <p className="text-white/50 mb-12 ml-4">
            Uma metodologia autoral focada em cinco pilares fundamentais para o sucesso
            no digital:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {METODO.map((m, i) => (
              <div
                key={m.letra}
                className="relative flex flex-col p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#ff4e00]/40 transition-colors group"
              >
                <span className="text-white/10 text-xs font-bold mb-2">0{i + 1}</span>
                <span className="text-4xl font-black text-[#ff4e00] mb-2">{m.letra}</span>
                <p className="text-white font-semibold text-sm mb-2">{m.titulo}</p>
                <p className="text-white/40 text-xs leading-relaxed group-hover:text-white/60 transition-colors">
                  {m.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-[#ff4e00]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Podemos montar o plano ideal para a sua empresa e mostrar como crescer no
            digital com clareza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#ff4e00] font-bold hover:bg-white/90 transition-all hover:scale-105"
            >
              Solicitar Orçamento
            </a>
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Ver Serviços
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
