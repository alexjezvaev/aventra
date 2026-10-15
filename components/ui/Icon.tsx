import type { ReactNode, SVGProps } from "react";
import { cx } from "@/lib/cx";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

type IconDef = {
  viewBox: string;
  children: ReactNode;
};

const icons = {
  tick: {
    viewBox: "0 0 14 14",
    children: <path d="M2 7.4l3.4 3.4L12 3.6" {...stroke} strokeWidth="2.1" />,
  },
  "check-circle": {
    viewBox: "0 0 22 22",
    children: (
      <>
        <circle cx="11" cy="11" r="9.6" {...stroke} strokeWidth="1.6" />
        <path d="M6.8 11.3l2.9 2.9L15.4 8" {...stroke} strokeWidth="2" />
      </>
    ),
  },
  spark: {
    viewBox: "0 0 24 24",
    children: (
      <path
        d="M12 2.8l2.5 5.3 5.7.8-4.2 4 1 5.7-5-2.7-5 2.7 1-5.7-4.2-4 5.7-.8L12 2.8z"
        {...stroke}
        strokeWidth="1.8"
      />
    ),
  },
  briefcase: {
    viewBox: "0 0 24 24",
    children: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2.5" {...stroke} strokeWidth="1.8" />
        <path
          d="M8 7V5.4A2.4 2.4 0 0110.4 3h3.2A2.4 2.4 0 0116 5.4V7"
          {...stroke}
          strokeWidth="1.8"
        />
        <path d="M3 12h18" {...stroke} strokeWidth="1.8" />
      </>
    ),
  },
  shield: {
    viewBox: "0 0 24 24",
    children: (
      <>
        <path
          d="M12 3l7.5 3.2v5.2c0 4.4-3.1 8.1-7.5 9.1-4.4-1-7.5-4.7-7.5-9.1V6.2L12 3z"
          {...stroke}
          strokeWidth="1.8"
        />
        <path d="M8.8 12.1l2.2 2.2 4.2-4.4" {...stroke} strokeWidth="1.9" />
      </>
    ),
  },
  chart: {
    viewBox: "0 0 24 24",
    children: (
      <path d="M4 20V11M10 20V5M16 20v-6M22 20H2" {...stroke} strokeWidth="1.9" />
    ),
  },
  truck: {
    viewBox: "0 0 24 24",
    children: (
      <>
        <path
          d="M2.5 16.5V9.2l2.2-3.4h9l3 3.4h2.6l2.2 3.2v4.1H2.5z"
          {...stroke}
          strokeWidth="1.8"
        />
        <circle cx="7.2" cy="16.6" r="1.9" {...stroke} strokeWidth="1.7" />
        <circle cx="17.2" cy="16.6" r="1.9" {...stroke} strokeWidth="1.7" />
        <path d="M9.2 16.6h6" {...stroke} strokeWidth="1.7" />
      </>
    ),
  },
  arrow: {
    viewBox: "0 0 16 16",
    children: <path d="M2 8h11M9 4l4 4-4 4" {...stroke} strokeWidth="1.8" />,
  },
  download: {
    viewBox: "0 0 20 20",
    children: (
      <>
        <path d="M10 3v9M6.4 8.6L10 12.2l3.6-3.6" {...stroke} strokeWidth="1.7" />
        <path d="M3.5 15.5h13" {...stroke} strokeWidth="1.7" />
      </>
    ),
  },
  route: {
    viewBox: "0 0 20 20",
    children: (
      <>
        <path d="M4.5 3.5l6 6-4.4 1.4L3.5 6.6z" {...stroke} strokeWidth="1.6" />
        <path d="M10.5 9.5l3-3 3 3-3 3z" {...stroke} strokeWidth="1.6" />
        <path d="M9.5 14l-1 2.5L6 14.4z" {...stroke} strokeWidth="1.6" />
      </>
    ),
  },
} satisfies Record<string, IconDef>;

export type IconName = keyof typeof icons;

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, className, ...props }: IconProps) {
  const icon = icons[name];

  return (
    <svg
      viewBox={icon.viewBox}
      fill="none"
      aria-hidden="true"
      className={cx("shrink-0", className)}
      {...props}
    >
      {icon.children}
    </svg>
  );
}
