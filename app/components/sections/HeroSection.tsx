"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { COMMUNITY_STATS, SOCIAL_LINKS } from "@/lib/config";
import PixelTransition from "@/components/ui/PixelTransition";
import { useEffect, useRef } from "react";

function SparklesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      opacitySpeed: number;
    }[] = [];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.3,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random(),
        opacitySpeed: Math.random() * 0.015 + 0.003,
      });
    }

    let animFrame: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        p.opacity += p.opacitySpeed;
        if (p.opacity > 1 || p.opacity < 0) p.opacitySpeed *= -1;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.8})`;
        ctx.fill();

        if (Math.random() > 0.997) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 153, 0, ${p.opacity * 0.9})`;
          ctx.fill();
        }
      });

      animFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}

function GlowingLogo() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute w-[420px] h-[420px] md:w-[580px] md:h-[580px]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-aws-orange/40 blur-3xl" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-accent-blue/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-aws-orange/30 blur-3xl" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-accent-blue/30 blur-3xl" />
      </motion.div>

      <motion.img
        src="/images/AWS-SBG-Logo.png"
        alt="AWS SBG USM Logo"
        animate={{ opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="w-[340px] h-[340px] md:w-[500px] md:h-[500px] object-contain select-none"
        style={{ filter: "brightness(1.5) saturate(1.2)" }}
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">

      <SparklesBackground />
      <GlowingLogo />

      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,153,0,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto section-padding text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-aws-orange animate-pulse-slow" />
          Official AWS Student Community · Universiti Sains Malaysia
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          Build on the <span className="gradient-text">Cloud.</span>
          <br />
          Grow with the <span className="gradient-text-blue">Community.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          AWS Student Builder Group USM is the official AWS community at
          Universiti Sains Malaysia. We run workshops, tech talks, and cloud labs.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <PixelTransition
            href={SOCIAL_LINKS.whatsapp}
            className="btn-primary flex items-center gap-2"
          >
            Join the Community <ArrowRight size={16} />
          </PixelTransition>

          <a
            href="#events"
            className="btn-secondary flex items-center gap-2"
            style={{ borderColor: "rgba(255,255,255,0.15)", color: "white" }}
          >
            View Upcoming Events
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {COMMUNITY_STATS.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span className="text-2xl font-bold text-aws-orange">
                {stat.value}
              </span>
              <span className="text-xs mt-1 text-white/40">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
