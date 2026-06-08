"use client";

import { useState, useEffect, useCallback } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useI18n } from "@/lib/i18n/context";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Marija N.",
    rating: 5,
    text: "Nakon više godina straha od zubara, AURA klinika mi je potpuno promenila mišljenje. Kompjuterizovana anestezija je zaista bezbolna, a ceo tim je bio neverovatno strpljiv i profesionalan. Preporučujem svima koji imaju strah od stomatologa.",
    treatment: "Estetska stomatologija",
  },
  {
    id: 2,
    name: "Marko V.",
    rating: 5,
    text: "Totalna rekonstrukcija gornje vilice sa All-on-4 implantatima. Za samo 48 sati dobio sam privremenu strukturu, a konačan rezultat je nadmašio sva očekivanja. Prof. dr Jovanović je pravi vrhunski stručnjak.",
    treatment: "Implantologija",
  },
  {
    id: 3,
    name: "Jelena P.",
    rating: 5,
    text: "Invisalign tretman kod dr Popović je bio apsolutno fantastično iskustvo. Svaki korak je bio detaljno objašnjen, folije su gotovo neprimetne, a rezultat nakon 8 meseci je savršen osmeh o kome sam oduvek sanjala.",
    treatment: "Ortodoncija",
  },
  {
    id: 4,
    name: "Nikola R.",
    rating: 5,
    text: "Profesionalnost na najvišem nivou. Ceo tim zrači energijom i posvećenošću. Klinika je prelepo dizajnirana, najsavremenija oprema, a osećaj je kao da ste u svetskom centru, a ne u ordinaciji. Ponosan sam što sam pacijent AURA klinike.",
    treatment: "Oralna hirurgija",
  },
];

export function TestimonialsSection() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const testimonial = TESTIMONIALS[active];

  return (
    <SectionWrapper background="midnight" id="testimonials">
      <div className="relative">
        <div className="absolute top-0 left-0 text-6xl font-heading text-gold/10 leading-none select-none">
          &ldquo;
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-alabaster md:text-4xl">
            {t("testimonials.heading")}
          </h2>

          <div className="mt-10">
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <svg key={i} className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="mt-6 text-lg leading-relaxed text-alabaster/80 md:text-xl italic">
              &ldquo;{testimonial.text}&rdquo;
            </blockquote>

            <div className="mt-6">
              <p className="font-semibold text-alabaster">{testimonial.name}</p>
              <p className="mt-1 text-sm text-gold/70">{testimonial.treatment}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === active ? "w-8 bg-gold" : "w-2 bg-alabaster/20"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 right-0 text-6xl font-heading text-gold/10 leading-none select-none">
          &rdquo;
        </div>
      </div>
    </SectionWrapper>
  );
}
