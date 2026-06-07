import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "AI Usluge",
  description: "Veštačka inteligencija u službi vašeg osmeha – AURA Dental Clinic.",
};

const AI_FEATURES = [
  {
    title: "AI Dijagnostika",
    description: "Naš CBCT skener sa AI analizom detektuje karijes, infekcije i koštane anomalije 3x brže od tradicionalnog pregleda, sa preciznošću od 99.7%.",
    icon: "MagnifyingGlass",
  },
  {
    title: "AI Smile Design",
    description: "Veštačka inteligencija simulira vaš budući osmeh u realnom vremenu. Unesite fotografiju i vidite rezultat pre početka tretmana.",
    icon: "Sparkles",
  },
  {
    title: "AI Planiranje Implantata",
    description: "Algoritmi mašinskog učenja optimizuju poziciju implantata za maksimalnu stabilnost i estetiku, smanjujući rizik od komplikacija za 94%.",
    icon: "Cpu",
  },
  {
    title: "AI Chatbot Asistent",
    description: "Naš pametni asistent dostupan 24/7 odgovara na pitanja, zakazuje termine i pruža personalizovane preporuke za vaše oralno zdravlje.",
    icon: "Chat",
  },
  {
    title: "AI Ortodontska Analiza",
    description: "Sistem veštačke inteligencije analizira zagrižaj i predviđa trajanje Invisalign® tretmana sa tačnošću od ±2 nedelje.",
    icon: "Ruler",
  },
  {
    title: "AI Preventivna Analiza",
    description: "Na osnovu vaše stomatološke istorije i genetskih faktora, AI model predviđa rizik od budućih oboljenja i predlaže personalizovani preventivni plan.",
    icon: "Shield",
  },
];

export default function AiUslugePage() {
  return (
    <>
      <section className="relative bg-midnight pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1 text-xs font-medium text-gold-light">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Budućnost stomatologije
          </div>
          <h1 className="font-heading text-4xl font-bold text-alabaster md:text-5xl lg:text-6xl">
            AI Usluge
          </h1>
          <p className="mt-4 text-lg text-alabaster/60 max-w-2xl mx-auto">
            Veštačka inteligencija koja transformiše vaše iskustvo – od dijagnostike do osmeha
          </p>
        </div>
      </section>

      <SectionWrapper background="alabaster">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-midnight md:text-4xl">
            Kako AI unapređuje vaš tretman?
          </h2>
          <p className="mt-4 text-midnight/60">
            U AURA klinici koristimo najsavremenije AI tehnologije koje rade u pozadini — vi vidite samo savršen rezultat.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {AI_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-midnight/5 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <AiIcon name={feature.icon} />
              <h3 className="mt-4 font-heading text-lg font-semibold text-midnight">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-midnight/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="midnight" padding="compact">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold text-alabaster">
            Iskusite razliku već danas
          </h2>
          <p className="mt-3 text-alabaster/60">
            Vaš osmeh zaslužuje najbolje što tehnologija može da pruži
          </p>
          <Link
            href="/zakazivanje"
            className="mt-6 inline-flex items-center rounded-xl bg-gold px-8 py-3 text-sm font-semibold text-midnight transition-all duration-200 hover:bg-gold-light shadow-lg shadow-gold/20"
          >
            Zakažite termin uz AI asistenciju
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}

function AiIcon({ name }: { name: string }) {
  const className = "h-6 w-6 text-gold";
  switch (name) {
    case "MagnifyingGlass":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      );
    case "Sparkles":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      );
    case "Cpu":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M6.75 21v-1.5M21 6.75H19.5M3 6.75H4.5M21 12h-1.5M3 12H4.5M21 17.25h-1.5M3 17.25H4.5M12 3v19.5M16.5 3v1.5M7.5 3v1.5M12 21v-1.5M16.5 21v-1.5M7.5 21v-1.5M15 9.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75z" />
        </svg>
      );
    case "Chat":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      );
    case "Ruler":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      );
    case "Shield":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
    default:
      return null;
  }
}