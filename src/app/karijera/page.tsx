import type { Metadata } from "next";
import { CareersContent } from "./CareersContent";

export const metadata: Metadata = {
  title: "Karijera",
  description: "Pridružite se AURA timu i budite deo priče o vrhunskoj stomatologiji.",
};

export default function CareersPage() {
  return <CareersContent />;
}
