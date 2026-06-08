"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import type { Locale } from "./translations";
import { translations } from "./translations";

type I18nContext = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContext | null>(null);

function getInitialLocale(): Locale {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("siteLang");
    if (stored === "en" || stored === "sr") return stored;
  }
  return "sr";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("sr");

  useEffect(() => {
    setLocale(getInitialLocale());
  }, []);

  useEffect(() => {
    localStorage.setItem("siteLang", locale);
  }, [locale]);

  const t = useCallback(
    (key: string): string => {
      return translations[locale][key] ?? key;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}
