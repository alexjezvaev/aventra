import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Testimonial() {
  return (
    <Section id="results" tone="subtle" eyebrow="Testimonials and results" title="Our Clients’ Results">
      <Reveal>
        <figure className="relative overflow-hidden rounded-3xl bg-[linear-gradient(120deg,var(--ink),var(--ink-soft))] p-[clamp(2rem,4vw,3.5rem)] text-white">
          <div className="font-serif text-[5.5rem] leading-[0.6] font-extrabold text-accent-mid/35">
            “
          </div>
          <blockquote className="relative mt-3.5 max-w-[26em] text-[clamp(1.125rem,2.4vw,1.6875rem)] leading-snug font-semibold tracking-[-0.015em]">
            We received clear reports for every batch and were able to launch supplies without
            constant trips to the production site.
          </blockquote>
          <figcaption className="relative mt-6.5 flex items-center gap-3.5">
            <div className="flex size-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--brand),var(--brand-deep))] text-[15px] font-bold text-ink">
              PD
            </div>
            <p className="text-[14.6px] text-white/80">
              <b className="block font-semibold text-white">Procurement Director</b>
              apparel company
            </p>
          </figcaption>
        </figure>
      </Reveal>
    </Section>
  );
}
