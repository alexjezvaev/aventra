import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

export function Workwear() {
  return (
    <Section
      id="workwear"
      tone="subtle"
      eyebrow="About Supply from China"
      title="Workwear and Safety Footwear"
    >
      <Reveal className="space-y-stack md:space-y-stack-md">
        <div className="relative aspect-[5/2] w-full overflow-hidden rounded-lg">
          <Image
            src="/workwear.jpg"
            alt="Safety footwear and logistics in an industrial warehouse with Aventra Trading delivery"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="space-y-4">
          <Text variant="body" tone="muted">
            We help brands, distributors and corporate customers develop their
            safety footwear ranges — from manufacturer selection to mass
            production launch.
          </Text>
          <Text variant="body" tone="muted">
            We will help you find a reliable manufacturer, develop the model and
            arrange the supply of safety footwear under your own brand.
          </Text>
        </div>
      </Reveal>
    </Section>
  );
}
