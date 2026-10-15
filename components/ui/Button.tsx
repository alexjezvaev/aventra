import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cx } from "@/lib/cx";

type ButtonVariant = "primary" | "dark" | "ghost" | "outline";
type ButtonSize = "sm" | "md";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(135deg,var(--brand),var(--brand-deep))] text-ink shadow-glow hover:-translate-y-0.5 hover:shadow-glow-lg",
  dark: "bg-ink text-white hover:-translate-y-0.5 hover:bg-ink-soft",
  ghost:
    "border-white/30 bg-white/5 text-white hover:border-white/50 hover:bg-white/10",
  outline:
    "border-border bg-surface text-ink hover:border-brand hover:text-brand",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4.5 py-2.5 text-sm",
  md: "px-6.5 py-3.5 text-[15.5px]",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentProps<"a">, "className" | "children"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function isNativeAnchor(href: string) {
  return (
    href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cx(
    "inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-sm border border-transparent font-semibold transition duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkProps } = props;
    if (isNativeAnchor(href)) {
      return <a href={href} className={classes} {...linkProps} />;
    }
    return <Link href={href} className={classes} {...linkProps} />;
  }

  return <button className={classes} {...props} />;
}
