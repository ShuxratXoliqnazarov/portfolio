import type { Lang } from "@/i18n/dict";

export const contacts = {
  email: "kholiqnazarovshuhrat@gmail.com",
  phone: "+992 87 866 66 80",
  phoneHref: "tel:+992878666680",
  telegram: "https://t.me/theshuxrat_o4",
  telegramHandle: "@theshuxrat_o4",
  whatsapp: "https://wa.me/992878666680",
  instagram: "https://instagram.com/shuxrat__pm",
  instagramHandle: "@shuxrat__pm",
  linkedin: "https://www.linkedin.com/in/shuhrat-kholiqnazarov-179903373/",
  github: "https://github.com/ShuxratXoliqnazarov",
};

type Localized = Record<Lang, string>;

export type Project = {
  id: string;
  title: string;
  tag: Localized;
  description: Localized;
  stack: string[];
  image?: string;
  live?: string;
  github?: string;
  privateRepo?: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "welfox",
    title: "WELFOX",
    featured: true,
    tag: { en: "Production · Fullstack", ru: "Продакшн · Fullstack" },
    description: {
      en: "Game top-up store for Tajikistan: Free Fire, PUBG Mobile, Mobile Legends, Telegram Stars & Premium. Real online payments via SmartPay (Alif, Dushanbe City, Eskhata, Visa/MasterCard), automatic delivery through a supplier API, live order tracking and hourly price sync.",
      ru: "Магазин доната для игроков в Таджикистане: Free Fire, PUBG Mobile, Mobile Legends, Telegram Stars и Premium. Реальная онлайн-оплата через SmartPay (Алиф, Душанбе Сити, Эсхата, Visa/MasterCard), автоматическая выдача через API поставщика, отслеживание заказов и ежечасная синхронизация цен.",
    },
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "i18next", "NestJS", "PostgreSQL", "Prisma"],
    image: "/projects/welfox.png",
    live: "https://welfox.tj/",
    privateRepo: true,
  },
  {
    id: "rentarena",
    title: "RentArena",
    featured: true,
    tag: { en: "Booking platform", ru: "Платформа бронирования" },
    description: {
      en: "Online booking of mini-stadiums and futsal halls in Dushanbe. Free time slots in 30-minute steps, deposit payment, RU / TJ / EN, dark mode, Telegram notifications for owners and a super-admin panel.",
      ru: "Онлайн-бронирование мини-стадионов и футзалов Душанбе. Свободное время с шагом 30 минут, оплата депозита, RU / TJ / EN, тёмная тема, уведомления владельцам в Telegram и супер-админ панель.",
    },
    stack: ["Next.js", "TypeScript", "Supabase", "next-intl", "Zustand", "Tailwind CSS"],
    image: "/projects/rentarena.png",
    live: "https://rent-arena-d383.vercel.app/ru",
    github: "https://github.com/ShuxratXoliqnazarov/Rent-Arena",
  },
  {
    id: "ormed",
    title: "Ormed Premium",
    featured: true,
    tag: { en: "Landing page", ru: "Лендинг" },
    description: {
      en: "Premium landing page for a plastic surgery center in Dushanbe: elegant typography, smooth scroll and motion design, services, results, FAQ and WhatsApp booking.",
      ru: "Премиальный лендинг для центра пластической хирургии в Душанбе: элегантная типографика, плавный скролл и анимации, услуги, результаты, FAQ и запись через WhatsApp.",
    },
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lenis"],
    image: "/projects/ormed.png",
    live: "https://ormed-premium.vercel.app/",
    github: "https://github.com/ShuxratXoliqnazarov/Ormed-Premium",
  },
  {
    id: "villafenix",
    title: "Villa Fenix Expo",
    tag: { en: "Production · Multilingual", ru: "Продакшн · Мультиязычный" },
    description: {
      en: "Production exhibition platform for onboarding business participants from many countries: registration and application flows, interactive map, international phone input and full internationalization.",
      ru: "Продакшн-платформа выставки для участников из разных стран: регистрация и подача заявок, интерактивная карта, международный ввод телефона и полная интернационализация.",
    },
    stack: ["React", "Vite", "Zustand", "Ant Design", "Tailwind CSS", "Leaflet"],
    live: "https://expophoenix.com/",
  },
  {
    id: "fastcart",
    title: "Fast-Cart",
    tag: { en: "E-commerce", ru: "Интернет-магазин" },
    description: {
      en: "Online store with product listing, filtering, cart and JWT authentication. Responsive design, sliders and toast notifications.",
      ru: "Интернет-магазин с каталогом, фильтрами, корзиной и JWT-авторизацией. Адаптивный дизайн, слайдеры и уведомления.",
    },
    stack: ["React", "Zustand", "Material UI", "Tailwind CSS", "Axios", "Swiper"],
    image: "/projects/fastcart.png",
    live: "https://fast-cart-online-store-ivory.vercel.app/",
    github: "https://github.com/ShuxratXoliqnazarov/FastCart-Online-Store",
  },
  {
    id: "fastcart-admin",
    title: "Fast-Cart Admin",
    tag: { en: "Dashboard", ru: "Админ-панель" },
    description: {
      en: "Admin dashboard for the Fast-Cart store: products, categories and orders management with sales analytics.",
      ru: "Админ-панель магазина Fast-Cart: управление товарами, категориями и заказами, аналитика продаж.",
    },
    stack: ["React", "Zustand", "Material UI"],
    image: "/projects/fastcart-admin.png",
    live: "https://admin-panel-of-fast-cart.vercel.app/",
    github: "https://github.com/ShuxratXoliqnazarov/admin-panel-of-FastCart",
  },
  {
    id: "instagram",
    title: "Instagram Clone",
    tag: { en: "Team project", ru: "Командный проект" },
    description: {
      en: "Social network built in a team: profiles, posts, likes, comments, JWT authentication and multi-language support.",
      ru: "Соцсеть, сделанная в команде: профили, посты, лайки, комментарии, JWT-авторизация и мультиязычность.",
    },
    stack: ["Next.js", "Tailwind CSS", "Material UI", "i18next", "Axios"],
    image: "/projects/instagram.png",
    live: "https://clone-instagram-e14l.vercel.app/",
    github: "https://github.com/ShuxratXoliqnazarov/clone_instagram",
  },
];

export const skills: Record<"core" | "frameworks" | "styling" | "state" | "backend", string[]> = {
  core: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  frameworks: ["React", "Next.js", "Vite"],
  styling: ["Tailwind CSS", "SASS / SCSS", "Material UI", "Ant Design", "Chakra UI", "Framer Motion"],
  state: ["Zustand", "Redux Toolkit", "MobX", "Jotai"],
  backend: ["REST API", "JWT", "Supabase", "NestJS", "PostgreSQL", "Git & GitHub", "Vercel"],
};
