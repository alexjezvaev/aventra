import { Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/cx";

type CheckListProps = {
  items: readonly string[];
  className?: string;
};

export function CheckList({ items, className }: CheckListProps) {
  return (
    <ul className={cx("flex flex-col gap-2.5", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
          <Icon name="tick" className="mt-0.5 size-3.5 text-brand-text" />
          {item}
        </li>
      ))}
    </ul>
  );
}
