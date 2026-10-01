import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for guides.loanpaylogic.com: cookies, Google AdSense advertising, consent choices (including non-personalized ads), data rights, and contact.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="glass-panel rounded-3xl p-8">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm opacity-70">Last updated: October 1, 2026</p>
      <p className="mt-4 text-sm leading-relaxed opacity-80">
        This Privacy Policy explains how guides.loanpaylogic.com
        (&quot;we&quot;, &quot;us&quot;) collects and uses information. We
        publish educational guides only and aim to collect as little personal
        data as possible. The site is free to read and is supported by display
        advertising.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Information we collect</h2>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        If you email us at support@loanpaylogic.com, we receive your email
        address and message content so we can reply. Our hosting provider
        (Vercel) may automatically log standard technical data such as pages
        visited, device and browser type, referrer, and approximate region for
        security, reliability, and performance measurement. We do not operate
        user accounts and do not ask for names, payment details, or loan
        application data.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Cookies and advertising</h2>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        We use cookies and similar storage for basic site functions (such as
        remembering your ad-consent choice) and, with your consent where
        required, for measurement and advertising. Google AdSense
        (pub-4906207495792820) serves ads on this site and may use cookies,
        mobile identifiers, and IP-based location to serve, measure, and
        prevent fraud around ads — including personalized advertising where
        you have consented. Google&apos;s use of advertising cookies enables
        it and its partners to serve ads based on your visits to this and
        other sites.
      </p>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        Consent management: where required (EEA, UK, Switzerland, and
        applicable US states), consent is collected through Google Funding
        Choices, our certified Consent Management Platform, which is loaded
        on every page. You can change or withdraw consent at any time via the
        consent banner or the &quot;Non-personalized only&quot; choice, which
        sets non-personalized-ads (NPA) mode. Opting out of personalized ads
        does not remove ads entirely.
      </p>
      <ul className="mt-2 list-disc pl-6 text-sm leading-relaxed opacity-80">
        <li>
          Google&apos;s Advertising Privacy &amp; how Google uses data:{" "}
          <a
            className="underline"
            href="https://business.safety.google/privacy/"
            rel="noopener"
          >
            business.safety.google/privacy
          </a>
        </li>
        <li>
          Google Ads Settings (personalization controls):{" "}
          <a
            className="underline"
            href="https://adssettings.google.com/"
            rel="noopener"
          >
            adssettings.google.com
          </a>
        </li>
        <li>
          YourAdChoices / Your Online Choices opt-outs:{" "}
          <a
            className="underline"
            href="https://optout.aboutads.info/"
            rel="noopener"
          >
            optout.aboutads.info
          </a>{" "}
          and{" "}
          <a
            className="underline"
            href="https://www.youronlinechoices.com/"
            rel="noopener"
          >
            youronlinechoices.com
          </a>
        </li>
        <li>
          Browser controls: you can block or delete cookies in your browser
          settings; blocking cookies may limit some site features.
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">How we use information</h2>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        We use information to operate the site, respond to reader messages,
        remember consent choices, improve our guides, prevent abuse, and
        comply with legal obligations. We do not sell personal information,
        we do not share reader emails with advertisers, and we do not use
        reader data to make lending or credit decisions.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Data retention and security</h2>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        Support emails are kept only as long as needed to handle your request
        and for a reasonable record-keeping period afterwards. Server logs
        are retained short-term by our hosting provider. We use HTTPS across
        the site and limit access to any correspondence to the editorial
        team.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Your rights</h2>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        Depending on where you live, you may have rights to access, correct,
        delete, or restrict the use of your personal information, to withdraw
        consent, and to opt out of certain advertising uses. To exercise a
        right, email support@loanpaylogic.com with the subject
        &quot;Privacy request&quot;; we will respond within a reasonable
        timeframe and may need to verify your identity first.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Children</h2>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        This site is general-audience educational content and is not directed
        to children under 13. We do not knowingly collect data from children;
        if you believe a child has contacted us, email us and we will delete
        the message.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Changes to this policy</h2>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        We may update this policy as the site, advertising setup, or the law
        changes. The &quot;Last updated&quot; date above shows the latest
        version; material changes will be reflected here.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        Questions about this policy or your choices? Email
        support@loanpaylogic.com and we will respond within a reasonable
        timeframe.
      </p>
    </article>
  );
}
