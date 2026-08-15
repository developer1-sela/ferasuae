"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, type Locale, type Dictionary } from "./dictionaries";

type LocaleContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: Dictionary;
  toggleLocale: () => void;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "gf-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Applies the current locale to the DOM. Deliberately never writes to
  // localStorage — only `persist` (below) does that, on explicit user
  // action. Keeping this effect write-free makes it safe to run more than
  // once for the same `locale` value, which React's dev-only StrictMode
  // double-invoke does on every mount: with a write here guarded by a ref
  // "first run" flag, the ref doesn't reset between the two invocations,
  // so the second invocation would fire as if it were a genuine follow-up
  // render and clobber a real stored preference back to the default "en"
  // before the read-effect below ever got a chance to apply it.
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  useEffect(() => {
    // One-time sync from a client-only store (localStorage) on mount — SSR
    // has no access to it, so this can't be a lazy useState initializer
    // (the server always renders "en" first; a lazy initializer reading a
    // stored "ar" here would hydrate to a different value than the server
    // sent and trigger a hydration mismatch).
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "en" || stored === "ar") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(stored);
    }
  }, []);

  function persist(next: Locale) {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      dir: locale === "ar" ? "rtl" : "ltr",
      t: dictionaries[locale] as unknown as Dictionary,
      toggleLocale: () => persist(locale === "en" ? "ar" : "en"),
      setLocale: persist,
    }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
