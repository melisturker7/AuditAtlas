"use client";

import { useMemo, useState } from "react";
import { AuditReportLibrary } from "./audit-report-library";
import { MapPreview } from "./map-preview";
import { MunicipalityDetailPanel } from "./municipality-detail-panel";
import { ReportFilterSelect } from "./report-filter-select";
import {
  auditThemes,
  auditTypes,
  demoAuditReports,
} from "../data/demo-audit-reports";
import { focusCountries } from "../data/countries";

const demoLabel = "DEMO DATA — NOT OFFICIAL AUDIT RESULTS";

const reportYears = Array.from(
  new Set(demoAuditReports.map((report) => report.year)),
).sort((first, second) => second - first);

function DemoDataLabel() {
  return (
    <p className="inline-flex rounded-full border border-[#EADBB7] bg-[#FFF4DE] px-3 py-2 text-[11px] font-bold tracking-[0.04em] text-[#795D28]">
      {demoLabel}
    </p>
  );
}

export function AuditReportExplorer() {
  const [countryFilter, setCountryFilter] = useState("all");
  const [municipalityFilter, setMunicipalityFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [themeFilter, setThemeFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedReport, setSelectedReport] = useState<
    (typeof demoAuditReports)[number] | null
  >(null);

  const municipalities = useMemo(
    () =>
      Array.from(
        new Set(
          demoAuditReports
            .filter(
              (report) =>
                countryFilter === "all" || report.country === countryFilter,
            )
            .map((report) => report.municipality),
        ),
      ).sort((first, second) => first.localeCompare(second)),
    [countryFilter],
  );

  const filteredReports = useMemo(
    () => {
      const normalizedQuery = searchQuery.trim().toLocaleLowerCase();

      return demoAuditReports.filter(
        (report) =>
          (countryFilter === "all" || report.country === countryFilter) &&
          (municipalityFilter === "all" ||
            report.municipality === municipalityFilter) &&
          (yearFilter === "all" || report.year === Number(yearFilter)) &&
          (typeFilter === "all" || report.auditType === typeFilter) &&
          (themeFilter === "all" || report.theme === themeFilter) &&
          (normalizedQuery.length === 0 ||
            [
              report.title,
              report.country,
              report.municipality,
              report.auditType,
              String(report.year),
              report.theme,
              report.auditedArea,
              report.finding,
              report.recommendation,
            ].some((field) =>
              field.toLocaleLowerCase().includes(normalizedQuery),
            )),
      );
    },
    [
      countryFilter,
      municipalityFilter,
      yearFilter,
      typeFilter,
      themeFilter,
      searchQuery,
    ],
  );

  return (
    <section
      aria-labelledby="audit-reports-heading"
      className="border-y border-[#E8ECE5] bg-white"
      id="audit-reports"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#66806F]">
              Audit report explorer
            </p>
            <h2
              className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[#17352F]"
              id="audit-reports-heading"
            >
              Explore a sample audit dataset.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#708077]">
              Fictional reports, municipalities, findings, recommendations,
              and follow-up statuses demonstrate how public information could
              be explored. None describe real audits or official results.
            </p>
          </div>
          <DemoDataLabel />
        </div>

        <div
          aria-label="Filter demonstration audit reports"
          className="mt-8 grid gap-4 rounded-2xl border border-[#E5EAE2] bg-[#F8F9F5] p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-5"
          role="group"
        >
          <ReportFilterSelect
            allLabel="All countries"
            label="Country"
            onChange={(value) => {
              setCountryFilter(value);
              setMunicipalityFilter("all");
              setSelectedReport(null);
            }}
            options={focusCountries}
            value={countryFilter}
          />
          <ReportFilterSelect
            allLabel="All municipalities"
            disabled={municipalities.length === 0}
            label="Municipality"
            onChange={(value) => {
              setMunicipalityFilter(value);
              setSelectedReport(null);
            }}
            options={municipalities}
            value={municipalityFilter}
          />
          <ReportFilterSelect
            allLabel="All years"
            label="Audit year"
            onChange={(value) => {
              setYearFilter(value);
              setSelectedReport(null);
            }}
            options={reportYears.map(String)}
            value={yearFilter}
          />
          <ReportFilterSelect
            allLabel="All audit types"
            label="Audit type"
            onChange={(value) => {
              setTypeFilter(value);
              setSelectedReport(null);
            }}
            options={auditTypes}
            value={typeFilter}
          />
          <ReportFilterSelect
            allLabel="All themes"
            label="Theme"
            onChange={(value) => {
              setThemeFilter(value);
              setSelectedReport(null);
            }}
            options={auditThemes}
            value={themeFilter}
          />
        </div>

        <div className="mt-6 grid gap-8">
          <div>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-[#29483B]">
                Map results
              </h3>
              <p className="text-xs text-[#718177]" aria-live="polite">
                {filteredReports.length} synthetic{" "}
                {filteredReports.length === 1 ? "report" : "reports"}
              </p>
            </div>
            <DemoDataLabel />
            <div className="mt-3">
              <MapPreview
                onSelectReport={setSelectedReport}
                reports={filteredReports}
              />
            </div>
            <p className="mt-3 text-xs leading-5 text-[#718177]">
              Markers show fictional municipality locations for demonstration
              only. They are not official audit locations.
            </p>
          </div>

          <AuditReportLibrary
            onSearchChange={(query) => {
              setSearchQuery(query);
              setSelectedReport(null);
            }}
            onSelectReport={setSelectedReport}
            reports={filteredReports}
            searchQuery={searchQuery}
          />
          {selectedReport && (
            <div className="mt-1">
              <MunicipalityDetailPanel
                onClose={() => setSelectedReport(null)}
                report={selectedReport}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
