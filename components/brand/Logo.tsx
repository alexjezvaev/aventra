import { site } from "@/lib/site";
import { cx } from "@/lib/cx";

type LogoProps = {
  tone?: "ink" | "light";
  href?: string;
  className?: string;
};

export function Logo({ tone = "ink", href = "#top", className }: LogoProps) {
  const light = tone === "light";

  return (
    <a
      href={href}
      aria-label={site.name}
      className={cx("inline-flex shrink-0 items-center", className)}
    >
      <img
        src="/logo.svg"
        alt=""
        width={168}
        height={44}
        className={cx("h-11 w-auto", light && "brightness-0 invert")}
      />
    </a>
  );
}
