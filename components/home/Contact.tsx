import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";
import { Container } from "@/components/ui/Container";
import { QuoteForm } from "@/components/home/QuoteForm";

const points = [
  "We reply within one business day",
  "A preliminary estimate of cost and timelines",
  "No obligations and no fee for the consultation",
] as const;

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-22 overflow-hidden bg-ink py-[clamp(3.5rem,7vw,6rem)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_80%_at_20%_50%,#000,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_70%_80%_at_20%_50%,#000,transparent_75%)]"
      />
      <Container className="relative grid items-start gap-[clamp(2rem,4vw,3.75rem)] min-[960px]:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <Text variant="eyebrow" tone="accent-soft" className="mb-4.5">
            Request a quote
          </Text>
          <Text variant="h2" tone="white">
            Tell Us About Your Product — We Will Offer a Solution for Your Task
          </Text>
          <Text variant="body" tone="white-soft" className="mt-4.5 max-w-[46ch]">
            Send us a product description, target volume and deadlines. We will prepare a
            preliminary plan for supplier sourcing, production and delivery.
          </Text>
          <ul className="mt-8 flex flex-col gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-white/70">
                <Icon name="tick" className="mt-0.5 size-4 text-accent-soft" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <QuoteForm />
        </Reveal>
      </Container>
    </section>
  );
}
