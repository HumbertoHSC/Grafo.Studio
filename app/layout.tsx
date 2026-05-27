import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ConsentBanner from "@/components/layout/ConsentBanner";
import SmoothScroll from "@/components/providers/SmoothScroll";
import AnalyticsProvider from "@/components/providers/AnalyticsProvider";

const neiko = localFont({
  src: "../public/fonts/neiko-font/neikoregular-xgmp2.otf",
  variable: "--font-institutional",
  display: "swap",
  weight: "400",
});

const zonaPro = localFont({
  src: [
    { path: "../public/fonts/Zona-Pro/ZonaPro-Light.otf", weight: "300" },
    { path: "../public/fonts/Zona-Pro/ZonaPro-Light.otf", weight: "400" },
    { path: "../public/fonts/Zona-Pro/ZonaPro-SemiBold.otf", weight: "600" },
    { path: "../public/fonts/Zona-Pro/ZonaPro-Bold.otf", weight: "700" },
  ],
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
    url: "https://grafostudio.com.br",
    siteName: "Grafo Studio",
    images: [
      {
        url: "https://grafostudio.com.br/brand/GRAFO_-_LOGO.png",
        width: 1200,
        height: 630,
        alt: "Grafo Studio — Agência de Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grafo Studio | Agência de Marketing Digital",
    description: "Transformamos empresas comuns em marcas lembradas.",
    images: ["https://grafostudio.com.br/brand/GRAFO_-_LOGO.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`h-full ${neiko.variable} ${zonaPro.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              name: "Grafo Studio",
              description:
                "Agência de marketing digital especializada em branding, tráfego pago, social media, desenvolvimento web e tecnologia.",
              url: "https://grafostudio.com.br",
              logo: "https://grafostudio.com.br/brand/GRAFO_-_LOGO.png",
              email: "contato.grafo.studio@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              sameAs: ["https://instagram.com/grafostudio.mkt"],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
              priceRange: "R$1400–R$3500",
              serviceArea: {
                "@type": "Country",
                name: "Brasil",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#121414] text-[#e2e2e2] antialiased">
        <AnalyticsProvider
          gaId={process.env.NEXT_PUBLIC_GA_ID}
          metaPixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID}
        />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ConsentBanner />
        </SmoothScroll>
      </body>
    </html>
  );
}
