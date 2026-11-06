import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Are jumbo rates always higher?", "answer": "Usually slightly higher, but not always — portfolio banks competing for wealthy borrowers sometimes price jumbo at or below conforming. Shop three-plus lenders."}, {"question": "Can I avoid jumbo with two loans?", "answer": "Sometimes via piggyback seconds. The blended rate may beat jumbo, but you manage two payments and the second lien&apos;s higher, often variable rate."}, {"question": "Do jumbo loans allow PMI?", "answer": "Rarely below 10–15% down, and most lenders simply require 10–20% down instead. Lender-paid structures exist at higher rates."}, {"question": "Can I refinance jumbo to conforming later?", "answer": "Yes, if paydown or appreciation brings the balance under the county limit and you meet conventional standards — a common plan after bonuses or equity growth."}];

export const metadata: Metadata = {
  title: "Jumbo Loan Guide 2026: Limits, Rates & Qualification",
  description:
    "Jumbo mortgages above $832,750 explained: when you need one, rates, down payments, reserves, and a $1.1M worked example. 2026 limits included.",
  alternates: { canonical: "https://guides.loanpaylogic.com/jumbo-loan-guide" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Loan programs · Jumbo</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Jumbo Loan Guide: Financing Above Conforming Limits</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          A jumbo loan exceeds the conforming limit for your county — $832,750 baseline for one-unit homes in most counties in 2026, up to $1,249,125 in high-cost areas. Because Fannie Mae and Freddie Mac cannot buy these loans, lenders keep the risk and set stricter rules: bigger down payments, stronger credit, larger reserves, and fuller documentation. Jumbo rates often run close to or slightly above conforming rates, moving with the lender&apos;s own portfolio appetite. This guide shows when jumbo is unavoidable, how to qualify, and the numbers on a $1.1 million purchase.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">When jumbo applies in 2026</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          The trigger is loan amount, not price. A $900,000 purchase with 20 percent down borrows $720,000 — conforming in most counties. The same price with 10 percent down borrows $810,000 — still conforming under the $832,750 baseline. But a $1,050,000 purchase with 10 percent down borrows $945,000, exceeding the baseline and requiring jumbo unless the county&apos;s high-cost limit (up to $1,249,125) covers it — many coastal California, New York, and Seattle-area counties do. Check your county&apos;s 2026 FHFA value before assuming. VA borrowers with full entitlement escape this grid; everyone else faces it. Piggyback structures (80-10-10) can sometimes keep the first lien conforming with a second lien covering the gap, at the cost of two payments and higher second-lien rates.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Expect 10 to 20 percent down minimums (20 percent most common), credit generally 700-plus with 740-plus for best pricing, DTI near 43 percent or below, and 6 to 12 months of reserves in liquid accounts — more for large loans or investor-adjacent profiles. Two appraisals are common above $1–1.5 million. Self-employed borrowers face bank-statement or asset-depletion alternatives at wider spreads. Rate-shop jumbo specialists, portfolio banks, and credit unions: jumbo pricing varies more by lender than conforming because each bank prices its own balance-sheet risk. Compare with <a className="underline" href="https://loanpaylogic.com/mortgage-comparison-calculator/">loanpaylogic.com comparison tools</a>.
        </p>
        <h2 className="mt-8 text-xl font-semibold">Conforming vs jumbo vs super-jumbo</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Feature</th><th className="py-3 pr-4">Conforming</th><th className="py-3 pr-4">Jumbo</th><th className="py-3">Super-jumbo ($2M+)</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">2026 loan cap (most areas)</td><td className="py-3 pr-4">≤ $832,750</td><td className="py-3 pr-4">Above county limit</td><td className="py-3">Well above; bespoke</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Down payment</td><td className="py-3 pr-4">From 3–5%</td><td className="py-3 pr-4">Usually 10–20%+</td><td className="py-3">20–30%+</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Reserves</td><td className="py-3 pr-4">2–6 months</td><td className="py-3 pr-4">6–12 months</td><td className="py-3">12–24 months</td></tr>
              <tr><td className="py-3 pr-4">Documentation</td><td className="py-3 pr-4">Standardized</td><td className="py-3 pr-4">Fuller, often 2 appraisals</td><td className="py-3">Deep asset review</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: $1.1M purchase, 20% down</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Price $1,100,000, down $220,000, loan $880,000. In a baseline county this exceeds $832,750, so jumbo. At 7.0 percent for 30 years (illustrative), principal and interest run about $5,855. With tax at 1.1 percent ($1,008 monthly) and insurance ($300), the all-in payment lands near $7,163 before HOA. Total interest over 30 years approaches $1.23 million — the scale of jumbo makes even small rate differences enormous: 0.25 point on $880,000 equals roughly $150 monthly or $54,000 over the full term. That is why jumbo borrowers negotiate lender credits, consider 7/6 or 10/6 ARMs for shorter holds, and sometimes split loans to stay conforming.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Strategies to reduce jumbo cost</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Larger down payments can cross back under the conforming line — borrowing $830,000 instead of $880,000 on the example saves jumbo pricing and possibly PMI-free conventional terms. ARMs with 7- or 10-year fixed periods often price 0.5 to 0.75 point below 30-year jumbo fixed, fitting buyers who will sell, recast after a liquidity event, or refinance. Relationship discounts at portfolio banks (moving deposits or investments) can shave 0.125 to 0.25 point. Points buy-downs pencil out only for long holds; compute break-even against realistic move or refinance timing. As of late September 2026, jumbo averages tracked modestly above conforming in daily surveys — confirm same-day quotes since spreads shift with bank demand.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Are jumbo rates always higher?</summary><p className="mt-2 opacity-80">Usually slightly higher, but not always — portfolio banks competing for wealthy borrowers sometimes price jumbo at or below conforming. Shop three-plus lenders.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I avoid jumbo with two loans?</summary><p className="mt-2 opacity-80">Sometimes via piggyback seconds. The blended rate may beat jumbo, but you manage two payments and the second lien&apos;s higher, often variable rate.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Do jumbo loans allow PMI?</summary><p className="mt-2 opacity-80">Rarely below 10–15% down, and most lenders simply require 10–20% down instead. Lender-paid structures exist at higher rates.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I refinance jumbo to conforming later?</summary><p className="mt-2 opacity-80">Yes, if paydown or appreciation brings the balance under the county limit and you meet conventional standards — a common plan after bonuses or equity growth.</p></details>
        </div>
        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
              <li>
                <Link className="underline" href="/mortgage-points-guide">Mortgage Points Guide</Link> — whether buying down your rate with points pays back.
              </li>
              <li>
                <Link className="underline" href="/closing-costs-guide">Closing Costs Guide</Link> — which closing fees are negotiable and which are not.
              </li>
              <li>
                <Link className="underline" href="/debt-to-income-ratio-guide">Debt-to-Income Ratio Guide</Link> — how lenders measure DTI, and the caps by program.
              </li>
              <li>
                <Link className="underline" href="/fixed-vs-adjustable-mortgage">Fixed vs Adjustable Mortgage</Link> — when a fixed rate beats an ARM, and vice versa.
              </li>
          </ul>
        </nav>
        <p className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed opacity-90">
          <span className="font-semibold">Official resources:</span> the <a className="underline" href="https://www.fhfa.gov/">FHFA conforming loan limits</a> for 2026 county ceilings, and the <a className="underline" href="https://www.consumerfinance.gov/ask-cfpb/category-mortgages/">CFPB jumbo-loan guidance</a> for non-conforming borrowers.
        </p>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. County limits and jumbo guidelines vary; verify 2026 FHFA values for your county. See our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Jumbo Loan Guide 2026: Limits, Rates & Qualification" description="Jumbo mortgages above $832,750 explained: when you need one, rates, down payments, reserves, and a $1.1M worked example. 2026 limits included." slug="jumbo-loan-guide" faqs={guideFaqs} />
    </div>
  );
}
