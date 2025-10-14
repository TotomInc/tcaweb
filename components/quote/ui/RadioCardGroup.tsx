"use client";

import { CheckIcon } from "@heroicons/react/16/solid";
import { Controller } from "react-hook-form";
import type { Control, Path } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface Option {
  label: string;
  value: string;
  description?: string;
}

export function RadioCardGroup<TFieldValues extends Record<string, unknown>>({
  control,
  name,
  options,
  className,
}: {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  options: Option[];
  className?: string;
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className={twMerge("grid gap-3", className)}>
          {options.map((opt) => {
            const selected = field.value === opt.value;

            return (
              <button
                key={opt.value}
                type="button"
                aria-pressed={selected}
                className={twMerge(
                  "w-full cursor-pointer rounded-xl border p-4 text-left transition",
                  selected
                    ? "border-blue-700 bg-blue-700/5 shadow"
                    : "border-gray-200 hover:border-gray-300",
                )}
                onClick={() => field.onChange(opt.value)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium lg:text-base">{opt.label}</div>

                    {opt.description ? (
                      <div className="text-xs text-gray-500 lg:text-sm">{opt.description}</div>
                    ) : null}
                  </div>

                  <div
                    aria-hidden
                    className={twMerge(
                      "flex size-5 shrink-0 items-center justify-center rounded-full border text-blue-700",
                      selected ? "border-blue-700" : "border-gray-300",
                    )}
                  >
                    {selected ? <CheckIcon className="size-3.5" /> : null}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    />
  );
}
