"use client";

import { QuoteForm } from "@/components/quote/QuoteForm";

export function Quote() {
  return (
    <div className="mx-auto flex w-full max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 shadow-xl shadow-gray-900/5">
      <div className="w-full">
        <QuoteForm />
      </div>
    </div>
  );
}
