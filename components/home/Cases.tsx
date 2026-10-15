import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { CheckList } from "@/components/home/shared/CheckList";

const cases: {
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  task: string;
  did: string[];
  result: string;
}[] = [
  {
    title: "Model 1: UrbanStep — Urban Sneakers",
    category: "Category: footwear",
    image: "/shoes.jpg",
    imageAlt: "Urban sneakers arranged on a light background",
    task: "To launch its own line of lightweight urban sneakers for the CIS market.",
    did: [
      "Conducted competitor and pricing analysis",
      "Found a factory with experience in sports footwear manufacturing",
      "Developed 3 colour versions and improved the sole design",
      "Organised quality control of materials, stitching and packaging",
      "Delivered the first batch by sea with cargo consolidation",
    ],
    result:
      "an UrbanStep model ready for launch, featuring improved cushioning, a modern design and competitive production costs.",
  },
  {
    title: "Model 2: NordLine — Thermal Underwear for Outdoor Activities",
    category: "Category: apparel",
    image: "/thermal.jpg",
    imageAlt: "Models wearing thermal base layers",
    task: "To create functional thermal underwear for fishing, tourism and winter sports.",
    did: [
      "Analysed demand and seasonality in target regions",
      "Selected a factory capable of working with fleece and stretch fabrics",
      "Developed men’s and women’s product lines",
      "Checked fabric density, seams, sizing and packaging",
      "Arranged pre-shipment inspection and delivery",
    ],
    result:
      "a ready NordLine product line under the client’s private label, with controlled quality and clear logistics.",
  },
];

export function Cases() {
  return (
    <Section
      id="cases"
      tone="subtle"
      eyebrow="Project examples"
      title="Examples of Projects We Develop Together with Our Clients"
    >
      <div className="grid grid-cols-1 gap-grid min-[720px]:grid-cols-2">
        {cases.map((item) => (
          <Reveal key={item.title} className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface">
              <div className="relative overflow-hidden bg-[linear-gradient(120deg,var(--ink),var(--ink-soft))] px-7 py-6.5 text-white">
                <h3 className="relative text-[clamp(1.3125rem,2.2vw,1.6875rem)] font-bold">
                  {item.title}
                </h3>
                <div className="relative mt-3">
                  <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-bold tracking-[0.06em] uppercase">
                    {item.category}
                  </span>
                </div>
              </div>
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={1500}
                height={1120}
                sizes="(min-width: 720px) 36rem, 100vw"
                className="h-auto w-full"
              />
              <div className="flex flex-1 flex-col gap-5.5 p-7">
                <div>
                  <p className="mb-2.5 text-xs font-bold tracking-[0.13em] text-brand uppercase">
                    Client’s task
                  </p>
                  <p className="text-[15px] text-muted">{item.task}</p>
                </div>
                <div>
                  <p className="mb-2.5 text-xs font-bold tracking-[0.13em] text-brand uppercase">
                    What we did
                  </p>
                  <CheckList items={item.did} />
                </div>
                <p className="mt-auto rounded-r-md border-l-[3px] border-brand bg-brand-soft px-4.5 py-4 text-[14.6px] text-ink-soft [&_b]:font-semibold [&_b]:text-ink">
                  <b>Result:</b> {item.result}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
