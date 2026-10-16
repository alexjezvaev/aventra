import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { cx } from "@/lib/cx";

const rows = [
  {
    model: "One-off project",
    includes: "Supplier sourcing, samples, inspection, delivery",
    fit: "Launching a new product",
  },
  {
    model: "Production support",
    includes: "Monitoring deadlines, quality and shipment",
    fit: "Regular orders",
  },
  {
    model: "Product development",
    includes: "Market analysis, model development, series launch",
    fit: "Brands and private label",
  },
  {
    model: "Full sourcing outsourcing",
    includes: "All stages: from idea to the client’s warehouse",
    fit: "Companies without a China office",
  },
];

function Cell({
  children,
  label,
  first,
  last,
}: {
  children: ReactNode;
  label?: string;
  first?: boolean;
  last?: boolean;
}) {
  return (
    <td
      className={cx(
        "block px-5.5 py-2.5 align-top text-muted min-[720px]:table-cell min-[720px]:px-6 min-[720px]:py-5.5",
        !last && "min-[720px]:border-b min-[720px]:border-border",
        first &&
          "pt-5 text-[17px] font-bold whitespace-nowrap text-ink min-[720px]:pt-5.5 min-[720px]:text-[15.6px]",
      )}
    >
      {label ? (
        <span className="mb-1 block text-[11px] font-bold tracking-[0.12em] text-muted/75 uppercase min-[720px]:hidden">
          {label}
        </span>
      ) : null}
      {children}
    </td>
  );
}

export function Models() {
  return (
    <Section id="models" eyebrow="Cooperation models" title="Choose How Deeply We Get Involved">
      <Reveal>
        <div className="overflow-hidden rounded-lg border border-border bg-surface">
          <table className="w-full border-collapse text-[15px]">
            <thead className="hidden min-[720px]:table-header-group">
              <tr>
                <th className="border-b border-border bg-bg-subtle px-6 py-4.5 text-left text-xs font-bold tracking-[0.13em] text-muted uppercase">
                  Model
                </th>
                <th className="border-b border-border bg-bg-subtle px-6 py-4.5 text-left text-xs font-bold tracking-[0.13em] text-muted uppercase">
                  What is included
                </th>
                <th className="border-b border-border bg-bg-subtle px-6 py-4.5 text-left text-xs font-bold tracking-[0.13em] text-muted uppercase">
                  Best for
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                const last = index === rows.length - 1;
                return (
                  <tr
                    key={row.model}
                    className="block border-b border-border py-1.5 pb-4 last:border-b-0 min-[720px]:table-row min-[720px]:border-0 min-[720px]:py-0 min-[720px]:transition-colors min-[720px]:hover:bg-bg-subtle"
                  >
                    <Cell first last={last}>
                      <span className="mr-2.5 inline-block size-1.5 rounded-full bg-brand align-middle" />
                      {row.model}
                    </Cell>
                    <Cell last={last} label="Included">
                      {row.includes}
                    </Cell>
                    <Cell last={last} label="Best for">
                      {row.fit}
                    </Cell>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
