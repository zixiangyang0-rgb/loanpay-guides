import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { Byline, GuideSchema } from "../components/schema";

const guideFaqs: { question: string; answer: string }[] = [{"question": "Can I choose the catch-up method?", "answer": "Usually yes: pay the shortage in full within 30 days or spread it over 12 months. Spreading is automatic if you do nothing."}, {"question": "Why is my cushion required?", "answer": "Federal rules allow up to two months&apos; cushion so one bill increase does not overdraw the account. It is not profit — it stays in your escrow."}, {"question": "Who pays if the servicer misses a tax bill?", "answer": "The servicer must make it right and cover penalties from the error, but monitor bills yourself and keep confirmations."}, {"question": "Does escrow earn interest?", "answer": "Depends on state law — some states require small interest payments to borrowers, most do not. Check your state and statement."}];

export const metadata: Metadata = {
  title: "Escrow Explained: Taxes, Insurance & Shortage Notices",
  description:
    "Mortgage escrow in plain English: how servicers collect taxes and insurance, why payments rise, shortage vs deficiency, and a worked cushion example.",
  alternates: { canonical: "https://guides.loanpaylogic.com/escrow-explained" },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Mortgages · Servicing</p>
        <h1 className="hero-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">Escrow Explained: Why Your Payment Changes</h1>
        <p className="mt-4 text-sm opacity-80">Updated: October 2026 · Educational guide, not financial advice.</p>
        <p className="mt-4 text-base leading-relaxed opacity-90">
          Escrow is the holding account your mortgage servicer uses to pay property taxes and homeowners insurance on your behalf. Each month you deposit one-twelfth of each annual bill plus a small federally limited cushion; the servicer pays the bills when due. Once a year the servicer reconciles: higher bills mean a shortage and a higher payment, lower bills mean a refund or lower payment. Most &quot;my payment went up with a fixed rate&quot; mysteries trace to this statement. This guide decodes it line by line.
        </p>
              <Byline />
      </section>

      <AdSlot format="in-article" slot="TODO-guides-inarticle-1" label="In-article ad 1" />
      <article className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">What flows through escrow</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Standard escrow covers county and city property taxes, homeowners insurance, and often flood insurance where required, plus FHA MIP or other insurance where applicable. HOA dues almost never flow through escrow — you pay those separately. At closing, the lender seeds escrow with two to several months of each item plus a cushion up to one-sixth of annual disbursements (two months) under RESPA rules. Your first-year payment uses estimates: often the seller&apos;s older tax figure and the initial insurance quote. When the county reassesses after sale — common in California-style, Texas, and Florida markets — the real bill can jump 10 to 30 percent, creating the classic year-two shortage. Insurance renewals after hail, hurricane, or wildfire seasons do the same.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead><tr className="border-b border-white/15 text-xs uppercase tracking-wide opacity-70"><th className="py-3 pr-4">Line on statement</th><th className="py-3 pr-4">Meaning</th><th className="py-3">Your move</th></tr></thead>
            <tbody className="opacity-90">
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Projected disbursements</td><td className="py-3 pr-4">Next year&apos;s tax + insurance</td><td className="py-3">Verify against actual bills</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Cushion (up to 2 months)</td><td className="py-3 pr-4">Required buffer</td><td className="py-3">Not negotiable; capped by law</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 pr-4">Shortage</td><td className="py-3 pr-4">Collected &lt; needed</td><td className="py-3">Pay lump or spread 12 months</td></tr>
              <tr><td className="py-3 pr-4">Surplus / overage</td><td className="py-3 pr-4">Collected &gt; needed + cushion</td><td className="py-3">$50+ refunded; small kept</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Worked example: $1,200 shortage</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Taxes rise from $4,400 to $5,200 (+$800) and insurance from $1,800 to $2,200 (+$400): next year needs $1,200 more, or $100 monthly, plus the $1,200 already-short balance to catch up. Spread over 12 months, the payment rises $200 ($100 new cost + $100 catch-up) for a year, then settles $100 higher. Paying the $1,200 shortage lump-sum limits the rise to $100 immediately. Either way the higher tax and insurance persist — shopping insurance, appealing assessments, and checking exemptions (homestead, senior, veteran) attack the root. Use <a className="underline" href="https://loanpaylogic.com/mortgage-calculator/">loanpaylogic.com mortgage tools</a> to preview tax and insurance scenarios before buying.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Appeals, shopping, and waivers</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Appeal assessments with recent comparable sales, photos of condition issues, and measurement corrections — many counties allow informal review before formal hearings, with deadlines in spring. Shop insurance yearly with identical coverage limits and deductibles; raising deductibles from $1,000 to $2,500 can cut premiums 10 to 20 percent if you hold the cash reserve. Ask about escrow waiver only with 20 percent-plus equity, strong history, and a fee (often 0.25 point): you then owe lump-sum tax and insurance yourself, which demands discipline. Never let insurance lapse — force-placed coverage costs multiples of market policies and protects only the lender.
        </p>
        <AdSlot format="display" slot="TODO-guides-display-2" label="Mid-article display ad" />

                <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Can I choose the catch-up method?</summary><p className="mt-2 opacity-80">Usually yes: pay the shortage in full within 30 days or spread it over 12 months. Spreading is automatic if you do nothing.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Why is my cushion required?</summary><p className="mt-2 opacity-80">Federal rules allow up to two months&apos; cushion so one bill increase does not overdraw the account. It is not profit — it stays in your escrow.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Who pays if the servicer misses a tax bill?</summary><p className="mt-2 opacity-80">The servicer must make it right and cover penalties from the error, but monitor bills yourself and keep confirmations.</p></details>
          <details className="glass-card rounded-2xl p-5"><summary className="font-semibold cursor-pointer">Does escrow earn interest?</summary><p className="mt-2 opacity-80">Depends on state law — some states require small interest payments to borrowers, most do not. Check your state and statement.</p></details>
        </div>
        <p className="mt-8 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          This article is general education, not financial advice. Escrow rules follow RESPA and servicer guidelines; confirm figures on your annual statement. See our <Link className="underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </article>

      <AdSlot format="multiplex" slot="TODO-guides-multiplex-3" label="Multiplex ad" />
      <GuideSchema title="Escrow Explained: Taxes, Insurance & Shortage Notices" description="Mortgage escrow in plain English: how servicers collect taxes and insurance, why payments rise, shortage vs deficiency, and a worked cushion example." slug="escrow-explained" faqs={guideFaqs} />
    </div>
  );
}
