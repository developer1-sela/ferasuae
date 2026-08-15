"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { stockImages } from "@/lib/stock-images";
import { Container } from "../ui/container";
import { PhotoPlaceholder } from "../ui/photo-placeholder";
import { Reveal } from "../ui/reveal";
import { ButtonLink } from "../ui/button-link";

/**
 * The one deliberate mood-shift moment on the Shop-led homepage: a single,
 * bold banner — not an equal-billing panel — that signals "there's another
 * side to this house" and sends people into the Academy's own violet-led
 * world. Shop stays the lead throughout; this is the doorway, not a second
 * front door.
 */
export function AcademyGateway() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden bg-ink">
      {/* identity-shift seam */}
      <div className="h-px w-full bg-gradient-to-r from-red-core/60 via-white/10 to-violet-bright/60" />

      <div className="relative min-h-[76vh] w-full sm:min-h-[85vh]">
        <div className="absolute inset-0">
          <PhotoPlaceholder
            tone="violet"
            spec={t.academyGateway.spec}
            index="IMG.03"
            cropMarks={false}
            className="h-full w-full"
            src={stockImages.gatewayAcademy}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_45%,transparent_0%,var(--gf-ink)_85%)] opacity-80" />

        <Container className="relative flex h-full min-h-[76vh] flex-col items-center justify-center gap-6 py-24 text-center sm:min-h-[85vh]">
          <Reveal>
            <span className="text-eyebrow inline-flex items-center gap-2.5 text-white-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-bright" />
              {t.academyGateway.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-display-xl whitespace-pre-line text-white">
              {t.academyGateway.title}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="max-w-lg text-balance text-sm text-white-dim sm:text-base">
              {t.academyGateway.copy}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <ButtonLink href="/academy" variant="violet" size="lg" className="mt-2">
              {t.academyGateway.cta}
            </ButtonLink>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
