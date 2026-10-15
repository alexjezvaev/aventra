"use client";

import { useEffect, useRef, type ReactNode, type Ref } from "react";
import { cx } from "@/lib/cx";

type RevealTag = "div" | "article" | "li";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
};

const revealClass =
  "transition duration-700 ease-out data-pending:translate-y-5 data-pending:opacity-0 motion-reduce:transition-none";

export function Reveal({ children, className, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (inView) return;

    const parent = el.parentElement;
    const index = parent ? Array.prototype.indexOf.call(parent.children, el) : 0;
    el.style.transitionDelay = `${Math.min(Math.max(index, 0) * 70, 350)}ms`;
    el.dataset.pending = "";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          delete el.dataset.pending;
          observer.disconnect();
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = cx(revealClass, className);

  if (as === "li") {
    return (
      <li ref={ref as Ref<HTMLLIElement>} className={classes}>
        {children}
      </li>
    );
  }

  if (as === "article") {
    return (
      <article ref={ref as Ref<HTMLElement>} className={classes}>
        {children}
      </article>
    );
  }

  return (
    <div ref={ref as Ref<HTMLDivElement>} className={classes}>
      {children}
    </div>
  );
}
