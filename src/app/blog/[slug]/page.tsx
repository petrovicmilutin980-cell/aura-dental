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
          <ImagePlaceholder aspect="16/9" label={post.title} className="mb-10 rounded-2xl" />
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
