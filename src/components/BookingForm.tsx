"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";

type Step = 1 | 2 | 3 | 4;

const VISIT_REASONS = [
  "booking.reason.aesthetics",
  "booking.reason.implants",
  "booking.reason.checkup",
  "booking.reason.emergency",
] as const;

export function BookingForm() {
  const { t } = useI18n();
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    visitReason: "",
    xrayUpload: null as File | null,
    appointmentDate: "",
    fullName: "",
    phone: "",
    email: "",
    isNewPatient: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update = (field: string, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 4) setStep((step + 1) as Step);
  };

  const prevStep = () => {
    if (step > 1) setStep((step - 1) as Step);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          xrayNote: formData.xrayUpload ? "Priložen snimak" : null,
        }),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setError("Došlo je do greške. Molimo vas pozovite nas direktno ili pokušajte ponovo.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      {submitted ? (
        <div className="rounded-2xl bg-white p-12 shadow-sm text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 mb-6">
            <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-heading text-2xl font-bold text-midnight mb-3">
            Vaš zahtev je poslat!
          </h3>
          <p className="text-midnight/60 max-w-md mx-auto">
            Naš tim će vas kontaktirati u roku od 24h radi potvrde termina. Hvala na poverenju!
          </p>
        </div>
      ) : (
      <>
      {error && (
        <div className="mb-6 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          {error}
        </div>
      )}
      <div className="mb-10 flex items-center justify-between">
        {([1, 2, 3, 4] as const).map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                step >= s
                  ? "bg-gold text-midnight"
                  : "bg-midnight/5 text-midnight/30"
              }`}
            >
              {s}
            </div>
            <span
              className={`hidden text-xs font-medium sm:inline ${
                step >= s ? "text-midnight" : "text-midnight/30"
              }`}
            >
              {s === 1 && t("booking.step1")}
              {s === 2 && t("booking.step2")}
              {s === 3 && t("booking.step3")}
              {s === 4 && t("booking.step4")}
            </span>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-sm">
        {step === 1 && (
          <div>
            <h3 className="font-heading text-xl font-semibold text-midnight">
              {t("booking.reason")}
            </h3>
            <p className="mt-2 text-sm text-midnight/60">
              {t("booking.reasonDesc")}
            </p>
            <div className="mt-6 space-y-3">
              {VISIT_REASONS.map((reason) => (
                <button
                  key={reason}
                  onClick={() => {
                    update("visitReason", reason);
                    nextStep();
                  }}
                  className={`w-full rounded-xl border p-4 text-left text-sm font-medium transition-all duration-200 cursor-pointer ${
                    formData.visitReason === reason
                      ? "border-gold bg-gold/5 text-midnight"
                      : "border-midnight/10 text-midnight/70 hover:border-gold/30 hover:bg-gold/5"
                  }`}
                >
                  {t(reason)}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="font-heading text-xl font-semibold text-midnight">
              {t("booking.docs")}
            </h3>
            <p className="mt-2 text-sm text-midnight/60">
              {t("booking.docsDesc")}
            </p>
            <div className="mt-6">
              <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-midnight/10 p-8 transition-colors duration-200 hover:border-gold/30 hover:bg-gold/5">
                <svg className="h-8 w-8 text-midnight/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                <p className="mt-3 text-sm text-midnight/50">
                  {formData.xrayUpload ? formData.xrayUpload.name : t("booking.docsUpload")}
                </p>
                <p className="mt-1 text-xs text-midnight/30">{t("booking.docsHint")}</p>
              </label>
            </div>
            <div className="mt-8 flex gap-3">
              <button onClick={prevStep} className="rounded-xl border border-midnight/10 px-6 py-2.5 text-sm font-medium text-midnight/60 transition-colors duration-200 hover:border-gold/30 hover:text-gold cursor-pointer">
                {t("booking.back")}
              </button>
              <button onClick={nextStep} className="rounded-xl bg-midnight px-6 py-2.5 text-sm font-medium text-alabaster transition-colors duration-200 hover:bg-midnight/90 cursor-pointer">
                {t("booking.skip")}
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="font-heading text-xl font-semibold text-midnight">
              {t("booking.datetime")}
            </h3>
            <p className="mt-2 text-sm text-midnight/60">
              {t("booking.datetimeDesc")}
            </p>
            <div className="mt-6">
              <input
                type="date"
                value={formData.appointmentDate}
                onChange={(e) => update("appointmentDate", e.target.value)}
                className="w-full rounded-xl border border-midnight/10 p-4 text-sm text-midnight transition-colors duration-200 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                min={new Date().toISOString().split("T")[0]}
              />
              <p className="mt-3 text-xs text-midnight/40">
                {t("booking.datetimeInfo")}
              </p>
            </div>
            <div className="mt-8 flex gap-3">
              <button onClick={prevStep} className="rounded-xl border border-midnight/10 px-6 py-2.5 text-sm font-medium text-midnight/60 transition-colors duration-200 hover:border-gold/30 hover:text-gold cursor-pointer">
                {t("booking.back")}
              </button>
              <button
                onClick={nextStep}
                disabled={!formData.appointmentDate}
                className="rounded-xl bg-midnight px-6 py-2.5 text-sm font-medium text-alabaster transition-colors duration-200 hover:bg-midnight/90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {t("booking.continue")}
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 className="font-heading text-xl font-semibold text-midnight">
              {t("booking.contactInfo")}
            </h3>
            <p className="mt-2 text-sm text-midnight/60">
              {t("booking.contactDesc")}
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-midnight/70 mb-1.5">
                  {t("booking.nameLabel")}
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  className="w-full rounded-xl border border-midnight/10 p-3.5 text-sm text-midnight transition-colors duration-200 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder={t("booking.namePlaceholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-midnight/70 mb-1.5">
                  {t("booking.phoneLabel")}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full rounded-xl border border-midnight/10 p-3.5 text-sm text-midnight transition-colors duration-200 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder={t("booking.phonePlaceholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-midnight/70 mb-1.5">
                  {t("booking.emailLabel")}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full rounded-xl border border-midnight/10 p-3.5 text-sm text-midnight transition-colors duration-200 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder={t("booking.emailPlaceholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-midnight/70 mb-2">
                  {t("booking.newPatient")}
                </label>
                <div className="flex gap-3">
                  {[t("booking.newPatient.yes"), t("booking.newPatient.no")].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => update("isNewPatient", opt)}
                      className={`flex-1 rounded-xl border p-3 text-sm font-medium transition-all duration-200 cursor-pointer ${
                        formData.isNewPatient === opt
                          ? "border-gold bg-gold/5 text-midnight"
                          : "border-midnight/10 text-midnight/50 hover:border-gold/30"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <button onClick={prevStep} className="rounded-xl border border-midnight/10 px-6 py-2.5 text-sm font-medium text-midnight/60 transition-colors duration-200 hover:border-gold/30 hover:text-gold cursor-pointer">
                {t("booking.back")}
              </button>
              <button
                onClick={handleSubmit}
                disabled={!formData.fullName || !formData.phone || !formData.email || !formData.isNewPatient || submitting}
                className="rounded-xl bg-gold px-6 py-2.5 text-sm font-semibold text-midnight transition-all duration-200 hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {submitting ? "Šaljem..." : t("booking.submit")}
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 text-center text-xs text-midnight/30">
        {t("booking.disclaimer")}
      </p>
      </>
    )}
    </div>
  );
}
