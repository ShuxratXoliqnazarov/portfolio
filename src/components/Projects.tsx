"use client";

import Image from "next/image";
import { useLang } from "@/i18n/LangProvider";
import { projects, type Project } from "@/data/site";
import { ArrowUpRight, GitHubIcon, LockIcon } from "./icons";
import { Reveal, Section, SectionHeading } from "./ui";

function Preview({ project, featured }: { project: Project; featured?: boolean }) {
  const { t } = useLang();
  return (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      className="relative block aspect-[16/10] overflow-hidden rounded-xl border border-line bg-surface-2"
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={featured ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
      ) : (
        // No screenshot available — typographic placeholder
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgb(196_242_90/0.18),transparent_60%)]">
          <span className="text-3xl font-extrabold tracking-tight sm:text-4xl">{project.title}</span>
          <span className="mt-2 font-mono text-xs text-dim">{t.projects.noPreview}</span>
        </div>
      )}
    </a>
  );
}

function Links({ project }: { project: Project }) {
  const { t } = useLang();
  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm font-semibold text-bg transition-colors hover:bg-accent"
        >
          {t.projects.live} <ArrowUpRight />
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-semibold transition-colors hover:border-fg/40"
        >
          <GitHubIcon className="size-4" /> {t.projects.code}
        </a>
      )}
      {project.privateRepo && (
        <span className="inline-flex items-center gap-1.5 px-2 text-sm text-dim">
          <LockIcon /> {t.projects.privateRepo}
        </span>
      )}
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((s) => (
        <li key={s} className="rounded-md bg-surface-2 px-2 py-1 font-mono text-xs text-muted">
          {s}
        </li>
      ))}
    </ul>
  );
}

function FeaturedCard({ project, reverse }: { project: Project; reverse?: boolean }) {
  const { lang, t } = useLang();
  return (
    <Reveal>
      <article className="group grid items-center gap-8 rounded-3xl border border-line bg-surface p-4 sm:p-6 md:grid-cols-[1.4fr_1fr] md:gap-10 md:p-8">
        <div className={reverse ? "md:order-2" : ""}>
          <Preview project={project} featured />
        </div>
        <div className="space-y-5 px-2 pb-2 md:px-0 md:pb-0">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-accent/15 px-3 py-1 font-mono text-xs text-accent">
              {t.projects.featured}
            </span>
            <span className="font-mono text-xs text-dim">{project.tag[lang]}</span>
          </div>
          <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
          <p className="leading-relaxed text-muted">{project.description[lang]}</p>
          <Stack items={project.stack} />
          <Links project={project} />
        </div>
      </article>
    </Reveal>
  );
}

function Card({ project, index }: { project: Project; index: number }) {
  const { lang } = useLang();
  return (
    <Reveal delay={(index % 2) * 0.08} className="h-full">
      <article className="group flex h-full flex-col gap-5 rounded-3xl border border-line bg-surface p-4 transition-colors hover:border-fg/20 sm:p-5">
        <Preview project={project} />
        <div className="flex flex-1 flex-col gap-4 px-1">
          <div>
            <p className="mb-1 font-mono text-xs text-dim">{project.tag[lang]}</p>
            <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
          </div>
          <p className="flex-1 text-sm leading-relaxed text-muted">{project.description[lang]}</p>
          <Stack items={project.stack} />
          <Links project={project} />
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const { t } = useLang();
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects">
      <SectionHeading index="02" label={t.projects.label} title={t.projects.title} subtitle={t.projects.subtitle} />

      <div className="space-y-6">
        {featured.map((p, i) => (
          <FeaturedCard key={p.id} project={p} reverse={i % 2 === 1} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {rest.map((p, i) => (
          <Card key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
