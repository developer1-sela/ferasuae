"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";

const accents = ["text-red-bright", "text-white", "text-violet-bright", "text-white"];

export function StatsStrip() {
  const { t } = useLocale();

  return (
    <section className="border-y border-line-soft bg-black-soft">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-y divide-line-soft lg:grid-cols-4 lg:divide-y-0">
          {t.stats.items.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="flex h-full flex-col gap-2 px-5 py-10 sm:px-8 sm:py-14">
                <span
                  className={`font-display text-display-md ${accents[i % accents.length]}`}
                >
                  {stat.value}
                </span>
                <span className="text-eyebrow text-white-mute">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
