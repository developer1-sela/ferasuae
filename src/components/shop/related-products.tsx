"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import type { Product } from "@/lib/products";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../ui/reveal";
import { ButtonLink } from "../ui/button-link";
import { ProductCard } from "./product-card";

export function RelatedProducts({ products }: { products: Product[] }) {
  const { t } = useLocale();

  if (products.length === 0) return null;

  return (
    <section className="section-y border-t border-line-soft bg-black-soft">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={t.shopPage.pdp.related.eyebrow}
          title={t.shopPage.pdp.related.title}
        />

        <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 100}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <ButtonLink href="/shop" variant="ghost" size="sm">
            {t.shopPage.pdp.backToShop}
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
