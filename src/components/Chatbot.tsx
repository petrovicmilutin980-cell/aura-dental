"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/lib/i18n/context";

type Message = {
  role: "bot" | "user";
  text: string;
};

type QuickReply = {
  label: string;
  labelKey?: string;
  text: string;
};

const QUICK_REPLIES: QuickReply[] = [
  { labelKey: "chat.prices", label: "Cene usluga", text: "Koliko koštaju implantati?" },
  { labelKey: "chat.book", label: "Zakaži termin", text: "Kako da zakažem termin?" },
  { labelKey: "chat.painless", label: "Bezbolni tretmani", text: "Da li je tretman bolan?" },
  { labelKey: "chat.location", label: "Lokacija", text: "Gde se nalazite?" },
  { labelKey: "chat.invisalign", label: "Invisalign", text: "Šta je Invisalign?" },
];

function analyzeIntent(text: string): {
  topic: string;
  urgency: "normal" | "emergency";
  keywords: string[];
} {
  const lower = text.toLowerCase();
  const found: string[] = [];

  const patterns: Record<string, RegExp[]> = {
    cena: [/(cen[ea]|koliko\s.*košt|cenovnik|pl[aćč]anje|kost[ai]|cen[au]|po\s*cemu)/i],
    implantat: [/(implantat|implantologija|straumann|krunica|all.?on.?4|nadoknad[ae]|zub.*nedost)/i],
    bol: [/(boln[oai]|bezboln[oai]|anestezija|strah|pla[šs]im|b[oij]m[se]|ne[ćc]e.*bolet)/i],
    invisalign: [/(invisalign|folij[ea]|ortodoncija|bravic[ea]|ispravljanje|nevidljiv|prozirn[ea])/i],
    termin: [/(termin|zakaz[ai]vanie|rezervacij|konsultacij|pregled|poset[au]|kad.*mo[gž]u|radn.*vreme)/i],
    garancija: [/(garancij[ae]|garantn[ii]|doživotn[oai]|traj.*rad|koliko.*traj)/i],
    parking: [/(parking|auto|automobil|garaz[au]|garaž[au]|parkiranje|kola)/i],
    lokacija: [/(lokacij[ae]|adres[au]|gde\s*se|map[au]|put|dolazak|kako.*do[ći]|nalazite\s*se)/i],
    faseta: [/(faseta|fasete|veneer|ljusk[ai]|keramičk[ea]|estetsk[ea].*stomatolog)/i],
    izbeljivanje: [/(izbeljivanje|beljenje|bel[ei]|zoom|bela.*zuba)/i],
    hirurgija: [/(hirurgij[ae]|operacij[ae]|vađenje|vadjenje|hirur[šs]k[ei])/i],
    higijena: [/(higijen[ae]|[čc]i[šs][ćc]enje|kamena[cč]|održavanje|preventiv)/i],
  };

  for (const [topic, regexps] of Object.entries(patterns)) {
    if (regexps.some((r) => r.test(text))) {
      found.push(topic);
    }
  }

  const emergency =
    /\b(hitn[oaiu]|hitno|slu[čc]aj|otok|krvarenje|jak\s*bol|akutn|pukao|polomio|nesre[ćc]a|udarac)\b/i.test(
      lower
    );

  return {
    topic: found[0] || "general",
    urgency: emergency ? "emergency" : "normal",
    keywords: found,
  };
}

