import type { Metadata } from "next";
import { BookingContent } from "./BookingContent";

export const metadata: Metadata = {
  title: "Zakažite Termin",
  description: "Zakažite termin u AURA Dental Clinic. Brzo i jednostavno.",
};

export default function BookingPage() {
  return <BookingContent />;
}
