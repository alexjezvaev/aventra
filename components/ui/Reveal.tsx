import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type RevealTag = "div" | "article" | "li";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
};

export function Reveal({ children, className, as: Tag = "div" }: RevealProps) {
  return <Tag className={cx("reveal-on-scroll", className)}>{children}</Tag>;
}
