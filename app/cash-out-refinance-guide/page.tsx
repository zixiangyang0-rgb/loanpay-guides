import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "How long before I can cash out?", "answer": "Often six months of ownership/seasoning for conventional, longer for some programs. Lenders verify value growth is real, not inflated."}, {"question": "Is cash-out interest deductible?", "answer": "Only the portion used to buy, build, or substantially improve the securing home (and if you itemize). Cash used otherwise is generally not deductible."}, {"question": "Will cash-out affect my rate?", "answer": "Yes — expect a premium over no-cash refinances, plus possible loan-level adjustments for LTV and credit."}, {"question": "What if values fall after?", "answer": "You owe the larger balance on a smaller cushion, limiting future refinance or sale options. Borrow well under the max to keep margin."}];

export const metadata: Metadata = {
  title: "Cash-Out Refinance Guide: Costs, Limits & Alternatives",
  description:
    "Cash-out refinance explained: how equity math, rates, and taxes work, when it makes sense, and a $420,000 example with alternatives table.",
  alternates: { canonical: "https://guides.loanpaylogic.com/cash-out-refinance-guide" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Mortgages · Tapping equity</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Cash-Out Refinance Guide: Turn Equity Into Cash — Carefully</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          A cash-out refinance replaces your mortgage with a larger one and hands you the difference in cash. It is one withdrawal, one payment, at mortgage rates — often cheaper than cards or personal loans. It also raises your balance, usually raises your rate above no-cash pricing, restarts the payoff clock, and puts your home behind the new debt. Sensible for value-adding renovations or consolidating high-rate debt you will not rebuild; risky for lifestyle spending or covering deficits. This guide shows the limits, true costs, and alternatives.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">How much cash can you take?</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Conventional cash-out generally caps at 80 percent loan-to-value: on a $500,000 home owing $300,000, the max new loan is $400,000, netting about $100,000 minus costs. FHA caps near 80 percent as well in most cases; VA allows up to 100 percent of value for eligible borrowers. You need verifiable income, an appraisal confirming value, and DTI that handles the bigger payment. Pricing runs about 0.25 to 0.75 point above rate-and-term refinance rates because investors view equity extraction as riskier. Cash-out also changes tax treatment: interest on the extra cash is generally deductible only if used to buy, build, or substantially improve the securing home — not for cards, cars, or vacations. Confirm with a tax professional.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Option</th><th className="py-3 pr-4">Cash style</th><th className="py-3 pr-4">Best when</th><th className="py-3">Downside</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Cash-out refi</td><td className="py-3 pr-4">Single lump</td><td className="py-3 pr-4">Large need + good rate</td><td className="py-3">Resets first lien, higher rate</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">HELOC</td><td className="py-3 pr-4">Phased draws</td><td className="py-3 pr-4">Staged project, standby</td><td className="py-3">Variable payment shock</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Home-equity loan</td><td className="py-3 pr-4">Single lump, 2nd lien</td><td className="py-3 pr-4">Keep low first-lien rate</td><td className="py-3">Two payments</td></tr>
              <tr><td className="py-3 pr-4">Personal loan</td><td className="py-3 pr-4">Fast unsecured</td><td className="py-3 pr-4">Small need, protect home</td><td className="py-3">Higher rate</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: $420,000 value, $280,000 owed</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Value $420,000 at 80 percent allows a $336,000 new loan. After paying the $280,000 balance, about $56,000 remains before $6,000–$8,000 in closing costs, netting roughly $48,000–$50,000. If the old rate was 6.8 percent on $280,000 (payment ~$1,825) and the new $336,000 prices at 7.0 percent (payment ~$2,236), the payment rises $411 for $50,000 cash — effectively financing that cash near mortgage rates but lifting the whole balance to the higher rate. If instead your existing first lien is 3.5 percent, cash-out destroys a superb rate; a second-lien equity loan keeping the 3.5 percent first intact usually wins despite its higher second-lien rate. Always compare blended cost, not headline rate.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Good uses, bad uses, and guardrails</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Strong uses: structural renovations with contractor bids and resale logic, consolidating double-digit debt you will close at the source, or funding education with a clear earnings return. Weak uses: vacations, vehicles that depreciate, speculative investing, or bridging income gaps without a fix — each converts secured equity into consumption. Guardrails: keep at least 20 percent equity after, keep the new payment inside 28/36 guidelines, hold six months of the higher payment in reserve, and fix the behavior behind any consolidation (autopay the new loan, freeze paid cards). Get contractor timelines in writing before borrowing for remodels so draws and payments align with work. Test scenarios on <a className="underline" href="https://loanpaylogic.com/refinance-calculator/">loanpaylogic.com refinance tools</a>.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">How long before I can cash out?</summary><p className="mt-2 opacity-80">Often six months of ownership/seasoning for conventional, longer for some programs. Lenders verify value growth is real, not inflated.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Is cash-out interest deductible?</summary><p className="mt-2 opacity-80">Only the portion used to buy, build, or substantially improve the securing home (and if you itemize). Cash used otherwise is generally not deductible.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Will cash-out affect my rate?</summary><p className="mt-2 opacity-80">Yes — expect a premium over no-cash refinances, plus possible loan-level adjustments for LTV and credit.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What if values fall after?</summary><p className="mt-2 opacity-80">You owe the larger balance on a smaller cushion, limiting future refinance or sale options. Borrow well under the max to keep margin.</p></details>
        </div>
        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
              <li>
                <Link className="underline" href="/mortgage-refinance-guide">Mortgage Refinance Guide</Link> — when refinancing lowers cost, and when it backfires.
              </li>
              <li>
                <Link className="underline" href="/heloc-explained">HELOC Explained</Link> — how draw periods, variable rates, and lien risk work.
              </li>
              <li>
                <Link className="underline" href="/home-equity-loan-vs-heloc">Home Equity Loan vs HELOC</Link> — lump-sum loan versus revolving line for home equity.
              </li>
              <li>
                <Link className="underline" href="/closing-costs-guide">Closing Costs Guide</Link> — which closing fees are negotiable and which are not.
              </li>
          </ul>
        </nav>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Limits and pricing vary by program and market. See our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Cash-Out Refinance Guide: Costs, Limits & Alternatives" description="Cash-out refinance explained: how equity math, rates, and taxes work, when it makes sense, and a $420,000 example with alternatives table." slug="cash-out-refinance-guide" faqs={guideFaqs} />
    </div>
  );
}
