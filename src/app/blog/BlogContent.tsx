"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionWrapper } from "@/components/SectionWrapper";
import { BLOG_CATEGORIES } from "@/lib/constants";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { useI18n } from "@/lib/i18n/context";
import { POSTS } from "@/lib/blog/posts";

const POST_SLUGS = Object.keys(POSTS);

const POST_META: Record<string, { category: string }> = {
  "sve-sto-treba-da-znate-o-zubnim-implantatima": { category: "Implantologija" },
  "nevidljive-folije-za-savrsen-osmeh-invisalign-vodic": { category: "Ortodoncija" },
  "kako-odrzati-bele-zube-nakon-izbeljivanja": { category: "Saveti Lekara" },
  "digitalna-stomatologija-buducnost-je-stigla": { category: "Estetika" },
  "kako-prevazici-strah-od-zubara": { category: "Saveti Lekara" },
};

export function BlogContent() {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState("Svi");

  const categoryLabel = (cat: string) => {
    const map: Record<string, string> = {
      Implantologija: t("blog.category.implantology"),
      Estetika: t("blog.category.aesthetics"),
      Ortodoncija: t("blog.category.orthodontics"),
      "Saveti Lekara": t("blog.category.tips"),
    };
    return map[cat] || cat;
  };

  const filtered = activeCategory === "Svi"
    ? POST_SLUGS
    : POST_SLUGS.filter((slug) => POST_META[slug]?.category === activeCategory);

  return (
    <>
      <section className="relative bg-midnight pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-alabaster md:text-5xl lg:text-6xl">
            {t("blog.heading")}
          </h1>
          <p className="mt-4 text-lg text-alabaster/60 max-w-2xl mx-auto">
            {t("blog.subtitle")}
          </p>
        </div>
      </section>

      <SectionWrapper background="alabaster">
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("Svi")}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeCategory === "Svi"
                ? "border-gold bg-gold text-alabaster"
                : "border-midnight/10 text-midnight/60 hover:border-gold/30 hover:text-gold hover:bg-gold/5"
            }`}
          >
            {t("blog.all")}
          </button>
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "border-gold bg-gold text-alabaster"
                  : "border-midnight/10 text-midnight/60 hover:border-gold/30 hover:text-gold hover:bg-gold/5"
              }`}
            >
              {categoryLabel(cat)}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-midnight/40 py-20">
            {t("blog.empty")}
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((slug) => {
              const post = POSTS[slug as keyof typeof POSTS];
              const meta = POST_META[slug];
              return (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="group rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden cursor-pointer"
                >
                  <ImagePlaceholder aspect="16/9" label={t(`blog.post.${slug}`)} src={post.image} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-midnight/40">
                      <span className="font-semibold uppercase tracking-wider text-gold">
                        {categoryLabel(meta?.category || "")}
                      </span>
                      <span>&middot;</span>
                      <span>{post.readTime} {t("blog.minRead")}</span>
                    </div>
                    <h3 className="mt-3 font-heading text-lg font-semibold text-midnight transition-colors duration-200 group-hover:text-gold">
                      {t(`blog.post.${slug}`)}
                    </h3>
                    <p className="mt-2 text-sm text-midnight/60 line-clamp-2">
                      {t(`blog.post.${slug}.excerpt`)}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-midnight/40 group-hover:text-gold/60 transition-colors">
                      <span>{t("blog.readMore")}</span>
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </SectionWrapper>
    </>
  );
}
