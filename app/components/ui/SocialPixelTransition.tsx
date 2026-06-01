"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SocialPixelTransitionProps {
  href: string;
  colors: {
    primary: string[];
    black: string[];
  };
  children: React.ReactNode;
  className?: string;
}

const GRID_COLS = 14;
const GRID_ROWS = 8;
const TOTAL = GRID_COLS * GRID_ROWS;

export default function SocialPixelTransition({
  href,
  colors,
  children,
  className,
}: SocialPixelTransitionProps) {
  const [animating, setAnimating] = useState(false);

  const pixels = useMemo(
    () =>
      Array.from({ length: TOTAL }, (_, index) => {
        const col = index % GRID_COLS;
        const sideDistance = Math.min(col, GRID_COLS - 1 - col);
        const fromLeft = col < GRID_COLS / 2;
        const palette = fromLeft ? colors.primary : colors.black;

        return {
          index,
          delay: (sideDistance / (GRID_COLS / 2)) * 1.15,
          color: palette[index % palette.length],
        };
      }),
    [colors]
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (animating) return;

    setAnimating(true);
    setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer");
      setTimeout(() => setAnimating(false), 500);
    }, 1900);
  };

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>

      <AnimatePresence>
        {animating && (
          <div className="fixed inset-0 z-[200] pointer-events-none grid">
            <div
              className="grid w-full h-full"
              style={{
                gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
                gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
              }}
            >
              {pixels.map((pixel) => (
                <motion.div
                  key={pixel.index}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0 }}
                  transition={{
                    delay: pixel.delay,
                    duration: 0.28,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: pixel.color,
                    transformOrigin:
                      pixel.index % GRID_COLS < GRID_COLS / 2
                        ? "left center"
                        : "right center",
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
