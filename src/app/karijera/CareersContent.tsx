"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useI18n } from "@/lib/i18n/context";

const OPEN_POSITIONS = [
  {
    title: "Specijalista oralne hirurgije",
    type: "Puno radno vreme",
    location: "Beograd",
    description: "Tražimo iskusnog oralnog hirurga sa minimum 5 godina iskustva u implantologiji i koštanoj rekonstrukciji. Zvanični Straumann® sertifikat je prednost.",
  },
  {
    title: "Stomatološki asistent",
    type: "Puno radno vreme",
    location: "Beograd",
    description: "Potrebna nam je osoba sa završenom višom medicinskom školom koja želi da radi u moderno opremljenoj klinici sa najsavremenijom tehnologijom.",
  },
  {
    title: "Recepcioner / Patient Coordinator",
    type: "Puno radno vreme",
    location: "Beograd",
    description: "Tražimo komunikativnu osobu sa odličnim organizacionim veštinama koja će biti prvi kontakt pacijenata sa našom klinikom. Poznavanje engleskog jezika je obavezno.",
  },
  {
    title: "Higijeničar / Dentalni higijeničar",
    type: "Puno / pola radnog vremena",
    location: "Beograd",
    description: "Prilika za higijeničara sa iskustvom u profesionalnom čišćenju i preventivnoj stomatologiji. Rad u prijatnom okruženju sa vrhunskom opremom.",
  },
];

const BENEFITS = [
  {
    title: "Konkurentna primanja",
    description: "Iznadprosečna plata redovne bonuse i mogućnost napredovanja.",
    icon: "Euro",
  },
  {
    title: "Stručno usavršavanje",
    description: "Finansiranje sertifikacija i kurseva u zemlji i inostranstvu.",
    icon: "AcademicCap",
  },
  {
    title: "Savremena oprema",
    description: "Rad sa najmodernijom tehnologijom i premium materijalima.",
    icon: "Wrench",
  },
  {
    title: "Fleksibilno radno vreme",
    description: "Mogućnost prilagođavanja radnog vremena vašim potrebama.",
    icon: "Clock",
  },
];

