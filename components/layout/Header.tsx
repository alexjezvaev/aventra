"use client";

import { useState, useSyncExternalStore } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cx } from "@/lib/cx";

const nav = [
  { href: "#challenges", label: "Challenges" },
  { href: "#services", label: "Services" },
  { href: "#cases", label: "Cases" },
  { href: "#process", label: "Process" },
  { href: "#models", label: "Models" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

const mobileNav = [
  { href: "#challenges", label: "Challenges" },
  { href: "#services", label: "Services" },
  { href: "#cases", label: "Cases" },
  { href: "#process", label: "How we work" },
  { href: "#why", label: "Why us" },
  { href: "#models", label: "Cooperation models" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
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

  function close() {
    setOpen(false);
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
        <nav className="ml-auto hidden items-center gap-1.5 min-[1080px]:flex">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-[14.6px] font-medium text-ink-soft transition hover:bg-brand-soft hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3.5 min-[1080px]:ml-0">
          <Button href="#contact" size="sm" variant="dark" className="hidden min-[1080px]:inline-flex">
            Get a quote
          </Button>
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-[11px] border border-border bg-white min-[1080px]:hidden"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-0.5 w-4.5 rounded-full bg-ink before:absolute before:-top-1.5 before:left-0 before:h-0.5 before:w-4.5 before:rounded-full before:bg-ink before:content-[''] after:absolute after:top-1.5 after:left-0 after:h-0.5 after:w-4.5 after:rounded-full after:bg-ink after:content-['']" />
          </button>
        </div>
      </Container>
      {open ? (
        <nav id="mobile-nav" className="border-t border-border bg-white min-[1080px]:hidden">
          <Container className="flex flex-col pt-3.5 pb-5.5">
            {mobileNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="border-b border-bg-subtle py-3 font-semibold text-ink-soft"
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" variant="dark" className="mt-4 w-full" onClick={close}>
              Get a project quote
            </Button>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
