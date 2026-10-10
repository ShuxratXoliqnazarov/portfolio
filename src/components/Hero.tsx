"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LangProvider";
import { contacts } from "@/data/site";
import { ArrowDown, ArrowUpRight, GitHubIcon, LinkedInIcon, PinIcon, TelegramIcon } from "./icons";

const ease = [0.22, 1, 0.36, 1] as const;
const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export function Hero() {
  const { t, lang } = useLang();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-32 pb-20 sm:px-6 md:min-h-svh md:grid-cols-[1.25fr_1fr] md:pt-24 md:pb-0">
        <div className="order-2 md:order-1">
          <motion.div
            {...fade(0)}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2 text-sm text-muted backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {t.hero.status}
          </motion.div>

          <motion.p {...fade(0.1)} className="mb-3 font-mono text-muted">
            {t.hero.hi}
          </motion.p>
          <motion.h1
            {...fade(0.15)}
            className="text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {t.hero.name}
          </motion.h1>
          <motion.p {...fade(0.25)} className="mt-4 text-2xl font-semibold text-accent sm:text-3xl">
            {t.hero.role}
          </motion.p>
          <motion.p {...fade(0.35)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {t.hero.tagline}
          </motion.p>

          <motion.div {...fade(0.45)} className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-fg transition-transform hover:scale-[1.03]"
            >
              {t.hero.ctaProjects}
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-line px-6 py-3.5 font-semibold transition-colors hover:border-fg/40 hover:bg-surface"
            >
              {t.hero.ctaContact}
            </a>
            <a
              href={`/resume-${lang}.pdf`}
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-3.5 font-semibold text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
            >
              {t.hero.resume} <ArrowUpRight />
            </a>
          </motion.div>

          <motion.div {...fade(0.55)} className="mt-10 flex items-center gap-5 text-muted">
            <span className="inline-flex items-center gap-1.5 text-sm">
              <PinIcon /> {t.hero.location}
            </span>
            <span className="h-4 w-px bg-line" />
            <a href={contacts.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-fg">
              <GitHubIcon />
            </a>
            <a href={contacts.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-fg">
              <LinkedInIcon />
            </a>
            <a href={contacts.telegram} target="_blank" rel="noreferrer" aria-label="Telegram" className="hover:text-fg">
              <TelegramIcon />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="order-1 mx-auto w-full max-w-[280px] sm:max-w-sm md:order-2 md:max-w-none"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] border border-line" />
            <div className="absolute -right-3 -bottom-3 size-24 rounded-br-[2rem] border-r-2 border-b-2 border-accent" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface">
              <Image
                src="/shuhrat.jpg"
                alt={t.hero.name}
                fill
                priority
                sizes="(min-width: 768px) 40vw, 80vw"
                className="object-cover grayscale contrast-[1.05]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/70 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