const EN = {
  emergency: "🚨 **If you have a dental emergency, CALL US IMMEDIATELY!**\n\n**Emergency phone:** [+381 65 999 4474](tel:+381659994474)\n\nOur team is available 24/7 for urgent interventions. If not urgent, we can help you here too — just continue with your question.",
  greeting: "Hello! 👋 **Welcome to AURA Dental Clinic.**\n\nWe're glad you're here! How can we help you today? You can ask about:\n\n• 💰 **Prices** and services\n• 🦷 **Implants** and aesthetic dentistry\n• 📅 **Booking** appointments\n• ❓ **Anything** you're curious about",
  thanks: "You're welcome! 🎉 **We're happy we could help.**\n\nIf you have more questions, we're here. You can also call us:\n\n📞 [+381 11 328 4474](tel:+381113284474)\n📧 concierge@auradental.com\n\n**Have a great day!** 😊",
  cena: "💰 **Our Prices:**\n\n• **Straumann® implants** — from €800 (with crown)\n• **Ceramic veneers** — from €350 per tooth\n• **Invisalign®** — from €1,900 (full treatment)\n• **Zoom whitening** — €350\n• **Routine checkup** — €35\n\n> *Prices are informational. You'll get an exact quote during your free consultation.*\n\n**Want an exact quote?** Book a free consultation!",
  implantat: "🦷 **Straumann® Dental Implants — Swiss Quality**\n\n**What are implants?** A titanium screw replacing the tooth root, topped with a ceramic crown.\n\n**4-step process:**\n1️⃣ **3D scanning** — CBCT scan for a perfect model (5 seconds)\n2️⃣ **Computer planning** — Simulation before the procedure\n3️⃣ **Pain-free placement** — STA computerized anesthesia\n4️⃣ **CAD/CAM crown** — Robotized fabrication in our in-house lab\n\n✅ Lifetime warranty on the implant\n✅ Over 98% success rate\n✅ Natural look and feel",
  bol: "😌 **Completely painless treatments — that's our promise.**\n\nWe use the **STA (Single Tooth Anesthesia)** system — computer-controlled local anesthesia that:\n\n• 💉 **Pain-free** — computer controls pressure and speed\n• 🎯 **Precise** — numbs only one tooth\n• ⚡ **Fast** — effect within seconds\n• 😊 **No numbness** — you can speak normally\n\n> Most patients say it's **less uncomfortable than a regular tooth extraction!**\n\nWe also offer **sedation** (medically induced sleep) for major procedures.",
  invisalign: "😁 **Invisalign® — Clear aligners for a perfect smile**\n\n**What is Invisalign?** A system of clear aligners that gradually straighten teeth — **no brackets, no metal, no pain.**\n\n**Benefits:**\n✅ **Invisible** — hardly anyone notices them\n✅ **Comfortable** — no gum irritation\n✅ **Removable** — eat and brush normally\n✅ **Faster** — 6-18 months, depending on case\n✅ **3D preview** — see results before starting\n\nFull treatment price: from **€1,900**",
  termin: "📅 **Book an appointment at AURA Clinic**\n\nYou can book **3 ways:**\n\n1️⃣ **Online form** — [Click here](/zakazivanje) (fastest)\n2️⃣ **Phone** — [+381 11 328 4474](tel:+381113284474)\n3️⃣ **Visit us** — Bulevar Oslobođenja 44\n\n**Working hours:**\n• Mon—Fri: 08:00 – 21:00\n• Saturday: 09:00 – 16:00\n\n> **First time with us?** A 20% deposit is required to confirm your appointment.",
  garancija: "🛡️ **Our Guarantees:**\n\n• **Straumann® implants** — 🏆 **LIFETIME WARRANTY** (official passport)\n• **Ceramic crowns and bridges** — 10 years\n• **Aesthetic work (veneers)** — 5 years\n• **Invisalign® retainers** — 2 years\n\n> Condition is regular check-ups every 6 months. Our work is backed by premium materials and cutting-edge technology.",
  parking: "🚗 **Free parking for patients!**\n\n• **Location:** Aura Heights underground garage\n• **Price:** **Free** for clinic patients\n• **How:** Tell the security at **Ramp 1**\n  > *„I'm going to AURA Dental Clinic”*\n\n• **Video surveillance** 24/7\n• **Elevator** directly to the clinic (ground floor, building A)",
  lokacija: "📍 **AURA Dental Clinic**\n\nBulevar Oslobođenja 44\n11000 Belgrade\n**Aura Heights** — ground floor, building A\n\n> *Separate entrance from the street*\n\n[🗺️ **Open in Google Maps**](https://maps.google.com/?q=Bulevar+Oslobođenja+44,+Beograd)",
  faseta: "✨ **Ceramic Veneers — A perfect smile in just 2 visits**\n\n**What are veneers?** Thin ceramic shells placed on the front surface of teeth.\n\n**Ideal for:**\n• Fixing tooth shape and size\n• Covering discolorations\n• Closing gaps between teeth\n• Complete smile transformation\n\n**Price:** from **€350** per tooth\n**Durability:** 15-20 years with proper care",
  izbeljivanje: "⚡ **Zoom! Whitening — A brighter smile in 60 minutes**\n\n**Zoom! WhiteSpeed** is the most advanced teeth whitening system:\n\n• ⏱ **Only 60 minutes** in the clinic\n• 🎯 Up to **8 shades whiter** in one visit\n• 😊 No pain or sensitivity (with protective gel)\n• 📅 Results last 1-2 years\n\n**Price:** €350 (full treatment)\n\nYou receive a home maintenance kit after treatment.",
  hirurgija: "🔬 **Oral surgery — Premium precision**\n\nOur team performs:\n\n• **Bone augmentation** — bone regeneration before implantation\n• **Sinus lift** — sinus elevation for implants\n• **Wisdom tooth extraction** — complex and simple\n• **Cystectomy** — cyst removal\n• **Biopsy** — diagnosing oral lesions\n\nAll procedures are performed with **full anesthesia** and **sedation** as needed.",
  higijena: "🪥 **Prevention and oral hygiene**\n\n**Professional cleaning** is recommended every **6 months**.\n\n**What's included:**\n• Tartar removal (ultrasound)\n• Teeth polishing\n• Fluoridation\n• Care tips\n\n**Price:** €35 (routine checkup + cleaning)\n\n> *Prevention is always cheaper than treatment!* 💡",
  general: "Thank you for your question! 😊\n\nYou can ask about:\n\n💰 **Prices** and payment options\n🦷 **Implants** or aesthetic dentistry\n😁 **Invisalign** clear aligners\n📅 **Booking** appointments\n🚗 **Parking** and **location**\n\nOr just tell me what you're interested in — I'm here to help!",
  booking: "📅 We've opened the booking page in a new tab. If you have more questions, we're here!",
};

