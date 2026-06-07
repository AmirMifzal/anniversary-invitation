"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fullLetter = `My dearest Najah,

Every day with you feels like a beautiful dream I never want to wake up from. From the moment you came into my life, everything changed — the world seems brighter, my heart feels fuller, and every little moment matters more.

You are my sunshine on cloudy days, my calm in every storm, and the reason behind every smile on my face. Loving you has been the greatest adventure of my life, and I cherish every single moment we've shared together.

As we celebrate this anniversary, I want you to know that my love for you grows deeper with each passing day. You are not just my girlfriend — you are my best friend, my confidant, my everything.

Here's to many more years of laughter, love, and unforgettable memories. I love you more than words can ever express.

Forever yours,
Amir 💕`;

export default function LoveLetter() {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isComplete) {
      let index = 0;
      const interval = setInterval(() => {
        index++;
        setDisplayedText(fullLetter.slice(0, index));
        if (index >= fullLetter.length) {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, 25);
      return () => clearInterval(interval);
    }
  }, [isComplete]);

  return (
    <section className="py-24 px-6 z-10 relative">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-3xl md:text-5xl text-charcoal text-center mb-4">
          A Letter for You
        </h2>
        <p className="font-script text-gold text-xl text-center mb-12">
          To my love
        </p>

        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-rose-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="font-sans text-charcoal/80 leading-relaxed whitespace-pre-line text-sm md:text-base">
            {displayedText}
            {!isComplete && (
              <span className="inline-block w-0.5 h-4 bg-rose ml-0.5 animate-pulse" />
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
