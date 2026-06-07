import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const SERVICE_DATA: Record<string, {
  title: string;
  subtitle: string;
  intro: string;
  heroImage: string;
  benefits: string[];
  process: { step: number; title: string; description: string; image: string }[];
  faq: { question: string; answer: string }[];
  relatedLinks: string[];
}> = {
  implantologija: {
    title: "Straumann® Zubni Implantati",
    subtitle: "Doživotno rešenje za vaš osmeh",
    intro: "Gubitak zuba više ne mora da utiče na vaš kvalitet života, govor i samopouzdanje. U AURA klinici koristimo isključivo švajcarske implantate vrhunske klase sa doživotnom garancijom, uz proceduru koja je brza i potpuno bezbolna.",
    heroImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&q=80&fit=crop",
    benefits: [
      "Doživotna garancija na Straumann® implantate",
      "Bezbolna procedura uz STA anesteziju",
      "Prirodan izgled i osećaj",
      "Sprečava gubitak koštane mase",
      "Preko 98% uspešnosti",
    ],
    process: [
      { step: 1, title: "Digitalna 3D Dijagnostika", description: "CBCT skener kreira savršen 3D model vaše vilice za samo 5 sekundi, uz minimalno zračenje.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80&fit=crop" },
      { step: 2, title: "Kompjutersko Planiranje", description: "Softverska simulacija pozicije svakog implantata pre intervencije, eliminišući mogućnost greške.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&fit=crop" },
      { step: 3, title: "Bezbolna Ugradnja", description: "STA sistem kompjuterski kontrolisane anestezije čini proceduru komfornijom od rutinskog popravljanja zuba.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80&fit=crop" },
      { step: 4, title: "CAD/CAM Krunica", description: "Robotizovani sistem u našoj internoj laboratoriji izrađuje keramičku krunicu koja se savršeno uklapa.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80&fit=crop" },
    ],
    faq: [
      { question: "Da li je ugradnja implantata zaista bezbolna?", answer: "Apsolutno. Intervencija se radi pod lokalnom računarskom anestezijom koja u potpunosti blokira prenos impulsa bola. Većina pacijenata opisuje proceduru manje neprijatnom od običnog vađenja zuba." },
      { question: "Koliko traje garancija na vaše radove?", answer: "Na Straumann® implantate dobijate zvanični internacionalni pasoš sa doživotnom garancijom. Na protetske radove dajemo garanciju od 10 godina." },
      { question: "Koliko traje kompletan proces?", answer: "3-6 meseci uključujući osteointegraciju. Privremenu estetsku strukturu dobijate odmah." },
    ],
    relatedLinks: ["estetska-stomatologija", "ortodoncija"],
  },
  "estetska-stomatologija": {
    title: "Estetska Stomatologija",
    subtitle: "Dizajn osmeha po meri",
    intro: "Vaš osmeh je prva stvar koju ljudi primete. Naš tim koristi najsavremenije tehnike i materijale kako bi vašem osmehu pružili savršen izgled – prirodno, skladno i blistavo.",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80&fit=crop",
    benefits: [
      "Digitalni dizajn osmeha pre početka",
      "Minimalno invazivna priprema",
      "Vrhunski keramički materijali",
      "15-20 godina trajnosti",
      "Garancija 10 godina",
    ],
    process: [
      { step: 1, title: "Digitalni Dizajn Osmeha", description: "Softver za digitalno planiranje vašeg novog osmeha. Već na prvoj poseti vidite konačni rezultat.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&fit=crop" },
      { step: 2, title: "Priprema i Obrada", description: "Minimalno invazivna priprema uz maksimalno očuvanje zdrave strukture. Sve procedure uz anesteziju.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80&fit=crop" },
      { step: 3, title: "CAD/CAM Izrada", description: "Interna laboratorija sa najsavremenijom tehnologijom za izradu keramičkih faseta.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80&fit=crop" },
      { step: 4, title: "Finalno Postavljanje", description: "Pažljivo postavljanje svake fasete za savršen estetski i funkcionalni rezultat.", image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80&fit=crop" },
    ],
    faq: [
      { question: "Koliko dugo traju keramičke fasete?", answer: "Uz pravilnu oralnu higijenu i redovne kontrole, keramičke fasete mogu trajati 15-20 godina i više." },
      { question: "Da li ugradnja faseta zahteva brušenje zuba?", answer: "Kod minimalno invazivnih faseta (no-prep veneers), brušenje je minimalno ili ga uopšte nema." },
    ],
    relatedLinks: ["implantologija", "ortodoncija"],
  },
  ortodoncija: {
    title: "Invisalign® Ortodoncija",
    subtitle: "Nevidljive folije za savršen osmeh",
    intro: "Invisalign® je revolucionarni sistem za ispravljanje zuba bez upotrebe bravica. Prozirne folije po meri postepeno pomeraju zube u željeni položaj – diskretno, udobno i efikasno.",
    heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80&fit=crop",
    benefits: [
      "Gotovo nevidljive folije",
      "Bez metala i bravica",
      "Skidaju se za jelo i pranje",
      "3D prikaz rezultata pre početka",
      "6-18 meseci prosečan tretman",
    ],
    process: [
      { step: 1, title: "3D Skeniranje", description: "Digitalni otisak iTero skenerom bez kalupa i nelagodnosti za samo 2 minuta.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80&fit=crop" },
      { step: 2, title: "Plan Tretmana", description: "Softver simulira svaki korak pomeranja zuba. Konačni rezultat vidite već na prvoj poseti.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&fit=crop" },
      { step: 3, title: "Folije po Meri", description: "Serija prozirnih folija koje menjate na 1-2 nedelje. Svaka nastavlja pomeranje zuba.", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fit=crop" },
      { step: 4, title: "Završni Rezultat", description: "Nakon tretmana sledi retainer faza za održavanje postignutih rezultata.", image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80&fit=crop" },
    ],
    faq: [
      { question: "Koliko traje Invisalign tretman?", answer: "Prosečno 6-18 meseci u zavisnosti od kompleksnosti slučaja. Jednostavniji slučajevi za samo 3-4 meseca." },
      { question: "Da li folije ometaju govor?", answer: "Većina se prilagođava za 1-2 dana. Folije su ultra tanke i gotovo neprimetne." },
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
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.heroImage} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/90 via-midnight/75 to-midnight/60" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-32">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-alabaster/50 hover:text-gold transition-colors mb-8"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>
            Nazad na početnu
          </Link>
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold-light mb-5">
              Premium usluga
            </span>
            <h1 className="font-heading text-4xl font-bold text-alabaster md:text-5xl lg:text-6xl leading-tight">
              {data.title}
            </h1>
            <p className="mt-3 text-xl text-gold/70 font-heading italic">{data.subtitle}</p>
            <p className="mt-6 text-base leading-relaxed text-alabaster/70 max-w-xl">
              {data.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button onClick={() => {}} className="bg-gold text-midnight hover:bg-gold-light" size="lg">
                Zakažite konsultacije
              </Button>
              <Button variant="outline" size="lg" onClick={() => {}}>
                Pozovite +381 11 328 4474
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper background="white">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-midnight">Zašto odabrati {data.title.split("—")[0] || data.title}?</h2>
            <ul className="mt-6 space-y-4">
              {data.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <svg className="h-3 w-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-midnight/70">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <ImagePlaceholder aspect="4/3" label={data.title} src={data.heroImage} />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="alabaster">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-midnight md:text-4xl">Kako izgleda proces?</h2>
          <p className="mt-4 text-midnight/60">Četiri koraka do vašeg savršenog osmeha</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.process.map((step) => (
            <div key={step.step} className="group relative">
              <div className="overflow-hidden rounded-2xl">
                <ImagePlaceholder aspect="4/3" label={step.title} src={step.image} className="transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="mt-4 flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-midnight text-sm font-bold">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-midnight">{step.title}</h3>
                  <p className="mt-1 text-sm text-midnight/60 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-midnight md:text-4xl">Česta Pitanja</h2>
        </div>
        <div className="mt-10 mx-auto max-w-3xl space-y-3">
          {data.faq.map((item, i) => (
            <details key={i} className="group rounded-xl border border-midnight/5 bg-alabaster transition-all duration-200 open:shadow-md open:border-gold/20">
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 text-sm font-semibold text-midnight list-none">
                {item.question}
                <svg className="h-5 w-5 shrink-0 text-midnight/30 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="px-6 pb-4 text-sm text-midnight/60 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </SectionWrapper>

      <section className="py-20 bg-midnight">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-midnight via-midnight/95 to-[#1a1f3a] border border-gold/10 p-12 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="font-heading text-3xl font-bold text-alabaster md:text-4xl">Spremni za transformaciju?</h2>
              <p className="mt-4 text-alabaster/60 max-w-lg mx-auto">
                Zakažite besplatne konsultacije i napravite prvi korak ka savršenom osmehu
              </p>
              <Button onClick={() => {}} className="bg-gold text-midnight hover:bg-gold-light mt-8" size="lg">
                Zakažite besplatne konsultacije
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
