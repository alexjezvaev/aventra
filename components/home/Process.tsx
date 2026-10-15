import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const steps = [
  {
    n: "01",
    title: "Briefing",
    text: "We discuss the product, volume, budget, deadlines and target market.",
  },
  {
    n: "02",
    title: "Supplier sourcing",
    text: "We create a shortlist of factories and request quotations.",
  },
  {
    n: "03",
    title: "Verification and samples",
    text: "We assess the manufacturer and approve samples and specifications.",
  },
  {
    n: "04",
    title: "Production",
    text: "We monitor stages, deadlines and quality.",
  },
  {
    n: "05",
    title: "Pre-shipment inspection",
    text: "We inspect the goods, packaging and quantity.",
  },
  {
    n: "06",
    title: "Logistics",
    text: "We arrange transportation, documentation and delivery to the warehouse.",
  },
] as const;

export function Process() {
  return (
    <Section
      id="process"
      align="center"
      eyebrow="How we work"
      title="A Transparent Process from Idea to Delivery"
    >
      <div className="grid grid-cols-1 gap-grid min-[720px]:grid-cols-2 min-[960px]:grid-cols-3">
        {steps.map((step) => (
          <Reveal key={step.n} className="h-full">
            <article className="h-full rounded-lg border border-border bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-light hover:shadow-elev">
              <div className="mb-4.5 flex size-11 items-center justify-center rounded-md bg-brand-soft text-base font-extrabold text-ink shadow-step">
                {step.n}
              </div>
              <h3 className="text-[17px] font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
