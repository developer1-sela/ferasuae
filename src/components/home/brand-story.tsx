"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n/locale-context";
import { stockImages } from "@/lib/stock-images";
import { Container } from "../ui/container";
import { PhotoPlaceholder } from "../ui/photo-placeholder";
import { Reveal } from "../ui/reveal";
import { ButtonLink } from "../ui/button-link";

export function BrandStory() {
  const { t } = useLocale();

  return (
    <section className="section-y relative overflow-hidden bg-ink">
      <span
        aria-hidden
        className="text-stroke pointer-events-none absolute -top-4 start-1/2 hidden -translate-x-1/2 whitespace-nowrap text-[11rem] font-display leading-none opacity-[0.05] lg:block"
      >
        GRAV FIGHT
      </span>

      <Container className="relative grid gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5" y={40}>
          <div className="relative aspect-[4/5] w-full lg:sticky lg:top-28">
            <PhotoPlaceholder
              tone="mono"
              spec="Gym interior, mats and heavy bags, moody"
              index="IMG.05"
              className="h-full w-full"
              src={stockImages.gymInterior}
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            {/* real asset — Coach Firas, supplied by Firas */}
            <div className="absolute -bottom-6 start-6 flex items-center gap-3 rounded-full bg-ink py-2 pe-5 ps-2 ring-1 ring-white/10">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-red-core/70">
                <Image
                  src="/images/coach-firas.jpeg"
                  alt="Coach Firas, founder of GRAV FIGHT"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">
                  Coach Firas
                </span>
                <span className="text-[11px] uppercase tracking-wider text-white-mute">
                  Founder
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8 lg:col-span-7 lg:pt-4">
          <Reveal>
            <span className="text-eyebrow inline-flex items-center gap-2.5 text-white-mute">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {t.story.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-display-lg whitespace-pre-line text-white">
              {t.story.title}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <blockquote className="border-s-2 border-red-core ps-6">
              <p className="text-display-sm leading-snug text-white-dim">
                {t.story.quote}
              </p>
              <cite className="mt-4 block text-sm not-italic text-white-mute">
                {t.story.attribution}
              </cite>
            </blockquote>
          </Reveal>

          <Reveal delay={200}>
            <p className="max-w-xl text-sm leading-relaxed text-white-mute sm:text-base">
              {t.story.copy}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <ButtonLink href="/about" variant="outline" size="md">
              {t.story.cta}
            </ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
