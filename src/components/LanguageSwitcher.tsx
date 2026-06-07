"use client";

import { useI18n } from "@/lib/i18n/context";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  const toggle = () => {
    setLocale(locale === "sr" ? "en" : "sr");
  };

  return (
    <button
      onClick={toggle}
      className="text-sm font-medium uppercase tracking-wider text-midnight hover:text-gold transition-colors"
      aria-label="Switch language"
    >
      {locale === "sr" ? "EN" : "SR"}
    </button>
  );
}
