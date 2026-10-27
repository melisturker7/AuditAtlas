export function RegionalMap({ idPrefix }: { idPrefix: string }) {
  return (
    <svg
      aria-label="Schematic locator showing the six AuditAtlas focus countries; not to scale"
      className="h-full w-full"
      fill="none"
      role="img"
      viewBox="0 0 640 440"
    >
      <defs>
        <pattern
          height="28"
          id={`${idPrefix}-map-grid`}
          patternUnits="userSpaceOnUse"
          width="28"
        >
          <path d="M28 0H0v28" stroke="#DCE6D8" strokeOpacity=".55" />
        </pattern>
        <linearGradient
          id={`${idPrefix}-land-fill`}
          x1="186"
          x2="473"
          y1="95"
          y2="347"
        >
          <stop stopColor="#E2EBDD" />
          <stop offset="1" stopColor="#C6D8C2" />
        </linearGradient>
      </defs>
      <rect fill={`url(#${idPrefix}-map-grid)`} height="440" width="640" />

      <g stroke="#A6B9A4" strokeLinejoin="round" strokeWidth="2">
        <path
          d="m145 117 59-25 54 10 21 31-13 33-39 11-37-14-45 8-23-25 23-29Z"
          fill="#E8EEE2"
        />
        <path
          d="m147 198 29-25 39 9 20 28-13 34-35 9-30-17-10-38Z"
          fill="#E8EEE2"
        />
        <path
          d="m182 253 34 3 21 27-12 38-29 21-24-19 3-33 7-37Z"
          fill="#E8EEE2"
        />
        <path
          d="m251 179 30-26 36 9 18 27-17 24-39 5-28-16v-23Z"
          fill="#E8EEE2"
        />
        <path
          d="m249 249 30-21 31 12 15 27-17 31-37 5-27-23 5-31Z"
          fill="#E8EEE2"
        />
        <path
          d="m432 102 51-19 47 13 19 30-23 26-46-5-30 15-29-20 11-40Z"
          fill="#E8EEE2"
        />
        <path
          d="m202 121 28-20 29 11 13 31-16 27-38 8-22-25 6-32Z"
          fill={`url(#${idPrefix}-land-fill)`}
        />
        <path
          d="m217 180 27-16 26 12 14 27-11 26-30 11-27-14-10-25 11-21Z"
          fill={`url(#${idPrefix}-land-fill)`}
        />
        <path
          d="m185 224 17-11 17 8 7 13-10 13-19-1-12-9Z"
          fill={`url(#${idPrefix}-land-fill)`}
        />
        <path
          d="m189 246 15 2 10 17-5 27-7 22-12 15-8-15 4-26-2-22 5-20Z"
          fill={`url(#${idPrefix}-land-fill)`}
        />
        <path
          d="m274 229 23-9 22 15 12 27-12 28-29 16-20-18 4-31 0-28Z"
          fill={`url(#${idPrefix}-land-fill)`}
        />
        <path
          d="m440 105 35-13 41 12 15 24-23 18-34-5-30 12-17-19 13-29Z"
          fill={`url(#${idPrefix}-land-fill)`}
        />
      </g>

      <g
        fill="#365649"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fontWeight="600"
        letterSpacing=".35"
        textAnchor="middle"
      >
        <text x="240" y="143">BOSNIA AND</text>
        <text x="240" y="156">HERZEGOVINA</text>
        <text x="251" y="204">SERBIA</text>
        <text x="196" y="238" fontSize="8">MONTENEGRO</text>
        <text x="199" y="281" fontSize="8">ALBANIA</text>
        <text x="289" y="271">NORTH</text>
        <text x="289" y="284">MACEDONIA</text>
        <text x="489" y="119">MOLDOVA</text>
      </g>

      <g transform="translate(36 35)">
        <rect fill="#fff" height="40" rx="12" width="172" />
        <circle cx="19" cy="20" fill="#D49B37" r="5" />
        <text
          fill="#345348"
          fontFamily="Arial, sans-serif"
          fontSize="10"
          fontWeight="600"
          x="33"
          y="24"
        >
          DEMO · SCHEMATIC MAP
        </text>
      </g>
      <g transform="translate(424 337)">
        <text
          fill="#718777"
          fontFamily="Arial, sans-serif"
          fontSize="9"
          textAnchor="middle"
        >
          NOT TO SCALE · FOR DEMONSTRATION ONLY
        </text>
      </g>
    </svg>
  );
}
