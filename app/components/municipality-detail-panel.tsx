import type { ReactNode } from "react";
import type {
  DemoAuditReport,
  FollowUpStatus,
} from "../data/demo-audit-reports";

const demoLabel = "DEMO DATA — NOT OFFICIAL AUDIT RESULTS";

function DemoWarning() {
  return (
    <p className="rounded-xl border border-[#EADBB7] bg-[#FFF4DE] px-3 py-2 text-[11px] font-bold leading-5 tracking-[0.02em] text-[#795D28]">
      {demoLabel}
    </p>
  );
}

function RecommendationStatusBadge({
  status,
}: {
  status: FollowUpStatus;
}) {
  const statusStyles: Record<FollowUpStatus, string> = {
    "Not started": "bg-[#F2F4F1] text-[#596A60]",
    "In progress": "bg-[#FFF4DE] text-[#795D28]",
    Completed: "bg-[#EAF3EA] text-[#315E4C]",
  };

  return (
    <span
      className={`inline-flex w-fit rounded-full px-3 py-1.5 text-xs font-semibold ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

function CitizenAnswer({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-[#E8ECE5] pt-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#829187]">
        {String(number).padStart(2, "0")}
      </p>
      <h4 className="mt-2 text-sm font-semibold leading-5 text-[#29483B]">
        {title}
      </h4>
      <div className="mt-2 text-sm leading-6 text-[#687A70]">{children}</div>
    </section>
  );
}

export function MunicipalityDetailPanel({
  report,
  onClose,
}: {
  report: DemoAuditReport;
  onClose: () => void;
}) {
  return (
    <aside
      aria-labelledby="municipality-detail-heading"
      aria-live="polite"
      className="rounded-2xl border border-[#E5EAE2] bg-white p-5 shadow-sm sm:p-7"
      id="municipality-detail"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <DemoWarning />
          <h3
            className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#234237]"
            id="municipality-detail-heading"
          >
            Understand Your Municipality
          </h3>
          <p className="mt-2 text-lg font-semibold text-[#315E4C]">
            {report.municipality}
          </p>
          <p className="mt-1 text-sm text-[#718177]">
            {report.country} · {report.year} · {report.auditType} audit ·{" "}
            {report.theme} · 1 synthetic finding
          </p>
        </div>
        <button
          className="w-fit shrink-0 rounded-full border border-[#DDE5DC] px-3.5 py-2 text-xs font-semibold text-[#426057] transition hover:bg-[#F2F5EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4C7767]"
          onClick={onClose}
          type="button"
        >
          Close details
        </button>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <CitizenAnswer number={1} title="What was audited?">
          <p>{report.auditedArea}</p>
          <p className="mt-2 text-xs text-[#829187]">
            Sample report: {report.title}
          </p>
        </CitizenAnswer>

        <CitizenAnswer number={2} title="What did auditors find?">
          <p className="font-medium text-[#52695C]">
            Finding (fictional demonstration)
          </p>
          <p className="mt-1">{report.finding}</p>
        </CitizenAnswer>

        <CitizenAnswer number={3} title="Why does this matter?">
          <p className="font-medium text-[#52695C]">
            Plain-language context, not an audit finding
          </p>
          <p className="mt-1">{report.whyItMatters}</p>
        </CitizenAnswer>

        <CitizenAnswer number={4} title="What did auditors recommend?">
          <p>{report.recommendation}</p>
          <div className="mt-3 flex flex-col items-start gap-1.5">
            <span className="text-xs font-semibold text-[#52695C]">
              Recommendation status (fictional)
            </span>
            <RecommendationStatusBadge status={report.followUpStatus} />
          </div>
        </CitizenAnswer>

        <CitizenAnswer number={5} title="What happened next?">
          <RecommendationStatusBadge status={report.followUpStatus} />
          <p className="mt-2">{report.followUpSummary}</p>
          <p className="mt-2 text-xs text-[#829187]">
            This status is part of the synthetic demonstration dataset only.
          </p>
        </CitizenAnswer>

        <CitizenAnswer number={6} title="Read the original report">
          <p>
            This fictional example has no original or official report. The
            linked item is only a demonstration record.
          </p>
          <a
            className="mt-3 inline-flex min-h-11 items-center font-semibold text-[#315E4C] underline decoration-[#AFC2B0] underline-offset-4 hover:text-[#17352F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4C7767]"
            href={`#source-report-${report.id}`}
          >
            View the demo report record
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </a>
        </CitizenAnswer>
      </div>
    </aside>
  );
}
