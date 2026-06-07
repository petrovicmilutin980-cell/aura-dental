import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politika Privatnosti",
  description: "Politika privatnosti AURA DENTAL CLINIC d.o.o. Beograd",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative bg-midnight pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative mx-auto max-w-4xl px-6">
          <h1 className="font-heading text-4xl font-bold text-alabaster md:text-5xl">
            Politika Privatnosti
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
              <h2 className="font-heading text-2xl font-bold text-midnight">1. Prikupljanje podataka</h2>
              <p className="mt-3 leading-relaxed">
                Prilikom korišćenja naših usluga, prikupljamo sledeće lične podatke: ime i prezime,
                kontakt telefon, email adresu, kao i medicinsku dokumentaciju neophodnu za pružanje
                stomatoloških usluga. Podaci se prikupljaju isključivo uz vašu saglasnost.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-midnight">2. Korišćenje podataka</h2>
              <p className="mt-3 leading-relaxed">
                Vaše lične podatke koristimo za zakazivanje i potvrđivanje termina, pružanje
                stomatoloških usluga, slanje podsetnika o terminima, kao i za interne analize i
                unapređenje kvaliteta usluga. Podaci se ne koriste u svrhe direktnog marketinga bez
                vaše izričite saglasnosti.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-midnight">3. Kolačići</h2>
              <p className="mt-3 leading-relaxed">
                Naš sajt koristi kolačiće (cookies) radi poboljšanja korisničkog iskustva.
                Neophodni kolačići su uvek aktivni. Analitičke i marketinške kolačiće koristimo
                samo uz vašu saglasnost. U svakom trenutku možete promeniti podešavanja kolačića.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-midnight">4. Prava korisnika</h2>
              <p className="mt-3 leading-relaxed">
                U skladu sa GDPR regulativom, imate pravo na pristup, izmenu, brisanje i prenos
                vaših ličnih podataka. Takođe imate pravo da povučete saglasnost za obradu podataka
                u bilo kom trenutku. Za ostvarivanje ovih prava, kontaktirajte nas na
                concierge@auradental.com.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-midnight">5. Kontakt za zaštitu podataka</h2>
              <p className="mt-3 leading-relaxed">
                Za sva pitanja u vezi sa zaštitom podataka, možete nas kontaktirati putem emaila:
                concierge@auradental.com ili telefonom: +381 11 328 4474.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
