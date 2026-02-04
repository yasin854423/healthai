"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [text, setText] = useState("");
  const fullText = t('hero.subtitle');

  useEffect(() => {
    setText("");
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-center px-4">
      {/* Background Mist Effect handled by CSS in globals or here */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[var(--background)] pointer-events-none" />

      <div className="z-10 max-w-4xl space-y-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] animate-mist-reveal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-gray-400 min-h-[3rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.p
          className="text-gray-500 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {t('hero.description')}
        </motion.p>

        {/* Abstract AI-Health DNA Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="w-full max-w-5xl mx-auto h-40 relative flex items-center justify-center overflow-hidden"
        >
          {/* Deep Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-900/20 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-transparent to-[var(--background)] z-10" />

          <svg viewBox="0 0 800 120" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Cyber-DNA Strand 1 (Cyan) */}
            <motion.path
              d="M0 60 Q 50 10, 100 60 T 200 60 T 300 60 T 400 60 T 500 60 T 600 60 T 700 60 T 800 60"
              fill="none"
              stroke="url(#g1)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            {/* Moving Particles on Strand 1 */}
            {[...Array(8)].map((_, i) => (
              <motion.circle
                key={`c1-${i}`}
                r="3"
                fill="#22d3ee"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 1, // Staggered
                  repeatDelay: 0
                }}
                style={{ offsetPath: "path('M0 60 Q 50 10, 100 60 T 200 60 T 300 60 T 400 60 T 500 60 T 600 60 T 700 60 T 800 60')" }}
              />
            ))}

            {/* Cyber-DNA Strand 2 (Purple) - Inverse Phase */}
            <motion.path
              d="M0 60 Q 50 110, 100 60 T 200 60 T 300 60 T 400 60 T 500 60 T 600 60 T 700 60 T 800 60"
              fill="none"
              stroke="url(#g2)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            />
            {/* Moving Particles on Strand 2 */}
            {[...Array(8)].map((_, i) => (
              <motion.circle
                key={`c2-${i}`}
                r="3"
                fill="#a855f7"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 1, // Staggered
                  repeatDelay: 0
                }}
                style={{ offsetPath: "path('M0 60 Q 50 110, 100 60 T 200 60 T 300 60 T 400 60 T 500 60 T 600 60 T 700 60 T 800 60')" }}
              />
            ))}

            {/* Connection Lines (Base Pairs) */}
            {[...Array(15)].map((_, i) => (
              <motion.line
                key={`l-${i}`}
                x1={50 + i * 50} y1="10"
                x2={50 + i * 50} y2="110"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
                strokeDasharray="2 4"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: [0.2, 0.5, 0.2], scaleY: 1 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
