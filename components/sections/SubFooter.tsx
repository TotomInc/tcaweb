"use client";

import { useState } from "react";

export function SubFooter() {
  const [date] = useState(() => new Date());

  return (
    <div className="bg-gray-900 py-4">
      <div className="mx-auto w-full max-w-7xl px-6">
        <p className="text-sm font-medium text-gray-400">
          © {date.getFullYear()} TCA Web. Tous droits réservés.
        </p>
      </div>
    </div>
  );
}
