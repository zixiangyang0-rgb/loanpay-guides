import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Can I refinance a balloon before maturity?", "answer": "Yes — most borrowers do, starting 6–12 months early. Do not wait until the final 90 days when leverage is weakest."}, {"question": "What happens if I cannot pay the balloon?", "answer": "Default, foreclosure risk, forced sale, or emergency refinance on poor terms. Contact the servicer early for options before maturity."}, {"question": "Are balloons ever a good idea?", "answer": "For investors with dated exits, bridge needs, or properties selling on schedule — and only with reserves and a backup plan."}, {"question": "How is a balloon different from an ARM?", "answer": "ARMs adjust the rate and continue payments; balloons demand the balance. ARMs have caps; balloons have cliffs."}];

export const metadata: Metadata = {
  title: "Balloon Payment Guide: Low Payments, One Big Bill",
  description:
    "Balloon mortgages and loans explained: how low early payments plus a lump-sum due date work, refinance risk, and a $300,000 example with alternatives.",
  alternates: { canonical: "https://guides.loanpaylogic.com/balloon-payment-guide" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Borrowing · Structured loans</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Balloon Payment Guide: Cheap Now, Costly Later?</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          A balloon loan keeps payments low by amortizing like a long loan but demanding the remaining balance in one lump sum after a few years — for example, payments based on 30 years with everything due in year seven. Investors flipping or selling before the date can benefit; anyone without a certain exit faces refinance, sale, or default risk at the worst moment. This guide explains the mechanics, the conditional reset options some lenders offer, and how to underwrite the balloon date before signing.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">How balloon structures work</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Common forms include 5-, 7-, or 10-year balloons amortized over 30 years, interest-only balloons where the full principal comes due, and commercial balloons with 20–25 year amortizations and 5–10 year terms. The payment looks like a standard mortgage, but the note&apos;s maturity clause accelerates everything: at month 84 on a 7-year balloon, the entire remaining balance — often 85–90 percent of the original — is due in cash, via sale, or via refinance. Some residential balloons include a conditional reset: meet payment history, occupancy, and value tests and the lender converts to a market or formula rate without a full refinance. Never assume that option exists — it must be written, with the reset rate formula disclosed.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Structure</th><th className="py-3 pr-4">Payments</th><th className="py-3 pr-4">Due at maturity</th><th className="py-3">Suits</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">7-yr balloon / 30-yr amort.</td><td className="py-3 pr-4">Like 30-yr fixed</td><td className="py-3 pr-4">~85% balance lump</td><td className="py-3">Timed sale/refi</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Interest-only balloon</td><td className="py-3 pr-4">Interest only</td><td className="py-3 pr-4">100% principal</td><td className="py-3">Bridge, investors</td></tr>
              <tr><td className="py-3 pr-4">ARM alternative</td><td className="py-3 pr-4">Adjusts, no lump</td><td className="py-3 pr-4">Ongoing payments</td><td className="py-3">Flexible hold</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: $300,000, 7-year balloon</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          At 6.5 percent amortized over 30 years, the payment is about $1,896. After 84 on-time payments you have paid about $159,300, but roughly $122,000 went to interest and the remaining balance is still about $263,000 — due in full at month 84. If values rose and rates cooperate, you sell or refinance routinely. If values fell 10 percent and rates rose 2 points — the 2008-style trap — refinancing $263,000 on a $270,000 value at higher rates strains approval and payment alike. That scenario analysis is mandatory: underwrite the balloon assuming flat values and rates 2 points higher. If the exit fails that test, choose the ARM or fixed instead. Model payoffs with <a className="underline" href="https://loanpaylogic.com/loan-tools/">loanpaylogic.com loan tools</a>.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Rules, risks, and safer paths</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Qualified-mortgage rules restrict many residential balloons; mainstream owner-occupied balloons are rarer than a decade ago, appearing more in portfolio, commercial, and investor products. Risks cluster: rate risk (refinance costs more), value risk (no equity to refinance), income risk (tighter standards later), and sale risk (illiquid market at maturity). Mitigations include a written reset option, a sinking fund saving toward the balloon monthly, a sale timeline ending a year before maturity, and a backup ARM or fixed quote secured early. For most homeowners, a 7/6 or 10/6 ARM delivers similar early savings without a cliff — the payment can adjust, but no lump sum comes due.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I refinance a balloon before maturity?</summary><p className="mt-2 opacity-80">Yes — most borrowers do, starting 6–12 months early. Do not wait until the final 90 days when leverage is weakest.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What happens if I cannot pay the balloon?</summary><p className="mt-2 opacity-80">Default, foreclosure risk, forced sale, or emergency refinance on poor terms. Contact the servicer early for options before maturity.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Are balloons ever a good idea?</summary><p className="mt-2 opacity-80">For investors with dated exits, bridge needs, or properties selling on schedule — and only with reserves and a backup plan.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">How is a balloon different from an ARM?</summary><p className="mt-2 opacity-80">ARMs adjust the rate and continue payments; balloons demand the balance. ARMs have caps; balloons have cliffs.</p></details>
        </div>
        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
              <li>
                <Link className="underline" href="/fixed-vs-adjustable-mortgage">Fixed vs Adjustable Mortgage</Link> — when a fixed rate beats an ARM, and vice versa.
              </li>
              <li>
                <Link className="underline" href="/amortization-schedule-explained">Amortization Schedule Explained</Link> — why early payments go mostly to interest.
              </li>
              <li>
                <Link className="underline" href="/mortgage-refinance-guide">Mortgage Refinance Guide</Link> — when refinancing lowers cost, and when it backfires.
              </li>
              <li>
                <Link className="underline" href="/apr-vs-apy-guide">APR vs APY Guide</Link> — how to compare true borrowing costs across offers.
              </li>
          </ul>
        </nav>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Balloon terms vary and QM rules limit availability. See our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Balloon Payment Guide: Low Payments, One Big Bill" description="Balloon mortgages and loans explained: how low early payments plus a lump-sum due date work, refinance risk, and a $300,000 example with alternatives." slug="balloon-payment-guide" faqs={guideFaqs} />
    </div>
  );
}
