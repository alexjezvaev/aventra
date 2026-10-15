import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const items = [
  {
    q: "Do you work only with China?",
    a: "Our main expertise is China; if required, we also source suppliers in other Asian countries.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "It depends on the product category and factory requirements; we discuss it individually.",
  },
  {
    q: "How do you control quality?",
    a: "Through factory audits, sample checks, in-production inspections and pre-shipment inspections.",
  },
  {
    q: "Who pays the supplier?",
    a: "Different payment schemes are possible: direct payment by the client, payment through an agent, or another agreed arrangement.",
  },
  {
    q: "What delivery options are available?",
    a: "Sea, air, rail, consolidated cargo and delivery to the warehouse.",
  },
  {
    q: "Can you develop a product under our brand?",
    a: "Yes, including market analysis, technical specifications, samples, packaging and production preparation.",
  },
];

export function Faq() {
  return (
    <Section id="faq" align="center" eyebrow="FAQ" title="Frequently Asked Questions">
      <Reveal>
        <div className="overflow-hidden rounded-lg border border-border bg-surface text-left">
          {items.map((item, index) => (
            <details
              key={item.q}
              open={index === 0}
              className="group border-b border-border last:border-b-0"
            >
              <summary className="relative cursor-pointer list-none py-6 pr-15 pl-6.5 text-base font-semibold text-ink transition-colors group-open:text-brand hover:bg-bg-subtle [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden
                  className="absolute top-1/2 right-6.5 size-[11px] -translate-y-[70%] rotate-45 border-r-2 border-b-2 border-brand transition duration-300 group-open:-translate-y-[30%] group-open:-rotate-[135deg]"
                />
              </summary>
              <p className="max-w-[80ch] pr-15 pb-6.5 pl-6.5 text-[15px] leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
