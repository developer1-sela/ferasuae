"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { Container } from "../ui/container";
import { ButtonLink } from "../ui/button-link";

export function ProductNotFound() {
  const { t } = useLocale();

  return (
    <section className="grain-overlay flex min-h-[70vh] items-center bg-ink pt-24 sm:pt-28">
      <Container className="flex flex-col items-center gap-6 py-20 text-center">
        <span className="text-display-xl text-stroke leading-none">404</span>
        <h1 className="text-display-md text-white">{t.shopPage.pdp.notFoundTitle}</h1>
        <p className="max-w-sm text-sm text-white-mute sm:text-base">
          {t.shopPage.pdp.notFoundCopy}
        </p>
        <ButtonLink href="/shop" variant="red" size="md" className="mt-2">
          {t.shopPage.pdp.backToShop}
        </ButtonLink>
      </Container>
    </section>
  );
}
