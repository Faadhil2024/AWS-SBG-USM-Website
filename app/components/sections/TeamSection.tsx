"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { teamMembers } from "@/data/team";
import type { TeamMember } from "@/types";

function HolographicCard({
  member,
  index,
  isLead,
}: {
  member: TeamMember;
  index: number;
  isLead?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 12;
    const rotateY = (centerX - x) / 12;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
    card.style.setProperty("--bg-x", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--bg-y", `${(y / rect.height) * 100}%`);

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    const card = cardRef.current;

    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    card.style.setProperty("--x", "50%");
    card.style.setProperty("--y", "50%");
    card.style.setProperty("--bg-x", "50%");
    card.style.setProperty("--bg-y", "50%");
  };

  const initials = member.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const cardBackground = isLead
    ? `linear-gradient(135deg, rgba(255,153,0,0.16) 0%, rgba(255,184,77,0.08) 38%, rgba(15,22,41,0.92) 100%),
       radial-gradient(circle at 0% 0%, rgba(255,215,0,0.26) 0%, rgba(255,153,0,0.13) 34%, transparent 62%),
       radial-gradient(circle at 100% 100%, rgba(255,153,0,0.20) 0%, rgba(255,184,77,0.10) 32%, transparent 60%),
       linear-gradient(135deg, #171821 0%, #0F1629 100%)`
    : `linear-gradient(135deg, rgba(139,92,246,0.18) 0%, rgba(79,142,247,0.07) 42%, rgba(10,14,26,0.94) 100%),
       radial-gradient(circle at 0% 0%, rgba(139,92,246,0.30) 0%, rgba(109,62,216,0.14) 34%, transparent 62%),
       radial-gradient(circle at 100% 100%, rgba(79,142,247,0.18) 0%, rgba(139,92,246,0.10) 32%, transparent 60%),
       linear-gradient(135deg, #11132D 0%, #0A0E1A 100%)`;

  const hoverGlow = isLead
    ? `radial-gradient(circle at var(--bg-x, 50%) var(--bg-y, 50%), 
        rgba(255,215,0,0.14) 0%, 
        rgba(255,153,0,0.08) 32%, 
        transparent 70%)`
    : `radial-gradient(circle at var(--bg-x, 50%) var(--bg-y, 50%), 
        rgba(139,92,246,0.14) 0%, 
        rgba(79,142,247,0.07) 34%, 
        transparent 70%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transition: "transform 0.15s ease",
          transformStyle: "preserve-3d",
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",
          background: cardBackground,
          border: isLead
            ? "1px solid rgba(255,153,0,0.42)"
            : "1px solid rgba(79,142,247,0.28)",
          boxShadow: isLead
            ? "inset 0 0 48px rgba(255,153,0,0.08), 0 0 26px rgba(255,153,0,0.10)"
            : "inset 0 0 52px rgba(139,92,246,0.10), 0 0 28px rgba(79,142,247,0.08)",
          cursor: "pointer",
        }}
      >
        {/* Holographic rainbow sheen */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: hoverGlow,
            zIndex: 1,
            pointerEvents: "none",
            transition: "background 0.1s ease",
          }}
        />

        {/* Shine streak */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: isLead
              ? `linear-gradient(
                  105deg,
                  transparent 12%,
                  rgba(255,215,0,0.05) 34%,
                  rgba(255,215,0,0.10) 50%,
                  rgba(255,153,0,0.05) 66%,
                  transparent 88%
                )`
              : `linear-gradient(
                  105deg,
                  transparent 12%,
                  rgba(139,92,246,0.05) 34%,
                  rgba(139,92,246,0.10) 50%,
                  rgba(79,142,247,0.05) 66%,
                  transparent 88%
                )`,
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
                

        {/* Card content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "24px",
          }}
        >
          {/* Lead badge */}
          {isLead && (
            <div
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                padding: "2px 10px",
                borderRadius: "999px",
                background: "rgba(255,153,0,0.1)",
                border: "1px solid rgba(255,153,0,0.3)",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  color: "#FF9900",
                  fontWeight: 600,
                }}
              >
                Lead
              </span>
            </div>
          )}

          {/* Profile photo */}
          <div style={{ marginBottom: "16px" }}>
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "12px",
                  objectFit: "cover",
                  border: isLead
                    ? "2px solid rgba(255,153,0,0.4)"
                    : "2px solid rgba(30,45,79,0.8)",
                }}
              />
            ) : (
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: 700,
                  background: isLead
                    ? "linear-gradient(135deg, #FF9900, #FFB84D)"
                    : "rgba(30,45,79,0.8)",
                  color: isLead ? "#0A0E1A" : "#A8B4CC",
                  border: isLead
                    ? "none"
                    : "1px solid rgba(30,45,79,0.8)",
                }}
              >
                {initials}
              </div>
            )}
          </div>

          {/* Name */}
          <h3
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "#F0F4FF",
              marginBottom: "4px",
            }}
          >
            {member.name}
          </h3>

          {/* Role */}
          <p
            style={{
              fontSize: "12px",
              fontWeight: 500,
              color: isLead ? "#FF9900" : "#4F8EF7",
              marginBottom: "4px",
            }}
          >
            {member.role}
          </p>

          {/* School */}
          {member.school && (
            <p
              style={{
                fontSize: "11px",
                color: "#5A6A84",
                marginBottom: "16px",
              }}
            >
              {member.school}
            </p>
          )}

          {/* Social links */}
          <div style={{ display: "flex", gap: "8px" }}>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "6px",
                  borderRadius: "8px",
                  color: "#5A6A84",
                  background: "rgba(30,45,79,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FF9900";
                  e.currentTarget.style.background =
                    "rgba(255,153,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#5A6A84";
                  e.currentTarget.style.background =
                    "rgba(30,45,79,0.5)";
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <FaLinkedin size={14} />
              </a>
            )}

            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "6px",
                  borderRadius: "8px",
                  color: "#5A6A84",
                  background: "rgba(30,45,79,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FF9900";
                  e.currentTarget.style.background =
                    "rgba(255,153,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#5A6A84";
                  e.currentTarget.style.background =
                    "rgba(30,45,79,0.5)";
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  const captains = teamMembers.filter((m) => m.isLead);

  const creative = teamMembers.filter(
    (m) =>
      !m.isLead &&
      (m.role.toLowerCase().includes("creative") ||
        m.role.toLowerCase().includes("graphic") ||
        m.role.toLowerCase().includes("content"))
  );

  const eventsTeam = teamMembers.filter(
    (m) => !m.isLead && m.role.toLowerCase().includes("event")
  );

  return (
    <section id="team" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-aws-orange uppercase tracking-widest mb-4 block">
            The Team
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            The people behind{" "}
            <span className="gradient-text">AWS SBG USM.</span>
          </h2>

          <p className="text-text-secondary max-w-xl mx-auto text-base leading-relaxed">
            A passionate team of students dedicated to growing the cloud
            community at Universiti Sains Malaysia.
          </p>
        </motion.div>

        {/* Captains */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-brand-border" />

            <span className="text-xs font-semibold text-aws-orange uppercase tracking-widest px-3">
              Captains
            </span>

            <div className="h-px flex-1 bg-brand-border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {captains.map((member, index) => (
              <HolographicCard
                key={member.id}
                member={member}
                index={index}
                isLead
              />
            ))}
          </div>
        </div>

        {/* Creative Media */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-brand-border" />

            <span className="text-xs font-semibold text-accent-blue uppercase tracking-widest px-3">
              Creative Media
            </span>

            <div className="h-px flex-1 bg-brand-border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {creative.map((member, index) => (
              <HolographicCard
                key={member.id}
                member={member}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Event Management */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-brand-border" />

            <span className="text-xs font-semibold text-accent-blue uppercase tracking-widest px-3">
              Event Management
            </span>

            <div className="h-px flex-1 bg-brand-border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {eventsTeam.map((member, index) => (
              <HolographicCard
                key={member.id}
                member={member}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
