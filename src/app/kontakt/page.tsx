import type { Metadata } from "next";
import { SITE, WORKING_HOURS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktirajte AURA Dental Clinic. Bulevar Oslobođenja 44, Beograd.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-midnight pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-alabaster md:text-5xl lg:text-6xl">
            Kontakt i Lokacija
          </h1>
          <p className="mt-4 text-lg text-alabaster/60 max-w-2xl mx-auto">
            Tu smo za sva vaša pitanja. Kontaktirajte nas ili nas posetite.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-alabaster">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-midnight">
                  Kontaktirajte Nas
                </h2>
                <div className="mt-6 space-y-5">
                  <ContactItem
                    icon={<PhoneIcon />}
                    label="Telefon (recepcija)"
                    value={SITE.phone.reception}
                    href={`tel:${SITE.phone.reception}`}
                  />
                  <ContactItem
                    icon={<EmergencyIcon />}
                    label="Hitni slučajevi"
                    value={SITE.phone.emergency}
                    href={`tel:${SITE.phone.emergency}`}
                    urgent
                  />
                  <ContactItem
                    icon={<EmailIcon />}
                    label="Email"
                    value={SITE.email.primary}
                    href={`mailto:${SITE.email.primary}`}
                  />
                  <ContactItem
                    icon={<VipIcon />}
                    label="VIP kontakt"
                    value={SITE.email.vip}
                    href={`mailto:${SITE.email.vip}`}
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-midnight">
                  Lokacija
                </h2>
                <div className="mt-4 space-y-2 text-sm text-midnight/60">
                  <p className="font-medium text-midnight">{SITE.address.street}</p>
                  <p>{SITE.address.city}</p>
                  <p className="italic">{SITE.address.complex}</p>
                  <p className="text-xs text-midnight/40">{SITE.address.notes}</p>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-midnight">
                  Radno Vreme
                </h2>
                <div className="mt-4 space-y-3">
                  {WORKING_HOURS.map((wh) => (
                    <div key={wh.days} className="flex items-start justify-between gap-4 text-sm">
                      <div>
                        <p className="font-medium text-midnight">{wh.days}</p>
                        <p className="text-xs text-midnight/40 italic">{wh.note}</p>
                      </div>
                      <span className="text-midnight/60 whitespace-nowrap">{wh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-midnight mb-4">
                  Parking
                </h2>
                <p className="text-sm text-midnight/60">
                  {SITE.parking.type} — {SITE.parking.cost}
                </p>
                <p className="mt-2 text-sm text-midnight/50">
                  {SITE.parking.instructions}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-midnight mb-4">
                  Pristupačnost
                </h2>
                <p className="text-sm text-midnight/60">
                  Kompletan prilaz klinici i unutrašnjost ordinacija u potpunosti su prilagođeni osobama sa invaliditetom (lift, prilaz, prilagođene toaletne prostorije).
                </p>
              </div>

              <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-midnight/5 to-gold/5 shadow-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPinIcon />
                  <p className="mt-3 text-sm font-medium text-midnight/40">
                    Bulevar Oslobođenja 44, Beograd
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${SITE.address.street},${SITE.address.city}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm text-gold transition-colors duration-200 hover:text-gold-dark"
                  >
                    Otvori u Google Maps
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
  urgent = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  urgent?: boolean;
}) {
  return (
    <a
      href={href}
      className={`flex items-start gap-4 rounded-xl p-4 transition-all duration-200 hover:bg-midnight/5 cursor-pointer ${
        urgent ? "bg-emergency/5 border border-emergency/10" : ""
      }`}
    >
      <div className={`mt-0.5 ${urgent ? "text-emergency" : "text-gold"}`}>{icon}</div>
      <div>
        <p className={`text-sm font-medium ${urgent ? "text-emergency" : "text-midnight"}`}>
          {label}
        </p>
        <p className={`text-sm ${urgent ? "text-emergency/80" : "text-midnight/60"}`}>
          {value}
        </p>
      </div>
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function EmergencyIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function VipIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="mx-auto h-10 w-10 text-midnight/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}
