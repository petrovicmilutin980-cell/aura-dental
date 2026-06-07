"use client";

import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { useI18n } from "@/lib/i18n/context";

export function GalleryPageContent() {
  const { t } = useI18n();
  return (
    <>
      <section className="relative bg-midnight pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-alabaster md:text-5xl lg:text-6xl">
            {t("gallery.pageHeading")}
          </h1>
          <p className="mt-4 text-lg text-alabaster/60 max-w-2xl mx-auto">
            {t("gallery.pageSubtitle")}
          </p>
        </div>
      </section>

      <BeforeAfterGallery />
    </>
  );
}
