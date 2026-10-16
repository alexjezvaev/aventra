"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { cx } from "@/lib/cx";

const nav = [
  { href: "#challenges", label: "Objectives" },
  { href: "#services", label: "Services" },
  { href: "#workwear", label: "Workwear" },
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why us" },
  { href: "#audience", label: "Audience" },
  { href: "#models", label: "Models" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" },
] as const;

function subscribe(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function getStuck() {
  return window.scrollY > 8;
}

function getServerStuck() {
  return false;
}

export function Header() {
  const stuck = useSyncExternalStore(subscribe, getStuck, getServerStuck);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    mobileNavRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButtonRef.current?.focus();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function close() {
    setOpen(false);
    menuButtonRef.current?.focus();
  }

  return (
    <header
      className={cx(
        "sticky top-0 z-50 border-b bg-white/88 backdrop-blur-[14px] transition duration-300 backdrop-saturate-180",
        stuck ? "border-border shadow-header" : "border-transparent",
      )}
    >
      <Container className="flex h-header items-center gap-7">
        <Logo />
        <nav className="ml-auto hidden items-center gap-0.5 min-[1280px]:flex">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-2.5 py-2 text-sm font-medium text-ink-soft transition hover:bg-brand-soft hover:text-brand-text"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center min-[1280px]:ml-0">
          <button
            ref={menuButtonRef}
            type="button"
            className="flex size-11 items-center justify-center rounded-[11px] border border-border bg-white min-[1280px]:hidden"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls={open ? "mobile-nav" : undefined}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-0.5 w-4.5 rounded-full bg-ink before:absolute before:-top-1.5 before:left-0 before:h-0.5 before:w-4.5 before:rounded-full before:bg-ink before:content-[''] after:absolute after:top-1.5 after:left-0 after:h-0.5 after:w-4.5 after:rounded-full after:bg-ink after:content-['']" />
          </button>
        </div>
      </Container>
      {open ? (
        <nav
          ref={mobileNavRef}
          id="mobile-nav"
          className="border-t border-border bg-white min-[1280px]:hidden"
        >
          <Container className="flex flex-col pt-3.5 pb-5.5">
            {nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="border-b border-bg-subtle py-3 font-semibold text-ink-soft"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
