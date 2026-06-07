import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktirajte AURA Dental Clinic. Bulevar Oslobođenja 44, Beograd. Telefon: +381 11 328 4474.",
};

export default function ContactPage() {
  return <ContactContent />;
}
