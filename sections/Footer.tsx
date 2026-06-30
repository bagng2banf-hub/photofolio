"use client";

import { ArrowUp } from "lucide-react";
import { footerLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 px-4 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black text-slate-950 dark:text-white">
            Thanks for visiting.
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
            Made with love by LEE DAYEON
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Copyright 2026. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {footerLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                aria-label={link.label}
                href={link.href}
                className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                <Icon size={18} />
              </a>
            );
          })}
          <a
            aria-label="Back to top"
            href="#hero"
            className="grid size-11 place-items-center rounded-full bg-slate-950 text-white transition hover:bg-blue-500 dark:bg-white dark:text-slate-950"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
