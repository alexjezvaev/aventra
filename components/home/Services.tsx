import type { IconName } from "@/components/ui/Icon";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { CheckList } from "@/components/home/shared/CheckList";

const services: {
  icon: IconName;
  title: string;
  items: string[];
}[] = [
  {
    icon: "briefcase",
    title: "Supplier Sourcing and Verification",
    items: [
      "Selecting factories based on product, volume and budget",
      "Verification of legal data, production capacity and export experience",
      "Comparison of commercial offers",
      "Sample requests and specification approval",
    ],
  },
  {
    icon: "shield",
    title: "On-Site Quality Control",
    items: [
      "Factory audit before cooperation begins",
      "Sample inspection before production starts",
      "In-production inspection",
      "Pre-shipment inspection: quality, quantity, packaging and labelling",
      "Photo and video reports from the production site",
    ],
  },
  {
    icon: "spark",
    title: "New Product Development",
    items: [
      "Market and competitor analysis",
      "Technical specification development",
      "Selection of materials and components",
      "Sample development and design refinement",
      "Preparing the product for mass production",
    ],
  },
  {
    icon: "chart",
    title: "Demand and Market Analysis",
    items: [
      "Product demand assessment",
      "Competitor and pricing analysis",
      "Identification of niches and new sales channels",
      "Recommendations on product range and positioning",
    ],
  },
  {
    icon: "truck",
    title: "Logistics and Delivery",
    items: [
      "Sea, air and rail transportation",
      "Cargo consolidation",
      "Export documentation",
      "Customs clearance",
      "Delivery to the client’s warehouse",
    ],
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="End-to-End Supply Chain Support"
      description="Five workstreams that cover the journey of your product from idea to your warehouse."
    >
      <div className="grid grid-cols-1 gap-grid min-[720px]:grid-cols-2 min-[960px]:grid-cols-3">
        {services.map((service) => (
          <Reveal key={service.title} className="h-full">
            <article className="h-full rounded-lg border border-border bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-light hover:shadow-elev">
              <div className="mb-5 flex size-12 items-center justify-center rounded-md bg-brand-soft">
                <Icon name={service.icon} className="size-6 text-brand-text" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-ink">{service.title}</h3>
              <CheckList items={service.items} className="mt-4.5" />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
