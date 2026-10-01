import type { MetadataRoute } from "next";

const base = "https://guides.loanpaylogic.com";

const routes = [
  "",
  "/mortgage-payment-guide",
  "/amortization-schedule-explained",
  "/apr-vs-apy-guide",
  "/fixed-vs-adjustable-mortgage",
  "/how-much-house-can-i-afford",
  "/debt-snowball-vs-avalanche",
  "/auto-loan-guide",
  "/student-loan-refinance-guide",
  "/personal-loan-guide",
  "/heloc-explained",
  "/home-equity-loan-vs-heloc",
  "/fha-loan-guide",
  "/va-loan-guide",
  "/usda-loan-guide",
  "/jumbo-loan-guide",
  "/mortgage-refinance-guide",
  "/cash-out-refinance-guide",
  "/mortgage-points-guide",
  "/pmi-removal-guide",
  "/escrow-explained",
  "/debt-to-income-ratio-guide",
  "/credit-score-mortgage-guide",
  "/preapproval-vs-prequalification",
  "/closing-costs-guide",
  "/biweekly-mortgage-payments",
  "/loan-origination-fees-guide",
  "/cosigner-loan-guide",
  "/balloon-payment-guide",
  "/payday-loan-alternatives",
  "/emergency-fund-vs-debt-payoff",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-10-01T00:00:00.000Z");
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/mortgage") || route.startsWith("/fha") ? 0.8 : 0.7,
  }));
}
