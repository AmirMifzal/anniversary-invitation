"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Photo {
  src: string;
  alt: string;
  caption: string;
}

const photos: Photo[] = [
  {
    src: "/placeholder.svg",
    alt: "Our first memory",
    caption: "Hold on to the memories",
  },
  {
    src: "/placeholder.svg",
    alt: "Beautiful moments",
    caption: "Every moment with you is beautiful",
  },
  {
    src: "/placeholder.svg",
    alt: "Together forever",
    caption: "Together is my favorite place to be",
  },
  {
    src: "/placeholder.svg",
    alt: "Love grows here",
    caption: "Love grows where trust begins",
  },
  {
    src: "/placeholder.svg",
    alt: "Happiness",
    caption: "You are my happiness",
  },
  {
    src: "/placeholder.svg",
    alt: "Endless love",
    caption: "Endless love, endless us",
  },
];

function PhotoCard({ photo, index }: { photo: Photo; index: number }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className="group relative aspect-square overflow-hidden rounded-2xl bg-white shadow-md border border-rose-light"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="w-full h-full bg-gradient-to-br from-rose-light to-warm flex items-center justify-center">
        <span className="font-script text-gold text-lg md:text-2xl text-center px-4">
          {photo.caption}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <p className="text-white text-sm font-sans">{photo.caption}</p>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section className="py-24 px-6 z-10 relative">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-3xl md:text-5xl text-charcoal text-center mb-4">
          Our Gallery
        </h2>
        <p className="font-script text-gold text-xl text-center mb-12">
          A glimpse of us
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, i) => (
            <PhotoCard key={i} photo={photo} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
