"use client";

import { motion } from "framer-motion";
import { Cloud, Users, Zap, Target } from "lucide-react";

const features = [
  {
    number: "01",
    icon: Cloud,
    title: "Hands-on Workshops",
    description:
      "Real AWS infrastructure. Real deployments. We don't just talk about the cloud — we build on it together.",
    color: "#FF9900",
  },
  {
    number: "02",
    icon: Zap,
    title: "Tech Talks",
    description:
      "Industry speakers, AWS engineers, and community experts sharing real-world cloud experience with students.",
    color: "#4F8EF7",
  },
  {
    number: "03",
    icon: Users,
    title: "Community Network",
    description:
      "Connect with like-minded students across all faculties at USM who share a passion for cloud technology.",
    color: "#8B5CF6",
  },
  {
    number: "04",
    icon: Target,
    title: "AWS Certifications",
    description:
      "We guide members through AWS certification paths — from Cloud Practitioner to Solutions Architect.",
    color: "#00D2FF",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">

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
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            More than a club.{" "}
            <span className="gradient-text">A launchpad.</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            AWS Student Builders Group USM — formerly AWS Cloud Club USM — is
            the official AWS-recognized student community at Universiti Sains
            Malaysia. We exist to make cloud technology accessible, practical,
            and exciting for every student.
          </p>
        </motion.div>

        {/* Numbered glossy cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = `1px solid ${feature.color}35`;
                el.style.boxShadow = `0 8px 32px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 20px ${feature.color}12`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = "1px solid rgba(255,255,255,0.06)";
                el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)";
              }}
              style={{
                position: "relative",
                borderRadius: "16px",
                padding: "28px 24px",
                background: "linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #0d0d0d 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
                overflow: "hidden",
                cursor: "default",
                boxShadow: "0 4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
                transition: "all 0.3s ease",
              }}
            >
              {/* Glossy top shine */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "50%",
                background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)",
                pointerEvents: "none",
                borderRadius: "16px 16px 0 0",
              }} />

              {/* Shimmer sweep */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 3,
                  delay: index * 0.8,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "40%",
                  height: "100%",
                  background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.04) 50%, transparent 80%)",
                  pointerEvents: "none",
                  transform: "skewX(-15deg)",
                }}
              />

              {/* Top color line */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: `linear-gradient(90deg, transparent, ${feature.color}70, transparent)`,
              }} />

              {/* Big faded number */}
              <div style={{
                position: "absolute",
                top: "-10px",
                right: "12px",
                fontSize: "96px",
                fontWeight: 900,
                color: feature.color,
                opacity: 0.05,
                lineHeight: 1,
                userSelect: "none",
                fontFamily: "monospace",
                letterSpacing: "-4px",
              }}>
                {feature.number}
              </div>

              {/* Icon */}
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: feature.color + "12",
                border: `1px solid ${feature.color}25`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
                boxShadow: `0 0 12px ${feature.color}10`,
              }}>
                <feature.icon size={18} style={{ color: feature.color }} />
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#F0F4FF",
                marginBottom: "10px",
              }}>
                {feature.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: "13px",
                color: "#A8B4CC",
                lineHeight: 1.6,
              }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              position: "relative",
              padding: "32px",
              borderRadius: "16px",
              border: "1px solid rgba(30,45,79,0.8)",
              background: "rgba(15,22,41,0.8)",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute",
              top: 0, left: 0,
              width: "3px", height: "100%",
              background: "linear-gradient(180deg, #FF9900, #FFB84D)",
            }} />
            
            <span style={{
              fontSize: "11px", fontWeight: 700,
              color: "#FF9900", letterSpacing: "0.15em",
              textTransform: "uppercase", display: "block",
              marginBottom: "12px",
            }}>
              Our Mission
            </span>
            <h3 style={{
              fontSize: "20px", fontWeight: 700,
              color: "#F0F4FF", marginBottom: "12px",
            }}>
              Democratize cloud education
            </h3>
            <p style={{ fontSize: "14px", color: "#A8B4CC", lineHeight: 1.7 }}>
              To empower every USM student with practical cloud skills,
              AWS certifications, and real-world experience — regardless
              of their faculty or background. Cloud is for everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              position: "relative",
              padding: "32px",
              borderRadius: "16px",
              border: "1px solid rgba(30,45,79,0.8)",
              background: "rgba(15,22,41,0.8)",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute",
              top: 0, left: 0,
              width: "3px", height: "100%",
              background: "linear-gradient(180deg, #4F8EF7, #00D2FF)",
            }} />
            
            <span style={{
              fontSize: "11px", fontWeight: 700,
              color: "#4F8EF7", letterSpacing: "0.15em",
              textTransform: "uppercase", display: "block",
              marginBottom: "12px",
            }}>
              Our Vision
            </span>
            <h3 style={{
              fontSize: "20px", fontWeight: 700,
              color: "#F0F4FF", marginBottom: "12px",
            }}>
              Malaysia's top student cloud community
            </h3>
            <p style={{ fontSize: "14px", color: "#A8B4CC", lineHeight: 1.7 }}>
              To be the leading AWS student community in Malaysia —
              producing cloud-ready graduates who go on to build the
              next generation of technology in the region and beyond.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}