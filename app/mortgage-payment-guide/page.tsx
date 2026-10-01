import type { Metadata } from "next";
import Link from "next/link";
import PaymentCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Mortgage Payment Guide: Principal, Interest, Taxes & Insurance",
  description:
    "Learn how mortgage payments work: principal and interest math, taxes, insurance, PMI, and HOA. Includes a worked $400,000 example and payment calculator.",
  alternates: {
    canonical: "https://guides.loanpaylogic.com/mortgage-payment-guide",
  },
};

export default function MortgagePaymentGuide() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">
          Mortgages · Payment basics
        </p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">
          Mortgage Payment Guide: What You Actually Pay Each Month
        </h1>
        <p className="mt-4 text-sm leading-relaxed opacity-80">
          Updated: October 2026 · Educational guide, not financial advice.
        </p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          A mortgage payment is rarely just the loan itself. Most homeowners
          pay four to six pieces every month: principal, interest, property
          taxes, homeowners insurance, mortgage insurance when required, and
          sometimes homeowners association dues. Lenders often bundle the
          middle pieces into escrow, so your monthly bill looks like one
          number but behaves like several smaller bills with different rules.
          This guide breaks each piece apart, shows the exact math lenders
          use, and walks through a full worked example so you can estimate
          your own payment with confidence.
        </p>
      </section>

      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">The six parts of a typical payment</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          The industry shorthand is PITI — principal, interest, taxes, and
          insurance — plus PMI and HOA where they apply. Principal is the
          portion that reduces your loan balance. Interest is the lender&apos;s
          charge for letting you borrow. Property taxes go to your county or
          city and are usually collected monthly through escrow even though
          the tax bill arrives once or twice a year. Homeowners insurance
          protects the home and is also escrowed on most loans. Private
          mortgage insurance applies to many conventional loans with less
          than 20 percent down, and FHA loans carry their own mortgage
          insurance premium instead. HOA dues are separate and paid to your
          community association, not the lender.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Why does this matter? Because two borrowers with the same loan
          amount and rate can have very different monthly costs. A $400,000
          loan in Texas with high property taxes may cost $500 more per month
          than the same loan in a low-tax state. Insurance in coastal or
          wildfire zones can add another few hundred dollars. When you
          compare homes, always compare the full payment — not just principal
          and interest. Try your numbers in the{" "}
          <a
            className="underline"
            href="https://loanpaylogic.com/mortgage-calculator/"
          >
            mortgage calculator on loanpaylogic.com
          </a>{" "}
          to see how taxes and insurance change the total.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">How principal and interest are calculated</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Fixed-rate mortgages use standard amortization math. The monthly
          principal-and-interest payment stays the same for the life of the
          loan, but the split between principal and interest shifts every
          month. Early on, most of your payment goes to interest because the
          balance is large. Over time, the interest slice shrinks and the
          principal slice grows. The formula for a fixed payment M on a loan
          amount P with monthly rate r over n payments is M = P × r × (1+r)^n
          / ((1+r)^n − 1). You do not need to memorize it — the idea is that
          the lender solves for one flat payment that exactly pays off the
          loan with interest over the full term.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Adjustable-rate mortgages start with a fixed period, commonly five,
          seven, or ten years, then adjust based on a market index plus a
          margin, subject to caps. Your initial payment is computed like a
          30-year fixed payment at the start rate, but it can move at each
          adjustment. That is why affordability planning for an ARM should
          include the worst case allowed by the caps, not just the starter
          payment. Our companion guide on fixed versus adjustable loans walks
          through caps in detail.
        </p>
        <PaymentCalculator />

        <h2 className="mt-8 text-2xl font-semibold">Taxes, insurance, and escrow in plain English</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Escrow is simply a holding account your loan servicer manages. Each
          month you pay one-twelfth of the estimated annual property tax plus
          one-twelfth of the annual insurance premium into escrow, and the
          servicer pays those bills when due. Your servicer reviews the
          account once a year. If taxes or premiums rose, you get an escrow
          shortage notice and your monthly payment increases to cover the new
          amounts plus catch up the shortfall. If they fell, you get a refund
          or a lower payment. Many first-time buyers are surprised the first
          year because the seller&apos;s tax figure used at closing differs
          from the reassessed figure after purchase. Budget a cushion for
          that first escrow analysis.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Homeowners insurance generally covers the structure, liability, and
          personal property up to policy limits, while flood or earthquake
          coverage is usually separate. Lenders require enough coverage to
          protect their collateral, and they will force-place expensive
          coverage if your policy lapses — so keep your policy current and
          shop it each year. Property taxes vary enormously: effective rates
          near 0.3 percent exist in some states while others exceed 2
          percent. On a $400,000 assessed value that is the difference between
          $100 and nearly $700 per month.
        </p>

        <h2 className="mt-8 text-xl font-semibold">What a full payment looks like: cost breakdown</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70">
                <th className="py-3 pr-4">Component</th>
                <th className="py-3 pr-4">Example amount</th>
                <th className="py-3">Who sets it</th>
              </tr>
            </thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Principal &amp; interest ($320,000 loan, 6.75%, 30 yr)</td>
                <td className="py-3 pr-4">$2,075</td>
                <td className="py-3">Loan terms</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Property tax (1.1% on $400,000)</td>
                <td className="py-3 pr-4">$367</td>
                <td className="py-3">County / city</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Homeowners insurance ($1,800/yr)</td>
                <td className="py-3 pr-4">$150</td>
                <td className="py-3">Insurer you choose</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">PMI (0.5%/yr on $320,000)</td>
                <td className="py-3 pr-4">$133</td>
                <td className="py-3">Lender / insurer</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">HOA (if applicable)</td>
                <td className="py-3 pr-4">$0–$400+</td>
                <td className="py-3">Association</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-8 text-2xl font-semibold">Worked example: $400,000 home, 20% down</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Suppose you buy a $400,000 home with $80,000 down, borrowing
          $320,000 at 6.75 percent fixed for 30 years. The monthly rate is
          0.0675 / 12 = 0.005625, over 360 payments. The formula gives a
          principal-and-interest payment of about $2,075 per month. Add
          property tax at an effective 1.1 percent: $4,400 per year, or $367
          per month. Add insurance at $1,800 per year, or $150 per month. With
          20 percent down there is no PMI, and assume no HOA. The total
          out-of-pocket housing payment is about $2,592 per month. Over the
          first year you pay roughly $24,900 in principal and interest, of
          which about $21,470 is interest and only $3,430 reduces the
          balance — the normal early-amortization pattern.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Now change one input: put only 10 percent down ($40,000) and borrow
          $360,000. Principal and interest rise to about $2,335. Add PMI at
          roughly 0.5 percent per year on $360,000, or $150 per month, and the
          same tax and insurance. The total becomes about $3,002 per month —
          $410 more — and you pay PMI until you reach 20 percent equity and
          meet cancellation rules. This is why down payment size matters far
          beyond the loan amount: it changes insurance, risk, and sometimes
          the rate itself.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">Five mistakes that inflate payments</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          First, shopping the rate but ignoring the APR and fees — a lower
          rate with two discount points can cost more if you move in five
          years. Second, forgetting reassessment: new construction and
          recently sold homes are often reassessed higher in year two. Third,
          choosing the cheapest insurance without checking deductibles and
          replacement-cost terms; a $5,000 wind deductible can hurt after a
          storm. Fourth, underestimating HOA increases and special
          assessments in condos. Fifth, assuming the payment is fixed: taxes,
          insurance, PMI status, and ARM adjustments all move the total even
          when principal and interest stay flat.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          As of late September 2026, the average 30-year fixed rate reported
          by national surveys sat roughly in the mid-6s to low-7s range, with
          Freddie Mac&apos;s weekly survey near 6.67 percent in mid-August and
          daily surveys higher in late September after the Federal Reserve
          raised its policy rate on September 16 for the first time in three
          years. Treat any rate in this guide as an illustration as of that
          date, not a prediction — your quote depends on credit, down
          payment, property, and lender. Confirm current pricing with lenders
          when you shop.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <div className="glass-card rounded-2xl p-5">
            <p className="font-semibold">Why did my monthly payment go up if I have a fixed rate?</p>
            <p className="mt-2 opacity-80">Your principal and interest are fixed, but escrow is not. Higher property taxes or insurance premiums raise the escrow slice. Check the annual escrow statement for the exact shortage and the new monthly amount.</p>
          </div>
          <div className="glass-card rounded-2xl p-5">
            <p className="font-semibold">How much of my payment goes to principal at first?</p>
            <p className="mt-2 opacity-80">Less than most people expect — often only 10 to 20 percent in year one on a 30-year loan. Extra principal payments early therefore cut total interest the most.</p>
          </div>
          <div className="glass-card rounded-2xl p-5">
            <p className="font-semibold">Is it better to waive escrow?</p>
            <p className="mt-2 opacity-80">Some lenders allow it with enough equity and a fee, but you must then save for lump-sum tax and insurance bills yourself. Most first-time buyers do better with escrow.</p>
          </div>
          <div className="glass-card rounded-2xl p-5">
            <p className="font-semibold">Does extra principal lower next month&apos;s bill?</p>
            <p className="mt-2 opacity-80">No — the scheduled payment stays the same, but more of each future payment goes to principal and the loan ends sooner. Recasting is the exception that resets the payment.</p>
          </div>
        </div>

        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Housing
          costs vary by state, lender, and insurer. Review your Loan Estimate
          and escrow disclosures, compare full payments with the{" "}
          <a className="underline" href="https://loanpaylogic.com/mortgage-calculator/">
            loanpaylogic.com mortgage calculator
          </a>
          , and see our <Link className="underline" href="/disclaimer">disclaimer</Link> for
          details.
        </p>
      </article>
    </div>
  );
}
