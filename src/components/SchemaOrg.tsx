import { SITE, WORKING_HOURS } from "@/lib/constants";

export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://sajt-nine.vercel.app/#organization",
        name: SITE.name,
        legalName: SITE.legalName,
        description: SITE.slogan,
        url: "https://sajt-nine.vercel.app",
        telephone: SITE.phone.reception,
        email: SITE.email.primary,
        image: "https://images.pexels.com/photos/3845554/pexels-photo-3845554.jpeg?w=1200&q=80",
        logo: "https://sajt-nine.vercel.app/logo.png",
        foundingDate: "2020",
        numberOfEmployees: { "@type": "QuantitativeValue", minValue: 25, maxValue: 50 },
        taxID: SITE.pib,
        medicalSpecialty: [
          "Implantology",
          "Orthodontics",
          "Prosthodontics",
          "Periodontics",
          "OralSurgery",
          "CosmeticDentistry",
        ],
        availableService: ["Straumann® Implants", "Invisalign®", "Zoom! Whitening", "Ceramic Veneers", "Smile Design"],
        parentOrganization: {
          "@type": "Organization",
          name: SITE.legalName,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city.replace("11000 ", ""),
          postalCode: "11000",
          addressCountry: "RS",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.8054,
          longitude: 20.4733,
        },
        openingHoursSpecification: WORKING_HOURS.filter((wh) => wh.hours !== "ZATVORENO").map((wh) => {
          const [opens, closes] = wh.hours.split(" – ").map((t) => t.replace("h", ":00"));
          return {
            "@type": "OpeningHoursSpecification",
            dayOfWeek:
              wh.days === "Ponedeljak – Petak"
                ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
                : ["Saturday"],
            opens,
            closes,
          };
        }),
        paymentAccepted: ["Cash", "Credit Card", "Insurance"],
        priceRange: "€€€",
        hasMap: "https://maps.google.com/?q=Bulevar+Oslobođenja+44,+Beograd",
        sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.youtube, SITE.social.tiktok],
      },
      {
        "@type": "Dentist",
        "@id": "https://sajt-nine.vercel.app/#dentist",
        name: SITE.name,
        url: "https://sajt-nine.vercel.app",
        description: SITE.slogan,
        telephone: SITE.phone.reception,
        email: SITE.email.primary,
        image: "https://images.pexels.com/photos/3845554/pexels-photo-3845554.jpeg?w=1200&q=80",
        priceRange: "€€€",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
