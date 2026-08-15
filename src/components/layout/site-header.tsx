"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/locale-context";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "../ui/container";
import { Menu, Close } from "../ui/icons";
import { ButtonLink } from "../ui/button-link";

const navItems = (t: Dictionary) => [
  { href: "/shop", label: t.nav.shop },
  { href: "/academy", label: t.nav.academy },
  { href: "/about", label: t.nav.about },
];

export function SiteHeader() {
  const { t, toggleLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const items = navItems(t);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line-soft bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-ink/60 to-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-white md:text-2xl"
          onClick={() => setOpen(false)}
        >
          GRAV<span className="text-red-core">·</span>FIGHT
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-eyebrow relative text-white-dim transition-colors hover:text-white after:absolute after:-bottom-1.5 after:start-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <button
            onClick={toggleLocale}
            className="text-eyebrow rounded-full border border-white/20 px-3.5 py-2 text-white-dim transition-colors hover:border-white hover:text-white"
          >
            {t.nav.langSwitch}
          </button>
          <Link
            href="/dashboard"
            className="text-eyebrow text-white-dim transition-colors hover:text-white"
          >
            {t.nav.dashboard}
          </Link>
          <ButtonLink href="/academy" variant="red" size="sm">
            {t.nav.cta}
          </ButtonLink>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-16 z-40 h-[calc(100dvh-4rem)] overflow-y-auto bg-ink transition-[opacity,transform] duration-400 md:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <Container className="flex flex-col gap-8 py-10">
          <nav className="flex flex-col gap-1">
            {items.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-display-md border-b border-line-soft py-4 text-white"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between">
            <button
              onClick={toggleLocale}
              className="text-eyebrow rounded-full border border-white/20 px-4 py-2.5 text-white-dim"
            >
              {t.nav.langSwitch}
            </button>
            <Link href="/dashboard" className="text-eyebrow text-white-dim">
              {t.nav.dashboard}
            </Link>
          </div>
          <ButtonLink href="/academy" variant="red" size="lg" className="w-full">
            {t.nav.cta}
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}
