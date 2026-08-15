"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { Marquee } from "../ui/marquee";

export function MarqueeStrip() {
  const { t } = useLocale();

  return (
    <div className="relative overflow-hidden bg-ink py-10 sm:py-14">
      <div className="-rotate-[1.25deg] scale-[1.04] border-y border-line-soft bg-black-soft py-5">
        <Marquee items={[...t.marquee.items]} tone="red" />
      </div>
    </div>
  );
}
