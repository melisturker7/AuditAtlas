import { ArrowUpRight, BrandMark } from "./brand";

const navigationLinks = [
  { label: "Explore the Map", href: "#map-preview" },
  { label: "Audit Reports", href: "#audit-reports" },
  { label: "Compare Countries", href: "#compare-countries" },
  { label: "Methodology", href: "#methodology" },
  { label: "About", href: "#about" },
];

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      {navigationLinks.map((link) => (
        <a
          className={
            mobile
              ? "block rounded-lg px-3 py-2.5 text-sm font-medium text-[#426057] transition hover:bg-[#F2F5EF] hover:text-[#17352F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4C7767]"
              : "whitespace-nowrap text-[13px] font-medium text-[#426057] transition hover:text-[#17352F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4C7767]"
          }
          href={link.href}
          key={link.label}
        >
          {link.label}
        </a>
      ))}
    </>
  );
}

export function SiteHeader() {
  return (
    <header className="border-b border-[#E9EDE5] bg-[#F8F9F5]">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-12">
        <a
          aria-label="AuditAtlas — Mapping Public Accountability"
          className="flex shrink-0 items-center gap-3"
          href="#"
        >
          <BrandMark />
          <span className="flex flex-col">
            <span className="text-[19px] font-semibold leading-5 tracking-[-0.04em]">
              audit<span className="text-[#4C7767]">atlas</span>
            </span>
            <span className="mt-1 text-[10px] font-medium tracking-[0.01em] text-[#718177]">
              Mapping Public Accountability
            </span>
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 xl:flex"
        >
          <NavigationLinks />
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            className="hidden items-center gap-2 rounded-full bg-[#173D35] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#245448] sm:inline-flex"
            href="#map-preview"
          >
            Explore the Map <ArrowUpRight />
          </a>

          <details className="group relative xl:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[#DDE5DC] bg-white px-3.5 py-2.5 text-sm font-semibold text-[#315E4C] transition hover:bg-[#F2F5EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4C7767] [&::-webkit-details-marker]:hidden">
              <span>Menu</span>
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  className="group-open:hidden"
                  d="M3.5 5.5h13m-13 4.5h13m-13 4.5h13"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.6"
                />
                <path
                  className="hidden group-open:block"
                  d="m5 5 10 10M15 5 5 15"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.6"
                />
              </svg>
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-full z-50 mt-3 w-[min(20rem,calc(100vw-2.5rem))] rounded-2xl border border-[#E5EAE2] bg-white p-2 shadow-[0_20px_50px_-25px_rgba(36,67,54,0.4)]"
            >
              <NavigationLinks mobile />
              <a
                className="mt-1 flex items-center justify-between rounded-lg bg-[#173D35] px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-[#245448]"
                href="#map-preview"
              >
                Explore the Map <ArrowUpRight />
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
