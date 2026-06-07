"use client";

import { useState } from "react";

type Step = 1 | 2 | 3 | 4;

const VISIT_REASONS = [
  "Estetska transformacija (Fasete, Izbeljivanje)",
  "Nadoknada zuba (Implantati, Mostovi)",
  "Rutinski pregled / Čišćenje kamenca",
  "HITAN SLUČAJ (Akutan bol ili otok)",
] as const;

export function BookingForm() {
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

  const update = (field: string, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 4) setStep((step + 1) as Step);
  };

  const prevStep = () => {
    if (step > 1) setStep((step - 1) as Step);
  };

  return (
    <div className="mx-auto max-w-2xl">
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
              {s === 1 && "Razlog"}
              {s === 2 && "Dokumentacija"}
              {s === 3 && "Termin"}
              {s === 4 && "Podaci"}
            </span>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-sm">
        {step === 1 && (
          <div>
            <h3 className="font-heading text-xl font-semibold text-midnight">
              Razlog posete
            </h3>
            <p className="mt-2 text-sm text-midnight/60">
              Izaberite razlog zbog kog želite da nas posetite
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
                  {reason}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="font-heading text-xl font-semibold text-midnight">
              Dokumentacija
            </h3>
            <p className="mt-2 text-sm text-midnight/60">
              Ukoliko posedujete 3D ortopan snimak ne stariji od 6 meseci, priložite ga ovde
            </p>
            <div className="mt-6">
              <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-midnight/10 p-8 transition-colors duration-200 hover:border-gold/30 hover:bg-gold/5">
                <svg className="h-8 w-8 text-midnight/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                <p className="mt-3 text-sm text-midnight/50">
                  {formData.xrayUpload ? formData.xrayUpload.name : "Kliknite da biste dodali snimak (opciono)"}
                </p>
                <p className="mt-1 text-xs text-midnight/30">JPEG, PNG ili DICOM - max 50MB</p>
              </label>
            </div>
            <div className="mt-8 flex gap-3">
              <button onClick={prevStep} className="rounded-xl border border-midnight/10 px-6 py-2.5 text-sm font-medium text-midnight/60 transition-colors duration-200 hover:border-gold/30 hover:text-gold cursor-pointer">
                Nazad
              </button>
              <button onClick={nextStep} className="rounded-xl bg-midnight px-6 py-2.5 text-sm font-medium text-alabaster transition-colors duration-200 hover:bg-midnight/90 cursor-pointer">
                Preskoči i nastavi
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="font-heading text-xl font-semibold text-midnight">
              Izbor termina
            </h3>
            <p className="mt-2 text-sm text-midnight/60">
              Izaberite željeni datum i vreme posete
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
                Nakon slanja, naš tim će vas kontaktirati sa dostupnim terminima
              </p>
            </div>
            <div className="mt-8 flex gap-3">
              <button onClick={prevStep} className="rounded-xl border border-midnight/10 px-6 py-2.5 text-sm font-medium text-midnight/60 transition-colors duration-200 hover:border-gold/30 hover:text-gold cursor-pointer">
                Nazad
              </button>
              <button
                onClick={nextStep}
                disabled={!formData.appointmentDate}
                className="rounded-xl bg-midnight px-6 py-2.5 text-sm font-medium text-alabaster transition-colors duration-200 hover:bg-midnight/90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                Nastavi
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 className="font-heading text-xl font-semibold text-midnight">
              Kontakt podaci
            </h3>
            <p className="mt-2 text-sm text-midnight/60">
              Popunite podatke kako bismo mogli da vas kontaktiramo
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-midnight/70 mb-1.5">
                  Ime i prezime *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  className="w-full rounded-xl border border-midnight/10 p-3.5 text-sm text-midnight transition-colors duration-200 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder="Marko Marković"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-midnight/70 mb-1.5">
                  Telefon *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full rounded-xl border border-midnight/10 p-3.5 text-sm text-midnight transition-colors duration-200 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder="+381 6X XXX XXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-midnight/70 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full rounded-xl border border-midnight/10 p-3.5 text-sm text-midnight transition-colors duration-200 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder="marko@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-midnight/70 mb-2">
                  Da li ste već bili kod nas? *
                </label>
                <div className="flex gap-3">
                  {["Da, prvi put dolazim", "Ne, postojeći sam pacijent"].map((opt) => (
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
                Nazad
              </button>
              <button
                onClick={() => alert("Forma poslata! Naš tim će vas kontaktirati u roku od 24h.")}
                disabled={!formData.fullName || !formData.phone || !formData.email || !formData.isNewPatient}
                className="rounded-xl bg-gold px-6 py-2.5 text-sm font-semibold text-midnight transition-all duration-200 hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                Zakažite termin
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 text-center text-xs text-midnight/30">
        Popunjavanjem forme prihvatate našu Politiku privatnosti
      </p>
    </div>
  );
}
