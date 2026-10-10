"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/i18n/LangProvider";
import type { Lang } from "@/i18n/dict";

const links = ["about", "projects", "skills", "education", "contact"] as const;

function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex rounded-full border border-line bg-surface p-1 font-mono text-xs">
      {(["en", "ru"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1.5 uppercase transition-colors ${
            lang === l ? "bg-accent text-accent-fg" : "text-muted hover:text-fg"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open
          ? "border-b border-line bg-bg/95 backdrop-blur-xl"
          : scrolled
            ? "border-b border-line bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-accent">&lt;</span>shuhrat<span className="text-accent">/&gt;</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((k) => (
            <a key={k} href={`#${k}`} className="text-sm text-muted transition-colors hover:text-fg">
              {t.nav[k]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch />
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-full border border-line md:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className={`h-px w-4 bg-fg transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-fg transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col px-4 pb-6">
              {links.map((k) => (
                <a
                  key={k}
                  href={`#${k}`}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-4 text-lg text-muted hover:text-fg"
                >
                  {t.nav[k]}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
