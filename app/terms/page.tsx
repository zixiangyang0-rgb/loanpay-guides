import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for guides.loanpaylogic.com covering acceptable use, intellectual property, and limitations.",
};

export default function TermsPage() {
  return (
    <article className="glass-panel rounded-3xl p-8">
      <h1 className="text-3xl font-bold">Terms of Use</h1>
      <p className="mt-2 text-sm opacity-70">Last updated: October 1, 2026</p>
      <p className="mt-4 text-sm leading-relaxed opacity-80">
        By visiting guides.loanpaylogic.com, you agree to these Terms of Use.
        If you do not agree, please do not use the site.
      </p>
      <h2 className="mt-6 text-xl font-semibold">Educational content only</h2>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        All articles are provided for general educational purposes only. Nothing
        here is financial, legal, tax, or investment advice, and nothing
        creates a professional-client relationship. Always verify numbers with
        official sources and consider speaking with a qualified professional
        before acting.
      </p>
      <h2 className="mt-6 text-xl font-semibold">Acceptable use</h2>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        You may read, share links to, and quote short excerpts of our guides
        with attribution. You may not copy entire articles, scrape the site at
        scale, attempt to disrupt the service, or misrepresent our content as
        your own.
      </p>
      <h2 className="mt-6 text-xl font-semibold">Intellectual property</h2>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        All text, layouts, and graphics on guides.loanpaylogic.com are owned by
        us or our licensors and protected by applicable laws. Third-party marks
        belong to their respective owners.
      </p>
      <h2 className="mt-6 text-xl font-semibold">Limitation of liability</h2>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        The site is provided &quot;as is&quot; without warranties of any kind.
        To the maximum extent permitted by law, we are not liable for any loss
        arising from your use of, or reliance on, the educational content.
      </p>
      <h2 className="mt-6 text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        For questions about these terms, email support@loanpaylogic.com.
      </p>
      <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-sm font-semibold">Keep reading</p>
        <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
          <li>
            <Link className="underline" href="/closing-costs-guide">Closing Costs Guide</Link> — which closing fees are negotiable and which are not.
          </li>
          <li>
            <Link className="underline" href="/loan-origination-fees-guide">Loan Origination Fees Guide</Link> — what origination charges cover and how to compare them.
          </li>
          <li>
            <Link className="underline" href="/cosigner-loan-guide">Cosigner Loan Guide</Link> — what cosigning risks for borrower and cosigner alike.
          </li>
        </ul>
      </nav>
    </article>
  );
}
