import Link from "next/link";
import Image from "next/image";
import { SITE, WHATSAPP_URL, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full pt-24 pb-10 border-t-4 border-[#ff4e00] bg-[#121414]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-5 md:px-20 max-w-full mx-auto">
        {/* Marca + descrição */}
        <div className="md:col-span-6 mb-10 md:mb-0">
          <Link href="/" className="inline-block mb-6" aria-label="Grafo Studio — ir para a página inicial">
            <Image
              src="/brand/GRAFO_-_LOGO.png"
              alt="Grafo Studio"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <p className="font-body text-[#e6beb2] max-w-xs mb-8 leading-relaxed">
            Transformando a presença digital de marcas ambiciosas através de estratégia e
            design de alto impacto.
          </p>
          <div className="flex gap-4">
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar Instagram da Grafo Studio"
              className="text-[#e6beb2] hover:text-[#ff4e00] transition-all"
            >
              <Image src="/brand/Instagram_icon.png" alt="" width={22} height={22} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a Grafo Studio pelo WhatsApp"
              className="text-[#e6beb2] hover:text-[#ff4e00] transition-all"
            >
              <Image src="/brand/WhatsApp_icon.png" alt="" width={22} height={22} />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Enviar e-mail para a Grafo Studio"
              className="text-[#e6beb2] hover:text-[#ff4e00] transition-all"
            >
              <Image src="/brand/Gmail_icon_(2020).svg.png" alt="" width={22} height={22} />
            </a>
          </div>
        </div>

        {/* Navegação */}
        <nav aria-label="Navegação do rodapé" className="md:col-span-3">
          <h4 className="font-body font-bold uppercase tracking-widest text-sm mb-6 text-[#e2e2e2]">
            Navegação
          </h4>
          <div className="flex flex-col gap-4">
            {NAV_LINKS.slice(0, 4).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-body text-[#e6beb2] hover:text-[#ff4e00] hover:translate-x-1 inline-block transition-all"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Legal */}
        <nav aria-label="Links legais do rodapé" className="md:col-span-3">
          <h4 className="font-body font-bold uppercase tracking-widest text-sm mb-6 text-[#e2e2e2]">
            Legal
          </h4>
          <div className="flex flex-col gap-4">
            <Link
              href="/contato"
              className="font-body text-[#e6beb2] hover:text-[#ff4e00] hover:translate-x-1 inline-block transition-all"
            >
              Contato
            </Link>
            <Link href="/politica-de-privacidade" className="font-body text-[#e6beb2] hover:text-[#ff4e00] hover:translate-x-1 inline-block transition-all text-sm">Política de Privacidade</Link>
            <Link href="/termos-de-uso" className="font-body text-[#e6beb2] hover:text-[#ff4e00] hover:translate-x-1 inline-block transition-all text-sm">Termos de Uso</Link>
          </div>
        </nav>

        {/* Copyright */}
        <div className="md:col-span-12 mt-12 pt-8 border-t border-[#5c4037]/10 text-center">
          <p className="font-body text-[#e6beb2] text-sm opacity-60">
            © {new Date().getFullYear()} Grafo Studio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
