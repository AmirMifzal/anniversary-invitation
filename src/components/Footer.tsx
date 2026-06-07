"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 px-6 z-10 relative">
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-16 h-px bg-gold mx-auto mb-8" />
        <p className="font-script text-3xl md:text-4xl text-rose mb-4">
          I Love You
        </p>
        <p className="font-sans text-charcoal/50 text-sm">
          Made with all my heart, for you. ❤️
        </p>
        <p className="font-sans text-charcoal/40 text-xs mt-2">
          Happy Anniversary, Najah Nasuha
        </p>
      </motion.div>
    </footer>
  );
}
