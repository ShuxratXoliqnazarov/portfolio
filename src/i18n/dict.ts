export type Lang = "en" | "ru";

export const dict = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      status: "Open to work & freelance",
      hi: "Hi, I'm",
      name: "Shuhrat Kholiqnazarov",
      role: "Front-End Developer",
      tagline:
        "I build fast, responsive and clean web products with React and Next.js — from landing pages for local businesses to full e-commerce with real payments.",
      ctaProjects: "View projects",
      ctaContact: "Contact me",
      resume: "Download CV",
      location: "Dushanbe, Tajikistan",
    },
    about: {
      label: "About",
      title: "Turning ideas into working products",
      p1: "I'm a front-end developer from Dushanbe. I graduated from the Front-End course at Softclub Academy and study Software Engineering at the Technology University of Tajikistan.",
      p2: "I care about the details: clean code, smooth animations and interfaces that feel good on every screen. My projects are used by real people — from a game top-up store with online payments to a sports field booking platform.",
      stats: [
        { value: "6+", label: "projects shipped" },
        { value: "1", label: "live store with real payments" },
        { value: "3", label: "UI languages in my apps" },
      ],
      languages: "Languages",
      langList: "Tajik — native · Russian · English",
    },
    projects: {
      label: "Projects",
      title: "Selected work",
      subtitle: "Real products and team projects — each one live and clickable.",
      live: "Live",
      code: "Code",
      privateRepo: "Private repo",
      featured: "Featured",
      noPreview: "Preview coming soon",
    },
    skills: {
      label: "Skills",
      title: "My toolbox",
      groups: {
        core: "Core",
        frameworks: "Frameworks",
        styling: "UI & Styling",
        state: "State management",
        backend: "Backend & Tools",
      },
    },
    education: {
      label: "Education",
      title: "Where I learned",
      items: [
        {
          period: "Dec 2024 — Aug 2025",
          title: "Front-End Development",
          place: "Softclub Academy",
          text: "Intensive professional course: React, Next.js, state management, REST APIs, team projects (Instagram clone, Fast-Cart store).",
        },
        {
          period: "2024 — present",
          title: "Software Engineering",
          place: "Technology University of Tajikistan",
          text: "Faculty of Programming Engineering.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's build something together",
      text: "Looking for a front-end developer or need a website for your business? Write to me — I usually reply within a few hours.",
      telegram: "Message on Telegram",
      email: "Send an email",
    },
    footer: {
      built: "Built with Next.js & Tailwind CSS",
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      projects: "Проекты",
      skills: "Навыки",
      education: "Обучение",
      contact: "Контакты",
    },
    hero: {
      status: "Открыт к работе и фрилансу",
      hi: "Привет, я",
      name: "Шухрат Холикназаров",
      role: "Front-End разработчик",
      tagline:
        "Создаю быстрые, адаптивные и аккуратные веб-продукты на React и Next.js — от лендингов для местного бизнеса до полноценных магазинов с реальной оплатой.",
      ctaProjects: "Смотреть проекты",
      ctaContact: "Связаться",
      resume: "Скачать резюме",
      location: "Душанбе, Таджикистан",
    },
    about: {
      label: "Обо мне",
      title: "Превращаю идеи в работающие продукты",
      p1: "Я front-end разработчик из Душанбе. Окончил курс Front-End в Softclub Academy и учусь на программного инженера в Технологическом университете Таджикистана.",
      p2: "Мне важны детали: чистый код, плавные анимации и интерфейсы, которыми удобно пользоваться на любом экране. Моими проектами пользуются реальные люди — от магазина доната с онлайн-оплатой до платформы бронирования спортивных полей.",
      stats: [
        { value: "6+", label: "готовых проектов" },
        { value: "1", label: "магазин с реальной оплатой" },
        { value: "3", label: "языка интерфейса в моих приложениях" },
      ],
      languages: "Языки",
      langList: "Таджикский — родной · Русский · Английский",
    },
    projects: {
      label: "Проекты",
      title: "Избранные работы",
      subtitle: "Реальные продукты и командные проекты — все можно открыть и потыкать.",
      live: "Сайт",
      code: "Код",
      privateRepo: "Закрытый репозиторий",
      featured: "Главный",
      noPreview: "Превью скоро",
    },
    skills: {
      label: "Навыки",
      title: "Мой стек",
      groups: {
        core: "Основа",
        frameworks: "Фреймворки",
        styling: "UI и стили",
        state: "Стейт-менеджмент",
        backend: "Бэкенд и инструменты",
      },
    },
    education: {
      label: "Обучение",
      title: "Где я учился",
      items: [
        {
          period: "Дек 2024 — Авг 2025",
          title: "Front-End разработка",
          place: "Softclub Academy",
          text: "Интенсивный профессиональный курс: React, Next.js, стейт-менеджмент, REST API, командные проекты (клон Instagram, магазин Fast-Cart).",
        },
        {
          period: "2024 — сейчас",
          title: "Программная инженерия",
          place: "Технологический университет Таджикистана",
          text: "Факультет программной инженерии.",
        },
      ],
    },
    contact: {
      label: "Контакты",
      title: "Давайте сделаем что-то крутое",
      text: "Ищете front-end разработчика или нужен сайт для бизнеса? Напишите мне — обычно отвечаю в течение пары часов.",
      telegram: "Написать в Telegram",
      email: "Написать на почту",
    },
    footer: {
      built: "Сделано на Next.js и Tailwind CSS",
    },
  },
} as const;

export type Dict = (typeof dict)[Lang];
