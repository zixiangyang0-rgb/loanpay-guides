import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Practical Guides on Mortgages, Loans & Debt Strategy",
  description:
    "Browse 30 plain-English guides from guides.loanpaylogic.com covering mortgages, FHA, VA, USDA, jumbo, refinance, auto, personal, student loans, and debt payoff strategy.",
  alternates: {
    canonical: "https://guides.loanpaylogic.com/",
  },
};

type Guide = {
  title: string;
  excerpt: string;
  href: string;
};

type Group = {
  heading: string;
  blurb: string;
  guides: Guide[];
};

const groups: Group[] = [
  {
    heading: "Mortgages",
    blurb: "Payments, qualification, loan programs, and refinance math.",
    guides: [
      {
        title: "Mortgage Payment Guide",
        excerpt: "Principal, interest, taxes, insurance, and PMI — what each dollar does with a $400,000 example.",
        href: "/mortgage-payment-guide",
      },
      {
        title: "Amortization Schedule Explained",
        excerpt: "How every payment splits over 30 years and why early extra payments save the most.",
        href: "/amortization-schedule-explained",
      },
      {
        title: "APR vs APY Guide",
        excerpt: "Borrowing cost versus savings yield: compounding, fees, and side-by-side comparisons.",
        href: "/apr-vs-apy-guide",
      },
      {
        title: "Fixed vs Adjustable-Rate Mortgage",
        excerpt: "30-year, 15-year, and 5/6 ARM caps compared with a $400,000 worked decision.",
        href: "/fixed-vs-adjustable-mortgage",
      },
      {
        title: "How Much House Can I Afford?",
        excerpt: "The 28/36 rule, DTI math, and a $120,000-income example with an estimator.",
        href: "/how-much-house-can-i-afford",
      },
      {
        title: "FHA Loan Guide 2026",
        excerpt: "3.5% down, $541,287 floor and $1,249,125 ceiling, upfront and annual MIP explained.",
        href: "/fha-loan-guide",
      },
      {
        title: "VA Loan Guide 2026",
        excerpt: "Zero down, no PMI, funding fees, and entitlement — plus a $400,000 example.",
        href: "/va-loan-guide",
      },
      {
        title: "USDA Loan Guide 2026",
        excerpt: "Zero-down rural loans: maps, income limits, guarantee fees, and a $280,000 example.",
        href: "/usda-loan-guide",
      },
      {
        title: "Jumbo Loan Guide 2026",
        excerpt: "Above $832,750: qualification, reserves, rates, and a $1.1M worked example.",
        href: "/jumbo-loan-guide",
      },
      {
        title: "Mortgage Refinance Guide",
        excerpt: "Break-even math, closing costs, term traps, and a $380,000 refinance example.",
        href: "/mortgage-refinance-guide",
      },
      {
        title: "Cash-Out Refinance Guide",
        excerpt: "Equity limits, rate premiums, tax notes, and a $420,000 cash-out example.",
        href: "/cash-out-refinance-guide",
      },
      {
        title: "Mortgage Points Guide",
        excerpt: "Discount points versus lender credits with break-even timing on $400,000.",
        href: "/mortgage-points-guide",
      },
      {
        title: "PMI Removal Guide",
        excerpt: "Cancel at 80%, auto-drop at 78%, appraisal paths, and FHA MIP differences.",
        href: "/pmi-removal-guide",
      },
      {
        title: "Escrow Explained",
        excerpt: "Taxes, insurance, cushions, and shortage notices — why fixed-rate payments move.",
        href: "/escrow-explained",
      },
      {
        title: "Debt-to-Income Ratio Guide",
        excerpt: "Front-end vs back-end DTI, program ceilings, and a $9,000-income example.",
        href: "/debt-to-income-ratio-guide",
      },
      {
        title: "Credit Score Mortgage Guide",
        excerpt: "Score tiers, rate gaps, and fast legitimate wins before you apply.",
        href: "/credit-score-mortgage-guide",
      },
      {
        title: "Preapproval vs Prequalification",
        excerpt: "What sellers trust, which documents to gather, and how to protect approval.",
        href: "/preapproval-vs-prequalification",
      },
      {
        title: "Closing Costs Guide",
        excerpt: "Lender, title, government, and prepaid buckets with a $400,000 line-by-line example.",
        href: "/closing-costs-guide",
      },
      {
        title: "Biweekly Mortgage Payments",
        excerpt: "26 half-payments create a 13th payment yearly — payoff and savings on $350,000.",
        href: "/biweekly-mortgage-payments",
      },
      {
        title: "Loan Origination Fees Guide",
        excerpt: "Section A decoded: points, flats, credits, and a $360,000 shopping example.",
        href: "/loan-origination-fees-guide",
      },
      {
        title: "HELOC Explained",
        excerpt: "Draw vs repayment periods, variable rates, and an $80,000 line example.",
        href: "/heloc-explained",
      },
      {
        title: "Home Equity Loan vs HELOC",
        excerpt: "Lump sum or credit line? Fixed vs variable with a $60,000 decision example.",
        href: "/home-equity-loan-vs-heloc",
      },
    ],
  },
  {
    heading: "Auto & Personal",
    blurb: "Car loans, personal loans, cosigners, and balloon structures.",
    guides: [
      {
        title: "Auto Loan Guide",
        excerpt: "Rates by credit tier, term traps, dealer markup, and a $32,000 worked purchase.",
        href: "/auto-loan-guide",
      },
      {
        title: "Personal Loan Guide",
        excerpt: "APRs, origination fees, good vs bad uses, and a $12,000 consolidation example.",
        href: "/personal-loan-guide",
      },
      {
        title: "Cosigner Loan Guide",
        excerpt: "Equal liability, credit effects, release paths, and safer alternatives.",
        href: "/cosigner-loan-guide",
      },
      {
        title: "Balloon Payment Guide",
        excerpt: "Low payments plus one big bill: mechanics, refinance risk, and a $300,000 example.",
        href: "/balloon-payment-guide",
      },
    ],
  },
  {
    heading: "Student",
    blurb: "Refinancing federal versus private loans without regret.",
    guides: [
      {
        title: "Student Loan Refinance Guide",
        excerpt: "When refinancing helps or hurts, protections traded, and a $45,000 example.",
        href: "/student-loan-refinance-guide",
      },
    ],
  },
  {
    heading: "Debt strategy",
    blurb: "Payoff methods, emergency borrowing, and cash planning.",
    guides: [
      {
        title: "Debt Snowball vs Avalanche",
        excerpt: "Smallest-first momentum versus highest-rate math with an $18,000 example.",
        href: "/debt-snowball-vs-avalanche",
      },
      {
        title: "Payday Loan Alternatives",
        excerpt: "Ten cheaper ways to cover a gap with a $500 cost comparison table.",
        href: "/payday-loan-alternatives",
      },
      {
        title: "Emergency Fund vs Debt Payoff",
        excerpt: "The staged order that funds both: buffer, high-rate debt, full fund.",
        href: "/emergency-fund-vs-debt-payoff",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="glass-panel rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">
          guides.loanpaylogic.com
        </p>
        <h1 className="hero-title mt-3 text-4xl font-bold leading-tight sm:text-5xl">
          Practical Guides for Smarter Money Decisions
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed opacity-80">
          LoanPay Guides explains mortgages, auto and personal loans, student
          refinancing, and debt strategy in plain English — 30 full
          educational guides with worked numbers, comparison tables, and
          checklists. Pair any guide with the free calculators on{" "}
          <a className="underline" href="https://loanpaylogic.com/">
            loanpaylogic.com
          </a>
          .
        </p>
      </section>

      {groups.map((group) => (
        <section key={group.heading}>
          <h2 className="text-2xl font-semibold">{group.heading}</h2>
          <p className="mt-2 text-sm opacity-70">{group.blurb}</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.guides.map((guide) => (
              <article key={guide.href} className="glass-card flex flex-col rounded-2xl p-6">
                <h3 className="text-lg font-semibold leading-snug">{guide.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed opacity-80">{guide.excerpt}</p>
                <Link
                  href={guide.href}
                  className="mt-5 inline-flex w-fit items-center rounded-full border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/10"
                >
                  Read guide
                </Link>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="glass-panel rounded-3xl p-8">
        <h2 className="text-xl font-semibold">Why learn with LoanPay Guides?</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Every guide on guides.loanpaylogic.com is written for real life: how
          mortgage payments actually change with taxes and insurance, how
          amortization front-loads interest, how FHA, VA, USDA, and jumbo
          programs differ in 2026, and how payoff order changes total cost.
          Our editors research each topic from public sources such as FHFA,
          HUD, the VA, and the Federal Reserve, explain the numbers with
          worked examples, and link to matching loanpaylogic.com calculators
          so you can test your own figures. Bookmark this hub and work
          through the sections most relevant to your next decision.
        </p>
        <p className="mt-4 rounded-xl border border-amber-200/30 bg-amber-100/10 p-4 text-sm leading-relaxed">
          <strong>Disclaimer note:</strong> Content on this site is for general
          educational purposes only and is not financial, legal, or tax advice.
          Everyone&apos;s situation is different — please do your own research
          or speak with a qualified professional before making money decisions.
        </p>
      </section>
    </div>
  );
}
