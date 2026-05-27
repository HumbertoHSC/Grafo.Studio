export const SITE = {
  name: "Grafo Studio",
  tagline: "do traço à marca.",
  description:
    "Agência de marketing que transforma empresas comuns em marcas lembradas. Estratégia, criatividade e tecnologia para crescimento real.",
  email: "contato.grafo.studio@gmail.com",
  whatsapp: "5511999999999",
  whatsappMessage: "Olá! Vim pelo site e gostaria de solicitar um orçamento.",
  instagram: "@grafostudio.mkt",
  instagramUrl: "https://instagram.com/grafostudio.mkt",
  cidade: "São Paulo, SP",
  horario: "Seg–Sex, 9h–18h",
};

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

export const SERVICOS = [
  {
    id: "branding",
    titulo: "Branding",
    headline: "Construímos marcas que ficam na memória.",
    descricao:
      "Construção da identidade visual completa da sua marca. Do logotipo ao manual de marca, criamos uma presença visual que comunica quem você é.",
    entregaveis: "Logotipo · Manual de Marca · Aplicações Visuais",
    destaque: true,
    href: "/servicos/branding",
    icone: "Palette",
    beneficios: [
      "Identidade visual coesa em todos os pontos de contato",
      "Manual de marca para sua equipe e fornecedores aplicarem certo",
      "Posicionamento claro e diferenciado da concorrência",
      "Marca preparada para crescer (digital, físico, embalagem)",
    ],
    entregaveisDetalhados: [
      "Pesquisa de mercado e benchmark",
      "Naming (opcional) e construção de territórios criativos",
      "Logotipo principal + variações (vertical, horizontal, ícone)",
      "Paleta de cores, tipografia e grid",
      "Manual de marca em PDF (uso correto e proibido)",
      "Kit de aplicações: cartão, papelaria, redes sociais",
    ],
    processo: [
      { titulo: "Diagnóstico", desc: "Entendemos seu negócio, público e concorrência." },
      { titulo: "Conceito", desc: "Definimos o território criativo e a essência da marca." },
      { titulo: "Design", desc: "Criamos logo, paleta, tipografia e aplicações." },
      { titulo: "Entrega", desc: "Manual de marca + todos os arquivos em alta qualidade." },
    ],
    paraQuem:
      "Negócios que querem profissionalizar a presença visual, abrir filiais, lançar produto novo ou simplesmente parar de parecer amador.",
  },
  {
    id: "trafego-pago",
    titulo: "Tráfego Pago",
    headline: "Anúncios que viram cliente — não só curtida.",
    descricao:
      "Anúncios estratégicos no Instagram, Facebook e Google para atrair clientes qualificados e gerar leads com previsibilidade.",
    entregaveis: "Campanhas Meta Ads · Google Ads · Relatório Mensal",
    destaque: false,
    href: "/servicos/trafego-pago",
    icone: "TrendingUp",
    beneficios: [
      "Leads qualificados todos os dias entrando no seu WhatsApp",
      "Previsibilidade: você sabe quanto gastou e quanto retornou",
      "Otimização contínua para reduzir custo por lead",
      "Relatórios claros — sem enrolação técnica",
    ],
    entregaveisDetalhados: [
      "Configuração de Meta Ads (Facebook + Instagram)",
      "Configuração de Google Ads (Pesquisa + Display + YouTube)",
      "Criação de criativos publicitários (estáticos e vídeo)",
      "Estratégia de segmentação por público frio, morno e quente",
      "Pixel/conversões configurados corretamente",
      "Relatório mensal de performance com recomendações",
    ],
    processo: [
      { titulo: "Auditoria", desc: "Avaliamos histórico, pixel, públicos e concorrência." },
      { titulo: "Estratégia", desc: "Definimos ofertas, criativos e funil de campanhas." },
      { titulo: "Execução", desc: "Subimos as campanhas e otimizamos diariamente." },
      { titulo: "Escala", desc: "Mantemos o que funciona e cortamos o que não converte." },
    ],
    paraQuem:
      "Negócios locais e digitais que precisam de fluxo constante de leads e estão dispostos a investir mensalmente em mídia paga.",
  },
  {
    id: "social-media",
    titulo: "Social Media & Design",
    headline: "Sua marca presente, profissional e relevante.",
    descricao:
      "Presença profissional nas redes sociais através de design, conteúdo estratégico e vídeos de impacto.",
    entregaveis: "Feed · Stories · Reels · Calendário Editorial",
    destaque: false,
    href: "/servicos/social-media",
    icone: "Camera",
    beneficios: [
      "Feed bonito, estratégico e com identidade forte",
      "Conteúdo que educa, conecta e converte",
      "Reels e vídeos curtos que ampliam alcance",
      "Calendário editorial planejado mensalmente",
    ],
    entregaveisDetalhados: [
      "Calendário editorial mensal (datas, formatos, temas)",
      "Posts para feed (carrossel, único, vídeo)",
      "Stories estratégicos (caixinhas, enquetes, bastidores)",
      "Reels com edição profissional",
      "Copywriting (legendas, hashtags, CTAs)",
      "Relatório mensal de engajamento e crescimento",
    ],
    processo: [
      { titulo: "Diagnóstico", desc: "Auditamos o perfil, concorrência e tom de voz." },
      { titulo: "Planejamento", desc: "Montamos o calendário editorial e linha visual." },
      { titulo: "Produção", desc: "Criamos artes, vídeos e copy de cada post." },
      { titulo: "Análise", desc: "Medimos resultados e ajustamos o que precisa." },
    ],
    paraQuem:
      "Empresas que precisam levar a sério as redes sociais — sem perder horas tentando criar conteúdo internamente.",
  },
  {
    id: "desenvolvimento-web",
    titulo: "Desenvolvimento Web",
    headline: "Sites e lojas que vendem 24 horas por dia.",
    descricao:
      "Landing pages, sites institucionais e lojas virtuais de alta performance, prontos para converter visitantes em clientes.",
    entregaveis: "Landing Page · Site Institucional · Loja Virtual",
    destaque: false,
    href: "/servicos/desenvolvimento-web",
    icone: "Code2",
    beneficios: [
      "Site rápido, responsivo e otimizado para conversão",
      "SEO técnico configurado desde o primeiro dia",
      "Integração com WhatsApp, formulários e CRMs",
      "Painel para você atualizar sem depender de programador",
    ],
    entregaveisDetalhados: [
      "Wireframe e protótipo navegável antes do desenvolvimento",
      "Design responsivo (mobile, tablet, desktop)",
      "Desenvolvimento em Next.js / WordPress (conforme projeto)",
      "Configuração de domínio, hospedagem e SSL",
      "Integração com Google Analytics, Meta Pixel, WhatsApp",
      "Treinamento da equipe para atualizações",
    ],
    processo: [
      { titulo: "Discovery", desc: "Entendemos objetivo, público e referências." },
      { titulo: "Design", desc: "Protótipo aprovado antes de uma linha de código." },
      { titulo: "Desenvolvimento", desc: "Construímos com foco em performance e SEO." },
      { titulo: "Lançamento", desc: "Subimos o site, testamos e treinamos sua equipe." },
    ],
    paraQuem:
      "Quem precisa de um site profissional para vender, captar leads ou apresentar o negócio — sem gambiarra e sem perder tempo.",
  },
  {
    id: "tecnologia",
    titulo: "Tecnologia & Dados",
    headline: "Organização e escala para o seu comercial.",
    descricao:
      "CRM comercial, automação via WhatsApp e dashboards Power BI para organizar e escalar o seu negócio.",
    entregaveis: "CRM · Automação WhatsApp · Dashboard Power BI",
    destaque: false,
    href: "/servicos/tecnologia",
    icone: "BarChart3",
    beneficios: [
      "Nenhum lead esquecido — CRM organiza tudo automaticamente",
      "Atendimento WhatsApp automatizado nas primeiras respostas",
      "Dashboard em tempo real do que está acontecendo no negócio",
      "Equipe comercial com processo claro e previsível",
    ],
    entregaveisDetalhados: [
      "Implementação de CRM (HubSpot, RD Station ou Pipedrive)",
      "Automação de boas-vindas e qualificação no WhatsApp",
      "Dashboard Power BI conectado às suas fontes de dados",
      "Funil de vendas estruturado por estágios",
      "Treinamento do time comercial",
      "Suporte mensal de manutenção e ajustes",
    ],
    processo: [
      { titulo: "Mapeamento", desc: "Entendemos seu funil e onde estão os gargalos." },
      { titulo: "Implementação", desc: "Montamos CRM, automações e dashboards." },
      { titulo: "Integração", desc: "Conectamos WhatsApp, site e ferramentas existentes." },
      { titulo: "Treinamento", desc: "Capacitamos o time a usar tudo no dia a dia." },
    ],
    paraQuem:
      "Empresas que já têm volume de leads e precisam organizar o processo comercial para não perder venda por desorganização.",
  },
];

