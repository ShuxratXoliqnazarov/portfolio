"use client";

import { useLang } from "@/i18n/LangProvider";
import { contacts } from "@/data/site";
import {
  ArrowUpRight,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "./icons";
import { Reveal, Section, SectionHeading } from "./ui";

const channels = [
  { label: "Telegram", value: contacts.telegramHandle, href: contacts.telegram, Icon: TelegramIcon },
  { label: "WhatsApp", value: contacts.phone, href: contacts.whatsapp, Icon: WhatsAppIcon },
  { label: "Email", value: contacts.email, href: `mailto:${contacts.email}`, Icon: MailIcon },
  { label: "LinkedIn", value: "Shuhrat Kholiqnazarov", href: contacts.linkedin, Icon: LinkedInIcon },
  { label: "Instagram", value: contacts.instagramHandle, href: contacts.instagram, Icon: InstagramIcon },
  { label: "GitHub", value: "ShuxratXoliqnazarov", href: contacts.github, Icon: GitHubIcon },
];

export function Contact() {
  const { t } = useLang();

  return (
    <Section id="contact">
      <SectionHeading index="05" label={t.contact.label} title={t.contact.title} subtitle={t.contact.text} />

      <Reveal className="mb-10 flex flex-wrap gap-3">
        <a
          href={contacts.telegram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-fg transition-transform hover:scale-[1.03]"
        >
          <TelegramIcon /> {t.contact.telegram}
        </a>
        <a
          href={`mailto:${contacts.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-semibold transition-colors hover:border-fg/40 hover:bg-surface"
        >
          <MailIcon /> {t.contact.email}
        </a>
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {channels.map(({ label, value, href, Icon }, i) => (
          <Reveal key={label} delay={(i % 3) * 0.06} className="min-w-0">
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/60"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-muted transition-colors group-hover:text-accent">
                <Icon />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs text-dim">{label}</span>
                <span className="block truncate font-medium">{value}</span>
              </span>
              <ArrowUpRight className="size-4 text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
