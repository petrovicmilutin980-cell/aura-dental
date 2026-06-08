import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { I18nProvider } from "@/lib/i18n/context";
import { SchemaOrg } from "@/components/SchemaOrg";

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
  metadataBase: new URL("https://aurast.com"),
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
    "straumann Beograd",
    "oralna hirurgija",
  ],
  authors: [{ name: "AURA Dental Clinic" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: "AURA Dental Clinic",
    title: "AURA Dental Clinic - Premium Stomatologija Beograd",
    description:
      "Najmodernija premium stomatološka klinika u regionu. Vrhunski švajcarski standardi.",
    url: "https://aurast.com",
    images: [
      {
        url: "https://images.pexels.com/photos/3845554/pexels-photo-3845554.jpeg?w=1200&q=80",
        width: 1200,
        height: 800,
        alt: "AURA Dental Clinic - Premium Stomatologija Beograd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AURA Dental Clinic - Premium Stomatologija Beograd",
    description:
      "Najmodernija premium stomatološka klinika u regionu. Vrhunski švajcarski standardi.",
    images: ["https://images.pexels.com/photos/3845554/pexels-photo-3845554.jpeg?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://aurast.com",
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
        <I18nProvider>
          <SchemaOrg />
          <Header />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
          <Footer />
          <Chatbot />
          <MobileBottomNav />
        </I18nProvider>
      </body>
    </html>
  );
}
