import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Do utilities and groceries count?", "answer": "No — only reported debt payments count for DTI. Budget them separately; lenders assume you will, but the ratio itself ignores them."}, {"question": "Does a high DTI raise my rate?", "answer": "It can via loan-level price adjustments and program choice, and it caps your amount. Lower DTI plus higher scores earn the best pricing tiers."}, {"question": "What DTI should I target personally?", "answer": "Many planners suggest housing under 25–28% of take-home and all debts under 36%, with savings intact — tighter than lender maximums for good reason."}, {"question": "Can rental income help DTI?", "answer": "Yes, usually at ~75% of documented rent with history and leases, offsetting the rental property&apos;s payment. Rules vary by program."}];

export const metadata: Metadata = {
  title: "Debt-to-Income Ratio Guide: Front-End, Back-End & Limits",
  description:
    "DTI explained: how lenders compute front-end and back-end ratios, program limits, and how to lower DTI, with a $9,000-income worked example.",
  alternates: { canonical: "https://guides.loanpaylogic.com/debt-to-income-ratio-guide" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Mortgages · Qualification</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Debt-to-Income Ratio Guide: The Number Behind Approval</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          Debt-to-income (DTI) divides monthly debt payments by gross monthly income. Mortgage lenders use two versions: front-end (housing only) and back-end (all debts). Together with credit and reserves, DTI decides how much you can borrow and sometimes your rate. Unlike utilization or net worth, DTI ignores assets and living costs — it is a lender-risk gauge, not a full budget. Learn to compute both ratios, know each program&apos;s ceiling, and see exactly which debts to clear for the biggest approval lift.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">How lenders compute DTI</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Front-end: (PITI + HOA + PMI/MIP) ÷ gross monthly income. Back-end: (housing + car + student + minimum card payments + child support + any installment with 10-plus months left) ÷ gross monthly income. Gross means pre-tax salary plus documented extras — bonuses averaged over two years, rental income haircut to about 75 percent, verified side income. Debts use minimums and scheduled payments, not balances: a $9,000 card balance at $180 minimum counts as $180, while a $400 car payment counts fully. Deferred student loans count too, often at 0.5 to 1 percent of balance for conventional qualifying when no payment appears. Paying a balance to zero removes it; paying down without payoff does not change DTI.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Program</th><th className="py-3 pr-4">Front-end guide</th><th className="py-3 pr-4">Back-end ceiling</th><th className="py-3">Notes</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Conventional</td><td className="py-3 pr-4">~28%</td><td className="py-3 pr-4">36–45% (up to 50% w/ strengths)</td><td className="py-3">Best rates near lower DTI</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">FHA</td><td className="py-3 pr-4">~31%</td><td className="py-3 pr-4">43–57% w/ factors</td><td className="py-3">Flexible with reserves/history</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">VA</td><td className="py-3 pr-4">No hard cap</td><td className="py-3 pr-4">41% guide + residual test</td><td className="py-3">Residual income can override</td></tr>
              <tr><td className="py-3 pr-4">USDA</td><td className="py-3 pr-4">~29%</td><td className="py-3 pr-4">~41%</td><td className="py-3">Strictest of the four</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: $9,000 monthly income</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Income $9,000. Proposed housing: $2,200 P&amp;I + $350 tax + $150 insurance + $140 PMI = $2,840 front-end, or 31.6 percent — above the 28 percent conventional guide but potentially approvable with strong credit and reserves. Other debts: $420 car + $380 student + $120 card minimums = $920. Back-end totals $3,760, or 41.8 percent — inside many conventional caps. To reach a comfortable 36 percent back-end ($3,240), cut $520 in monthly minimums: paying off the $8,000 card balance yielding a $120 minimum helps slightly, but eliminating the $420 car payment moves the needle most. Target debts with the highest payment-per-dollar-of-balance for DTI purposes — often small personal loans or cars — while avalanche logic separately targets highest APR for interest savings. Preview housing math on the <a className="underline" href="https://loanpaylogic.com/affordability-calculator/">loanpaylogic.com affordability calculator</a>.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Lowering DTI before applying</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Fast levers: pay small installment balances to zero (removes full minimums), avoid new credit and large purchases, keep cards open but low (protects scores while minimums stay small), and document all income including part-time history. Do not close old cards before applying — it can hurt scores without helping DTI. Do not shuffle debt into new payments; a consolidation loan with a lower payment helps DTI, but one with a longer term and similar payment merely trades interest. Self-employed borrowers should plan a year ahead: lenders average adjusted net income after write-offs, so aggressive deductions shrink qualifying income. Time applications after bonuses post and debts clear statements.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Do utilities and groceries count?</summary><p className="mt-2 opacity-80">No — only reported debt payments count for DTI. Budget them separately; lenders assume you will, but the ratio itself ignores them.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Does a high DTI raise my rate?</summary><p className="mt-2 opacity-80">It can via loan-level price adjustments and program choice, and it caps your amount. Lower DTI plus higher scores earn the best pricing tiers.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What DTI should I target personally?</summary><p className="mt-2 opacity-80">Many planners suggest housing under 25–28% of take-home and all debts under 36%, with savings intact — tighter than lender maximums for good reason.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can rental income help DTI?</summary><p className="mt-2 opacity-80">Yes, usually at ~75% of documented rent with history and leases, offsetting the rental property&apos;s payment. Rules vary by program.</p></details>
        </div>
        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
              <li>
                <Link className="underline" href="/how-much-house-can-i-afford">How Much House Can I Afford</Link> — how lenders size your home budget from income.
              </li>
              <li>
                <Link className="underline" href="/mortgage-payment-guide">Mortgage Payment Guide</Link> — how principal, interest, taxes, and insurance combine into one bill.
              </li>
              <li>
                <Link className="underline" href="/credit-score-mortgage-guide">Credit Score Mortgage Guide</Link> — which credit score unlocks which loan pricing.
              </li>
              <li>
                <Link className="underline" href="/preapproval-vs-prequalification">Preapproval vs Prequalification</Link> — what a preapproval proves that a prequalification does not.
              </li>
          </ul>
        </nav>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Program caps and counting rules vary; confirm with your lender&apos;s underwriting. See our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Debt-to-Income Ratio Guide: Front-End, Back-End & Limits" description="DTI explained: how lenders compute front-end and back-end ratios, program limits, and how to lower DTI, with a $9,000-income worked example." slug="debt-to-income-ratio-guide" faqs={guideFaqs} />
    </div>
  );
}
