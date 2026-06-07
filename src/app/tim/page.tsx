import type { Metadata } from "next";
import { TeamPageContent } from "./TeamPageContent";

export const metadata: Metadata = {
  title: "Naš Tim Eksperata",
  description: "Upoznajte naše vrhunske stručnjake sa internacionalnim iskustvom u oblasti stomatologije.",
};

export default function TeamPage() {
  return <TeamPageContent />;
}
