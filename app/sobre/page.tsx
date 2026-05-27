import { WHATSAPP_URL, METODO } from "@/lib/constants";
import { GrafoPictogram } from "@/components/brand/GrafoPictogram";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sobre | Grafo Studio",
  description:
    "Conheça a Grafo Studio: nossa missão, visão, valores e o Método GRAFO 360° que transforma empresas em marcas lembradas.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <main className="relative overflow-x-hidden">
      {/* G watermark no hero */}
      <div className="absolute right-[-8%] top-16 w-[45%] md:w-[30%] opacity-[0.05] pointer-events-none select-none rotate-12 z-0">
        <GrafoPictogram color="#ffffff" className="w-full" />
      </div>

      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center px-5 md:px-20 py-40 relative z-10">
        <FadeIn className="max-w-4xl">
          <span className="section-marker" />
          <h1 className="font-institutional text-5xl md:text-[5rem] font-black mb-8 leading-tight text-[#e2e2e2]">
            Quem é a <span className="text-[#ff4e00]">Grafo?</span>
          </h1>
          <p className="font-body text-lg text-[#e6beb2] max-w-2xl leading-relaxed">
            Somos um estúdio de design e estratégia focado em transformar empresas visionárias
            em marcas memoráveis através de narrativas visuais potentes.
          </p>
        </FadeIn>
      </section>

      {/* Nossa História */}
      <section className="px-5 md:px-20 py-32 bg-[#0c0f0f] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <FadeIn className="md:col-span-6 z-10">
            <span className="section-marker" />
            <h2 className="font-institutional text-3xl md:text-5xl font-bold mb-8 text-[#e2e2e2]">
              Nossa História
            </h2>
            <div className="space-y-6 font-body text-[#e6beb2]">
              <p>
                Fundada em 2026, a Grafo Studio nasceu da convicção de que o design não é apenas
                estética, mas uma ferramenta vital de negócios. Surgimos no epicentro de uma
                revolução tecnológica, onde a necessidade de conexão humana tornou-se o ativo
                mais valioso.
              </p>
              <p>
                Nossa jornada é pautada pela intersecção entre arte, estratégia e tecnologia.
                Não criamos apenas logos; construímos ecossistemas visuais que respiram a
                essência de nossos parceiros.
              </p>
              <p>
                Ao longo destes anos, refinamos o nosso &ldquo;traço&rdquo; a linha que
                conecta o problema à solução, o conceito à realidade, a marca ao seu público.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} direction="left" className="md:col-span-6 flex items-center justify-center">
            <GrafoPictogram
              color="#ff4e00"
              className="w-2/3 opacity-15 grayscale hover:grayscale-0 hover:opacity-25 transition-all duration-700"
            />
          </FadeIn>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="px-5 md:px-20 py-32">
        <FadeInStagger className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: "my_location",
              titulo: "Missão",
              texto:
                "Conectar pontos, ideias e pessoas através de soluções criativas que geram impacto real e duradouro no mercado.",
            },
            {
              icon: "visibility",
              titulo: "Visão",
              texto:
                "Tornar-se sinônimo de excelência na interseção entre arte, estratégia e comunicação visual até 2028.",
            },
            {
              icon: "verified",
              titulo: "Valores",
              lista: ["Confiança", "Profissionalismo", "Comprometimento"],
            },
          ].map((item) => (
            <FadeInItem key={item.titulo}>
            <div
              className="bg-[#1e2020] p-10 border-b-2 border-[#ff4e00] hover:border-b-4 hover:-translate-y-1 transition-all"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[#ff4e00] text-4xl mb-6 block">
                {item.icon}
              </span>
              <h3 className="font-institutional text-2xl font-bold mb-4 text-[#e2e2e2]">{item.titulo}</h3>
              {item.texto && (
                <p className="font-body text-[#e6beb2]">{item.texto}</p>
              )}
              {item.lista && (
                <ul className="font-body text-[#e6beb2] space-y-2">
                  {item.lista.map((v) => (
                    <li key={v} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ff4e00] rounded-full flex-shrink-0" />
                      {v}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* Personalidade — hover revela cor */}
      <section className="px-5 md:px-20 py-32 bg-[#1a1c1c] border-y border-[#5c4037]/10">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <span className="section-marker mx-auto" />
            <h2 className="font-institutional text-3xl md:text-5xl font-bold uppercase tracking-tighter text-[#e2e2e2]">
              Nossa Personalidade
            </h2>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#5c4037]/30">
            {[
              {
                palavra: "Inteligente",
                descricao: "Estratégia antes da estética. Pensamos cada pixel com propósito comercial.",
              },
              {
                palavra: "Precisa",
                descricao: "Execução impecável. Onde a arte encontra o rigor técnico do design.",
              },
              {
                palavra: "Elegante",
                descricao: "A sofisticação do minimalismo. Impacto sem ruído visual.",
              },
            ].map((p) => (
              <FadeInItem key={p.palavra}>
              <div className="py-12 md:px-12 text-center group cursor-default">
                <h4 className="font-institutional text-5xl md:text-6xl text-[#ff4e00]/70 group-hover:text-[#ff4e00] transition-colors duration-500 mb-4">
                  {p.palavra}
                </h4>
                <p className="font-body text-[#e6beb2] italic">{p.descricao}</p>
              </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Método GRAFO 360° */}
      <section className="py-32 px-5 md:px-20 bg-[#121414]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <span className="section-marker" />
            <h2 className="font-institutional text-3xl md:text-5xl font-bold uppercase mb-16 text-[#e2e2e2]">
              | Método GRAFO 360°
            </h2>
          </FadeIn>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff4e00]/40 to-transparent" />
            <FadeInStagger className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {METODO.map((m) => (
                <FadeInItem key={m.letra} className="h-full">
                <div
                  className="bg-[#ff4e00] p-8 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ff4e00]/20 transition-all h-full"
                >
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

      {/* CTA Final */}
      <section className="px-5 md:px-20 py-32 relative overflow-hidden bg-[#333535]">
        <div className="absolute inset-0 z-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(circle at center, #ff4e00 0%, transparent 70%)",
            }}
          />
        </div>
        <FadeIn className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="font-institutional text-4xl md:text-6xl font-black uppercase mb-8 text-[#e2e2e2]">
            Vamos trabalhar juntos?
          </h2>
          <p className="font-body text-lg text-[#e6beb2] mb-12 max-w-xl mx-auto">
            O próximo capítulo da sua marca começa com uma conversa. Estamos prontos para o
            desafio.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#ff4e00] text-white font-body font-bold px-12 py-5 text-lg uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,78,0,0.4)] transition-all mx-auto group"
          >
            Iniciar Projeto
            <span aria-hidden="true" className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
              rocket_launch
            </span>
          </a>
        </FadeIn>
      </section>
    </main>
  );
}
