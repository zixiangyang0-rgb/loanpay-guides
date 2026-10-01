import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Can I cancel FHA MIP at 20% equity?", "answer": "Not on loans from mid-2013 onward with less than 10% down — MIP lasts for life. You must refinance to conventional, sell, or pay off. With 10%+ down it ends after 11 years."}, {"question": "Can I use FHA for an investment property?", "answer": "No — primary residence only. You may buy a 2–4 unit property with FHA if you live in one unit."}, {"question": "Do sellers dislike FHA offers?", "answer": "Sometimes, due to appraisal repair conditions and timelines. A strong preapproval and flexible terms help compete."}, {"question": "What credit score do I really need?", "answer": "Program minimums start at 500–580, but most lenders require 580–620. Higher scores earn better rates and more approvals."}];

export const metadata: Metadata = {
  title: "FHA Loan Guide 2026: Limits, MIP & Who Should Apply",
  description:
    "FHA loans in 2026: 3.5% down rules, $541,287 floor and $1,249,125 ceiling, upfront and annual MIP, credit standards, and a worked example.",
  alternates: { canonical: "https://guides.loanpaylogic.com/fha-loan-guide" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Loan programs · FHA</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">FHA Loan Guide 2026: Low Down Payment, Clear Tradeoffs</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          FHA loans insured by the Federal Housing Administration open homeownership with 3.5 percent down and credit scores from 580 — or 10 percent down with scores from 500 to 579 under program rules. The tradeoff is mortgage insurance on every loan: 1.75 percent upfront plus annual premiums that last 11 years or the life of the loan depending on your down payment. For 2026, FHA floor and ceiling limits are $541,287 and $1,249,125 for one-unit homes in most states. This guide explains who FHA fits, what it costs, and how it compares.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Eligibility and 2026 limits</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          FHA requires a primary residence, steady income, and a property that meets minimum safety standards with an FHA appraisal. Down payment minimums follow credit: 580-plus qualifies for 3.5 percent down in principle, while 500–579 needs 10 percent — though individual lenders often overlay higher minimums near 580–620. Debt-to-income up to about 43 percent is standard, with higher ratios possible with compensating factors like reserves or minimal payment increase. Loan limits for 2026 case numbers: the national floor is $541,287 (65 percent of the $832,750 conforming baseline) and the high-cost ceiling is $1,249,125 (150 percent), with higher special-exception limits in Alaska, Hawaii, Guam, and the Virgin Islands. Check your county on HUD&apos;s lookup — expensive coastal counties sit at the ceiling while most counties sit at the floor.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Mortgage insurance has two parts. Upfront MIP is 1.75 percent of the base loan, usually financed into the balance. Annual MIP for 30-year loans is typically 0.50 to 0.55 percent for standard balances (0.55 percent when loan-to-value exceeds 95 percent) following the 2023 reduction, and higher above the $726,200 pricing tier. Duration follows June 2013 rules: put 10 percent or more down and MIP ends after 11 years; put less down and it lasts the loan&apos;s life unless you refinance or sell. Run scenarios with the <a className="underline" href="https://loanpaylogic.com/fha-loan-calculator/">FHA calculator on loanpaylogic.com</a>.
        </p>
        <h2 className="mt-8 text-xl font-semibold">FHA vs conventional at a glance</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Feature</th><th className="py-3 pr-4">FHA</th><th className="py-3">Conventional (Fannie/Freddie)</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Min. down</td><td className="py-3 pr-4">3.5% (580+) / 10% (500–579)</td><td className="py-3">3–5% typical; 20% avoids PMI</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Mortgage insurance</td><td className="py-3 pr-4">Upfront + annual, always</td><td className="py-3">PMI only below 20% down, cancellable</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Credit flexibility</td><td className="py-3 pr-4">More forgiving</td><td className="py-3">Best pricing needs 740+</td></tr>
              <tr><td className="py-3 pr-4">Best for</td><td className="py-3 pr-4">First buyers, thin credit</td><td className="py-3">Strong credit, 10–20% down</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: $350,000 with 3.5% down</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Price $350,000, down $12,250, base loan $337,750. Upfront MIP at 1.75 percent adds about $5,911, making the total loan roughly $343,661 if financed. At 6.8 percent for 30 years (illustrative), principal and interest run about $2,241. Annual MIP at 0.55 percent on the base amount adds about $155 monthly. Add tax and insurance — say $320 and $140 — and the all-in payment lands near $2,856. A conventional 5-percent-down alternative at a slightly higher rate might carry PMI near $130 that later cancels, while FHA MIP at this LTV lasts for life. That contrast is the decision: FHA&apos;s easier entry versus conventional&apos;s cheaper exit.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Costs, appraisals, and exit paths</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          FHA appraisals check health and safety — peeling paint in pre-1978 homes, missing handrails, roof life — and can require repairs before closing, which complicates fixer purchases. Sellers sometimes prefer conventional offers for that reason. Closing costs mirror conventional plus the upfront MIP. Two clean exits exist: refinance to conventional once you reach 20 percent equity and strong credit to drop insurance entirely, or sell. FHA streamline refinances offer low-doc rate drops when rates fall, with reduced paperwork but a new MIP clock. As of late September 2026, FHA 30-year averages were reported near the mid-6s, modestly below conventional averages — helpful, but MIP narrows the net edge.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I cancel FHA MIP at 20% equity?</summary><p className="mt-2 opacity-80">Not on loans from mid-2013 onward with less than 10% down — MIP lasts for life. You must refinance to conventional, sell, or pay off. With 10%+ down it ends after 11 years.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I use FHA for an investment property?</summary><p className="mt-2 opacity-80">No — primary residence only. You may buy a 2–4 unit property with FHA if you live in one unit.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Do sellers dislike FHA offers?</summary><p className="mt-2 opacity-80">Sometimes, due to appraisal repair conditions and timelines. A strong preapproval and flexible terms help compete.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What credit score do I really need?</summary><p className="mt-2 opacity-80">Program minimums start at 500–580, but most lenders require 580–620. Higher scores earn better rates and more approvals.</p></details>
        </div>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. FHA limits and MIP figures reflect 2026 publications as of October 2026; verify your county and case rules with HUD or your lender. See our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="FHA Loan Guide 2026: Limits, MIP & Who Should Apply" description="FHA loans in 2026: 3.5% down rules, $541,287 floor and $1,249,125 ceiling, upfront and annual MIP, credit standards, and a worked example." slug="fha-loan-guide" faqs={guideFaqs} />
    </div>
  );
}
