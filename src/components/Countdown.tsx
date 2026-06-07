"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function tick() {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return timeLeft;
}

export default function Countdown() {
  const target = new Date("2026-06-26T00:00:00");
  const timeLeft = useCountdown(target);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 px-6 z-10 relative">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-4">
          Until Our Anniversary
        </h2>
        <p className="font-script text-gold text-xl mb-12">
          26th June 2026
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {units.map((unit, i) => (
              <motion.div
                key={unit.label}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-lg border border-rose-light"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="font-display text-4xl md:text-6xl lg:text-7xl text-rose mb-2 tabular-nums">
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="font-sans text-sm md:text-base uppercase tracking-widest text-charcoal/50">
                  {unit.label}
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
}
