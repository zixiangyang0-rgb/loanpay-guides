import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Does extra principal remove PMI sooner?", "answer": "Yes — lump sums or monthly extras pull the 80% date forward on the original-value track, and a lower balance also helps on the current-value track."}, {"question": "Do renovations count toward value?", "answer": "They can, once an appraiser recognizes them. Keep permits, contracts, and before/after records. Cosmetic-only work adds less than systems and square footage."}, {"question": "What if my servicer says no?", "answer": "Ask for the written reason, the reapplication date, and whether a different valuation type qualifies. Escalate with the CFPB complaint path if rules seem misapplied."}, {"question": "Is lender-paid PMI removable?", "answer": "No — it is baked into your higher rate with no monthly line to cancel. Refinancing is the only exit, so compare its lifetime cost upfront."}];

export const metadata: Metadata = {
  title: "PMI Removal Guide: Cancel Private Mortgage Insurance Faster",
  description:
    "How to remove PMI: automatic termination, borrower-requested cancellation at 80% LTV, appraisal paths, and FHA MIP differences with a worked timeline.",
  alternates: { canonical: "https://guides.loanpaylogic.com/pmi-removal-guide" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Mortgages · Insurance</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">PMI Removal Guide: Stop Paying for Insurance You No Longer Need</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          Private mortgage insurance protects the lender — not you — on conventional loans below 20 percent equity, typically costing $100 to $300 monthly per $300,000 borrowed. Federal law provides two exits: request cancellation at 80 percent loan-to-value and automatic termination at 78 percent of the original value on schedule. Faster paths exist through appreciation-backed appraisals or refinancing. FHA MIP follows different, stricter rules. This guide maps every route with timelines and a worked example.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">The three conventional PMI exits</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Borrower-requested cancellation: once your balance hits 80 percent of the original value through paydown, you can ask in writing. Requirements typically include good payment history (no 30-day lates in 12 months), a current appraisal or broker price opinion confirming value, and sometimes two years of seasoning — shorter with substantial improvements. Automatic termination: at 78 percent of the original value based on the amortization schedule (or the original value if never delinquent), the servicer must drop PMI without your request, provided you are current. Final termination at the loan&apos;s midpoint is a backstop. Note the baseline is original value: scheduled paydown alone gets you there slowly, while appreciation plus a new valuation gets you there fast — but the servicer, not Zillow, decides value.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Path</th><th className="py-3 pr-4">Trigger</th><th className="py-3 pr-4">Typical timing</th><th className="py-3">Cost</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Request at 80%</td><td className="py-3 pr-4">80% LTV, good history</td><td className="py-3 pr-4">5–8 yrs normal paydown</td><td className="py-3">Appraisal ~$300–$600</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Auto at 78%</td><td className="py-3 pr-4">Scheduled 78%, current</td><td className="py-3 pr-4">7–10 yrs normal paydown</td><td className="py-3">Free</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Appraisal / refinance</td><td className="py-3 pr-4">Value rose to 80/20</td><td className="py-3 pr-4">As early as 2 yrs</td><td className="py-3">Appraisal or refi costs</td></tr>
              <tr><td className="py-3 pr-4">FHA MIP (contrast)</td><td className="py-3 pr-4">&lt;10% down = life; 10%+ = 11 yrs</td><td className="py-3 pr-4">Long</td><td className="py-3">Refinance to exit early</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked timeline: $380,000 at 10% down</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Price $380,000, down $38,000, loan $342,000 at 90 percent LTV. PMI near 0.5 percent costs about $143 monthly. Normal amortization reaches 80 percent of original value ($304,000 balance) in roughly 7 years and 78 percent ($296,400) in roughly 9 years — costing about $12,000–$15,000 in PMI if you wait. If the home appreciates 4 percent yearly, value hits about $445,000 in year four, making the $330,000 balance about 74 percent of current value — eligible for appraisal-based cancellation years early, saving roughly $5,000–$7,000 net of the appraisal. Refinancing to a lower rate at 80 percent LTV can combine the insurance exit with rate savings; compare refinance costs against pure cancellation, which is nearly free. Track progress with <a className="underline" href="https://loanpaylogic.com/mortgage-calculator/">loanpaylogic.com mortgage tools</a>.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">How to request cancellation step by step</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          First, estimate your LTV both ways: balance divided by original price (servicer&apos;s baseline) and balance divided by a realistic current value. Second, call the servicer for their exact procedure — seasoning, payment-history, and valuation rules vary. Third, avoid new lates and keep the loan current; a recent 30-day late can pause eligibility for a year. Fourth, order only the valuation the servicer accepts (they usually choose the appraiser). Fifth, submit the written request and keep confirmation. If denied, ask for the specific reason and timeline to reapply. For FHA loans, skip this queue: with less than 10 percent down, MIP lasts for life and only a conventional refinance at 80 percent LTV exits early — worth pursuing once equity and credit allow.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Does extra principal remove PMI sooner?</summary><p className="mt-2 opacity-80">Yes — lump sums or monthly extras pull the 80% date forward on the original-value track, and a lower balance also helps on the current-value track.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Do renovations count toward value?</summary><p className="mt-2 opacity-80">They can, once an appraiser recognizes them. Keep permits, contracts, and before/after records. Cosmetic-only work adds less than systems and square footage.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What if my servicer says no?</summary><p className="mt-2 opacity-80">Ask for the written reason, the reapplication date, and whether a different valuation type qualifies. Escalate with the CFPB complaint path if rules seem misapplied.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Is lender-paid PMI removable?</summary><p className="mt-2 opacity-80">No — it is baked into your higher rate with no monthly line to cancel. Refinancing is the only exit, so compare its lifetime cost upfront.</p></details>
        </div>
        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
              <li>
                <Link className="underline" href="/escrow-explained">Escrow Explained</Link> — how escrow collects taxes and insurance each month.
              </li>
              <li>
                <Link className="underline" href="/mortgage-payment-guide">Mortgage Payment Guide</Link> — how principal, interest, taxes, and insurance combine into one bill.
              </li>
              <li>
                <Link className="underline" href="/fha-loan-guide">FHA Loan Guide</Link> — low-down-payment FHA rules, MIP, and loan limits.
              </li>
              <li>
                <Link className="underline" href="/home-equity-loan-vs-heloc">Home Equity Loan vs HELOC</Link> — lump-sum loan versus revolving line for home equity.
              </li>
          </ul>
        </nav>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Servicer rules and investor overlays vary; confirm your loan&apos;s exact PMI terms in writing. See our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="PMI Removal Guide: Cancel Private Mortgage Insurance Faster" description="How to remove PMI: automatic termination, borrower-requested cancellation at 80% LTV, appraisal paths, and FHA MIP differences with a worked timeline." slug="pmi-removal-guide" faqs={guideFaqs} />
    </div>
  );
}
