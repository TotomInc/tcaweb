"use client";

interface Props {
  content?: string;
  onBack: () => void;
}

export function Back({ onBack, content = "Retour" }: Props) {
  return (
    <button
      type="button"
      className="flex cursor-pointer items-center gap-1.5 rounded-sm px-4 py-2 text-sm font-semibold text-blue-950 hover:underline"
      onClick={onBack}
    >
      {content}
    </button>
  );
}
