import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Does making extra payments change my due date?", "answer": "Extra principal shortens the loan but usually does not change the next due date unless you specifically prepay ahead. Confirm with your servicer that extra funds are applied to principal, not held as unapplied funds."}, {"question": "Why is my payoff higher than my balance?", "answer": "Payoff quotes add accrued daily interest through the payoff date plus any fees. A monthly statement balance is a snapshot; payoff is the moving total."}, {"question": "Do biweekly payments change amortization?", "answer": "Yes — 26 half-payments equal 13 full payments a year, adding one extra payment annually that cuts years and interest. See our biweekly guide for the math."}, {"question": "Can I get my amortization schedule free?", "answer": "Yes. Your servicer, lender, or the loanpaylogic.com calculators can generate one. Keep a copy with your closing documents."}];

export const metadata: Metadata = {
  title: "Amortization Schedule Explained With Examples",
  description:
    "What an amortization schedule is, how each payment splits into principal and interest, and how extra payments shorten a 30-year loan. Worked example included.",
  alternates: { canonical: "https://guides.loanpaylogic.com/amortization-schedule-explained" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Mortgages · How loans pay off</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Amortization Schedule Explained: Where Every Dollar Goes</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          An amortization schedule is the month-by-month plan showing how a fixed loan pays itself off. It lists every payment date, how much of that payment covers interest, how much reduces principal, and the remaining balance. The total payment stays level, but the mix changes dramatically: early payments are mostly interest, late payments are mostly principal. Understanding that shift explains why extra payments early save so much, why refinancing restarts the interest-heavy phase, and why a 15-year loan builds equity far faster than a 30-year loan at the same rate.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">How amortization math works</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Each month the lender charges interest on the current balance: monthly rate times outstanding principal. The rest of your fixed payment reduces the balance. Next month interest is slightly lower because the balance is slightly lower, so a little more goes to principal. Repeat 360 times and the balance hits zero exactly. The formula for the fixed payment is M = P × r(1+r)^n / ((1+r)^n − 1), where P is the starting balance, r the monthly rate, and n the number of payments. On a $350,000 loan at 6.5 percent for 30 years, r is 0.0054167 and the payment is about $2,212. In month one, interest is $350,000 × 0.0054167 = $1,896 and principal is only $316. By month 180 the split is roughly $1,380 interest and $832 principal. By month 350 it is almost all principal.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          This front-loading is not a trick or a penalty — it is just arithmetic on a large balance. It does mean timing matters. Any extra principal payment skips the most expensive interest first, because every dollar of balance you erase today avoids monthly interest on that dollar for the rest of the loan. That is why $200 extra per month in years one through five beats the same dollars added in years twenty through twenty-five. Model your own loan with the{" "}
          <a className="underline" href="https://loanpaylogic.com/mortgage-calculator/">mortgage calculator on loanpaylogic.com</a>, which shows total interest alongside the payment.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Reading a schedule: first year snapshot</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Lenders and servicers can provide a full schedule, but the pattern is easiest to see in the first twelve rows. The table below uses the $350,000, 6.5 percent, 30-year example with a $2,212 payment. Notice the balance falls slowly while cumulative interest climbs fast.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Month</th><th className="py-3 pr-4">Payment</th><th className="py-3 pr-4">Interest</th><th className="py-3 pr-4">Principal</th><th className="py-3">Balance</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-2 pr-4">1</td><td className="py-2 pr-4">$2,212</td><td className="py-2 pr-4">$1,896</td><td className="py-2 pr-4">$316</td><td className="py-2">$349,684</td></tr>
              <tr className="border-b border-white/10"><td className="py-2 pr-4">2</td><td className="py-2 pr-4">$2,212</td><td className="py-2 pr-4">$1,894</td><td className="py-2 pr-4">$318</td><td className="py-2">$349,366</td></tr>
              <tr className="border-b border-white/10"><td className="py-2 pr-4">3</td><td className="py-2 pr-4">$2,212</td><td className="py-2 pr-4">$1,892</td><td className="py-2 pr-4">$320</td><td className="py-2">$349,046</td></tr>
              <tr className="border-b border-white/10"><td className="py-2 pr-4">6</td><td className="py-2 pr-4">$2,212</td><td className="py-2 pr-4">$1,887</td><td className="py-2 pr-4">$325</td><td className="py-2">$348,078</td></tr>
              <tr className="border-b border-white/10"><td className="py-2 pr-4">12</td><td className="py-2 pr-4">$2,212</td><td className="py-2 pr-4">$1,876</td><td className="py-2 pr-4">$336</td><td className="py-2">$346,090</td></tr>
              <tr><td className="py-2 pr-4">Year 1 total</td><td className="py-2 pr-4">$26,544</td><td className="py-2 pr-4">~$22,634</td><td className="py-2 pr-4">~$3,910</td><td className="py-2">—</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: what $200 extra does</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Take the same $350,000 loan. Paying the scheduled $2,212 for 30 years costs about $446,300 in total interest. Add $200 extra to principal every month from the start: the loan pays off in roughly 24 years instead of 30 and total interest falls to about $331,000 — a savings near $115,000 and six years of payments eliminated. The same $200 started in year ten saves meaningfully less, roughly half as much, because there are fewer high-interest months left to erase. The lesson is not that everyone should prepay — money in retirement accounts or an emergency fund can matter more — but that early prepayments are the most powerful per dollar if paying the mortgage sooner is your goal.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Compare terms too. A 15-year $350,000 loan at 6.0 percent (illustrative) carries a payment near $2,953 but total interest of only about $181,500 — less than half the 30-year cost. The tradeoff is the higher required payment and less flexibility during tight months. Some borrowers split the difference: take the 30-year for flexibility and voluntarily pay like it is a 20-year when cash flow allows, keeping the lower required payment as a safety valve.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Negative amortization, ARMs, and recasts</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Standard fixed loans fully amortize: follow the schedule and the balance reaches zero. Some products do not. Interest-only periods, payment-option ARMs with minimum payments below accruing interest, and negatively amortizing structures let the balance grow — you owe more later. Most mainstream US home loans today fully amortize, but always check whether your loan has an interest-only phase or a balloon due date. After a large lump-sum principal payment, a recast (re-amortization) keeps your rate and term but recomputes a lower payment on the smaller balance for a modest fee — useful after a bonus, inheritance, or sale of another property. Refinancing instead replaces the loan entirely with new closing costs and a fresh amortization clock.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          As of late September 2026, 30-year fixed rates were reported roughly in the mid-6s to low-7s, elevated after the Federal Reserve raised its policy rate on September 16. Higher rates steepen the early-interest pattern: at 7.5 percent the first-year interest share on a 30-year loan exceeds 90 percent. Use that as motivation to compare total interest, not just the monthly payment, when choosing between term lengths. All rate references here are as-of illustrations and estimates, not predictions.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Does making extra payments change my due date?</summary><p className="mt-2 opacity-80">Extra principal shortens the loan but usually does not change the next due date unless you specifically prepay ahead. Confirm with your servicer that extra funds are applied to principal, not held as unapplied funds.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Why is my payoff higher than my balance?</summary><p className="mt-2 opacity-80">Payoff quotes add accrued daily interest through the payoff date plus any fees. A monthly statement balance is a snapshot; payoff is the moving total.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Do biweekly payments change amortization?</summary><p className="mt-2 opacity-80">Yes — 26 half-payments equal 13 full payments a year, adding one extra payment annually that cuts years and interest. See our biweekly guide for the math.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I get my amortization schedule free?</summary><p className="mt-2 opacity-80">Yes. Your servicer, lender, or the loanpaylogic.com calculators can generate one. Keep a copy with your closing documents.</p></details>
        </div>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Amortization examples are simplified illustrations. Compare scenarios with the <a className="underline" href="https://loanpaylogic.com/mortgage-calculator/">loanpaylogic.com mortgage calculator</a>, and read our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Amortization Schedule Explained With Examples" description="What an amortization schedule is, how each payment splits into principal and interest, and how extra payments shorten a 30-year loan. Worked example included." slug="amortization-schedule-explained" faqs={guideFaqs} />
    </div>
  );
}
