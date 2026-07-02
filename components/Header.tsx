"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#2563EB] text-white">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className={cn(
          "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 transition-all duration-300",
          scrolled && "backdrop-blur-md"
        )}
      >
        <a href="#hero" className="text-lg font-extrabold tracking-tight" onClick={() => setOpen(false)}>
          LEE DA YEON
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold text-white/75 transition hover:bg-white/10 hover:text-white",
                activeSection === item.id && "bg-white/15 text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          aria-label="메뉴 열기"
          onClick={() => setOpen((value) => !value)}
          className="grid size-10 place-items-center rounded-full bg-white/10 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {open ? (
        <div className="mx-auto max-w-6xl px-4 pb-4 md:hidden">
          <div className="rounded-3xl bg-white p-2 text-[#111827] shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
