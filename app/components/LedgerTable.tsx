import type { ReactNode } from "react";

/**
 * LedgerTable — guides-distinct comparison table frame (readable publication identity).
 * Pattern reuses retire RetireTableScroll (label-as-cue) and insurance
 * CoverageMatrix (scroll cue + region + tabIndex + sticky first col) read-only
 * as reference; styles are guides publication paper, not auto steel and not a
 * uniform copy: white #FFF surface, ink #26241F text, paper hairline #E4DCCB,
 * secondary #6B6355, focus #5A3E1B. Per-route distinct via `label` prop.
 */

type Props = {
  label: string;
  children: ReactNode;
};

export default function LedgerTable({ label, children }: Props) {
  return (
    <div data-ledger-table={label} className="g-ledger-block mt-4">
      <p aria-hidden="true" style={{ color: "#6B6355" }} className="text-xs">
        Scroll sideways to see all columns <span aria-hidden="true">→</span>
      </p>
      <div
        role="region"
        aria-label={label}
        tabIndex={0}
        style={{
          border: "1px solid #E4DCCB",
          borderRadius: 10,
          overflowX: "auto",
          background: "#FFFFFF",
        }}
        className="g-ledger-wrap mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A3E1B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBFAF6]"
      >
        {children}
      </div>
      <style>{`.g-ledger-wrap table{width:100%;min-width:560px;text-align:left;font-size:14px;color:#26241F;font-variant-numeric:tabular-nums;border-collapse:collapse;background:#fff}.g-ledger-wrap thead th{color:#6B6355;font-size:12px;text-transform:uppercase;letter-spacing:.06em}.g-ledger-wrap th,.g-ledger-wrap td{padding:12px 16px}.g-ledger-wrap tbody tr{border-top:1px solid #E4DCCB}.g-ledger-wrap tbody tr:hover{background:rgba(90,62,27,.05)}.g-ledger-wrap tbody th[scope="row"],.g-ledger-wrap tbody td:first-child{position:sticky;left:0;background:#fff;z-index:1;box-shadow:1px 0 0 #E4DCCB}@media (prefers-reduced-motion: reduce){.g-ledger-block *{transition:none!important;transform:none!important}}`}</style>
    </div>
  );
}
