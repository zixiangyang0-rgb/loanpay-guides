import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "What does 5/6 mean?", "answer": "Fixed for 5 years, then adjusts every 6 months. A 7/6 is fixed for 7 years with the same six-month adjustments after."}, {"question": "Can an ARM ever go down?", "answer": "Yes. If the index falls, your adjusted rate can fall to the margin plus index, subject to any floor. Caps limit rises; floors limit drops."}, {"question": "Is there a penalty for paying an ARM early?", "answer": "Most mainstream US ARMs have no prepayment penalty, but verify in writing — some non-QM or investor products do."}, {"question": "Can I convert an ARM to fixed later?", "answer": "Some ARMs include a conversion option for a fee in the early years. Otherwise you refinance, which means new qualifying and closing costs."}];

export const metadata: Metadata = {
  title: "Fixed vs Adjustable-Rate Mortgage: 30-Year, 15-Year & ARMs",
  description:
    "Fixed vs adjustable-rate mortgages compared: payment stability, caps, break-even math, and who each loan suits. Includes 5/6 ARM example and comparison table.",
  alternates: { canonical: "https://guides.loanpaylogic.com/fixed-vs-adjustable-mortgage" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Mortgages · Loan types</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Fixed vs Adjustable-Rate Mortgage: Stability or Flexibility?</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          A fixed-rate mortgage locks one interest rate for the entire term — your principal-and-interest payment never changes. An adjustable-rate mortgage (ARM) offers a lower starter rate for a fixed number of years, then adjusts with the market, subject to caps. The choice is really about time horizon and risk tolerance: how long will you keep the loan, how would you handle a higher payment, and what is the upfront discount worth? With 30-year fixed rates elevated as of late 2026, ARMs have drawn fresh attention — but only careful cap math shows whether the gamble pays.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">How each loan works</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          A 30-year fixed is the default American mortgage: predictable, easy to budget, and ideal if you may stay put for a decade or more. A 15-year fixed charges a lower rate but a much higher payment because the balance must clear in half the time — excellent for lifetime interest savings if cash flow allows. ARMs are quoted like 5/6, 7/6, or 10/6: fixed for the first 5, 7, or 10 years, then adjusting every six months. Most ARMs tie to the 30-day average Secured Overnight Financing Rate (SOFR) plus a margin such as 2.75 points, bounded by caps like 2/1/5 — meaning at most 2 points at the first adjustment, 1 point per later adjustment, and 5 points lifetime above the start rate. Always read all three caps, not just the starter rate.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Conforming ARMs follow FHFA limits just like fixed loans — the 2026 baseline one-unit limit is $832,750 in most counties with a $1,249,125 high-cost ceiling — so loan size alone rarely decides the type. What decides is behavior: buyers who expect to sell, refinance, or pay off within the fixed window can benefit from the ARM discount; buyers settling in for the long haul usually value the fixed guarantee more. Test both paths with the <a className="underline" href="https://loanpaylogic.com/arm-mortgage-calculator/">ARM calculator on loanpaylogic.com</a> before you commit.
        </p>
        <h2 className="mt-8 text-xl font-semibold">Head-to-head comparison</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Feature</th><th className="py-3 pr-4">30-yr fixed</th><th className="py-3 pr-4">15-yr fixed</th><th className="py-3">5/6 ARM</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Rate (illustrative, as of late 2026)</td><td className="py-3 pr-4">~7.0%</td><td className="py-3 pr-4">~6.3%</td><td className="py-3">~6.0% initial</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Payment on $400,000</td><td className="py-3 pr-4">~$2,661</td><td className="py-3 pr-4">~$3,444</td><td className="py-3">~$2,398 initial</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Payment risk</td><td className="py-3 pr-4">None</td><td className="py-3 pr-4">None, but high base</td><td className="py-3">Can rise at caps</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Total 10-yr interest (est.)</td><td className="py-3 pr-4">~$260,000</td><td className="py-3 pr-4">~$190,000</td><td className="py-3">~$215,000 if fixed 5 then +2</td></tr>
              <tr><td className="py-3 pr-4">Best for</td><td className="py-3 pr-4">Long stays</td><td className="py-3 pr-4">Fast payoff, strong cash flow</td><td className="py-3">Short horizons, investors</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: the $400,000 decision</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Borrow $400,000. The 30-year fixed at 7.0 percent costs about $2,661 in principal and interest. The 5/6 ARM at 6.0 percent starts near $2,398 — a $263 monthly saving, or $15,780 over the five fixed years. If the ARM then adjusts to the 2-point first cap (8.0 percent) on the remaining roughly $370,000 balance, the payment jumps to about $2,860, erasing the early savings within two years. If instead rates fall and the ARM adjusts to 6.5 percent, the borrower keeps winning. Because the future index is unknowable, underwrite the ARM at the maximum: could you afford roughly $3,300 if the loan eventually hit its 11 percent lifetime cap? If not, the fixed loan&apos;s certainty is worth the premium.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          The 15-year comparison is starker. At 6.3 percent the payment is about $3,444 — nearly $800 more than the 30-year — but after ten years the 15-year borrower owes only about $175,000 versus $342,000 on the 30-year. That equity gap is life-changing if you sell or need to borrow later, yet the higher payment leaves less room for emergencies, investing, or job loss. Households with secure incomes and full emergency funds handle it well; stretched buyers often do better with the 30-year plus voluntary prepayments.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Who should choose what</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Choose fixed when you plan to stay beyond seven to ten years, value budget certainty, or expect rates to rise. Choose a 15-year fixed when the payment is under about 25 percent of take-home pay and retirement and emergency savings are already on track. Consider an ARM when you have a concrete short horizon — military move, starter home, planned refinance after a credit rebuild — plus reserves for the adjusted payment and no prepayment penalty. Avoid ARMs when the starter payment is already a stretch, when you could not handle the capped maximum, or when the fixed-rate premium is small (under 0.5 point), since the risk discount is too thin.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Rate context as of late September 2026: national 30-year averages sat in the mid-6s to low-7s after the Fed&apos;s September 16 hike, with shorter fixed and initial ARM rates typically 0.5 to 1 point lower. Spreads move constantly, so get same-day quotes for all three structures from at least three lenders and compare APRs, caps, margins, and conversion options side by side.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What does 5/6 mean?</summary><p className="mt-2 opacity-80">Fixed for 5 years, then adjusts every 6 months. A 7/6 is fixed for 7 years with the same six-month adjustments after.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can an ARM ever go down?</summary><p className="mt-2 opacity-80">Yes. If the index falls, your adjusted rate can fall to the margin plus index, subject to any floor. Caps limit rises; floors limit drops.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Is there a penalty for paying an ARM early?</summary><p className="mt-2 opacity-80">Most mainstream US ARMs have no prepayment penalty, but verify in writing — some non-QM or investor products do.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I convert an ARM to fixed later?</summary><p className="mt-2 opacity-80">Some ARMs include a conversion option for a fee in the early years. Otherwise you refinance, which means new qualifying and closing costs.</p></details>
        </div>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Rate examples are as-of illustrations. Compare live quotes with the <a className="underline" href="https://loanpaylogic.com/mortgage-comparison-calculator/">loanpaylogic.com comparison calculator</a> and read our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Fixed vs Adjustable-Rate Mortgage: 30-Year, 15-Year & ARMs" description="Fixed vs adjustable-rate mortgages compared: payment stability, caps, break-even math, and who each loan suits. Includes 5/6 ARM example and comparison table." slug="fixed-vs-adjustable-mortgage" faqs={guideFaqs} />
    </div>
  );
}
