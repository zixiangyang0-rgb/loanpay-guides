import type { Metadata } from "next";

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
    </article>
  );
}
