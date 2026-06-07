"use client";

import { motion } from "framer-motion";

const LAT = 3.1579;
const LNG = 101.712;
const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${LAT},${LNG}`;

export default function Location() {
  return (
    <section className="py-24 px-6 z-10 relative bg-warm/50">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-4">
          The Destination
        </h2>
        <p className="font-script text-gold text-xl mb-4">
          Where the magic happens
        </p>

        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-lg border border-rose-light text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="mb-6">
            <h3 className="font-display text-2xl md:text-3xl text-charcoal">
              Petrosains, The Discovery Centre
            </h3>
            <p className="font-sans text-charcoal/60 mt-2 leading-relaxed">
              Level 4, Suria KLCC
              <br />
              Kuala Lumpur City Centre
              <br />
              50088 Kuala Lumpur, Malaysia
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md mb-6">
            <iframe
              title="Petrosains Location"
              src={`https://www.google.com/maps?q=${LAT},${LNG}&z=15&output=embed`}
              width="100%"
              height="300"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-rose text-white rounded-full font-display text-lg shadow-lg hover:bg-rose-dark transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Navigate with Google Maps
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
