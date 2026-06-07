import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Karijera",
  description: "Pridružite se AURA Dental Clinic timu i budite deo vrhunskog stomatološkog tima.",
};

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

export default function CareersPage() {
  return (
    <>
      <section className="relative bg-midnight pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-alabaster md:text-5xl lg:text-6xl">
            Karijera
          </h1>
          <p className="mt-4 text-lg text-alabaster/60 max-w-2xl mx-auto">
            Pridružite se AURA timu i budite deo priče o vrhunskoj stomatologiji
          </p>
        </div>
      </section>

      <SectionWrapper background="alabaster">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-midnight md:text-4xl">
            Zašto AURA?
          </h2>
          <p className="mt-4 text-midnight/60">
            Verujemo da vrhunski rezultati dolaze od vrhunskih ljudi. Zato ulažemo u naš tim.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-midnight/5 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <BenefitIcon name={benefit.icon} />
              <h3 className="mt-4 font-heading text-lg font-semibold text-midnight">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-midnight/60">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white" id="open-positions">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-midnight md:text-4xl">
            Otvorene Pozicije
          </h2>
          <p className="mt-4 text-midnight/60">
            Trenutno tražimo talentovane pojedince za sledeće pozicije
          </p>
        </div>

        <div className="mt-12 space-y-6 max-w-3xl mx-auto">
          {OPEN_POSITIONS.map((pos) => (
            <div
              key={pos.title}
              className="rounded-2xl border border-midnight/5 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-midnight">
                    {pos.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                      {pos.type}
                    </span>
                    <span className="rounded-full bg-midnight/5 px-3 py-1 text-xs font-medium text-midnight/60">
                      {pos.location}
                    </span>
                  </div>
                </div>
                <Link
                  href={`mailto:${"careers@auradental.com"}?subject=Prijava%20za%20poziciju%3A%20${encodeURIComponent(pos.title)}`}
                  className="rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-alabaster transition-all duration-200 hover:bg-gold/90 shadow-lg shadow-gold/20"
                >
                  Prijavi se
                </Link>
              </div>
              <p className="mt-4 text-sm text-midnight/60 leading-relaxed">
                {pos.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-midnight/60">
            Ne vidite poziciju koja vam odgovara? Pošaljite nam otvorenu prijavu na{" "}
            <a
              href="mailto:careers@auradental.com"
              className="text-gold transition-colors hover:text-gold/80"
            >
              careers@auradental.com
            </a>
          </p>
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
