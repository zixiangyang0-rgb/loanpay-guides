import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Can I refinance just some loans?", "answer": "Yes — and often you should. Refinance high-rate private loans while leaving federal loans intact to preserve protections."}, {"question": "Does refinancing hurt my credit?", "answer": "Prequalification uses soft pulls. One hard inquiry at funding may dip scores a few points temporarily; on-time payments then help."}, {"question": "Can I refinance with a cosigner?", "answer": "Yes. A creditworthy cosigner can unlock approval or a lower rate. Prefer lenders with a clear cosigner-release path after 24–48 on-time payments."}, {"question": "What if I lose my job after refinancing?", "answer": "Private forbearance is limited — often months, not years. That is why emergency savings and stable income matter before giving up federal flexibility."}];

export const metadata: Metadata = {
  title: "Student Loan Refinance Guide: When It Helps & When It Hurts",
  description:
    "Should you refinance student loans? Federal vs private tradeoffs, rate math, eligibility, and a $45,000 worked example. Plain-English 2026 guide.",
  alternates: { canonical: "https://guides.loanpaylogic.com/student-loan-refinance-guide" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Student · Refinance</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Student Loan Refinance Guide: Keep Federal Protections or Chase the Rate?</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          Refinancing replaces one or more student loans with a new private loan at a new rate and term. Done right, it lowers the rate, simplifies payments, or shortens payoff. Done wrong, it strips federal safety nets — income-driven repayment, forgiveness paths, and generous deferment — that private lenders do not match. Federal loans and private loans therefore follow different rules: refinancing private loans is usually pure math, while refinancing federal loans trades protections for price. This guide shows who benefits, who should wait, and the exact savings on a $45,000 example.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Federal vs private: the decisive split</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Federal Direct loans offer fixed rates set by Congress, income-driven plans that cap payments as a share of discretionary income, Public Service Loan Forgiveness for qualifying employment, and discharge options for disability or school closure. Once refinanced into a private loan, those features are gone permanently — you cannot refinance back into the federal program. Private student loans instead offer competitive fixed or variable rates for strong-credit borrowers, cosigner release options, and sometimes career or autopay discounts, but hardship options are thinner and shorter. Rule of thumb: if you might need income-driven payments, are pursuing PSLF, carry an uncertain income, or would struggle without deferment, keep federal loans federal.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Good refinance candidates share a profile: stable income, emergency savings, credit generally 670-plus (best rates near 750-plus), debt-to-income under control, and no need for forgiveness. They often include graduates with high-rate private loans, high earners with secure jobs, and couples simplifying two loan stacks into one payment. Compare offers with soft-credit prequalification first, then let one hard inquiry finalize the winner. Estimate payments with <a className="underline" href="https://loanpaylogic.com/loan-tools/">loanpaylogic.com loan tools</a>.
        </p>
        <h2 className="mt-8 text-xl font-semibold">When refinancing helps vs hurts</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Situation</th><th className="py-3 pr-4">Refinance?</th><th className="py-3">Why</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Private loans at 9–12%</td><td className="py-3 pr-4">Usually yes</td><td className="py-3">No federal protections to lose</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Federal loans + PSLF track</td><td className="py-3 pr-4">No</td><td className="py-3">Refinance kills forgiveness eligibility</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Unstable income</td><td className="py-3 pr-4">Wait</td><td className="py-3">Keep IDR and deferment options</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Near payoff (&lt;2 years)</td><td className="py-3 pr-4">Rarely</td><td className="py-3">Fees and hassle exceed savings</td></tr>
              <tr><td className="py-3 pr-4">Strong credit + secure job</td><td className="py-3 pr-4">Often yes</td><td className="py-3">Rate drop without safety need</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: $45,000 at 7.8% → 5.5%</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Suppose you owe $45,000 across federal and private loans at a weighted 7.8 percent with 10 years left: payment about $540, total interest roughly $19,800. Refinancing the full balance to a 10-year private loan at 5.5 percent drops the payment to about $488 and total interest to roughly $13,600 — saving about $52 monthly and $6,200 overall (estimates). Shortening to a 7-year at 5.0 percent raises the payment to about $634 but cuts total interest to roughly $8,300, saving $11,500 versus the original if cash flow allows. Lengthening to 15 years at 5.75 percent cuts the payment to about $373 but raises total interest above $22,000 — cheaper monthly, costlier lifetime. Always compare both payment and lifetime interest, not one alone.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Shopping checklist and timing</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Compare fixed versus variable deliberately: fixed suits tight budgets and long holds; variable only suits fast payoffs where you accept reset risk. Check origination or application fees (most top refinancers charge none), autopay discounts around 0.25 point, cosigner release terms, and forbearance length — often 12 months lifetime on private loans versus far more flexible federal pauses. Do not refinance during a forgiveness review or while seeking IDR recertification. Multiple rate-shopping inquiries within a 14- to 45-day window generally count as one for scoring purposes, so batch applications. Keep paying the old loans until the payoff confirms to avoid a stray late mark.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Rate context as of autumn 2026: private refinance rates for excellent credit were advertised from roughly the 4s (variable) and 5s (fixed), while federal Direct rates for new academic-year loans remained Congressionally fixed — check the current federal rate schedule before comparing. Treat advertised minimums as best-case; your offer reflects credit, income, degree, and term.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I refinance just some loans?</summary><p className="mt-2 opacity-80">Yes — and often you should. Refinance high-rate private loans while leaving federal loans intact to preserve protections.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Does refinancing hurt my credit?</summary><p className="mt-2 opacity-80">Prequalification uses soft pulls. One hard inquiry at funding may dip scores a few points temporarily; on-time payments then help.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I refinance with a cosigner?</summary><p className="mt-2 opacity-80">Yes. A creditworthy cosigner can unlock approval or a lower rate. Prefer lenders with a clear cosigner-release path after 24–48 on-time payments.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What if I lose my job after refinancing?</summary><p className="mt-2 opacity-80">Private forbearance is limited — often months, not years. That is why emergency savings and stable income matter before giving up federal flexibility.</p></details>
        </div>
        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
              <li>
                <Link className="underline" href="/cosigner-loan-guide">Cosigner Loan Guide</Link> — what cosigning risks for borrower and cosigner alike.
              </li>
              <li>
                <Link className="underline" href="/personal-loan-guide">Personal Loan Guide</Link> — how unsecured loans price risk without collateral.
              </li>
              <li>
                <Link className="underline" href="/debt-to-income-ratio-guide">Debt-to-Income Ratio Guide</Link> — how lenders measure DTI, and the caps by program.
              </li>
              <li>
                <Link className="underline" href="/credit-score-mortgage-guide">Credit Score Mortgage Guide</Link> — which credit score unlocks which loan pricing.
              </li>
          </ul>
        </nav>
        <p className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed opacity-90">
          <span className="font-semibold">Official resources:</span> <a className="underline" href="https://studentaid.gov/">Federal Student Aid repayment options</a> before giving up federal protections, the <a className="underline" href="https://www.consumerfinance.gov/ask-cfpb/">CFPB student-loan guidance</a>, and <a className="underline" href="https://www.irs.gov/">IRS student-loan interest deduction rules</a>.
        </p>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Program rules change; verify forgiveness and IDR terms with official sources before refinancing federal loans. See our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Student Loan Refinance Guide: When It Helps & When It Hurts" description="Should you refinance student loans? Federal vs private tradeoffs, rate math, eligibility, and a $45,000 worked example. Plain-English 2026 guide." slug="student-loan-refinance-guide" faqs={guideFaqs} />
    </div>
  );
}
