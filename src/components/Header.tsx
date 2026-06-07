"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/Button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 my-3 md:mx-6 lg:mx-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-xl border border-gold/10 bg-alabaster/90 px-6 py-3 shadow-lg shadow-midnight/5 backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold tracking-tight text-midnight">
              AURA
              <span className="text-gold">.</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => {
              const isHash = item.link.includes("#");
              if (isHash) {
                return (
                  <a
                    key={item.link}
                    href={item.link}
                    onClick={(e) => {
                      e.preventDefault();
                      const id = item.link.split("#")[1];
                      const el = document.getElementById(id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                      else window.location.href = item.link;
                    }}
                    className="text-sm font-medium text-midnight/70 transition-colors duration-200 hover:text-gold"
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={item.link}
                  href={item.link}
                  className="text-sm font-medium text-midnight/70 transition-colors duration-200 hover:text-gold"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="tel:+381113284474"
              className="rounded-lg border border-midnight/10 px-4 py-2 text-sm font-medium text-midnight/70 transition-colors duration-200 hover:border-gold/30 hover:text-gold"
            >
              +381 11 328 4474
            </Link>
            <Button onClick={() => {}} variant="primary">
              Zakažite pregled
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-midnight transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-midnight transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-midnight transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-midnight/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-alabaster shadow-2xl transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-midnight/10 px-6 py-5">
          <span className="font-heading text-lg font-bold">
            AURA<span className="text-gold">.</span>
          </span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <svg className="h-6 w-6 text-midnight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-1 px-4 py-6">
          {NAV_ITEMS.map((item) => {
            const isHash = item.link.includes("#");
            if (isHash) {
              return (
                <a
                  key={item.link}
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    const id = item.link.split("#")[1];
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    else window.location.href = item.link;
                  }}
                  className="rounded-lg px-4 py-3 text-base font-medium text-midnight/70 transition-colors duration-200 hover:bg-gold/5 hover:text-gold"
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.link}
                href={item.link}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-midnight/70 transition-colors duration-200 hover:bg-gold/5 hover:text-gold"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-auto border-t border-midnight/10 px-4 py-6">
          <Button onClick={() => setMobileOpen(false)} variant="primary" className="w-full">
            Zakažite pregled
          </Button>
          <Link
            href="tel:+381113284474"
            className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-midnight/10 px-4 py-3 text-sm font-medium text-midnight/70 transition-colors duration-200 hover:border-gold/30 hover:text-gold"
          >
            <PhoneIcon className="h-4 w-4" />
            +381 11 328 4474
          </Link>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}
