"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SITE, WHATSAPP_URL } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";

const SERVICOS_OPCOES = [
  "Branding",
  "Tráfego Pago",
  "Social Media & Design",
  "Desenvolvimento Web",
  "Tecnologia & Dados",
  "Pacote Completo",
  "Outro",
];

export default function ContatoPage() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    servico: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof typeof form, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "opening" | "done">("idle");

  function validate(data: typeof form) {
    const errs: Partial<Record<keyof typeof form, string>> = {};
    if (!data.nome.trim()) errs.nome = "Nome é obrigatório.";
    if (!data.whatsapp.trim()) errs.whatsapp = "WhatsApp é obrigatório.";
    else if (!/^[\d\s()\-+]{8,}$/.test(data.whatsapp)) errs.whatsapp = "Número inválido.";
    if (!data.servico) errs.servico = "Selecione um serviço.";
    return errs;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const next = { ...form, [e.target.name]: e.target.value };
    setForm(next);
    if (touched[e.target.name as keyof typeof form]) {
      setErrors(validate(next));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const name = e.target.name as keyof typeof form;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(form));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched = Object.keys(form).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {} as typeof touched
    );
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStatus("opening");
    const texto = `Olá! Vim pelo site da Grafo Studio.\n\n*Nome:* ${form.nome}\n*Empresa:* ${form.empresa}\n*Serviço de interesse:* ${form.servico}\n\n*Mensagem:* ${form.mensagem}`;
    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
    setTimeout(() => setStatus("done"), 1200);
  }

  return (
    <main className="pt-32 relative overflow-hidden">
      {/* G watermark decorativo — texto CSS */}
      <div
        className="absolute left-[-8%] top-[-8%] select-none pointer-events-none z-0"
        style={{
          fontFamily: "var(--font-institutional)",
          fontWeight: 800,
          fontSize: "80vh",
          color: "rgba(255, 78, 0, 0.04)",
          lineHeight: 1,
        }}
      >
        g
      </div>
      <div
        className="absolute right-[-8%] bottom-[-8%] select-none pointer-events-none z-0"
        style={{
          fontFamily: "var(--font-institutional)",
          fontWeight: 800,
          fontSize: "80vh",
          color: "rgba(255, 78, 0, 0.04)",
          lineHeight: 1,
        }}
      >
        g
      </div>

      {/* Hero */}
      <section className="px-5 md:px-20 mb-24 relative z-10">
        <FadeIn className="max-w-4xl">
          <div className="w-14 h-1 bg-[#ff4e00] mb-6" />
          <h1 className="font-institutional text-5xl md:text-[5rem] font-black text-white mb-6 leading-none">
            Vamos crescer juntos?
          </h1>
          <p className="font-body text-lg text-[#e6beb2] max-w-2xl leading-relaxed">
            Estamos prontos para transformar sua visão em resultados reais. Use o
            formulário ou fale conosco diretamente pelos nossos canais oficiais.
          </p>
        </FadeIn>
      </section>

      {/* Grid principal: info + formulário */}
      <section className="px-5 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-6 mb-32 relative z-10">
        {/* Info de contato */}
        <div className="md:col-span-5 space-y-12">
          <div>
            <h3 className="font-institutional text-2xl font-bold text-white mb-8">
              Informações de Contato
            </h3>
            <div className="space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 bg-[#1e2020] border-b-2 border-[#ff4e00] hover:bg-[#282a2b] transition-all"
              >
                <div className="w-12 h-12 bg-[#25d366]/10 flex items-center justify-center flex-shrink-0">
                  <Image src="/brand/WhatsApp_icon.png" alt="WhatsApp" width={28} height={28} />
                </div>
                <div className="flex-1">
                  <p className="font-body text-xs text-[#ff4e00] uppercase tracking-widest">WHATSAPP</p>
                  <p className="font-body text-lg text-white">Iniciar Conversa</p>
                </div>
                <span aria-hidden="true" className="material-symbols-outlined text-[#e6beb2] group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </a>

              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 bg-[#1e2020] border-b-2 border-[#ff4e00] hover:bg-[#282a2b] transition-all"
              >
                <div className="w-12 h-12 bg-[#ff4e00]/10 flex items-center justify-center flex-shrink-0">
                  <Image src="/brand/Instagram_icon.png" alt="Instagram" width={28} height={28} />
                </div>
                <div className="flex-1">
                  <p className="font-body text-xs text-[#ff4e00] uppercase tracking-widest">INSTAGRAM</p>
                  <p className="font-body text-lg text-white">{SITE.instagram}</p>
                </div>
                <span aria-hidden="true" className="material-symbols-outlined text-[#e6beb2] group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 group p-4 bg-[#1e2020] border-b-2 border-[#ff4e00] hover:bg-[#282a2b] transition-all"
              >
                <div className="w-12 h-12 bg-[#ff4e00]/10 flex items-center justify-center flex-shrink-0">
                  <Image src="/brand/Gmail_icon_(2020).svg.png" alt="Email" width={28} height={28} />
                </div>
                <div className="flex-1">
                  <p className="font-body text-xs text-[#ff4e00] uppercase tracking-widest">EMAIL</p>
                  <p className="font-body text-lg text-white">{SITE.email}</p>
                </div>
                <span aria-hidden="true" className="material-symbols-outlined text-[#e6beb2] group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* Formulário */}
        <div className="md:col-span-7">
          <div className="bg-[#1e2020] p-8 md:p-12 border-b-2 border-[#ff4e00] relative overflow-hidden">
            <h4 className="font-institutional text-2xl font-bold text-white mb-8">
              Solicitar Orçamento
            </h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nome" className="font-body text-xs text-[#e6beb2] uppercase tracking-widest block">NOME</label>
                  <input
                    id="nome"
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="name"
                    placeholder="Seu nome completo"
                    aria-invalid={!!errors.nome}
                    aria-describedby={errors.nome ? "erro-nome" : undefined}
                    className={`w-full bg-[#121414] border p-4 text-white font-body placeholder-[#e2e2e2]/30 focus:outline-none focus:ring-2 transition-colors ${errors.nome ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : "border-[#5c4037]/30 focus:border-[#ff4e00] focus:ring-[#ff4e00]/30"}`}
                  />
                  {errors.nome && <p id="erro-nome" role="alert" className="font-body text-xs text-red-400 mt-1">{errors.nome}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="empresa" className="font-body text-xs text-[#e6beb2] uppercase tracking-widest block">EMPRESA</label>
                  <input
                    id="empresa"
                    type="text"
                    name="empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="organization"
                    placeholder="Nome da sua empresa"
                    className="w-full bg-[#121414] border border-[#5c4037]/30 p-4 text-white font-body placeholder-[#e2e2e2]/30 focus:outline-none focus:border-[#ff4e00] focus:ring-2 focus:ring-[#ff4e00]/30 transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="font-body text-xs text-[#e6beb2] uppercase tracking-widest block">WHATSAPP</label>
                  <input
                    id="whatsapp"
                    type="tel"
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="tel"
                    placeholder="(00) 00000-0000"
                    aria-invalid={!!errors.whatsapp}
                    aria-describedby={errors.whatsapp ? "erro-whatsapp" : undefined}
                    className={`w-full bg-[#121414] border p-4 text-white font-body placeholder-[#e2e2e2]/30 focus:outline-none focus:ring-2 transition-colors ${errors.whatsapp ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : "border-[#5c4037]/30 focus:border-[#ff4e00] focus:ring-[#ff4e00]/30"}`}
                  />
                  {errors.whatsapp && <p id="erro-whatsapp" role="alert" className="font-body text-xs text-red-400 mt-1">{errors.whatsapp}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="servico" className="font-body text-xs text-[#e6beb2] uppercase tracking-widest block">SERVIÇO DE INTERESSE</label>
                  <select
                    id="servico"
                    name="servico"
                    value={form.servico}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.servico}
                    aria-describedby={errors.servico ? "erro-servico" : undefined}
                    className={`w-full bg-[#121414] border p-4 text-white font-body appearance-none focus:outline-none focus:ring-2 transition-colors ${errors.servico ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : "border-[#5c4037]/30 focus:border-[#ff4e00] focus:ring-[#ff4e00]/30"}`}
                  >
                    <option value="" className="bg-[#121414]">Selecione um serviço</option>
                    {SERVICOS_OPCOES.map((s) => (
                      <option key={s} value={s} className="bg-[#121414]">{s}</option>
                    ))}
                  </select>
                  {errors.servico && <p id="erro-servico" role="alert" className="font-body text-xs text-red-400 mt-1">{errors.servico}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="mensagem" className="font-body text-xs text-[#e6beb2] uppercase tracking-widest block">MENSAGEM</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  placeholder="Como podemos te ajudar?"
                  rows={4}
                  className="w-full bg-[#121414] border border-[#5c4037]/30 p-4 text-white font-body placeholder-[#e2e2e2]/30 focus:outline-none focus:border-[#ff4e00] focus:ring-2 focus:ring-[#ff4e00]/30 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "opening"}
                className="w-full bg-[#ff4e00] text-white py-5 font-body font-bold uppercase tracking-widest text-sm hover:bg-[#e04500] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "opening" ? (
                  "Abrindo WhatsApp..."
                ) : status === "done" ? (
                  "WhatsApp aberto! Envie a mensagem ✓"
                ) : (
                  <>
                    Enviar para WhatsApp{" "}
                    <span aria-hidden="true" className="material-symbols-outlined">arrow_forward</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Atuação Nacional */}
      <section className="px-5 md:px-20 mb-32 relative z-10">
        <div className="w-14 h-1 bg-[#ff4e00] mb-6" />
        <h2 className="font-institutional text-3xl md:text-5xl font-bold text-white mb-6">
          Atuação Nacional.{" "}
          <br />
          <span className="text-[#ff4e00]">Foco Local.</span>
        </h2>
        <p className="font-body text-lg text-[#e6beb2] max-w-lg mb-8 leading-relaxed">
          O Grafo Studio atende parceiros em todo o território nacional. Nossa estrutura
          remota otimizada garante agilidade, enquanto nossa visão estratégica respeita
          as nuances de cada mercado regional.
        </p>
        <div className="flex gap-12">
          <div>
            <p className="font-institutional text-4xl font-black text-white">20+</p>
            <p className="font-body text-xs uppercase tracking-widest text-[#ff4e00]">
              ESTADOS ATENDIDOS
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
