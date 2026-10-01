import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "APR vs APY Guide: What Each Rate Really Tells You",
  description:
    "APR vs APY explained in plain English: how borrowing costs and savings growth are quoted, compounding math, fees, and worked examples for loans and deposits.",
  alternates: { canonical: "https://guides.loanpaylogic.com/apr-vs-apy-guide" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Borrowing &amp; saving · Rate basics</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">APR vs APY: Which Rate Matters When?</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          APR and APY sound alike but answer opposite questions. APR — annual percentage rate — tells you what borrowing costs over a year, including most lender fees spread across the loan. APY — annual percentage yield — tells you what savings earn over a year, including the boost from compounding. When you borrow, the higher and more complete APR is the fairer comparison. When you save, the APY is the fairer comparison. Confusing them can make an expensive loan look cheap or a modest savings account look better than it is. This guide shows the math behind each, where fees hide, and how to compare offers side by side.
        </p>
      </section>
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Definitions without the jargon</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          The APR spreads the loan&apos;s interest plus most upfront lender charges — origination fees, discount points, many closing costs — over the loan term, expressed as a yearly rate. A $300,000 mortgage at 6.5 percent interest with $6,000 in lender fees might show an APR near 6.7 percent. The note rate (6.5 percent) drives your monthly payment; the APR (6.7 percent) helps you compare that deal against a 6.625 percent rate with zero fees. Neither is the whole story — the APR assumes you keep the loan for the full term, so it understates fee pain if you sell or refinance early, and it excludes some third-party costs — but it remains the best single borrowing benchmark required by federal Truth in Lending disclosures.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          APY does the mirror job for deposits. If a savings account advertises 4.00 percent interest compounded monthly, the APY is slightly higher — about 4.07 percent — because each month&apos;s interest starts earning interest. The formula is APY = (1 + r/n)^n − 1, where r is the nominal rate and n the compounding periods per year. Daily compounding pushes APY a touch higher still. Banks must disclose APY under the Truth in Savings Act, so compare APYs across accounts and check minimums, caps, and teaser periods. A 5 percent APY that only applies to the first $1,000 is not the same as 4 percent on the full balance.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Side-by-side comparison</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Feature</th><th className="py-3 pr-4">APR (borrowing)</th><th className="py-3">APY (saving)</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Question answered</td><td className="py-3 pr-4">What does this loan cost per year?</td><td className="py-3">What do savings earn per year?</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Includes fees</td><td className="py-3 pr-4">Yes, most lender fees</td><td className="py-3">No fees; includes compounding</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Higher is…</td><td className="py-3 pr-4">Worse for borrower</td><td className="py-3">Better for saver</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Compounding</td><td className="py-3 pr-4">Reflects amortization</td><td className="py-3">Interest-on-interest included</td></tr>
              <tr><td className="py-3 pr-4">Best use</td><td className="py-3 pr-4">Compare loan offers</td><td className="py-3">Compare deposit accounts</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked examples: loan and savings</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Loan example: two $25,000 auto loans for 60 months. Offer A charges 7.0 percent with a $300 origination fee; Offer B charges 7.3 percent with no fee. Offer A&apos;s payment is about $495 per month plus the fee amortized, while Offer B is about $498 with no fee. The APRs come out near 7.25 percent and 7.30 percent — nearly tied — but Offer A costs slightly less if you keep the full term and slightly more if you repay in two years, because the fee has less time to spread. Always pair APR with your expected payoff horizon. Our <a className="underline" href="https://loanpaylogic.com/loan-tools/">loan tools on loanpaylogic.com</a> let you test payoff timing.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Savings example: $10,000 at 4.00 percent compounded monthly earns about $407 in a year (APY ~4.07 percent), while the same nominal rate compounded daily earns about $408. The gap widens at higher rates and balances: at 5 percent, monthly compounding gives an APY of 5.12 percent, turning $10,000 into $10,512. Modest differences compound meaningfully over years, which is exactly what APY captures and the plain rate does not.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Traps: teaser APRs, daily periodic rates, and add-ons</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Credit cards quote APR but charge a daily periodic rate (APR divided by 365) on revolving balances, and cash advances often carry a higher APR plus an upfront fee with no grace period. Payday and title products may quote a fee per $100 rather than an APR — always convert: a $15 fee per $100 for two weeks equals roughly a 391 percent APR. On mortgages, remember the APR excludes some costs like appraisal overflow, prepaid escrow, and optional insurance, so read the Loan Estimate line by line. On deposits, watch variable APYs that can fall after account opening, balance tiers, and bonuses conditioned on direct deposit or debit activity.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Inflation context helps too. As of late September 2026, with the federal funds effective rate near 3.88 percent and 30-year mortgage averages in the mid-6s to low-7s, both borrowing APRs and savings APYs sat well above the near-zero era of 2020–2021. High-rate savers finally earned real yield again, while borrowers felt every eighth of a point. Frame any quoted rate as an as-of snapshot — pricing moves with Fed policy, bond markets, and your credit profile.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">How to shop in five steps</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          First, fix the loan structure before comparing: same amount, same term, same lock period. Second, compare APRs among identical structures, then check the cash-to-close and monthly payment separately. Third, estimate your realistic hold time — break-even on points often takes five to seven years. Fourth, ask which fees are in the APR and which are excluded. Fifth, for savings, compare APY on the balance you will actually keep, net of monthly fees. A $12 monthly fee wipes out the edge of a 0.3-point APY advantage on a $5,000 balance.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Can APR and interest rate ever match?</p><p className="mt-2 opacity-80">Yes — when a loan has no lender fees, the APR roughly equals the note rate. Small differences can remain from rounding and payment timing.</p></div>
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Is a 0% APR credit card really free?</p><p className="mt-2 opacity-80">Only during the promo window and usually only for purchases or balance transfers with a transfer fee of 3–5 percent. Miss a payment and penalty terms can end the promo.</p></div>
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Why is APY higher than the stated rate?</p><p className="mt-2 opacity-80">Because compounding lets interest earn interest. More frequent compounding raises APY slightly at the same nominal rate.</p></div>
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Which matters more for a mortgage: rate or APR?</p><p className="mt-2 opacity-80">Both. The rate sets your payment; the APR helps you compare fee-loaded offers. Add your expected hold time to decide.</p></div>
        </div>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Rates and fees vary by lender and change frequently. Compare current offers and read our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>
    </div>
  );
}
