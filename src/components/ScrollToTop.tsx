"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function ScrollToTop() {
  const pathname = usePathname();
  const skippedFirstRender = useRef(false);

  useIsomorphicLayoutEffect(() => {
    if (!skippedFirstRender.current) {
      skippedFirstRender.current = true;
      return;
    }

    const hash = window.location.hash;
    const id = hash ? decodeURIComponent(hash.slice(1)) : "";
    const target = id ? document.getElementById(id) : null;

    if (target) {
      target.scrollIntoView({ block: "start", behavior: "instant" });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
