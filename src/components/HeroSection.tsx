"use client";

import Link from "next/link";
import { Button } from "@/components/Button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80&fit=crop"
          alt="AURA Dental Clinic"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-midnight/85 via-midnight/70 to-midnight/85 z-10" />
      <div className="absolute inset-0 bg-grid opacity-20 z-10" />

      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold-light">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Premium stomatološka klinika u Beogradu
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight text-alabaster md:text-6xl lg:text-7xl">
            Osmeh koji inspiriše samopouzdanje.
            <br />
            <span className="gold-gradient-text">Bez bola, bez kompromisa.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-alabaster/70 md:text-xl">
            Doživite novu eru stomatologije u najmodernijoj premium klinici u regionu.
            Vrhunski švajcarski standardi, lideri u implantologiji i potpuno bezbolni
            estetski tretmani.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/zakazivanje"
              className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-base font-medium transition-all duration-200 cursor-pointer bg-gold text-alabaster hover:bg-gold-light shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30"
            >
              Zakažite besplatne konsultacije
            </Link>
            <Button
              variant="emergency"
              size="lg"
              onClick={() => window.location.href = "tel:+381659994474"}
            >
              Hitan slučaj? Pozovite odmah
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-alabaster/50">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon />
              <span>Bezbolna procedura</span>
            </div>
            <div className="flex items-center gap-2">
              <AwardIcon />
              <span>Straumann® partner</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon />
              <span>Brzi oporavak</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-gradient-to-t from-alabaster to-transparent" />
    </section>
  );
}

function ShieldCheckIcon() {
  return (
    <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.896m0 0a6.023 6.023 0 01-2.77-.896" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
