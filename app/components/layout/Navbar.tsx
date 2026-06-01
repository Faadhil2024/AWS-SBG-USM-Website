"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/config";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass border-b border-brand-border py-3"
            : "bg-transparent py-5"
        )}
      >
        <nav className="max-w-7xl mx-auto section-padding flex items-center justify-between">

          {/* Logo */}
<Link href="/" className="flex items-center gap-2.5">
  <div className="peer w-8 h-8 rounded-md bg-aws-gradient flex items-center justify-center shadow-glow-orange transition-all duration-300 hover:bg-white cursor-pointer">
    <img
      src="/images/AWS-SBG-Logo-Black.png"
      alt="AWS SBG Logo"
      className="w-5 h-5 object-contain peer-hover:hidden block"
    />
    <img
      src="/images/AWS-SBG-Logo-Purple.png"
      alt="AWS SBG Logo"
      className="w-5 h-5 object-contain hidden peer-hover:block"
    />
  </div>
  <div className="leading-tight">
    <span className="block text-sm font-semibold text-text-primary hover:text-aws-orange transition-colors">
      AWS SBG USM
    </span>
    <span className="block text-xs text-text-muted">
      {SITE_CONFIG.universityShort}
    </span>
  </div>
</Link>
          

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    item.highlight
                      ? "bg-aws-orange text-brand-bg hover:bg-aws-orange-light ml-2"
                      : "text-text-secondary hover:text-text-primary hover:bg-brand-elevated"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-brand-elevated transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </nav>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm"
            onClick={closeMenu}
          />
          <div className="absolute top-0 right-0 bottom-0 w-72 glass border-l border-brand-border flex flex-col pt-20 pb-8 px-6">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-all",
                      item.highlight
                        ? "bg-aws-orange text-brand-bg hover:bg-aws-orange-light mt-2"
                        : "text-text-secondary hover:text-text-primary hover:bg-brand-elevated"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6 border-t border-brand-border">
              <p className="text-xs text-text-muted text-center">
                Universiti Sains Malaysia
                <br />
                <span className="text-aws-orange">Building the cloud generation</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}