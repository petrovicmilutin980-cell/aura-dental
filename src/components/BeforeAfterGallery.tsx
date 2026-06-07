"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const CASES = [
  { id: 1, category: "Implantologija", title: "Totalna rekonstrukcija gornje vilice" },
  { id: 2, category: "Estetika", title: "Kompletna transformacija osmeha - fasete" },
  { id: 3, category: "Ortodoncija", title: "Invisalign - ispravljanje zuba bez bravica" },
  { id: 4, category: "Implantologija", title: "All-on-4 implantat most" },
  { id: 5, category: "Estetika", title: "Izbeljivanje zuba - Zoom" },
  { id: 6, category: "Hirurgija", title: "Koštana augmentacija pre implantacije" },
];

const FILTERS = ["Svi", "Implantologija", "Estetika", "Ortodoncija", "Hirurgija"];

export function BeforeAfterGallery() {
  const [activeFilter, setActiveFilter] = useState("Svi");

  const filtered = CASES.filter(
    (c) => activeFilter === "Svi" || c.category === activeFilter
  );

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
            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          >
            <ImagePlaceholder
              aspect="4/3"
              label={`Before / After - ${c.title}`}
            />

            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                {c.category}
              </span>
              <h3 className="mt-1 font-heading text-base font-semibold text-midnight group-hover:text-gold transition-colors duration-200">
                {c.title}
              </h3>
              <div className="mt-3 flex items-center gap-1 text-xs font-medium text-midnight/40 group-hover:text-gold/60 transition-colors">
                <span>Pogledaj slučaj</span>
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
