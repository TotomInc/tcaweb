"use client";

export function Progress({ current, total }: { current: number; total: number }) {
  const ratio = Math.max(0, Math.min(1, total > 0 ? current / total : 0));
  const percent = Math.round(ratio * 100);

  return (
    <div className="w-full">
      <div className="h-2 w-full rounded-full bg-gray-100">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="mt-2 text-right text-xs text-gray-500">{percent}%</div>
    </div>
  );
}
