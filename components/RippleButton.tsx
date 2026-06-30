"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const variants = {
  primary:
    "bg-blue-500 text-white shadow-glow hover:bg-blue-600 dark:bg-blue-400 dark:text-slate-950",
  secondary:
    "border border-slate-200 bg-white/80 text-slate-950 shadow-soft hover:border-blue-200 dark:border-white/10 dark:bg-white/10 dark:text-white",
  ghost:
    "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
};

export function RippleButton(props: AnchorProps | ButtonProps) {
  const { children, variant = "primary", className, ...rest } = props;
  const classes = cn(
    "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-6 text-sm font-semibold transition-colors",
    "transform-gpu transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]",
    variants[variant],
    className
  );
  const content = (
    <>
      <span className="absolute inset-0 translate-y-full rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
