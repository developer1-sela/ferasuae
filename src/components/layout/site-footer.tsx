"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/locale-context";
import { Container } from "../ui/container";
import { ArrowUpRight, Instagram, WhatsApp } from "../ui/icons";

export function SiteFooter() {
  const { t } = useLocale();

  const columns = [
    { title: t.footer.shopCol, links: t.footer.shopLinks, href: "/shop" },
    {
      title: t.footer.academyCol,
      links: t.footer.academyLinks,
      href: "/academy",
    },
    { title: t.footer.studioCol, links: t.footer.studioLinks, href: "/about" },
  ];

  return (
    <footer className="grain-overlay relative border-t border-line-soft bg-black">
      <Container className="section-y grid gap-16 lg:grid-cols-[1.1fr_1.4fr_1fr]">
        <div className="flex flex-col gap-6">
          <span className="font-display text-2xl text-white">
            GRAV<span className="text-red-core">·</span>FIGHT
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-white-mute">
            {t.footer.tagline}
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white-dim transition-colors hover:border-white hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/971500000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white-dim transition-colors hover:border-white hover:text-white"
            >
              <WhatsApp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 sm:gap-10">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h4 className="text-eyebrow text-white">{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href={col.href}
                      className="text-sm text-white-mute transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-line-soft pt-8 lg:border-t-0 lg:pt-0">
          <h4 className="text-display-sm text-white">
            {t.footer.newsletterTitle}
          </h4>
          <p className="text-sm text-white-mute">{t.footer.newsletterCopy}</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="group/form flex items-center border-b border-white/25 pb-3 transition-colors focus-within:border-white"
          >
            <input
              type="email"
              placeholder={t.footer.newsletterPlaceholder}
              className="w-full bg-transparent text-sm text-white placeholder:text-white-mute focus:outline-none"
            />
            <button
              type="submit"
              aria-label={t.footer.newsletterCta}
              className="flex h-8 w-8 shrink-0 items-center justify-center text-white transition-transform group-focus-within/form:translate-x-0.5 rtl:rotate-90"
            >
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </Container>

      <Container className="flex flex-col-reverse items-center justify-between gap-4 border-t border-line-soft py-6 text-xs text-white-mute sm:flex-row">
        <span>
          © {new Date().getFullYear()} GRAV FIGHT. {t.footer.rights}
        </span>
        <span className="font-mono uppercase tracking-wider text-white-mute/70">
          {t.footer.placeholderNote}
        </span>
      </Container>
    </footer>
  );
}
