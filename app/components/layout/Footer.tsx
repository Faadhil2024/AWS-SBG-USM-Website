"use client";

import Link from "next/link";
import {
  Mail,
  ExternalLink,
  MessageCircle,
  Users,
} from "lucide-react";

import {
  SITE_CONFIG,
  SOCIAL_LINKS,
  NAV_ITEMS,
} from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border bg-brand-surface">
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-aws-gradient flex items-center justify-center">
                <span className="text-brand-bg font-bold text-xs">
                  SBG
                </span>
              </div>

              <span className="font-semibold text-text-primary">
                AWS SBG USM
              </span>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              The official AWS student community at{" "}
              {SITE_CONFIG.university},
              Penang. Building the next generation of cloud practitioners.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-lg text-text-muted hover:text-aws-orange hover:bg-brand-elevated transition-all"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href={SOCIAL_LINKS.meetup}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Meetup"
                className="p-2 rounded-lg text-text-muted hover:text-aws-orange hover:bg-brand-elevated transition-all"
              >
                <Users size={18} />
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                aria-label="Email"
                className="p-2 rounded-lg text-text-muted hover:text-aws-orange hover:bg-brand-elevated transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-aws-orange transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Community */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Community
            </h3>

            <ul className="space-y-2">
              <li>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-aws-orange transition-colors flex items-center gap-1.5"
                >
                  WhatsApp Community
                  <ExternalLink size={12} />
                </a>
              </li>

              <li>
                <a
                  href={SOCIAL_LINKS.meetup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-aws-orange transition-colors flex items-center gap-1.5"
                >
                  Meetup Group
                  <ExternalLink size={12} />
                </a>
              </li>

              <li>
                <a
                  href="https://aws.amazon.com/education/awseducate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-aws-orange transition-colors flex items-center gap-1.5"
                >
                  AWS Educate
                  <ExternalLink size={12} />
                </a>
              </li>

              <li>
                <a
                  href="https://usm.my"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-aws-orange transition-colors flex items-center gap-1.5"
                >
                  Universiti Sains Malaysia
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>

          <p className="text-xs text-text-muted">
            Made By Faadhil Mohiadeen 
          </p>
        </div>

      </div>
    </footer>
  );
}