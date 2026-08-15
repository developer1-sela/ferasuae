"use client";

import { useMemo, useState } from "react";
import {
  products,
  priceBucketOf,
  type Product,
  type ProductCategory,
  type PriceBucket,
} from "@/lib/products";
import { Container } from "../ui/container";
import { FilterBar } from "./filter-bar";
import { ProductGrid } from "./product-grid";

type SortOption = "newest" | "priceLowHigh" | "priceHighLow";

export function ShopCatalog() {
  const [category, setCategory] = useState<ProductCategory | "all">("all");
  const [size, setSize] = useState<string | "all">("all");
  const [priceBucket, setPriceBucket] = useState<PriceBucket>("all");
  const [sort, setSort] = useState<SortOption>("newest");

  const availableSizes = useMemo(() => {
    if (category === "all") return [];
    const inCategory = products.filter((p) => p.category === category);
    return Array.from(new Set(inCategory.flatMap((p) => p.sizes)));
  }, [category]);

  function handleCategoryChange(next: ProductCategory | "all") {
    setCategory(next);
    setSize("all"); // sizes are category-specific — a leftover selection would silently filter nothing
  }

  function handleClear() {
    setCategory("all");
    setSize("all");
    setPriceBucket("all");
    setSort("newest");
  }

  const filtered = useMemo(() => {
    let list: Product[] = products;

    if (category !== "all") list = list.filter((p) => p.category === category);
    if (size !== "all") list = list.filter((p) => p.sizes.includes(size));
    if (priceBucket !== "all") {
      list = list.filter((p) => priceBucketOf(p.priceAed) === priceBucket);
    }

    // "newest" = catalog declaration order, the honest option for mock
    // data with no real listing timestamps.
    if (sort === "priceLowHigh") {
      list = [...list].sort((a, b) => a.priceAed - b.priceAed);
    } else if (sort === "priceHighLow") {
      list = [...list].sort((a, b) => b.priceAed - a.priceAed);
    }

    return list;
  }, [category, size, priceBucket, sort]);

  return (
    <section className="pb-20 sm:pb-28 lg:pb-32">
      <Container className="flex flex-col gap-8">
        <FilterBar
          category={category}
          onCategoryChange={handleCategoryChange}
          size={size}
          onSizeChange={setSize}
          availableSizes={availableSizes}
          priceBucket={priceBucket}
          onPriceBucketChange={setPriceBucket}
          sort={sort}
          onSortChange={setSort}
          onClear={handleClear}
          resultCount={filtered.length}
        />
        <ProductGrid products={filtered} onClear={handleClear} />
      </Container>
    </section>
  );
}
