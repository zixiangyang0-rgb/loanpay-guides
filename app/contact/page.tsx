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
    </article>
  );
}
