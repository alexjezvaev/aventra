import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cx } from "@/lib/cx";

export type TextVariant = "hero" | "h2" | "eyebrow" | "body";

export type TextTone =
  | "ink"
  | "muted"
  | "accent"
  | "accent-soft"
  | "white"
  | "white-soft";

type TextElement = "p" | "span" | "h1" | "h2" | "h3" | "h4";

const variantClasses: Record<TextVariant, string> = {
  hero: "font-display text-[clamp(1.875rem,4.6vw,3.625rem)] font-bold leading-[1.08] tracking-[-0.03em]",
  h2: "font-display max-w-[20em] text-[clamp(1.6875rem,3.6vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em]",
  eyebrow:
    "inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.14em] uppercase before:h-0.5 before:w-6.5 before:shrink-0 before:rounded-full before:bg-current before:content-['']",
  body: "text-base leading-relaxed md:text-lg",
};

const toneClasses: Record<TextTone, string> = {
  ink: "text-ink",
  muted: "text-muted",
  accent: "text-brand-text",
  "accent-soft": "text-accent-soft",
  white: "text-white",
  "white-soft": "text-white/70",
};

const defaultTone: Record<TextVariant, TextTone> = {
  hero: "white",
  h2: "ink",
  eyebrow: "accent",
  body: "muted",
};

const defaultElement: Record<TextVariant, TextElement> = {
  hero: "h1",
  h2: "h2",
  eyebrow: "p",
  body: "p",
};

type TextProps = {
  variant: TextVariant;
  tone?: TextTone;
  as?: TextElement;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"p">, "className" | "children">;

export function Text({
  variant,
  tone,
  as,
  className,
  children,
  ...props
}: TextProps) {
  const Tag = (as ?? defaultElement[variant]) as ElementType;
  const resolvedTone = tone ?? defaultTone[variant];

  return (
    <Tag className={cx(variantClasses[variant], toneClasses[resolvedTone], className)} {...props}>
      {children}
    </Tag>
  );
}
