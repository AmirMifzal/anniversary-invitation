"use client";

import { motion } from "framer-motion";

const milestones = [
  { date: "26 June 2026", title: "The Beginning", description: "Where it all started. The day we said yes to each other." },
  { date: "Our Journey", title: "Growing Together", description: "Every laugh, every tear, every moment — we grew stronger." },
  { date: "Today & Forever", title: "Endless Love", description: "Looking forward to a lifetime of making memories together." },
];

export default function Timeline() {
  return (
    <section className="py-24 px-6 z-10 relative bg-warm/50">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-3xl md:text-5xl text-charcoal text-center mb-16">
          Our Story
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-rose/20 hidden md:block" />

          {milestones.map((item, i) => (
            <motion.div
              key={i}
              className={`relative flex items-start gap-8 mb-16 md:mb-24 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col md:items-center`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose border-4 border-cream z-10" />

              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <span className="font-script text-gold text-xl">{item.date}</span>
                <h3 className="font-display text-2xl md:text-3xl text-charcoal mt-1">
                  {item.title}
                </h3>
                <p className="font-sans text-charcoal/60 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
