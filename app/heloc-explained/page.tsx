import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HELOC Explained: Draws, Rates & Risks in Plain English",
  description:
    "What is a HELOC? How draw and repayment periods, variable rates, and lien risk work, with a $80,000 example and HELOC vs alternatives table.",
  alternates: { canonical: "https://guides.loanpaylogic.com/heloc-explained" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Home equity · Credit lines</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">HELOC Explained: Flexible Credit Secured by Your Home</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          A home equity line of credit (HELOC) is revolving credit secured by your home: borrow, repay, and re-borrow up to a limit during a draw period, then repay any balance over a repayment period. Rates are usually variable, tied to prime plus a margin, so payments move with the market. Used for phased projects or as a standby reserve, a HELOC is flexible and relatively low-rate. Used for lifestyle spending, it converts home equity — your safety net — into debt. This guide explains phases, pricing, qualification, and the math on an $80,000 line.
        </p>
      </section>
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Draw period vs repayment period</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          A common structure is a 10-year draw period followed by a 20-year repayment period. During the draw, you can borrow up to the limit and often pay interest-only on what you used — low payments but no balance reduction. After the draw ends, the line freezes: you repay principal plus interest over the remaining term, and payments can jump sharply. Some HELOCs require principal-plus-interest from day one or offer a fixed-rate lock on portions of the balance. Always ask which structure you are getting, whether the lender can freeze or reduce the line if values fall, and what floors and caps bound the rate. A floor near 4 to 5 percent and a lifetime cap near 18 percent are common frames — the floor matters when rates fall, the cap when they surge.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Qualification centers on equity, credit, and income. Most lenders cap combined loan-to-value (CLTV) at 80 to 90 percent: with a $400,000 home and $280,000 first mortgage, 80 percent CLTV allows total liens of $320,000, leaving a $40,000 line; at 90 percent the line could reach $80,000. Expect credit minimums near 620 to 680, full income verification, an appraisal or valuation, and closing costs of 0 to 2 percent — some lenders waive them but impose early-closure fees if you shut the line within two to three years. Compare draws against a fixed home-equity loan with the <a className="underline" href="https://loanpaylogic.com/mortgage-calculator/">calculators on loanpaylogic.com</a>.
        </p>
        <h2 className="mt-8 text-xl font-semibold">HELOC vs common alternatives</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Option</th><th className="py-3 pr-4">Rate type</th><th className="py-3 pr-4">Access</th><th className="py-3">Risk note</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">HELOC</td><td className="py-3 pr-4">Usually variable</td><td className="py-3 pr-4">Revolving, phased</td><td className="py-3">Payment can jump; home-secured</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Home-equity loan</td><td className="py-3 pr-4">Fixed</td><td className="py-3 pr-4">Lump sum</td><td className="py-3">Predictable; home-secured</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Cash-out refinance</td><td className="py-3 pr-4">Fixed or ARM</td><td className="py-3 pr-4">Replaces mortgage</td><td className="py-3">Resets first-lien terms</td></tr>
              <tr><td className="py-3 pr-4">Personal loan / cards</td><td className="py-3 pr-4">Fixed / variable</td><td className="py-3 pr-4">Fast, unsecured</td><td className="py-3">Higher rate, no lien</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: $80,000 line at prime + 1%</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          With prime near 7.5 percent as of autumn 2026 (illustrative), prime plus 1 point is 8.5 percent. Borrowing $40,000 interest-only costs about $283 monthly. If prime rises 2 points, the same balance costs about $350 — a 24 percent payment jump with no new borrowing. Borrow the full $80,000 and interest-only runs about $567, rising to $700 on the same shock. After the 10-year draw, amortizing $60,000 remaining over 20 years at 8.5 percent costs about $521 monthly. Budget for the repayment-phase payment from day one, not the teaser interest-only minimum, and cap draws to phased needs rather than the full limit.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Smart uses and hard limits</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Sensible uses include phased renovations that raise value or fix systems, bridge needs with a defined payoff (insurance reimbursement pending), and standby liquidity for disciplined borrowers who will not treat it as income. Poor uses include vacations, cars, and covering persistent deficits — the home becomes an ATM that charges interest. Tax rules add nuance: interest may be deductible only when the funds buy, build, or substantially improve the securing home and you itemize — consult a tax professional rather than assuming. Never draw to invest in volatile assets on margin-like terms.
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Manage the line actively: set your own principal payments during the draw, lock fixed portions when offered at attractive spreads, monitor prime moves after Fed meetings (the September 2026 hike lifted variable borrowing costs), and keep total housing debt service comfortable if income dipped 20 percent. Freeze the card or checks if spending tempts you — access friction is a feature.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Can a lender cut my HELOC?</p><p className="mt-2 opacity-80">Yes. Agreements typically allow freezing or reducing lines if values drop materially, credit deteriorates, or the home is listed. Keep utilization moderate and payments current.</p></div>
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Is HELOC interest tax-deductible?</p><p className="mt-2 opacity-80">Sometimes — generally only for buy/build/improve uses on the securing home when you itemize. Personal spending does not qualify. Confirm with a tax pro.</p></div>
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">What happens at the end of the draw?</p><p className="mt-2 opacity-80">The line closes to new draws and the balance amortizes. Payments usually rise. Some lenders offer renewal or refinance; underwrite as if they will not.</p></div>
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">HELOC or home-equity loan?</p><p className="mt-2 opacity-80">HELOC for phased or uncertain draws; fixed loan for a known lump sum where payment certainty matters. See our dedicated comparison guide.</p></div>
        </div>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. HELOC terms vary widely. Compare fixed and variable paths and read our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>
    </div>
  );
}
