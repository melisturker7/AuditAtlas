"use client";

import dynamic from "next/dynamic";
import type { DemoAuditReport } from "../data/demo-audit-reports";

const RegionalLeafletMap = dynamic(
  () => import("./regional-leaflet-map").then((module) => module.RegionalLeafletMap),
  {
    ssr: false,
    loading: () => (
      <div
        aria-label="Loading the OpenStreetMap preview"
        className="flex h-[360px] items-center justify-center bg-[#E9EFE2] text-sm text-[#63786B] sm:h-[460px] lg:h-[540px]"
        role="status"
      >
        Loading regional map…
      </div>
    ),
  },
);

export function MapPreview({
  onSelectReport,
  reports,
}: {
  onSelectReport?: (report: DemoAuditReport) => void;
  reports?: readonly DemoAuditReport[];
}) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-[#E1E8DD] bg-[#E9EFE2]">
      <RegionalLeafletMap
        onSelectReport={onSelectReport}
        reports={reports}
      />
    </div>
  );
}
