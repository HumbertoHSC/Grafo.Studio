import Link from "next/link";
import { Camera, Mail, MapPin, Clock } from "lucide-react";
import { SITE, WHATSAPP_URL } from "@/lib/constants";
import { GrafoPictogram } from "@/components/brand/GrafoPictogram";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-white/10 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Logo e desc */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-3">
              <GrafoPictogram size={28} color="#ff4e00" />
              <span className="font-institutional text-xl font-black tracking-tight leading-none">
                <span className="text-white">rafo</span>
                <span className="text-[#ff4e00] text-[0.6rem] font-semibold align-middle ml-0.5">.studio</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              {SITE.tagline}
              <br />
              Transformamos empresas comuns em marcas lembradas.
            </p>
            {/* Localização e horário */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/30 text-xs">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                {SITE.cidade}
              </div>
              <div className="flex items-center gap-2 text-white/30 text-xs">
                <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                {SITE.horario}
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/sobre", label: "Sobre" },
                { href: "/servicos", label: "Serviços" },
                { href: "/portfolio", label: "Portfólio" },
                { href: "/contato", label: "Contato" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Serviços
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/servicos/branding", label: "Branding" },
                { href: "/servicos/trafego-pago", label: "Tráfego Pago" },
                { href: "/servicos/social-media", label: "Social Media" },
                { href: "/servicos/desenvolvimento-web", label: "Desenvolvimento Web" },
                { href: "/servicos/tecnologia", label: "Tecnologia & Dados" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <div className="space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
              >
                <span className="w-4 h-4 text-[#25d366]">●</span>
                WhatsApp
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-[#ff4e00]" />
                {SITE.email}
              </a>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
              >
                <Camera className="w-4 h-4 text-[#ff4e00]" />
                {SITE.instagram}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Grafo Studio. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">
            Feito com{" "}
            <span className="text-[#ff4e00]">♥</span>
            {" "}pela própria Grafo Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
