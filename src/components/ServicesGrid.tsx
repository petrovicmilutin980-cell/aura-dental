"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n/context";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const SERVICE_DETAILS: Record<string, { image: string; fullDesc: string; highlights: string[] }> = {
  implantologija: {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80&fit=crop",
    fullDesc: "Straumann® implantati su zlatni standard u implantologiji. Sa preko 60 godina istraživanja i stopom uspešnosti od preko 98%, pružaju doživotno rešenje za nedostatak zuba. Proces uključuje 3D dijagnostiku, kompjutersko planiranje i bezbolnu ugradnju uz mogućnost sedacije.",
    highlights: ["Doživotna garancija", "Bezbolna procedura", "Prirodan izgled", "Brzi oporavak"],
  },
  "estetska-stomatologija": {
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80&fit=crop",
    fullDesc: "Transformišite svoj osmeh uz naše premium estetske tretmane. Od keramičkih faseta do profesionalnog izbeljivanja Zoom! sistemom, svaki tretman je prilagođen vašim željama uz digitalni Smile Design i minimalno invazivne tehnike.",
    highlights: ["Digitalni dizajn", "Minimalno invazivno", "15–20 godina trajnosti", "Prirodan rezultat"],
  },
  ortodoncija: {
    image: "https://images.pexels.com/photos/6529105/pexels-photo-6529105.jpeg?w=800&q=80",
    fullDesc: "Invisalign® je najnapredniji sistem za ispravljanje zuba bez bravica. Prozirne folije su gotovo nevidljive, udobne i skidaju se za jelo i pranje zuba. Rezultate vidite već na prvoj poseti kroz 3D simulaciju sa preciznošću od 98%.",
    highlights: ["Nevidljive folije", "Bez metala", "6–18 meseci", "3D simulacija"],
  },
};

const serviceKeyMap: Record<string, string> = {
  implantologija: "implantology",
  "estetska-stomatologija": "aesthetics",
  ortodoncija: "orthodontics",
};

export function ServicesGrid() {
  const { t } = useI18n();
  const [modalService, setModalService] = useState<string | null>(null);

  useEffect(() => {
    if (modalService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [modalService]);

  const activeDetail = modalService ? SERVICE_DETAILS[modalService] : null;
  const activeService = modalService ? SERVICES.find((s) => s.id === modalService) : null;

  return (
    <SectionWrapper background="grid" id="services">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold text-midnight md:text-4xl">
          {t("services.heading")}
        </h2>
        <p className="mt-4 text-midnight/60">
          {t("services.subtitle")}
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            onClick={() => setModalService(service.id)}
            className="group rounded-2xl border border-midnight/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/5 cursor-pointer"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/5 transition-colors duration-300 group-hover:bg-gold/10">
              <ServiceIcon name={service.icon} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-midnight">
              {t(`services.${serviceKeyMap[service.id]}.title`)}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-midnight/60">
              {t(`services.${serviceKeyMap[service.id]}.desc`)}
            </p>
            <div className="mt-6 flex items-center gap-1 text-sm font-medium text-gold transition-all duration-300 group-hover:gap-2">
              <span>{t("services.learnMore")}</span>
              <ArrowRightIcon />
            </div>
          </div>
        ))}
      </div>

      {modalService && activeDetail && activeService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight/70 backdrop-blur-md p-4"
          onClick={() => setModalService(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-3xl max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalService(null)}
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-alabaster/90 text-midnight hover:bg-alabaster transition-all cursor-pointer shadow-lg"
              aria-label="Close"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="aspect-[16/9] w-full overflow-hidden">
              <img src={activeDetail.image} alt={t(`services.${serviceKeyMap[activeService.id]}.title`)} className="h-full w-full object-cover" />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block h-2 w-2 rounded-full bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">{t("services.premiumBadge")}</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-midnight">{t(`services.${serviceKeyMap[activeService.id]}.title`)}</h3>
              <p className="mt-3 text-midnight/60 leading-relaxed">{t(`services.${serviceKeyMap[activeService.id]}.fullDesc`)}</p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-gold/5 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold/70">{t("services.price")}</p>
                  <p className="mt-1 font-heading text-xl font-bold text-midnight">{t(`services.${serviceKeyMap[activeService.id]}.price`)}</p>
                </div>
                <div className="rounded-xl bg-gold/5 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold/70">{t("services.duration")}</p>
                  <p className="mt-1 font-heading text-xl font-bold text-midnight">{t(`services.${serviceKeyMap[activeService.id]}.duration`)}</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {activeDetail.highlights.map((_, idx) => (
                  <div key={idx} className="flex items-center gap-2 rounded-xl bg-gold/5 px-4 py-3">
                    <svg className="h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm font-medium text-midnight">{t(`services.${serviceKeyMap[activeService.id]}.highlight${idx + 1}`)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-midnight/5 pt-6">
                <p className="text-sm font-semibold text-midnight">{t("services.includes")}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {activeService.features.map((_, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-midnight/60">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/10">
                        <svg className="h-3 w-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      {t(`services.${serviceKeyMap[activeService.id]}.feature${idx + 1}`)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex gap-3">
                <Link
                  href={activeService.ctaLink}
                  className="flex-1 rounded-xl bg-gold px-6 py-3 text-center text-sm font-semibold text-alabaster transition-all duration-200 hover:bg-gold/90 shadow-lg shadow-gold/20"
                >
                  {t(`services.${serviceKeyMap[activeService.id]}.cta`)}
                </Link>
                <button
                  onClick={() => setModalService(null)}
                  className="rounded-xl border border-midnight/10 px-6 py-3 text-sm font-medium text-midnight/60 transition-all duration-200 hover:border-gold/30 hover:text-gold cursor-pointer"
                >
                  {t("services.close")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const className = "h-7 w-7 text-gold";
  switch (name) {
    case "Tooth":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m0 0l-3-3m3 3l3-3" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 9.75h13.5M5.25 14.25h13.5" />
        </svg>
      );
    case "Sparkles":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      );
    case "Align":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
      );
    default:
      return null;
  }
}

function ArrowRightIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
