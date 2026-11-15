import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(root, rel), "utf8");

const SELF_CANONICALS = {
  "about": "https://guides.loanpaylogic.com/about",
  "contact": "https://guides.loanpaylogic.com/contact",
  "privacy-policy": "https://guides.loanpaylogic.com/privacy-policy",
  "terms": "https://guides.loanpaylogic.com/terms",
  "disclaimer": "https://guides.loanpaylogic.com/disclaimer",
};

function extractCanonical(source, label) {
  const m = source.match(/canonical:\s*["']([^"']+)["']/);
  assert.ok(m, `${label}: machine-consumed alternates.canonical missing in source`);
  return m[1];
}

describe("canonical metadata (machine-consumed)", () => {
  for (const [slug, expected] of Object.entries(SELF_CANONICALS)) {
    it(`self canonical for /${slug} when page metadata resolves`, () => {
      // Given: the page source with exported metadata
      const source = read(`app/${slug}/page.tsx`);
      // When: resolving the machine-consumed alternates.canonical
      const actual = extractCanonical(source, slug);
      // Then: it is the page's own absolute HTTPS URL (not root fallback)
      assert.equal(actual, expected);
    });
  }

  it("preserves homepage canonical when home metadata resolves", () => {
    const source = read("app/page.tsx");
    const actual = extractCanonical(source, "home");
    assert.equal(actual, "https://guides.loanpaylogic.com/");
  });

  it("preserves guide canonical when fha guide metadata resolves", () => {
    const source = read("app/fha-loan-guide/page.tsx");
    const actual = extractCanonical(source, "fha-loan-guide");
    assert.equal(actual, "https://guides.loanpaylogic.com/fha-loan-guide");
  });

  it("preserves root layout fallback canonical when layout metadata resolves", () => {
    const source = read("app/layout.tsx");
    const actual = extractCanonical(source, "layout");
    assert.equal(actual, "/");
  });

  it("preserves legal sitemap URLs when sitemap routes resolve", () => {
    const source = read("app/sitemap.ts");
    for (const slug of Object.keys(SELF_CANONICALS)) {
      assert.ok(
        source.includes(`"/${slug}"`),
        `sitemap: expected legal route "/${slug}" to remain listed`,
      );
    }
  });
});
