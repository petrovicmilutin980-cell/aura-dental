import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/SectionWrapper";
import { BLOG_CATEGORIES } from "@/lib/constants";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Blog",
  description: "Stručni saveti i najnovije informacije iz sveta stomatologije.",
};

const POSTS = [
  {
    slug: "sve-sto-treba-da-znate-o-zubnim-implantatima",
    title: "Sve što treba da znate o zubnim implantatima",
    excerpt: "Zubni implantati su najbolje dugoročno rešenje za nadoknadu izgubljenih zuba. Saznajte kako funkcionišu, koliko traje proces i zašto su Straumann® implantati zlatni standard.",
    category: "Implantologija",
    date: "2026-05-15",
    readTime: 8,
  },
  {
    slug: "nevidljive-folije-za-savrsen-osmeh-invisalign-vodic",
    title: "Nevidljive folije za savršen osmeh – Invisalign® vodič",
    excerpt: "Kako funkcioniše Invisalign tretman? Koliko traje i da li je bolan? Donosimo kompletan vodič kroz najpopularniji sistem za ispravljanje zuba bez bravica.",
    category: "Ortodoncija",
    date: "2026-05-01",
    readTime: 10,
  },
  {
    slug: "kako-odrzati-bele-zube-nakon-izbeljivanja",
    title: "Kako održati bele zube nakon izbeljivanja?",
    excerpt: "Profesionalno izbeljivanje zuba može transformisati vaš osmeh, ali ključ je u pravilnom održavanju. Otkrijte savete naših stručnjaka za dugotrajne rezultate.",
    category: "Saveti Lekara",
    date: "2026-04-20",
    readTime: 6,
  },
  {
    slug: "digitalna-stomatologija-buducnost-je-stigla",
    title: "Digitalna stomatologija – budućnost je stigla",
    excerpt: "CBCT skeneri, intraoralne kamere, 3D printanje – kako digitalna tehnologija menja lice moderne stomatologije i čini tretmane preciznijim i bezbolnijim.",
    category: "Estetika",
    date: "2026-04-10",
    readTime: 7,
  },
  {
    slug: "kako-prevazici-strah-od-zubara",
    title: "Kako prevazići strah od zubara?",
    excerpt: "Dentofobija pogađa milione ljudi širom sveta. Saznajte kako moderna stomatologija može da vam pomogne da strah zamenite samopouzdanjem.",
    category: "Saveti Lekara",
    date: "2026-03-28",
    readTime: 5,
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative bg-midnight pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-alabaster md:text-5xl lg:text-6xl">
            Edukativni Blog
          </h1>
          <p className="mt-4 text-lg text-alabaster/60 max-w-2xl mx-auto">
            Stručni saveti i najnovije informacije iz sveta stomatologije
          </p>
        </div>
      </section>

      <SectionWrapper background="alabaster">
        <div className="flex flex-wrap gap-2 mb-10">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className="rounded-full border border-midnight/10 px-5 py-2 text-sm font-medium text-midnight/60 transition-all duration-200 hover:border-gold/30 hover:text-gold hover:bg-gold/5 cursor-pointer"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden cursor-pointer"
            >
              <ImagePlaceholder aspect="16/9" label={post.title} src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&fit=crop" />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-midnight/40">
                  <span className="font-semibold uppercase tracking-wider text-gold">
                    {post.category}
                  </span>
                  <span>&middot;</span>
                  <span>{post.readTime} min čitanja</span>
                </div>
                <h3 className="mt-3 font-heading text-lg font-semibold text-midnight transition-colors duration-200 group-hover:text-gold">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-midnight/60 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-midnight/40 group-hover:text-gold/60 transition-colors">
                  <span>Pročitaj više</span>
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
