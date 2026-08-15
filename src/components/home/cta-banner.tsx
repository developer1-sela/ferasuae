"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { WhatsApp } from "../ui/icons";

export function CtaBanner() {
  const { t } = useLocale();

  return (
    <section className="grain-overlay relative overflow-hidden bg-ink py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(115deg, var(--gf-red-deep) 0%, var(--gf-ink) 42%, var(--gf-ink) 58%, var(--gf-violet-deep) 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_0%,var(--gf-ink)_75%)]" />

      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="text-display-xl whitespace-pre-line text-white">
            {t.ctaBanner.title}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="max-w-lg text-sm text-white-dim sm:text-base">
            {t.ctaBanner.copy}
          </p>
        </Reveal>
        <Reveal delay={180}>
          <a
            href="https://wa.me/971500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn mt-2 inline-flex items-center gap-3 bg-white px-8 py-4 font-display text-xs uppercase tracking-[0.08em] text-ink transition-colors duration-300 hover:bg-white/90"
          >
            <WhatsApp className="h-4 w-4" />
            <span>{t.ctaBanner.cta}</span>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
