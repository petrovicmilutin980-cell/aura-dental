import { ACCREDITATIONS } from "@/lib/constants";
import { SectionWrapper } from "@/components/SectionWrapper";

export function AccreditationsSection() {
  return (
    <SectionWrapper background="white" padding="compact">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-2xl font-bold text-midnight md:text-3xl">
          Sertifikati i Partnerstva
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
        {ACCREDITATIONS.map((item) => (
          <div
            key={item}
            className="group flex items-center justify-center rounded-xl border border-midnight/5 bg-alabaster px-6 py-8 transition-all duration-300 hover:border-gold/20 hover:bg-gold/5"
          >
            <span className="text-center text-sm font-semibold text-midnight/50 transition-colors duration-300 group-hover:text-midnight">
              {item}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
