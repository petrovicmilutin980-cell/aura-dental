"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useI18n } from "@/lib/i18n/context";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { POSTS, type BlogPost } from "@/lib/blog/posts";

export function BlogDetailContent({ slug }: { slug: string }) {
  const { t } = useI18n();
  const post: BlogPost | undefined = POSTS[slug];

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
            {t("blog.back")}
          </Link>
          <div className="flex items-center gap-3 text-sm text-alabaster/50 mb-4">
            <span className="font-semibold uppercase tracking-wider text-gold">{post.category}</span>
            <span>&middot;</span>
            <span>{post.readTime} {t("blog.minRead")}</span>
          </div>
          <h1 className="font-heading text-3xl font-bold text-alabaster md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="py-16 md:py-24 bg-alabaster">
        <div className="mx-auto max-w-3xl px-6">
          <ImagePlaceholder aspect="16/9" label={post.title} className="mb-10 rounded-2xl" src={post.image} />
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
