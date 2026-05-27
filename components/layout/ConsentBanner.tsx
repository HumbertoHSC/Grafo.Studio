"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("grafo_consent");
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("grafo_consent", "1");
    window.dispatchEvent(new Event("grafo:consent"));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a1c1c] border-t-2 border-[#ff4e00] px-5 md:px-20 py-6 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="font-body text-sm text-[#e6beb2] leading-relaxed max-w-2xl">
          Utilizamos cookies para melhorar sua experiência de navegação e exibir
          conteúdo relevante. Ao continuar, você concorda com nossos{" "}
          <Link
            href="/termos-de-uso"
            className="text-[#ff4e00] hover:underline font-semibold"
          >
            Termos de Uso
          </Link>{" "}
          e nossa{" "}
          <Link
            href="/politica-de-privacidade"
            className="text-[#ff4e00] hover:underline font-semibold"
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <button
          onClick={accept}
          className="flex-shrink-0 bg-[#ff4e00] text-white font-body font-bold text-sm uppercase tracking-widest py-3 px-8 hover:bg-[#e04500] active:scale-95 transition-all"
        >
          Aceitar e continuar
        </button>
      </div>
    </div>
  );
}
