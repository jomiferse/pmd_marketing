export const SITE_NAME = "PMD";
export const SITE_TAGLINE = "Polymarket dislocation monitoring";
export const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "http://localhost:4321";
export const APP_URL = import.meta.env.PUBLIC_APP_URL || "https://app.pmd.com";

export const DEFAULT_DESCRIPTION =
  "PMD delivers Polymarket alerts and analytics for market dislocations. Read-only monitoring with Telegram delivery. Not financial advice.";

export const DEFAULT_KEYWORDS = [
  "Polymarket alerts",
  "prediction market signals",
  "market dislocation alerts",
  "Polymarket monitoring",
  "Polymarket analytics",
  "prediction market analytics",
  "Polymarket Telegram alerts"
];

export const DEFAULT_OG_IMAGE = "/og.svg";

export const resolveUrl = (path: string) => new URL(path, SITE_URL).toString();
