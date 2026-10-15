import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#cases", label: "Case studies" },
  { href: "#why", label: "About us" },
  { href: "#contact", label: "Contacts" },
] as const;

export function Footer() {
  const year = 2026;

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
                  <a href={link.href} className="hover:text-white">
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
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-11 flex flex-col flex-wrap items-start justify-between gap-x-6 gap-y-4 border-t border-white/10 pt-6 text-[13.4px] text-white/50 min-[720px]:flex-row min-[720px]:items-center">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <ul className="flex flex-row flex-wrap gap-5.5">
            <li>
              <a href="#contact" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Company details
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