export function CareersContent() {
  const { t, locale } = useI18n();
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formCv, setFormCv] = useState<File | null>(null);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLDivElement>(null);
  const cvInputRef = useRef<HTMLInputElement>(null);

  const benefitKeys = [
    { title: "careers.benefit1", desc: "careers.benefit1Desc" },
    { title: "careers.benefit2", desc: "careers.benefit2Desc" },
    { title: "careers.benefit3", desc: "careers.benefit3Desc" },
    { title: "careers.benefit4", desc: "careers.benefit4Desc" },
  ];

  const positionKeys = [
    { title: "careers.position1", desc: "careers.position1Desc", type: "careers.fullTime" },
    { title: "careers.position2", desc: "careers.position2Desc", type: "careers.fullTime" },
    { title: "careers.position3", desc: "careers.position3Desc", type: "careers.fullTime" },
    { title: "careers.position4", desc: "careers.position4Desc", type: "careers.partTime" },
  ];

  function scrollToForm(posTitle: string) {
    setSelectedPosition(posTitle);
    setFormStatus("idle");
    setFormErrors({});
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function validateForm(): boolean {
    const errors: Record<string, string> = {};
    if (!formName.trim()) errors.name = t("careers.form.requiredName");
    if (!formEmail.trim()) errors.email = t("careers.form.requiredEmail");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formEmail)) errors.email = t("careers.form.invalidEmail");
    if (!formCv) errors.cv = t("careers.form.requiredCv");
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus("sending");
    const data = new FormData();
    data.append("name", formName.trim());
    data.append("email", formEmail.trim());
    data.append("phone", formPhone.trim());
    data.append("message", formMessage.trim());
    data.append("position", selectedPosition);
    if (formCv) data.append("cv", formCv);

    try {
      const res = await fetch("/api/careers/apply", { method: "POST", body: data });
      if (!res.ok) throw new Error("Failed");
      setFormStatus("success");
      setFormName("");
      setFormEmail("");
      setFormPhone("");
      setFormMessage("");
      setFormCv(null);
      setSelectedPosition("");
      if (cvInputRef.current) cvInputRef.current.value = "";
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <>
      <section className="relative bg-midnight pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-alabaster md:text-5xl lg:text-6xl">
            {t("careers.title")}
          </h1>
          <p className="mt-4 text-lg text-alabaster/60 max-w-2xl mx-auto">
            {t("careers.subtitle")}
          </p>
        </div>
      </section>

      <SectionWrapper background="alabaster">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-midnight md:text-4xl">
            {t("careers.whyAura")}
          </h2>
          <p className="mt-4 text-midnight/60">
            {t("careers.whyAuraText")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {BENEFITS.map((benefit, i) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-midnight/5 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <BenefitIcon name={benefit.icon} />
              <h3 className="mt-4 font-heading text-lg font-semibold text-midnight">
                {t(benefitKeys[i].title)}
              </h3>
              <p className="mt-2 text-sm text-midnight/60">
                {t(benefitKeys[i].desc)}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white" id="open-positions">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-midnight md:text-4xl">
            {t("careers.positions")}
          </h2>
          <p className="mt-4 text-midnight/60">
            {t("careers.positionsDesc")}
          </p>
        </div>

        <div className="mt-12 space-y-6 max-w-3xl mx-auto">
          {OPEN_POSITIONS.map((pos, i) => (
            <div
              key={pos.title}
              className="rounded-2xl border border-midnight/5 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-midnight">
                    {t(positionKeys[i].title)}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                      {t(positionKeys[i].type)}
                    </span>
                    <span className="rounded-full bg-midnight/5 px-3 py-1 text-xs font-medium text-midnight/60">
                      {t("careers.location")}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToForm(t(positionKeys[i].title))}
                  className="rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-alabaster transition-all duration-200 hover:bg-gold/90 shadow-lg shadow-gold/20 cursor-pointer"
                >
                  {t("careers.apply")}
                </button>
              </div>
              <p className="mt-4 text-sm text-midnight/60 leading-relaxed">
                {t(positionKeys[i].desc)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-midnight/60">
            {t("careers.notFound")}{" "}
            <a
              href="mailto:careers@auradental.com"
              className="text-gold transition-colors hover:text-gold/80"
            >
              careers@auradental.com
            </a>
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="alabaster" id="apply-section">
        <div ref={formRef} className="mx-auto max-w-2xl">
          <h2 className="text-center font-heading text-3xl font-bold text-midnight md:text-4xl">
            {t("careers.form.title")}
          </h2>

          {selectedPosition && (
            <p className="mt-2 text-center text-sm text-midnight/60">
              {t("careers.apply")}: <span className="font-semibold text-gold">{selectedPosition}</span>
            </p>
          )}

          {formStatus === "success" ? (
            <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
              <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-4 text-lg font-semibold text-green-800">{t("careers.form.success")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block text-sm font-medium text-midnight mb-1.5">
                  {t("careers.form.name")} <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => { setFormName(e.target.value); setFormErrors((prev) => ({ ...prev, name: "" })); }}
                  className={`w-full rounded-xl border ${formErrors.name ? "border-red-300" : "border-midnight/10"} bg-white px-4 py-3 text-sm text-midnight placeholder:text-midnight/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-colors`}
                />
                {formErrors.name && <p className="mt-1 text-xs text-red-500">{formErrors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-midnight mb-1.5">
                  {t("careers.form.email")} <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={formEmail}
                  onChange={(e) => { setFormEmail(e.target.value); setFormErrors((prev) => ({ ...prev, email: "" })); }}
                  className={`w-full rounded-xl border ${formErrors.email ? "border-red-300" : "border-midnight/10"} bg-white px-4 py-3 text-sm text-midnight placeholder:text-midnight/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-colors`}
                />
                {formErrors.email && <p className="mt-1 text-xs text-red-500">{formErrors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-midnight mb-1.5">
                  {t("careers.form.phone")}
                </label>
                <input
                  type="tel"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  className="w-full rounded-xl border border-midnight/10 bg-white px-4 py-3 text-sm text-midnight placeholder:text-midnight/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-midnight mb-1.5">
                  {t("careers.form.cv")} <span className="text-red-400">*</span>
                </label>
                <div className={`relative rounded-xl border ${formErrors.cv ? "border-red-300" : "border-midnight/10"} border-dashed bg-white px-4 py-6 text-center transition-colors hover:border-gold/40`}>
                  <input
                    ref={cvInputRef}
                    type="file"
                    accept=".pdf,.docx,.doc"
                    onChange={(e) => { setFormCv(e.target.files?.[0] || null); setFormErrors((prev) => ({ ...prev, cv: "" })); }}
                    className="absolute inset-0 cursor-pointer opacity-0"
                  />
                  <svg className="mx-auto h-8 w-8 text-midnight/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  <p className="mt-2 text-sm text-midnight/50">
                    {formCv ? formCv.name : t("careers.form.cv")}
                  </p>
                </div>
                {formErrors.cv && <p className="mt-1 text-xs text-red-500">{formErrors.cv}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-midnight mb-1.5">
                  {t("careers.form.message")}
                </label>
                <textarea
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full rounded-xl border border-midnight/10 bg-white px-4 py-3 text-sm text-midnight placeholder:text-midnight/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-colors resize-none"
                />
              </div>

              {formStatus === "error" && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {t("careers.form.error")}
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="flex w-full items-center justify-center rounded-xl bg-midnight px-6 py-3.5 text-sm font-semibold text-alabaster shadow-lg shadow-midnight/10 transition-all duration-200 hover:bg-midnight/90 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {formStatus === "sending" ? t("careers.form.sending") : t("careers.form.submit")}
              </button>
            </form>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}

function BenefitIcon({ name }: { name: string }) {
  const className = "h-6 w-6 text-gold";
  switch (name) {
    case "Euro":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "AcademicCap":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
      );
    case "Wrench":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-6.36 6.36a2.25 2.25 0 01-3.18 0L.75 19.11a2.25 2.25 0 010-3.18l6.36-6.36m7.5 7.5l6.36-6.36a2.25 2.25 0 000-3.18L19.11.75a2.25 2.25 0 00-3.18 0l-6.36 6.36m4.24 4.24l-6.36 6.36M19.5 4.5l-4.24 4.24" />
        </svg>
      );
    case "Clock":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    default:
      return null;
  }
}
