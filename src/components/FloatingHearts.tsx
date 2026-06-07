"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Heart {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 24 + 12,
      delay: Math.random() * 10,
      duration: Math.random() * 12 + 10,
      rotation: Math.random() * 360,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-rose/20"
            style={{ left: `${heart.x}%`, fontSize: heart.size }}
            initial={{ y: "110vh", rotate: heart.rotation, opacity: 0 }}
            animate={{
              y: "-10vh",
              rotate: heart.rotation + 360,
              opacity: [0, 0.6, 0.4, 0.8, 0],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ♥
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
