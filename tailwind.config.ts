import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aws: {
          orange: "#FF9900",
          "orange-dark": "#CC7700",
          "orange-light": "#FFB84D",
        },
        brand: {
          bg:       "#0A0E1A",
          surface:  "#0F1629",
          elevated: "#162035",
          border:   "#1E2D4F",
          "border-bright": "#2A3F6F",
        },
        accent: {
          blue:   "#4F8EF7",
          cyan:   "#00D2FF",
          purple: "#8B5CF6",
        },
        text: {
          primary:   "#F0F4FF",
          secondary: "#A8B4CC",
          muted:     "#5A6A84",
        },
      },
      backgroundImage: {
        "aws-gradient":
          "linear-gradient(135deg, #FF9900 0%, #FFB84D 100%)",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(79,142,247,0.15) 0%, transparent 60%)",
      },
      animation: {
        "float":      "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "fade-up":    "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "glow-orange":
          "0 0 40px rgba(255,153,0,0.15), 0 0 80px rgba(255,153,0,0.05)",
        "glow-blue":
          "0 0 40px rgba(79,142,247,0.2), 0 0 80px rgba(79,142,247,0.08)",
        "card":
          "0 1px 1px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)",
        "card-hover":
          "0 2px 2px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;