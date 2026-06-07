import type { Metadata } from "next";
import { BlogContent } from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog",
  description: "Stručni saveti i najnovije informacije iz sveta stomatologije.",
};

export default function BlogPage() {
  return <BlogContent />;
}
