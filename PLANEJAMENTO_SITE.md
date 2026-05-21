# Planejamento Completo — Site Grafo Studio

## Visão Geral

**Empresa:** Grafo.Studio  
**Tagline principal:** "do traço à marca."  
**Tagline secundária:** "Sua empresa não precisa apenas aparecer. Precisa ser lembrada."  
**Objetivo do site:** Gerar leads qualificados e direcionar para contato via WhatsApp  
**Tom:** Corporativo, criativo, elegante e moderno — com animações ricas

---

## 1. Identidade Visual Aplicada ao Web

| Elemento | Valor |
|---|---|
| Cor primária | Laranja `#ff4e00` |
| Cor secundária | Preto `#191919` |
| Cor de fundo dark | `#0f0f0f` / `#191919` |
| Cor de fundo light | `#ffffff` / `#f9f9f9` |
| Tipografia principal | Neiko (títulos e destaques) |
| Tipografia de apoio | Myriad Pro (corpo de texto) |
| Estilo visual | Dark mode predominante, detalhes em laranja, espaço negativo |
| Elemento gráfico | Pictograma "g" como grafismo decorativo e pattern de fundo |

**Diretrizes:**
- Usar o pictograma "g" como elemento decorativo em seções de fundo
- Linha laranja fina acima dos títulos de seção (como no guideline)
- Botões CTA sempre em laranja `#ff4e00` com texto branco
- Cards com borda inferior laranja ou hover com destaque laranja

---

## 2. Arquitetura do Site (Sitemap)

```
grafo.studio/
├── / (Home)
├── /sobre
├── /servicos
│   ├── /servicos/branding
│   ├── /servicos/trafego-pago
│   ├── /servicos/social-media
│   ├── /servicos/desenvolvimento-web
│   └── /servicos/tecnologia
├── /portfolio
└── /contato
```

**Navegação (navbar):**
Logo | Home | Sobre | Serviços | Portfólio | Contato | [CTA: Solicitar Orçamento →]

---

## 3. Estrutura Detalhada por Página

---

### HOME

#### Seção 1 — Hero (tela cheia, dark)
- **Fundo:** Dark `#191919` com pattern do "g" em opacidade baixa
- **Animação:** Texto com reveal por letras (efeito typewriter ou split text)
- **Headline:** `"Sua empresa não precisa apenas aparecer."`
- **Subheadline em laranja:** `"Precisa ser lembrada."`
- **Parágrafo:** "Unimos estratégia, criatividade e tecnologia para transformar empresas comuns em marcas que crescem com consistência."
- **CTAs:** [Solicitar Orçamento →] [Ver Portfólio]
- **Elemento:** Logo animado / partículas / linha laranja em movimento

#### Seção 2 — Números / Prova Social
- **Fundo:** Laranja `#ff4e00`
- **Conteúdo:** 3 métricas em destaque (ex: "3 Pilares de Atuação", "5 Etapas do Método", "100% Estratégia Personalizada")
- **Animação:** Contador animado ao entrar na viewport

#### Seção 3 — Quem é a Grafo
- **Layout:** Texto à esquerda + elemento visual (pictograma "g" animado ou ilustração) à direita
- **Título:** `| Quem é a Grafo?`
- **Texto:** "Somos uma agência de marketing criada para transformar empresas comuns em marcas lembradas. Nosso foco não é apenas criar posts ou anúncios — trabalhamos para gerar crescimento real, posicionamento forte e mais vendas."
- **Destaque:** `"Não vendemos tarefas. Entregamos crescimento e previsibilidade para o seu negócio."`

#### Seção 4 — O Que Fazemos (serviços em cards)
- **Título:** `| O Que Fazemos`
- **Layout:** Grid de 3 cards (linha 1) + 2 cards centralizados (linha 2)
- **Cards:**
  1. Branding ⭐ (carro-chefe — card em destaque maior)
  2. Tráfego Pago
  3. Social Media & Design
  4. Desenvolvimento Web
  5. Tecnologia & Dados
- **Cada card:** Ícone laranja + título + descrição curta + link "Saiba mais →"
- **Animação:** Cards com entrada em stagger (um após o outro)

#### Seção 5 — Método GRAFO 360°
- **Fundo:** Dark
- **Título:** `| Método GRAFO 360°`
- **Subtítulo:** "Não vendemos tarefas. Entregamos crescimento baseado em 5 pilares:"
- **Layout:** 5 cards horizontais com letras G-R-A-F-O em laranja
  - **G** — Ganhar Atenção
  - **R** — Relacionar com o Público
  - **A** — Atrair Clientes
  - **F** — Fidelizar
  - **O** — Otimizar Resultados
