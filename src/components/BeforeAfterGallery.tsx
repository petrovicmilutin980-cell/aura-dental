"use client";

import { useState, useEffect } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const CASES = [
  { id: 1, category: "Implantologija", title: "Totalna rekonstrukcija gornje vilice", src: "https://images.pexels.com/photos/3946840/pexels-photo-3946840.jpeg?w=800&q=80" },
  { id: 2, category: "Estetika", title: "Kompletna transformacija osmeha - fasete", src: "https://images.pexels.com/photos/6627562/pexels-photo-6627562.jpeg?w=800&q=80" },
  { id: 3, category: "Ortodoncija", title: "Invisalign - ispravljanje zuba bez bravica", src: "https://images.pexels.com/photos/6529216/pexels-photo-6529216.jpeg?w=800&q=80" },
  { id: 4, category: "Implantologija", title: "All-on-4 implantat most", src: "https://images.pexels.com/photos/6529107/pexels-photo-6529107.jpeg?w=800&q=80" },
  { id: 5, category: "Estetika", title: "Izbeljivanje zuba - Zoom", src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80&fit=crop" },
  { id: 6, category: "Hirurgija", title: "Koštana augmentacija pre implantacije", src: "https://images.pexels.com/photos/3845553/pexels-photo-3845553.jpeg?w=800&q=80" },
];

const FILTERS = ["Svi", "Implantologija", "Estetika", "Ortodoncija", "Hirurgija"];

export function BeforeAfterGallery() {
  const [activeFilter, setActiveFilter] = useState("Svi");
  const [lightbox, setLightbox] = useState<typeof CASES[0] | null>(null);

  const filtered = CASES.filter(
    (c) => activeFilter === "Svi" || c.category === activeFilter
  );

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <SectionWrapper background="alabaster" id="beforeAfter">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold text-midnight md:text-4xl">
          Transformacije Naših Pacijenata
        </h2>
        <p className="mt-4 text-midnight/60">Stvarni rezultati, stvarni ljudi</p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeFilter === filter
                ? "bg-midnight text-alabaster"
                : "bg-white text-midnight/60 hover:bg-midnight/5 hover:text-midnight border border-midnight/10"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <div
            key={c.id}
            onClick={() => setLightbox(c)}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          >
            <ImagePlaceholder aspect="4/3" label={c.title} src={c.src} />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-light">{c.category}</span>
              <h3 className="font-heading text-base font-semibold text-alabaster">{c.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight/80 backdrop-blur-md p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null); }}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-alabaster/10 text-alabaster hover:bg-alabaster/20 transition-all cursor-pointer"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img src={lightbox.src} alt={lightbox.title} className="w-full h-auto" />
            </div>
            <div className="mt-4 text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-gold-light">{lightbox.category}</span>
              <h3 className="font-heading text-xl font-semibold text-alabaster mt-1">{lightbox.title}</h3>
              <p className="text-sm text-alabaster/50 mt-1">Kliknite van slike za zatvaranje</p>
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
