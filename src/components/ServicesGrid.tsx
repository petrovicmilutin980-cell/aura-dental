import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { SectionWrapper } from "@/components/SectionWrapper";

export function ServicesGrid() {
  return (
    <SectionWrapper background="grid" id="services">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold text-midnight md:text-4xl">
          Naše Premium Usluge
        </h2>
        <p className="mt-4 text-midnight/60">
          Vrhunska stomatološka rešenja prilagođena vašim potrebama
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {SERVICES.map((service) => (
          <Link
            key={service.id}
            href={`/usluge/${service.id}`}
            className="group rounded-2xl border border-midnight/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/5 cursor-pointer"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/5 transition-colors duration-300 group-hover:bg-gold/10">
              <ServiceIcon name={service.icon} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-midnight">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-midnight/60">
              {service.description}
            </p>
            <div className="mt-6 flex items-center gap-1 text-sm font-medium text-gold transition-all duration-300 group-hover:gap-2">
              <span>Saznajte više</span>
              <ArrowRightIcon />
            </div>
          </Link>
        ))}
      </div>
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
