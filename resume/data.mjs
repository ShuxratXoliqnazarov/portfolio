// Resume content for both languages. Edit here, then run: npm run resume

const links = {
  email: "kholiqnazarovshuhrat@gmail.com",
  phone: "+992 87 866 66 80",
  phoneHref: "tel:+992878666680",
  telegram: "https://t.me/theshuxrat_o4",
  linkedin: "https://www.linkedin.com/in/shuhrat-kholiqnazarov-179903373/",
  github: "https://github.com/ShuxratXoliqnazarov",
  portfolio: "https://shuhrat-kholiqnazarov.vercel.app",
};

const skills = {
  core: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  frameworks: ["React", "Next.js", "Vite"],
  styling: ["Tailwind CSS", "SASS / SCSS", "Material UI", "Ant Design", "Chakra UI", "Framer Motion"],
  state: ["Zustand", "Redux Toolkit", "MobX", "Jotai"],
  backend: ["REST API", "JWT", "Supabase", "NestJS", "PostgreSQL", "Git & GitHub", "Vercel"],
};

const stacks = {
  welfox: "React · TypeScript · Vite · Tailwind CSS · i18next · NestJS · PostgreSQL · Prisma",
  rentarena: "Next.js · TypeScript · Supabase · next-intl · Zustand · Tailwind CSS",
  villafenix: "React (Vite) · Zustand · Ant Design · Tailwind CSS · Leaflet",
  ormed: "React · Vite · Tailwind CSS · Framer Motion · Lenis",
  fastcart: "React · Zustand · Material UI · Tailwind CSS · Axios",
  instagram: "Next.js · Tailwind CSS · Material UI · i18next · Axios",
};

