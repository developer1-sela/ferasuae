"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import type { Product } from "@/lib/products";
import { Reveal } from "../ui/reveal";
import { ProductCard } from "./product-card";

export function ProductGrid({
  products,
  onClear,
}: {
  products: Product[];
  onClear: () => void;
}) {
  const { t } = useLocale();

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center gap-5 border border-dashed border-line py-24 text-center">
        <p className="max-w-sm text-sm text-white-mute">
          {t.shopPage.filters.resultsEmpty}
        </p>
        <button
          onClick={onClear}
          className="text-eyebrow text-red-bright underline decoration-red-core/40 underline-offset-4 hover:decoration-red-bright"
        >
          {t.shopPage.filters.clear}
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, i) => (
        <Reveal key={product.slug} delay={Math.min(i, 8) * 80}>
          <ProductCard product={product} />
        </Reveal>
      ))}
    </div>
  );
}
