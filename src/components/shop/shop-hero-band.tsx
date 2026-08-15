"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { products } from "@/lib/products";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../ui/reveal";

export function ShopHeroBand() {
  const { t } = useLocale();

  return (
    <section className="grain-overlay relative overflow-hidden bg-black-soft pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,var(--gf-red-deep)_0%,transparent_60%)] opacity-40" />

      <Container className="relative flex flex-col gap-6 pb-14 sm:pb-16">
        <SectionHeading eyebrow={t.shopPage.hero.eyebrow} title={t.shopPage.hero.title}>
          <p className="max-w-xl text-sm leading-relaxed text-white-mute sm:text-base">
            {t.shopPage.hero.subhead}
          </p>
        </SectionHeading>
        <Reveal delay={200}>
          <span className="text-eyebrow text-white-mute/70">
            {products.length} {t.shopPage.hero.countSuffix}
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
