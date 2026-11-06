import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Where should I keep it?", "answer": "A separate high-yield savings account at a different bank than checking reduces temptation while staying liquid. Money markets work too; stocks do not."}, {"question": "Should I pause investing to pay debt?", "answer": "Keep any employer match, pause beyond that for debt above ~7–8%, then resume. Matches are free money no debt rate beats."}, {"question": "What counts as an emergency?", "answer": "Job loss, essential repairs, medical needs — not sales, travel, or gifts. Define it in writing before funding."}, {"question": "How do couples split this?", "answer": "One joint buffer sized on shared essentials, then joint high-rate payoff. Keep individual mini-buffers only if spending friction demands it."}];

export const metadata: Metadata = {
  title: "Emergency Fund vs Debt Payoff: Where Extra Dollars Go",
  description:
    "Emergency fund vs paying debt: the staged order that protects both goals, sizing rules, where to keep cash, and a $5,000 allocation example.",
  alternates: { canonical: "https://guides.loanpaylogic.com/emergency-fund-vs-debt-payoff" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Debt strategy · Cash planning</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Emergency Fund vs Debt Payoff: Fund Both in the Right Order</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          Extra dollars face a tug-of-war: cash in savings earns modest interest while debt charges far more, yet zero savings means every surprise lands on a card at high rates. The answer is sequencing, not either-or. Build a small buffer first, attack high-rate debt aggressively, then expand to a full emergency fund before chasing lower-rate debt or investing beyond matches. This guide gives the stages, sizing math, account choices, and a worked $5,000 example.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">The staged order that works</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Stage one: $500–$1,000 mini-buffer in savings while paying debt minimums — enough to absorb tires, copays, and utility spikes without new borrowing. Stage two: avalanche or snowball all debt above roughly 7–8 percent while holding the buffer steady. Stage three: expand to one month of essential spending, then three, then three to six depending on job stability, income variability, and dependents. Stage four: with high-rate debt gone and a full fund in place, split extra dollars among lower-rate payoff, retirement beyond the employer match, and goals like a home down payment. Keep capturing any 401(k) match throughout — a 50–100 percent instant return beats most debt APRs.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Stage</th><th className="py-3 pr-4">Action</th><th className="py-3">Why</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">1 · Buffer</td><td className="py-3 pr-4">Save $500–$1,000</td><td className="py-3">Stops new card borrowing</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">2 · High-rate debt</td><td className="py-3 pr-4">Pay 7–8%+ aggressively</td><td className="py-3">Guaranteed after-tax return</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">3 · Full fund</td><td className="py-3 pr-4">3–6 months essentials</td><td className="py-3">Survives job loss</td></tr>
              <tr><td className="py-3 pr-4">4 · Split surplus</td><td className="py-3 pr-4">Low-rate debt + invest</td><td className="py-3">Balance growth and freedom</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Sizing your fund honestly</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Count essentials only: housing, food, transport, insurance, minimum debt payments, childcare, and medical — not dining or travel. A $4,200 essentials month means a $12,600 three-month fund and $25,200 at six months. Single-income, variable-pay, or single-parent households should target the higher end; dual stable incomes with strong disability coverage can sit nearer three months. Keep the fund in a separate high-yield savings account (APYs near 4 percent as of autumn 2026, variable) — liquid next-day, never invested in stocks or locked in CDs you would break with penalty. Replenish immediately after any draw; a fund you do not refill is a one-time windfall, not a system.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: $5,000 bonus</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Owe $6,000 on cards at 24 percent ($180 minimums) with $200 in savings. Allocate $800 to reach a $1,000 buffer, then $4,200 to the cards. Card interest falls from about $120 monthly to about $45, and minimums drop — freeing cash to finish the remaining $1,800 next month while the buffer absorbs surprises. Contrast allocating all $5,000 to cards with zero buffer: the first $600 emergency returns to the card at 24 percent plus stress. The staged split costs about $15 in extra interest for a month but buys resilience worth far more. Once cards clear, redirect their $180-plus minimums automatically to the full fund, then to investing. Automate every stage on payday with <a className="underline" href="https://loanpaylogic.com/loan-tools/">loanpaylogic.com planning tools</a>.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Edge cases</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Below 6 percent debt (mortgage, some student loans): fund fully and invest before accelerating payoff, since expected market returns exceed the guaranteed saving. Imminent layoffs: pause extra debt payoff and hoard cash to six-plus months — liquidity beats optimization. Gig or seasonal income: size on the worst quarter, not the average. Health risks: prioritize out-of-pocket-max coverage in the fund. Never raid retirement to build savings — taxes, penalties, and lost compounding dwarf the benefit except to avoid imminent foreclosure or bankruptcy, with professional advice.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Where should I keep it?</summary><p className="mt-2 opacity-80">A separate high-yield savings account at a different bank than checking reduces temptation while staying liquid. Money markets work too; stocks do not.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Should I pause investing to pay debt?</summary><p className="mt-2 opacity-80">Keep any employer match, pause beyond that for debt above ~7–8%, then resume. Matches are free money no debt rate beats.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What counts as an emergency?</summary><p className="mt-2 opacity-80">Job loss, essential repairs, medical needs — not sales, travel, or gifts. Define it in writing before funding.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">How do couples split this?</summary><p className="mt-2 opacity-80">One joint buffer sized on shared essentials, then joint high-rate payoff. Keep individual mini-buffers only if spending friction demands it.</p></details>
        </div>
        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
              <li>
                <Link className="underline" href="/debt-snowball-vs-avalanche">Debt Snowball vs Avalanche</Link> — which payoff order saves more interest.
              </li>
              <li>
                <Link className="underline" href="/personal-loan-guide">Personal Loan Guide</Link> — how unsecured loans price risk without collateral.
              </li>
              <li>
                <Link className="underline" href="/payday-loan-alternatives">Payday Loan Alternatives</Link> — cheaper options than payday loans in a cash crunch.
              </li>
              <li>
                <Link className="underline" href="/biweekly-mortgage-payments">Biweekly Mortgage Payments</Link> — how one extra payment a year shortens your loan.
              </li>
          </ul>
        </nav>
        <p className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed opacity-90">
          <span className="font-semibold">Official resources:</span> the <a className="underline" href="https://www.consumerfinance.gov/">CFPB savings resources</a> on building a starter buffer, and <a className="underline" href="https://consumer.ftc.gov/">FTC emergency-savings advice</a> for sizing your fund.
        </p>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. APY and rate figures are as-of estimates. See our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Emergency Fund vs Debt Payoff: Where Extra Dollars Go" description="Emergency fund vs paying debt: the staged order that protects both goals, sizing rules, where to keep cash, and a $5,000 allocation example." slug="emergency-fund-vs-debt-payoff" faqs={guideFaqs} />
    </div>
  );
}
