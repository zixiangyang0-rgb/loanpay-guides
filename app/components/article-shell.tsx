type ArticleShellProps = {
  children: React.ReactNode;
};

/**
 * ArticleShell — shared opt-in wrapper for the 30 guide interiors.
 * Applies the Explanatory Publication reading scope (.g-article: paper
 * #FBFAF6 + Palatino headlines) without touching copy, links, metadata,
 * AdSlot positions, or GuideSchema. Dark calculator islands keep
 * .glass-card + .g-tool-island and are explicitly exempted from the
 * paper treatment in globals.css. No photo, no new deps.
 */
export function ArticleShell({ children }: ArticleShellProps) {
  return <div className="g-article flex flex-col gap-8">{children}</div>;
}
