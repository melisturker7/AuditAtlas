"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  auditAtlasCountryColors,
  focusCountries,
  type FocusCountry,
} from "../data/countries";
import {
  auditThemes,
  demoAuditReports,
  type FollowUpStatus,
} from "../data/demo-audit-reports";

const followUpStatuses: FollowUpStatus[] = [
  "Not started",
  "In progress",
  "Completed",
];

const followUpColors: Record<FollowUpStatus, string> = {
  "Not started": "#C7D0C8",
  "In progress": "#D49B37",
  Completed: "#4C7767",
};

const demoLabel = "DEMO DATA — NOT OFFICIAL AUDIT RESULTS";

function CountrySelector({
  selectedCountries,
  onToggle,
}: {
  selectedCountries: readonly FocusCountry[];
  onToggle: (country: FocusCountry) => void;
}) {
  return (
    <fieldset className="rounded-2xl border border-[#E5EAE2] bg-white p-4 sm:p-5">
      <legend className="px-2 text-sm font-semibold text-[#29483B]">
        Select countries to compare
      </legend>
      <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {focusCountries.map((country) => {
          const selected = selectedCountries.includes(country);

          return (
            <label
              className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border px-3 py-2 text-sm transition focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#4C7767] ${
                selected
                  ? "border-[#DDE5DC] bg-[#F8F9F5] text-[#29483B]"
                  : "border-transparent text-[#718177] hover:border-[#E5EAE2] hover:bg-[#FAFBF9]"
              }`}
              key={country}
            >
              <input
                checked={selected}
                className="h-4 w-4 accent-[#315E4C]"
                onChange={() => onToggle(country)}
                type="checkbox"
              />
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: auditAtlasCountryColors[country] }}
              />
              <span>{country}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

function ChartCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <article className="min-w-0 rounded-2xl border border-[#E5EAE2] bg-white p-4 sm:p-5">
      <h3 className="text-sm font-semibold text-[#29483B]">{title}</h3>
      <p className="mt-1 min-h-10 text-xs leading-5 text-[#718177]">
        {description}
      </p>
      {children}
    </article>
  );
}

export function CountryComparisonDashboard() {
  const [selectedCountries, setSelectedCountries] =
    useState<FocusCountry[]>([...focusCountries]);

  const comparisonData = useMemo(
    () =>
      selectedCountries.map((country) => {
        const reports = demoAuditReports.filter(
          (report) => report.country === country,
        );

        return {
          country,
          reports: reports.length,
          findings: reports.length,
          recommendations: reports.filter(
            (report) => report.recommendation.length > 0,
          ).length,
        };
      }),
    [selectedCountries],
  );

  const followUpData = useMemo(
    () =>
      selectedCountries.map((country) => {
        const countryReports = demoAuditReports.filter(
          (report) => report.country === country,
        );

        return {
          country,
          ...Object.fromEntries(
            followUpStatuses.map((status) => [
              status,
              countryReports.filter((report) => report.followUpStatus === status)
                .length,
            ]),
          ),
        };
      }),
    [selectedCountries],
  );

  const themeData = useMemo(
    () =>
      auditThemes
        .map((theme) => {
          const data: Record<string, string | number> = { theme };
          for (const country of selectedCountries) {
            data[country] = demoAuditReports.filter(
              (report) => report.country === country && report.theme === theme,
            ).length;
          }
          return data;
        })
        .filter((theme) =>
          selectedCountries.some((country) => Number(theme[country]) > 0),
        ),
    [selectedCountries],
  );

  function toggleCountry(country: FocusCountry) {
    setSelectedCountries((current) =>
      current.includes(country)
        ? current.filter((selected) => selected !== country)
        : focusCountries.filter(
            (available) => available === country || current.includes(available),
          ),
    );
  }

  return (
    <section
      aria-labelledby="compare-countries-heading"
      className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12"
      id="compare-countries"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#66806F]">
            Compare countries
          </p>
          <h2
            className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[#17352F]"
            id="compare-countries-heading"
          >
            A shared regional view.
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#708077]">
            Compare the demonstration reports, findings, recommendations,
            follow-up statuses, and themes across selected countries.
          </p>
        </div>
        <p className="inline-flex w-fit rounded-full border border-[#EADBB7] bg-[#FFF4DE] px-3 py-2 text-[11px] font-bold leading-5 text-[#795D28]">
          {demoLabel}
        </p>
      </div>

      <div className="mt-7">
        <CountrySelector
          onToggle={toggleCountry}
          selectedCountries={selectedCountries}
        />
      </div>

      {selectedCountries.length > 0 ? (
        <>
          <div className="mt-6 grid gap-4 xl:grid-cols-2">
            <ChartCard
              description="Counts from synthetic records. Each sample report contains one demonstration finding and one recommendation."
              title="Reports, findings & recommendations"
            >
              <div className="h-72 w-full" role="img" aria-label="Grouped bar chart comparing demo audit reports, findings, and recommendations by country">
                <ResponsiveContainer height="100%" width="100%">
                  <BarChart
                    data={comparisonData}
                    margin={{ top: 8, right: 8, bottom: 8, left: -18 }}
                  >
                    <CartesianGrid stroke="#E9EDE5" strokeDasharray="3 3" />
                    <XAxis
                      axisLine={false}
                      dataKey="country"
                      tick={{ fill: "#687A70", fontSize: 11 }}
                      tickLine={false}
                      tickMargin={8}
                    />
                    <YAxis
                      allowDecimals={false}
                      axisLine={false}
                      tick={{ fill: "#829187", fontSize: 11 }}
                      tickLine={false}
                      width={30}
                    />
                    <Tooltip
                      contentStyle={{
                        borderColor: "#E5EAE2",
                        borderRadius: 12,
                        fontSize: 12,
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    <Bar dataKey="reports" fill="#315E4C" name="Reports" />
                    <Bar dataKey="findings" fill="#7C9A83" name="Findings" />
                    <Bar
                      dataKey="recommendations"
                      fill="#D49B37"
                      name="Recommendations"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>

            <ChartCard
              description="Number of fictional recommendations in each follow-up state."
              title="Recommendation follow-up"
            >
              <div className="h-72 w-full" role="img" aria-label="Stacked bar chart comparing fictional recommendation follow-up status by country">
                <ResponsiveContainer height="100%" width="100%">
                  <BarChart
                    data={followUpData}
                    margin={{ top: 8, right: 8, bottom: 8, left: -18 }}
                  >
                    <CartesianGrid stroke="#E9EDE5" strokeDasharray="3 3" />
                    <XAxis
                      axisLine={false}
                      dataKey="country"
                      tick={{ fill: "#687A70", fontSize: 11 }}
                      tickLine={false}
                      tickMargin={8}
                    />
                    <YAxis
                      allowDecimals={false}
                      axisLine={false}
                      tick={{ fill: "#829187", fontSize: 11 }}
                      tickLine={false}
                      width={30}
                    />
                    <Tooltip
                      contentStyle={{
                        borderColor: "#E5EAE2",
                        borderRadius: 12,
                        fontSize: 12,
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    {followUpStatuses.map((status) => (
                      <Bar
                        dataKey={status}
                        fill={followUpColors[status]}
                        key={status}
                        name={status}
                        stackId="follow-up"
                      />
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>

            <ChartCard
              description="Synthetic report counts by theme. Country colors match the AuditAtlas palette."
              title="Audit themes by country"
            >
              <div
                className="w-full"
                role="img"
                aria-label="Grouped bar chart comparing demo audit themes by selected country"
                style={{ height: Math.max(260, themeData.length * 46) }}
              >
                <ResponsiveContainer height="100%" width="100%">
                  <BarChart
                    data={themeData}
                    layout="vertical"
                    margin={{ top: 8, right: 12, bottom: 8, left: 12 }}
                  >
                    <CartesianGrid
                      horizontal={false}
                      stroke="#E9EDE5"
                      strokeDasharray="3 3"
                    />
                    <XAxis
                      allowDecimals={false}
                      axisLine={false}
                      tick={{ fill: "#829187", fontSize: 11 }}
                      tickLine={false}
                      type="number"
                    />
                    <YAxis
                      axisLine={false}
                      dataKey="theme"
                      tick={{ fill: "#687A70", fontSize: 10 }}
                      tickLine={false}
                      type="category"
                      width={148}
                    />
                    <Tooltip
                      contentStyle={{
                        borderColor: "#E5EAE2",
                        borderRadius: 12,
                        fontSize: 12,
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    {selectedCountries.map((country) => (
                      <Bar
                        dataKey={country}
                        fill={auditAtlasCountryColors[country]}
                        key={country}
                        name={country}
                      />
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>
          </div>

          <p className="mt-5 text-xs leading-5 text-[#718177]">
            Visualizations summarize fictional demonstration records only.
            They do not represent official audit activity, findings, or
            performance comparisons.
          </p>
        </>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-[#DDE5DC] bg-white px-5 py-10 text-center">
          <p className="text-sm font-semibold text-[#426057]">
            Select countries to compare
          </p>
          <p className="mt-2 text-sm leading-6 text-[#718177]">
            Choose one or more countries above to display the demo charts.
          </p>
        </div>
      )}
    </section>
  );
}
