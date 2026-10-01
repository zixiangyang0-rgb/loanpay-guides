"use client";

import { useEffect, useRef } from "react";

export type AdFormat = "display" | "in-article" | "multiplex" | "anchor";

type AdSlotProps = {
  format: AdFormat;
  /** AdSense ad slot id. TODO-guides-* placeholders reserve space until replaced. */
  slot: string;
  className?: string;
  /** Optional label for dev placeholder / a11y. */
  label?: string;
};

const PUB_ID = "ca-pub-4906207495792820";

const MIN_HEIGHT: Record<AdFormat, number> = {
  display: 280,
  "in-article": 250,
  multiplex: 600,
  anchor: 90,
};

function isPlaceholder(slot: string): boolean {
  return slot.startsWith("TODO-") || slot.trim() === "";
}

/**
 * AdSlot — single AdSense unit with CLS-safe min-height.
 * - Max 5 ads per page (enforced by usage, not here).
 * - No interstitials: anchor renders a fixed bottom banner only
 *   when explicitly placed.
 */
export default function AdSlot({ format, slot, className = "", label }: AdSlotProps) {
  const insRef = useRef<HTMLModElement | null>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    if (isPlaceholder(slot)) return;
    if (pushedRef.current) return;
    pushedRef.current = true;
    try {
      const w = window as unknown as {
        adsbygoogle?: Array<Record<string, unknown>>;
      };
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
    } catch {
      // Ad blockers / CMP denial: leave the reserved box empty.
    }
  }, [slot]);

  if (isPlaceholder(slot)) {
    if (process.env.NODE_ENV === "production") {
      // Reserve layout space in prod without calling AdSense for TODO slots.
      return (
        <div
          aria-hidden="true"
          className={className}
          style={{ minHeight: MIN_HEIGHT[format], overflow: "hidden" }}
        />
      );
    }
    return (
      <div
        aria-label={label ?? `Ad placeholder ${format} ${slot}`}
        className={`flex items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 text-xs opacity-70 ${className}`}
        style={{ minHeight: MIN_HEIGHT[format], overflow: "hidden" }}
      >
        <span>
          Ad [{format}] · {slot} · {PUB_ID}
        </span>
      </div>
    );
  }

  if (format === "anchor") {
    return (
      <div
        className={`fixed inset-x-0 bottom-0 z-40 flex justify-center ${className}`}
        style={{ minHeight: MIN_HEIGHT.anchor }}
      >
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{ display: "block", width: "100%", minHeight: MIN_HEIGHT.anchor }}
          data-ad-client={PUB_ID}
          data-ad-slot={slot}
          data-ad-format="horizontal"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  if (format === "in-article") {
    return (
      <div className={className} style={{ minHeight: MIN_HEIGHT["in-article"], overflow: "hidden" }}>
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center", minHeight: MIN_HEIGHT["in-article"] }}
          data-ad-client={PUB_ID}
          data-ad-slot={slot}
          data-ad-layout="in-article"
          data-ad-format="fluid"
        />
      </div>
    );
  }

  if (format === "multiplex") {
    return (
      <div className={className} style={{ minHeight: MIN_HEIGHT.multiplex, overflow: "hidden" }}>
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{ display: "block", minHeight: MIN_HEIGHT.multiplex }}
          data-ad-client={PUB_ID}
          data-ad-slot={slot}
          data-ad-format="autorelaxed"
        />
      </div>
    );
  }

  // display (default): responsive display unit
  return (
    <div className={className} style={{ minHeight: MIN_HEIGHT.display, overflow: "hidden" }}>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block", minHeight: MIN_HEIGHT.display }}
        data-ad-client={PUB_ID}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
