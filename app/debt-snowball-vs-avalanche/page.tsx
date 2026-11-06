import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Should I save while paying debt?", "answer": "Yes — keep a small buffer ($500–$1,000) so emergencies skip the cards, then split extra dollars once high-rate debts clear. Without a buffer, every surprise restarts the cycle."}, {"question": "Does payoff order affect credit scores?", "answer": "Indirectly. Lowering utilization on individual cards helps scores; both methods do that over time. On-time payments matter most."}, {"question": "What about the debt snowflake?", "answer": "Snowflaking throws found money — rebates, side-gig cash — at the target between paychecks. It pairs well with either method."}, {"question": "When is consolidation better?", "answer": "When it lowers the weighted APR without lengthening payoff or adding fees, and you close or freeze the paid cards to avoid re-borrowing."}];

export const metadata: Metadata = {
  title: "Debt Snowball vs Avalanche: Which Payoff Method Wins?",
  description:
    "Debt snowball vs avalanche compared with math, psychology, a $18,000 multi-card example, and a hybrid plan. Includes comparison table and FAQ.",
  alternates: { canonical: "https://guides.loanpaylogic.com/debt-snowball-vs-avalanche" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Debt strategy · Payoff methods</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Debt Snowball vs Avalanche: Pick the Plan You Will Finish</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          The snowball pays smallest balances first for quick wins; the avalanche pays highest rates first for lowest total cost. Mathematically the avalanche always costs less in interest, yet the snowball often wins in real life because early victories keep people going. The best method is the one you complete without new borrowing. This guide compares both with real numbers, shows when the gap is tiny versus huge, and offers a hybrid that captures most of each advantage.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">How each method works</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          List every debt with its balance, minimum, and APR. Pay all minimums, then throw every extra dollar at one target: the smallest balance for snowball, the highest APR for avalanche. When the target clears, roll its old payment into the next target — the payment snowball grows each time. Neither method changes interest rates; both harness focus. The avalanche minimizes interest because high-rate balances compound fastest. The snowball minimizes time-to-first-win because small balances clear quickly even at low rates. Behavioral research consistently finds that visible progress predicts persistence, which is why advisors recommend the snowball to anyone who has started and stalled before.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Costs depend on the spread. If your rates cluster between 18 and 24 percent, the avalanche edge is modest — often a few hundred dollars on $15,000. If one debt is a 29 percent store card and another is a 6 percent student loan, the avalanche saves thousands. Either way, stop new borrowing first: no payoff order beats a growing balance. Automate minimums, build a small $500–$1,000 starter buffer so surprises do not land on cards, then attack.
        </p>
        <h2 className="mt-8 text-xl font-semibold">Worked example: $18,000 across four debts</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Debt</th><th className="py-3 pr-4">Balance</th><th className="py-3 pr-4">APR</th><th className="py-3">Minimum</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Store card</td><td className="py-3 pr-4">$900</td><td className="py-3 pr-4">29.9%</td><td className="py-3">$30</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Card A</td><td className="py-3 pr-4">$3,200</td><td className="py-3 pr-4">24.5%</td><td className="py-3">$75</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Card B</td><td className="py-3 pr-4">$5,900</td><td className="py-3 pr-4">19.9%</td><td className="py-3">$130</td></tr>
              <tr><td className="py-3 pr-4">Personal loan</td><td className="py-3 pr-4">$8,000</td><td className="py-3 pr-4">11.5%</td><td className="py-3">$180</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          With $600 per month total ($415 minimums plus $185 extra), the avalanche targets the store card, then Card A, then Card B, then the loan — clearing everything in about 35 months with roughly $3,100 in total interest (estimate). The snowball order happens to match here except it would still start with the store card since it is both smallest and highest-rate. To show divergence, swap the rates: if the $8,000 loan were 28 percent and the store card 12 percent, the avalanche attacks the loan first (saving roughly $900 more interest) while the snowball still clears the $900 card in about three months for momentum. When the highest-rate debt is also small, both methods agree — take the win.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Comparison at a glance</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Dimension</th><th className="py-3 pr-4">Snowball</th><th className="py-3">Avalanche</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Order</td><td className="py-3 pr-4">Smallest balance first</td><td className="py-3">Highest APR first</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Total interest</td><td className="py-3 pr-4">Higher (sometimes slightly)</td><td className="py-3">Lowest possible</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">First win speed</td><td className="py-3 pr-4">Fastest</td><td className="py-3">Can be slow</td></tr>
              <tr><td className="py-3 pr-4">Best for</td><td className="py-3 pr-4">Motivation, many small debts</td><td className="py-3">Math maximizers, big rate gaps</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">The hybrid most people should use</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Start snowball for 60 to 90 days: kill one or two tiny balances for proof you can do it. Then switch to avalanche for the remainder to minimize interest. Alternatively, avalanche with one exception — clear any balance under $500 first regardless of rate, since the interest cost of a brief detour is trivial. Other accelerants beat method choice: negotiating APRs down, moving high-rate balances to a 0 percent balance-transfer card you will actually pay off, consolidating with a lower-rate personal loan without extending the term, and selling unused items for lump sums aimed at the current target.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Avoid traps: cashing out retirement to pay cards (taxes plus lost compounding), serial balance transfers with 3–5 percent fees you never finish, and debt-settlement firms that tell you to stop paying. If minimums exceed roughly 40 percent of income or you use cards for essentials monthly, contact a nonprofit credit counselor (NFCC member) before the situation compounds. Free budgeting tools and payoff trackers on <a className="underline" href="https://loanpaylogic.com/loan-tools/">loanpaylogic.com loan tools</a> can structure the plan.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Should I save while paying debt?</summary><p className="mt-2 opacity-80">Yes — keep a small buffer ($500–$1,000) so emergencies skip the cards, then split extra dollars once high-rate debts clear. Without a buffer, every surprise restarts the cycle.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Does payoff order affect credit scores?</summary><p className="mt-2 opacity-80">Indirectly. Lowering utilization on individual cards helps scores; both methods do that over time. On-time payments matter most.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What about the debt snowflake?</summary><p className="mt-2 opacity-80">Snowflaking throws found money — rebates, side-gig cash — at the target between paychecks. It pairs well with either method.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">When is consolidation better?</summary><p className="mt-2 opacity-80">When it lowers the weighted APR without lengthening payoff or adding fees, and you close or freeze the paid cards to avoid re-borrowing.</p></details>
        </div>
        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
              <li>
                <Link className="underline" href="/emergency-fund-vs-debt-payoff">Emergency Fund vs Debt Payoff</Link> — how to split cash between a buffer and extra payments.
              </li>
              <li>
                <Link className="underline" href="/personal-loan-guide">Personal Loan Guide</Link> — how unsecured loans price risk without collateral.
              </li>
              <li>
                <Link className="underline" href="/payday-loan-alternatives">Payday Loan Alternatives</Link> — cheaper options than payday loans in a cash crunch.
              </li>
              <li>
                <Link className="underline" href="/debt-to-income-ratio-guide">Debt-to-Income Ratio Guide</Link> — how lenders measure DTI, and the caps by program.
              </li>
          </ul>
        </nav>
        <p className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed opacity-90">
          <span className="font-semibold">Official resources:</span> the <a className="underline" href="https://www.consumerfinance.gov/">CFPB debt-repayment resources</a> for prioritizing high-cost balances, and <a className="underline" href="https://consumer.ftc.gov/">FTC guidance on dealing with debt</a> including nonprofit counseling options.
        </p>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Interest figures are estimates for illustration. Build your order with realistic minimums and read our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Debt Snowball vs Avalanche: Which Payoff Method Wins?" description="Debt snowball vs avalanche compared with math, psychology, a $18,000 multi-card example, and a hybrid plan. Includes comparison table and FAQ." slug="debt-snowball-vs-avalanche" faqs={guideFaqs} />
    </div>
  );
}
