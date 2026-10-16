import { cacheLife } from "next/cache";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { mainNav } from "@/lib/nav";
import { site } from "@/lib/site";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="bg-footer pt-[clamp(3rem,5vw,4.5rem)] pb-7 text-[14.6px] text-white/65">
      <Container>
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-split md:gap-split-lg">
          <Logo tone="light" className="shrink-0" />

          <nav aria-label="Footer" className="min-w-0">
            <p className="mb-4.5 text-[13px] font-bold tracking-[0.13em] text-white uppercase">
              Links
            </p>
            <ul className="grid w-full grid-cols-2 gap-x-split gap-y-3 sm:grid-cols-3 min-[960px]:grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] min-[960px]:gap-x-split-md">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
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
