import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "USDA Loan Guide 2026: Zero-Down Rural Homeownership",
  description:
    "USDA loans explained: eligibility maps, income limits, guarantee fees, property rules, and a $280,000 worked example for rural buyers.",
  alternates: { canonical: "https://guides.loanpaylogic.com/usda-loan-guide" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Loan programs · USDA</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">USDA Loan Guide: Zero Down Outside the Big City</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          USDA Rural Development loans help modest-income buyers purchase homes in eligible rural and suburban areas with zero down payment, below-market rates, and low guarantee fees. The catch is geography plus income caps: the home must sit in a USDA-eligible area and household income must fall under local limits — often around 115 percent of area median. For qualifying buyers, USDA beats FHA on monthly cost and rivals VA without military service. This guide maps eligibility, costs, and a complete example.
        </p>
      </section>
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Eligibility: place, income, property</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Start with the USDA eligibility map: many small cities, suburbs, and exurbs qualify — &quot;rural&quot; covers roughly 90-plus percent of US land area and about one-third of Americans. Enter the exact address, not just the town name, since boundaries follow census tracts. Income limits vary by county and household size; a 1–4 person household limit near $110,000–$120,000 is common in 2026 with higher allowances for 5-plus households, plus deductions for childcare, disabilities, and elderly members. The home must be a primary residence, modest for the area, with working systems and no income-producing farm use. Condos and manufactured homes face extra rules. Credit minimums are not set by statute, but most lenders want 620-plus with stable employment and DTI generally under 41 percent absent strong compensating factors.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Costs are gentle: a 1 percent upfront guarantee fee financed into the loan plus a 0.35 percent annual fee on the balance (rates as published for recent years — confirm current figures), far below FHA&apos;s 1.75 percent upfront and 0.55 percent annual. That structure keeps payments low for exactly the buyers who need it. There are no prepayment penalties, and sellers may contribute within limits. Verify income and map status with the <a className="underline" href="https://loanpaylogic.com/mortgage-calculator/">calculators and checklists on loanpaylogic.com</a> before house-hunting.
        </p>
        <h2 className="mt-8 text-xl font-semibold">USDA vs FHA vs conventional (low down)</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Feature</th><th className="py-3 pr-4">USDA</th><th className="py-3 pr-4">FHA</th><th className="py-3">Conv. 3–5% down</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Down payment</td><td className="py-3 pr-4">0%</td><td className="py-3 pr-4">3.5%</td><td className="py-3">3–5%</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Upfront / annual fee</td><td className="py-3 pr-4">~1.0% / ~0.35%</td><td className="py-3 pr-4">1.75% / ~0.55%</td><td className="py-3">None / PMI varies</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Geography</td><td className="py-3 pr-4">Eligible areas only</td><td className="py-3 pr-4">Anywhere</td><td className="py-3">Anywhere</td></tr>
              <tr><td className="py-3 pr-4">Best for</td><td className="py-3 pr-4">Rural modest incomes</td><td className="py-3 pr-4">Low credit entry</td><td className="py-3">Strong credit, any area</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: $280,000 with zero down</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Price $280,000, zero down, base loan $280,000. Upfront 1 percent fee ($2,800) financed makes $282,800. At 6.6 percent for 30 years (illustrative), principal and interest run about $1,796. Annual fee at 0.35 percent adds about $82 monthly initially, declining as the balance falls. With tax ($230) and insurance ($120), the all-in payment lands near $2,228. An FHA buyer on the same price with 3.5 percent down pays roughly $1,750 in P&amp;I plus $130-plus MIP — total near $2,230 as well, but needed $9,800 down. USDA&apos;s zero-down entry at similar monthly cost is the program&apos;s core win, provided the address and income qualify.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Process tips and pitfalls</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Get USDA preapproved with a lender experienced in Rural Development — generalists sometimes misread income calculations that count all adult household income, not just borrowers. Lock the address early: falling in love with an ineligible home wastes appraisal money. Budget for the two-step review (lender plus USDA conditional commitment) which can add a week or two versus conventional. Keep income stable through closing; a raise pushing over the limit or a job change can derail approval. After closing, annual-fee recalculations are automatic and no refinance is needed to benefit as the balance drops.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Can I buy a farm with USDA?</p><p className="mt-2 opacity-80">No — the home cannot be income-producing farmland. Large lots are fine if residential and modest; working agricultural use disqualifies.</p></div>
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Are there loan limits?</p><p className="mt-2 opacity-80">No fixed national max like conforming; qualifying income and appraisal effectively cap the price. High-cost pockets still constrain through DTI.</p></div>
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Can I refinance a USDA loan?</p><p className="mt-2 opacity-80">Yes — USDA streamlined and non-streamlined refinances plus conventional refinance exits exist once equity and credit allow.</p></div>
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Do I need perfect credit?</p><p className="mt-2 opacity-80">No. Automated approvals favor 640-plus, but manual underwrites with strong rent history and reserves can succeed lower. Ask lenders about manual paths.</p></div>
        </div>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. USDA maps, income limits, and fees update annually; verify the address and current fee schedule before offering. See our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>
    </div>
  );
}
