import type { Metadata } from "next";
import Link from "next/link";
import AffordCalc from "./calculator";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Should I use gross or take-home pay?", "answer": "Lenders use gross; your personal budget should use take-home after taxes, retirement, and health costs. Run both and honor the lower answer."}, {"question": "Does preapproval equal affordability?", "answer": "No. Preapproval states a maximum based on lender risk, not your comfort with repairs, childcare, or savings goals. Treat it as a cap."}, {"question": "How do two incomes change the math?", "answer": "Consider whether you could carry the payment on one income if needed. Many couples buy on the lower or more stable income for resilience."}, {"question": "What if I am self-employed?", "answer": "Lenders average one to two years of adjusted net income, which often trails gross revenue. Keep clean books and larger reserves."}];

export const metadata: Metadata = {
  title: "How Much House Can I Afford? Rules, Math & Examples",
  description:
    "How much house can you afford? Learn the 28/36 rule, DTI math, down payment effects, and a worked $120,000-income example with an interactive estimator.",
  alternates: { canonical: "https://guides.loanpaylogic.com/how-much-house-can-i-afford" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Mortgages · Affordability</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">How Much House Can I Afford? A Calm, Honest Formula</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          Affordability is not the maximum a lender will approve — it is the price you can carry comfortably through job changes, repairs, and rising taxes. Lenders anchor on your debt-to-income ratio, but your real budget must also cover maintenance, utilities, commuting, childcare, and savings. This guide shows the classic 28/36 guideline, translates income into a price range at today&apos;s rates, and works a complete example for a $120,000 household income so you can adapt it to your own numbers.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">The 28/36 rule and DTI</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Lenders split debt-to-income into two ratios. The front-end ratio caps housing costs — principal, interest, taxes, insurance, HOA, and mortgage insurance — usually near 28 percent of gross monthly income for conventional loans, though automated approvals sometimes stretch higher with strong credit and reserves. The back-end ratio caps all monthly debts including car loans, student loans, and minimum card payments, usually near 36 to 45 percent depending on the program. FHA allows higher back-end ratios with compensating factors; VA uses residual income instead of a hard DTI in many cases. Your credit score, down payment, cash reserves, and employment stability all shift what a lender accepts — but acceptance is a ceiling, not a recommendation.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          For personal budgeting, many planners suggest keeping total housing under 25 to 28 percent of take-home pay and all debts under 36 percent, with a full emergency fund intact. The gap between lender maximum and comfortable budget is where buyers get into trouble, especially when taxes reassess higher in year two. Start from your take-home pay, subtract savings goals and real living costs, and let the remainder set the payment — then translate that payment into a price. The <a className="underline" href="https://loanpaylogic.com/affordability-calculator/">affordability calculator on loanpaylogic.com</a> automates that translation.
        </p>
        <AffordCalc />
        <h2 className="mt-8 text-xl font-semibold">What changes your price range most</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Factor</th><th className="py-3 pr-4">Effect on budget</th><th className="py-3">Example</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Interest rate ±1 point</td><td className="py-3 pr-4">~±10% price</td><td className="py-3">7.5%→6.5% adds ~$40k per $400k</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Down payment 5%→20%</td><td className="py-3 pr-4">Smaller loan, no PMI</td><td className="py-3">Saves ~$150–$300/mo PMI</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Property tax 0.5%→2.0%</td><td className="py-3 pr-4">Large swing</td><td className="py-3">$500/mo gap on $400k home</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">$500/mo car or student debt</td><td className="py-3 pr-4">Cuts price ~$80–$100k</td><td className="py-3">Raises back-end DTI directly</td></tr>
              <tr><td className="py-3 pr-4">HOA $0→$350</td><td className="py-3 pr-4">Cuts price ~$60k</td><td className="py-3">Counts in front-end ratio</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: $120,000 income</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          A household earning $120,000 gross makes $10,000 per month. At 28 percent, the housing ceiling is $2,800; at a stricter 25 percent of an estimated $7,800 take-home, comfort is about $1,950 to $2,200. Assume 10 percent down, 6.9 percent rate (illustrative for late 2026), 1.1 percent property tax, $1,800 insurance, and 0.5 percent PMI. A $380,000 price means a $342,000 loan: principal and interest near $2,266, tax $348, insurance $150, PMI $143 — total about $2,907, slightly above the 28 percent guideline. Dropping to $340,000 brings the total near $2,620, inside the guideline with room for maintenance at roughly 1 percent of value per year ($283 per month) plus utilities.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Now add debts: $450 student loan plus $380 car payment totals $830. Back-end capacity at 36 percent is $3,600, so housing plus $830 must fit — leaving $2,770 for housing. The $340,000 home fits; the $380,000 home plus debts totals $3,737, over the line without compensating strengths. Paying off the car before buying would restore roughly $70,000 in price power — often cheaper than stretching. Remember conforming limits too: the 2026 baseline of $832,750 covers most buyers, so limit issues only bite in high-cost markets or for jumbo needs.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Beyond the formula: the true cost checklist</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Budget 1 to 2 percent of the home&apos;s value yearly for maintenance — more for older homes — plus higher utilities, furnishings, and commuting changes. Get insurance quotes before offering in coastal, wildfire, or hail zones where premiums can double the estimate. Ask for the HOA budget, reserve study, and pending assessments on condos. Keep three to six months of total housing costs liquid after closing rather than draining every dollar to the down payment. A slightly smaller home with reserves beats a maxed-out purchase that breaks at the first roof leak.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Should I use gross or take-home pay?</summary><p className="mt-2 opacity-80">Lenders use gross; your personal budget should use take-home after taxes, retirement, and health costs. Run both and honor the lower answer.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Does preapproval equal affordability?</summary><p className="mt-2 opacity-80">No. Preapproval states a maximum based on lender risk, not your comfort with repairs, childcare, or savings goals. Treat it as a cap.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">How do two incomes change the math?</summary><p className="mt-2 opacity-80">Consider whether you could carry the payment on one income if needed. Many couples buy on the lower or more stable income for resilience.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What if I am self-employed?</summary><p className="mt-2 opacity-80">Lenders average one to two years of adjusted net income, which often trails gross revenue. Keep clean books and larger reserves.</p></details>
        </div>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Income examples are illustrations. Estimate your range with the <a className="underline" href="https://loanpaylogic.com/affordability-calculator/">loanpaylogic.com affordability calculator</a> and read our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="How Much House Can I Afford? Rules, Math & Examples" description="How much house can you afford? Learn the 28/36 rule, DTI math, down payment effects, and a worked $120,000-income example with an interactive estimator." slug="how-much-house-can-i-afford" faqs={guideFaqs} />
    </div>
  );
}
