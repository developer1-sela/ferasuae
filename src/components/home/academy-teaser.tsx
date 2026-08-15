"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { stockImages } from "@/lib/stock-images";
import { Container } from "../ui/container";
import { PhotoPlaceholder } from "../ui/photo-placeholder";
import { Reveal } from "../ui/reveal";
import { ButtonLink } from "../ui/button-link";
import { ArrowUpRight } from "../ui/icons";

const specs = [
  "Boxing pad work, low light",
  "MMA sparring, cage side",
  "Muay Thai clinch, ring apron",
];

const images = [
  stockImages.teaserBoxing,
  stockImages.teaserMma,
  stockImages.teaserMuayThai,
];

export function AcademyTeaser() {
  const { t } = useLocale();

  return (
    <section className="grain-overlay relative bg-black-soft">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,var(--gf-violet-deep)_0%,transparent_60%)] opacity-40" />

      <Container className="section-y relative flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <Reveal>
              <span className="text-eyebrow inline-flex items-center gap-2.5 text-white-mute">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-bright" />
                {t.academyTeaser.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-display-lg text-white">
                {t.academyTeaser.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <ButtonLink href="/academy" variant="violet" size="sm">
              {t.academyTeaser.cta}
            </ButtonLink>
          </Reveal>
        </div>

        <div className="flex flex-col divide-y divide-line-soft border-y border-line-soft">
          {t.academyTeaser.programs.map((program, i) => (
            <Reveal key={program.name} delay={i * 100}>
              <a
                href="/academy/program"
                className="group flex items-center gap-5 px-1 py-6 transition-colors duration-300 hover:bg-violet-deep/15 sm:gap-8 sm:py-8"
              >
                <span className="hidden font-display text-display-sm text-white-mute/50 sm:block">
                  0{i + 1}
                </span>

                <div className="relative h-20 w-20 shrink-0 overflow-hidden sm:h-28 sm:w-28">
                  <PhotoPlaceholder
                    tone="violet"
                    spec={specs[i % specs.length]}
                    cropMarks={false}
                    className="h-full w-full"
                    src={images[i % images.length]}
                    sizes="112px"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-display-sm text-white transition-colors group-hover:text-violet-bright">
                      {program.name}
                    </h3>
                    <span className="text-eyebrow rounded-full border border-violet-core/50 px-2.5 py-1 text-violet-bright">
                      {program.level}
                    </span>
                  </div>
                  <p className="hidden max-w-lg text-sm leading-relaxed text-white-mute sm:block">
                    {program.copy}
                  </p>
                </div>

                <ArrowUpRight className="h-5 w-5 shrink-0 text-white-mute transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-violet-bright rtl:rotate-90" />
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
