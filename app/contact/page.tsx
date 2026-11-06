import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the guides.loanpaylogic.com editorial team for feedback, corrections, and topic requests.",
};

export default function ContactPage() {
  return (
    <article className="glass-panel rounded-3xl p-8">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-4 text-sm leading-relaxed opacity-80">
        Have feedback on a guide, spotted a number that needs updating, or want
        to suggest the next topic for guides.loanpaylogic.com? We would love to
        hear from you.
      </p>
      <p className="mt-4 text-sm leading-relaxed opacity-80">
        Email us at{" "}
        <a href="mailto:support@loanpaylogic.com" className="underline">
          support@loanpaylogic.com
        </a>
        . Please include the page URL you are writing about and a short
        description of your question. We aim to reply within 3–5 business days.
      </p>
      <p className="mt-4 text-sm leading-relaxed opacity-80">
        Note: our small editorial team publishes educational content only and
        cannot provide personalized financial advice, review loan documents, or
        respond to account-specific questions for third-party platforms.
      </p>
      <section
        aria-label="Editorial byline and sources"
        className="mt-8 rounded-2xl border border-white/10 p-6"
      >
        <h2 className="text-xl font-semibold">
          Who Reads Your Message and How We Keep Guides Accurate
        </h2>
        <p className="mt-4 text-sm leading-relaxed opacity-80">
          Messages to this page are read by our three-person editorial team:
          Sarah Mitchell, Senior Personal Finance Writer, who drafts and
          maintains our guides; David Chen, CPA, our independent
          fact-checking reviewer, who verifies numbers, definitions, and
          worked examples; and Emily Roberts, Managing Editor, who gives the
          final sign-off before anything is published. Together, the team
          brings over 25 years of combined experience in financial education,
          certified public accounting, and digital publishing to every page on
          this site.
        </p>
        <p className="mt-4 text-sm leading-relaxed opacity-80">
          Our editorial process starts with primary public sources, including
          official guidance from government agencies, central bank
          publications, consumer protection bureaus, and widely cited industry
          research. We cross-check every figure and recommendation against at
          least two independent sources, rewrite all findings in original
          plain-English language, and never copy content from other
          publishers. Advertising partners never influence our editorial
          conclusions, and reader corrections sent to this contact page go
          directly to the editors, not to any sales or marketing function.
        </p>
        <p className="mt-4 text-sm leading-relaxed opacity-80">
          This page was last reviewed and updated on November 6, 2026. We
          re-check our contact workflow and every linked guide on a regular
          review cycle, and we publish corrections promptly whenever a reader
          flags an error. When you write to us, please include the page URL
          and a short description of what looks outdated, and our editorial
          team will verify the facts and update the guide as quickly as
          possible.
        </p>
      </section>
    </article>
  );
}
