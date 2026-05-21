"use client";

import { useState } from "react";
import { ArrowRight, Mail, Camera, MessageCircle } from "lucide-react";
import { SITE, WHATSAPP_URL } from "@/lib/constants";

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
  const [status, setStatus] = useState<"idle" | "opening" | "done">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("opening");
    const texto = `Olá! Vim pelo site da Grafo Studio.\n\n*Nome:* ${form.nome}\n*Empresa:* ${form.empresa}\n*Serviço de interesse:* ${form.servico}\n\n*Mensagem:* ${form.mensagem}`;
    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
    setTimeout(() => setStatus("done"), 1200);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 bg-[#191919] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff4e00]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#ff4e00] text-sm font-semibold uppercase tracking-widest mb-4">
            Fale conosco
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Vamos crescer <span className="text-[#ff4e00]">juntos?</span>
          </h1>
          <p className="text-white/60 text-xl max-w-xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato pelo WhatsApp para
            montar o plano ideal para sua empresa.
          </p>
        </div>
      </section>

      {/* Formulário + Info */}
      <section className="py-24 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info de contato */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-1 h-8 bg-[#ff4e00] rounded-full" />
              <h2 className="text-2xl font-bold">Informações de Contato</h2>
            </div>
            <div className="space-y-6 mb-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#ff4e00]/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#25d366]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#25d366]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">WhatsApp</p>
                  <p className="text-white font-semibold group-hover:text-[#ff4e00] transition-colors">
                    Clique para conversar
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#ff4e00]/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#ff4e00]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#ff4e00]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">E-mail</p>
                  <p className="text-white font-semibold group-hover:text-[#ff4e00] transition-colors">
                    {SITE.email}
                  </p>
                </div>
              </a>

              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#ff4e00]/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#ff4e00]/10 flex items-center justify-center flex-shrink-0">
                  <Camera className="w-5 h-5 text-[#ff4e00]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Instagram</p>
                  <p className="text-white font-semibold group-hover:text-[#ff4e00] transition-colors">
                    {SITE.instagram}
                  </p>
                </div>
              </a>
            </div>

            <div className="p-6 rounded-2xl border border-[#ff4e00]/20 bg-[#ff4e00]/5">
              <p className="text-[#ff4e00] font-semibold mb-2">Atendimento</p>
              <p className="text-white/60 text-sm leading-relaxed">
                Respondemos em até 24 horas úteis. Para atendimento mais rápido,
                utilize nosso WhatsApp.
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-1 h-8 bg-[#ff4e00] rounded-full" />
              <h2 className="text-2xl font-bold">Solicitar Orçamento</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: "nome", label: "Seu nome *", placeholder: "João Silva", type: "text" },
                { name: "empresa", label: "Empresa", placeholder: "Nome da sua empresa", type: "text" },
                { name: "whatsapp", label: "WhatsApp *", placeholder: "(11) 99999-9999", type: "tel" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-white/60 text-sm mb-2">{f.label}</label>
                  <input
                    type={f.type}
                    name={f.name}
                    value={form[f.name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    required={f.name !== "empresa"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#ff4e00]/50 transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="block text-white/60 text-sm mb-2">Serviço de interesse *</label>
                <select
                  name="servico"
                  value={form.servico}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ff4e00]/50 transition-colors"
                >
                  <option value="" className="bg-[#191919]">Selecione um serviço...</option>
                  {SERVICOS_OPCOES.map((s) => (
                    <option key={s} value={s} className="bg-[#191919]">{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2">Como podemos ajudar?</label>
                <textarea
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  placeholder="Conte um pouco sobre o seu negócio e o que você precisa..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#ff4e00]/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "opening"}
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-[#ff4e00] text-white font-bold text-base hover:bg-[#e04500] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
              >
                {status === "opening" ? (
                  <>Abrindo WhatsApp...</>
                ) : status === "done" ? (
                  <>WhatsApp aberto! Envie a mensagem ✓</>
                ) : (
                  <>Enviar pelo WhatsApp <ArrowRight className="w-4 h-4" /></>
                )}
              </button>

              {status === "done" && (
                <p className="text-[#ff4e00] text-sm text-center font-medium">
                  Se o WhatsApp não abriu,{" "}
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="underline hover:no-underline"
                  >
                    clique aqui para tentar novamente
                  </button>
                  .
                </p>
              )}

              {status === "idle" && (
                <p className="text-white/30 text-xs text-center">
                  Ao enviar, você será redirecionado para o WhatsApp com as informações preenchidas.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
