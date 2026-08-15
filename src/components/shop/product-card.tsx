"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/locale-context";
import { formatPrice, type Product } from "@/lib/products";
import { PhotoPlaceholder } from "../ui/photo-placeholder";

function sizeRangeLabel(sizes: string[]): string {
  if (sizes.length <= 1) return sizes[0] ?? "";
  return `${sizes[0]}–${sizes[sizes.length - 1]}`;
}

export function ProductCard({ product }: { product: Product }) {
  const { t, locale } = useLocale();
  const thumbnail = product.images[0];

  return (
    <Link href={`/shop/${product.slug}`} className="group flex h-full flex-col gap-4">
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        {product.tag && (
          <span className="absolute start-3 top-3 z-10 rounded-sm border border-red-core/50 bg-ink/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-red-bright backdrop-blur-sm">
            {t.productTags[product.tag]}
          </span>
        )}
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]">
          <PhotoPlaceholder
            tone={thumbnail.tone}
            spec={thumbnail.spec}
            className="h-full w-full"
            src={thumbnail.src}
            sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium text-white transition-colors group-hover:text-red-bright">
          {product.name[locale]}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-white-mute">
            {formatPrice(product.priceAed, locale)}
          </span>
          <span dir="ltr" className="font-mono text-[11px] uppercase tracking-wider text-white-mute/70">
            {sizeRangeLabel(product.sizes)}
          </span>
        </div>
      </div>
    </Link>
  );
}