export const METODO = [
  {
    letra: "G",
    titulo: "Ganhar Atenção",
    descricao: "Criamos conteúdo e anúncios que param o scroll e fazem sua marca ser notada.",
  },
  {
    letra: "R",
    titulo: "Relacionar com o Público",
    descricao: "Construímos conexão genuína entre a sua marca e as pessoas certas.",
  },
  {
    letra: "A",
    titulo: "Atrair Clientes",
    descricao: "Estratégias de tráfego pago e orgânico que geram leads qualificados.",
  },
  {
    letra: "F",
    titulo: "Fidelizar",
    descricao: "Transformamos compradores em fãs e promotores da sua marca.",
  },
  {
    letra: "O",
    titulo: "Otimizar Resultados",
    descricao: "Análise contínua de dados para escalar o que funciona e cortar o que não funciona.",
  },
];

export const SEGMENTOS = [
  { nome: "Restaurantes", icone: "Utensils" },
  { nome: "Clínicas", icone: "Stethoscope" },
  { nome: "Advogados", icone: "Scale" },
  { nome: "Estéticas", icone: "Sparkles" },
  { nome: "Lojas", icone: "ShoppingBag" },
  { nome: "Prestadores de Serviço", icone: "Wrench" },
];

export const PACOTES = [
  {
    nome: "Presença Local",
    preco: "1.400",
    periodo: "mês",
    descricao: "Ideal para quem quer começar a crescer no digital",
    itens: [
      "Gestão de Tráfego Pago (Meta Ads)",
      "Produção de Conteúdo para Redes Sociais",
      "Relatório de Resultados Mensal",
    ],
    destaque: false,
  },
  {
    nome: "Crescimento Regional",
    preco: "2.200",
    periodo: "mês",
    descricao: "O mais escolhido por nossos clientes",
    itens: [
      "Tráfego Pago (Meta Ads + Google Ads)",
      "Social Media Estratégico",
      "Landing Page Básica inclusa",
      "Relatório de Resultados Mensal",
    ],
    destaque: true,
  },
  {
    nome: "Domínio Digital",
    preco: "3.500",
    periodo: "mês",
    descricao: "Operação completa para dominar o mercado",
    itens: [
      "Operação Completa (Tráfego + Design)",
      "Acompanhamento Dedicado com Gestor",
      "Landing Page Avançada inclusa",
      "Criação de CRM Comercial",
      "Dashboard de Performance Power BI",
    ],
    destaque: false,
  },
];

