"use client";

import { useLang } from "@/i18n/LangProvider";
import { skills } from "@/data/site";
import { Reveal, Section, SectionHeading } from "./ui";

export function Skills() {
  const { t } = useLang();
  const groups = Object.entries(skills) as [keyof typeof skills, string[]][];

  return (
    <Section id="skills">
      <SectionHeading index="03" label={t.skills.label} title={t.skills.title} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(([key, items], i) => (
          <Reveal key={key} delay={(i % 3) * 0.08} className={key === "backend" ? "sm:col-span-2" : ""}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6">
              <h3 className="mb-5 font-mono text-sm text-accent">{t.skills.groups[key]}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-line bg-bg px-3.5 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
