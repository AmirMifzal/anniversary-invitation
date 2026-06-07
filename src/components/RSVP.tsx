"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function RSVP() {
  const [answered, setAnswered] = useState<boolean | null>(null);
  const [noCount, setNoCount] = useState(0);
  const [noButtonText, setNoButtonText] = useState("No");

  const noTexts = [
    "No", "Are you sure?", "Really?", "Think again!",
    "Last chance!", "Please?", "Pretty please?",
    "Don't break my heart 💔", "Okay you win...",
  ];

  const handleYes = useCallback(() => {
    setAnswered(true);
    const duration = 3000;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#e11d48", "#d4a574", "#fdf8f4"],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#e11d48", "#d4a574", "#fdf8f4"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  const handleNo = useCallback(() => {
    const next = Math.min(noCount + 1, noTexts.length - 1);
    setNoCount(next);
    setNoButtonText(noTexts[next]);
  }, [noCount]);

  return (
    <section className="py-24 px-6 z-10 relative bg-warm/50">
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-4">
          Will You Be My Valentine?
        </h2>
        <p className="font-script text-gold text-xl mb-12">
          Forever and always
        </p>

        <AnimatePresence mode="wait">
          {answered === null ? (
            <motion.div
              key="buttons"
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <motion.button
                className="px-12 py-4 bg-rose text-white rounded-full font-display text-xl shadow-lg hover:bg-rose-dark transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYes}
              >
                Yes 💕
              </motion.button>
              <motion.button
                className={`px-8 py-3 border-2 border-rose/30 text-charcoal/60 rounded-full font-sans transition-all cursor-pointer ${
                  noCount > 3 ? "opacity-60" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNo}
                style={{
                  transform: `scale(${Math.max(1 - noCount * 0.05, 0.6)})`,
                }}
              >
                {noButtonText}
              </motion.button>
            </motion.div>
          ) : answered ? (
            <motion.div
              key="yes"
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl">🎉💕🎉</div>
              <p className="font-display text-3xl text-rose">
                Yay! I love you, Sayang! ❤️
              </p>
              <p className="font-sans text-charcoal/60">
                Can&apos;t wait to celebrate with you!
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
