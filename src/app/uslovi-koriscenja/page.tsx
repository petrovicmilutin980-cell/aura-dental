import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uslovi Korišćenja",
  description: "Uslovi korišćenja sajta AURA DENTAL CLINIC d.o.o. Beograd",
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="relative bg-midnight pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative mx-auto max-w-4xl px-6">
          <h1 className="font-heading text-4xl font-bold text-alabaster md:text-5xl">
            Uslovi Korišćenja
          </h1>
          <p className="mt-4 text-alabaster/60">
            Poslednja izmena: 1. jun 2026.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-alabaster">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose prose-lg max-w-none space-y-8 text-midnight/70">
            <section>
              <h2 className="font-heading text-2xl font-bold text-midnight">1. Prihvatanje uslova</h2>
              <p className="mt-3 leading-relaxed">
                Korišćenjem sajta AURA Dental Clinic prihvatate ove uslove korišćenja. Ukoliko se
                ne slažete sa bilo kojim delom uslova, molimo vas da ne koristite naš sajt.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-midnight">2. Usluge</h2>
              <p className="mt-3 leading-relaxed">
                Informacije na ovom sajtu služe u informativne svrhe i ne predstavljaju medicinski
                savet. Sve informacije o tretmanima i procedurama su opšteg karaktera. Za
                individualne medicinske savete, molimo vas da zakažete konsultaciju.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-midnight">3. Odgovornost</h2>
              <p className="mt-3 leading-relaxed">
                AURA Dental Clinic ne snosi odgovornost za bilo kakvu štetu nastalu korišćenjem
                informacija sa ovog sajta. Trudimo se da informacije budu tačne i ažurirane, ali ne
                garantujemo potpunost ili tačnost svih informacija.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-midnight">4. Intelektualna svojina</h2>
              <p className="mt-3 leading-relaxed">
                Sav sadržaj na ovom sajtu (tekstovi, slike, logotipi, video materijali) vlasništvo
                je AURA DENTAL CLINIC d.o.o. i zaštićen je zakonima o autorskim pravima.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-midnight">5. Rešavanje sporova</h2>
              <p className="mt-3 leading-relaxed">
                Svi sporovi koji proizilaze iz korišćenja ovog sajta rešavaće se u nadležnom sudu
                u Beogradu, u skladu sa zakonima Republike Srbije.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
