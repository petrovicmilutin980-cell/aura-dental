import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { SectionWrapper } from "@/components/SectionWrapper";

const SERVICE_DATA: Record<string, {
  title: string;
  subtitle: string;
  intro: string;
  process: { step: number; title: string; description: string; icon: string }[];
  faq: { question: string; answer: string }[];
  relatedLinks: string[];
}> = {
  implantologija: {
    title: "Straumann® Zubni Implantati",
    subtitle: "Doživotno rešenje za vaš osmeh",
    intro: "Gubitak zuba više ne mora da utiče na vaš kvalitet života, govor i samopouzdanje. U AURA klinici koristimo isključivo švajcarske implantate vrhunske klase sa doživotnom garancijom, uz proceduru koja je brza i potpuno bezbolna.",
    process: [
      { step: 1, title: "Digitalna 3D Dijagnostika", description: "Koristimo najnoviju generaciju CBCT skenera koji u roku od 5 sekundi kreira savršen 3D model vaše vilice sa minimalnim zračenjem.", icon: "Scan" },
      { step: 2, title: "Kompjutersko Planiranje", description: "Naš tim stručnjaka softverski simulira poziciju svakog implantata pre same intervencije, eliminišući bilo kakvu mogućnost ljudske greške.", icon: "Computer" },
      { step: 3, title: "Bezbolna Ugradnja", description: "Uz pomoć kompjuterski kontrolisane lokalne anestezije (STA sistem), proces ugradnje je brži i komforniji od rutinskog popravljanja zuba.", icon: "Syringe" },
      { step: 4, title: "CAD/CAM Krunica", description: "Robotizovani sistem u našoj internoj laboratoriji izrađuje trajnu bezmetalnu keramičku krunicu koja se savršeno uklapa sa vašim prirodnim zubima.", icon: "Tooth" },
    ],
    faq: [
      { question: "Da li je ugradnja implantata zaista bezbolna?", answer: "Apsolutno. Intervencija se radi pod lokalnom računarskom anestezijom koja u potpunosti blokira prenos impulsa bola. Većina pacijenata opisuje proceduru manje neprijatnom od običnog vađenja zuba." },
      { question: "Koliko traje garancija na vaše radove?", answer: "Na Straumann® implantate dobijate zvanični internacionalni pasoš sa doživotnom garancijom na sam implantat. Na protetske radove (krunice i mostove) klinika AURA daje garanciju od 10 godina." },
      { question: "Koliko traje kompletan proces?", answer: "Od prve konsultacije do konačnog rada, proces može trajati od 3 do 6 meseci, uključujući vreme potrebno za osteointegraciju (srašćivanje kosti sa implantatom). Privremenu estetsku strukturu dobijate odmah." },
    ],
    relatedLinks: ["estetska-stomatologija", "ortodoncija"],
  },
  "estetska-stomatologija": {
    title: "Estetska Stomatologija",
    subtitle: "Dizajn osmeha po meri",
    intro: "Vaš osmeh je prva stvar koju ljudi primete. Naš tim za estetsku stomatologiju koristi najsavremenije tehnike i materijale kako bi vašem osmehu pružili savršen izgled – prirodno, skladno i blistavo.",
    process: [
      { step: 1, title: "Digitalni Dizajn Osmeha", description: "Koristimo napredni softver za digitalno planiranje vašeg novog osmeha. Već na prvoj poseti možete videti kako će izgledati konačni rezultat.", icon: "Scan" },
      { step: 2, title: "Priprema i Obrada", description: "Minimalno invazivna priprema zuba uz maksimalno očuvanje zdrave zubne strukture. Sve procedure se izvode uz lokalnu anesteziju.", icon: "Syringe" },
      { step: 3, title: "Izrada u Laboratoriji", description: "Naša interna laboratorija opremljena je najsavremenijom CAD/CAM tehnologijom za izradu keramičkih faseta i krunica.", icon: "Computer" },
      { step: 4, title: "Finalno Postavljanje", description: "Pažljivo postavljanje i prilagođavanje svake fasete za savršen estetski i funkcionalni rezultat.", icon: "Sparkles" },
    ],
    faq: [
      { question: "Koliko dugo traju keramičke fasete?", answer: "Uz pravilnu oralnu higijenu i redovne kontrole, keramičke fasete mogu trajati 15-20 godina i više. Naš tim daje garanciju od 10 godina na sve estetske radove." },
      { question: "Da li ugradnja faseta zahteva brušenje zuba?", answer: "Kod minimalno invazivnih faseta (no-prep veneers), brušenje je minimalno ili ga uopšte nema. Naš pristup je uvek maksimalno očuvanje zdrave zubne strukture." },
    ],
    relatedLinks: ["implantologija", "ortodoncija"],
  },
  ortodoncja: {
    title: "Invisalign® Ortodoncija",
    subtitle: "Nevidljive folije za savršen osmeh",
    intro: "Invisalign® je revolucionarni sistem za ispravljanje zuba bez upotrebe bravica. Prozirne folije po meri postepeno pomeraju zube u željeni položaj – diskretno, udobno i efikasno.",
    process: [
      { step: 1, title: "3D Skeniranje", description: "Digitalni otisak vaših zuba pomoću iTero skenera. Bez kalupa, bez nelagodnosti, za samo 2 minuta.", icon: "Scan" },
      { step: 2, title: "Plan Tretmana", description: "Softver simulira svaki korak pomeranja zuba. Već na prvoj poseti vidite konačni rezultat.", icon: "Computer" },
      { step: 3, title: "Folije po Meri", description: "Serija prozirnih folija koje menjate na 1-2 nedelje. Svaka sledeća folija nastavlja proces pomeranja.", icon: "Align" },
      { step: 4, title: "Završni Rezultat", description: "Nakon tretmana sledi retainer faza za održavanje postignutih rezultata.", icon: "Smile" },
    ],
    faq: [
      { question: "Koliko traje Invisalign tretman?", answer: "Prosečno trajanje tretmana je 6-18 meseci, u zavisnosti od kompleksnosti slučaja. Jednostavniji slučajevi mogu biti završeni za samo 3-4 meseca." },
      { question: "Da li folije ometaju govor?", answer: "Većina pacijenata se prilagođava za 1-2 dana. Folije su ultra tanke i diskretne, tako da ih gotovo niko ne primećuje." },
    ],
    relatedLinks: ["implantologija", "estetska-stomatologija"],
  },
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const data = SERVICE_DATA[service];

  if (!data) {
    notFound();
  }

  return (
    <>
      <section className="relative bg-midnight pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-sm text-alabaster/50 transition-colors duration-200 hover:text-gold mb-6"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
              </svg>
              Nazad na početnu
            </Link>
            <span className="inline-block rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold-light mb-4">
              Premium usluga
            </span>
            <h1 className="font-heading text-4xl font-bold text-alabaster md:text-5xl lg:text-6xl">
              {data.title}
            </h1>
            <p className="mt-2 text-xl text-gold/70 font-heading italic">
              {data.subtitle}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-alabaster/70 max-w-2xl">
              {data.intro}
            </p>
            <div className="mt-8 flex gap-4">
              <Button
                onClick={() => {}}
                className="bg-gold text-midnight hover:bg-gold-light"
                size="lg"
              >
                Zakažite konsultacije
              </Button>
              <Button variant="outline" size="lg" onClick={() => {}}>
                Pozovite nas
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper background="white" id="process">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-midnight md:text-4xl">
            Kako funkcioniše proces?
          </h2>
          <p className="mt-4 text-midnight/60">
            Četiri jednostavna koraka do vašeg savršenog osmeha
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {data.process.map((step) => (
            <div key={step.step} className="group relative flex gap-6 rounded-2xl bg-alabaster p-6 md:p-8 transition-all duration-300 hover:shadow-lg">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/5 text-gold transition-colors duration-300 group-hover:bg-gold/10">
                <span className="font-heading text-lg font-bold">{step.step}</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-midnight">
                  {step.title}
                </h3>
                <p className="mt-2 text-midnight/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="alabaster" id="faq">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-midnight md:text-4xl">
            Često Postavljena Pitanja
          </h2>
        </div>

        <div className="mt-10 mx-auto max-w-3xl space-y-4">
          {data.faq.map((item, i) => (
            <details key={i} className="group rounded-2xl bg-white p-6 shadow-sm transition-all duration-200 open:shadow-md">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-midnight list-none">
                {item.question}
                <svg className="h-5 w-5 shrink-0 text-midnight/40 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="mt-4 text-midnight/60 leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white" padding="compact">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-midnight to-midnight/95 p-12 text-center">
          <h2 className="font-heading text-2xl font-bold text-alabaster md:text-3xl">
            Spremni za vašu transformaciju?
          </h2>
          <p className="max-w-xl text-alabaster/60">
            Zakažite besplatne konsultacije i saznajte kako vam možemo pomoći
          </p>
          <Button
            onClick={() => {}}
            className="bg-gold text-midnight hover:bg-gold-light mt-4"
            size="lg"
          >
            Zakažite besplatne konsultacije
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
