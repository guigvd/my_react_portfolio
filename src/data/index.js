// IMPORT IMG
import {
  html,
  css,
  js,
  react,
  angular,
  git,
  nodejs,
  ts,
  java,
  mysql,
  mongodb,
  nextjs,
  stripe,
  python,
  tailwindcss
} from "../assets";

import {
  coffeeShop,
  evogym,
  hoobank,
  cep,
  brilhoFino,
  pedidoNamoro,
  sociopedia,
  store,
  weather,
} from "../assets";

// SKILLS
export const skills = [
  {
    id: 1,
    title: "Html",
    subtitle:
      "Sou especializado em HTML, a linguagem base da web. Crio páginas web com estrutura clara e semântica para garantir a melhor experiência do usuário.",
    icon: html,
  },
  {
    id: 2,
    title: "CSS",
    subtitle:
      "Com habilidades em seletores, Flexbox, e técnicas de responsividade, o CSS é uma ferramenta essencial em meus projetos de desenvolvimento web.",
    icon: css,
  },
  {
    id: 3,
    title: "JavaScript",
    subtitle:
      "Com sólido conhecimento em fluxo de controle, estruturas de repetição, orientação a objetos, JSON, APIs, e outras funcionalidades do JavaScript, sou capaz de criar soluções dinâmicas e interativas para projetos web.",
    icon: js,
  },
  {
    id: 4,
    title: "React",
    subtitle:
      "Sólida experiência em desenvolvimento com a biblioteca React, possuo habilidades em diversos aspectos da biblioteca, como o uso de hooks, Redux, criação de components reutilizáveis, construção de formulários e muito mais.",
    icon: react,
  },
  {
    id: 14,
    title: "Tailwind CSS",
    subtitle:
      "Sólida experiência com o Tailwind CSS, que é um framework de CSS focado em utilidade. Ele fornece diversas classes utilitárias, simplificando assim a criação de interfaces de usuário.",
    icon: tailwindcss,
  },
  {
    id: 5,
    title: "Angular",
    subtitle:
      "Experiência básica em desenvolvimento com Angular, possuo habilidades em diversas funcionalidades do framework, como criação de components, uso de filter e pipes, property binding e diretivas",
    icon: angular,
  },
  {
    id: 6,
    title: "Next.Js",
    subtitle:
      "Com sólida experiência em desenvolvimento com Next.js, posso aproveitar ao máximo as funcionalidades que o framework oferece para criar aplicações web robustas e eficientes em React.",
    icon: nextjs,
  },
  {
    id: 7,
    title: "Git",
    subtitle:
      "Conhecimento básico em controle de versão de código com Git, sou capaz de gerenciar e compartilhar meus projetos de forma eficiente.",
    icon: git,
  },
  {
    id: 8,
    title: "TypeScript",
    subtitle:
      "Minha sólida experiência em TypeScript permite a criação de aplicações web mais seguras e eficientes, graças à detecção de erros durante o desenvolvimento, resultando em soluções ágeis.",
    icon: ts,
  },
  {
    id: 9,
    title: "Node.js",
    subtitle:
      "Com experiência em desenvolvimento com Node.js, sou capaz de criar e executar aplicações JavaScript no lado do servidor.",
    icon: nodejs,
  },
  {
    id: 10,
    title: "Java",
    subtitle:
      "Conhecimento básico em desenvolvimento com Java, possuo habilidades em diversas funcionalidades da linguagem, como fluxo de controle, orientação a objetos, herança, polimorfismo e muito mais.",
    icon: java,
  },
  {
    id: 15,
    title: "Python",
    subtitle:
      "Tenho conhecimento básico em Python e estou estudando a linguagem para usá-la em desenvolvimento de aplicativos complexos e análise de dados, devido à sua ampla utilidade nesses campos.",
    icon: python,
  },
  {
    id: 11,
    title: "MongoDB",
    subtitle:
      "Com grande experiência em desenvolvimento com MongoDB, utilizo frequentemente este banco de dados para aplicações web que requerem escalabilidade e flexibilidade.",
    icon: mongodb,
  },
  {
    id: 12,
    title: "MySQL",
    subtitle:
      "Possuo conhecimento básico em desenvolvimento com MySQL, sou capaz de criar bancos de dados relacionais e executar comandos como insert, delete, update e select.",
    icon: mysql,
  },
  {
    id: 13,
    title: "Stripe",
    subtitle:
      "Com experiência em integração com o Stripe. A plataforma oferece recursos como gerenciamento de assinaturas, pagamentos com cartão de crédito e débito, transferências bancárias e muito mais.",
    icon: stripe,
  },
];

// PROJECTS
export const projects = [
  {
    id: 1,
    title: "Sociopedia",
    subtitle:
      "Uma rede social na qual você pode registrar um usuário com imagem, fazer login com ele, adicionar amigos, publicar e possui temas claro/escuro.",
    icon: sociopedia,
    github: "https://github.com/guigvd/react-sociopedia",
    deploy: null,
  },
  {
    id: 2,
    title: "EVOGYM",
    subtitle:
      "Uma landing page sobre uma academia que contém informações sobre os benefícios, as classes e uma seção de contato.",
    icon: evogym,
    github: "https://github.com/guigvd/gym-app",
    deploy: "https://guigvd-evogym.netlify.app/",
  },
  {
    id: 3,
    title: "Brilho Fino",
    subtitle:
      "Projeto de e-commerce feito em Next.js e JavaScript, com um carrossel de itens, lista filtrável, página de detalhes dos produtos, carrinho de compras com resumo dos itens adicionados e página de checkout integrada com o Stripe.",
    icon: brilhoFino,
    github: "https://github.com/guigvd/next-brilho_fino",
    deploy: "https://next-brilho-fino.vercel.app/",
  },

  {
    id: 4,
    title: "Hoobank",
    subtitle:
      "Uma landing page sobre um banco que contém informações sobre o banco ,seus produtos e melhores acordos.",
    icon: hoobank,
    github: "https://github.com/guigvd/hoobank",
    deploy: "https://guigvd.github.io/hoobank/",
  },
  {
    id: 5,
    title: "Store",
    subtitle:
      "Um projeto de uma loja que contem informações sobre seus produtos e é possível adicionar ao carrinho para finalizar a compra.",
    icon: store,
    github: "https://github.com/guigvd/store",
    deploy: "https://guigvd-store.netlify.app/",
  },
  {
    id: 6,
    title: "Coffee Shop",
    subtitle:
      "Uma landing page sobre uma loja de café que contem várias informações sobre a loja, seus produtos, review de seus clientes entre outras.",
    icon: coffeeShop,
    github: "https://github.com/guigvd/coffee-shop",
    deploy: "https://guigvd.github.io/coffee-shop/",
  },
  {
    id: 7,
    title: "Busca CEP",
    subtitle:
      "Um app que consome a API ViaCEP para buscar e trazer informações sobre determinado cep.",
    icon: cep,
    github: "https://github.com/guigvd/search-cep",
    deploy: "https://guigvd.github.io/search-cep/",
  },

  {
    id: 8,
    title: "Pedido de namoro",
    subtitle:
      "Um pedido de namoro irrecusável.",
    icon: pedidoNamoro,
    github: "https://github.com/guigvd/pedido-namoro",
    deploy: "https://guigvd.github.io/pedido-namoro/",
  },

  {
    id: 9,
    title: "Clima tempo",
    subtitle:
      "Um app que consome duas APIs para buscar o clima e temperatura de determinada cidade.",
    icon: weather,
    github: "https://github.com/guigvd/weather-app",
    deploy: "https://guigvd.github.io/weather-app/",
  },
];
