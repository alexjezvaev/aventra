import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cx } from "@/lib/cx";

export type TextVariant =
  | "hero"
  | "hero-lead"
  | "h2"
  | "h3"
  | "eyebrow"
  | "eyebrow-faint"
  | "body"
  | "body-sm"
  | "stat"
  | "stat-label"
  | "meta"
  | "detail"
  | "caption";

export type TextTone =
  | "ink"
  | "ink-soft"
  | "copy"
  | "muted"
  | "accent"
  | "accent-soft"
  | "brand"
  | "white"
  | "white-subtle"
  | "white-soft"
  | "white-faint"
  | "white-dim"
  | "inherit";

type TextElement =
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "dt"
  | "dd"
  | "li"
  | "label";

const variantClasses: Record<TextVariant, string> = {
  hero: "font-display text-[clamp(1.875rem,4.6vw,3.625rem)] font-bold leading-[1.08] tracking-[-0.03em]",
  "hero-lead": "font-display text-2xl leading-tight tracking-tight md:text-4xl",
  h2: "font-display max-w-[20em] text-[clamp(1.6875rem,3.6vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em]",
  h3: "font-display text-lg font-bold tracking-[-0.01em]",
  eyebrow:
    "inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.14em] uppercase before:h-0.5 before:w-6.5 before:shrink-0 before:rounded-full before:bg-current before:content-['']",
  "eyebrow-faint": "text-sm font-bold uppercase",
  body: "text-base leading-relaxed md:text-lg",
  "body-sm": "text-sm leading-relaxed",
  stat: "font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",
  "stat-label": "text-xs leading-snug md:text-sm",
  meta: "text-xs uppercase tracking-[0.08em]",
  detail: "text-sm font-medium leading-snug",
  caption: "text-xs",
};

const toneClasses: Record<TextTone, string> = {
  ink: "text-ink",
  "ink-soft": "text-ink-soft",
  copy: "text-copy",
  muted: "text-muted",
  accent: "text-accent",
  "accent-soft": "text-accent-soft",
  brand: "text-brand",
  white: "text-white",
  "white-subtle": "text-white/85",
  "white-soft": "text-white/70",
  "white-faint": "text-white/55",
  "white-dim": "text-white/50",
  inherit: "",
};

const defaultTone: Record<TextVariant, TextTone> = {
  hero: "white",
  "hero-lead": "white-subtle",
  h2: "ink",
  h3: "ink",
  eyebrow: "accent",
  "eyebrow-faint": "white-faint",
  body: "muted",
  "body-sm": "muted",
  stat: "brand",
  "stat-label": "muted",
  meta: "muted",
  detail: "ink",
  caption: "muted",
};

const defaultElement: Record<TextVariant, TextElement> = {
  hero: "h1",
  "hero-lead": "p",
  h2: "h2",
  h3: "h3",
  eyebrow: "p",
  "eyebrow-faint": "p",
  body: "p",
  "body-sm": "p",
  stat: "p",
  "stat-label": "p",
  meta: "dt",
  detail: "dd",
  caption: "span",
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
    <Tag
      className={cx(variantClasses[variant], toneClasses[resolvedTone], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
