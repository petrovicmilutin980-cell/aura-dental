"use client";

import Link from "next/link";
import { DOCTORS, DOCTOR_IMAGES } from "@/lib/constants";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { useI18n } from "@/lib/i18n/context";

export function TeamSection() {
  const { t } = useI18n();
  return (
    <SectionWrapper background="white" id="team">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold text-midnight md:text-4xl">
          {t("team.heading")}
        </h2>
        <p className="mt-4 text-midnight/60">
          {t("team.subtitle")}
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {DOCTORS.map((doctor) => (
          <div
            key={doctor.id}
            className="group rounded-2xl border border-midnight/5 bg-alabaster p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <ImagePlaceholder
              aspect="3/4"
              label={doctor.name}
              className="mb-5 rounded-xl"
              src={DOCTOR_IMAGES[doctor.id] || "https://images.pexels.com/photos/3779704/pexels-photo-3779704.jpeg?w=600&q=80"}
            />

            <h3 className="font-heading text-lg font-semibold text-midnight">
              {doctor.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-gold">{t("doctor." + doctor.id + ".title")}</p>
            <p className="mt-3 text-sm leading-relaxed text-midnight/60 line-clamp-3">
              {t("doctor." + doctor.id + ".bio")}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {doctor.specialties.slice(0, 2).map((s, i) => (
                <span
                  key={s}
                  className="rounded-full bg-gold/5 px-3 py-1 text-xs font-medium text-gold-dark"
                >
                  {t("doctor." + doctor.id + ".specialty." + i)}
                </span>
              ))}
            </div>
          </div>
        ))}

        <Link
          href="/tim"
          className="flex items-center justify-center rounded-2xl border-2 border-dashed border-midnight/10 bg-alabaster/50 p-8 transition-all duration-300 hover:border-gold/30 hover:bg-gold/5 cursor-pointer"
        >
          <div className="text-center">
            <span className="text-3xl font-light text-midnight/30">+</span>
            <p className="mt-2 text-sm font-medium text-midnight/40">
          {t("team.viewAll")}
            </p>
          </div>
        </Link>
      </div>
    </SectionWrapper>
  );
}
