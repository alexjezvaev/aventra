import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { cx } from "@/lib/cx";

const challenges = [
  {
    n: "01",
    text: "It is difficult to find a reliable manufacturer",
  },
  {
    n: "02",
    text: "There is a risk of receiving low-quality goods",
  },
  {
    n: "03",
    text: "Production and deadlines are difficult to control from another country",
  },
  {
    n: "04",
    text: "It is unclear how to arrange shipping and documentation",
  },
  {
    n: "05",
    text: "Product development under your own brand is required",
  },
];

export function Challenges() {
  return (
    <Section
      id="challenges"
      tone="subtle"
      align="center"
      eyebrow="Client challenges"
      title="Sourcing from China Without Risks or Unnecessary Middlemen"
    >
      <div className="grid gap-grid max-[959px]:[grid-template-columns:repeat(auto-fit,minmax(290px,1fr))] min-[960px]:grid-cols-6">
        {challenges.map((item) => (
          <Reveal
            key={item.n}
            className={cx(
              "h-full min-[960px]:col-span-2",
              item.n === "04" && "min-[960px]:col-start-2",
              item.n === "05" && "min-[960px]:col-start-4",
            )}
          >
            <article className="h-full rounded-lg border border-border bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-light hover:shadow-elev">
              <div className="mb-5 flex size-12 items-center justify-center rounded-md bg-brand-soft text-lg font-bold text-brand-text">
                {item.n}
              </div>
              <h3 className="text-lg font-bold tracking-tight text-ink">{item.text}</h3>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-16 flex flex-col items-start gap-5.5 rounded-lg bg-[linear-gradient(115deg,var(--ink),var(--ink-soft))] p-[clamp(1.625rem,3vw,2.375rem)] text-white min-[720px]:flex-row min-[720px]:items-center">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand/20">
          <Icon name="tick" className="size-6.5 text-accent-soft" />
        </div>
        <p className="text-[clamp(1.03rem,1.9vw,1.375rem)] leading-snug font-semibold tracking-tight">
          We take care of sourcing, verification, quality control and delivery — you get a ready
          result.
        </p>
      </Reveal>
    </Section>
  );
}
