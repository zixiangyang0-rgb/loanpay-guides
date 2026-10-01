import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About LoanPay Guides",
  description:
    "Learn what guides.loanpaylogic.com publishes, who writes it, and how our educational guides help readers understand money topics.",
};

export default function AboutPage() {
  return (
    <article className="glass-panel rounded-3xl p-8">
      <h1 className="text-3xl font-bold">About LoanPay Guides</h1>
      <p className="mt-4 text-sm leading-relaxed opacity-80">
        Welcome to guides.loanpaylogic.com — a plain-English learning hub for
        mortgages, saving, investing basics, small-business costs, and everyday
        planning. Our mission is simple: turn confusing money topics into
        step-by-step guides anyone can follow.
      </p>
      <p className="mt-4 text-sm leading-relaxed opacity-80">
        Each article is researched from public sources and written by our
        editorial team in original language. We focus on educational content
        only: explaining how things work, showing worked examples, and helping
        you compare options. We do not sell loans, insurance, or investment
        products, and we do not provide personalized recommendations.
      </p>
      <p className="mt-4 text-sm leading-relaxed opacity-80">
        This site is part of the LoanPay Logic family and is monetized with
        display advertising so the guides can stay free to read. If you have
        feedback, corrections, or topic requests, please email us at
        support@loanpaylogic.com — we read every message.
      </p>
    </article>
  );
}
