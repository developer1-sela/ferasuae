"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { stockImages } from "@/lib/stock-images";
import { Container } from "../ui/container";
import { PhotoPlaceholder } from "../ui/photo-placeholder";
import { Reveal } from "../ui/reveal";
import { ButtonLink } from "../ui/button-link";

const tiles = [
  { tone: "mono" as const, spec: "IG — pad session clip", video: true, src: stockImages.igPadSession },
  { tone: "red" as const, spec: "IG — new drop flat lay", src: stockImages.igNewDrop },
  { tone: "violet" as const, spec: "IG — sparring round clip", video: true, src: stockImages.igSparringClip },
  { tone: "mono" as const, spec: "IG — gym candid", src: stockImages.igGymCandid },
  { tone: "red" as const, spec: "IG — gear detail shot", src: stockImages.igGearDetail },
  { tone: "violet" as const, spec: "IG — coach spotlight", src: stockImages.igCoachSpotlight },
];

export function InstagramFeed() {
  const { t } = useLocale();

  return (
    <section className="section-y bg-ink">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <Reveal>
              <span className="text-eyebrow inline-flex items-center gap-2.5 text-white-mute">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {t.instagram.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 dir="ltr" className="text-display-lg text-end text-white sm:text-start">
                {t.instagram.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <ButtonLink href="https://instagram.com" variant="outline" size="sm" external>
              {t.instagram.cta}
            </ButtonLink>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-6">
          {tiles.map((tile, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="group relative aspect-square w-full overflow-hidden">
                <div className="h-full w-full transition-transform duration-500 group-hover:scale-110">
                  <PhotoPlaceholder
                    tone={tile.tone}
                    spec={tile.spec}
                    video={tile.video}
                    cropMarks={false}
                    className="h-full w-full"
                    src={tile.src}
                    sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
