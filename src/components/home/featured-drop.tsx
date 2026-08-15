"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/locale-context";
import { stockImages } from "@/lib/stock-images";
import { Container } from "../ui/container";
import { PhotoPlaceholder } from "../ui/photo-placeholder";
import { Reveal } from "../ui/reveal";
import { ButtonLink } from "../ui/button-link";

const specs = [
  "Rashguard, front, studio",
  "Boxing gloves, product hero",
  "Fight shorts, front, studio",
  "Hoodie, flat lay, ink colorway",
];

const images = [
  stockImages.productRashguard,
  stockImages.productGloves,
  stockImages.productShorts,
  stockImages.productHoodie,
];

export function FeaturedDrop() {
  const { t } = useLocale();

  return (
    <section className="section-y bg-ink">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <Reveal>
              <span className="text-eyebrow inline-flex items-center gap-2.5 text-white-mute">
                <span className="h-1.5 w-1.5 rounded-full bg-red-core" />
                {t.shopTeaser.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-display-lg text-white">
                {t.shopTeaser.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <ButtonLink href="/shop" variant="ghost" size="sm">
              {t.shopTeaser.cta}
            </ButtonLink>
          </Reveal>
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {t.shopTeaser.products.map((product, i) => (
            <Reveal key={product.name} delay={i * 90} className="w-[72vw] shrink-0 snap-start sm:w-auto">
              <Link
                href="/shop"
                className="group flex h-full flex-col gap-4"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <span className="absolute start-3 top-3 z-10 rounded-sm border border-red-core/50 bg-ink/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-red-bright backdrop-blur-sm">
                    {product.tag}
                  </span>
                  <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]">
                    <PhotoPlaceholder
                      tone="mono"
                      spec={specs[i % specs.length]}
                      index={`P.0${i + 1}`}
                      className="h-full w-full"
                      src={images[i % images.length]}
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 72vw"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-medium text-white transition-colors group-hover:text-red-bright">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white-mute">
                      {product.price}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-white-mute/70">
                      S–XL
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
