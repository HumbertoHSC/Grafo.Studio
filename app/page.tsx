import { buildMetadata } from "@/lib/seo";
import HomeContent from "./HomeContent";

export const metadata = buildMetadata({
  title: "Grafo Studio | Agência de Marketing Digital",
  description:
    "Transformamos empresas comuns em marcas lembradas. Branding, tráfego pago, social media e desenvolvimento web para crescimento real no digital.",
  keywords:
    "agência de marketing digital, tráfego pago, branding, social media, desenvolvimento web, marketing digital",
});

export default function Page() {
  return <HomeContent />;
}
