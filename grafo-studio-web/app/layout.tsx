import type { Metadata } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

/*
  Fontes do Guideline Grafo Studio:
  - Institucional: Neiko (comercial) → aproximado por Outfit até os arquivos estarem disponíveis
  - Apoio/corpo:   Myriad Pro (Adobe) → aproximado por Source Sans 3 (mesmo designer, Adobe)

  Para ativar as fontes oficiais:
  1. Coloque os arquivos em /public/fonts/ (ex: neiko.woff2, myriad-pro.woff2)
  2. Adicione @font-face em globals.css apontando para esses arquivos
  3. Atualize as variáveis --font-institutional e --font-body abaixo
*/
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-institutional",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grafo Studio | Agência de Marketing Digital",
  description:
    "Transformamos empresas comuns em marcas lembradas. Estratégia, criatividade e tecnologia para crescimento real no digital.",
  keywords: "agência de marketing, tráfego pago, social media, branding, desenvolvimento web",
  openGraph: {
    title: "Grafo Studio | Agência de Marketing Digital",
    description: "Transformamos empresas comuns em marcas lembradas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`h-full ${outfit.variable} ${sourceSans.variable}`}>
      <body className="min-h-full flex flex-col bg-[#191919] text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
