"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PixelTransitionProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const GRID_COLS = 12;
const GRID_ROWS = 8;
const TOTAL = GRID_COLS * GRID_ROWS;

export default function PixelTransition({
  href,
  children,
  className,
}: PixelTransitionProps) {
  const [animating, setAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      window.open(href, "_blank");
      setTimeout(() => setAnimating(false), 600);
    }, 2200);
  };

  return (
    <>
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>

      <AnimatePresence>
        {animating && (
          <div className="fixed inset-0 z-[200] pointer-events-none">
            {/* Left side — purple pixels */}
            <div className="absolute left-0 top-0 bottom-0 w-1/2 grid"
              style={{
                gridTemplateColumns: `repeat(${GRID_COLS / 2}, 1fr)`,
                gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
              }}
            >
              {Array.from({ length: (GRID_COLS / 2) * GRID_ROWS }).map((_, i) => (
                <motion.div
                  key={`left-${i}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    delay: (i / ((GRID_COLS / 2) * GRID_ROWS)) * 1.2,
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: i % 3 === 0
                      ? "#4B0082"
                      : i % 3 === 1
                      ? "#6B21A8"
                      : "#3B0764",
                  }}
                />
              ))}
            </div>

            {/* Right side — black pixels */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 grid"
              style={{
                gridTemplateColumns: `repeat(${GRID_COLS / 2}, 1fr)`,
                gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
              }}
            >
              {Array.from({ length: (GRID_COLS / 2) * GRID_ROWS }).map((_, i) => (
                <motion.div
                  key={`right-${i}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    delay: (i / ((GRID_COLS / 2) * GRID_ROWS)) * 1.2,
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: i % 3 === 0
                      ? "#000000"
                      : i % 3 === 1
                      ? "#111111"
                      : "#0A0A0A",
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}