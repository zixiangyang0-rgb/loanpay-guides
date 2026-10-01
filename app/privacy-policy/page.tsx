import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for guides.loanpaylogic.com explaining cookies, analytics, advertising, and how to contact us.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="glass-panel rounded-3xl p-8">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm opacity-70">Last updated: October 1, 2026</p>
      <p className="mt-4 text-sm leading-relaxed opacity-80">
        This Privacy Policy explains how guides.loanpaylogic.com collects and
        uses information. We publish educational content only, and we aim to
        collect as little personal data as possible.
      </p>
      <h2 className="mt-6 text-xl font-semibold">Information we collect</h2>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        If you email us at support@loanpaylogic.com, we receive your email
        address and message content so we can reply. Our hosting and analytics
        providers may automatically log standard technical data such as pages
        visited, device type, and approximate region for security and
        performance measurement.
      </p>
      <h2 className="mt-6 text-xl font-semibold">Cookies and advertising</h2>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        We use cookies for basic site functions and, with your consent where
        required, for measurement and advertising. Google AdSense may use
        cookies to serve and measure ads, including personalized advertising
        where permitted. You can control cookies in your browser settings and
        learn more at Google&apos;s Advertising Privacy page. Opting out of
        personalized ads does not remove ads entirely.
      </p>
      <h2 className="mt-6 text-xl font-semibold">How we use information</h2>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        We use information to operate the site, respond to reader messages,
        improve our guides, prevent abuse, and comply with legal obligations.
        We do not sell personal information and we do not use reader data to
        make lending or credit decisions.
      </p>
      <h2 className="mt-6 text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        Questions about this policy? Email support@loanpaylogic.com and we will
        respond within a reasonable timeframe.
      </p>
    </article>
  );
}
