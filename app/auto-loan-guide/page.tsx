import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Should I focus on monthly payment or price?", "answer": "Price first. Dealers can hit any payment by stretching the term. Negotiate out-the-door price, then rate, then term — in that order."}, {"question": "Is 0% dealer financing real?", "answer": "Yes, but usually for top-tier credit, short terms, and instead of a rebate. Compare 0% for 36 months versus a $2,500 rebate at 6% — the rebate often wins on longer terms."}, {"question": "Can I pay extra on an auto loan?", "answer": "Usually yes — simple interest means extra principal immediately cuts future interest. Confirm no prepayment penalty and that extras apply to principal."}, {"question": "New, used, or certified?", "answer": "A two- to three-year-old reliable model often balances depreciation and repair risk. Certified adds warranty at a price premium worth comparing."}];

export const metadata: Metadata = {
  title: "Auto Loan Guide: Rates, Terms & Dealer Traps in 2026",
  description:
    "How auto loans work in 2026: rates by credit tier, term math, down payments, dealer markup, and a $32,000 worked example with comparison table.",
  alternates: { canonical: "https://guides.loanpaylogic.com/auto-loan-guide" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Auto &amp; personal · Car loans</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Auto Loan Guide: Borrow Smart for Your Next Car</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          Auto loans are simple-interest installment loans secured by the vehicle: fixed payments, fixed term, and the car as collateral. The expensive parts are the term length, the rate markup, and add-ons sold in the finance office. A 72-month loan can feel affordable while costing thousands more and leaving you owing more than the car is worth. This guide explains rate tiers, term tradeoffs, preapproval leverage, and the exact numbers on a $32,000 purchase so you drive away with the car and the deal.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Rates, terms, and what credit buys</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          New-car rates run lower than used-car rates because collateral values are firmer; used, certified, and private-party loans price progressively higher. As of 2026, borrowers with excellent credit commonly saw new-car APRs in the 5s to 7s and used-car APRs a point or two higher, while deep-subprime borrowers faced mid-teens or higher —illustrative ranges as of autumn 2026, not quotes. Terms stretch from 36 to 84 months. Shorter terms mean higher payments but far less interest and faster equity. Longer terms shrink the payment but inflate total cost and the window where you are underwater, especially with little down. Put at least 10 to 20 percent down plus taxes and fees when possible, and keep the term at 60 months or less for new cars and 48 or less for used whenever cash flow allows.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Get preapproved from a bank or credit union before visiting the dealer. A preapproval converts you from a monthly-payment shopper into a cash-price negotiator: settle the out-the-door price first, then let the dealer try to beat your rate. Dealers may mark up the lender&apos;s buy rate by up to 1 to 2 points as compensation — legal in most states if disclosed — so always ask for the buy rate and compare. Walk in with payoff timing tested on <a className="underline" href="https://loanpaylogic.com/loan-tools/">loanpaylogic.com loan tools</a>.
        </p>
        <h2 className="mt-8 text-xl font-semibold">Term comparison on $32,000 at 7.5%</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Term</th><th className="py-3 pr-4">Payment</th><th className="py-3 pr-4">Total interest (est.)</th><th className="py-3">Risk note</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">36 months</td><td className="py-3 pr-4">~$995</td><td className="py-3 pr-4">~$3,830</td><td className="py-3">Fast equity, high payment</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">48 months</td><td className="py-3 pr-4">~$773</td><td className="py-3 pr-4">~$5,130</td><td className="py-3">Balanced for used cars</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">60 months</td><td className="py-3 pr-4">~$641</td><td className="py-3 pr-4">~$6,480</td><td className="py-3">Common ceiling for new</td></tr>
              <tr><td className="py-3 pr-4">84 months</td><td className="py-3 pr-4">~$491</td><td className="py-3 pr-4">~$9,280</td><td className="py-3">Long underwater window</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: $32,000 out the door</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Price $28,000, plus 7 percent tax ($1,960), $400 registration, and $800 dealer doc fee totals about $31,160 before down payment. With $4,000 down you finance roughly $27,160. At 7.5 percent for 60 months the payment is about $544 with total interest near $5,500. Stretch the same balance to 84 months and the payment falls to about $416 — tempting — but interest rises to roughly $7,850 and you still owe about $17,000 after three years when the car may be worth $15,000. That $2,000 gap (negative equity) rolls into the next loan if you trade early, compounding the trap. GAP insurance covers the gap if the car is totaled, but avoiding the gap with a bigger down payment and shorter term is cheaper.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Finance-office add-ons: keep or skip</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Extended warranties, tire-and-wheel plans, paint protection, VIN etching, and prepaid maintenance can add $2,000 to $5,000 to the financed amount — each dollar accruing interest. Some products suit some buyers: a manufacturer-backed warranty on a high-mileage used car without savings, or GAP with less than 20 percent down. But each should be judged on price, exclusions, and whether you could self-insure. You can usually buy warranties later, cancel within 30 to 60 days for a refund, and never need to decide under pressure. Decline same-day pressure, take the paperwork home, and price-shop.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Refinancing works for cars too: if rates fall or your score improved after six to twelve on-time payments, refinancing from 11 to 7 percent on a $20,000 balance with three years left saves roughly $1,300 and can drop the payment $35. Watch title fees and avoid extending the term past the car&apos;s reliable life. Never take a title or payday loan against a paid-off car — triple-digit APRs risk the vehicle itself.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Should I focus on monthly payment or price?</summary><p className="mt-2 opacity-80">Price first. Dealers can hit any payment by stretching the term. Negotiate out-the-door price, then rate, then term — in that order.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Is 0% dealer financing real?</summary><p className="mt-2 opacity-80">Yes, but usually for top-tier credit, short terms, and instead of a rebate. Compare 0% for 36 months versus a $2,500 rebate at 6% — the rebate often wins on longer terms.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I pay extra on an auto loan?</summary><p className="mt-2 opacity-80">Usually yes — simple interest means extra principal immediately cuts future interest. Confirm no prepayment penalty and that extras apply to principal.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">New, used, or certified?</summary><p className="mt-2 opacity-80">A two- to three-year-old reliable model often balances depreciation and repair risk. Certified adds warranty at a price premium worth comparing.</p></details>
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
                <Link className="underline" href="/credit-score-mortgage-guide">Credit Score Mortgage Guide</Link> — which credit score unlocks which loan pricing.
              </li>
              <li>
                <Link className="underline" href="/debt-to-income-ratio-guide">Debt-to-Income Ratio Guide</Link> — how lenders measure DTI, and the caps by program.
              </li>
          </ul>
        </nav>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Rate ranges are as-of estimates. Get preapproved, compare total cost, and read our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Auto Loan Guide: Rates, Terms & Dealer Traps in 2026" description="How auto loans work in 2026: rates by credit tier, term math, down payments, dealer markup, and a $32,000 worked example with comparison table." slug="auto-loan-guide" faqs={guideFaqs} />
    </div>
  );
}
