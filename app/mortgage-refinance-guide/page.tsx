import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "How much equity do I need?", "answer": "Usually at least 3–5% for rate-and-term conventional, 20% to avoid PMI, and more for cash-out. FHA/VA streamlines have their own seasoning rules."}, {"question": "Does refinancing hurt credit?", "answer": "One hard inquiry and a new account may dip scores slightly; rate-shopping inside two weeks counts as one. On-time payments recover quickly."}, {"question": "Can I refinance with the same lender?", "answer": "Yes, and retention offers sometimes cut fees — but still get outside quotes. Loyalty discounts must beat the market, not just sound nice."}, {"question": "What is loan seasoning?", "answer": "Minimum time since the last closing before a new refinance — often 6 months. Cash-out and investment properties face longer waits."}];

export const metadata: Metadata = {
  title: "Mortgage Refinance Guide: Break-Even, Costs & Timing",
  description:
    "When refinancing pays: rate-and-term math, closing costs, break-even formula, and a $380,000 example. Learn to time a refinance in 2026.",
  alternates: { canonical: "https://guides.loanpaylogic.com/mortgage-refinance-guide" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Mortgages · Refinance</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Mortgage Refinance Guide: Does the Math Work?</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          Refinancing replaces your current mortgage with a new one — new rate, new term, new closing costs. The classic win is rate-and-term: same balance, lower rate, lower payment. Other wins include dropping PMI or FHA MIP, shortening the term, or switching ARM to fixed for certainty. The trap is resetting the clock and paying fees that exceed the savings. This guide gives you the break-even formula, the fee anatomy, and a full $380,000 example so you can decide on numbers, not headlines.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">The break-even rule</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Divide total closing costs by monthly savings to get break-even months. A $6,000 refinance saving $180 monthly breaks even in about 33 months. Stay past break-even and you profit; sell or refinance again before it and you lose. Closing costs typically run 1 to 3 percent of the loan: lender origination, discount points, appraisal ($300–$600), title and settlement ($1,000–$2,500), recording, prepaid interest, and escrow top-ups. No-closing-cost refinances are not free — the lender covers costs with a higher rate, which is fine if you will move soon but costly if you stay. Always compare the same term: refinancing a 30-year with 24 years left into a new 30-year lowers the payment partly by stretching time, hiding true cost. Ask for a quote matching your remaining term too.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Rate context matters. As of late September 2026, 30-year averages sat in the mid-6s to low-7s after the Fed&apos;s September 16 hike — meaning borrowers who locked near 3 percent in 2021 rarely benefit from rate-and-term today, while 2023–2024 borrowers near 7.5–8 percent might. Refinance when you can cut roughly 0.75 to 1 point with a break-even inside your hold horizon, when PMI/MIP can drop, or when an ARM reset looms. Model it with the <a className="underline" href="https://loanpaylogic.com/refinance-calculator/">refinance calculator on loanpaylogic.com</a>.
        </p>
        <h2 className="mt-8 text-xl font-semibold">Refinance types compared</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Type</th><th className="py-3 pr-4">Purpose</th><th className="py-3">Watch-out</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Rate-and-term</td><td className="py-3 pr-4">Lower rate or payment</td><td className="py-3">Term reset extends payoff</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Cash-out</td><td className="py-3 pr-4">Tap equity</td><td className="py-3">Higher rate, bigger balance</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Streamline (FHA/VA)</td><td className="py-3 pr-4">Fast rate drop, low docs</td><td className="py-3">MIP/fee clock restarts</td></tr>
              <tr><td className="py-3 pr-4">Shorten term (30→15)</td><td className="py-3 pr-4">Slash lifetime interest</td><td className="py-3">Payment jumps; needs cash flow</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: $380,000 balance</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Balance $380,000 with 26 years left at 7.6 percent: payment about $2,714. Refinance to 6.5 percent with a new 30-year: payment falls to about $2,402, saving $312 monthly. Closing costs of $7,000 break even in about 22 months — a win if you stay five-plus years. But total interest rises because the clock restarts: roughly $484,000 over the new 30 years versus about $467,000 remaining on the old loan. Refinancing instead to a 25-year at 6.5 percent costs about $2,566 (saving $148) with total interest near $390,000 — saving both monthly and lifetime. The term choice, not just the rate, decides whether you truly save.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Timing and shopping tactics</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Refinance when the math clears three gates: break-even inside your likely hold, total-interest savings (or a deliberate, valued tradeoff), and improved loan features. Gather three Loan Estimates on the same day — rates move intraday — and compare APR, lender credits, points, and cash to close. Improve approval odds first: lift scores above 740 thresholds, keep DTI tidy, avoid new credit, and document income cleanly. Lock strategy matters into Fed meetings (the next FOMC decision was due late October 2026): float with a stop or lock for certainty — never gamble a purchase closing on a guess. After closing, redirect part of the savings to principal or investments rather than absorbing it all into spending.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">How much equity do I need?</summary><p className="mt-2 opacity-80">Usually at least 3–5% for rate-and-term conventional, 20% to avoid PMI, and more for cash-out. FHA/VA streamlines have their own seasoning rules.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Does refinancing hurt credit?</summary><p className="mt-2 opacity-80">One hard inquiry and a new account may dip scores slightly; rate-shopping inside two weeks counts as one. On-time payments recover quickly.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I refinance with the same lender?</summary><p className="mt-2 opacity-80">Yes, and retention offers sometimes cut fees — but still get outside quotes. Loyalty discounts must beat the market, not just sound nice.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What is loan seasoning?</summary><p className="mt-2 opacity-80">Minimum time since the last closing before a new refinance — often 6 months. Cash-out and investment properties face longer waits.</p></details>
        </div>
        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
              <li>
                <Link className="underline" href="/cash-out-refinance-guide">Cash-Out Refinance Guide</Link> — how cash-out refis compare with HELOCs and second liens.
              </li>
              <li>
                <Link className="underline" href="/mortgage-points-guide">Mortgage Points Guide</Link> — whether buying down your rate with points pays back.
              </li>
              <li>
                <Link className="underline" href="/closing-costs-guide">Closing Costs Guide</Link> — which closing fees are negotiable and which are not.
              </li>
              <li>
                <Link className="underline" href="/fixed-vs-adjustable-mortgage">Fixed vs Adjustable Mortgage</Link> — when a fixed rate beats an ARM, and vice versa.
              </li>
          </ul>
        </nav>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Rate examples are as-of illustrations. Compare live Loan Estimates and read our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Mortgage Refinance Guide: Break-Even, Costs & Timing" description="When refinancing pays: rate-and-term math, closing costs, break-even formula, and a $380,000 example. Learn to time a refinance in 2026." slug="mortgage-refinance-guide" faqs={guideFaqs} />
    </div>
  );
}