function buildResponse(intent: {
  topic: string;
  urgency: string;
  keywords: string[];
  userText: string;
  lang: string;
}): { text: string; suggested?: QuickReply[] } {
  const isEn = intent.lang === "en";
  const t = (sr: string, en: string) => isEn ? en : sr;

  if (intent.urgency === "emergency") {
    return {
      text: t(
        "🚨 **Ako imate hitan stomatološki problem, ODMAH nas pozovite!**\n\n**Dežurni telefon:** [+381 65 999 4474](tel:+381659994474)\n\nNaš tim je dostupan 24/7 za hitne intervencije. Ukoliko nije hitno, možemo vam pomoći i ovde — samo nastavite sa pitanjem.",
        EN.emergency
      ),
      suggested: [
        { labelKey: "chat.call", label: "Pozovi hitno", text: "Pozovi hitno" },
        { labelKey: "chat.prices", label: "Cene usluga", text: "Koliko koštaju usluge?" },
      ],
    };
  }

  const srGreetings = ["zdravo", "ćao", "cao", "helou", "halo", "pozdrav", "dobar dan", "dobro veče", "ej", "hej"];
  const enGreetings = ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "greetings", "howdy"];
  const allGreetings = [...srGreetings, ...enGreetings];
  if (allGreetings.some((g) => intent.userText.toLowerCase().includes(g))) {
    return {
      text: t(
        "Zdravo! 👋 **Dobrodošli u AURA Dental Clinic.**\n\nDrago nam je što ste ovde! Kako vam možemo pomoći danas? Možete pitati o:\n\n• 💰 **Cenama** i uslugama\n• 🦷 **Implantatima** i estetskoj stomatologiji\n• 📅 **Zakazivanju** termina\n• ❓ **Bilo čemu** što vas zanima",
        EN.greeting
      ),
      suggested: QUICK_REPLIES,
    };
  }

  const srThanks = ["hvala", "fala"];
  const enThanks = ["thank", "thanks", "thank you", "thx", "ty"];
  const allThanks = [...srThanks, ...enThanks];
  if (allThanks.some((g) => intent.userText.toLowerCase().includes(g))) {
    return {
      text: t(
        "Nema na čemu! 🎉 **Drago nam je što smo vam pomogli.**\n\nAko imate još pitanja, tu smo. Možete nas i pozvati:\n\n📞 [+381 11 328 4474](tel:+381113284474)\n📧 concierge@auradental.com\n\n**Želimo vam lep dan!** 😊",
        EN.thanks
      ),
    };
  }

  const topicResponses: Record<
    string,
    (kw: string[]) => { text: string; suggested?: QuickReply[] }
  > = {
    cena: () => ({
      text: t(
        "💰 **Cene naših usluga:**\n\n• **Straumann® implantati** — od €800 (sa krunicom)\n• **Keramičke fasete** — od €350 po zubu\n• **Invisalign®** — od €1,900 (kompletan tretman)\n• **Izbeljivanje Zoom** — €350\n• **Rutinski pregled** — €35\n\n> *Cene su informativnog karaktera. Tačnu ponudu dobijate na besplatnim konsultacijama.*\n\n**Želite tačnu ponudu?** Zakažite besplatne konsultacije!",
        EN.cena
      ),
      suggested: [
        { labelKey: "chat.book", label: "Zakaži termin", text: "Kako da zakažem termin?" },
        { labelKey: "chat.implants", label: "Implantati", text: "Šta su Straumann implantati?" },
      ],
    }),
    implantat: () => ({
      text: t(
        "🦷 **Straumann® Zubni Implantati — Švajcarski kvalitet**\n\n**Šta su implantati?** Titanijumski navrtanj koji zamenjuje koren zuba, sa keramičkom krunicom na vrhu.\n\n**Proces u 4 koraka:**\n1️⃣ **3D skeniranje** — CBCT skener za savršen model (5 sekundi)\n2️⃣ **Kompjutersko planiranje** — Simulacija pre intervencije\n3️⃣ **Bezbolna ugradnja** — STA kompjuterizovana anestezija\n4️⃣ **CAD/CAM krunica** — Robotizovana izrada u internoj laboratoriji\n\n✅ Doživotna garancija na implantat\n✅ Preko 98% uspešnosti\n✅ Prirodan izgled i osećaj",
        EN.implantat
      ),
      suggested: [
        { labelKey: "chat.prices", label: "Cene", text: "Koliko koštaju implantati?" },
        { labelKey: "chat.painless", label: "Bezbolnost", text: "Da li boli ugradnja implantata?" },
        { labelKey: "chat.book", label: "Zakaži", text: "Kako da zakažem termin?" },
      ],
    }),
    bol: () => ({
      text: t(
        "😌 **Potpuno bezbolni tretmani — to je naše obećanje.**\n\nKoristimo **STA (Single Tooth Anesthesia)** sistem — kompjuterski kontrolisanu lokalnu anesteziju koja:\n\n• 💉 **Bez bola** — računar kontroliše pritisak i brzinu\n• 🎯 **Precizno** — anestezira samo jedan zub\n• ⚡ **Brzo** — efekat za nekoliko sekundi\n• 😊 **Bez utrnulosti** — možete normalno govoriti\n\n> Većina pacijenata kaže da je **manje neprijatno od običnog vađenja zuba!**\n\nTakođe nudimo **sedaciju** (medicinski san) za veće zahvate.",
        EN.bol
      ),
      suggested: [
        { labelKey: "chat.implants", label: "Implantati", text: "Šta su implantati?" },
        { labelKey: "chat.prices", label: "Cene", text: "Koliko koštaju usluge?" },
        { labelKey: "chat.book", label: "Zakaži", text: "Kako da zakažem termin?" },
      ],
    }),
    invisalign: () => ({
      text: t(
        "😁 **Invisalign® — Nevidljive folije za savršen osmeh**\n\n**Šta je Invisalign?** Sistem providnih folija koje postepeno ispravljaju zube — **bez bravica, bez metala, bez bola.**\n\n**Prednosti:**\n✅ **Nevidljive** — gotovo ih niko ne primećuje\n✅ **Udobne** — bez iritacije desni\n✅ **Skidaju se** — jedete i perete zube normalno\n✅ **Brže** — 6-18 meseci, zavisno od slučaja\n✅ **3D prikaz** — vidite rezultat pre početka\n\nCena kompletnog tretmana: od **€1,900**",
        EN.invisalign
      ),
      suggested: [
        { labelKey: "chat.prices", label: "Cene", text: "Koliko košta Invisalign?" },
        { labelKey: "chat.book", label: "Zakaži", text: "Kako da zakažem termin?" },
        { labelKey: "chat.veneers", label: "Fasete", text: "Šta su keramičke fasete?" },
      ],
    }),
    termin: () => ({
      text: t(
        "📅 **Zakažite termin u AURA klinici**\n\nMožete zakazati na **3 načina:**\n\n1️⃣ **Online forma** — [Kliknite ovde](/zakazivanje) (najbrže)\n2️⃣ **Telefon** — [+381 11 328 4474](tel:+381113284474)\n3️⃣ **Dođite lično** — Bulevar Oslobođenja 44\n\n**Radno vreme:**\n• Pon—Pet: 08:00 – 21:00\n• Subota: 09:00 – 16:00\n\n> **Prvi put kod nas?** Ponestaje vam 20% depozita za potvrdu termina.",
        EN.termin
      ),
      suggested: [
        { labelKey: "chat.form", label: "Idi na formu", text: "Otvorite stranicu za zakazivanje" },
        { labelKey: "chat.prices", label: "Cene", text: "Koliko koštaju usluge?" },
        { labelKey: "chat.location", label: "Lokacija", text: "Gde se nalazite?" },
      ],
    }),
    garancija: () => ({
      text: t(
        "🛡️ **Naše garancije:**\n\n• **Straumann® implantati** — 🏆 **DOŽIVOTNA GARANCIJA** (zvanični pasoš)\n• **Keramičke krunice i mostovi** — 10 godina\n• **Estetski radovi (fasete)** — 5 godina\n• **Invisalign® retaineri** — 2 godine\n\n> Uslov je redovna šestomesečna kontrola. Naši radovi su podržani vrhunskim materijalima i najsavremenijom tehnologijom.",
        EN.garancija
      ),
      suggested: [
        { labelKey: "chat.implants", label: "Implantati", text: "Šta su Straumann implantati?" },
        { labelKey: "chat.prices", label: "Cene", text: "Koliko koštaju implantati?" },
      ],
    }),
    parking: () => ({
      text: t(
        "🚗 **Besplatan parking za pacijente!**\n\n• **Lokacija:** Podzemna garaža Aura Heights\n• **Cena:** **Besplatno** za pacijente klinike\n• **Kako:** Javite se obezbeđenju na **Rampi 1**\n  > *„Dolazim u AURA Dental Clinic”*\n\n• **Video nadzor** 24/7\n• **Lift** direktno do klinike (prizemlje, objekat A)",
        EN.parking
      ),
      suggested: [
        { labelKey: "chat.location", label: "Lokacija", text: "Gde se nalazite?" },
        { labelKey: "chat.book", label: "Zakaži", text: "Kako da zakažem termin?" },
      ],
    }),
    lokacija: () => ({
      text: t(
        "📍 **AURA Dental Clinic**\n\nBulevar Oslobođenja 44\n11000 Beograd\n**Aura Heights** — prizemlje, objekat A\n\n> *Zaseban ulaz sa ulične strane*\n\n[🗺️ **Otvori u Google Maps**](https://maps.google.com/?q=Bulevar+Oslobođenja+44,+Beograd)",
        EN.lokacija
      ),
      suggested: [
        { labelKey: "chat.parking", label: "Parking", text: "Kako je parking?" },
        { labelKey: "chat.book", label: "Zakaži", text: "Kako da zakažem termin?" },
      ],
    }),
    faseta: () => ({
      text: t(
        "✨ **Keramičke fasete — Savršen osmeh za samo 2 posete**\n\n**Šta su fasete?** Tanke keramičke ljuskice koje se postavljaju na prednju stranu zuba.\n\n**Idealan izbor za:**\n• Popravku oblika i veličine zuba\n• Prekrivanje diskoloracija\n• Zatvaranje razmaka između zuba\n• Kompletnu transformaciju osmeha\n\n**Cena:** od **€350** po zubu\n**Trajnost:** 15-20 godina uz pravilno održavanje",
        EN.faseta
      ),
      suggested: [
        { labelKey: "chat.prices", label: "Cene", text: "Koliko koštaju fasete?" },
        { labelKey: "chat.whitening", label: "Izbeljivanje", text: "Šta je izbeljivanje zuba?" },
        { labelKey: "chat.book", label: "Zakaži", text: "Kako da zakažem termin?" },
      ],
    }),
    izbeljivanje: () => ({
      text: t(
        "⚡ **Zoom! Izbeljivanje — Bledi osmeh za 60 minuta**\n\n**Zoom! WhiteSpeed** je najnapredniji sistem za izbeljivanje zuba:\n\n• ⏱ **Samo 60 minuta** u ordinaciji\n• 🎯 Do **8 nijansi bledje** u jednoj poseti\n• 😊 Bez bola i osetljivosti (uz zaštitni gel)\n• 📅 Rezultati traju 1-2 godine\n\n**Cena:** €350 (kompletan tretman)\n\nNakon tretmana dobijate komplet za održavanje kod kuće.",
        EN.izbeljivanje
      ),
      suggested: [
        { labelKey: "chat.veneers", label: "Fasete", text: "Šta su keramičke fasete?" },
        { labelKey: "chat.prices", label: "Cene", text: "Koliko koštaju usluge?" },
        { labelKey: "chat.book", label: "Zakaži", text: "Kako da zakažem termin?" },
      ],
    }),
    hirurgija: () => ({
      text: t(
        "🔬 **Oralna hirurgija — Vrhunska preciznost**\n\nNaš tim izvodi:\n\n• **Koštana augmentacija** — regeneracija kosti pre implantacije\n• **Sinus lift** — podizanje sinusa za implantate\n• **Vađenje umnjaka** — komplikovana i jednostavna\n• **Cistektomija** — uklanjanje cista\n• **Biopsija** — dijagnostika promena u usnoj duplji\n\nSve procedure se izvode uz **potpunu anesteziju** i **sedaciju** po potrebi.",
        EN.hirurgija
      ),
      suggested: [
        { labelKey: "chat.implants", label: "Implantati", text: "Šta su implantati?" },
        { labelKey: "chat.pain", label: "Bezbolnost", text: "Da li je hirurgija bolna?" },
      ],
    }),
    higijena: () => ({
      text: t(
        "🪥 **Preventiva i oralna higijena**\n\n**Profesionalno čišćenje kamenca** preporučuje se na **6 meseci**.\n\n**Šta uključuje:**\n• Uklanjanje kamenca (ultrazvuk)\n• Poliranje zuba\n• Fluoridacija\n• Saveti za negu\n\n**Cena:** €35 (rutinski pregled + čišćenje)\n\n> *Prevencija je uvek jeftinija od lečenja!* 💡",
        EN.higijena
      ),
      suggested: [
        { labelKey: "chat.prices", label: "Cene", text: "Koliko koštaju usluge?" },
        { labelKey: "chat.book", label: "Zakaži", text: "Kako da zakažem termin?" },
      ],
    }),
    general: () => ({
      text: t(
        "Hvala na pitanju! 😊\n\nMožete pitati o:\n\n💰 **Cenama** i načinima plaćanja\n🦷 **Implantatima** ili estetskoj stomatologiji\n😁 **Invisalign** folijama za ispravljanje zuba\n📅 **Zakazivanju** termina\n🚗 **Parkingu** i **lokaciji**\n\nIli mi jednostavno recite šta vas zanima — tu sam da vam pomognem!",
        EN.general
      ),
      suggested: QUICK_REPLIES,
    }),
  };

  const handler = topicResponses[intent.topic] || topicResponses.general;
  return handler(intent.keywords);
}

