import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Are title loans better than payday?", "answer": "No — they risk your car at triple-digit APRs. Losing transportation usually costs more than the loan solved."}, {"question": "What is a PAL exactly?", "answer": "A small Payday Alternative Loan from federal credit unions: $200–$2,000, 1–12 months, capped rates and fees, designed as a payday exit."}, {"question": "Will asking billers hurt credit?", "answer": "Payment plans themselves rarely report; missing payments without a plan can. Always get the agreement noted on the account."}, {"question": "Can I get help with food and utilities?", "answer": "Yes — SNAP, LIHEAP, local pantries, and 211 referrals help millions yearly. Benefits take days to weeks, so apply before crisis."}];

export const metadata: Metadata = {
  title: "Payday Loan Alternatives: 10 Cheaper Ways to Cover a Gap",
  description:
    "Trapped by payday loans? Compare 10 cheaper alternatives — payment plans, credit-union PALs, 0% cards, aid programs — with a $500 cost comparison table.",
  alternates: { canonical: "https://guides.loanpaylogic.com/payday-loan-alternatives" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Debt strategy · Emergency borrowing</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Payday Loan Alternatives: Stop the 400% Cycle</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          A typical payday loan charges $15–$30 per $100 for two weeks — roughly 300–600 percent APR — and rolls over into new fees when payday cannot cover both the loan and living costs. Title, pawn, and rent-to-own products run similarly hot. Almost every alternative costs less, including awkward ones like calling the biller. This guide ranks ten options by cost and speed, shows the brutal math on $500, and gives a same-day action plan plus an exit path if you already borrowed.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">The $500 test: what each option costs</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Option for $500</th><th className="py-3 pr-4">Typical cost</th><th className="py-3 pr-4">Speed</th><th className="py-3">Catch</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Biller payment plan</td><td className="py-3 pr-4">$0–$25</td><td className="py-3 pr-4">Same day call</td><td className="py-3">Must ask; partial still due</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Payday loan (baseline)</td><td className="py-3 pr-4">$75 fee + rollovers</td><td className="py-3 pr-4">Minutes</td><td className="py-3">~391% APR; debt trap</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Credit-union PAL</td><td className="py-3 pr-4">~$20 + ≤28% APR</td><td className="py-3 pr-4">1–2 days (member)</td><td className="py-3">Must join credit union</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">0% / low-APR card</td><td className="py-3 pr-4">3–5% transfer fee</td><td className="py-3 pr-4">Days</td><td className="py-3">Needs approval; payoff discipline</td></tr>
              <tr><td className="py-3 pr-4">Community aid / 211</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">Days–weeks</td><td className="py-3">Funds limited; apply early</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          The payday baseline: $500 at $15 per $100 costs $75 for two weeks. Rolled three times — the common pattern — fees reach $300 for two months&apos; use of $500, and the principal still comes due. A credit-union Payday Alternative Loan at 28 percent for three months costs about $25 in interest plus a ~$20 fee. A biller splitting a $500 utility arrears into four payments may charge nothing. Even a 24 percent card cash advance, while expensive, costs a fraction of rollover fees if repaid in a month. Speed is payday&apos;s only edge — and same-day alternatives exist.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Same-day action plan</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Call every biller before borrowing: utilities, landlord, auto lender, medical office, and student servicer all offer hardship splits, deferments, or due-date moves that cost less than any loan. Ask employers about paycheck advances or earned-wage access (watch fees and the next-paycheck hole). Check 211.org, United Way, Salvation Army, and local community action agencies for utility, rent, and food help. Sell or gig for the gap: one weekend of overtime or marketplace sales can replace a $500 loan entirely. Only then compare small-dollar credit — PALs, secured cards, or a small personal loan from your own bank — borrowing the minimum for the shortest time. Track any plan with <a className="underline" href="https://loanpaylogic.com/loan-tools/">loanpaylogic.com loan tools</a>.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Already borrowed? Exit in order</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Stop rollovers first: request an extended payment plan where your state requires lenders to offer one (many do after several rollovers). Revoke ACH authorization in writing if debits threaten essentials, while still owing the balance — you must arrange alternate payment. Prioritize the payday balance over lower-APR debts because its effective rate dwarfs everything. Negotiate a settlement or fee waiver in exchange for a dated payoff. File complaints with your state attorney general or financial regulator if the lender exceeds legal rates — illegal online lenders often fold on challenge. Then build a $500 mini-buffer so the next surprise skips the storefront.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Are title loans better than payday?</summary><p className="mt-2 opacity-80">No — they risk your car at triple-digit APRs. Losing transportation usually costs more than the loan solved.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What is a PAL exactly?</summary><p className="mt-2 opacity-80">A small Payday Alternative Loan from federal credit unions: $200–$2,000, 1–12 months, capped rates and fees, designed as a payday exit.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Will asking billers hurt credit?</summary><p className="mt-2 opacity-80">Payment plans themselves rarely report; missing payments without a plan can. Always get the agreement noted on the account.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I get help with food and utilities?</summary><p className="mt-2 opacity-80">Yes — SNAP, LIHEAP, local pantries, and 211 referrals help millions yearly. Benefits take days to weeks, so apply before crisis.</p></details>
        </div>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. State payday rules differ widely; check your regulator. See our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Payday Loan Alternatives: 10 Cheaper Ways to Cover a Gap" description="Trapped by payday loans? Compare 10 cheaper alternatives — payment plans, credit-union PALs, 0% cards, aid programs — with a $500 cost comparison table." slug="payday-loan-alternatives" faqs={guideFaqs} />
    </div>
  );
}
