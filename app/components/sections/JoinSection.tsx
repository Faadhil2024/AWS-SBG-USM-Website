"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Link, Users } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/config";
import PixelTransition from "@/components/ui/PixelTransition";
import SocialPixelTransition from "@/components/ui/SocialPixelTransition";

const socials = [
  {
    label: "WhatsApp Community",
    description: "Join our main community group",
    href: SOCIAL_LINKS.whatsapp,
    icon: MessageCircle,
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20 hover:border-green-500/40",
    transitionColors: {
      primary: ["#22C55E", "#16A34A", "#15803D"],
      black: ["#000000", "#111111", "#0A0A0A"],
    },
  },
  {
    label: "Instagram",
    description: "Follow for updates and highlights",
    href: SOCIAL_LINKS.instagram,
    icon: Link,
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/20 hover:border-pink-500/40",
    transitionColors: {
      primary: ["#EC4899", "#DB2777", "#BE185D"],
      black: ["#000000", "#111111", "#0A0A0A"],
    },
  },
  {
    label: "Facebook",
    description: "Like our page for announcements",
    href: SOCIAL_LINKS.facebook,
    icon: Link,
    color: "text-accent-blue",
    bg: "bg-accent-blue/10 border-accent-blue/20 hover:border-accent-blue/40",
    transitionColors: {
      primary: ["#3B82F6", "#2563EB", "#1D4ED8"],
      black: ["#000000", "#111111", "#0A0A0A"],
    },
  },
  {
    label: "Meetup",
    description: "RSVP to our upcoming events",
    href: SOCIAL_LINKS.meetup,
    icon: Users,
    color: "text-aws-orange",
    bg: "bg-aws-orange/10 border-aws-orange/20 hover:border-aws-orange/40",
    transitionColors: {
      primary: ["#FACC15", "#EAB308", "#CA8A04"],
      black: ["#000000", "#111111", "#0A0A0A"],
    },
  },
];

export default function JoinSection() {
  return (
    <section id="join" className="py-24 relative bg-brand-surface/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto section-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-aws-orange uppercase tracking-widest mb-4 block">
            Join Us
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to build on{" "}
            <span className="gradient-text">the cloud?</span>
          </h2>

          <p className="text-text-secondary max-w-xl mx-auto text-base leading-relaxed mb-10">
            Joining is completely free. Connect with us on any platform
            and become part of the fastest growing cloud community at USM.
          </p>

          {/* Primary CTA */}
          <PixelTransition
            href={SOCIAL_LINKS.whatsapp}
            className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2"
          >
            Join WhatsApp Community
            <ArrowRight size={18} />
          </PixelTransition>
        </motion.div>

        {/* Social cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socials.map((social, index) => (
            <motion.div
              key={social.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <SocialPixelTransition
                href={social.href}
                colors={social.transitionColors}
                className={`
                  flex items-center gap-4 p-5 rounded-xl border
                  transition-all duration-300 group h-full
                  ${social.bg}
                `}
              >
                <div className={`p-3 rounded-lg bg-brand-surface ${social.color}`}>
                  <social.icon size={22} />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-text-primary">
                    {social.label}
                  </p>

                  <p className="text-xs text-text-muted">
                    {social.description}
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  className="text-text-muted group-hover:text-text-primary group-hover:translate-x-1 transition-all"
                />
              </SocialPixelTransition>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
