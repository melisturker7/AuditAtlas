export const focusCountries = [
  "Albania",
  "Bosnia and Herzegovina",
  "Moldova",
  "Montenegro",
  "North Macedonia",
  "Serbia",
] as const;

export type FocusCountry = (typeof focusCountries)[number];

export const auditAtlasCountryColors: Record<FocusCountry, string> = {
  Albania: "#D49B37",
  "Bosnia and Herzegovina": "#123B36",
  Moldova: "#628071",
  Montenegro: "#1E5A4A",
  "North Macedonia": "#7C9A83",
  Serbia: "#4C7767",
};