- **Animação:** Cards aparecem em sequência com linha conectando-os

#### Seção 6 — Para Quem Trabalhamos
- **Título:** `| Para Quem Trabalhamos`
- **Layout:** Grid de ícones com segmentos
  - Restaurantes | Clínicas | Advogados | Estéticas | Lojas | Prestadores de Serviço | Empresas Locais e Regionais
- **Animação:** Ícones com hover em laranja

#### Seção 7 — Pacotes em Destaque
- **Título:** `| Pacotes Mais Escolhidos`
- **Layout:** 3 cards de pricing
  - **Presença Local** — R$ 1.990/mês (Tráfego + Conteúdo)
  - **Crescimento Regional** — R$ 2.790/mês ⭐ MAIS INDICADO (Tráfego + Social + Landing Page)
  - **Domínio Digital** — R$ 3.990/mês (Operação Completa + CRM)
- **CTA em cada card:** [Quero esse plano →] → abre WhatsApp

#### Seção 8 — Por Que Escolher a Grafo?
- **Layout:** Lista de diferenciais com ícone de check laranja
  - ✅ Atendimento próximo e humanizado
  - ✅ Estratégia 100% personalizada
  - ✅ Equipe especialista em cada área
  - ✅ Foco absoluto em vendas
  - ✅ Crescimento sustentável do negócio

#### Seção 9 — CTA Final
- **Fundo:** Dark com gradiente laranja sutil
- **Headline:** `"O próximo passo é seu."`
- **Subheadline:** "Podemos montar o plano ideal para sua empresa e mostrar como crescer no digital com clareza."
- **CTA:** [Solicitar Orçamento no WhatsApp →]

#### Seção 10 — Feed Instagram
- **Título:** `| @grafostudio.mkt`
- **Layout:** Grid com últimas 6 fotos do Instagram
- **Link:** "Ver mais no Instagram →"

---

### SOBRE

#### Estrutura:
1. **Hero:** Título "Quem é a Grafo?" com fundo dark e linha laranja
2. **Nossa História:** Fundada em 2026 — textos sobre origem e propósito
3. **Missão, Visão e Valores:** 3 cards
   - Missão: "Conectar pontos, ideias e pessoas através de soluções criativas..."
   - Visão: "Tornar-se sinônimo de excelência na interseção entre arte, estratégia e comunicação visual até 2028."
   - Valores: Confiança, Profissionalismo, Comprometimento
4. **Nossa Personalidade:** 3 blocos — Inteligente / Precisa / Elegante
5. **O Método GRAFO 360°** (resumido, com link para seção do home)
6. **CTA:** [Vamos trabalhar juntos →]

---

### SERVIÇOS

#### Página principal de serviços:
- Hero com título e listagem visual dos 5 serviços
- Cada serviço com card clicável levando à página individual

#### Páginas individuais de cada serviço:

**Branding (carro-chefe)**
- Hero com título e descrição forte
- O que está incluso
- Processo de trabalho (etapas visuais)
- CTA para orçamento

**Tráfego Pago**
- Descrição do serviço
- Tabela de planos: Start R$1.200 / Growth R$1.800
- Plataformas: Meta Ads + Google Ads
- CTA para orçamento

**Social Media & Design**
- Descrição
- Planos: Essencial R$900 / Profissional R$1.300 / Premium R$1.800
- O que está incluso em cada plano
- CTA

**Desenvolvimento Web**
- Tabela: Landing Page R$1.500 / Landing Premium R$2.300 / Site Institucional R$3.000+ / E-Commerce R$5.000+
- CTA

**Tecnologia & Dados**
- CRM Comercial R$1.800+ / Automação WhatsApp R$1.500+ / Dashboard Power BI R$2.500+
- CTA

---

### PORTFÓLIO

#### Estrutura:
- **Hero:** "Do traço à marca. Conheça nossos trabalhos."
- **Filtros:** Todos | Branding | Social Media | Desenvolvimento | Tráfego
- **Grid de projetos:** Cards com hover revelando detalhes (nome do projeto, segmento, serviço)
- **Estado inicial (sem cases):** Seção com texto "Em breve novos projetos" + imagens de mockup/placeholder elegantes
- **CTA:** "Quer seu projeto aqui? →"

*Nota: Portfólio começa vazio e vai sendo preenchido conforme projetos forem entregues.*

---

### CONTATO

