import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Can I have both?", "answer": "Yes, if equity and DTI allow, but stacking liens raises risk and paperwork. Most households do better with one well-chosen product."}, {"question": "Which has lower closing costs?", "answer": "HELOCs often advertise lower upfront costs but may add annual or early-closure fees. Compare two-year and five-year all-in costs, not just day-one fees."}, {"question": "Can I lock a HELOC rate?", "answer": "Many lenders offer fixed-rate lock options on drawn portions for a fee or spread. Ask about minimum lock amounts and whether new draws remain variable."}, {"question": "What if home values fall?", "answer": "Lenders can freeze HELOC draws and both products leave you owing on a smaller equity cushion. Borrow well below the maximum to keep margin."}];

export const metadata: Metadata = {
  title: "Home Equity Loan vs HELOC: Lump Sum or Credit Line?",
  description:
    "Home equity loan vs HELOC compared: fixed vs variable rates, payments, fees, and use cases, with a $60,000 example and decision table.",
  alternates: { canonical: "https://guides.loanpaylogic.com/home-equity-loan-vs-heloc" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Home equity · Product choice</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Home Equity Loan vs HELOC: Which Fits Your Project?</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          Both products borrow against home equity, but they behave differently. A home equity loan delivers one lump sum at a fixed rate with equal payments from day one. A HELOC offers a reusable credit line, usually at a variable rate, with flexible draws and often interest-only minimums at first. Choose the loan for known, one-time costs and payment certainty; choose the line for phased, uncertain, or standby needs where flexibility outweighs rate risk. Either way your home secures the debt — missed payments can lead to foreclosure.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Core differences</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Funding is the first split: lump sum versus as-needed draws. Pricing is the second: fixed APR locked at closing versus variable tied to prime plus margin with floors, caps, and periodic adjustments. Payments are the third: immediate full amortization versus draw-phase flexibility then higher repayment-phase amortization. Fees differ too — equity loans often carry 1 to 3 percent in closing costs with fixed terms of 5 to 30 years, while HELOCs often advertise low or zero closing costs but add annual fees, inactivity fees, or early-closure penalties around $500. Qualification overlaps: both generally want 15 to 20 percent equity remaining, debt-to-income under about 43 to 50 percent, and credit typically 680-plus for best pricing.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Feature</th><th className="py-3 pr-4">Home equity loan</th><th className="py-3">HELOC</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Disbursement</td><td className="py-3 pr-4">Single lump sum</td><td className="py-3">Multiple draws to limit</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Rate</td><td className="py-3 pr-4">Fixed</td><td className="py-3">Usually variable</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Payment stability</td><td className="py-3 pr-4">Level from month one</td><td className="py-3">Low then higher</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Best for</td><td className="py-3 pr-4">Single project, consolidation</td><td className="py-3">Phased remodel, reserve</td></tr>
              <tr><td className="py-3 pr-4">Discipline risk</td><td className="py-3 pr-4">Lower — no re-borrowing</td><td className="py-3">Higher — reusable temptation</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: $60,000 need</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          A $60,000 equity loan at 8.0 percent fixed for 15 years costs about $573 monthly with total interest near $43,200 (estimate). A $60,000 HELOC at 8.5 percent variable drawn as $20,000 in three phases costs interest only on amounts actually used — roughly $142 monthly per $20,000 drawn — but if the full $60,000 stays out and the rate rises 2 points, interest-only jumps from about $425 to $525. Over a full 20-year amortization at 8.5 percent, $60,000 costs about $521 monthly. The loan wins on certainty and total-cost control for a single contractor bill; the line wins when the project scope is uncertain or spread over a year, because undrawn funds cost nothing.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Decision rules</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Pick the loan when the amount and timing are known — roof replacement quote in hand, fixed-rate consolidation plan, tuition bill due. Pick the HELOC when draws are phased — multi-stage remodel, gradual repairs — or when you want a low-cost standby you may barely use. Consider a cash-out refinance instead when your first mortgage rate is well above current offers and you need a large sum; it replaces rather than stacks debt. Consider unsecured options when borrowing is small or you must not risk the home. Whatever you choose, keep combined housing payments resilient to a rate shock and an income dip, and get quotes for both structures from at least two lenders — including a credit union — via <a className="underline" href="https://loanpaylogic.com/mortgage-comparison-calculator/">loanpaylogic.com comparison tools</a>.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Tax note: interest on either product is generally deductible only if funds buy, build, or substantially improve the securing home and you itemize deductions. Debt consolidation or personal spending does not qualify under current law. Confirm with a tax professional.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I have both?</summary><p className="mt-2 opacity-80">Yes, if equity and DTI allow, but stacking liens raises risk and paperwork. Most households do better with one well-chosen product.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Which has lower closing costs?</summary><p className="mt-2 opacity-80">HELOCs often advertise lower upfront costs but may add annual or early-closure fees. Compare two-year and five-year all-in costs, not just day-one fees.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I lock a HELOC rate?</summary><p className="mt-2 opacity-80">Many lenders offer fixed-rate lock options on drawn portions for a fee or spread. Ask about minimum lock amounts and whether new draws remain variable.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What if home values fall?</summary><p className="mt-2 opacity-80">Lenders can freeze HELOC draws and both products leave you owing on a smaller equity cushion. Borrow well below the maximum to keep margin.</p></details>
        </div>
        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
              <li>
                <Link className="underline" href="/heloc-explained">HELOC Explained</Link> — how draw periods, variable rates, and lien risk work.
              </li>
              <li>
                <Link className="underline" href="/cash-out-refinance-guide">Cash-Out Refinance Guide</Link> — how cash-out refis compare with HELOCs and second liens.
              </li>
              <li>
                <Link className="underline" href="/mortgage-refinance-guide">Mortgage Refinance Guide</Link> — when refinancing lowers cost, and when it backfires.
              </li>
              <li>
                <Link className="underline" href="/mortgage-payment-guide">Mortgage Payment Guide</Link> — how principal, interest, taxes, and insurance combine into one bill.
              </li>
          </ul>
        </nav>
        <p className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed opacity-90">
          <span className="font-semibold">Official resources:</span> the <a className="underline" href="https://www.consumerfinance.gov/ask-cfpb/category-mortgages/">CFPB home-equity guidance</a> comparing loans and lines, <a className="underline" href="https://www.hud.gov/buying">HUD home-equity resources</a>, and <a className="underline" href="https://www.fhfa.gov/">FHFA housing data</a>.
        </p>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Examples are estimates. Compare live terms and read our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Home Equity Loan vs HELOC: Lump Sum or Credit Line?" description="Home equity loan vs HELOC compared: fixed vs variable rates, payments, fees, and use cases, with a $60,000 example and decision table." slug="home-equity-loan-vs-heloc" faqs={guideFaqs} />
    </div>
  );
}
