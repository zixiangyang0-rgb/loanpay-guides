import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Can closing costs be rolled into the loan?", "answer": "Lender credits offset them via a higher rate, and some costs can be financed within LTV limits — but you pay interest on every financed dollar."}, {"question": "What is cash to close vs down payment?", "answer": "Down payment is your equity; cash to close is down payment plus net fees, prepaids, and escrow minus credits and deposits."}, {"question": "Do refinances have closing costs?", "answer": "Yes — typically 1–3% of the loan, with the same shopping logic. No-cost refis trade fees for rate."}, {"question": "What if costs jump at closing?", "answer": "Tolerance rules limit increases on lender and chosen-provider fees. Flag variances on the Closing Disclosure and delay signing if unexplained."}];

export const metadata: Metadata = {
  title: "Closing Costs Guide: Fees, Credits & How to Save",
  description:
    "Closing costs explained: lender, title, prepaid, and government fees, who pays what, a $400,000 line-by-line example, and negotiation tactics.",
  alternates: { canonical: "https://guides.loanpaylogic.com/closing-costs-guide" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Mortgages · Closing</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Closing Costs Guide: Where the Money Goes</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          Closing costs are the fees and prepayments due at settlement — typically 2 to 5 percent of the loan amount on purchases, plus down payment and escrow seeding. They split into lender charges, third-party services, government recording and transfer taxes, and prepaid interest, taxes, and insurance. Buyers who compare only the rate overpay here. This guide itemizes every bucket, works a $400,000 example line by line, and shows which fees are negotiable and which are set by law.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">The four buckets</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Lender charges include origination or underwriting fees and discount points you elect. Third-party services cover appraisal ($300–$600), credit reports, flood certification, title search and insurance ($1,000–$3,000 depending on state and price), settlement or attorney fees, and surveys or inspections. Government charges include recording fees and transfer taxes — the latter vary wildly, from near zero in some states to over 1 percent in others, sometimes split with sellers by custom. Prepaids are not fees but timing: daily interest to month-end, 2–12 months of insurance, and 2–6 months of taxes into escrow. The Loan Estimate groups these under standardized headings so you can compare lenders line by line; focus on Section A (lender) plus credits, since other sections are similar across quotes.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Line item ($400k price)</th><th className="py-3 pr-4">Typical range</th><th className="py-3">Negotiable?</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Origination / underwriting</td><td className="py-3 pr-4">$1,000–$2,500</td><td className="py-3">Yes — shop lenders</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Title + settlement</td><td className="py-3 pr-4">$1,500–$3,000</td><td className="py-3">Often — shop providers</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Recording + transfer</td><td className="py-3 pr-4">$500–$4,000+</td><td className="py-3">No — set by law/custom</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Prepaids + escrow seed</td><td className="py-3 pr-4">$3,000–$7,000</td><td className="py-3">Timing only</td></tr>
              <tr><td className="py-3 pr-4">Discount points (optional)</td><td className="py-3 pr-4">0–2% of loan</td><td className="py-3">Your choice</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: $400,000 purchase, 10% down</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Loan $360,000. Lender origination $1,495, appraisal $550, credit $100, title and settlement $2,200, recording $300, transfer tax $2,000 (varies), prepaid interest $700, first-year insurance $1,800, escrow seed $2,400 — subtotal near $11,545 before credits and down payment. Add 10 percent down ($40,000) for about $51,545 cash to close, offset by a $3,000 seller credit and $1,500 lender credit to about $47,045. Cash to close is not the loan cost alone — it mixes true fees with prepayments you would owe anyway plus your equity. Compare lenders on APR plus lender-fee-plus-credit totals, not on escrow estimates they do not control. Preview structures with <a className="underline" href="https://loanpaylogic.com/mortgage-calculator/">loanpaylogic.com mortgage tools</a>.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Six ways to pay less</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Get three Loan Estimates the same day and negotiate Section A directly. Shop title and settlement where your state allows — savings of $500–$1,000 are common. Time closing near month-end to cut prepaid interest days (balanced against scheduling stress). Ask sellers for credits, especially on homes sitting over 30 days or needing work — credits within program limits (often 3–9 percent) beat price cuts for cash-strapped buyers. Weigh lender credits against points using break-even math from our points guide. Finally, check assistance: first-time buyer programs, employer grants, and city bond programs can cover thousands for qualifying households. Never borrow closing funds from new credit without lender approval — it can kill the loan.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can closing costs be rolled into the loan?</summary><p className="mt-2 opacity-80">Lender credits offset them via a higher rate, and some costs can be financed within LTV limits — but you pay interest on every financed dollar.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What is cash to close vs down payment?</summary><p className="mt-2 opacity-80">Down payment is your equity; cash to close is down payment plus net fees, prepaids, and escrow minus credits and deposits.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Do refinances have closing costs?</summary><p className="mt-2 opacity-80">Yes — typically 1–3% of the loan, with the same shopping logic. No-cost refis trade fees for rate.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What if costs jump at closing?</summary><p className="mt-2 opacity-80">Tolerance rules limit increases on lender and chosen-provider fees. Flag variances on the Closing Disclosure and delay signing if unexplained.</p></details>
        </div>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Fees vary by state, lender, and program. Compare official Loan Estimates and read our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Closing Costs Guide: Fees, Credits & How to Save" description="Closing costs explained: lender, title, prepaid, and government fees, who pays what, a $400,000 line-by-line example, and negotiation tactics." slug="closing-costs-guide" faqs={guideFaqs} />
    </div>
  );
}