#### Estrutura:
1. **Hero:** "Vamos crescer juntos?" — fundo dark
2. **Duas colunas:**
   - **Esquerda:** Informações de contato
     - WhatsApp: botão direto
     - Instagram: @grafostudio.mkt
     - Email (se houver)
   - **Direita:** Formulário de orçamento
     - Nome
     - Empresa
     - WhatsApp
     - Serviço de interesse (dropdown)
     - Mensagem / Como podemos ajudar?
     - [Enviar para WhatsApp →]
3. **Abaixo do formulário:** Mapa ou área de atuação (Nacional — com foco local)

---

## 4. Funcionalidades Técnicas

| Funcionalidade | Detalhe |
|---|---|
| Botão WhatsApp fixo | Flutuante no canto inferior direito, sempre visível |
| Formulário de orçamento | Envia para WhatsApp via API ou formulário com notificação por email |
| Feed Instagram | Integração via API do Instagram (últimas 6–9 fotos) |
| Animações | Scroll-triggered, reveal de texto, stagger de cards, contador de números |
| SEO básico | Meta tags, Open Graph, sitemap.xml, robots.txt |
| Analytics | Google Analytics + Meta Pixel (para remarketing) |
| Responsivo | Mobile-first, adaptado para todos os tamanhos de tela |
| Performance | Imagens otimizadas, lazy loading, score mínimo 90 no Lighthouse |

---

## 5. Copywriting — Textos-Chave

### Hero (Home)
> "Sua empresa não precisa apenas aparecer.  
> **Precisa ser lembrada.**"

### Sobre a Grafo
> "Somos uma agência de marketing criada para transformar empresas comuns em marcas lembradas. Nosso foco vai além de posts ou anúncios — trabalhamos para gerar crescimento real, posicionamento forte e mais vendas. Unimos estratégia, criatividade e tecnologia para entregar soluções completas para empresas que desejam evoluir no digital."

### Propósito
> *"Não vendemos tarefas. Entregamos crescimento e previsibilidade para o seu negócio."*

### CTA Principal
> "Solicitar Orçamento no WhatsApp →"

### CTA Secundário
> "Ver Portfólio"

---

## 6. Stack Tecnológica Recomendada

| Opção | Ferramenta | Motivo |
|---|---|---|
| **Recomendada** | **Next.js + Tailwind CSS** | Performance, SEO, animações com Framer Motion, controle total |
| Alternativa 1 | Webflow | Sem código, visual rico, animações nativas — bom para quem vai editar sozinho |
| Alternativa 2 | WordPress + Elementor | Mais comum, fácil edição, plugins prontos |

**Para o perfil da Grafo (agência com equipe técnica + foco em performance visual):**  
→ **Next.js + Tailwind + Framer Motion** é a escolha ideal.

**Bibliotecas de animação:**
- Framer Motion (animações de scroll e transições)
- GSAP (animações mais complexas como o reveal de texto)
- Lenis (scroll suave)

**Hospedagem recomendada:** Vercel (gratuito para Next.js, CDN global, deploy automático)

---

## 7. Cronograma Sugerido

| Fase | Atividade | Prazo estimado |
|---|---|---|
| 1 | Definição de referências visuais + aprovação do planejamento | 1 semana |
| 2 | Wireframe (estrutura das páginas sem design) | 1 semana |
| 3 | Design no Figma (todas as páginas, desktop + mobile) | 2 semanas |
| 4 | Desenvolvimento (codificação do site) | 3 semanas |
| 5 | Conteúdo (copywriting + imagens/mockups) | Paralelo à fase 4 |
| 6 | Testes, ajustes e SEO | 1 semana |
| 7 | Lançamento | — |
| **Total** | | **~8 semanas** |

---

## 8. Pendências — O Que Ainda Precisa Ser Definido

- [ ] Referências de sites admirados (usuário vai enviar)
- [x] Domínio: em processo de registro
- [x] Email: contato.grafo.studio@gmail.com
- [x] WhatsApp: número genérico por ora (+55 11 99999-9999) — trocar após
- [x] Plataforma: Next.js + Tailwind CSS + Framer Motion
- [x] Hospedagem: Vercel
- [ ] Fotos da equipe ou do espaço de trabalho (para a página Sobre)
- [ ] Primeiros projetos do portfólio (mesmo que sejam cases internos ou conceituais)

---

## 9. Prioridade de Implementação

Para lançar rápido e com impacto, a ordem recomendada é:

1. **Home** (página principal — maior prioridade)
2. **Contato** (formulário + WhatsApp)
3. **Serviços** (página geral + individuais)
4. **Sobre**
5. **Portfólio** (pode começar com placeholder elegante)
