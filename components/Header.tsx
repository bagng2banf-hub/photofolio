"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

export function Header() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.id));
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/75 px-4 shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/70"
      >
        <a
          href="#hero"
          onClick={closeMenu}
          className="flex items-center gap-3 rounded-full text-sm font-black tracking-tight text-slate-950 dark:text-white"
        >
          <span className="grid size-10 place-items-center rounded-full bg-slate-950 text-white shadow-glow dark:bg-white dark:text-slate-950">
            D
          </span>
          LEE DAYEON
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-sky-300",
                activeSection === item.id &&
                  "bg-blue-500/10 text-blue-600 dark:text-sky-300"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-blue-200 hover:text-blue-600 dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((current) => !current)}
            className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-6xl rounded-[24px] border border-white/70 bg-white/90 p-3 shadow-soft backdrop-blur-2xl md:hidden dark:border-white/10 dark:bg-slate-950/90"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={closeMenu}
              className={cn(
                "block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",
                activeSection === item.id &&
                  "bg-blue-500/10 text-blue-600 dark:text-sky-300"
              )}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      ) : null}
    </header>
  );
}
