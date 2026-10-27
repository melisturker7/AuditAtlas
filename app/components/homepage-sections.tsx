import { ArrowUpRight } from "./brand";
import { MapPreview } from "./map-preview";
import { RegionalMap } from "./regional-map";
import { focusCountries } from "../data/countries";

const metrics = [
  {
    value: "6",
    label: "Countries in focus",
    note: "AuditAtlas regional focus",
  },
  {
    value: "OSM",
    label: "Map preview",
    note: "Country locations only",
  },
  {
    value: "Not connected",
    label: "Official sources",
    note: "No source data in this demo",
  },
  {
    value: "Not displayed",
    label: "Audit findings",
    note: "No official results presented",
  },
];

function DemoNotice() {
  return (
    <div className="border-b border-[#EADBB7] bg-[#FFF8E9]">
      <p className="mx-auto max-w-7xl px-5 py-3 text-xs leading-5 text-[#755D30] sm:px-8 lg:px-12">
        <span className="font-semibold">DEMO PREVIEW</span>
        <span className="mx-2 text-[#B49A66]">·</span>
        The map and example records are illustrative. No official audit findings
        or country results are presented.
      </p>
    </div>
  );
}

function HeroSection() {
  return (
    <>
      <DemoNotice />
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-48 -top-60 h-[620px] w-[620px] rounded-full border border-[#E9EDE5] sm:-right-20" />
        <div className="pointer-events-none absolute -right-32 -top-44 h-[490px] w-[490px] rounded-full border border-[#E9EDE5]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1fr_0.95fr] lg:gap-10 lg:px-12 lg:pb-24 lg:pt-24">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DCE6D8] bg-white/70 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4A6D5C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#62A17A]" />
              Regional civic technology
            </div>
            <h1 className="max-w-[650px] text-[clamp(3.25rem,7vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.065em] text-[#17352F]">
              Public accountability,
              <br />
              <span className="font-serif font-normal italic text-[#628071]">
                easier to explore.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#62746B] sm:text-lg sm:leading-8">
              AuditAtlas is a regional civic technology platform for exploring
              public audit information across six countries. Our aim: make
              official sources clearer and easier for everyone to navigate.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center gap-3 rounded-full bg-[#173D35] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#245448] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4C7767]"
                href="#map-preview"
              >
                Explore the Map <ArrowUpRight />
              </a>
              <a
                className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-[#426057] transition hover:text-[#17352F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4C7767]"
                href="#methodology"
              >
                How it works <span aria-hidden="true">→</span>
              </a>
            </div>
            <p className="mt-8 max-w-xl text-xs leading-6 text-[#728078]">
              {focusCountries.join(" · ")}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
            <div className="absolute -left-4 top-14 h-20 w-20 rounded-full bg-[#E7EDDF] blur-2xl" />
            <div className="relative rounded-[28px] border border-[#E7EBE2] bg-white p-3 shadow-[0_24px_80px_-40px_rgba(36,67,54,0.28)] sm:p-4">
              <div className="flex items-center justify-between px-3 pb-3 pt-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#718177]">
                    Regional preview
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#203D34]">
                    Six-country regional focus
                  </p>
                </div>
                <span className="rounded-full bg-[#FFF4DE] px-3 py-1.5 text-[11px] font-semibold text-[#8A672B]">
                  DEMO ONLY
                </span>
              </div>
              <div className="h-[290px] overflow-hidden rounded-[18px] bg-[#F2F5EC] sm:h-[340px]">
                <RegionalMap idPrefix="hero-map" />
              </div>
              <p className="px-3 pb-1 pt-4 text-[11px] text-[#6D7D72]">
                Schematic country locator · Not to scale
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function MetricCard({
  value,
  label,
  note,
}: (typeof metrics)[number]) {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-7">
      <p className="text-xl font-medium tracking-[-0.04em] text-[#173D35] sm:text-2xl">
        {value}
      </p>
      <p className="mt-1.5 text-sm font-semibold text-[#385449]">{label}</p>
      <p className="mt-1 text-xs leading-5 text-[#87928A]">{note}</p>
    </div>
  );
}

function KpiSection() {
  return (
    <section
      aria-label="AuditAtlas scope and data status"
      className="border-y border-[#E6EAE2] bg-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-[#E9EDE5] px-5 sm:px-8 md:grid-cols-4 md:divide-y-0 lg:px-12">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>
    </section>
  );
}

function RegionalMapPreview() {
  return (
    <section
      aria-labelledby="map-preview-heading"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      id="map-preview"
    >
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#66806F]">
            Regional map preview
          </p>
          <h2
            className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[#17352F] sm:text-4xl"
            id="map-preview-heading"
          >
            A clearer view of the region.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#708077] sm:text-base">
            Explore OpenStreetMap with a locator at each focus country&apos;s
            capital. These markers identify countries, not audit activity.
          </p>
        </div>
        <a
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#315E4C] transition hover:text-[#17352F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4C7767]"
          href="#compare-countries"
        >
          Compare countries <ArrowUpRight />
        </a>
      </div>

      <div className="grid overflow-hidden rounded-[26px] border border-[#E5EAE2] bg-white lg:grid-cols-[1.15fr_0.85fr]">
        <div className="bg-[#F0F4EA] p-4 sm:p-7">
          <MapPreview />
          <p className="mt-3 px-1 text-xs leading-5 text-[#718177]">
            Map markers indicate country capitals only. They do not represent
            audit activity, findings, or project locations.
          </p>
        </div>
        <div className="p-6 sm:p-8 lg:p-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#75847A]">
                Country focus
              </p>
              <h3 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-[#17352F]">
                Six-country regional focus
              </h3>
            </div>
            <span className="rounded-full bg-[#FFF4DE] px-3 py-1.5 text-[11px] font-semibold text-[#8A672B]">
              DEMO ONLY
            </span>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-[#F7F8F4] p-4">
              <p className="text-2xl font-medium tracking-[-0.04em] text-[#234A3D]">
                6
              </p>
              <p className="mt-1 text-xs text-[#78857B]">Countries in scope</p>
            </div>
            <div className="rounded-2xl bg-[#F7F8F4] p-4">
              <p className="text-base font-semibold text-[#234A3D]">
                Not connected
              </p>
              <p className="mt-1 text-xs text-[#78857B]">Official audit data</p>
            </div>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-[#EBEEE8] pt-5 text-xs leading-5 text-[#687A70]">
            {focusCountries.map((country) => (
              <li className="flex items-start gap-2" key={country}>
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7C9A83]"
                />
                {country}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function HomepageSections() {
  return (
    <>
      <HeroSection />
      <KpiSection />
      <RegionalMapPreview />
    </>
  );
}
