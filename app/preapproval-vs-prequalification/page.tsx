import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preapproval vs Prequalification: What Sellers Trust",
  description:
    "Preapproval vs prequalification explained: verification levels, documents, timing, credit effects, and how to make an offer that wins.",
  alternates: { canonical: "https://guides.loanpaylogic.com/preapproval-vs-prequalification" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Mortgages · Homebuying process</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Preapproval vs Prequalification: Know Before You Offer</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          Prequalification is a quick, unverified estimate from self-reported numbers. Preapproval is a documented, underwriter-backed review of credit, income, and assets stating what a lender will likely lend. Sellers and listing agents trust the second and mostly ignore the first. In competitive markets, offers without a real preapproval rarely get countered. This guide shows what each includes, which documents to gather, how credit is affected, and how to turn approval into an offer that closes.
        </p>
      </section>
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">What each actually verifies</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Prequalification may take ten minutes online with no pay stubs or tax returns — useful for early budgeting, worthless as proof of funds. Preapproval pulls credit, verifies W-2s or 1099s, tax returns, bank statements, and employment, runs automated underwriting, and often includes conditions (appraisal, title, verification of funds to close). Fully underwritten or TBD approvals go further, clearing income and assets before you find the property so only the collateral remains. Ask your lender which level they issue: a one-page letter with a live contact, income verification date, and expiration (usually 60–90 days) signals real work behind it.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Feature</th><th className="py-3 pr-4">Prequalification</th><th className="py-3">Preapproval</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Verification</td><td className="py-3 pr-4">Self-reported</td><td className="py-3">Docs + credit + AUS</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Time</td><td className="py-3 pr-4">Minutes</td><td className="py-3">Hours to days</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Seller weight</td><td className="py-3 pr-4">Little</td><td className="py-3">Strong</td></tr>
              <tr><td className="py-3 pr-4">Credit check</td><td className="py-3 pr-4">Often none/soft</td><td className="py-3">Hard pull (rate-shop window)</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Documents and timing</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Gather photo ID, 30 days of pay stubs, two years of W-2s/1099s and tax returns, two to three months of all bank and investment statements (every page, even blanks), and explanations for large deposits. Self-employed borrowers add profit-and-loss statements and two years of business returns. Get preapproved two to three months before serious shopping: time to fix findings, improve scores, and address DTI without pressure. Refresh the letter if it expires, income changes, or you switch programs (conventional to FHA, for example). Keep finances frozen after approval — no new credit, job changes, or large undocumented transfers until funding.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Worked scenario: winning without overpaying</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Two buyers offer $415,000 on a $410,000 listing. Buyer A attaches a prequalification and 5 percent down with vague funds. Buyer B attaches a fully underwritten preapproval, 10 percent down documented across two seasoned accounts, a lender contact who answers on weekends, proof of reserves covering six months, and an appraisal-gap plan capped at $10,000. Buyer B wins at the same price or even $5,000 less because certainty of close outweighs a thin top bid. Strength signals — larger earnest money, flexible closing, clean conditions — beat escalation clauses built on unverified numbers. Check payment comfort for any price with the <a className="underline" href="https://loanpaylogic.com/affordability-calculator/">loanpaylogic.com affordability calculator</a> before stretching.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Protecting approval to closing</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Lenders re-verify credit, employment, and funds before funding. A new car loan, missed payment, or job switch can trigger re-underwriting or denial — even with a preapproval letter. Keep payments current, avoid moving money between accounts unnecessarily, document every gift with a proper letter and trail, and disclose new debts immediately. If denied, request the specific reasons in writing, address them (DTI, reserves, property issues), and seek a second opinion from a different lender type — banks, credit unions, and brokers see risk differently.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Does preapproval guarantee the loan?</p><p className="mt-2 opacity-80">No — it is conditional on appraisal, title, unchanged finances, and final underwriting. Treat it as highly likely, not certain.</p></div>
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Will multiple preapprovals hurt credit?</p><p className="mt-2 opacity-80">Rate-shopping pulls within about two weeks generally count as one inquiry. Batch applications rather than spreading them over months.</p></div>
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">How much should my letter show?</p><p className="mt-2 opacity-80">Ask for the letter to match the offer price, not your maximum — showing $600,000 capacity on a $450,000 offer weakens negotiation.</p></div>
          <div className="glass-card rounded-2xl p-5"><p className="font-semibold">Preapproval vs pre-qualification spelling?</p><p className="mt-2 opacity-80">Lenders use both spellings; substance matters more than the hyphen. Ask what was verified, not what it is called.</p></div>
        </div>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Lender processes vary; confirm conditions and expiration in writing. See our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>
    </div>
  );
}
