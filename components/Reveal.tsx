"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Saniye cinsinden gecikme — kartları/blokları sırayla (stagger) belirtmek için */
  delay?: number;
  className?: string;
};

/**
 * Scroll ile görünüme girince içeriği aşağıdan yukarı yumuşakça belirten sarmalayıcı.
 * `once: true` sayesinde animasyon her scroll'da değil, sadece ilk görünümde çalışır.
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
