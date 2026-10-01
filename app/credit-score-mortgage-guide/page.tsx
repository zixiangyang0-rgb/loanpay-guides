import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Credit Score Mortgage Guide: Tiers, Rates & Fast Wins",
  description:
    "How credit scores shape mortgage approval and pricing in 2026: score tiers, loan-level adjustments, rapid improvement steps, and rate-gap math.",
  alternates: { canonical: "https://guides.loanpaylogic.com/credit-score-mortgage-guide" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Mortgages · Credit</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Credit Score Mortgage Guide: Small Points, Big Dollars</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          Mortgage lenders use your FICO scores — typically the middle of your three bureau mortgage scores — to approve you and price your rate. Crossing from 680 to 740 can save roughly 0.5 to 1 point in rate on conventional loans, worth tens of thousands over 30 years. Government programs forgive lower scores but still reward higher ones. This guide explains the tiers, what actually moves mortgage scores fast, and how to time applications around improvements.
        </p>
      </section>
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Score tiers and what they unlock</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Conventional loans generally want 620 minimum, with meaningful pricing improvements at 680, 700, 720, and 740-plus. FHA technically allows 580 with 3.5 percent down and 500–579 with 10 percent down, though most lenders overlay 580–620. VA and USDA have no statutory minimums but lenders commonly require 580–640. Jumbo wants 700-plus. Beyond approval, loan-level price adjustments penalize lower scores and high LTVs combined: a 680 score at 95 percent LTV can cost 1-plus points more in fee-equivalent than 740 at 80 percent LTV — either as upfront cost or a higher rate. That stacking is why 20 percent down plus 740-plus credit is the pricing sweet spot.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Score band</th><th className="py-3 pr-4">Conventional access</th><th className="py-3 pr-4">Illustrative 30-yr rate gap</th><th className="py-3">Priority</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">760+</td><td className="py-3 pr-4">Best pricing</td><td className="py-3 pr-4">Baseline</td><td className="py-3">Maintain, don&apos;t churn</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">740–759</td><td className="py-3 pr-4">Excellent</td><td className="py-3 pr-4">+0 to 0.125</td><td className="py-3">Optimize utilization</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">700–739</td><td className="py-3 pr-4">Good</td><td className="py-3 pr-4">+0.25 to 0.5</td><td className="py-3">Pay down revolving</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">680–699</td><td className="py-3 pr-4">Approved, pricier</td><td className="py-3 pr-4">+0.5 to 0.75</td><td className="py-3">Fix utilization + errors</td></tr>
              <tr><td className="py-3 pr-4">Below 680</td><td className="py-3 pr-4">FHA/VA often better</td><td className="py-3 pr-4">+0.75 and up</td><td className="py-3">Rebuild before conventional</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked math: why 60 points matter</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          On a $350,000 loan, 7.25 percent versus 6.75 percent (illustrative half-point gap) means about $2,387 versus $2,270 monthly — $117 difference, or roughly $42,000 over 30 years, plus easier PMI and approval. Paying $6,000 in cards to lift utilization from 65 to 15 percent and gain those points can return multiples within two years. Conversely, opening three store cards for discounts before applying can shave 15–30 points and cost the tier. Protect the window: no new credit, no large financed purchases, no late payments, and no co-signing from three months before through closing.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Fast, legitimate improvements</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Pay revolving balances to under 30 percent per card and overall, ideally under 10 percent for scoring — timing payments before statement dates so low balances report. Dispute genuine errors with documentation to all three bureaus; rapid-rescore through your lender can reflect fixes in days. Become an authorized user only on pristine, low-utilization accounts. Keep old accounts open for history length. For thin files, secured cards and credit-builder loans with on-time autopay build steadily over six to twelve months. Avoid score-gaming myths: closing cards hurts, &quot;dispute everything&quot; backfires during underwriting, and pay-to-delete is rare with major creditors. Pull mortgage scores (FICO 2/4/5), not just VantageScore dashboards, before planning — they differ.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Estimate payment effects of score-driven rate changes with the <a className="underline" href="https://loanpaylogic.com/mortgage-calculator/">loanpaylogic.com mortgage calculator</a>. As of autumn 2026, elevated rates made tiers sting more: every eighth of a point cost more monthly than in the 3-percent era, raising the payoff to waiting one season to cross 740 if your timeline allows.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Which score do lenders use?</p><p className="mt-2 opacity-80">Usually the middle of your three mortgage FICO scores; joint applications generally use the lower middle score for pricing.</p></div>
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Will checking my own score hurt?</p><p className="mt-2 opacity-80">No — self-checks are soft inquiries. Lender hard pulls for rate-shopping inside two weeks generally count as one.</p></div>
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Should I pay collections before applying?</p><p className="mt-2 opacity-80">Ask your loan officer first. Some programs require resolution; indiscriminate payoff can reset dates or drain reserves. Strategy matters.</p></div>
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Can I get a mortgage after bankruptcy?</p><p className="mt-2 opacity-80">Often yes after seasoning — roughly 2 years for FHA/VA Chapter 7 and 4 for conventional, with re-established credit. Confirm current waiting periods.</p></div>
        </div>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Scoring models and lender overlays vary. See our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>
    </div>
  );
}
