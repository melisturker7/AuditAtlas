"use client";

import { useEffect } from "react";
import {
  CircleMarker,
  MapContainer,
  TileLayer,
  Tooltip,
  ZoomControl,
  useMap,
} from "react-leaflet";
import type { LatLngBoundsExpression, LatLngTuple } from "leaflet";
import {
  auditAtlasCountryColors,
  focusCountries,
  type FocusCountry,
} from "../data/countries";
import type { DemoAuditReport } from "../data/demo-audit-reports";

type CountryLocation = {
  capital: string;
  position: LatLngTuple;
};

const countryLocations: Record<FocusCountry, CountryLocation> = {
  Albania: {
    capital: "Tirana",
    position: [41.3275, 19.8187],
  },
  "Bosnia and Herzegovina": {
    capital: "Sarajevo",
    position: [43.8563, 18.4131],
  },
  Moldova: {
    capital: "Chișinău",
    position: [47.0105, 28.8638],
  },
  Montenegro: {
    capital: "Podgorica",
    position: [42.4304, 19.2594],
  },
  "North Macedonia": {
    capital: "Skopje",
    position: [41.9981, 21.4254],
  },
  Serbia: {
    capital: "Belgrade",
    position: [44.7866, 20.4489],
  },
};

const regionalBounds: LatLngBoundsExpression = [
  [40.5, 17.2],
  [48.8, 30.2],
];

const mapHeights = {
  compact: "h-[300px] w-full sm:h-[340px] lg:h-[380px]",
  standard: "h-[360px] w-full sm:h-[460px] lg:h-[540px]",
} as const;

function FitRegionalBounds() {
  const map = useMap();

  useEffect(() => {
    map.fitBounds(regionalBounds, {
      padding: [28, 28],
      maxZoom: 6,
    });
  }, [map]);

  return null;
}

export function RegionalLeafletMap({
  compact = false,
  onSelectReport,
  reports,
}: {
  compact?: boolean;
  onSelectReport?: (report: DemoAuditReport) => void;
  reports?: readonly DemoAuditReport[];
}) {
  const mapHeightClassName = compact ? mapHeights.compact : mapHeights.standard;

  return (
    <MapContainer
      aria-label={
        reports === undefined
          ? `OpenStreetMap showing country-capital locations for ${focusCountries.join(", ")}`
          : `OpenStreetMap showing ${reports.length} fictional audit demonstration locations`
      }
      center={[44.2, 23.7]}
      className={`${mapHeightClassName} bg-[#E9EFE2]`}
      maxZoom={18}
      minZoom={4}
      scrollWheelZoom={false}
      zoom={5}
      zoomControl={false}
    >
      <FitRegionalBounds />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &middot; Tiles by <a href="https://www.openstreetmap.fr/">OpenStreetMap France</a>'
        maxZoom={19}
        url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
      />
      <ZoomControl position="topright" />
      {reports === undefined
        ? focusCountries.map((country) => {
            const { capital, position } = countryLocations[country];

            return (
              <CircleMarker
                center={position}
                key={country}
                pathOptions={{
                  color: "#FFFFFF",
                  fillColor: auditAtlasCountryColors[country],
                  fillOpacity: 1,
                  weight: 2,
                }}
                radius={7}
              >
                <Tooltip direction="top" offset={[0, -8]} opacity={1}>
                  <span className="font-semibold">{country}</span>
                  <br />
                  <span className="text-xs">{capital}</span>
                </Tooltip>
              </CircleMarker>
            );
          })
        : reports.map((report) => (
            <CircleMarker
              center={report.position}
              key={report.id}
              pathOptions={{
                color: "#FFFFFF",
                fillColor: auditAtlasCountryColors[report.country],
                fillOpacity: 1,
                weight: 2,
              }}
              radius={8}
              eventHandlers={{
                click: () => onSelectReport?.(report),
              }}
            >
              <Tooltip direction="top" offset={[0, -8]} opacity={1}>
                <span className="font-semibold">
                  DEMO DATA — NOT OFFICIAL AUDIT RESULTS
                </span>
                <br />
                <span>
                  {report.municipality} · {report.country}
                </span>
                <br />
                <span className="text-xs">
                  {report.title} · {report.year} · {report.auditType}
                </span>
              </Tooltip>
            </CircleMarker>
          ))}
    </MapContainer>
  );
}
