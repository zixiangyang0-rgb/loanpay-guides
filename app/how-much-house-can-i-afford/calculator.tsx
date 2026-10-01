"use client";
import { useState } from "react";
export default function AffordCalc() {
  const [income, setIncome] = useState("120000");
  const [debts, setDebts] = useState("830");
  const [rate, setRate] = useState("6.9");
  const inc = Number(income) || 0;
  const housing28 = inc / 12 * 0.28;
  const back36 = inc / 12 * 0.36 - (Number(debts) || 0);
  const budget = Math.max(0, Math.min(housing28, back36));
  const r = (Number(rate) || 0) / 100 / 12;
  const n = 360;
  const factor = r > 0 ? (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : 1 / n;
  const loanEst = factor > 0 ? (budget * 0.78) / factor : 0;
  return (
    <div className="glass-card mt-6 rounded-2xl p-6">
      <h3 className="text-lg font-semibold">Affordability estimator</h3>
      <p className="mt-1 text-xs opacity-70">28% front-end vs 36% back-end. Rough estimate only.</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <label className="text-sm">Gross income ($/yr)<input className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2" value={income} onChange={(e) => setIncome(e.target.value)} inputMode="numeric" /></label>
        <label className="text-sm">Monthly debts ($)<input className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2" value={debts} onChange={(e) => setDebts(e.target.value)} inputMode="numeric" /></label>
        <label className="text-sm">Rate (%)<input className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2" value={rate} onChange={(e) => setRate(e.target.value)} inputMode="decimal" /></label>
      </div>
      <p className="mt-4 text-sm">Comfortable housing budget: <strong>${budget.toFixed(0)}/mo</strong> · Implied loan ≈ <strong>${loanEst.toFixed(0)}</strong> (before tax/ins haircut)</p>
    </div>
  );
}
