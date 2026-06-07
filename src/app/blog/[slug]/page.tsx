import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const POSTS: Record<string, {
  title: string;
  content: string;
  category: string;
  date: string;
  readTime: number;
}> = {
  "sve-sto-treba-da-znate-o-zubnim-implantatima": {
    title: "Sve što treba da znate o zubnim implantatima",
    content: `
      Zubni implantati predstavljaju revoluciju u modernoj stomatologiji. Oni nisu samo estetsko rešenje – već funkcionalna zamena za koren zuba koja sprečava gubitak koštane mase i čuva zdravlje susednih zuba.

      ## Šta je zubni implantat?

      Zubni implantat je titanijumski navrtanj koji se hirurški postavlja u viličnu kost, gde funkcioniše kao veštački koren zuba. Na njega se naknadno postavlja keramička krunica koja izgleda i funkcioniše kao prirodan zub.

      ## Proces ugradnje

      Proces ugradnje implantata odvija se u nekoliko faza:

      1. **Inicijalna konsultacija i 3D dijagnostika** – CBCT skenerom dobijamo detaljan 3D model vaše vilice
      2. **Planiranje tretmana** – Softverska simulacija pozicije implantata
      3. **Ugradnja implantata** – Bezbolna procedura pod lokalnom anestezijom
      4. **Period osteointegracije** – 3-6 meseci potrebnih da kost sraste sa implantatom
      5. **Postavljanje krunice** – Finalni estetski rad

      ## Zašto Straumann®?

      Straumann® je švajcarski proizvođač implantata sa više od 60 godina iskustva i 30+ godina kliničkih istraživanja. Njihovi implantati imaju stopu uspešnosti od preko 98%.

      ## Cena

      Cena zubnih implantata varira u zavisnosti od kompleksnosti slučaja. U AURA klinici verujemo u transparentnost – nakon besplatne konsultacije dobićete detaljnu ponudu bez skrivenih troškova.
    `,
    category: "Implantologija",
    date: "2026-05-15",
    readTime: 8,
  },
  "nevidljive-folije-za-savrsen-osmeh-invisalign-vodic": {
    title: "Nevidljive folije za savršen osmeh – Invisalign® vodič",
    content: `
      Invisalign® je revolucionarni sistem za ispravljanje zuba koji koristi niz prozirnih, po meri napravljenih folija (alignera) koje postepeno pomeraju zube u željeni položaj.

      ## Kako funkcioniše?

      Svaka folija se nosi 1-2 nedelje, a zatim se prelazi na sledeću u nizu. Folije su napravljene od medicinskog, BPA-free plastičnog materijala i potpuno su providne.

      ## Ko može da koristi Invisalign?

      Invisalign je pogodan za tinejdžere i odrasle sa blagim do umerenim ortodontskim problemima: prekriveni zubi, razmaci, blagi overbite ili underbite.

      ## Prednosti u odnosu na bravice

      - Gotovo nevidljive – niko neće primetiti da nosite folije
      - Skidaju se za jelo i pranje zuba – nema restrikcija u ishrani
      - Udobnije od tradicionalnih bravica
      - Manje poseta ordinaciji

      ## Proces tretmana

      1. Inicijalna konsultacija i 3D skeniranje
      2. Digitalni plan tretmana sa 3D simulacijom
      3. Izrada folija u Invisalign laboratoriji (SAD)
      4. Nošenje folija 20-22h dnevno
      5. Periodične provere na 4-6 nedelja

      Prosečno trajanje tretmana je 6 do 18 meseci, u zavisnosti od kompleksnosti slučaja.
    `,
    category: "Ortodoncija",
    date: "2026-05-01",
    readTime: 10,
  },
  "kako-odrzati-bele-zube-nakon-izbeljivanja": {
    title: "Kako održati bele zube nakon izbeljivanja?",
    content: `
      Profesionalno izbeljivanje zuba može transformisati vaš osmeh, ali ključ dugotrajnog rezultata leži u pravilnom održavanju. Uz pravilnu negu, efekat izbeljivanja može trajati i do 3 godine.

      ## Prvih 48 sati su ključni

      Neposredno nakon izbeljivanja, zubne pore su otvorene i zubi su podložniji pigmentaciji. Izbegavajte:

      - Kafu, crni čaj i crno vino
      - Gazirane sokove (posebno tamne)
      - Crveno voće i sosove
      - Pušenje

      ## Preporučeni proizvodi

      - Zubna pasta sa fluoridom i niskom abrazivnošću
      - Električna četkica sa mekim vlaknima
      - Konac za zube nakon svakog obroka
      - Oralni tuš (water flosser) za temeljno čišćenje

      ## Održavanje na duže staze

      Preporučujemo "touch-up" tretman jednom godišnje. Takođe, izbegavajte namirnice koje intenzivno boje zube – ako ih konzumirate, koristite slamčicu i isperite usta vodom odmah nakon.

      ## Redovne posete stomatologu

      Profesionalno čišćenje (poliranje i skidanje kamenca) na svakih 6 meseci produžava efekat izbeljivanja i čuva zdravlje desni.
    `,
    category: "Saveti Lekara",
    date: "2026-04-20",
    readTime: 6,
  },
  "digitalna-stomatologija-buducnost-je-stigla": {
    title: "Digitalna stomatologija – budućnost je stigla",
    content: `
      Digitalna stomatologija nije više budućnost – to je sadašnjost koja menja način na koji se lečimo. U AURA klinici koristimo najsavremeniju digitalnu tehnologiju za precizniju dijagnostiku i bezbolnije tretmane.

      ## CBCT 3D skener

      Konusno-zračna kompjuterizovana tomografija (CBCT) daje trodimenzionalni prikaz vaše vilice, zuba, nerava i sinusa sa preciznošću od 0.1mm. Ovo omogućava:

      - Tačno planiranje implantata
      - Detekciju skrivenih infekcija
      - Procenu koštane mase

      ## Intraoralni skener

      Nestali su otisci u silikonu! Intraoralni skener pravi digitalni otisak vaših zuba za nekoliko minuta. Rezultat je precizniji, udobniji i trenutno dostupan na ekranu.

      ## 3D printanje

      Naši 3D printeri izrađuju hirurške šablone za implantate, modele za fasete i privremene radove direktno u klinici – bez čekanja i bez dodatnih troškova.

      ## Prednosti za pacijenta

      - Manje vremena u stolici
      - Precizniji rezultati
      - Bez neprijatnih otisaka
      - Mogućnost da vidite rezultat pre početka tretmana
    `,
    category: "Estetika",
    date: "2026-04-10",
    readTime: 7,
  },
  "kako-prevazici-strah-od-zubara": {
    title: "Kako prevazići strah od zubara?",
    content: `
      Dentofobija – strah od zubara – pogađa između 15% i 20% svetske populacije. Ako ste i vi među njima, znajte da niste sami i da moderna stomatologija ima rešenja.

      ## Zašto se javlja strah?

      Strah od zubara najčešće potiče iz:

      - Negativnog iskustva u detinjstvu
      - Straha od bola
      - Osećaja gubitka kontrole
      - Straha od igala i anestezije

      ## Kako vam AURA pomaže?

      U AURA klinici primenjujemo pristup bez stresa:

      1. **Inicijalni razgovor bez pregleda** – prva poseta je isključivo upoznavanje
      2. **Kompjuterizovana anestezija** – sistem The Wand® dozira anestetik bezbolno i precizno
      3. **Sedacija (gas smeha)** – za najzahtevnije pacijente
      4. **Muzika i entertaintment** – slušalice sa muzikom ili filmom tokom tretmana

      ## Naš savet

      Postavite realna očekivanja. Počnite sa jednostavnim tretmanom (poliranje, pregled) i postepeno gradite poverenje. Naš tim je obučen za rad sa pacijentima koji imaju izražen strah – strpljenje i empatija su naši najvažniji alati.

      Ne dozvolite da strah ugrozi vaše zdravlje. Zakazivanje je besplatno i bez ikakve obaveze.
    `,
    category: "Saveti Lekara",
    date: "2026-03-28",
    readTime: 5,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return {};
  return { title: post.title, description: post.content.slice(0, 160) };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="relative bg-midnight pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative mx-auto max-w-4xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-alabaster/50 transition-colors duration-200 hover:text-gold mb-6"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>
            Nazad na blog
          </Link>
          <div className="flex items-center gap-3 text-sm text-alabaster/50 mb-4">
            <span className="font-semibold uppercase tracking-wider text-gold">{post.category}</span>
            <span>&middot;</span>
            <span>{post.readTime} min čitanja</span>
          </div>
          <h1 className="font-heading text-3xl font-bold text-alabaster md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="py-16 md:py-24 bg-alabaster">
        <div className="mx-auto max-w-3xl px-6">
          <ImagePlaceholder aspect="16/9" label={post.title} className="mb-10 rounded-2xl" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80&fit=crop" />
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-heading text-2xl font-bold text-midnight mt-10 mb-4">
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={i} className="text-midnight/70 ml-4 mb-1">
                    {line.replace("- ", "")}
                  </li>
                );
              }
              if (line.trim() === "") {
                return <br key={i} />;
              }
              return (
                <p key={i} className="text-midnight/70 leading-relaxed mb-4">
                  {line}
                </p>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
}
