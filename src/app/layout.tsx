import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { MobileBottomNav } from "@/components/MobileBottomNav";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | AURA Dental Clinic",
    default: "AURA Dental Clinic - Premium Stomatologija Beograd",
  },
  description:
    "Najmodernija premium stomatološka klinika u regionu. Vrhunski švajcarski standardi, lideri u implantologiji i potpuno bezbolni estetski tretmani.",
  keywords: [
    "stomatolog Beograd",
    "implantati Beograd",
    "estetska stomatologija",
    "invisalign Srbija",
    "zubar Beograd",
    "dental clinic Serbia",
  ],
  openGraph: {
    title: "AURA Dental Clinic - Premium Stomatologija Beograd",
    description:
      "Najmodernija premium stomatološka klinika u regionu. Vrhunski švajcarski standardi.",
    locale: "sr_RS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${playfair.variable} ${inter.variable} scroll-smooth`} data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col bg-alabaster text-midnight antialiased">
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <Chatbot />
        <MobileBottomNav />
      </body>
    </html>
  );
}
