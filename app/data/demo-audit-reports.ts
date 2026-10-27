import type { FocusCountry } from "./countries";
import type { LatLngTuple } from "leaflet";

export const auditTypes = [
  "Financial",
  "Compliance",
  "Performance",
] as const;

export type AuditType = (typeof auditTypes)[number];

export const auditThemes = [
  "Procurement & financial controls",
  "Community facilities",
  "Grant management",
  "Fleet management",
  "Education services",
  "Water services",
  "Public asset management",
  "Road maintenance",
  "Budget oversight",
  "Social services",
  "Public lighting",
] as const;

export type AuditTheme = (typeof auditThemes)[number];

export type FollowUpStatus = "Not started" | "In progress" | "Completed";

export type DemoAuditReport = {
  id: string;
  country: FocusCountry;
  municipality: string;
  title: string;
  auditedArea: string;
  year: number;
  auditType: AuditType;
  theme: AuditTheme;
  finding: string;
  whyItMatters: string;
  recommendation: string;
  followUpStatus: FollowUpStatus;
  followUpSummary: string;
  position: LatLngTuple;
};

export const demoAuditReports: DemoAuditReport[] = [
  {
    id: "al-2022-01",
    country: "Albania",
    municipality: "Demo Municipality Arberfield",
    title: "Sample procurement controls review",
    auditedArea:
      "How the municipality recorded purchases and checked that ordered goods arrived.",
    year: 2022,
    auditType: "Financial",
    theme: "Procurement & financial controls",
    finding:
      "In this fictional example, purchase records were not consistently reconciled with delivery notes.",
    whyItMatters:
      "Checking orders against deliveries helps a municipality keep reliable records of how public money is spent.",
    recommendation:
      "Introduce a documented reconciliation step and retain supporting records.",
    followUpStatus: "In progress",
    followUpSummary:
      "In this fictional example, the recommended checking process has started but is not marked complete.",
    position: [41.15, 20.05],
  },
  {
    id: "al-2024-02",
    country: "Albania",
    municipality: "Demo Municipality Riverstone",
    title: "Sample community facilities review",
    auditedArea:
      "How the municipality planned and updated maintenance for community facilities.",
    year: 2024,
    auditType: "Performance",
    theme: "Community facilities",
    finding:
      "In this fictional example, maintenance schedules were not consistently updated.",
    whyItMatters:
      "Up-to-date schedules can help staff plan repairs and keep shared facilities usable.",
    recommendation:
      "Assign schedule ownership and review maintenance records quarterly.",
    followUpStatus: "Not started",
    followUpSummary:
      "In this fictional example, work on the recommendation has not yet been recorded as started.",
    position: [40.72, 19.62],
  },
  {
    id: "ba-2023-01",
    country: "Bosnia and Herzegovina",
    municipality: "Demo Municipality Pine Crossing",
    title: "Sample grant reporting review",
    auditedArea:
      "How grant documents were collected and filed for review.",
    year: 2023,
    auditType: "Compliance",
    theme: "Grant management",
    finding:
      "In this fictional example, supporting documents were filed inconsistently across grant records.",
    whyItMatters:
      "Consistent records make it easier to check that grant decisions and spending can be understood later.",
    recommendation:
      "Use a common filing checklist for each grant and record completion.",
    followUpStatus: "Completed",
    followUpSummary:
      "In this fictional example, the recommendation is marked completed in the demonstration record.",
    position: [44.18, 17.82],
  },
  {
    id: "ba-2025-02",
    country: "Bosnia and Herzegovina",
    municipality: "Demo Municipality Meadowridge",
    title: "Sample fleet expenditure review",
    auditedArea:
      "How vehicle use was recorded and approved.",
    year: 2025,
    auditType: "Financial",
    theme: "Fleet management",
    finding:
      "In this fictional example, vehicle-use logs did not always include an approving officer.",
    whyItMatters:
      "Clear approvals help show who authorized vehicle use and support accurate public expense records.",
    recommendation:
      "Require supervisor approval on each vehicle-use record.",
    followUpStatus: "In progress",
    followUpSummary:
      "In this fictional example, the recommended approval process has started but is not marked complete.",
    position: [43.32, 18.72],
  },
  {
    id: "md-2022-01",
    country: "Moldova",
    municipality: "Demo Municipality Orchard Vale",
    title: "Sample school maintenance review",
    auditedArea:
      "How maintenance requests for schools were prioritized.",
    year: 2022,
    auditType: "Performance",
    theme: "Education services",
    finding:
      "In this fictional example, maintenance requests were not prioritized using documented criteria.",
    whyItMatters:
      "Shared criteria can help staff explain which repairs are handled first and why.",
    recommendation:
      "Publish a simple prioritization framework and retain decision notes.",
    followUpStatus: "Not started",
    followUpSummary:
      "In this fictional example, work on the recommendation has not yet been recorded as started.",
    position: [47.18, 28.08],
  },
  {
    id: "md-2024-02",
    country: "Moldova",
    municipality: "Demo Municipality Eastbank",
    title: "Sample local purchasing review",
    auditedArea:
      "Whether purchasing records included conflict-of-interest declarations.",
    year: 2024,
    auditType: "Compliance",
    theme: "Procurement & financial controls",
    finding:
      "In this fictional example, purchase files did not consistently include a conflict-of-interest declaration.",
    whyItMatters:
      "Declarations help make potential conflicts visible when purchasing decisions are made.",
    recommendation:
      "Add a declaration checklist to the purchasing file before approval.",
    followUpStatus: "Completed",
    followUpSummary:
      "In this fictional example, the recommendation is marked completed in the demonstration record.",
    position: [46.82, 29.08],
  },
  {
    id: "me-2023-01",
    country: "Montenegro",
    municipality: "Demo Municipality Stone Harbor",
    title: "Sample water services review",
    auditedArea:
      "How service interruptions were recorded and reviewed.",
    year: 2023,
    auditType: "Performance",
    theme: "Water services",
    finding:
      "In this fictional example, service interruption logs were not summarized for management review.",
    whyItMatters:
      "Summaries can help managers see recurring interruptions and consider what action may be needed.",
    recommendation:
      "Prepare a periodic service summary and document management decisions.",
    followUpStatus: "In progress",
    followUpSummary:
      "In this fictional example, the recommended summary process has started but is not marked complete.",
    position: [42.72, 19.18],
  },
  {
    id: "me-2025-02",
    country: "Montenegro",
    municipality: "Demo Municipality Green Ridge",
    title: "Sample asset register review",
    auditedArea:
      "Whether the asset register matched checks of physical items.",
    year: 2025,
    auditType: "Financial",
    theme: "Public asset management",
    finding:
      "In this fictional example, asset records were not consistently checked against physical inventories.",
    whyItMatters:
      "Regular checks can help keep records of publicly owned items accurate.",
    recommendation:
      "Schedule periodic inventory checks and record any reconciliations.",
    followUpStatus: "Not started",
    followUpSummary:
      "In this fictional example, work on the recommendation has not yet been recorded as started.",
    position: [42.5, 19.48],
  },
  {
    id: "mk-2022-01",
    country: "North Macedonia",
    municipality: "Demo Municipality Sunvale",
    title: "Sample road maintenance review",
    auditedArea:
      "Whether completed road maintenance work had recorded inspection dates.",
    year: 2022,
    auditType: "Performance",
    theme: "Road maintenance",
    finding:
      "In this fictional example, work completion records did not consistently note inspection dates.",
    whyItMatters:
      "Inspection dates help create a record of when completed work was checked.",
    recommendation:
      "Record inspection dates and responsible reviewers for each completed task.",
    followUpStatus: "Completed",
    followUpSummary:
      "In this fictional example, the recommendation is marked completed in the demonstration record.",
    position: [41.5, 21.48],
  },
  {
    id: "mk-2024-02",
    country: "North Macedonia",
    municipality: "Demo Municipality Brookfield",
    title: "Sample budget monitoring review",
    auditedArea:
      "How explanations for budget differences were recorded.",
    year: 2024,
    auditType: "Financial",
    theme: "Budget oversight",
    finding:
      "In this fictional example, budget variance explanations were not recorded in a consistent format.",
    whyItMatters:
      "Consistent explanations can help readers understand why planned and actual spending differ.",
    recommendation:
      "Adopt a standard variance note and review it during budget monitoring.",
    followUpStatus: "In progress",
    followUpSummary:
      "In this fictional example, the recommended note and review process has started but is not marked complete.",
    position: [41.3, 22.02],
  },
  {
    id: "rs-2023-01",
    country: "Serbia",
    municipality: "Demo Municipality Silver Meadow",
    title: "Sample social services review",
    auditedArea:
      "Whether social-service case files included a completed review checklist.",
    year: 2023,
    auditType: "Compliance",
    theme: "Social services",
    finding:
      "In this fictional example, case-file checklists were not consistently signed off.",
    whyItMatters:
      "A completed checklist can help staff confirm that required steps were considered before a case is closed.",
    recommendation:
      "Include a dated checklist sign-off before closing each case file.",
    followUpStatus: "Not started",
    followUpSummary:
      "In this fictional example, work on the recommendation has not yet been recorded as started.",
    position: [44.18, 20.78],
  },
  {
    id: "rs-2025-02",
    country: "Serbia",
    municipality: "Demo Municipality Blue Orchard",
    title: "Sample public lighting review",
    auditedArea:
      "How repair times for public lighting were tracked against service targets.",
    year: 2025,
    auditType: "Performance",
    theme: "Public lighting",
    finding:
      "In this fictional example, repair completion times were not summarized against service targets.",
    whyItMatters:
      "Tracking repair times can help the municipality see whether service commitments are being met.",
    recommendation:
      "Track completion times and review trends against stated service targets.",
    followUpStatus: "Completed",
    followUpSummary:
      "In this fictional example, the recommendation is marked completed in the demonstration record.",
    position: [45.02, 19.82],
  },
];
