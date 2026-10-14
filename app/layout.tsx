import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import ConsentBanner from "./components/consent";
import { OrgJsonLd } from "./components/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://guides.loanpaylogic.com"),
  title: {
    default: "LoanPay Guides | Practical Money, Mortgage & Everyday Finance Guides",
    template: "%s | LoanPay Guides",
  },
  description:
    "LoanPay Guides (guides.loanpaylogic.com) publishes clear, educational guides on mortgages, saving, investing basics, shipping math, and everyday money decisions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LoanPay Guides | Practical Money, Mortgage & Everyday Finance Guides",
    description:
      "Clear, educational guides on mortgages, saving, investing basics, shipping math, and everyday money decisions.",
    url: "https://guides.loanpaylogic.com",
    siteName: "LoanPay Guides",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanPay Guides | Practical Money, Mortgage & Everyday Finance Guides",
    description:
      "Clear, educational guides on mortgages, saving, investing basics, shipping math, and everyday money decisions.",
  },
  other: {
    "google-adsense-account": "ca-pub-4906207495792820",
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            LoanPay Guides
          </Link>
          <nav className="flex flex-wrap items-center gap-4 text-sm opacity-90">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:underline">
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="mx-auto w-full max-w-5xl px-6 pb-16">{children}</main>
        <footer className="border-t border-white/10">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-8 text-sm opacity-80 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} guides.loanpaylogic.com — Educational guides only.</p>
            <nav className="flex flex-wrap gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mx-auto w-full max-w-5xl px-6 pb-8 text-xs opacity-60">
            <p className="mb-2">
              LoanPay Logic Network:{" "}
              <a className="underline" href="https://loanpaylogic.com">Mortgage &amp; Loan Calculators</a>{" "}
              · <a className="underline" href="https://tax.loanpaylogic.com">Tax Guides</a>{" "}
              · <a className="underline" href="https://credit.loanpaylogic.com">Credit &amp; Cards</a>{" "}
              · <a className="underline" href="https://retire.loanpaylogic.com">Retirement</a>{" "}
              · <a className="underline" href="https://save.loanpaylogic.com">Savings</a>
            </p>
            <p>
              We use cookies for site functions, measurement, and Google AdSense advertising. See our{" "}
              <Link className="underline" href="/privacy-policy">
                Privacy Policy
              </Link>{" "}
              for details and opt-out choices.
            </p>
          </div>
        </footer>
        <ConsentBanner />
        <OrgJsonLd />
        {/* Google Funding Choices (CMP): consent message configured in the AdSense console for pub-4906207495792820 (EEA/UK + US). This tag loads the message choice framework. */}
        <Script
          id="funding-choices"
          src="https://fundingchoicesmessages.google.com/i/pub-4906207495792820?ers=1"
          strategy="afterInteractive"
        />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4906207495792820"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