export function Chatbot() {
  const { t, locale } = useI18n();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 0) {
      setMessages([]);
    }
  }, [locale]);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: "bot",
          text: t("chat.greeting"),
        },
      ]);
    }
  }, [messages.length]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  function handleSend(text: string) {
    const msg = text.trim();
    if (!msg || loading) return;

    const currentLang = locale;

    if (msg === "Pozovi hitno" || msg === "Call now") {
      window.location.href = "tel:+381659994474";
      return;
    }

    if (msg === "Otvorite stranicu za zakazivanje" || msg === "Open booking page") {
      window.open("/zakazivanje", "_blank");
      setMessages((prev) => [
        ...prev,
        { role: "user", text: msg },
        { role: "bot", text: currentLang === "en" ? EN.booking : "📅 Otvorili smo stranicu za zakazivanje u novom tabu. Ako imate još pitanja, tu smo!" },
      ]);
      return;
    }

    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setInput("");
    setLoading(true);
    setShowQuickReplies(false);

    setTimeout(() => {
      const intent = analyzeIntent(msg);
      const response = buildResponse({ ...intent, userText: msg, lang: locale });
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: response.text },
      ]);
      setLoading(false);
      if (response.suggested) {
        setShowQuickReplies(true);
      }
    }, 800);
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend(input);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-20 md:bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-midnight shadow-lg shadow-gold/30 transition-all duration-200 hover:scale-110 hover:shadow-xl cursor-pointer"
        aria-label="Open chat"
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
        )}
      </button>

      <div
        className={`fixed bottom-36 md:bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] rounded-2xl bg-white shadow-2xl border border-midnight/5 transition-all duration-300 origin-bottom-right ${
          open ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-3 rounded-t-2xl bg-midnight px-5 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
            <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-alabaster">{t("chat.title")}</p>
            <p className="text-xs text-alabaster/50">{t("chat.subtitle")}</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="ml-auto text-alabaster/30 hover:text-alabaster/70 transition-colors cursor-pointer"
            aria-label="Close chat"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex h-[420px] flex-col gap-3 overflow-y-auto px-5 py-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                  msg.role === "user"
                    ? "bg-midnight text-alabaster rounded-br-md"
                    : "bg-alabaster text-midnight rounded-bl-md border border-midnight/5"
                }`}
              >
                {msg.text.split(/(https?:\/\/[^\s]+)/g).map((part, j) => {
                  if (part.startsWith("http")) {
                    return (
                      <a
                        key={j}
                        href={part}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold-dark underline hover:text-gold transition-colors"
                      >
                        {part}
                      </a>
                    );
                  }
                  return <span key={j}>{part}</span>;
                })}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-md bg-alabaster px-4 py-3 border border-midnight/5">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gold/60 [animation-delay:0ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gold/60 [animation-delay:150ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gold/60 [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}

          {showQuickReplies && !loading && messages.length > 0 && messages[messages.length - 1].role === "bot" && (
            <div className="flex flex-wrap gap-2 mt-2">
              {QUICK_REPLIES.map((qr) => (
                <button
                  key={qr.label}
                  onClick={() => handleSend(qr.text)}
                  className="rounded-full border border-gold/20 bg-gold/5 px-3.5 py-1.5 text-xs font-medium text-gold-dark transition-all duration-200 hover:bg-gold/10 hover:border-gold/40 cursor-pointer"
                >
                  {qr.labelKey ? t(qr.labelKey) : qr.label}
                </button>
              ))}
            </div>
          )}

          <div ref={endRef} />
        </div>

        <div className="border-t border-midnight/5 p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t("chat.placeholder")}
              className="flex-1 rounded-xl border border-midnight/10 bg-alabaster px-4 py-2.5 text-sm text-midnight placeholder:text-midnight/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-colors"
            />
            <button
              onClick={() => handleSend(input)}
              disabled={!input.trim() || loading}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold text-midnight transition-all duration-200 hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Send message"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
