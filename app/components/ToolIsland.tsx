import type { ReactNode } from "react";

/**
 * ToolIsland — guides-distinct estimator island (readable publication identity).
 * Structure reuses the auto ToolIsland pattern read-only (accessible frame with
 * labelled section + DEMO badge + methodology line + focus-visible ring +
 * reduced-motion guard); visual tokens are guides publication, NOT auto steel:
 * Palatino serif title on ivory, sand #D9C9A8 badge/focus (dark-safe ≥7:1),
 * paper hairline #E4DCCB edge. The dark navy core is kept so existing
 * estimators (white-ink inputs) stay readable inside the paper reading surface.
 * Wraps an existing estimator WITHOUT touching its formula. Per-route distinct
 * via `islandId` + `title` + `method` props (no uniform copy).
 */

type Props = {
  islandId: string;
  title: string;
  method: string;
  children: ReactNode;
};

export default function ToolIsland({ islandId, title, method, children }: Props) {
  return (
    <section
      data-tool-island={islandId}
      aria-label={title}
      style={{
        background: "linear-gradient(180deg, rgba(8, 15, 28, 0.95), rgba(4, 9, 18, 0.86))",
        border: "1px solid #E4DCCB",
        borderRadius: 12,
        padding: 20,
      }}
      className="g-tool mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9C9A8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111F]"
    >
      <div className="flex flex-wrap items-center gap-2">
        <h3
          style={{
            color: "#F7F4EE",
            fontFamily: 'Palatino, "Palatino Linotype", "Book Antiqua", Charter, Georgia, serif',
          }}
          className="text-base font-semibold"
        >
          {title}
        </h3>
        <span
          style={{
            color: "#26241F",
            background: "#D9C9A8",
            borderRadius: 4,
            fontVariantNumeric: "tabular-nums",
          }}
          className="px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em]"
        >
          Demo
        </span>
      </div>
      <p style={{ color: "#A8B3C4" }} className="mt-1 text-xs leading-relaxed">
        {method} Illustrative arithmetic only — not a rate, quote, or offer.
      </p>
      <div className="mt-3 [&_input]:focus-visible:outline-none [&_input]:focus-visible:ring-2 [&_input]:focus-visible:ring-[#D9C9A8] [&_input]:focus-visible:ring-offset-1 [&_input]:focus-visible:ring-offset-[#04090F]">
        {children}
      </div>
      <style>{`@media (prefers-reduced-motion: reduce){.g-tool *{transition:none!important;transform:none!important}}`}</style>
    </section>
  );
}
