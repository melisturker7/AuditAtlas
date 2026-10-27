import { BrandMark } from "./brand";

const footerLinks = [
  { label: "Explore the Map", href: "#map-preview" },
  { label: "Audit Reports", href: "#audit-reports" },
  { label: "Compare Countries", href: "#compare-countries" },
  { label: "Methodology", href: "#methodology" },
  { label: "About", href: "#about" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#173D35] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1fr_1fr] lg:px-12">
        <div>
          <a
            aria-label="AuditAtlas home"
            className="inline-flex items-center gap-3"
            href="#"
          >
            <BrandMark />
            <span className="flex flex-col">
              <span className="text-[19px] font-semibold leading-5 tracking-[-0.04em]">
                audit<span className="text-[#C7E884]">atlas</span>
              </span>
              <span className="mt-1 text-[10px] font-medium text-[#C0D0C6]">
                Mapping Public Accountability
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-md text-sm leading-6 text-[#C0D0C6]">
            A regional civic technology platform helping people explore public
            audit information across its six-country regional focus.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="md:justify-self-end">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C7E884]">
            Explore AuditAtlas
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="text-sm text-[#D0DDD4] transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7E884]"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-[11px] leading-5 text-[#AFC2B6] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <span>
            Demo preview. No official audit findings or country results are
            presented.
          </span>
          <span>© 2026 AuditAtlas</span>
        </div>
      </div>
    </footer>
  );
}
