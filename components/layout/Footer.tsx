import { cacheLife } from "next/cache";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

const links = [
  { href: "#services", label: "Services" },
  { href: "#workwear", label: "Workwear" },
  { href: "#why", label: "Why us" },
] as const;

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="bg-footer pt-[clamp(3rem,5vw,4.5rem)] pb-7 text-[14.6px] text-white/65">
      <Container>
        <div className="grid gap-8 min-[720px]:grid-cols-2 min-[960px]:grid-cols-[1.5fr_1fr_1fr] min-[960px]:gap-9">
          <Logo tone="light" className="self-start" />

          <div>
            <p className="mb-4.5 text-[13px] font-bold tracking-[0.13em] text-white uppercase">
              Links
            </p>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4.5 text-[13px] font-bold tracking-[0.13em] text-white uppercase">
              Contacts
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href={`mailto:${site.email}`} className="transition hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-11 border-t border-white/10 pt-6 text-[13.4px] text-white/50">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
}
