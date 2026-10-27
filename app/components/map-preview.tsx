"use client";

import dynamic from "next/dynamic";
import type { DemoAuditReport } from "../data/demo-audit-reports";

const RegionalLeafletMap = dynamic(
  () =>
    import("./regional-leaflet-map").then(
      (module) => module.RegionalLeafletMap,
    ),
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

const CompactRegionalLeafletMap = dynamic(
  () =>
    import("./regional-leaflet-map").then(
      (module) => module.RegionalLeafletMap,
    ),
  {
    ssr: false,
    loading: () => (
      <div
        aria-label="Loading the OpenStreetMap preview"
        className="flex h-[300px] items-center justify-center bg-[#E9EFE2] text-sm text-[#63786B] sm:h-[340px] lg:h-[380px]"
        role="status"
      >
        Loading regional map…
      </div>
    ),
  },
);

export function MapPreview({
  compact = false,
  onSelectReport,
  reports,
}: {
  compact?: boolean;
  onSelectReport?: (report: DemoAuditReport) => void;
  reports?: readonly DemoAuditReport[];
}) {
  const LeafletMap = compact ? CompactRegionalLeafletMap : RegionalLeafletMap;

  return (
    <div className="overflow-hidden rounded-[18px] border border-[#E1E8DD] bg-[#E9EFE2]">
      <LeafletMap
        compact={compact}
        onSelectReport={onSelectReport}
        reports={reports}
      />
    </div>
  );
}
