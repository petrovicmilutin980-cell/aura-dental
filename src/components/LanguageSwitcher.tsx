"use client";

import { useI18n } from "@/lib/i18n/context";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex gap-1.5">
      <button
        onClick={() => setLocale("sr")}
        className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md border-2 transition-all duration-200 ${
          locale === "sr"
            ? "bg-gold border-gold text-white"
            : "border-gold/40 text-gold hover:border-gold hover:bg-gold/5"
        }`}
        aria-label="Srpski jezik"
      >
        SR
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md border-2 transition-all duration-200 ${
          locale === "en"
            ? "bg-gold border-gold text-white"
            : "border-gold/40 text-gold hover:border-gold hover:bg-gold/5"
        }`}
        aria-label="English language"
      >
        EN
      </button>
    </div>
  );
}
