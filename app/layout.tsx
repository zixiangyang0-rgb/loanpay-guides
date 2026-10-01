import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
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
        </footer>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4906207495792820"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
