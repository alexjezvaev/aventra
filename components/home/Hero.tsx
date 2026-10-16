import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";

const trust = [
  {
    id: "clients",
    content: "We work with B2B clients, importers and brands",
  },
  {
    id: "reporting",
    content: "Transparent reporting at every stage",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-[clamp(3.5rem,7vw,6rem)] pb-[clamp(4rem,8vw,6.5rem)] text-white">
      <Image
        src="/hero-banner.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgb(7_24_50/0.88)_0%,rgb(7_24_50/0.72)_42%,rgb(7_24_50/0.45)_100%)]"
      />

      <Container className="relative grid items-center gap-[clamp(2rem,4vw,4rem)] min-[960px]:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/7 py-2 pr-4 pl-3 text-[13.5px] text-white/85">
            <span className="size-1.5 rounded-full bg-success shadow-[0_0_0_4px_rgb(61_220_151/0.18)]" />
            <span>
              <b className="font-semibold text-white">AVENTRA</b> sourcing office in China
            </span>
          </div>
          <Text variant="hero">
            Your Reliable Partner for{" "}
            <span className="bg-[linear-gradient(100deg,var(--accent-mid),var(--brand))] bg-clip-text text-transparent">
              Sourcing and Supply from China
            </span>
          </Text>
          <Text variant="body" tone="white-soft" className="mt-5.5 max-w-[56ch]">
            We find verified manufacturers, control quality at production sites, develop products
            and arrange delivery to your warehouse.
          </Text>
          <div className="mt-11 grid gap-4 border-t border-white/15 pt-7.5 min-[960px]:grid-cols-2 min-[960px]:gap-grid">
            {trust.map((item) => (
              <div key={item.id} className="flex items-start gap-2.5">
                <Icon name="check-circle" className="mt-0.5 size-5 text-accent-mid" />
                <span className="text-sm leading-normal text-white/80">{item.content}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
