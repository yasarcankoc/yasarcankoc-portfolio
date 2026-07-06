"use client";

import { motion } from "framer-motion";

const stack = ["Python", "Django", "Next.js", "React", "PostgreSQL", "AWS", "Docker", "Git"];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Doku ve ışık katmanları — içerik değil, aria'dan gizli */}
      <div aria-hidden className="hero-grid absolute inset-0" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[680px] h-[440px] rounded-full bg-signal/15 dark:bg-signal/20 blur-[120px]"
      />

      <div className="relative max-w-4xl mx-auto px-6 pt-28 pb-24 md:pt-40 md:pb-32">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 rounded-full border border-graphite/15 dark:border-paper/15 bg-paper-soft/70 dark:bg-ink-soft/70 backdrop-blur px-4 py-1.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wire opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-wire" />
            </span>
            <span className="font-mono text-xs text-mist dark:text-fog">
              Yeni projelere açığım
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display font-bold text-5xl md:text-7xl tracking-tight mb-5"
          >
            Yaşar Can Koç
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl font-medium mb-3"
          >
            <span className="text-signal">Full-Stack</span> Web Geliştirici
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base md:text-lg text-mist dark:text-fog leading-relaxed mb-10"
          >
            Fikirden canlı yayına — gerçek kullanıcılara hizmet veren web
            uygulamaları geliştiriyorum.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-16">
            <a
              href="#projeler"
              className="bg-graphite text-paper dark:bg-paper dark:text-ink rounded-full px-7 py-3.5 text-sm font-medium shadow-lg shadow-graphite/15 dark:shadow-black/40 hover:-translate-y-0.5 hover:opacity-95 transition-all"
            >
              Projeleri gör
            </a>
            <a
              href="#iletisim"
              className="border border-graphite/20 dark:border-paper/20 bg-paper-soft/50 dark:bg-ink-soft/50 backdrop-blur rounded-full px-7 py-3.5 text-sm font-medium hover:border-signal hover:text-signal hover:-translate-y-0.5 transition-all"
            >
              İletişime geç
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-mist dark:text-fog"
          >
            {stack.map((tech, i) => (
              <span key={tech} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="text-graphite/25 dark:text-paper/25">·</span>
                )}
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
