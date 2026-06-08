"use client";

import { DOCTORS, DOCTOR_IMAGES } from "@/lib/constants";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { useI18n } from "@/lib/i18n/context";

export function TeamPageContent() {
  const { t } = useI18n();
  return (
    <>
      <section className="relative bg-midnight pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-alabaster md:text-5xl lg:text-6xl">
            {t("team.heading")}
          </h1>
          <p className="mt-4 text-lg text-alabaster/60 max-w-2xl mx-auto">
            {t("team.subtitle")}
          </p>
        </div>
      </section>

      <SectionWrapper background="alabaster">
        <div className="grid gap-10 md:grid-cols-2">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <ImagePlaceholder
                aspect="3/4"
                label={doctor.name}
                className="mb-6 max-w-sm mx-auto rounded-xl"
                src={DOCTOR_IMAGES[doctor.id] || "https://images.pexels.com/photos/6528869/pexels-photo-6528869.jpeg?w=600&q=80"}
              />

              <div className="text-center">
                <h2 className="font-heading text-2xl font-bold text-midnight">
                  {doctor.name}
                </h2>
                <p className="mt-1 text-gold font-medium">{t("doctor." + doctor.id + ".title")}</p>
              </div>

              <p className="mt-6 text-midnight/60 leading-relaxed">
                {t("doctor." + doctor.id + ".bio")}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-midnight/40 mb-2">
                    {t("team.specialties")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((s, i) => (
                      <span key={s} className="rounded-full bg-gold/5 px-3 py-1 text-xs font-medium text-gold-dark">
                        {t("doctor." + doctor.id + ".specialty." + i)}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-midnight/40 mb-2">
                    {t("team.languages")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map((l, i) => (
                      <span key={l} className="rounded-full bg-midnight/5 px-3 py-1 text-xs font-medium text-midnight/60">
                        {t("doctor." + doctor.id + ".language." + i)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-midnight/40 mb-2">
                  {t("team.certifications")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {doctor.certifications.map((c, i) => (
                    <span key={c} className="rounded-full border border-gold/20 px-3 py-1 text-xs font-medium text-gold-dark">
                      {t("doctor." + doctor.id + ".certification." + i)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="midnight" padding="compact">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-alabaster">
            {t("team.meetCTA")}
          </h2>
          <p className="mt-3 text-alabaster/60">
            {t("team.meetText")}
          </p>
          <a
            href="/zakazivanje"
            className="mt-6 inline-flex items-center rounded-xl bg-gold px-8 py-3 text-sm font-semibold text-midnight transition-all duration-200 hover:bg-gold-light"
          >
            {t("team.bookBtn")}
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}
