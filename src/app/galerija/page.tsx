import type { Metadata } from "next";
import { GalleryPageContent } from "./GalleryPageContent";

export const metadata: Metadata = {
  title: "Galerija Transformacija",
  description: "Pogledajte stvarne rezultate naših pacijenata - pre i posle tretmana implantologije, estetske stomatologije i ortodoncije.",
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
