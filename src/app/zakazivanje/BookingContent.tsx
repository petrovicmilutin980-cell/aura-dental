"use client";

import { useI18n } from "@/lib/i18n/context";
import { BookingForm } from "@/components/BookingForm";
import { SITE, WORKING_HOURS } from "@/lib/constants";

export function BookingContent() {
  const { t } = useI18n();

  return (
    <>
      <section className="relative bg-midnight pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-alabaster md:text-5xl lg:text-6xl">
            {t("booking.title")}
          </h1>
          <p className="mt-4 text-lg text-alabaster/60 max-w-2xl mx-auto">
            {t("booking.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-alabaster">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <BookingForm />
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-midnight">
                  {t("booking.contactInfo")}
                </h3>
                <div className="mt-4 space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-midnight">{t("contact.phone")}</p>
                    <a href={`tel:${SITE.phone.reception}`} className="text-midnight/60 hover:text-gold transition-colors">
                      {SITE.phone.reception}
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-midnight">{t("contact.email")}</p>
                    <a href={`mailto:${SITE.email.primary}`} className="text-midnight/60 hover:text-gold transition-colors break-all">
                      {SITE.email.primary}
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-midnight">{t("contact.emergency")}</p>
                    <a href={`tel:${SITE.phone.emergency}`} className="text-emergency hover:text-emergency-dark transition-colors font-semibold">
                      {SITE.phone.emergency}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-midnight">
                  {t("contact.workingHours")}
                </h3>
                <div className="mt-4 space-y-3">
                  {WORKING_HOURS.map((wh) => (
                    <div key={wh.days} className="text-sm">
                      <p className="font-medium text-midnight">{wh.days}</p>
                      <p className="text-midnight/60">{wh.hours}</p>
                      <p className="text-xs text-midnight/40 italic">{wh.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-midnight">
                  {t("contact.parking")}
                </h3>
                <p className="mt-2 text-sm text-midnight/60">
                  {SITE.parking.type} — besplatan za pacijente
                </p>
                <p className="mt-1 text-xs text-midnight/40">
                  {SITE.parking.instructions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
