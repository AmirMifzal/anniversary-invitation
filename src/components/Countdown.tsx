"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function useTimeTogether(start: Date) {
  const [time, setTime] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function tick() {
      const now = new Date();
      const diff = now.getTime() - start.getTime();
      if (diff <= 0) return;
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      setTime({
        years: Math.floor(days / 365),
        days: days % 365,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
      });
    }
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [start]);

  return time;
}

export default function Countdown() {
  const start = new Date("2025-06-26T00:00:00");
  const time = useTimeTogether(start);

  const units = [
    { label: "Years", value: time.years },
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Mins", value: time.minutes },
    { label: "Secs", value: time.seconds },
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
          Together For
        </h2>
        <p className="font-script text-gold text-xl mb-12">
          Since 26th June 2025
        </p>

        <div className="grid grid-cols-5 gap-2 md:gap-4">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 md:p-6 shadow-lg border border-rose-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="font-display text-2xl md:text-5xl lg:text-6xl text-rose mb-1 tabular-nums">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="font-sans text-xs md:text-sm uppercase tracking-widest text-charcoal/50">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
