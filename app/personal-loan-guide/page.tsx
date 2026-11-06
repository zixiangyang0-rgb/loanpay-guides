import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Will a personal loan help my credit?", "answer": "Paying down cards with a loan can lower utilization and help scores, but the new inquiry and account slightly offset it at first. On-time installments then build history."}, {"question": "Can I pay it off early?", "answer": "Usually yes with no penalty at mainstream lenders. Confirm before signing; some specialty lenders still charge."}, {"question": "How fast is funding?", "answer": "Often one to three business days after approval, sometimes same-day. Speed is convenient — do not let it rush your comparison."}, {"question": "What beats a personal loan for emergencies?", "answer": "An emergency fund first, then low-cost options like payment plans, community aid, or a 0% card you will clear. See our payday-alternatives guide."}];

export const metadata: Metadata = {
  title: "Personal Loan Guide: Costs, Uses & Smarter Alternatives",
  description:
    "How personal loans work: APRs, origination fees, terms, good vs bad uses, and a $12,000 consolidation example with comparison table.",
  alternates: { canonical: "https://guides.loanpaylogic.com/personal-loan-guide" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Auto &amp; personal · Unsecured borrowing</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Personal Loan Guide: Fast, Unsecured — and Easy to Overpay</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          A personal loan delivers a lump sum you repay in fixed installments, usually over two to seven years, with no collateral. Approval hinges on credit, income, and debt-to-income rather than an asset. That speed and simplicity make personal loans useful for consolidation or one-time needs — and dangerous for recurring shortfalls. Rates span roughly 7 percent for excellent credit to above 30 percent for weak credit as of 2026, plus origination fees up to about 10 percent. This guide shows how to judge an offer, when to use one, and what to do instead.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">How pricing really works</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          The APR bundles interest plus the origination fee amortized over the term. A $12,000 loan at 12 percent for 36 months with a 5 percent origination fee ($600) funds only $11,400 to you but charges payments on $12,000 — about $399 monthly with total interest near $2,360 plus the $600 fee, an effective APR above 15 percent. Shorter terms raise payments but cut interest sharply; longer terms do the reverse and can leave you paying for a vacation or repair years after its value faded. Most mainstream lenders charge no prepayment penalty, so extra principal directly shortens the loan — verify that in writing. Late fees run $25 to $50 and grace periods are short.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Good uses share traits: one-time, high-return, and cheaper than the alternative. Consolidating 24 percent cards into a 12 percent loan you will actually finish qualifies. Covering a security deposit to start a higher-paying job can qualify. Borrowing for discretionary spending, covering monthly deficits, or stacking a loan atop maxed cards you keep using does not — it converts revolving debt into installment debt while total balances grow. Test consolidation math on <a className="underline" href="https://loanpaylogic.com/loan-tools/">loanpaylogic.com loan tools</a> before applying.
        </p>
        <h2 className="mt-8 text-xl font-semibold">Options compared for a $12,000 need</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Option</th><th className="py-3 pr-4">Illustrative APR</th><th className="py-3 pr-4">3-yr cost (est.)</th><th className="py-3">Fit</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Personal loan, good credit</td><td className="py-3 pr-4">~12%</td><td className="py-3 pr-4">~$2,960 w/ fee</td><td className="py-3">Consolidation, one-time needs</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">0% balance-transfer card</td><td className="py-3 pr-4">0% × 18 mo + 4% fee</td><td className="py-3 pr-4">~$480 if cleared</td><td className="py-3">Disciplined payoff only</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Home equity (if available)</td><td className="py-3 pr-4">~8%</td><td className="py-3 pr-4">~$1,540</td><td className="py-3">Lower rate, secured risk</td></tr>
              <tr><td className="py-3 pr-4">Credit cards at 24%</td><td className="py-3 pr-4">24%</td><td className="py-3 pr-4">~$4,950</td><td className="py-3">Most expensive baseline</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: consolidating $12,000 of cards</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Cards at 24 percent with $300 minimums take roughly five-plus years and about $7,500 in interest if you pay minimums. A 36-month personal loan at 12 percent with no fee costs about $399 monthly and $2,360 in interest — higher payment, far lower cost, and a fixed end date. With a 5 percent origination fee the effective cost rises to about $2,960 but still saves roughly $4,500 versus minimums. The critical step: freeze the cards (remove from wallets, delete saved numbers) so balances do not rebuild. Borrowers who consolidate without behavior change often end with both a loan and new card debt — the worst outcome.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Shopping and safety checklist</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Prequalify with soft pulls at two to three lenders — banks, credit unions, and reputable online lenders — then compare APR (not rate), fee, monthly payment, term, and total cost. Credit unions frequently beat online rates for fair-credit borrowers. Avoid lenders guaranteeing approval, demanding upfront gift-card payments, or pushing credit insurance add-ons. Read the late, NSF, and deferment terms. Borrow the minimum that solves the problem, choose the shortest term whose payment fits with savings intact, and automate payments from payday. If denied, ask for the specific reasons, address utilization and errors, and retry rather than stacking hard inquiries across ten lenders.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Will a personal loan help my credit?</summary><p className="mt-2 opacity-80">Paying down cards with a loan can lower utilization and help scores, but the new inquiry and account slightly offset it at first. On-time installments then build history.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I pay it off early?</summary><p className="mt-2 opacity-80">Usually yes with no penalty at mainstream lenders. Confirm before signing; some specialty lenders still charge.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">How fast is funding?</summary><p className="mt-2 opacity-80">Often one to three business days after approval, sometimes same-day. Speed is convenient — do not let it rush your comparison.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What beats a personal loan for emergencies?</summary><p className="mt-2 opacity-80">An emergency fund first, then low-cost options like payment plans, community aid, or a 0% card you will clear. See our payday-alternatives guide.</p></details>
        </div>
        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
              <li>
                <Link className="underline" href="/debt-snowball-vs-avalanche">Debt Snowball vs Avalanche</Link> — which payoff order saves more interest.
              </li>
              <li>
                <Link className="underline" href="/payday-loan-alternatives">Payday Loan Alternatives</Link> — cheaper options than payday loans in a cash crunch.
              </li>
              <li>
                <Link className="underline" href="/cosigner-loan-guide">Cosigner Loan Guide</Link> — what cosigning risks for borrower and cosigner alike.
              </li>
              <li>
                <Link className="underline" href="/emergency-fund-vs-debt-payoff">Emergency Fund vs Debt Payoff</Link> — how to split cash between a buffer and extra payments.
              </li>
          </ul>
        </nav>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. APR examples are as-of estimates. Compare total costs and read our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Personal Loan Guide: Costs, Uses & Smarter Alternatives" description="How personal loans work: APRs, origination fees, terms, good vs bad uses, and a $12,000 consolidation example with comparison table." slug="personal-loan-guide" faqs={guideFaqs} />
    </div>
  );
}
