export const site = {
  name: "AVENTRA TRADING LIMITED",
  title: "AVENTRA TRADING LIMITED — Закупки и поставки из Китая",
  description:
    "Поиск и проверка производителей в Китае, контроль качества на производстве, разработка продукта и доставка до склада.",
  themeColor: "#071832",
  phoneDisplay: "+7 (000) 000-00-00",
  phoneHref: "tel:+70000000000",
  email: "info@aventura-trading.com",
} as const;

/** Production URL via NEXT_PUBLIC_SITE_URL; falls back to localhost for local/dev. */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000"
  );
}
