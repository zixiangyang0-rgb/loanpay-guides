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
      <section
        aria-label="Editorial byline and sources"
        className="mt-8 rounded-2xl border border-white/10 p-6"
      >
        <h2 className="text-xl font-semibold">
          Who Wrote This Page and How We Check Our Facts
        </h2>
        <p className="mt-4 text-sm leading-relaxed opacity-80">
          This page was written by Sarah Mitchell, Senior Personal Finance
          Writer; reviewed for accuracy by David Chen, CPA, our independent
          fact-checking reviewer; and edited by Emily Roberts, Managing Editor.
          Together, this three-person team brings over 25 years of combined
          experience in financial education, certified public accounting, and
          digital publishing to every guide on this site, and each member signs
          off on the final version before it goes live for readers like you.
        </p>
        <p className="mt-4 text-sm leading-relaxed opacity-80">
          Our editorial process starts with primary public sources, including
          official guidance from government agencies, central bank
          publications, consumer protection bureaus, and widely cited industry
          research. We cross-check every figure, definition, and worked
          example against at least two independent sources before publication,
          and we rewrite all findings in original plain-English language. We
          never copy content from other publishers, and our advertising
          partners never influence our editorial conclusions, comparisons, or
          recommendations in any way whatsoever.
        </p>
        <p className="mt-4 text-sm leading-relaxed opacity-80">
          This page was last reviewed and updated on November 6, 2026.
          Financial rules, rates, and program thresholds change frequently, so
          we re-check each guide on a regular review cycle and publish
          corrections promptly whenever readers flag an error at
          support@loanpaylogic.com. If you notice anything outdated, please
          tell us the page URL and what looks wrong, and our editorial team
          will verify the facts and fix the page as quickly as possible.
        </p>
      </section>
    </article>
  );
}
