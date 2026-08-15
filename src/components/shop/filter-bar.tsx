"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import type { ProductCategory, PriceBucket } from "@/lib/products";
import { ChevronDown, Check } from "../ui/icons";

type SortOption = "newest" | "priceLowHigh" | "priceHighLow";

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs transition-colors duration-200 ${
        active
          ? "border-red-core bg-red-core text-white"
          : "border-white/25 text-white-dim hover:border-white/50 hover:text-white"
      }`}
    >
      {active && <Check className="h-3 w-3" />}
      {children}
    </button>
  );
}

export function FilterBar({
  category,
  onCategoryChange,
  size,
  onSizeChange,
  availableSizes,
  priceBucket,
  onPriceBucketChange,
  sort,
  onSortChange,
  onClear,
  resultCount,
}: {
  category: ProductCategory | "all";
  onCategoryChange: (category: ProductCategory | "all") => void;
  size: string | "all";
  onSizeChange: (size: string | "all") => void;
  availableSizes: string[];
  priceBucket: PriceBucket;
  onPriceBucketChange: (bucket: PriceBucket) => void;
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
  onClear: () => void;
  resultCount: number;
}) {
  const { t } = useLocale();
  const f = t.shopPage.filters;

  const categories: (ProductCategory | "all")[] = [
    "all",
    "rashguards",
    "gloves",
    "shorts",
    "apparel",
    "equipment",
  ];
  const priceBuckets: PriceBucket[] = ["all", "under150", "150to300", "over300"];

  return (
    <div className="flex flex-col gap-6 border-y border-line-soft py-6">
      <div className="flex flex-col gap-2">
        <span className="text-eyebrow text-white-mute">{f.categoryLabel}</span>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Chip key={c} active={category === c} onClick={() => onCategoryChange(c)}>
              {c === "all" ? f.allCategories : f.categories[c]}
            </Chip>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-eyebrow text-white-mute">{f.priceLabel}</span>
        <div className="flex flex-wrap gap-2">
          {priceBuckets.map((b) => (
            <Chip key={b} active={priceBucket === b} onClick={() => onPriceBucketChange(b)}>
              {f.priceBuckets[b]}
            </Chip>
          ))}
        </div>
      </div>

      {category !== "all" && availableSizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <span className="text-eyebrow text-white-mute">{f.sizeLabel}</span>
          <div dir="ltr" className="flex flex-wrap gap-2">
            <Chip active={size === "all"} onClick={() => onSizeChange("all")}>
              {f.allCategories}
            </Chip>
            {availableSizes.map((s) => (
              <Chip key={s} active={size === s} onClick={() => onSizeChange(s)}>
                {s}
              </Chip>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="text-xs text-white-mute">
          {resultCount} {t.shopPage.hero.countSuffix}
        </span>

        <div className="flex items-center gap-4">
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              aria-label={f.sortLabel}
              className="appearance-none rounded-sm border border-white/25 bg-transparent py-2 ps-3 pe-9 text-xs text-white-dim transition-colors hover:border-white/50 focus:border-white focus:outline-none"
            >
              <option value="newest" className="bg-black-soft">
                {f.sortOptions.newest}
              </option>
              <option value="priceLowHigh" className="bg-black-soft">
                {f.sortOptions.priceLowHigh}
              </option>
              <option value="priceHighLow" className="bg-black-soft">
                {f.sortOptions.priceHighLow}
              </option>
            </select>
            <ChevronDown className="pointer-events-none absolute end-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white-mute" />
          </div>

          <button
            type="button"
            onClick={onClear}
            className="text-eyebrow text-white-mute underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/50"
          >
            {f.clear}
          </button>
        </div>
      </div>
    </div>
  );
}
