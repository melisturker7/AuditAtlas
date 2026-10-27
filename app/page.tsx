import { ArrowUpRight } from "./components/brand";
import { HomepageSections } from "./components/homepage-sections";
import { AuditReportExplorer } from "./components/audit-report-explorer";
import { CountryComparisonDashboard } from "./components/country-comparison-dashboard";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

const demoRecords = [
  {
    category: "DEMO EXAMPLE",
    title: "Illustrative transport record",
    description: "Sample content · Not an official project",
    color: "bg-emerald-500",
  },
  {
    category: "DEMO EXAMPLE",
    title: "Illustrative public facilities record",
    description: "Sample content · Not an official project",
    color: "bg-amber-500",
  },
  {
    category: "DEMO EXAMPLE",
    title: "Illustrative water services record",
    description: "Sample content · Not an official project",
    color: "bg-sky-500",
  },
];

const waysToExplore = [
  {
    number: "01",
    title: "See the source",
    description:
      "Find the official publication behind each record and verify the original context.",
  },
  {
    number: "02",
    title: "Understand the context",
    description:
      "Explore public audit information with plain-language summaries and clear labels.",
  },
  {
    number: "03",
    title: "Compare with care",
    description:
      "Use country information with its source and limitations made visible.",
  },
];

function MethodologySection() {
  return (
    <section
      aria-labelledby="methodology-heading"
      className="border-y border-[#E8ECE5] bg-white"
      id="methodology"
    >
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#66806F]">
            Methodology
          </p>
          <h2
            className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[#17352F]"
            id="methodology-heading"
          >
            Evidence before interpretation.
          </h2>
        </div>
        <div>
          <p className="text-sm leading-6 text-[#708077]">
            AuditAtlas is designed to make public audit information easier to
            understand without changing what an official source says. Each
            published record should identify its source, clearly distinguish
            reported facts from summaries, and explain when information was
            last checked.
          </p>
          <p className="mt-3 text-sm leading-6 text-[#708077]">
            No official sources or findings are connected in this demo.
            Published methodology and source references will accompany verified
            information.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="border-y border-[#E8ECE5] bg-white"
      id="about"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#66806F]">
            About AuditAtlas
          </p>
          <h2
            className="mt-3 max-w-md text-3xl font-medium leading-tight tracking-[-0.05em] text-[#17352F] sm:text-4xl"
            id="about-heading"
          >
            From public information to public understanding.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#708077]">
            AuditAtlas is a regional civic technology platform focused on public
            audit transparency and citizen understanding.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {waysToExplore.map((item) => (
            <article
              className="border-t border-[#DDE5DC] pt-4"
              key={item.number}
            >
              <p className="text-xs font-semibold tracking-[0.12em] text-[#7E9583]">
                {item.number}
              </p>
              <h3 className="mt-4 text-base font-semibold text-[#27483C]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#7A877E]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoRecordsSection() {
  return (
    <section
      aria-labelledby="demo-records-heading"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      id="demo-records"
    >
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#66806F]">
          Demonstration content
        </p>
        <h2
          className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[#17352F]"
          id="demo-records-heading"
        >
          Example record layouts
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[#708077]">
          These sample cards demonstrate how records could be presented. They
          are not real projects, audit results, or official findings.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {demoRecords.map((record) => (
          <article
            className="rounded-[20px] border border-[#E6EAE3] bg-white p-5 sm:p-6"
            key={record.title}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.12em] text-[#78877D]">
                <span className={`h-2 w-2 rounded-full ${record.color}`} />
                {record.category}
              </span>
              <ArrowUpRight />
            </div>
            <h3 className="mt-7 min-h-12 text-lg font-semibold leading-6 tracking-[-0.025em] text-[#234237]">
              {record.title}
            </h3>
            <p className="mt-1 text-xs text-[#87928A]">{record.description}</p>
            <div className="mt-5 flex items-center justify-between border-t border-[#EDF0EA] pt-4">
              <span className="text-xs text-[#758279]">
                Illustrative content only
              </span>
              <span className="rounded-full bg-[#FFF4DE] px-2.5 py-1 text-[10px] font-semibold text-[#8A672B]">
                DEMO
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9F5] text-[#17352F]">
      <SiteHeader />
      <HomepageSections />
      <AuditReportExplorer />
      <CountryComparisonDashboard />
      <MethodologySection />
      <AboutSection />
      <DemoRecordsSection />
      <SiteFooter />
    </main>
  );
}
