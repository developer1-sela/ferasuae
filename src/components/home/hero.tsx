"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n/locale-context";
import { ButtonLink } from "../ui/button-link";
import { ChevronDown } from "../ui/icons";

export function Hero() {
  const { t } = useLocale();
  const bgRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // One-time read of a client-only media query — can't be a lazy
    // useState initializer without risking a hydration mismatch on the
    // video's `autoPlay` attribute (SSR always renders the same markup;
    // this corrects it post-hydration, same pattern as locale-context.tsx).
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReducedMotion(mq.matches);
    if (mq.matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 800);
        if (bgRef.current)
          bgRef.current.style.transform = `translateY(${y * 0.12}px) scale(1.08)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative h-[100dvh] min-h-[640px] w-full overflow-hidden bg-ink">
      <div className="absolute inset-0 overflow-hidden">
        <div ref={bgRef} className="grain-overlay h-[130%] w-full">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src="/videos/hero-fight.mp4"
            poster="/videos/hero-fight-poster.jpg"
            autoPlay={!reducedMotion}
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-ink/85 via-ink/15 to-transparent" />

      {/* content */}
      <div className="relative z-10 flex h-full flex-col justify-end sm:justify-center">
        <div className="container-gf flex max-w-2xl flex-col items-start gap-6 pb-28 text-start sm:pb-0">
          <span className="text-eyebrow inline-flex items-center gap-2.5 text-white-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-red-core" />
            {t.hero.eyebrow}
          </span>
          <h1 className="text-display-xl text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            {t.hero.titleLine1}
            <br />
            <span className="text-red-bright">{t.hero.titleLine2}</span>
          </h1>
          <p className="max-w-md text-balance text-sm text-white-dim sm:text-base">
            {t.hero.subhead}
          </p>
          <ButtonLink href="/shop" variant="red" size="lg" className="mt-2">
            {t.hero.cta}
          </ButtonLink>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-1.5 text-white-mute">
        <span className="text-eyebrow">{t.hero.scroll}</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
