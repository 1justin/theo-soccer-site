"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "The Player" },
  { href: "/story", label: "The Story" },
  { href: "/why", label: "The Build" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 nav-glass transition-all duration-200 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-wide uppercase text-white hover:text-volt transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Theo Mayer
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-widest transition-colors ${
                pathname === link.href
                  ? "text-volt"
                  : "text-white-secondary hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="bg-volt text-void text-sm font-semibold uppercase tracking-wider px-6 py-2.5 hover:bg-volt-hover transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-200 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-200 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-carbon border-t border-smoke">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-widest ${
                  pathname === link.href
                    ? "text-volt"
                    : "text-white-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="bg-volt text-void text-sm font-semibold uppercase tracking-wider px-6 py-3 text-center mt-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
