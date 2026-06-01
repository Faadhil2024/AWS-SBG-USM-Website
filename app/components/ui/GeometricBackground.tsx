"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.25]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.15)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.25),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function GeometricBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>

      {/* Floating shapes — more pills, stronger colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Large pills */}
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.20]"
          className="left-[-10%] md:left-[-5%] top-[5%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-orange-400/[0.20]"
          className="right-[-5%] top-[30%]"
        />
        <ElegantShape
          delay={0.4}
          width={550}
          height={130}
          rotate={8}
          gradient="from-violet-500/[0.18]"
          className="left-[-8%] top-[50%]"
        />
        <ElegantShape
          delay={0.6}
          width={480}
          height={110}
          rotate={-10}
          gradient="from-cyan-500/[0.18]"
          className="right-[-5%] top-[65%]"
        />
        <ElegantShape
          delay={0.7}
          width={520}
          height={120}
          rotate={15}
          gradient="from-indigo-400/[0.15]"
          className="left-[-5%] top-[80%]"
        />

        {/* Medium pills */}
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.20]"
          className="left-[10%] top-[20%]"
        />
        <ElegantShape
          delay={0.6}
          width={250}
          height={70}
          rotate={20}
          gradient="from-orange-400/[0.20]"
          className="right-[20%] top-[10%]"
        />
        <ElegantShape
          delay={0.8}
          width={280}
          height={75}
          rotate={-20}
          gradient="from-cyan-500/[0.18]"
          className="right-[10%] top-[45%]"
        />
        <ElegantShape
          delay={0.5}
          width={260}
          height={70}
          rotate={12}
          gradient="from-indigo-500/[0.18]"
          className="left-[30%] top-[70%]"
        />

        {/* Small pills */}
        <ElegantShape
          delay={0.7}
          width={150}
          height={45}
          rotate={-25}
          gradient="from-cyan-400/[0.22]"
          className="left-[25%] top-[8%]"
        />
        <ElegantShape
          delay={0.9}
          width={180}
          height={50}
          rotate={30}
          gradient="from-orange-300/[0.22]"
          className="right-[30%] top-[55%]"
        />
        <ElegantShape
          delay={1.0}
          width={160}
          height={45}
          rotate={-15}
          gradient="from-violet-400/[0.22]"
          className="left-[60%] top-[85%]"
        />
      </div>

      {/* Content */}
      {children}

    </div>
  );
}