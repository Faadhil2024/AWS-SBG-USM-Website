"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroAnimationProps {
  onComplete: () => void;
}

type Phase =
  | "expand"
  | "typing"
  | "deleting"
  | "rewriting"
  | "done";

export default function IntroAnimation({
  onComplete,
}: IntroAnimationProps) {
  const [phase, setPhase] = useState<Phase>("expand");

  const [displayText, setDisplayText] = useState("AWS");

  const [bracketColor, setBracketColor] =
    useState("#8B5CF6");

  const [textColor, setTextColor] =
    useState("#8B5CF6");

  useEffect(() => {
    const timeline = async () => {
      // Phase 1 — show intro briefly
      await delay(800);

      // Phase 2 — expand AWS → AWS CLOUD CLUB
      setPhase("typing");

      await typeText(
        "AWS",
        "AWS CLOUD CLUB",
        setDisplayText,
        80
      );

      await delay(800);

      // Phase 3 — delete back to AWS
      setPhase("deleting");

      await deleteText(
        "AWS CLOUD CLUB",
        "AWS",
        setDisplayText,
        60
      );

      await delay(300);

      // Phase 4 — switch colors + type SBG
      setBracketColor("#FF9900");
      setTextColor("#FF9900");

      setPhase("rewriting");

      await typeText(
        "AWS",
        "AWS SBG",
        setDisplayText,
        100
      );

      await delay(1200);

      // Phase 5 — finish animation
      setPhase("done");

      await delay(800);

      onComplete();
    };

    timeline();
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ background: "#000" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Radial glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)",
              transition: "background 1s ease",
            }}
          />

          {/* Grain overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Main text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="relative z-10 flex items-center gap-3 sm:gap-5 select-none"
          >
            {/* THE */}
            <span
              className="text-2xl sm:text-4xl md:text-5xl font-black uppercase"
              style={{
                color: "#ffffff",
                letterSpacing: "0.25em",
              }}
            >
              THE
            </span>

            {/* Bracket section */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Left bracket */}
              <motion.span
                style={{
                  color: bracketColor,
                  fontSize: "clamp(2rem, 6vw, 4rem)",
                  fontWeight: 900,
                  fontFamily: "monospace",
                  lineHeight: 1,
                  transition: "color 0.6s ease",
                }}
              >
                {"{"}
              </motion.span>

              {/* Dynamic text */}
              <span
                style={{
                  color: textColor,
                  fontSize: "clamp(1.2rem, 4vw, 2.8rem)",
                  fontWeight: 900,
                  letterSpacing: "0.15em",
                  minWidth: "8ch",
                  textAlign: "center",
                  transition: "color 0.6s ease",
                  fontFamily: "monospace",
                }}
              >
                {displayText}

                {/* Cursor */}
                <span
                  style={{
                    display: "inline-block",
                    width: "3px",
                    height: "1em",
                    background: textColor,
                    marginLeft: "4px",
                    verticalAlign: "middle",
                    animation:
                      "intro-blink 0.7s step-end infinite",
                  }}
                />
              </span>

              {/* Right bracket */}
              <motion.span
                style={{
                  color: bracketColor,
                  fontSize: "clamp(2rem, 6vw, 4rem)",
                  fontWeight: 900,
                  fontFamily: "monospace",
                  lineHeight: 1,
                  transition: "color 0.6s ease",
                }}
              >
                {"}"}
              </motion.span>
            </div>

            {/* EFFECT */}
            <span
              className="text-2xl sm:text-4xl md:text-5xl font-black uppercase"
              style={{
                color: "#ffffff",
                letterSpacing: "0.25em",
              }}
            >
              EFFECT
            </span>
          </motion.div>

          {/* Cursor animation */}
          <style jsx>{`
            @keyframes intro-blink {
              0%,
              100% {
                opacity: 1;
              }

              50% {
                opacity: 0;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Helpers

function delay(ms: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

async function typeText(
  from: string,
  to: string,
  setter: (v: string) => void,
  speed: number
) {
  const suffix = to.slice(from.length);

  let current = from;

  for (const char of suffix) {
    current += char;

    setter(current);

    await delay(speed);
  }
}

async function deleteText(
  from: string,
  to: string,
  setter: (v: string) => void,
  speed: number
) {
  let current = from;

  while (current.length > to.length) {
    current = current.slice(0, -1);

    setter(current);

    await delay(speed);
  }
}