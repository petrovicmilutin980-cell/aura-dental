"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import { useI18n } from "@/lib/i18n/context";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Header() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY.current;
        const threshold = 50;

        if (currentScrollY <= threshold || mobileOpen) {
          setHeaderHidden(false);
        } else if (delta > 0) {
          setHeaderHidden(true);
        } else if (delta < 0) {
          setHeaderHidden(false);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  function navLabel(item: (typeof NAV_ITEMS)[number]): string {
    const key: Record<string, string> = {
      "/": "nav.home",
      "/#services": "nav.services",
      "/galerija": "nav.gallery",
      "/tim": "nav.team",
      "/blog": "nav.blog",
      "/kontakt": "nav.contact",
    };
    return t(key[item.link]);
  }

  function isActive(link: string) {
    if (link === "/") return pathname === "/";
    if (link.includes("#")) return false;
    return pathname.startsWith(link);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out will-change-transform ${
          headerHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
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
                const active = isActive(item.link);
                const isHash = item.link.includes("#");
                const linkClass = `text-sm font-medium transition-colors duration-200 hover:text-gold ${
                  active ? "text-gold font-semibold" : "text-midnight/70"
                }`;
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
                      className={linkClass}
                    >
                      {navLabel(item)}
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.link}
                    href={item.link}
                    className={linkClass}
                  >
                    {navLabel(item)}
                  </Link>
                );
              })}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <LanguageSwitcher />
              <Link
                href="tel:+381113284474"
                className="rounded-lg border border-midnight/10 px-4 py-2 text-sm font-medium text-midnight/70 transition-colors duration-200 hover:border-gold/30 hover:text-gold"
              >
                +381 11 328 4474
              </Link>
              <Link
                href="/zakazivanje"
                className="inline-flex items-center justify-center rounded-xl bg-midnight px-6 py-2.5 text-sm font-medium text-alabaster shadow-lg shadow-midnight/10 transition-all duration-200 hover:bg-midnight/90 hover:shadow-xl hover:shadow-midnight/20"
              >
                {t("nav.book")}
              </Link>
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
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(11, 19, 43, 0.6)" }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-0 z-[200] flex flex-col overflow-y-auto bg-white transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5" style={{ backgroundColor: "#ffffff" }}>
          <span className="font-heading text-lg font-bold text-midnight">
            AURA<span className="text-gold">.</span>
          </span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-midnight">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col pt-2">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.link);
            const isHash = item.link.includes("#");
            const linkClass = `px-6 py-4 text-base font-medium transition-colors duration-200 border-b border-gray-100 ${
              active ? "text-gold font-semibold bg-gold/5" : "text-gray-900"
            }`;
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
                  className={linkClass}
                  style={{ color: active ? "#D4AF37" : "#1a1a1a" }}
                >
                  {navLabel(item)}
                </a>
              );
            }
            return (
              <Link
                key={item.link}
                href={item.link}
                onClick={() => setMobileOpen(false)}
                className={linkClass}
                style={{ color: active ? "#D4AF37" : "#1a1a1a" }}
              >
                {navLabel(item)}
              </Link>
            );
          })}
        </div>

        <div className="mt-auto px-6 py-8" style={{ backgroundColor: "#ffffff" }}>
          <div className="mb-6 flex justify-center">
            <LanguageSwitcher />
          </div>
          <Link
            href="/zakazivanje"
            onClick={() => setMobileOpen(false)}
            className="flex w-full items-center justify-center rounded-xl bg-midnight px-6 py-3.5 text-sm font-medium text-white shadow-lg"
            style={{ backgroundColor: "#0B132B", color: "#ffffff" }}
          >
            {t("nav.book")}
          </Link>
          <Link
            href="tel:+381113284474"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-3.5 text-sm font-medium"
            style={{ color: "#1a1a1a", borderColor: "#e5e7eb" }}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            +381 11 328 4474
          </Link>
        </div>
      </div>
    </>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}
