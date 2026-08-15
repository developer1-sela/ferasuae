"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n/locale-context";
import { formatPrice, type Product } from "@/lib/products";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { WhatsApp } from "../ui/icons";
import { ProductGallery } from "./product-gallery";
import { SizeSelector } from "./size-selector";
import { RelatedProducts } from "./related-products";

const WHATSAPP_NUMBER = "971500000000";

export function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { t, locale } = useLocale();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const message = t.shopPage.pdp.whatsappMessage
    .replace("{product}", product.name[locale])
    .replace("{size}", selectedSize);
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <section className="pt-24 sm:pt-28">
        <Container className="grid gap-12 pb-20 sm:pb-28 lg:grid-cols-2 lg:gap-16">
          <Reveal y={40}>
            <ProductGallery images={product.images} productName={product.name[locale]} />
          </Reveal>

          <div className="flex flex-col gap-6 lg:pt-2">
            <Reveal>
              <span className="text-eyebrow inline-flex items-center gap-2.5 text-white-mute">
                <span className="h-1.5 w-1.5 rounded-full bg-red-core" />
                {t.shopPage.filters.categories[product.category]}
              </span>
            </Reveal>

            <Reveal delay={60}>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-display-md text-white">{product.name[locale]}</h1>
                {product.tag && (
                  <span className="rounded-full border border-red-core/50 px-2.5 py-1 text-eyebrow text-red-bright">
                    {t.productTags[product.tag]}
                  </span>
                )}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <span className="text-display-sm text-white-dim">
                {formatPrice(product.priceAed, locale)}
              </span>
            </Reveal>

            <Reveal delay={140}>
              <p className="max-w-md text-sm leading-relaxed text-white-mute sm:text-base">
                {product.description[locale]}
              </p>
            </Reveal>

            <Reveal delay={180}>
              <SizeSelector
                sizes={product.sizes}
                selected={selectedSize}
                onSelect={setSelectedSize}
                label={t.shopPage.pdp.sizeLabel}
              />
            </Reveal>

            <Reveal delay={220}>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn mt-2 inline-flex w-full items-center justify-center gap-3 bg-white px-8 py-4 font-display text-xs uppercase tracking-[0.08em] text-ink transition-colors duration-300 hover:bg-white/90 sm:w-auto"
              >
                <WhatsApp className="h-4 w-4" />
                <span>{t.shopPage.pdp.whatsappCta}</span>
              </a>
            </Reveal>

            <Reveal delay={260}>
              <span className="text-xs text-white-mute">{t.shopPage.pdp.logistics}</span>
            </Reveal>
          </div>
        </Container>
      </section>

      <RelatedProducts products={related} />
    </>
  );
}
