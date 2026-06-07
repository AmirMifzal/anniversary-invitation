"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <motion.p
          className="font-script text-gold text-2xl md:text-4xl mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Happy Anniversary
        </motion.p>

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl text-charcoal leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Najah
          <span className="block text-rose font-script text-6xl md:text-8xl lg:text-9xl">
            &amp;
          </span>
          Mifzal
        </motion.h1>

        <motion.div
          className="w-24 h-px bg-gold mx-auto my-8"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />

        <motion.p
          className="font-sans text-lg md:text-xl text-charcoal/70 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Every love story is beautiful, but ours is my favorite.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 2,
          duration: 0.6,
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
      >
        <span className="text-rose/50 text-2xl">↓</span>
      </motion.div>
    </section>
  );
}
