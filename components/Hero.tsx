"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const COMMAND = "whoami";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(COMMAND.slice(0, i));
      if (i === COMMAND.length) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 300);
      }
    }, 90);
    return () => clearInterval(interval);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="top" className="max-w-4xl mx-auto px-6 pt-24 pb-28 md:pt-32 md:pb-36">
      <div className="font-mono text-sm text-mist dark:text-fog mb-6">
        <span className="text-signal">$</span> {typed}
        {!done && <span className="animate-blink">_</span>}
      </div>

      {done && (
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.h1
            variants={fadeUp}
            className="font-display font-medium text-4xl md:text-6xl tracking-tight mb-4"
          >
            Yaşar Can Koç
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-mist dark:text-fog mb-2"
          >
            Full-Stack Web Geliştirici
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base md:text-lg leading-relaxed mb-10"
          >
            Gerçek kullanıcılara hizmet veren web uygulamaları geliştiriyorum
            — backend&apos;den deploy&apos;a kadar.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <a
              href="#projeler"
              className="bg-graphite text-paper dark:bg-paper dark:text-ink rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Projeleri gör
            </a>
            <a
              href="#iletisim"
              className="border border-graphite/20 dark:border-paper/20 rounded-full px-6 py-3 text-sm font-medium hover:border-signal hover:text-signal transition-colors"
            >
              İletişime geç
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
