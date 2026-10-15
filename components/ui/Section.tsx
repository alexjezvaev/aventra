import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";

type SectionTone = "default" | "subtle" | "dark";
type SectionAlign = "start" | "center";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  title?: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  tone?: SectionTone;
  align?: SectionAlign;
};

export function Section({
  children,
  className,
  id,
  title,
  description,
  eyebrow,
  tone = "default",
  align = "start",
}: SectionProps) {
  const dark = tone === "dark";
  const centered = align === "center";

  return (
    <section
      id={id}
      className={cx(
        "scroll-mt-22 py-section",
        tone === "subtle" && "bg-bg-subtle",
        dark && "bg-ink",
        className,
      )}
    >
      <Container>
        {eyebrow || title || description ? (
          <div className={cx("mb-[clamp(2.25rem,4vw,3.5rem)]", centered && "text-center")}>
            {eyebrow ? (
              <Text
                variant="eyebrow"
                tone={dark ? "accent-soft" : "accent"}
                className="mb-4.5"
              >
                {eyebrow}
              </Text>
            ) : null}
            {title ? (
              <Text
                variant="h2"
                tone={dark ? "white" : "ink"}
                className={centered ? "mx-auto" : undefined}
              >
                {title}
              </Text>
            ) : null}
            {description ? (
              <Text
                variant="body"
                tone={dark ? "white-soft" : "muted"}
                className={cx("mt-4.5 max-w-[60ch]", centered && "mx-auto")}
              >
                {description}
              </Text>
            ) : null}
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
