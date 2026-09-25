"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function ScrollReveal() {
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (targets.length === 0) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const viewportHeight = window.innerHeight;
    const pending: HTMLElement[] = [];

    targets.forEach((el) => {
      if (el.classList.contains("reveal-visible")) return;
      const rect = el.getBoundingClientRect();
      const visibleInViewport =
        rect.top < viewportHeight * 0.92 && rect.bottom > 0;
      if (visibleInViewport) {
        el.classList.add("reveal-visible");
      } else {
        pending.push(el);
      }
    });

    document.documentElement.classList.add("reveal-ready");

    if (pending.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    pending.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
