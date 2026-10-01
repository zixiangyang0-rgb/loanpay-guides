import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Do points lower APR?", "answer": "They lower the rate and payment, but the APR amortizes the points cost — so APR falls less than the rate. Compare APRs plus break-even together."}, {"question": "Are points refundable if I sell early?", "answer": "No. Unrecovered points are sunk. That is why horizon honesty matters most."}, {"question": "What is a temporary buydown?", "answer": "A 2-1 or 1-0 buydown cuts the rate for year one (and two) then steps to the note rate — cheaper than permanent points for early relief, often seller-funded."}, {"question": "Can I roll points into the loan?", "answer": "Sometimes, within LTV limits — but financing points blunts the benefit since you pay interest on them. Cash is cleaner if available."}];

export const metadata: Metadata = {
  title: "Mortgage Points Guide: Discount Points & Break-Even Math",
  description:
    "Should you buy mortgage points? How discount points, lender credits, and break-even timing work, with a $400,000 two-point example.",
  alternates: { canonical: "https://guides.loanpaylogic.com/mortgage-points-guide" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Mortgages · Pricing</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Mortgage Points Guide: Pay Now or Pay Monthly?</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          Discount points are prepaid interest: pay 1 percent of the loan at closing (one point) to lower the rate, typically by about 0.2 to 0.25 point per point — though the exchange varies daily. Lender credits do the reverse: accept a higher rate for cash toward closing. Neither is universally better; the winner depends on how long you keep the loan. This guide shows the break-even formula, tax notes, and a worked $400,000 comparison so you buy points only when time makes them pay.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">How points and credits price</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Lenders offer a rate sheet: 7.25 percent with a 1-point credit, 7.0 percent at par (no points or credits), 6.75 percent for 1 point, 6.5 percent for 2 points — illustrative spreads. Each step down cuts the payment but raises cash to close. Origination fees are separate lender charges for underwriting; discount points specifically buy rate. On a $400,000 loan, one point costs $4,000. Tax treatment: points on a purchase may be deductible in the year paid if customary and you itemize; refinance points are generally amortized over the loan life. Confirm with a tax professional — rules and caps change.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Choice on $400k</th><th className="py-3 pr-4">Rate (illustrative)</th><th className="py-3 pr-4">P&amp;I</th><th className="py-3">Upfront</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">1-pt credit</td><td className="py-3 pr-4">7.25%</td><td className="py-3 pr-4">~$2,729</td><td className="py-3">−$4,000 (toward costs)</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Par</td><td className="py-3 pr-4">7.00%</td><td className="py-3 pr-4">~$2,661</td><td className="py-3">$0</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">1 point</td><td className="py-3 pr-4">6.75%</td><td className="py-3 pr-4">~$2,594</td><td className="py-3">+$4,000</td></tr>
              <tr><td className="py-3 pr-4">2 points</td><td className="py-3 pr-4">6.50%</td><td className="py-3 pr-4">~$2,528</td><td className="py-3">+$8,000</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: is two points worth $8,000?</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Par at 7.0 percent costs $2,661; two points at 6.5 percent costs $2,528 — saving $133 monthly for $8,000 upfront. Break-even is $8,000 ÷ $133 ≈ 60 months, or five years. Stay seven years and you save roughly $3,200 net; sell in three years and you lose roughly $3,200. One point at 6.75 percent saves $67 monthly for $4,000 — also about 60 months. Lender credits invert the logic: taking 7.25 percent for a $4,000 credit costs $68 extra monthly — worthwhile if you will sell or refinance within about five years, costly if you stay decades. Always compute break-even against your realistic horizon, not the full term. Compare quotes with the <a className="underline" href="https://loanpaylogic.com/mortgage-comparison-calculator/">comparison calculator on loanpaylogic.com</a>.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">When points make sense</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Buy points when you will keep the loan well past break-even, have cash beyond emergency and down-payment needs, and cannot earn clearly more investing the points money after tax and risk. Prefer credits or par when cash is tight, you may move or refinance within five years, or rates are high and likely to fall — paying to lock a high rate you will soon replace wastes money. Negotiate both sides: builders and sellers can fund buydowns via price or concessions, and lenders sometimes discount points on slow days. Get same-day Loan Estimates showing par, points, and credit options side by side; point pricing moves with bond markets intraday.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Do points lower APR?</summary><p className="mt-2 opacity-80">They lower the rate and payment, but the APR amortizes the points cost — so APR falls less than the rate. Compare APRs plus break-even together.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Are points refundable if I sell early?</summary><p className="mt-2 opacity-80">No. Unrecovered points are sunk. That is why horizon honesty matters most.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What is a temporary buydown?</summary><p className="mt-2 opacity-80">A 2-1 or 1-0 buydown cuts the rate for year one (and two) then steps to the note rate — cheaper than permanent points for early relief, often seller-funded.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I roll points into the loan?</summary><p className="mt-2 opacity-80">Sometimes, within LTV limits — but financing points blunts the benefit since you pay interest on them. Cash is cleaner if available.</p></details>
        </div>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Point values move daily; verify current pricing in writing. See our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Mortgage Points Guide: Discount Points & Break-Even Math" description="Should you buy mortgage points? How discount points, lender credits, and break-even timing work, with a $400,000 two-point example." slug="mortgage-points-guide" faqs={guideFaqs} />
    </div>
  );
}
