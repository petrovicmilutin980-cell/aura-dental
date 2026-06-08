import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "O Nama | AURA Dental Clinic",
  description: "Saznajte više o našoj stomatološkoj ordinaciji sa 15+ godina iskustva.",
};

export default function AboutPage() {
  return <AboutContent />;
}
