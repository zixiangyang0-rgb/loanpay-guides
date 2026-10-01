"use client";

import { useState } from "react";

export default function PaymentCalculator() {
  const [amount, setAmount] = useState("320000");
  const [rate, setRate] = useState("6.75");
  const [tax, setTax] = useState("4400");
  const [ins, setIns] = useState("1800");

  const p = Number(amount) || 0;
  const r = (Number(rate) || 0) / 100 / 12;
  const n = 360;
  const pi = r > 0 ? (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : p / n;
  const total = pi + (Number(tax) || 0) / 12 + (Number(ins) || 0) / 12;

  return (
    <div className="glass-card mt-6 rounded-2xl p-6">
      <h3 className="text-lg font-semibold">Quick payment estimator</h3>
      <p className="mt-1 text-xs opacity-70">Principal &amp; interest plus monthly tax and insurance. Estimate only.</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-sm">
          Loan amount ($)
          <input
            className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            inputMode="numeric"
          />
        </label>
        <label className="text-sm">
          Rate (% APR-ish)
          <input
            className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            inputMode="decimal"
          />
        </label>
        <label className="text-sm">
          Annual tax ($)
          <input
            className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2"
            value={tax}
            onChange={(e) => setTax(e.target.value)}
            inputMode="numeric"
          />
        </label>
        <label className="text-sm">
          Annual insurance ($)
          <input
            className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2"
            value={ins}
            onChange={(e) => setIns(e.target.value)}
            inputMode="numeric"
          />
        </label>
      </div>
      <p className="mt-4 text-sm">
        P&amp;I: <strong>${pi.toFixed(0)}</strong>/mo · Total with tax + ins:{" "}
        <strong>${total.toFixed(0)}</strong>/mo
      </p>
    </div>
  );
}
