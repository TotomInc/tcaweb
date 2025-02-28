"use client";

import type { TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { Label } from "@/components/ui/form/Label";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  className?: string;
  error?: string;
}

export function Textarea({ label, error, className, ...props }: TextareaProps) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <Label htmlFor={props.id}>{label}</Label>

      <textarea
        className={twMerge(
          "w-full rounded-sm border border-gray-200 px-3 py-2 text-base shadow-sm shadow-gray-900/5 transition duration-150 ease-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 focus:outline-none",
          className,
        )}
        {...props}
      />

      {error && <p className="text-sm font-medium tracking-tight text-red-700">{error}</p>}
    </div>
  );
}
