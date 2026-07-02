"use client";

import { type RefObject, useEffect } from "react";

type UseGsapScrollLiftOptions = {
  selector: string;
  fromY?: number;
  toY?: number;
  scrub?: number;
  disabledBelow?: number;
};

export function useGsapScrollLift(
  rootRef: RefObject<HTMLElement>,
  {
    selector,
    fromY = 24,
    toY = -8,
    scrub = 0.8,
    disabledBelow = 768
  }: UseGsapScrollLiftOptions
) {
  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen = window.matchMedia(`(max-width: ${disabledBelow - 1}px)`).matches;

    if (prefersReducedMotion || isSmallScreen) {
      return;
    }

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    const setupScrollMotion = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);

      if (cancelled) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        const elements = gsap.utils.toArray<HTMLElement>(selector);

        gsap.fromTo(
          elements,
          { y: fromY },
          {
            y: toY,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top bottom",
              end: "bottom top",
              scrub
            }
          }
        );
      }, root);

      cleanup = () => context.revert();
    };

    void setupScrollMotion();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [disabledBelow, fromY, rootRef, scrub, selector, toY]);
}
