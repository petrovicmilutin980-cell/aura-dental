export type BlogPost = {
  title: string;
  content: string;
  titleEn: string;
  contentEn: string;
  category: string;
  categoryEn: string;
  date: string;
  readTime: number;
  image: string;
};

export type PostSlug = keyof typeof POSTS;

export const POSTS: Record<string, BlogPost> = {
  "sve-sto-treba-da-znate-o-zubnim-implantatima": {
    title: "Sve što treba da znate o zubnim implantatima",
    titleEn: "Everything You Need to Know About Dental Implants",
    image: "https://images.pexels.com/photos/3845710/pexels-photo-3845710.jpeg?w=800&q=80",
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
    contentEn: `
      Dental implants represent a revolution in modern dentistry. They are not just an aesthetic solution — they are a functional replacement for the tooth root that prevents bone loss and preserves the health of adjacent teeth.

      ## What is a dental implant?

      A dental implant is a titanium screw surgically placed into the jawbone, functioning as an artificial tooth root. A ceramic crown is later placed on top, looking and functioning like a natural tooth.

      ## The Implant Process

      The implant process takes place in several stages:

      1. **Initial consultation and 3D diagnostics** — CBCT scan provides a detailed 3D model of your jaw
      2. **Treatment planning** — Software simulation of implant positioning
      3. **Implant placement** — Painless procedure under local anesthesia
      4. **Osseointegration period** — 3-6 months needed for the bone to fuse with the implant
      5. **Crown placement** — The final aesthetic restoration

      ## Why Straumann®?

      Straumann® is a Swiss implant manufacturer with over 60 years of experience and 30+ years of clinical research. Their implants have a success rate of over 98%.

      ## Price

      The price of dental implants varies depending on case complexity. At AURA Clinic, we believe in transparency — after a free consultation, you will receive a detailed quote with no hidden costs.
    `,
    category: "Implantologija",
    categoryEn: "Implantology",
    date: "2026-05-15",
    readTime: 8,
  },
  "nevidljive-folije-za-savrsen-osmeh-invisalign-vodic": {
    title: "Nevidljive folije za savršen osmeh – Invisalign® vodič",
    titleEn: "Clear Aligners for a Perfect Smile – Invisalign® Guide",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80&fit=crop",
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
    contentEn: `
      Invisalign® is a revolutionary teeth straightening system that uses a series of clear, custom-made aligners that gradually move your teeth into the desired position.

      ## How does it work?

      Each aligner is worn for 1-2 weeks, then you move to the next in the series. The aligners are made of medical-grade, BPA-free plastic and are completely transparent.

      ## Who can use Invisalign?

      Invisalign is suitable for teenagers and adults with mild to moderate orthodontic issues: crowded teeth, gaps, mild overbite or underbite.

      ## Advantages over braces

      - Nearly invisible — no one will notice you're wearing them
      - Removable for eating and brushing — no dietary restrictions
      - More comfortable than traditional braces
      - Fewer visits to the clinic

      ## Treatment Process

      1. Initial consultation and 3D scanning
      2. Digital treatment plan with 3D simulation
      3. Aligner fabrication at Invisalign lab (USA)
      4. Wearing aligners 20-22 hours daily
      5. Periodic check-ups every 4-6 weeks

      Average treatment duration is 6 to 18 months, depending on case complexity.
    `,
    category: "Ortodoncija",
    categoryEn: "Orthodontics",
    date: "2026-05-01",
    readTime: 10,
  },
  "kako-odrzati-bele-zube-nakon-izbeljivanja": {
    title: "Kako održati bele zube nakon izbeljivanja?",
    titleEn: "How to Keep Your Teeth White After Whitening?",
    image: "https://images.pexels.com/photos/8413157/pexels-photo-8413157.jpeg?w=800&q=80",
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
    contentEn: `
      Professional teeth whitening can transform your smile, but the key to long-lasting results lies in proper maintenance. With proper care, the whitening effect can last up to 3 years.

      ## The First 48 Hours Are Crucial

      Immediately after whitening, the tooth pores are open and teeth are more susceptible to pigmentation. Avoid:

      - Coffee, black tea, and red wine
      - Carbonated drinks (especially dark ones)
      - Red fruits and sauces
      - Smoking

      ## Recommended Products

      - Fluoride toothpaste with low abrasivity
      - Electric toothbrush with soft bristles
      - Dental floss after every meal
      - Water flosser for thorough cleaning

      ## Long-term Maintenance

      We recommend a "touch-up" treatment once a year. Also, avoid foods that intensely stain teeth — if you consume them, use a straw and rinse your mouth with water immediately after.

      ## Regular Dental Visits

      Professional cleaning (polishing and tartar removal) every 6 months extends the whitening effect and maintains gum health.
    `,
    category: "Saveti Lekara",
    categoryEn: "Doctor's Tips",
    date: "2026-04-20",
    readTime: 6,
  },
  "digitalna-stomatologija-buducnost-je-stigla": {
    title: "Digitalna stomatologija – budućnost je stigla",
    titleEn: "Digital Dentistry – The Future Has Arrived",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80&fit=crop",
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
    contentEn: `
      Digital dentistry is no longer the future — it is the present, changing the way we receive treatment. At AURA Clinic, we use cutting-edge digital technology for more precise diagnostics and painless treatments.

      ## CBCT 3D Scanner

      Cone Beam Computed Tomography (CBCT) provides a three-dimensional view of your jaw, teeth, nerves, and sinuses with 0.1mm precision. This enables:

      - Accurate implant planning
      - Detection of hidden infections
      - Bone density assessment

      ## Intraoral Scanner

      Silicone impressions are a thing of the past! The intraoral scanner creates a digital impression of your teeth in minutes. The result is more precise, comfortable, and instantly available on screen.

      ## 3D Printing

      Our 3D printers fabricate surgical guides for implants, models for veneers, and temporary restorations directly in the clinic — no waiting and no additional costs.

      ## Benefits for Patients

      - Less time in the chair
      - More precise results
      - No uncomfortable impressions
      - See the result before treatment begins
    `,
    category: "Estetika",
    categoryEn: "Aesthetics",
    date: "2026-04-10",
    readTime: 7,
  },
  "kako-prevazici-strah-od-zubara": {
    title: "Kako prevazići strah od zubara?",
    titleEn: "How to Overcome Fear of the Dentist?",
    image: "https://images.pexels.com/photos/6812572/pexels-photo-6812572.jpeg?w=800&q=80",
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
    contentEn: `
      Dentophobia — fear of the dentist — affects between 15% and 20% of the world's population. If you are among them, know that you are not alone and that modern dentistry has solutions.

      ## Why Does Fear Occur?

      Fear of the dentist most commonly stems from:

      - Negative childhood experiences
      - Fear of pain
      - Feeling of losing control
      - Fear of needles and anesthesia

      ## How AURA Helps?

      At AURA Clinic, we apply a stress-free approach:

      1. **Initial conversation without examination** — the first visit is purely about getting to know each other
      2. **Computerized anesthesia** — The Wand® system delivers anesthetic painlessly and precisely
      3. **Sedation (laughing gas)** — for the most demanding patients
      4. **Music and entertainment** — headphones with music or movies during treatment

      ## Our Advice

      Set realistic expectations. Start with a simple treatment (polishing, check-up) and gradually build trust. Our team is trained to work with patients who have a pronounced fear — patience and empathy are our most important tools.

      Don't let fear compromise your health. Booking is free and without any obligation.
    `,
    category: "Saveti Lekara",
    categoryEn: "Doctor's Tips",
    date: "2026-03-28",
    readTime: 5,
  },
};

export function getPostDescription(content: string): string {
  const clean = content
    .replace(/^[#\s*_]+/gm, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
  return clean.split("\n").find((l) => l.length > 30)?.slice(0, 160).trim() || "";
}
