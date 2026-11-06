import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Does biweekly lower my required payment?", "answer": "No — the contract payment stays the same. You simply finish sooner and pay less interest. Only a recast or refinance lowers the required amount."}, {"question": "What about two months with three debits?", "answer": "Twice a year biweekly schedules debit three halves in one month. Budget for those months or use the 1/12-monthly method for even cash flow."}, {"question": "Can I do this on an ARM?", "answer": "Yes — extra principal helps any amortizing loan. On ARMs it also shrinks the balance subject to future resets."}, {"question": "Should I refinance instead?", "answer": "Different goals: biweekly cuts term at your current rate for free; refinancing cuts rate (with costs). They combine well when rates have fallen."}];

export const metadata: Metadata = {
  title: "Biweekly Mortgage Payments: One Extra Payment a Year",
  description:
    "How biweekly mortgage payments work: 26 half-payments, interest savings, servicer vs self-managed methods, and a $350,000 example.",
  alternates: { canonical: "https://guides.loanpaylogic.com/biweekly-mortgage-payments" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Mortgages · Payoff speed</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Biweekly Mortgage Payments: The Painless Extra Payment</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          Paying half your mortgage every two weeks instead of the full amount monthly yields 26 half-payments — 13 full payments a year instead of 12. That single extra payment, applied to principal, can shave roughly four to six years off a 30-year loan and save tens of thousands in interest. The strategy is simple but the setup matters: servicer programs, third-party plans, and DIY methods differ in cost, crediting, and reliability. This guide shows the math and the safest setup.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Why 26 halves beat 12 wholes</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Monthly: 12 payments. Biweekly: 26 halves = 13 payments. The extra payment goes entirely to principal if applied correctly, and because it arrives early in the amortization curve it avoids the highest-interest months. True biweekly also pays down slightly faster between months since half the payment arrives two weeks early on average — a small timing bonus atop the extra-payment effect. Do not confuse biweekly (every two weeks, 26 debits) with semi-monthly (twice a month, 24 debits): only biweekly creates the 13th payment. Confirm your servicer credits partial payments promptly rather than holding them in suspense until the full amount arrives — suspense holding blunts the benefit.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Method on $350k at 6.75%</th><th className="py-3 pr-4">Payoff</th><th className="py-3 pr-4">Interest (est.)</th><th className="py-3">Cost</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Monthly ($2,270)</td><td className="py-3 pr-4">30.0 yrs</td><td className="py-3 pr-4">~$467,000</td><td className="py-3">Free</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Biweekly ($1,135 × 26)</td><td className="py-3 pr-4">~25.2 yrs</td><td className="py-3 pr-4">~$378,000</td><td className="py-3">Free DIY / fee via servicer</td></tr>
              <tr><td className="py-3 pr-4">Monthly + 1/12 extra</td><td className="py-3 pr-4">~25.5 yrs</td><td className="py-3 pr-4">~$383,000</td><td className="py-3">Free</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: $350,000 at 6.75%</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Payment about $2,270 monthly. Biweekly half: $1,135 every 14 days, totaling about $29,510 yearly versus $27,240 monthly — $2,270 extra, exactly one payment. The loan clears in roughly 25 years instead of 30, saving near $89,000 in interest (estimates). The monthly-plus-a-twelfth DIY version — adding about $189 to each payment — lands within months of the same result without changing debit timing, ideal for borrowers paid monthly. Either way the gain concentrates early: starting biweekly in year one beats converting in year ten by roughly double the savings. Check scenarios on the <a className="underline" href="https://loanpaylogic.com/biweekly-mortgage-calculator/">biweekly calculator on loanpaylogic.com</a>.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Setup: servicer, third party, or DIY</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Safest free path: add one-twelfth of the principal-and-interest payment as extra principal each month with &quot;apply to principal&quot; in writing, verified on statements. Next: DIY biweekly transfers to a dedicated account with one monthly payment plus periodic extra — keeps control with you. Servicer biweekly programs work when they apply halves immediately and charge no fee; ask for the crediting policy in writing and watch the first three cycles. Avoid third-party biweekly firms charging $300–$500 setup plus monthly fees — they keep your halves in their account and forward monthly, adding cost and counterparty risk for zero extra benefit. Never enroll if the fee exceeds one month&apos;s interest savings in year one.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Prioritize correctly: biweekly acceleration suits borrowers with emergency funds, no high-rate debt, and steady retirement saving. If cards at 22 percent revolve or the emergency fund is thin, redirect the extra payment there first — the return is higher and the risk lower. Also confirm no prepayment penalty (rare on mainstream US mortgages) and that extra funds reduce principal rather than prepaying future interest.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Does biweekly lower my required payment?</summary><p className="mt-2 opacity-80">No — the contract payment stays the same. You simply finish sooner and pay less interest. Only a recast or refinance lowers the required amount.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What about two months with three debits?</summary><p className="mt-2 opacity-80">Twice a year biweekly schedules debit three halves in one month. Budget for those months or use the 1/12-monthly method for even cash flow.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I do this on an ARM?</summary><p className="mt-2 opacity-80">Yes — extra principal helps any amortizing loan. On ARMs it also shrinks the balance subject to future resets.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Should I refinance instead?</summary><p className="mt-2 opacity-80">Different goals: biweekly cuts term at your current rate for free; refinancing cuts rate (with costs). They combine well when rates have fallen.</p></details>
        </div>
        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
              <li>
                <Link className="underline" href="/amortization-schedule-explained">Amortization Schedule Explained</Link> — why early payments go mostly to interest.
              </li>
              <li>
                <Link className="underline" href="/mortgage-payment-guide">Mortgage Payment Guide</Link> — how principal, interest, taxes, and insurance combine into one bill.
              </li>
              <li>
                <Link className="underline" href="/mortgage-refinance-guide">Mortgage Refinance Guide</Link> — when refinancing lowers cost, and when it backfires.
              </li>
              <li>
                <Link className="underline" href="/emergency-fund-vs-debt-payoff">Emergency Fund vs Debt Payoff</Link> — how to split cash between a buffer and extra payments.
              </li>
          </ul>
        </nav>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Savings figures are estimates. See our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Biweekly Mortgage Payments: One Extra Payment a Year" description="How biweekly mortgage payments work: 26 half-payments, interest savings, servicer vs self-managed methods, and a $350,000 example." slug="biweekly-mortgage-payments" faqs={guideFaqs} />
    </div>
  );
}
