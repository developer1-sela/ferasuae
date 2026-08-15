"use client";

import { useState } from "react";
import type { ProductImage } from "@/lib/products";
import { PhotoPlaceholder } from "../ui/photo-placeholder";

export function ProductGallery({
  images,
  productName,
}: {
  images: ProductImage[];
  productName: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <div className="flex flex-col-reverse gap-4 lg:flex-row">
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto lg:w-24 lg:flex-col lg:overflow-visible">
          {images.map((image, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`${productName} — ${i + 1}`}
              aria-current={i === activeIndex}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-sm transition-all duration-200 lg:h-24 lg:w-24 ${
                i === activeIndex
                  ? "ring-2 ring-red-core"
                  : "opacity-60 ring-1 ring-white/15 hover:opacity-100"
              }`}
            >
              <PhotoPlaceholder
                tone={image.tone}
                spec={image.spec}
                cropMarks={false}
                className="h-full w-full"
                src={image.src}
                sizes="96px"
              />
            </button>
          ))}
        </div>
      )}

      <div className="relative aspect-[4/5] w-full flex-1 overflow-hidden">
        <PhotoPlaceholder
          key={activeIndex}
          tone={active.tone}
          spec={active.spec}
          index={`${activeIndex + 1}/${images.length}`}
          className="h-full w-full"
          src={active.src}
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
      </div>
    </div>
  );
}
