"use client";

import { useMemo, useState } from "react";
import type { DemoAuditReport, FollowUpStatus } from "../data/demo-audit-reports";

const demoLabel = "DEMO DATA — NOT OFFICIAL AUDIT RESULTS";

const reportSortOptions = ["newest", "oldest", "title", "country"] as const;
type ReportSort = (typeof reportSortOptions)[number];

function isReportSort(value: string): value is ReportSort {
  return reportSortOptions.some((option) => option === value);
}

function FollowUpBadge({ status }: { status: FollowUpStatus }) {
  const styles: Record<FollowUpStatus, string> = {
    "Not started": "bg-[#F2F4F1] text-[#596A60]",
    "In progress": "bg-[#FFF4DE] text-[#795D28]",
    Completed: "bg-[#EAF3EA] text-[#315E4C]",
  };

  return (
    <span
      className={`inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function AuditReportCard({
  report,
  onSelectReport,
}: {
  report: DemoAuditReport;
  onSelectReport: (report: DemoAuditReport) => void;
}) {
  return (
    <article
      className="flex h-full flex-col rounded-2xl border border-[#E5EAE2] bg-white p-4 sm:p-5"
      id={`source-report-${report.id}`}
    >
      <p className="text-[10px] font-bold leading-4 tracking-[0.04em] text-[#795D28]">
        {demoLabel}
      </p>
      <h4 className="mt-3 text-base font-semibold leading-6 text-[#234237]">
        {report.title}
      </h4>

      <dl className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 border-y border-[#EDF0EA] py-4 text-sm">
        <div>
          <dt className="text-[11px] font-semibold text-[#829187]">Country</dt>
          <dd className="mt-1 text-xs font-medium leading-5 text-[#426057]">
            {report.country}
          </dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-[#829187]">
            Municipality
          </dt>
          <dd className="mt-1 text-xs font-medium leading-5 text-[#426057]">
            {report.municipality}
          </dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-[#829187]">
            Audit type
          </dt>
          <dd className="mt-1 text-xs font-medium text-[#426057]">
            {report.auditType}
          </dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-[#829187]">
            Audit year
          </dt>
          <dd className="mt-1 text-xs font-medium text-[#426057]">
            {report.year}
          </dd>
        </div>
        <div className="col-span-2">
          <dt className="text-[11px] font-semibold text-[#829187]">Theme</dt>
          <dd className="mt-1 text-xs font-medium leading-5 text-[#426057]">
            {report.theme}
          </dd>
        </div>
      </dl>

      <div className="flex-1 pt-4">
        <p className="text-xs font-semibold text-[#52695C]">
          Short summary (fictional)
        </p>
        <p className="mt-1 line-clamp-3 text-sm leading-5 text-[#687A70]">
          {report.finding}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#EDF0EA] pt-4">
        <p className="text-xs text-[#687A70]">
          <span className="font-semibold text-[#426057]">
            {report.recommendation ? 1 : 0}
          </span>{" "}
          synthetic recommendation
        </p>
        <FollowUpBadge status={report.followUpStatus} />
      </div>

      <p className="mt-3 text-xs leading-5 text-[#829187]">
        No official source report is connected to this fictional example.
      </p>
      <a
        className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-[#315E4C] underline decoration-[#AFC2B0] underline-offset-4 hover:text-[#17352F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4C7767]"
        href={`#source-report-${report.id}`}
        onClick={() => onSelectReport(report)}
      >
        View demo report record
        <span aria-hidden="true" className="ml-2">
          →
        </span>
      </a>
    </article>
  );
}

export function AuditReportLibrary({
  reports,
  searchQuery,
  onSearchChange,
  onSelectReport,
}: {
  reports: readonly DemoAuditReport[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectReport: (report: DemoAuditReport) => void;
}) {
  const [sortBy, setSortBy] = useState<ReportSort>("newest");

  const sortedReports = useMemo(() => {
    const results = [...reports];

    switch (sortBy) {
      case "oldest":
        return results.sort(
          (first, second) =>
            first.year - second.year || first.title.localeCompare(second.title),
        );
      case "title":
        return results.sort((first, second) =>
          first.title.localeCompare(second.title),
        );
      case "country":
        return results.sort(
          (first, second) =>
            first.country.localeCompare(second.country) ||
            first.title.localeCompare(second.title),
        );
      case "newest":
        return results.sort(
          (first, second) =>
            second.year - first.year || first.title.localeCompare(second.title),
        );
    }
  }, [reports, sortBy]);

  return (
    <section aria-labelledby="report-library-heading">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3
            className="text-xl font-semibold tracking-[-0.03em] text-[#29483B]"
            id="report-library-heading"
          >
            Audit Report Library
          </h3>
          <p className="mt-1 text-xs leading-5 text-[#718177]">
            Search and sort synthetic reports. Source links open demo records,
            not official publications.
          </p>
        </div>
        <p aria-live="polite" className="text-xs text-[#718177]">
          {reports.length} {reports.length === 1 ? "report" : "reports"}
        </p>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
        <label className="grid gap-2 text-xs font-semibold text-[#52695C]">
          Search reports
          <input
            className="min-h-11 rounded-xl border border-[#DDE5DC] bg-white px-3 text-sm font-normal text-[#29483B] placeholder:text-[#9AA69D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4C7767]"
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search title, country, municipality, summary…"
            type="search"
            value={searchQuery}
          />
        </label>
        <label className="grid gap-2 text-xs font-semibold text-[#52695C] sm:w-48">
          Sort by
          <select
            className="min-h-11 rounded-xl border border-[#DDE5DC] bg-white px-3 text-sm font-normal text-[#29483B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4C7767]"
            onChange={(event) => {
              if (isReportSort(event.target.value)) {
                setSortBy(event.target.value);
              }
            }}
            value={sortBy}
          >
            <option value="newest">Year: newest first</option>
            <option value="oldest">Year: oldest first</option>
            <option value="title">Report title: A–Z</option>
            <option value="country">Country: A–Z</option>
          </select>
        </label>
      </div>

      {sortedReports.length > 0 ? (
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {sortedReports.map((report) => (
            <AuditReportCard
              key={report.id}
              onSelectReport={onSelectReport}
              report={report}
            />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-[#DDE5DC] bg-[#F8F9F5] px-5 py-10 text-center">
          <p className="text-sm font-semibold text-[#426057]">
            No demo reports found
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#718177]">
            Try another search phrase or change the selected filters to see
            more results.
          </p>
        </div>
      )}
    </section>
  );
}
