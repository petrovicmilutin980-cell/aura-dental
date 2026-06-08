"use client";

import { useI18n } from "@/lib/i18n/context";
import Link from "next/link";

function ShieldIcon() {
  return (
    <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l7 3v7c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5c-5 0-9 3.5-11 7.5 2 4 6 7.5 11 7.5s9-3.5 11-7.5c-2-4-6-7.5-11-7.5z" />
      <circle cx={12} cy={12} r={3} />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M18 3v4m-2-2h4M5 17v4m-2-2h4m9-14v4m-2-2h4M9.5 14.5L12 12l2.5 2.5L12 17l-2.5-2.5zM12 2v4m-2-2h4M5 9v6m14-6v6M9 19h6" />
    </svg>
  );
}

function BadgeCheckIcon() {
  return (
    <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function BulletIcon() {
  return (
    <svg className="mt-1 h-5 w-5 shrink-0 text-gold" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

const values = [
  "about.values.value1",
  "about.values.value2",
  "about.values.value3",
  "about.values.value4",
  "about.values.value5",
] as const;

const reasons = [
  "about.why.reason1",
  "about.why.reason2",
  "about.why.reason3",
  "about.why.reason4",
  "about.why.reason5",
  "about.why.reason6",
] as const;

export function AboutContent() {
  const { t } = useI18n();
  return (
    <>
      <section className="relative bg-midnight pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.07]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-alabaster md:text-5xl lg:text-6xl leading-tight">
            {t("about.hero.title")}
          </h1>
          <p className="mt-5 text-lg text-alabaster/60 max-w-2xl mx-auto md:text-xl">
            {t("about.hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-alabaster py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-midnight md:text-4xl">
            {t("about.story.title")}
          </h2>
          <p className="mt-6 text-midnight/70 leading-relaxed text-lg">
            {t("about.story.text")}
          </p>
        </div>
      </section>

      <section className="bg-midnight py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-2xl border border-gold/10 bg-gold/[0.03] p-8 md:p-10">
              <ShieldIcon />
              <h3 className="mt-5 font-heading text-2xl font-bold text-gold">
                {t("about.mission.title")}
              </h3>
              <p className="mt-4 text-alabaster/60 leading-relaxed">
                {t("about.mission.text")}
              </p>
            </div>
            <div className="rounded-2xl border border-gold/10 bg-gold/[0.03] p-8 md:p-10">
              <EyeIcon />
              <h3 className="mt-5 font-heading text-2xl font-bold text-gold">
                {t("about.vision.title")}
              </h3>
              <p className="mt-4 text-alabaster/60 leading-relaxed">
                {t("about.vision.text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-alabaster py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold text-center text-midnight md:text-4xl">
            {t("about.values.title")}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {values.map((key, i) => {
              const icons = [ShieldIcon, HeartIcon, StarIcon, SparklesIcon, BadgeCheckIcon];
              const Icon = icons[i] || BadgeCheckIcon;
              return (
                <div key={key} className="rounded-2xl bg-white p-6 shadow-sm text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/5">
                    <Icon />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold text-midnight">
                    {t(key)}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-midnight py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold text-center text-alabaster md:text-4xl">
            {t("about.why.title")}
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {reasons.map((key) => (
              <div key={key} className="flex items-start gap-3">
                <BulletIcon />
                <span className="text-alabaster/80 leading-relaxed">
                  {t(key)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-alabaster py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold text-center text-midnight md:text-4xl">
            {t("about.tech.title")}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-midnight/70 leading-relaxed">
            {t("about.tech.text")}
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-3xl mx-auto">
            {["3D Scanner", "Digital RTG", "Laser", "CAD/CAM"].map((label) => (
              <div key={label} className="rounded-xl bg-white p-5 text-center shadow-sm">
                <SparklesIcon />
                <span className="mt-3 block text-sm font-semibold text-midnight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-midnight py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-alabaster md:text-4xl">
            {t("about.accreditations.title")}
          </h2>
          <p className="mt-6 text-lg text-alabaster/60 leading-relaxed">
            {t("about.accreditations.text")}
          </p>
        </div>
      </section>

      <section className="gold-gradient py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-midnight md:text-4xl">
            {t("about.cta.title")}
          </h2>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center rounded-xl bg-midnight px-8 py-3.5 text-sm font-semibold text-alabaster shadow-lg transition-all duration-200 hover:bg-midnight/90 hover:shadow-xl"
          >
            {t("about.cta.button")}
          </Link>
        </div>
      </section>
    </>
  );
}
