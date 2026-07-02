"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="border-t border-[#E5E7EB] bg-white px-5 py-7"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-1 text-sm text-[#6B7280] md:flex-row md:items-center md:justify-between">
        <p>감사합니다 💙</p>
        <p>© 2026 Lee Da Yeon</p>
      </div>
    </motion.footer>
  );
}
