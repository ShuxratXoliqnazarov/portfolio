"use client";

import { useLang } from "@/i18n/LangProvider";
import { Reveal, Section, SectionHeading } from "./ui";

export function About() {
  const { t } = useLang();

  return (
    <Section id="about">
      <SectionHeading index="01" label={t.about.label} title={t.about.title} />

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-6 text-lg leading-relaxed text-muted">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p className="pt-2 text-base">
            <span className="font-mono text-sm text-dim">{t.about.languages}: </span>
            <span className="text-fg">{t.about.langList}</span>
          </p>
        </Reveal>

        <div className="grid gap-4 self-start">
          {t.about.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="flex items-baseline gap-5 rounded-2xl border border-line bg-surface p-6">
                <span className="text-4xl font-extrabold text-accent">{s.value}</span>
                <span className="text-muted">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
