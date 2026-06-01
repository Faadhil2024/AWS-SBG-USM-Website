"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

// ─── Add your real photos here ───────────────────────────────
// Replace the src values with your actual image paths.
// Put your photos in the /public/images/gallery/ folder.
// Example src: "/images/gallery/event-1.jpg"
const photos = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    alt: "AWS Cloud Day 2024",
    event: "AWS Cloud Day",
    year: 2024,
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    alt: "Tech Talk Session",
    event: "Tech Talk",
    year: 2025,
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    alt: "Team Workshop",
    event: "Workshop",
    year: 2025,
  },
  {
    id: "4",
    src: "images/Community photo.jpg",
    alt: "AWS Community Photo",
    event: "AWS Workshop",
    year: 2025,
  },
  
   {
    id: "5",
    src: "/images/AWS Essentials.jpg",
    alt: "Hackathon Event",
    event: "AWS Essentials Workshop",
    year: 2025,
  },
  {
    id: "6",
    src: "/images/Faadhilawsoffice.jpeg",
    alt: "AWS Office Visit",
    event: "AWS Kiro Event",
    year: 2026,
  },
  {
    id: "7",
    src: "images/Swags.jpeg",
    alt: "Cloud Fundamentals Lab",
    event: "Lab Session",
    year: 2025,

  },
  {
    id: "8",
    src: "/images/cs besamaru.jpg",
    alt: "GenAI Tech Talk",
    event: "Tech Talk",
    year: 2025,
  },
  
];

type Photo = (typeof photos)[0];

export default function GallerySection() {
  const [selected, setSelected] = useState<Photo | null>(null);

  return (
    <section id="gallery" className="py-24 relative bg-brand-surface/30">

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
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Memories from the{" "}
            <span className="gradient-text">community.</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base leading-relaxed">
            Snapshots from our workshops, tech talks, and community events
            at Universiti Sains Malaysia.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-xl border border-brand-border hover:border-brand-border-bright transition-all duration-300"
              onClick={() => setSelected(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-brand-bg/0 group-hover:bg-brand-bg/60 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={24}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-brand-bg to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs font-medium text-text-primary">
                  {photo.event}
                </p>
                <p className="text-xs text-text-muted">{photo.year}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-brand-bg/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-lg glass text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={selected.alt}
              className="w-full rounded-2xl object-cover max-h-[80vh]"
            />
            <div className="mt-4 text-center">
              <p className="text-sm font-medium text-text-primary">
                {selected.alt}
              </p>
              <p className="text-xs text-text-muted mt-1">
                {selected.event} · {selected.year}
              </p>
            </div>
          </motion.div>
        </div>
      )}

    </section>
  );
}