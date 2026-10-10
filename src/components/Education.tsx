"use client";

import { useLang } from "@/i18n/LangProvider";
import { Reveal, Section, SectionHeading } from "./ui";

export function Education() {
  const { t } = useLang();

  return (
    <Section id="education">
      <SectionHeading index="04" label={t.education.label} title={t.education.title} />

      <ol className="relative space-y-10 border-l border-line pl-8 md:pl-12">
        {t.education.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <li className="relative">
              <span className="absolute top-1.5 -left-[37px] size-3 rounded-full border-2 border-accent bg-bg md:-left-[53px]" />
              <p className="font-mono text-sm text-dim">{item.period}</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">{item.title}</h3>
              <p className="mt-1 text-accent">{item.place}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{item.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
