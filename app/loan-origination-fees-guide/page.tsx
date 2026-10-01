import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Loan Origination Fees Guide: What Lenders Charge & Why",
  description:
    "Origination fees explained: points vs flat fees vs lender credits, how to compare Loan Estimates, and a $360,000 shopping example.",
  alternates: { canonical: "https://guides.loanpaylogic.com/loan-origination-fees-guide" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Mortgages · Fees</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Loan Origination Fees Guide: Read Section A Like a Pro</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          Origination fees are what the lender charges for creating the loan — distinct from third-party title, appraisal, and government costs. They appear as Section A on the Loan Estimate and take three forms: percentage points, flat underwriting or processing fees, or negative points (lender credits) that pay you toward closing for a higher rate. Because Section A is the part lenders control, it is the part you negotiate. Master it and you can compare any two offers in minutes.
        </p>
      </section>
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Points, flats, and credits decoded</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          A 1 percent origination fee on $360,000 is $3,600. Flat fees run $1,000–$2,000 labeled as underwriting, processing, or administration — sometimes stacked, so add every Section A line rather than reading one label. Discount points buy rate down; lender credits raise rate to cover costs. Junk-fee vigilance matters: application, rate-lock, or document-prep add-ons deserve a challenge, and federal tolerance rules bar many surprise increases at closing. Lenders quoting &quot;no origination fee&quot; often embed margin in a higher rate — compare APR plus cash to close, not slogans.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Offer on $360k</th><th className="py-3 pr-4">Section A</th><th className="py-3 pr-4">Rate (illustrative)</th><th className="py-3">Best when</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Lender X</td><td className="py-3 pr-4">$2,800 fees</td><td className="py-3 pr-4">6.75%</td><td className="py-3">Long hold, low rate</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Lender Y</td><td className="py-3 pr-4">$900 fees</td><td className="py-3 pr-4">6.99%</td><td className="py-3">Medium hold, balanced</td></tr>
              <tr><td className="py-3 pr-4">Lender Z</td><td className="py-3 pr-4">−$2,000 credit</td><td className="py-3 pr-4">7.25%</td><td className="py-3">Cash-tight or short hold</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked comparison</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          X at 6.75 percent: P&amp;I about $2,335. Y at 6.99 percent: about $2,394 ($59 more). Z at 7.25 percent: about $2,456 ($121 more than X). X costs $1,900 more upfront than Y but saves $59 monthly — break-even near 32 months. Against Z, X costs $4,800 more upfront but saves $121 monthly — break-even near 40 months. Stay eight years and X wins by roughly $4,000–$7,000; sell in two years and Z wins. Always anchor break-even to your realistic move or refinance date, and get all three quotes same-day since pricing shifts. Structure comparisons with <a className="underline" href="https://loanpaylogic.com/mortgage-comparison-calculator/">loanpaylogic.com comparison tools</a>.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Negotiation script that works</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Email all lenders: &quot;Please quote $360,000, 30-year fixed, 10 percent down, 740 score, single-family primary, locking today, showing rate, points, Section A fees, lender credits, and cash to close on page one.&quot; Then ask the preferred lender to match the best Section A plus rate combination — competition between two finalists beats haggling with one. Question every duplicate or vague fee, confirm whether quotes include buydown or credit, and lock the winner in writing with the lock period covering appraisal and title. Re-check the Closing Disclosure against the Estimate; tolerance violations are the lender&apos;s problem to cure.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Are origination fees tax-deductible?</p><p className="mt-2 opacity-80">Points that are prepaid interest may be, subject to itemizing and program rules; flat lender fees generally are not. Ask a tax professional.</p></div>
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Can fees be waived entirely?</p><p className="mt-2 opacity-80">Sometimes reduced or offset by credits, rarely eliminated free — margin moves to the rate. Compare all-in cost, not fee labels.</p></div>
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Do bigger loans pay higher fees?</p><p className="mt-2 opacity-80">Percentage fees scale with size; flats do not. Jumbo Section A often runs higher with deeper negotiation room.</p></div>
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">What are discount vs origination points?</p><p className="mt-2 opacity-80">Discount points buy rate; origination points are lender compensation. Both appear in Section A — add them together when comparing.</p></div>
        </div>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Fee examples are illustrative. Compare official Loan Estimates and read our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>
    </div>
  );
}
