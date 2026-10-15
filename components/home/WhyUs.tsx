import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const reasons = [
  "We are closer to manufacturing sites and understand the local market",
  "We verify suppliers before cooperation begins",
  "We control quality on site, not only through documents",
  "We provide photo, video and written reports",
  "We reduce the risks of defects, delays and documentation errors",
  "We work with different volumes: from a trial batch to regular supply",
] as const;

export function WhyUs() {
  return (
    <Section
      id="why"
      tone="dark"
      eyebrow="Why choose us"
      title="We Act as Your Sourcing Office in China"
    >
      <ul className="grid grid-cols-1 gap-4 min-[720px]:grid-cols-2 min-[720px]:gap-x-8">
        {reasons.map((item) => (
          <Reveal
            key={item}
            as="li"
            className="flex items-start gap-3.5 rounded-sm border border-border bg-surface px-5.5 py-5"
          >
            <Icon name="check-circle" className="mt-0.5 size-5.5 text-accent-soft" />
            <span className="text-[15px] leading-relaxed font-medium text-ink-soft">{item}</span>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
