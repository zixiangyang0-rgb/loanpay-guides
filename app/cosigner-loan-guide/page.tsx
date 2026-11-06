import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "How do I get released as cosigner?", "answer": "Meet the lender&apos;s on-time streak plus a solo re-qualification, or have the borrower refinance. Get release confirmations in writing and verify bureaus update."}, {"question": "Can I stop being a cosigner anytime?", "answer": "Generally no — consent is locked until contractual conditions or payoff. Never cosign assuming early exit."}, {"question": "Does cosigning affect my mortgage?", "answer": "Yes. The payment counts in your DTI unless the borrower documents 12 months of solo payments from their own funds (rules vary by program)."}, {"question": "What if the borrower dies or defaults?", "answer": "The cosigner owes the balance; some student lenders offer death discharge, many auto and personal lenders do not. Check the clause."}];

export const metadata: Metadata = {
  title: "Cosigner Loan Guide: Risks, Rights & Safer Alternatives",
  description:
    "What cosigning really means: equal liability, credit effects, release options, and alternatives for borrowers and parents considering a cosigner.",
  alternates: { canonical: "https://guides.loanpaylogic.com/cosigner-loan-guide" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Borrowing · Shared liability</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Cosigner Loan Guide: Help Without Hurting Both Sides</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          A cosigner guarantees the loan: if the primary borrower misses payments, the lender collects from the cosigner — including late marks on both credit reports, collection action, and possible lawsuits. Cosigning helps thin-credit borrowers qualify or earn lower rates on student, auto, and personal loans, but it binds the helper&apos;s borrowing power and relationships until release or payoff. This guide lays out the legal reality, the narrow cases where cosigning works, and safer alternatives for both sides.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">What cosigning legally means</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Cosigners owe 100 percent, not half: lenders can pursue either party for the full balance, usually the easier target first. The debt appears on both credit files, raising the cosigner&apos;s DTI and potentially blocking their own mortgage or refinance. Late payments scar both histories identically. Most cosigners cannot force the lender to release them — release requires the contract&apos;s conditions (often 24–48 on-time payments plus a credit re-check), a refinance solely in the borrower&apos;s name, or full payoff. Verbal side agreements (&quot;I&apos;ll pay, you just sign&quot;) do not bind the lender. Read the guaranty clause, joint-and-several language, and default triggers before signing anything.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Role</th><th className="py-3 pr-4">Owes debt?</th><th className="py-3 pr-4">On credit file?</th><th className="py-3">Can use asset?</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Primary borrower</td><td className="py-3 pr-4">Yes</td><td className="py-3 pr-4">Yes</td><td className="py-3">Yes</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Cosigner / guarantor</td><td className="py-3 pr-4">Yes, fully</td><td className="py-3 pr-4">Yes</td><td className="py-3">Usually no</td></tr>
              <tr><td className="py-3 pr-4">Authorized user</td><td className="py-3 pr-4">No</td><td className="py-3 pr-4">History shows</td><td className="py-3">Sometimes (cards)</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">When cosigning can work — with guardrails</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          The defensible case: a responsible young borrower with thin but clean history needs a starter auto or student loan, and a parent with strong credit and reserves cosigns a modest amount they could cover without hardship. Guardrails make it viable: borrow well below the cosigner&apos;s comfort, automate payments from the borrower&apos;s account with alerts to both parties, define a written family agreement (who pays, what triggers sale or refinance, calendar date to attempt release), and choose lenders advertising clear cosigner-release paths. Revisit every 12 months: can the borrower refinance solo yet? If income or habits slip, intervene early — covering one payment beats repairing a 90-day delinquency on two files.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Worked impact: $25,000 auto loan</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          A student quoted 14 percent solo on $25,000 for 60 months pays about $582; with a 750-score cosigner at 7.5 percent the payment falls to about $501 — saving $81 monthly and about $4,860 total (estimates). The cosigner&apos;s DTI absorbs $501 in obligations, potentially trimming their own mortgage capacity by roughly $80,000–$100,000 until release. If the borrower misses two payments, both scores can drop 60–100 points and the cosigner owes the arrears plus fees. Price that risk honestly: would you gift this amount? If not, prefer alternatives — a cheaper car, larger down payment, secured card building, or delayed purchase. Test solo-vs-joint payments on <a className="underline" href="https://loanpaylogic.com/loan-tools/">loanpaylogic.com loan tools</a>.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Safer alternatives for both sides</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Borrowers can build with secured cards, credit-builder loans, and six months of documented on-time rent and utilities; buy less car; or seek co-borrower structures where both own the asset. Helpers can gift a down payment (with proper gift letters) instead of guaranteeing debt, lend directly with a written promissory note and collateral, or help with budgeting and income rather than signatures. Parents of students should compare cosigned private loans against federal Direct loans that need no cosigner — often the safer base before any private supplement.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">How do I get released as cosigner?</summary><p className="mt-2 opacity-80">Meet the lender&apos;s on-time streak plus a solo re-qualification, or have the borrower refinance. Get release confirmations in writing and verify bureaus update.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I stop being a cosigner anytime?</summary><p className="mt-2 opacity-80">Generally no — consent is locked until contractual conditions or payoff. Never cosign assuming early exit.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Does cosigning affect my mortgage?</summary><p className="mt-2 opacity-80">Yes. The payment counts in your DTI unless the borrower documents 12 months of solo payments from their own funds (rules vary by program).</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">What if the borrower dies or defaults?</summary><p className="mt-2 opacity-80">The cosigner owes the balance; some student lenders offer death discharge, many auto and personal lenders do not. Check the clause.</p></details>
        </div>
        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
              <li>
                <Link className="underline" href="/student-loan-refinance-guide">Student Loan Refinance Guide</Link> — when refinancing student loans pays off.
              </li>
              <li>
                <Link className="underline" href="/auto-loan-guide">Auto Loan Guide</Link> — how auto financing, terms, and trade-ins work.
              </li>
              <li>
                <Link className="underline" href="/credit-score-mortgage-guide">Credit Score Mortgage Guide</Link> — which credit score unlocks which loan pricing.
              </li>
              <li>
                <Link className="underline" href="/personal-loan-guide">Personal Loan Guide</Link> — how unsecured loans price risk without collateral.
              </li>
          </ul>
        </nav>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Guaranty terms vary by lender and state. Read every clause and our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Cosigner Loan Guide: Risks, Rights & Safer Alternatives" description="What cosigning really means: equal liability, credit effects, release options, and alternatives for borrowers and parents considering a cosigner." slug="cosigner-loan-guide" faqs={guideFaqs} />
    </div>
  );
}
