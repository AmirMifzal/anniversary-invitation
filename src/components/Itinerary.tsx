"use client";

import { motion } from "framer-motion";

const schedule = [
  {
    time: "6:00 PM",
    title: "The Pick-Up",
    desc: "I'll pick you up. Dress code: casual chic & comfortable — we've got a night of fun ahead!",
    icon: "🚗",
  },
  {
    time: "7:00 PM",
    title: "The Main Event",
    desc: "Dinner & discovery awaits at Petrosains — science, wonder, and great food with you.",
    icon: "🍽️",
  },
  {
    time: "9:30 PM",
    title: "A Sweet Surprise",
    desc: "A little something sweet to end the night. You'll love it.",
    icon: "🎂",
  },
];

export default function Itinerary() {
  return (
    <section className="py-24 px-6 z-10 relative">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-3xl md:text-5xl text-charcoal text-center mb-4">
          The Itinerary
        </h2>
        <p className="font-script text-gold text-xl text-center mb-16">
          A night planned just for you
        </p>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-rose/20" />

          {schedule.map((item, i) => (
            <motion.div
              key={i}
              className="relative flex items-start gap-6 mb-12 md:mb-16"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-rose text-white flex items-center justify-center text-2xl shadow-md">
                {item.icon}
              </div>

              <div className="flex-1 pt-3">
                <span className="font-sans text-sm uppercase tracking-widest text-gold font-semibold">
                  {item.time}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-charcoal mt-1">
                  {item.title}
                </h3>
                <p className="font-sans text-charcoal/60 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
