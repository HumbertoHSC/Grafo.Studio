"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { clsx } from "clsx";
import { scrollToTop } from "@/lib/scrollToTop";
import { GrafoPictogram } from "@/components/brand/GrafoPictogram";

const links = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function handleNavClick(href: string) {
    setOpen(false);
    if (href === pathname) {
      scrollToTop();
    }
  }

  return (
    <header
      data-testid="navbar"
      className={clsx(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "bg-[#191919]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

        {/* Logo — pictograma SVG fiel ao brand guideline + logotipo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <GrafoPictogram size={28} color="#ff4e00" />
          <span className="font-institutional text-xl font-black tracking-tight leading-none">
            <span className="text-white">rafo</span>
            <span className="text-[#ff4e00] text-[0.6rem] font-semibold align-middle ml-0.5">.studio</span>
          </span>
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={clsx(
                    "relative group px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 block",
                    active
                      ? "text-[#ff4e00]"
                      : "text-white/60 hover:text-white"
                  )}
                  style={{ fontWeight: 700, letterSpacing: "0.02em" }}
                >
                  {/* Texto "fantasma" para manter largura fixa no hover */}
                  <span className="invisible font-black">{link.label}</span>

                  {/* Texto real posicionado sobre o fantasma */}
                  <span
                    className={clsx(
                      "absolute inset-0 flex items-center justify-center transition-all duration-300",
                      "font-bold group-hover:font-black group-hover:tracking-wider",
                      active ? "font-black text-[#ff4e00]" : "text-white/60 group-hover:text-white"
                    )}
                  >
                    {link.label}
                  </span>

                  {/* Linha laranja animada abaixo */}
                  <span
                    className={clsx(
                      "absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 bg-[#ff4e00] rounded-full transition-all duration-300",
                      active
                        ? "w-4"
                        : "w-0 group-hover:w-4"
                    )}
                  />

                  {/* Fundo sutil no hover */}
                  <span
                    className={clsx(
                      "absolute inset-0 rounded-full transition-all duration-300",
                      active
                        ? "bg-[#ff4e00]/10"
                        : "bg-transparent group-hover:bg-white/5"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA desktop */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ff4e00] text-white text-sm font-bold tracking-wide hover:bg-[#e04500] hover:scale-105 transition-all duration-300"
        >
          Solicitar Orçamento
        </a>

        {/* Menu mobile */}
        <button
          data-testid="mobile-menu-button"
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div data-testid="mobile-drawer" className="md:hidden bg-[#191919] border-t border-white/10 px-4 pb-6">
          <ul className="flex flex-col gap-1 pt-4">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={clsx(
                      "flex items-center gap-3 py-3 px-3 rounded-xl text-base font-bold tracking-wide transition-all",
                      active
                        ? "text-[#ff4e00] bg-[#ff4e00]/10"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    )}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {active && (
                      <span className="w-1 h-4 bg-[#ff4e00] rounded-full" />
                    )}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full flex items-center justify-center py-3 rounded-full bg-[#ff4e00] text-white font-bold tracking-wide"
            onClick={() => setOpen(false)}
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  );
}
