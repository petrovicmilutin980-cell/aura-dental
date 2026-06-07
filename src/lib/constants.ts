export const SITE = {
  name: "AURA Dental Clinic",
  slogan: "Gde se spajaju medicinska perfekcija i estetska umetnost.",
  legalName: "AURA DENTAL CLINIC d.o.o. Beograd",
  pib: "123456789",
  maticniBroj: "98765432",
  licenseNumber: "180-00-555/2026-02",
  email: {
    primary: "concierge@auradental.com",
    vip: "vip@auradental.com",
  },
  phone: {
    reception: "+381 11 328 4474",
    emergency: "+381 65 999 4474",
    whatsapp: "wa.me/381113284474",
  },
  address: {
    street: "Bulevar Oslobođenja 44",
    city: "11000 Beograd",
    country: "Srbija",
    complex: "Aura Heights, prizemlje objekta A",
    notes: "Zaseban ulaz sa ulične strane",
  },
  social: {
    instagram: "https://instagram.com/auradental",
    tiktok: "https://tiktok.com/@auradental",
    youtube: "https://youtube.com/@auradental",
    facebook: "https://facebook.com/auradental",
  },
  parking: {
    available: true,
    type: "Underground private parking",
    cost: "Free for patients",
    instructions: "Obratite se obezbeđenju na ulazu u podzemnu garažu (Rampa 1)",
  },
  accessibility: {
    wheelchairAccess: true,
    elevator: true,
    accessibleToilets: true,
  },
} as const;

export const NAV_ITEMS = [
  { label: "Početna", link: "/" },
  { label: "Usluge", link: "/#services" },
  { label: "Galerija", link: "/galerija" },
  { label: "Tim", link: "/tim" },
  { label: "Blog", link: "/blog" },
  { label: "Kontakt", link: "/kontakt" },
] as const;

export const WORKING_HOURS = [
  { days: "Ponedeljak – Petak", hours: "08:00h – 21:00h", note: "Redovni termini i konsultacije" },
  { days: "Subota", hours: "09:00h – 16:00h", note: "Estetske procedure i hitne intervencije" },
  { days: "Nedelja", hours: "ZATVORENO", note: "Dostupan samo dežurni tim za hitne slučajeve" },
] as const;

export const STATISTICS = [
  { value: "12,000+", label: "Trajno rešenih osmeha", icon: "Smile" },
  { value: "15+", label: "Godina internacionalnog iskustva", icon: "Calendar" },
  { value: "0%", label: "Bol - kompjuterizovana anestezija", icon: "Shield" },
  { value: "Straumann®", label: "Zvanični partner klinike", icon: "Award" },
] as const;

export const SERVICES = [
  {
    id: "implantologija",
    title: "Implantologija",
    description: "Doživotno rešenje za nedostatak zuba sa Straumann® implantatima",
    icon: "Tooth",
    price: "Od 990€",
    duration: "60–90 min po implantatu",
    cta: "Zakažite besplatnu 3D konsultaciju",
    ctaLink: "/zakazivanje",
    features: [
      "Straumann® implantati (Švajcarska)",
      "3D kompjuterska dijagnostika",
      "Doživotna garancija na implantat",
      "Bezbolna procedura (sedacija opciono)",
    ],
  },
  {
    id: "estetska-stomatologija",
    title: "Estetska Stomatologija",
    description: "Fasete, izbeljivanje i kompletna transformacija osmeha",
    icon: "Sparkles",
    price: "Od 350€",
    duration: "2–3 posete",
    cta: "Zatražite Smile Design",
    ctaLink: "/zakazivanje",
    features: [
      "Keramičke fasete (E-MAX / IPS)",
      "Zoom! profesionalno izbeljivanje",
      "Digitalni Smile Design",
      "15–20 godina trajnosti",
    ],
  },
  {
    id: "ortodoncija",
    title: "Ortodoncija",
    description: "Invisalign® nevidljive folije za savršen osmeh",
    icon: "Align",
    price: "Od 2.900€",
    duration: "6–18 meseci",
    cta: "Zakažite 3D simulaciju",
    ctaLink: "/zakazivanje",
    features: [
      "Invisalign® (SAD) nevidljive folije",
      "3D digitalna simulacija",
      "Bez metala i bravica",
      "Pregled na svakih 4–6 nedelja",
    ],
  },
] as const;

export const ACCREDITATIONS = [
  "Straumann Certified Center",
  "Invisalign Provider",
  "Ivoclar Vivadent Partner",
  "Serbian Dental Association",
] as const;

export const GALLERY_FILTERS = ["Svi", "Implantologija", "Estetika", "Ortodoncija", "Hirurgija"] as const;

export const BLOG_CATEGORIES = ["Implantologija", "Estetika", "Saveti Lekara", "Ortodoncija"] as const;

export const DOCTORS = [
  {
    id: "dr-jovanovic",
    name: "Prof. dr Milan Jovanović",
    title: "Specijalista oralne hirurgije i implantologije",
    bio: "Diplomirao na Medicinskom fakultetu u Švajcarskoj (Zürich), gde je proveo 7 godina na usavršavanju u oblasti napredne koštane rekonstrukcije. Autor je preko 30 naučnih radova i zvanični edukator za Straumann sisteme u Jugoistočnoj Evropi. U svojoj karijeri uspešno je ugradio preko 9.000 implantata.",
    specialties: ["Implantologija", "Oralna Hirurgija", "Koštana Rekonstrukcija"],
    languages: ["Srpski", "Engleski", "Nemački"],
    certifications: ["Straumann Educator", "Swiss Dental Association"],
  },
  {
    id: "dr-popovic",
    name: "Dr Elena Popović",
    title: "Ekspert za estetsku stomatologiju i ortodonciju",
    bio: "Specijalizovana za dizajn osmeha (Smile Design) i minimalno invazivne fasete (Veneers). Zvanično licencirani lekar za Invisalign® (nevidljive folije za ispravljanje zuba). Poznata je po svom neverovatno strpljivom pristupu pacijentima koji imaju izražen strah od zubara.",
    specialties: ["Estetska Stomatologija", "Ortodoncija", "Smile Design"],
    languages: ["Srpski", "Engleski", "Italijanski"],
    certifications: ["Invisalign Provider", "Ivoclar Vivadent Certified"],
  },
] as const;
