import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const audience = [
  { n: "01", text: "Importers and wholesale companies" },
  { n: "02", text: "Apparel, footwear and home goods brands" },
  { n: "03", text: "Marketplace sellers" },
  { n: "04", text: "Distributors of industrial and consumer goods" },
  { n: "05", text: "Companies planning to launch products under their own brand" },
] as const;

export function Audience() {
  return (
    <Section
      id="audience"
      tone="subtle"
      align="center"
      eyebrow="Who we work with"
      title="Who Our Services Are For"
    >
      <div className="grid gap-4.5 max-[959px]:[grid-template-columns:repeat(auto-fit,minmax(230px,1fr))] min-[960px]:grid-cols-5">
        {audience.map((item) => (
          <Reveal key={item.n} className="h-full">
            <article className="flex h-full flex-col gap-3.5 rounded-lg border border-border bg-surface px-6 py-6.5 transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-elev">
              <span className="text-[12.5px] font-extrabold tracking-[0.12em] text-brand">
                {item.n}
              </span>
              <span className="text-[15.4px] leading-snug font-semibold text-ink">{item.text}</span>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
