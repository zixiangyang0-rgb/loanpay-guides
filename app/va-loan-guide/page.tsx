import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Can I reuse my VA benefit?", "answer": "Yes — restore entitlement after sale and payoff, or use remaining partial entitlement for a second property within limit and guaranty rules."}, {"question": "Do VA loans take longer to close?", "answer": "Not inherently. Appraisal scheduling and repair conditions can add days, but prepared lenders close VA loans on standard timelines."}, {"question": "Can a seller refuse a VA offer?", "answer": "Sellers cannot discriminate against veteran status, but they may weigh terms. Strong earnest money and flexible dates help compete."}, {"question": "Is the funding fee ever waived?", "answer": "Yes — for 10%+ disability-rated veterans, some active-duty Purple Heart recipients, and qualifying surviving spouses. Check current VA tables."}];

export const metadata: Metadata = {
  title: "VA Loan Guide 2026: Zero Down, No PMI & Funding Fees",
  description:
    "VA home loans for 2026: eligibility, entitlement, funding fees, no PMI advantage, and a $400,000 worked example for veterans and service members.",
  alternates: { canonical: "https://guides.loanpaylogic.com/va-loan-guide" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Loan programs · VA</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">VA Loan Guide: The Best Deal Most Veterans Miss</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          VA loans backed by the Department of Veterans Affairs offer zero down payment, no private mortgage insurance, competitive rates, and flexible credit standards for eligible veterans, active-duty members, and surviving spouses. Borrowers pay a one-time funding fee instead of monthly PMI — and many disabled veterans are exempt entirely. With no conforming loan-limit cap for full-entitlement borrowers since 2020, qualified buyers can finance higher prices without a jumbo structure. If you earned the benefit, this is usually the first program to evaluate.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Who qualifies and how entitlement works</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Eligibility generally covers veterans meeting service-length rules, active-duty members after about 90 continuous days, many Guard and Reserve members after six creditable years or qualifying activation, and unremarried surviving spouses of service members who died in service or from service-connected causes. You apply for a Certificate of Eligibility (COE) through the VA portal, your lender, or by mail. Full entitlement — available to most first-time VA users and repeat users who restored it — carries no loan-limit cap; the lender&apos;s income and credit standards govern. Partial entitlement (when an existing VA loan remains) ties to the FHFA conforming limit — $832,750 baseline for one unit in 2026 — with 25 percent guaranty on the gap above remaining entitlement. Lenders still apply credit (often 580–620 minimums) and residual-income tests.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          The funding fee sustains the program without monthly PMI. For first use with zero down, it is 2.15 percent of the loan (regular military) and 3.3 percent on subsequent use; with 5 percent down it drops to 1.5 percent, and with 10 percent down to 1.25 percent. Reserve and Guard rates run slightly higher. Veterans with service-connected disability ratings of 10 percent or more (and qualifying surviving spouses) are exempt — a major saving. The fee can be financed into the loan. Sellers may pay discount points and closing help within limits, and the VA caps what borrowers can be charged. Compare VA quotes with the <a className="underline" href="https://loanpaylogic.com/va-loan-calculator/">VA calculator on loanpaylogic.com</a>.
        </p>
        <h2 className="mt-8 text-xl font-semibold">VA vs FHA vs conventional</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Feature</th><th className="py-3 pr-4">VA</th><th className="py-3 pr-4">FHA</th><th className="py-3">Conventional</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Down payment</td><td className="py-3 pr-4">0% allowed</td><td className="py-3 pr-4">3.5% min (580+)</td><td className="py-3">3–20%</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Monthly insurance</td><td className="py-3 pr-4">None</td><td className="py-3 pr-4">MIP always</td><td className="py-3">PMI below 20% down</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Upfront fee</td><td className="py-3 pr-4">1.25–3.3% funding fee</td><td className="py-3 pr-4">1.75% UFMIP</td><td className="py-3">None (LLPA via rate)</td></tr>
              <tr><td className="py-3 pr-4">Best edge</td><td className="py-3 pr-4">Zero down + no PMI</td><td className="py-3 pr-4">Low credit entry</td><td className="py-3">No funding fee at 20% down</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: $400,000 with zero down</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Borrow the full $400,000 at 6.5 percent for 30 years (illustrative): principal and interest run about $2,528. A first-use funding fee of 2.15 percent ($8,600) financed in raises the loan to $408,600 and the payment to about $2,583 — still with no monthly PMI. An FHA buyer on the same price with 3.5 percent down borrows about $386,000 plus upfront MIP and pays roughly $155 in monthly MIP on top of a similar payment. A conventional buyer with 5 percent down pays PMI near $150–$250 monthly until 20 percent equity. Over five years the VA borrower saves roughly $9,000–$15,000 in monthly insurance versus FHA/PMI paths, dwarfing the one-time fee — especially if exempt through disability.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Appraisals, assumptions, and IRRRLs</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          VA appraisals verify value and minimum property requirements — safe water, sound roof, adequate systems — with a Tidewater process letting parties submit comps if value comes low. The VA Notice of Value protects you: if it trails the price, you can renegotiate, pay the gap, or walk. VA loans are assumable by qualified buyers — a standout feature when rates are high, since a buyer may assume your low rate with VA approval and a funding-fee transfer. For refinancing, the Interest Rate Reduction Refinance Loan (IRRRL) offers streamlined, low-doc rate drops with minimal appraisal needs. Occupancy rules require a primary residence within about 60 days, though later moves with PCS orders have established paths.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I reuse my VA benefit?</summary><p className="mt-2 opacity-80">Yes — restore entitlement after sale and payoff, or use remaining partial entitlement for a second property within limit and guaranty rules.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Do VA loans take longer to close?</summary><p className="mt-2 opacity-80">Not inherently. Appraisal scheduling and repair conditions can add days, but prepared lenders close VA loans on standard timelines.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can a seller refuse a VA offer?</summary><p className="mt-2 opacity-80">Sellers cannot discriminate against veteran status, but they may weigh terms. Strong earnest money and flexible dates help compete.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Is the funding fee ever waived?</summary><p className="mt-2 opacity-80">Yes — for 10%+ disability-rated veterans, some active-duty Purple Heart recipients, and qualifying surviving spouses. Check current VA tables.</p></details>
        </div>
        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
              <li>
                <Link className="underline" href="/fha-loan-guide">FHA Loan Guide</Link> — low-down-payment FHA rules, MIP, and loan limits.
              </li>
              <li>
                <Link className="underline" href="/usda-loan-guide">USDA Loan Guide</Link> — zero-down USDA rules for eligible rural areas.
              </li>
              <li>
                <Link className="underline" href="/pmi-removal-guide">PMI Removal Guide</Link> — how to drop PMI once you hold enough equity.
              </li>
              <li>
                <Link className="underline" href="/closing-costs-guide">Closing Costs Guide</Link> — which closing fees are negotiable and which are not.
              </li>
          </ul>
        </nav>
        <p className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed opacity-90">
          <span className="font-semibold">Official resources:</span> the <a className="underline" href="https://www.va.gov/housing-assistance/">VA home-loan benefits and eligibility</a> hub for COE and funding-fee tables, and the <a className="underline" href="https://www.consumerfinance.gov/ask-cfpb/category-mortgages/">CFPB VA-loan guidance</a> for borrower rights.
        </p>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. VA rules and fees update periodically; confirm COE and fee tables with the VA or your lender. See our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="VA Loan Guide 2026: Zero Down, No PMI & Funding Fees" description="VA home loans for 2026: eligibility, entitlement, funding fees, no PMI advantage, and a $400,000 worked example for veterans and service members." slug="va-loan-guide" faqs={guideFaqs} />
    </div>
  );
}
