import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Practical Guides on Mortgages, Saving & Everyday Money Decisions",
  description:
    "Browse starter guides from guides.loanpaylogic.com covering mortgage recast vs refinance, the FIRE 4 percent rule, FBA storage fees, volumetric weight, time zone meetings, and rent vs buy.",
};

type Guide = {
  title: string;
  excerpt: string;
  href: string;
};

const guides: Guide[] = [
  {
    title: "Mortgage Recast vs Refinance: Which One Saves You More?",
    excerpt:
      "A recast keeps your current loan and lowers the monthly payment after a lump sum, while a refinance replaces the loan entirely. Learn how fees, interest rates, and timing decide which option fits your budget.",
    href: "/mortgage-recast-vs-refinance",
  },
  {
    title: "FIRE 4 Percent Rule Explained in Plain English",
    excerpt:
      "The 4 percent rule is a starting point for estimating how much you may need to retire early. See how the math works, why withdrawal flexibility matters, and what the rule does not guarantee.",
    href: "/fire-4-percent-rule-explained",
  },
  {
    title: "FBA Storage Fees 2026: What Sellers Should Know",
    excerpt:
      "Amazon charges sellers for the warehouse space their inventory occupies, with rates that vary by size tier and season. This guide breaks down the fee logic so you can plan inventory and avoid surprises.",
    href: "/fba-storage-fees-2026",
  },
  {
    title: "Volumetric Weight Basics for Shipping Parcels",
    excerpt:
      "Carriers charge by actual weight or dimensional weight, whichever is greater. Discover the standard formula, how to measure a box correctly, and simple ways to reduce billable weight.",
    href: "/volumetric-weight-basics",
  },
  {
    title: "Time Zone Meeting Tips for Distributed Teams",
    excerpt:
      "Scheduling across continents is easier with rotating times, core overlap hours, and written-first updates. Follow these practical habits to run fair meetings without burning out one side of the team.",
    href: "/time-zone-meeting-tips",
  },
  {
    title: "Rent vs Buy Decision: A Calm Framework That Works",
    excerpt:
      "Buying is not automatically better than renting, and renting is not throwing money away. Compare monthly costs, time horizon, and lifestyle flexibility with a simple framework before you decide.",
    href: "/rent-vs-buy-decision",
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
          LoanPay Guides explains mortgages, saving strategies, small-business
          costs, and everyday planning topics in plain English — no jargon, no
          hype, just step-by-step educational walkthroughs.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Starter guides</h2>
        <p className="mt-2 text-sm opacity-70">
          Six reader favorites to get you started. Full articles are coming soon.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
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

      <section className="glass-panel rounded-3xl p-8">
        <h2 className="text-xl font-semibold">Why learn with LoanPay Guides?</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Every guide on guides.loanpaylogic.com is written for real life: how
          mortgage payments actually change after a recast, how retirement math
          holds up when markets move, how warehouse and shipping fees quietly
          eat into margins, and how housing and scheduling choices shape your
          week. Our editors research each topic from public sources and explain
          the numbers with worked examples, so you can compare options with
          confidence and ask better questions before talking to a lender,
          advisor, or carrier. Bookmark this hub and check back as we publish
          full-length tutorials, checklists, and calculators for each theme.
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