export const resumes = {
  en: {
    lang: "en",
    name: "Shuhrat Kholiqnazarov",
    role: "Front-End Developer",
    location: "Dushanbe, Tajikistan",
    links,
    labels: {
      contacts: "Contacts",
      skills: "Skills",
      languages: "Languages",
      summary: "Profile",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      portfolio: "Portfolio",
      live: "Live",
      code: "GitHub",
      admin: "Admin",
      stack: "Stack",
    },
    skillGroups: {
      core: "Core",
      frameworks: "Frameworks",
      styling: "UI & Styling",
      state: "State management",
      backend: "Backend & Tools",
    },
    skills,
    languages: [
      ["Tajik", "Native"],
      ["Russian", "Basic"],
      ["English", "Pre-Intermediate"],
    ],
    summary:
      "Front-end developer building fast, responsive and clean web products with React, Next.js and TypeScript. Launched WELFOX — a live e-commerce store with real online payments — plus client landing pages and team projects. Graduate of Softclub Academy, studying Software Engineering. I care about clean code, smooth UX and the details.",
    experience: [
      {
        title: "Full-Stack Developer",
        place: "WELFOX",
        url: "https://welfox.tj",
        urlLabel: "welfox.tj",
        period: "Sep 2026 — Present",
        bullets: [
          "Built and launched a live store for game top-ups in Tajikistan (Free Fire, PUBG Mobile, Mobile Legends, Telegram Stars & Premium)",
          "Developed the storefront: catalog, search, checkout, order tracking, RU / EN / TJ, dark and light themes",
          "Integrated SmartPay online payments (local banks, Visa / MasterCard) with payment webhooks",
          "Automated order delivery via a supplier API with hourly price synchronization",
          "Built the backend API and an admin panel for orders, pricing, catalog and support; deployed to a VPS with Nginx and HTTPS",
        ],
        stack: stacks.welfox,
      },
    ],
    projects: [
      {
        name: "RentArena",
        tag: "Sports field booking platform",
        text: "Online booking of mini-stadiums in Dushanbe: free slots in 30-minute steps, deposit payment, Telegram notifications for owners, owner and super-admin panels, RU / TJ / EN, dark mode.",
        stack: stacks.rentarena,
        links: [["Live", "https://rent-arena-d383.vercel.app/ru"], ["GitHub", "https://github.com/ShuxratXoliqnazarov/Rent-Arena"]],
      },
      {
        name: "Villa Fenix Expo",
        tag: "Production · multilingual exhibition platform",
        text: "Platform for onboarding business participants from many countries: registration and application flows, interactive map, international phone input, full internationalization.",
        stack: stacks.villafenix,
        links: [],
      },
      {
        name: "Ormed Premium",
        tag: "Clinic landing page",
        text: "Premium landing page for a plastic surgery center: editorial typography, motion design, smooth scrolling, services, results, FAQ and WhatsApp booking.",
        stack: stacks.ormed,
        links: [["Live", "https://ormed-premium.vercel.app"], ["GitHub", "https://github.com/ShuxratXoliqnazarov/Ormed-Premium"]],
      },
      {
        name: "Fast-Cart + Admin Panel",
        tag: "E-commerce · course project",
        text: "Online store with catalog, filters, product pages, wishlist, cart and JWT authentication, plus an admin dashboard for products, categories and orders.",
        stack: stacks.fastcart,
        links: [
          ["Store", "https://fast-cart-online-store-ivory.vercel.app"],
          ["Admin", "https://admin-panel-of-fast-cart.vercel.app"],
          ["GitHub", "https://github.com/ShuxratXoliqnazarov/FastCart-Online-Store"],
        ],
      },
      {
        name: "Instagram Clone",
        tag: "Team project",
        text: "Social network built in a team: profiles, posts, likes, comments, JWT authentication and multi-language support.",
        stack: stacks.instagram,
        links: [["Live", "https://clone-instagram-e14l.vercel.app"], ["GitHub", "https://github.com/ShuxratXoliqnazarov/clone_instagram"]],
      },
    ],
    education: [
      {
        title: "Front-End Development",
        place: "Softclub Academy",
        period: "Dec 2024 — Aug 2025",
        text: "Professional course: React, Next.js, TypeScript, state management, REST API, team projects.",
      },
      {
        title: "Software Engineering",
        place: "Technology University of Tajikistan",
        period: "2024 — Present",
        text: "Faculty of Programming Engineering.",
      },
    ],
  },

  ru: {
    lang: "ru",
    name: "Шухрат Холикназаров",
    role: "Front-End разработчик",
    location: "Душанбе, Таджикистан",
    links,
    labels: {
      contacts: "Контакты",
      skills: "Навыки",
      languages: "Языки",
      summary: "О себе",
      experience: "Опыт работы",
      projects: "Проекты",
      education: "Образование",
      portfolio: "Портфолио",
      live: "Сайт",
      code: "GitHub",
      admin: "Админка",
      stack: "Стек",
    },
    skillGroups: {
      core: "Основа",
      frameworks: "Фреймворки",
      styling: "UI и стили",
      state: "Стейт-менеджмент",
      backend: "Бэкенд и инструменты",
    },
    skills,
    languages: [
      ["Таджикский", "Родной"],
      ["Русский", "Базовый"],
      ["Английский", "Pre-Intermediate"],
    ],
    summary:
      "Front-end разработчик: создаю быстрые, адаптивные и аккуратные веб-продукты на React, Next.js и TypeScript. Запустил WELFOX — работающий интернет-магазин с реальной онлайн-оплатой, — а также лендинги для клиентов и командные проекты. Выпускник Softclub Academy, учусь на программного инженера. Мне важны чистый код, удобный UX и детали.",
    experience: [
      {
        title: "Full-Stack разработчик",
        place: "WELFOX",
        url: "https://welfox.tj",
        urlLabel: "welfox.tj",
        period: "Сен 2026 — сейчас",
        bullets: [
          "Разработал и запустил магазин доната для игроков в Таджикистане (Free Fire, PUBG Mobile, Mobile Legends, Telegram Stars и Premium)",
          "Сделал витрину: каталог, поиск, оформление и отслеживание заказа, RU / EN / TJ, тёмная и светлая темы",
          "Интегрировал онлайн-оплату SmartPay (местные банки, Visa / MasterCard) с webhook-уведомлениями",
          "Автоматизировал выдачу заказов через API поставщика и синхронизацию цен",
          "Написал бэкенд API и админ-панель (заказы, цены, каталог, поддержка); задеплоил на VPS с Nginx и HTTPS",
        ],
        stack: stacks.welfox,
      },
    ],
    projects: [
      {
        name: "RentArena",
        tag: "Бронирование спортивных полей",
        text: "Онлайн-бронь мини-стадионов Душанбе: свободное время с шагом 30 минут, оплата депозита, уведомления владельцам в Telegram, панели владельца и супер-админа, RU / TJ / EN, тёмная тема.",
        stack: stacks.rentarena,
        links: [["Сайт", "https://rent-arena-d383.vercel.app/ru"], ["GitHub", "https://github.com/ShuxratXoliqnazarov/Rent-Arena"]],
      },
      {
        name: "Villa Fenix Expo",
        tag: "Продакшн · мультиязычная платформа выставки",
        text: "Платформа для участников выставки из разных стран: регистрация и подача заявок, интерактивная карта, международный ввод телефона, полная интернационализация.",
        stack: stacks.villafenix,
        links: [],
      },
      {
        name: "Ormed Premium",
        tag: "Лендинг клиники",
        text: "Премиальный лендинг для центра пластической хирургии: элегантная типографика, анимации, плавный скролл, услуги, результаты, FAQ и запись через WhatsApp.",
        stack: stacks.ormed,
        links: [["Сайт", "https://ormed-premium.vercel.app"], ["GitHub", "https://github.com/ShuxratXoliqnazarov/Ormed-Premium"]],
      },
      {
        name: "Fast-Cart + админ-панель",
        tag: "Магазин · проект курса",
        text: "Магазин с каталогом, фильтрами, страницами товаров, избранным, корзиной и JWT-авторизацией, плюс админ-панель для товаров, категорий и заказов.",
        stack: stacks.fastcart,
        links: [
          ["Магазин", "https://fast-cart-online-store-ivory.vercel.app"],
          ["Админка", "https://admin-panel-of-fast-cart.vercel.app"],
          ["GitHub", "https://github.com/ShuxratXoliqnazarov/FastCart-Online-Store"],
        ],
      },
      {
        name: "Клон Instagram",
        tag: "Командный проект",
        text: "Соцсеть, сделанная в команде: профили, посты, лайки, комментарии, JWT-авторизация и мультиязычность.",
        stack: stacks.instagram,
        links: [["Сайт", "https://clone-instagram-e14l.vercel.app"], ["GitHub", "https://github.com/ShuxratXoliqnazarov/clone_instagram"]],
      },
    ],
    education: [
      {
        title: "Front-End разработка",
        place: "Softclub Academy",
        period: "Дек 2024 — Авг 2025",
        text: "Профессиональный курс: React, Next.js, TypeScript, стейт-менеджмент, REST API, командные проекты.",
      },
      {
        title: "Программная инженерия",
        place: "Технологический университет Таджикистана",
        period: "2024 — сейчас",
        text: "Факультет программной инженерии.",
      },
    ],
  },
};
