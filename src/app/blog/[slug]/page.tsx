import type { Metadata } from "next";
import { POSTS, getPostDescription } from "@/lib/blog/posts";
import { BlogDetailContent } from "./BlogDetailContent";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = POSTS[params.slug];
  if (!post) return { title: "Blog Post Not Found" };

  const description = getPostDescription(post.content);

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, width: 800, height: 450, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  return <BlogDetailContent slug={params.slug} />;
}
