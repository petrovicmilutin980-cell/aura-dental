import type { Metadata } from "next";
import { DOCTORS } from "@/lib/constants";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const DOCTOR_IMAGES: Record<string, string> = {
  "dr-jovanovic": "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&q=80&fit=crop",
  "dr-popovic": "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&fit=crop",
  "dr-petrovic": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80&fit=crop",
  "dr-nikolic": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&fit=crop",
  "dr-stojanovic": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&fit=crop",
  "dr-jankovic": "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80&fit=crop",
};

export const metadata: Metadata = {
  title: "Naš Tim Eksperata",
  description: "Upoznajte naše vrhunske stručnjake sa internacionalnim iskustvom u oblasti stomatologije.",
};

export default function TeamPage() {
  return (
    <>
      <section className="relative bg-midnight pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-alabaster md:text-5xl lg:text-6xl">
            Naš Tim Eksperata
          </h1>
          <p className="mt-4 text-lg text-alabaster/60 max-w-2xl mx-auto">
            Vrhunski stručnjaci sa internacionalnim iskustvom posvećeni vašem osmehu
          </p>
        </div>
      </section>

      <SectionWrapper background="alabaster">
        <div className="grid gap-10 md:grid-cols-2">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <ImagePlaceholder
                aspect="3/4"
                label={doctor.name}
                className="mb-6 max-w-sm mx-auto rounded-xl"
                src={DOCTOR_IMAGES[doctor.id] || "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&fit=crop"}
              />

              <div className="text-center">
                <h2 className="font-heading text-2xl font-bold text-midnight">
                  {doctor.name}
                </h2>
                <p className="mt-1 text-gold font-medium">{doctor.title}</p>
              </div>

              <p className="mt-6 text-midnight/60 leading-relaxed">
                {doctor.bio}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-midnight/40 mb-2">
                    Specijalnosti
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((s) => (
                      <span key={s} className="rounded-full bg-gold/5 px-3 py-1 text-xs font-medium text-gold-dark">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-midnight/40 mb-2">
                    Jezici
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map((l) => (
                      <span key={l} className="rounded-full bg-midnight/5 px-3 py-1 text-xs font-medium text-midnight/60">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-midnight/40 mb-2">
                  Sertifikati
                </h4>
                <div className="flex flex-wrap gap-2">
                  {doctor.certifications.map((c) => (
                    <span key={c} className="rounded-full border border-gold/20 px-3 py-1 text-xs font-medium text-gold-dark">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="midnight" padding="compact">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-alabaster">
            Želite da upoznate naš tim uživo?
          </h2>
          <p className="mt-3 text-alabaster/60">
            Zakažite termin i uverite se sami u njihovu profesionalnost
          </p>
          <a
            href="/zakazivanje"
            className="mt-6 inline-flex items-center rounded-xl bg-gold px-8 py-3 text-sm font-semibold text-midnight transition-all duration-200 hover:bg-gold-light"
          >
            Zakažite termin
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}
