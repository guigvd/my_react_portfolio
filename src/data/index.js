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
  stripe
} from "../assets";

import {
  coffeeShop,
  evogym,
  hoobank,
  cep,
  ecommer,
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
      "Estudo e pratico HTML, essa tecnologia está presente na maioria dos meus projetos.",
    icon: html,
  },
  {
    id: 2,
    title: "CSS",
    subtitle:
      "Igual ao html, o css também está na maioria dos meus projetos, fazendo uso de seletores, Flexbox, responsividade entre outras.",
    icon: css,
  },
  {
    id: 3,
    title: "JavaScript",
    subtitle:
      "Estudo e venho praticado JavaScript e suas funcionalidades como: fluxo de controle, estrutura de repetições, orientação a objetos, JSON, API entre outras.",
    icon: js,
  },
  {
    id: 4,
    title: "React",
    subtitle:
      "Estudo e pratico a biblioteca React e suas funcionalidades como: hooks, components, React Router , forms entre outras.",
    icon: react,
  },
  {
    id: 5,
    title: "Angular",
    subtitle:
      "Estudo e pratico o framework Angular e suas fucionalidades como: components, filter e pipes, property binding, diretivas entre outras.",
    icon: angular,
  },
  {
    id: 6,
    title: "Next.Js",
    subtitle:
      "Eu utilizo o Next.js como framework para desenvolvimento de aplicações web em React. Ele oferece diversas funcionalidades e benefícios para desenvolvedores, permitindo criar aplicações complexas de forma mais rápida e eficiente.",
    icon: nextjs,
  },
  {
    id: 7,
    title: "Git",
    subtitle:
      "Uso o git para alocar e controlar versões dos meus projetos no Github.",
    icon: git,
  },
  {
    id: 8,
    title: "TypeScript",
    subtitle:
      "Uso TypeScript quando preciso desenvolver aplicações mais complexas, pois tem grande potencial de detectar erros durante o desenvolvimento, tornando assim mais seguro e ágil a aplicação.",
    icon: ts,
  },
  {
    id: 9,
    title: "Node.js",
    subtitle:
      "Uso o Node.js para processar, executar e desenvolver aplicações em JavaScript.",
    icon: nodejs,
  },
  {
    id: 10,
    title: "Java",
    subtitle:
      "Estudo e pratico Java como linguagem de backend e suas funcionalidades como: fluxo de controle, orientação a objetos, herança, polimorfismo entre oturas.",
    icon: java,
  },
  {
    id: 11,
    title: "MongoDB",
    subtitle:
      "Utilizo frequentemente o MongoDB como banco de dados, pois ele oferece uma excelente opção para aplicações que requerem escalabilidade e flexibilidade.",
    icon: mongodb,
  },
  {
    id: 12,
    title: "MySQL",
    subtitle:
      "Uso o MySQL para criar bancos de dados e executar comandos como o insert, delete, update e select.",
    icon: mysql,
  },
  {
    id: 13,
    title: "Stripe",
    subtitle:
      "Stripe é uma plataforma de pagamentos online líder no mercado, que oferece uma ampla gama de ferramentas e recursos para ajudar empresas a gerenciar seus pagamentos online com segurança e eficiência.",
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
    title: "ECOMMER",
    subtitle:
      "Uma loja online de camisas na qual contem uma lista com os itens, um carrinho ao qual adicionar os items e uma seção de checkout.",
    icon: ecommer,
    github: "https://github.com/guigvd/react-ecommer",
    deploy: null,
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
