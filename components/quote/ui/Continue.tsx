"use client";

import { ArrowRightIcon } from "@heroicons/react/16/solid";

interface Props {
  content?: string;
  disabled?: boolean;
  onNext: () => void;
}

export function Continue({ onNext, content = "Continuer", disabled = false }: Props) {
  return (
    <button
      type="button"
      className="group relative flex cursor-pointer items-center justify-center gap-1.5 rounded-sm bg-blue-600 px-4 py-2 text-sm font-semibold tracking-tight text-white shadow-md ring inset-shadow-sm inset-ring ring-blue-600 inset-shadow-white/30 inset-ring-white/25 transition-colors duration-150 ease-out hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 disabled:opacity-50"
      disabled={disabled}
      onClick={onNext}
    >
      {content}

      <ArrowRightIcon className="size-4" />
    </button>
  );
}
