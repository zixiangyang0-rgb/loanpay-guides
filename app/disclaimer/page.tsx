import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Disclaimer for guides.loanpaylogic.com: educational content only, not financial or professional advice.",
};

export default function DisclaimerPage() {
  return (
    <article className="glass-panel rounded-3xl p-8">
      <h1 className="text-3xl font-bold">Disclaimer</h1>
      <p className="mt-4 text-sm leading-relaxed opacity-80">
        Everything published on guides.loanpaylogic.com is for general
        educational purposes only. We explain concepts such as mortgage
        options, retirement math, marketplace fees, shipping formulas, and
        housing trade-offs so readers can learn the basics — we do not provide
        financial, investment, legal, or tax advice.
      </p>
      <p className="mt-4 text-sm leading-relaxed opacity-80">
        Examples and numbers in our guides are simplified illustrations, not
        promises of results. Interest rates, fees, tax rules, and carrier
        policies change over time and vary by location and provider. Always
        confirm current terms with the official lender, platform, or carrier
        before making a decision.
      </p>
      <p className="mt-4 text-sm leading-relaxed opacity-80">
        Your situation is unique. Please do your own research and, where
        appropriate, consult a licensed financial advisor, accountant, or
        attorney. If you spot an error or outdated detail, contact us at
        support@loanpaylogic.com and we will review it promptly.
      </p>
      <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-sm font-semibold">Keep reading</p>
        <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
          <li>
            <Link className="underline" href="/mortgage-payment-guide">Mortgage Payment Guide</Link> — how principal, interest, taxes, and insurance combine into one bill.
          </li>
          <li>
            <Link className="underline" href="/apr-vs-apy-guide">APR vs APY Guide</Link> — how to compare true borrowing costs across offers.
          </li>
          <li>
            <Link className="underline" href="/debt-snowball-vs-avalanche">Debt Snowball vs Avalanche</Link> — which payoff order saves more interest.
          </li>
        </ul>
      </nav>
    </article>
  );
}
