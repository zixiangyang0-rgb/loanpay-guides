"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "guides-consent-choice-v1";

type Choice = "personalized" | "npa" | null;

function applyNpa(npa: boolean): void {
  try {
    const w = window as unknown as {
      adsbygoogle?: Array<Record<string, unknown>> & {
        requestNonPersonalizedAds?: number;
        pauseAdRequests?: number;
      };
    };
    w.adsbygoogle = w.adsbygoogle || [];
    // Google AdSense NPA signal: 1 = non-personalized only.
    w.adsbygoogle.requestNonPersonalizedAds = npa ? 1 : 0;
  } catch {
    // Ignore: consent storage may be unavailable.
  }
}

/**
 * Consent banner (NPA-first).
 * - "Accept" enables personalized ads.
 * - "Non-personalized" sets adsbygoogle.requestNonPersonalizedAds = 1.
 * - Choice persists in localStorage; reviewer can re-open via footer link.
 * - Google Funding Choices (CMP) is the authoritative consent layer;
 *   this banner is a lightweight fallback and never blocks content.
 */
export default function ConsentBanner() {
  const [choice, setChoice] = useState<Choice>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    if (stored === "personalized" || stored === "npa") {
      setChoice(stored);
      applyNpa(stored === "npa");
    } else {
      setVisible(true);
      // Default to NPA until the reader chooses (privacy-safe default).
      applyNpa(true);
    }
  }, []);

  function choose(next: Exclude<Choice, null>): void {
    setChoice(next);
    setVisible(false);
    applyNpa(next === "npa");
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore write failures (private mode).
    }
  }

  if (!visible) return null;
  void choice;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie and advertising consent"
      className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-5xl px-6 pb-4"
    >
      <div className="glass-panel rounded-2xl p-5 text-sm leading-relaxed">
        <p className="font-semibold">We use cookies &amp; ads to keep guides free</p>
        <p className="mt-2 opacity-80">
          guides.loanpaylogic.com shows Google AdSense ads. With your consent we
          use cookies for measurement and personalized advertising. Choose
          non-personalized to see ads without personalization. Read our{" "}
          <Link className="underline" href="/privacy-policy">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => choose("personalized")}
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => choose("npa")}
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/10"
          >
            Non-personalized only
          </button>
        </div>
      </div>
    </div>
  );
}