export const DIFERENCIAIS = [
  "Atendimento próximo e humanizado",
  "Estratégia 100% personalizada",
  "Equipe especialista em cada área",
  "Foco absoluto em vendas",
  "Crescimento sustentável do negócio",
];

export const CASES = [
  {
    id: "are-basics",
    titulo: "ARE",
    subtitulo: "Streetwear minimalista",
    descricao:
      "E-commerce de moda minimalista urbana — peças básicas redefinidas com identidade visual sóbria e fotografia limpa.",
    categoria: "Desenvolvimento",
    tags: ["E-commerce", "Branding", "Web"],
    url: "https://www.arebasics.com.br/",
    cor: "#0a0a0a",
    corAcento: "#ffffff",
    thumb: "/cases/ARE.png" as string | null,
  },
  {
    id: "am-imobiliaria",
    titulo: "AM",
    subtitulo: "Imobiliária · Recife",
    descricao:
      "Plataforma imobiliária com catálogo de casas, apartamentos e terrenos — navegação intuitiva e contato direto via WhatsApp.",
    categoria: "Desenvolvimento",
    tags: ["Web", "Imobiliário", "Conversão"],
    url: "https://imobiliaria-65tc.vercel.app/",
    cor: "#1a4d2e",
    corAcento: "#a7f3d0",
    thumb: "/cases/IMOBILIARIA.png" as string | null,
  },
];

export const NUMEROS = [
  {
    valor: "5",
    sufixo: "",
    label: "Serviços especializados",
    contexto: "em um único parceiro",
  },
  {
    valor: "100",
    sufixo: "%",
    label: "Estratégia personalizada",
    contexto: "nenhum pacote genérico",
  },
  {
    valor: "360",
    sufixo: "°",
    label: "Visão do negócio",
    contexto: "do branding às vendas",
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/contato", label: "Contato" },
];

export const SERVICE_ICONS: Record<string, string> = {
  Palette: "auto_awesome",
  TrendingUp: "ads_click",
  Camera: "brush",
  Code2: "code",
  BarChart3: "query_stats",
};

export const SEGMENT_ICONS: Record<string, string> = {
  Utensils: "restaurant",
  Stethoscope: "stethoscope",
  Scale: "balance",
  Sparkles: "auto_awesome",
  ShoppingBag: "shopping_bag",
  Wrench: "build",
};
